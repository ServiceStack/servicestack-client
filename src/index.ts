import 'isomorphic-fetch'

export interface IReturnVoid {
    createResponse();
}
export interface IReturn<T> {
    createResponse(): T;
}
export class ResponseStatus {
    errorCode: string;
    message: string;
    stackTrace: string;
    errors: ResponseError[];
    meta: { [index: string]: string; };
}
export class ResponseError {
    errorCode: string;
    fieldName: string;
    message: string;
    meta: { [index: string]: string; };
}
export class ErrorResponse {
    responseStatus: ResponseStatus;
}

export interface IResolver
{
    tryResolve(Function): any;
}

export class NewInstanceResolver implements IResolver {
    tryResolve(ctor:ObjectConstructor): any {
        return new ctor();
    }
}

export class SingletonInstanceResolver implements IResolver {
    static cache: { [index:string]: any } = {};

    tryResolve(ctor:ObjectConstructor): any {
        var name = ctor.name;
        return SingletonInstanceResolver.cache[name] 
            || (SingletonInstanceResolver.cache[name] = new ctor());
    }
}

export interface ServerEventMessage {
    type: "ServerEventConnect" | "ServerEventHeartbeat" | "ServerEventJoin" | "ServerEventLeave" | "ServerEventUpdate" | "ServerEventMessage";
    eventId: number;
    channel: string;
    data: string;
    selector: string;
    json: string;
    op: string;
    target: string;
    cssSelector: string;
    meta: { [index:string]: string; };
}

export interface ServerEventCommand extends ServerEventMessage {
    userId: string;
    displayName: string;
    channels: string;
    profileUrl: string;
}

export interface ServerEventConnect extends ServerEventCommand {
    id: string;
    unRegisterUrl: string;
    heartbeatUrl: string;
    updateSubscriberUrl: string;
    heartbeatIntervalMs: number;
    idleTimeoutMs: number;
}

export interface ServerEventHeartbeat extends ServerEventCommand { }
export interface ServerEventJoin extends ServerEventCommand { }
export interface ServerEventLeave extends ServerEventCommand { }
export interface ServerEventUpdate extends ServerEventCommand { }

const TypeMap = {
    onConnect: "ServerEventConnect",
    onHeartbeat: "ServerEventHeartbeat",
    onJoin: "ServerEventJoin",
    onLeave: "ServerEventLeave",
    onUpdate: "ServerEventUpdate"
};

export interface IReconnectServerEventsOptions {
    url?: string;
    onerror?: (...args: any[]) => void;
    onmessage?: (...args: any[]) => void;
    errorArgs?: any[];
}

/**
 * EventSource
 */
export enum ReadyState { CONNECTING = 0, OPEN = 1, CLOSED = 2 }

export interface IEventSourceStatic extends EventTarget {
    new (url: string, eventSourceInitDict?: IEventSourceInit): IEventSourceStatic;
    url: string;
    withCredentials: boolean;
    CONNECTING: ReadyState; // constant, always 0
    OPEN: ReadyState; // constant, always 1
    CLOSED: ReadyState; // constant, always 2
    readyState: ReadyState;
    onopen: Function;
    onmessage: (event: IOnMessageEvent) => void;
    onerror: Function;
    close: () => void;
}

export interface IEventSourceInit {
    withCredentials?: boolean;
}

export interface IOnMessageEvent {
    data: string;
}

declare var EventSource: IEventSourceStatic;

export interface IEventSourceOptions {
    channels?: string,
    handlers?: any,
    receivers?: any,
    triggers?: any,
    onTick?: Function,
    resolver?: IResolver,
    autoStart?: boolean,
    validate?: (op?:string, target?:string, msg?:any, json?:string) => boolean,
    heartbeatUrl?: string,
    unRegisterUrl?: string,
    updateSubscriberUrl?: string,
    heartbeatIntervalMs?: number,
    heartbeat?: number,
}

export class ServerEventsClient {
    static UnknownChannel = "*";
    eventSourceUrl: string;
    updateSubscriberUrl: string;
    connectionInfo: ServerEventConnect;
    serviceClient: JsonServiceClient;
    closed: boolean;
    resolver: IResolver;

    constructor(
        baseUrl: string,
        public channels: string[],
        public options: IEventSourceOptions = {},
        public eventSource: IEventSourceStatic = null) {
        if (this.channels.length === 0)
            throw "at least 1 channel is required";

        this.resolver = this.options.resolver || new NewInstanceResolver();

        this.eventSourceUrl = combinePaths(baseUrl, "event-stream") + "?";
        this.updateChannels(channels);
        this.serviceClient = new JsonServiceClient(baseUrl);

        if (!this.options.handlers)
            this.options.handlers = {};

        if (this.options.autoStart !== false)
            this.start();
    }

    onMessage(e: IOnMessageEvent) {
        if (this.closed) return;
        var opt = this.options;

        if (typeof document == "undefined") {
            var document:any = { //node
                querySelectorAll: sel => []
            };
        }

        var parts = splitOnFirst(e.data, " ");
        var channel = null;
        var selector = parts[0];
        var selParts = splitOnFirst(selector, "@");
        if (selParts.length > 1) {
            channel = selParts[0];
            selector = selParts[1];
        }
        const json = parts[1];
        var msg = json ? JSON.parse(json) : null;

        parts = splitOnFirst(selector, ".");
        if (parts.length <= 1)
            throw "invalid selector format: " + selector;

        var op = parts[0],
            target = parts[1].replace(new RegExp("%20", "g"), " ");

        if (opt.validate && opt.validate(op, target, msg, json) === false)
            return;

        const tokens = splitOnFirst(target, "$");
        const [cmd, cssSelector] = tokens;
        const els = cssSelector && document.querySelectorAll(cssSelector);
        const el = els && els[0];

        const eventId = (e as any).lastEventId;
        const data = e.data;
        const type = TypeMap[cmd] || "ServerEventMessage";
        const request:ServerEventMessage = { eventId, data, type, 
            channel, selector, json, op, target:tokens[0], cssSelector, meta:{} };

        if (msg && typeof msg != "string") {
            Object.assign(msg, request);
        }

        var headers = new Headers();
        headers.set("Content-Type", "text/plain");

        if (op === "cmd") {
            if (cmd === "onConnect") {
                this.connectionInfo = msg;
                if (typeof msg.heartbeatIntervalMs == "string")
                    this.connectionInfo.heartbeatIntervalMs = parseInt(msg.heartbeatIntervalMs);
                if (typeof msg.idleTimeoutMs == "string")
                    this.connectionInfo.idleTimeoutMs = parseInt(msg.idleTimeoutMs);

                Object.assign(opt, msg);

                var fn = opt.handlers["onConnect"];
                if (fn){
                    fn.call(el || document.body, this.connectionInfo, e);
                }

                if (opt.heartbeatUrl) {
                    if (opt.heartbeat) {
                        clearInterval(opt.heartbeat);
                    }
                    opt.heartbeat = setInterval(() => {
                        if (this.eventSource.readyState === EventSource.CLOSED)
                        {
                            clearInterval(opt.heartbeat);
                            const stopFn = opt.handlers["onStop"];
                            if (stopFn != null)
                                stopFn.apply(this.eventSource);
                            this.reconnectServerEvents({ errorArgs: { error: "CLOSED" } });
                            return;
                        }

                        fetch(new Request(opt.heartbeatUrl, { method: "POST", mode: "cors", headers: headers }))
                            .then(res => {
                                if (!res.ok)
                                    throw res;
                            })
                            .catch(res => {
                                this.reconnectServerEvents({ errorArgs: [res] });
                            });
                    }, (this.connectionInfo && this.connectionInfo.heartbeatIntervalMs) || opt.heartbeatIntervalMs || 10000);
                }
                if (opt.unRegisterUrl) {
                    if (typeof window != "undefined") {
                        window.onunload = () => this.close();
                    }
                }
                this.updateSubscriberUrl = opt.updateSubscriberUrl;
                this.updateChannels((opt.channels || "").split(","));
            } else {
                var isCmdMsg = cmd == "onJoin" || cmd == "onLeave" || cmd == "onUpdate";
                var fn = opt.handlers[cmd];
                if (fn) {
                    fn.call(el || document.body, msg, e);
                } else {
                    if (!isCmdMsg) { //global receiver
                        var r = opt.receivers && opt.receivers["cmd"];
                        this.invokeReceiver(r, cmd, el, msg, request, "cmd");
                    }
                }            
                if (isCmdMsg) {
                    fn = opt.handlers["onCommand"];
                    if (fn) {
                        fn.call(el || document.body, msg, e);
                    }
                }
            }
        }
        else if (op === "trigger") {
            //$(el || document).trigger(cmd, [msg, e]); //no jQuery
            if (opt.triggers && opt.triggers[cmd] == typeof "function") {
                opt.triggers[cmd].call(el || document, msg, e);
            }
        }
        else if (op === "css") {
            css(els || document.querySelectorAll("body"), cmd, msg);
        }

        //Named Receiver
        var r = opt.receivers && opt.receivers[op];
        this.invokeReceiver(r, cmd, el, msg, request, op);

        if (!TypeMap[cmd])
        {
            var fn = opt.handlers["onMessage"];
            if (fn) {
                fn.call(el || document.body, msg, e);
            }
        }

        if (opt.onTick) 
            opt.onTick();
    }

    onError(e:any){
        if (this.closed) return;
        if (!e)
            e = event;
        var fn = this.options.handlers["onException"];
        if (fn != null)
            fn.apply(this.eventSource, e);                        

        if (this.options.onTick) 
            this.options.onTick();
    }

    reconnectServerEvents(opt: any = {}) {
        if (this.closed) return;

        this.onError(opt.errorArgs && opt.errorArgs[0]);

        const hold = this.eventSource;
        const es = new EventSource(opt.url || this.eventSourceUrl || hold.url);
        es.onerror = opt.onerror || hold.onerror;
        es.onmessage = opt.onmessage || hold.onmessage;
        var fn = this.options.handlers["onReconnect"];
        if (fn != null)
            fn.apply(es, opt.errorArgs);
        hold.close();
        return this.eventSource = es;
    }

    start() {
        if (this.eventSource == null || this.eventSource.readyState === EventSource.CLOSED) {
            this.eventSource = new EventSource(this.eventSourceUrl);
            this.eventSource.onmessage = this.onMessage.bind(this);
            this.eventSource.onerror = this.onError.bind(this);
        }
    }

    close() {
        this.closed = true;

        if (this.eventSource) {
            this.eventSource.close();
        }

        var hold = this.connectionInfo;
        if (hold == null || hold.unRegisterUrl == null)
            return new Promise((resolve, reject) => resolve());

        this.connectionInfo = null;
        return fetch(new Request(hold.unRegisterUrl, { method: "POST", mode: "cors" }));
    }

    invokeReceiver(r:any, cmd:string, el:Element, msg:any, e:ServerEventMessage, name:string) {
        if (r) {
            if (typeof r == "function") {
                r = this.resolver.tryResolve(r);
            }
            cmd = cmd.replace("-","");
            r.client = this;
            r.request = e;
            if (typeof (r[cmd]) == "function") {
                r[cmd].call(el || r, msg, e);
            } else if (cmd in r) {
                r[cmd] = msg;
            } else {
                var cmdLower = cmd.toLowerCase();
                for (var k in r) {
                    if (k.toLowerCase() == cmdLower) {
                        if (typeof r[k] == "function") {
                            r[k].call(el || r, msg, e);
                        } else {
                            r[k] = msg;
                        }
                        return;
                    }
                }

                var noSuchMethod = r["noSuchMethod"];
                if (typeof noSuchMethod == "function") {
                    noSuchMethod.call(el || r, msg.target, msg);
                }
            }
        }
    }

    hasConnected() {
        return this.connectionInfo != null;
    }

    registerHandler(name:string, fn:Function) {
        if (!this.options.handlers)
            this.options.handlers = {};

        this.options.handlers[name] = fn;
        return this;
    }

    registerReceiver(receiver:any){
        return this.registerNamedReceiver("cmd", receiver);
    }

    registerNamedReceiver(name:string, receiver:any) {
        if (!this.options.receivers)
            this.options.receivers = {};

        this.options.receivers[name] = receiver;
        return this;
    }

    unregisterReceiver(name:string = "cmd") {
        if (this.options.receivers) {
            delete this.options.receivers[name];
        }
        return this;
    }

    updateChannels(channels:string[]) {
        this.channels = channels;
        const url = this.eventSource != null
            ? this.eventSource.url
            : this.eventSourceUrl;
        this.eventSourceUrl = url.substring(0, Math.min(url.indexOf("?"), url.length)) + "?channels=" + channels.join(",") + "&t=" + new Date().getTime();
    }

    updateSubscriberInfo(subscribe:string|string[], unsubscribe:string|string[]) {
        var sub = typeof subscribe == "string" ? subscribe.split(',') : subscribe;
        var unsub = typeof unsubscribe == "string" ? unsubscribe.split(',') : unsubscribe;
        var channels = [];
        for (var i in this.channels) {
            var c = this.channels[i];
            if (unsub == null || unsub.indexOf(c) === -1) {
                channels.push(c);
            }
        }
        if (sub) {
            for (var i in sub) {
                var c = sub[i];
                if (channels.indexOf(c) === -1) {
                    channels.push(c);
                }
            }
        }
        this.updateChannels(channels);
    }

    getConnectionInfo(){
        if (this.connectionInfo == null)
            throw "Not Connected";

        return this.connectionInfo;
    }

    getSubscriptionId() {
        return this.getConnectionInfo().id;
    }

    updateSubscriber(request:UpdateEventSubscriber) {
        if (request.id == null)
            request.id = this.getSubscriptionId();

        return this.serviceClient.post(request)
            .then(x => {
                this.updateSubscriberInfo(request.subscribeChannels, request.unsubscribeChannels);
                return null;
            });
    }
    
    subscribeToChannels(channels:string[]) {
        let request = new UpdateEventSubscriber();
        request.id = this.getSubscriptionId();
        request.subscribeChannels = channels;

        return this.serviceClient.post(request)
            .then(x => {
                this.updateChannels(channels);
            });
    }
    
    unsubscribeFromChannels(channels:string[]) {
        let request = new UpdateEventSubscriber();
        request.id = this.getSubscriptionId();
        request.unsubscribeChannels = channels;

        return this.serviceClient.post(request)
            .then(x => {
                this.updateChannels(channels);
            });
    }

    getChannelSubscribers(): Promise<ServerEventUser[]> {
        let request = new GetEventSubscribers();
        request.channels = this.channels;

        return this.serviceClient.get(request)
            .then(r => r.map(x => this.toServerEventUser(x)));
    }

    toServerEventUser(map: { [id: string] : string; }): ServerEventUser {
        var channels = map["channels"];
        var to = new ServerEventUser();
        to.userId = map["userId"];
        to.displayName = map["displayName"];
        to.profileUrl = map["profileUrl"];
        to.channels = channels ? channels.split(',') : null;

        for (var k in map) {
            if (k == "userId" || k == "displayName" ||
                k == "profileUrl" || k == "channels") 
                continue;

            if (to.meta == null)
                to.meta = {};

            to.meta[k] = map[k];
        }
        return to;
    } 
}

export interface IReceiver {
    noSuchMethod(selector: string, message:any);
}

export class ServerEventReceiver implements IReceiver {
    public client: ServerEventsClient;
    public request: ServerEventMessage;

    noSuchMethod(selector: string, message:any) {}
}

export class UpdateEventSubscriber implements IReturn<UpdateEventSubscriberResponse>
{
    id: string;
    subscribeChannels: string[];
    unsubscribeChannels: string[];
    createResponse() { return new UpdateEventSubscriberResponse(); }
    getTypeName() { return "UpdateEventSubscriber"; }
}

export class UpdateEventSubscriberResponse
{
    responseStatus: ResponseStatus;
}

export class GetEventSubscribers implements IReturn<any[]>
{
    channels: string[];
    createResponse() { return []; }
    getTypeName() { return "GetEventSubscribers"; }
}

export class ServerEventUser
{
    userId: string;
    displayName: string;
    profileUrl: string;
    channels: string[];
    meta: { [index:string]: string; };
}

export class HttpMethods {
    static Get = "GET";
    static Post = "POST";
    static Put = "PUT";
    static Delete = "DELETE";
    static Patch = "PATCH";
    static Head = "HEAD";
    static Options = "OPTIONS";

    static hasRequestBody = (method: string) =>
        !(method === "GET" || method === "DELETE" || method === "HEAD" || method === "OPTIONS");
}

export interface IRequestFilterOptions {
    url:string
}

export class JsonServiceClient {
    baseUrl: string;
    replyBaseUrl: string;
    oneWayBaseUrl: string;
    mode: string;
    credentials: string;
    headers: Headers;
    userName: string;
    password: string;
    requestFilter: (req:Request, options?:IRequestFilterOptions) => void;
    responseFilter: (res:Response) => void;
    exceptionFilter: (res:Response, error:any) => void;

    static toBase64: (rawString:string) => string;

    constructor(baseUrl: string) {
        if (baseUrl == null)
            throw "baseUrl is required";

        this.baseUrl = baseUrl;
        this.replyBaseUrl = combinePaths(baseUrl, "json", "reply") + "/";
        this.oneWayBaseUrl = combinePaths(baseUrl, "json", "oneway") + "/";

        this.mode = "cors";
        this.credentials = 'include';
        this.headers = new Headers();
        this.headers.set("Content-Type", "application/json");
    }

    setCredentials(userName:string, password:string): void {
        this.userName = userName;
        this.password = password;
    }

    get<T>(request: IReturn<T>|string, args?:any): Promise<T> {
        return this.send<T>(HttpMethods.Get, request, args);
    }

    delete<T>(request: IReturn<T>|string, args?:any): Promise<T> {
        return this.send<T>(HttpMethods.Delete, request, args);
    }

    post<T>(request: IReturn<T>|string, args?:any): Promise<T> {
        return this.send<T>(HttpMethods.Post, request, args);
    }

    put<T>(request: IReturn<T>|string, args?:any): Promise<T> {
        return this.send<T>(HttpMethods.Put, request, args);
    }

    patch<T>(request: IReturn<T>|string, args?:any): Promise<T> {
        return this.send<T>(HttpMethods.Patch, request, args);
    }

    createUrlFromDto<T>(method:string, request: IReturn<T>) : string {
        let url = combinePaths(this.replyBaseUrl, nameOf(request));

        const hasRequestBody = HttpMethods.hasRequestBody(method);
        if (!hasRequestBody)
            url = appendQueryString(url, request);

        return url;
    }

    toAbsoluteUrl(method:string, relativeOrAbsoluteUrl:string) : string {
        return relativeOrAbsoluteUrl.startsWith("http://") ||
               relativeOrAbsoluteUrl.startsWith("https://")
            ? relativeOrAbsoluteUrl
            : combinePaths(this.baseUrl, relativeOrAbsoluteUrl);
    }

    send<T>(method: string, request: any|string, args?:any): Promise<T> {

        let url = typeof request != "string"
            ? this.createUrlFromDto(method, request)
            : this.toAbsoluteUrl(method, request);

        if (args) {
            url = appendQueryString(url, args);
        }

        if (this.userName != null && this.password != null) {
            this.headers.set('Authorization', 'Basic '+ JsonServiceClient.toBase64(`${this.userName}:${this.password}`));
        }

        // Set `compress` false due to common error
        // https://github.com/bitinn/node-fetch/issues/93#issuecomment-200791658
        var reqOptions = {
            method: method,
            mode: this.mode,
            credentials: this.credentials,
            headers: this.headers,
            compress: false
        };
        const req = new Request(url, reqOptions);

        if (HttpMethods.hasRequestBody(method))
            (req as any).body = JSON.stringify(request);

        var opt:IRequestFilterOptions = { url: req.url };
        if (this.requestFilter != null)
            this.requestFilter(req, opt);

        var holdRes:Response  = null;

        return fetch(opt.url || req.url, req)
            .then(res => {
                holdRes = res;
                if (!res.ok)
                    throw res;

                if (this.responseFilter != null)
                    this.responseFilter(res);

                var x = typeof request != "string" && typeof request.createResponse == 'function'
                    ? request.createResponse()
                    : null;

                if (typeof x === 'string')
                    return res.text().then(o => o as Object as T);

                var contentType = res.headers.get("content-type");
                var isJson = contentType && contentType.indexOf("application/json") !== -1;
                if (isJson) {
                    return res.json().then(o => o as Object as T);
                }

                if (x instanceof Uint8Array) {
                    if (typeof res.arrayBuffer != 'function')
                        throw new Error("This fetch polyfill does not implement 'arrayBuffer'");

                    return res.arrayBuffer().then(o => new Uint8Array(o) as Object as T);

                } else if (typeof Blob == "function" && x instanceof Blob) {
                    if (typeof res.blob != 'function')
                        throw new Error("This fetch polyfill does not implement 'blob'");

                    return res.blob().then(o => o as Object as T);
                }

                let contentLength = res.headers.get("content-length");
                if (contentLength === "0" || (contentLength == null && !isJson)) {
                    return x;
                }

                return res.json().then(o => o as Object as T); //fallback
            })
            .catch(res => {

                if (res instanceof Error)
                    throw this.raiseError(holdRes, res);

                // res.json can only be called once.
                if (res.bodyUsed)
                    throw this.raiseError(res, createErrorResponse(res.status, res.statusText));

                return res.json().then(o => {
                    var errorDto = sanitize(o);
                    if (!errorDto.responseStatus)
                        throw createErrorResponse(res.status, res.statusText);
                    throw errorDto;
                }).catch(error => {
                    // No responseStatus body, set from `res` Body object
                    if (error instanceof Error)
                        throw this.raiseError(res, createErrorResponse(res.status, res.statusText));
                    throw this.raiseError(res, error);
                });
            });
    }

    raiseError(res:Response, error:any) : any {
        if (this.exceptionFilter != null) {
            this.exceptionFilter(res, error);
        }
        return error;
    }
}

const createErrorResponse = (errorCode: string, message: string) => {
    const error = new ErrorResponse();
    error.responseStatus = new ResponseStatus();
    error.responseStatus.errorCode = errorCode;
    error.responseStatus.message = message;
    return error;
};

export const toCamelCase = (key: string) => {
    return !key ? key : key.charAt(0).toLowerCase() + key.substring(1);
};

export const sanitize = (status: any): any => {
    if (status.responseStatus)
        return status;
    if (status.errors)
        return status;
    var to: any = {};

    for (let k in status) {
        if (status.hasOwnProperty(k)) {
            if (status[k] instanceof Object)
                to[toCamelCase(k)] = sanitize(status[k]);
            else
                to[toCamelCase(k)] = status[k];
        }
    }

    to.errors = [];
    if (status.Errors != null) {
        for (var i=0, len = status.Errors.length; i<len; i++) {
            var o = status.Errors[i];
            var err = {};
            for (var k in o)
                err[toCamelCase(k)] = o[k];
            to.errors.push(err);
        }
    }

    return to;
}

export const nameOf = (o: any) => {
    if (!o)
        return "null";

    if (typeof o.getTypeName == "function")
        return o.getTypeName();

    var ctor = o && o.constructor;
    if (ctor == null)
        throw `${o} doesn't have constructor`;

    if (ctor.name)
        return ctor.name;

    var str = ctor.toString();
    return str.substring(9, str.indexOf("(")); //"function ".length == 9
};

/* utils */

export const css = (selector: string | NodeListOf<Element>, name: string, value: string) => {
    const els = typeof selector == "string"
        ? document.querySelectorAll(selector as string)
        : selector as NodeListOf<Element>;

    for (let i = 0; i < els.length; i++) {
        const el = els[i] as any;
        if (el != null && el.style != null) {
            el.style[name] = value;
        }
    }
}

export const splitOnFirst = (s: string, c: string): string[] => {
    if (!s) return [s];
    var pos = s.indexOf(c);
    return pos >= 0 ? [s.substring(0, pos), s.substring(pos + 1)] : [s];
};

export const splitOnLast = (s: string, c: string): string[] => {
    if (!s) return [s];
    var pos = s.lastIndexOf(c);
    return pos >= 0
        ? [s.substring(0, pos), s.substring(pos + 1)]
        : [s];
};

const splitCase = (t: string) =>
    typeof t != 'string' ? t : t.replace(/([A-Z]|[0-9]+)/g, ' $1').replace(/_/g, ' ').trim();

export const humanize = s => (!s || s.indexOf(' ') >= 0 ? s : splitCase(s));

export const queryString = (url: string): any => {
    if (!url || url.indexOf('?') === -1) return {};
    var pairs = splitOnFirst(url, '?')[1].split('&');
    var map = {};
    for (var i = 0; i < pairs.length; ++i) {
        var p = pairs[i].split('=');
        map[p[0]] = p.length > 1
            ? decodeURIComponent(p[1].replace(/\+/g, ' '))
            : null;
    }
    return map;
};

export const combinePaths = (...paths: string[]): string => {
    var parts = [], i, l;
    for (i = 0, l = paths.length; i < l; i++) {
        var arg = paths[i];
        parts = arg.indexOf("://") === -1
            ? parts.concat(arg.split("/"))
            : parts.concat(arg.lastIndexOf("/") === arg.length - 1 ? arg.substring(0, arg.length - 1) : arg);
    }
    var combinedPaths = [];
    for (i = 0, l = parts.length; i < l; i++) {
        var part = parts[i];
        if (!part || part === ".") continue;
        if (part === "..") combinedPaths.pop();
        else combinedPaths.push(part);
    }
    if (parts[0] === "") combinedPaths.unshift("");
    return combinedPaths.join("/") || (combinedPaths.length ? "/" : ".");
};

export const createPath = (route: string, args: any) => {
    var argKeys = {};
    for (let k in args) {
        argKeys[k.toLowerCase()] = k;
    }
    var parts = route.split("/");
    var url = "";
    for (let i = 0; i < parts.length; i++) {
        var p = parts[i];
        if (p == null) p = "";
        if (p[0] === "{" && p[p.length - 1] === "}") {
            const key = argKeys[p.substring(1, p.length - 1).toLowerCase()];
            if (key) {
                p = args[key];
                delete args[key];
            }
        }
        if (url.length > 0) url += "/";
        url += p;
    }
    return url;
};

export const createUrl = (route: string, args: any) => {
    var url = createPath(route, args);
    return appendQueryString(url, args);
};

export const appendQueryString = (url: string, args: any): string => {
    for (let k in args) {
        if (args.hasOwnProperty(k)) {
            url += url.indexOf("?") >= 0 ? "&" : "?";
            url += k + "=" + qsValue(args[k]);
        }
    }
    return url;
};

const qsValue = (arg: any) => {
    if (arg == null)
        return "";
    if (arg instanceof Uint8Array)
        return bytesToBase64(arg as Uint8Array);
    return encodeURIComponent(arg) || "";
}

//from: https://github.com/madmurphy/stringview.js/blob/master/stringview.js
export const bytesToBase64 = (aBytes: Uint8Array): string => {
    var eqLen = (3 - (aBytes.length % 3)) % 3, sB64Enc = "";
    for (var nMod3, nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
        nMod3 = nIdx % 3;
        nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
        if (nMod3 === 2 || aBytes.length - nIdx === 1) {
            sB64Enc += String.fromCharCode(uint6ToB64(nUint24 >>> 18 & 63), uint6ToB64(nUint24 >>> 12 & 63), uint6ToB64(nUint24 >>> 6 & 63), uint6ToB64(nUint24 & 63));
            nUint24 = 0;
        }
    }
    return eqLen === 0
        ? sB64Enc
        : sB64Enc.substring(0, sB64Enc.length - eqLen) + (eqLen === 1 ? "=" : "==");
}

const uint6ToB64 = (nUint6: number) : number =>
     nUint6 < 26 ?
      nUint6 + 65
    : nUint6 < 52 ?
      nUint6 + 71
    : nUint6 < 62 ?
      nUint6 - 4
    : nUint6 === 62 ? 43
    : nUint6 === 63 ? 47 : 65;

//JsonServiceClient.toBase64 requires IE10+ or node
interface NodeBuffer extends Uint8Array {
    toString(encoding?: string, start?: number, end?: number): string;
}
interface Buffer extends NodeBuffer { }
declare var Buffer: {
    new (str: string, encoding?: string): Buffer;
}
var _btoa = typeof btoa == 'function'
    ? btoa
    : (str) => new Buffer(str).toString('base64');

//from: http://stackoverflow.com/a/30106551/85785
JsonServiceClient.toBase64 = (str:string) => 
    _btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match:any, p1:string) =>
        String.fromCharCode(new Number('0x' + p1).valueOf())
    ));

export const toDate = (s: string) => new Date(parseFloat(/Date\(([^)]+)\)/.exec(s)[1]));
export const toDateFmt = (s: string) => dateFmt(toDate(s));
export const padInt = (n: number) => n < 10 ? '0' + n : n;
export const dateFmt = (d: Date = new Date()) => d.getFullYear() + '/' + padInt(d.getMonth() + 1) + '/' + padInt(d.getDate());
export const dateFmtHM = (d: Date = new Date()) => d.getFullYear() + '/' + padInt(d.getMonth() + 1) + '/' + padInt(d.getDate()) + ' ' + padInt(d.getHours()) + ":" + padInt(d.getMinutes());
export const timeFmt12 = (d: Date = new Date()) => padInt((d.getHours() + 24) % 12 || 12) + ":" + padInt(d.getMinutes()) + ":" + padInt(d.getSeconds()) + " " + (d.getHours() > 12 ? "PM" : "AM");
