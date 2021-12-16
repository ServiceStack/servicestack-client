//Node globals
declare let process: any;
declare let require:Function;
function nodeRequire() {
    //node require(), using dynamic access to fix web ng aot build
    try {
        let isNode = typeof process === 'object' &&
            typeof process.versions === 'object' &&
            typeof process.versions.node !== 'undefined';
        if (isNode) return eval('require');
        return null;
    } catch (e) { return null; }
}
let R = nodeRequire();
if (R) R('cross-fetch/polyfill'); //fetch polyfill only required for node.js

export interface IReturnVoid {
    createResponse();
}
export interface IReturn<T> {
    createResponse(): T;
}
export class ResponseStatus {
    public constructor(init?:Partial<ResponseStatus>) { Object.assign(this, init); }
    errorCode: string;
    message: string;
    stackTrace: string;
    errors: ResponseError[];
    meta: { [index: string]: string; };
}
export class ResponseError {
    public constructor(init?:Partial<ResponseError>) { Object.assign(this, init); }
    errorCode: string;
    fieldName: string;
    message: string;
    meta: { [index: string]: string; };
}
export class ErrorResponse {
    public constructor(init?:Partial<ErrorResponse>) { Object.assign(this, init); }
    type: ErrorResponseType;
    responseStatus: ResponseStatus;
}
export class EmptyResponse {
    public constructor(init?:Partial<ErrorResponse>) { Object.assign(this, init); }
    responseStatus: ResponseStatus;
}
export class NavItem {
    public label: string;
    public href: string;
    public exact: boolean;
    public id: string;
    public className: string;
    public iconClass: string;
    public show: string;
    public hide: string;
    public children: NavItem[];
    public meta: { [index:string]: string; };
    public constructor(init?:Partial<NavItem>) { (Object as any).assign(this, init); }
}
export class GetNavItems {
    public constructor(init?:Partial<GetNavItems>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetNavItemsResponse(); }
    public getTypeName() { return 'GetNavItems'; }
}
export class GetNavItemsResponse {
    public baseUrl: string;
    public results: NavItem[];
    public navItemsMap: { [index:string]: NavItem[]; };
    public meta: { [index:string]: string; };
    public responseStatus: ResponseStatus;
    public constructor(init?:Partial<GetNavItemsResponse>) { (Object as any).assign(this, init); }
}

export type ErrorResponseType = null | "RefreshTokenException";

export interface IAuthSession {
    userName: string;
    displayName: string;
    userId?: string;
    roles?: string[];
    permissions?: string[];
    profileUrl?: string;
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

    tryResolve(ctor:ObjectConstructor): any {
        return (ctor as any).instance 
            || ((ctor as any).instance = new ctor());
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
    body: any;
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

function eventMessageType(evt:string) {
    switch (evt) {
        case 'onConnect': 
            return 'ServerEventConnect';
        case 'onHeartbeat': 
            return 'ServerEventHeartbeat';
        case 'onJoin': 
            return 'ServerEventJoin';
        case 'onLeave': 
            return 'ServerEventLeave';
        case 'onUpdate': 
            return 'ServerEventUpdate';
    }
    return null;
}

export interface IReconnectServerEventsOptions {
    url?: string;
    onerror?: (...args: any[]) => void;
    onmessage?: (...args: any[]) => void;
    error?: Error;
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

declare let EventSource: IEventSourceStatic;

export interface IEventSourceOptions {
    channels?: string;
    handlers?: any;
    receivers?: any;
    onException?: Function;
    onReconnect?: Function;
    onTick?: Function;
    resolver?: IResolver;
    validate?: (request:ServerEventMessage) => boolean;
    heartbeatUrl?: string;
    unRegisterUrl?: string;
    updateSubscriberUrl?: string;
    heartbeatIntervalMs?: number;
    heartbeat?: number;
    resolveStreamUrl?: (url:string) => string;
}

export class ServerEventsClient {
    static UnknownChannel = "*";
    eventStreamUri: string;
    updateSubscriberUrl: string;
    connectionInfo: ServerEventConnect;
    serviceClient: JsonServiceClient;
    stopped: boolean;
    resolver: IResolver;
    listeners: { [index:string]: ((e:ServerEventMessage) => void)[] };
    EventSource: IEventSourceStatic;
    withCredentials: boolean;

    constructor(
        baseUrl: string,
        public channels: string[],
        public options: IEventSourceOptions = {},
        public eventSource: IEventSourceStatic = null) {
        if (this.channels.length === 0)
            throw "at least 1 channel is required";

        this.resolver = this.options.resolver || new NewInstanceResolver();

        this.eventStreamUri = combinePaths(baseUrl, "event-stream") + "?";
        this.updateChannels(channels);
        this.serviceClient = new JsonServiceClient(baseUrl);
        this.listeners = {};
        this.withCredentials = true;

        if (!this.options.handlers)
            this.options.handlers = {};
    }
    onMessage = (e: IOnMessageEvent) => {
        if (typeof document == "undefined") { //node
            //latest node-fetch + eventsource doesn't split SSE messages properly
            let requireSplitPos = e.data ? e.data.indexOf('\n') : -1;
            if (requireSplitPos >= 0) {
                let data = e.data;
                let lastEventId = (e as any).lastEventId;
                let e1 = Object.assign({}, { lastEventId, data:data.substring(0,requireSplitPos) }),
                    e2 = Object.assign({}, { lastEventId, data:data.substring(requireSplitPos+1) });
                this._onMessage(e1);
                this._onMessage(e2);
                return;
            }
        }
        this._onMessage(e);
    }
    _onMessage = (e: IOnMessageEvent) => {
        if (this.stopped) return;
        let opt = this.options;

        if (typeof document == "undefined") {
            var document:any = { //var hoisting required (node)
                querySelectorAll: sel => []
            };
        }
        let $ = document.querySelectorAll.bind(document);

        let parts = splitOnFirst(e.data, " ");
        let channel = null;
        let selector = parts[0];
        let selParts = splitOnFirst(selector, "@");
        if (selParts.length > 1) {
            channel = selParts[0];
            selector = selParts[1];
        }
        const json = parts[1];
        let body = null;
        try {
            body = json ? JSON.parse(json) : null;
        } catch(ignore){}

        parts = splitOnFirst(selector, ".");
        if (parts.length <= 1)
            throw "invalid selector format: " + selector;

        let op = parts[0],
            target = parts[1].replace(new RegExp("%20", "g"), " ");

        const tokens = splitOnFirst(target, "$");
        const [cmd, cssSelector] = tokens;
        const els = cssSelector && $(cssSelector);
        const el = els && els[0];

        const eventId = parseInt((e as any).lastEventId);
        const data = e.data;
        const type = eventMessageType(cmd) || "ServerEventMessage";
        const request:ServerEventMessage = { eventId, data, type,
            channel, selector, json, body, op, target:tokens[0], cssSelector, meta:{} };

        const mergedBody = typeof body == "object" 
            ? Object.assign({}, request, body)
            : request;

        if (opt.validate && opt.validate(request) === false)
            return;

        let headers = new Headers();
        headers.set("Content-Type", "text/plain");

        if (op === "cmd") {
            if (cmd === "onConnect") {
                this.connectionInfo = mergedBody;
                if (typeof body.heartbeatIntervalMs == "string")
                    this.connectionInfo.heartbeatIntervalMs = parseInt(body.heartbeatIntervalMs);
                if (typeof body.idleTimeoutMs == "string")
                    this.connectionInfo.idleTimeoutMs = parseInt(body.idleTimeoutMs);

                Object.assign(opt, body);

                let fn = opt.handlers["onConnect"];
                if (fn){
                    fn.call(el || document.body, this.connectionInfo, request);
                    if (this.stopped)
                        return;
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
                            this.reconnectServerEvents({ error: new Error("EventSource is CLOSED") });
                            return;
                        }

                        fetch(new Request(opt.heartbeatUrl, { method: "POST", mode: "cors", headers: headers, credentials: this.serviceClient.credentials }))
                            .then(res => { if (!res.ok) throw new Error(`${res.status} - ${res.statusText}`); })
                            .catch(error => this.reconnectServerEvents({ error }));
                    }, (this.connectionInfo && this.connectionInfo.heartbeatIntervalMs) || opt.heartbeatIntervalMs || 10000);
                }
                if (opt.unRegisterUrl) {
                    if (typeof window != "undefined") {
                        window.onunload = () => {
                            if (navigator.sendBeacon) { // Chrome https://developers.google.com/web/updates/2019/12/chrome-80-deps-rems
                                this.stopped = true;
                                if (this.eventSource) this.eventSource.close();
                                navigator.sendBeacon(opt.unRegisterUrl);
                            }
                            else {
                                this.stop();
                            }
                        };
                    }
                }
                this.updateSubscriberUrl = opt.updateSubscriberUrl;
                this.updateChannels((opt.channels || "").split(","));
            } else {
                let isCmdMsg = cmd == "onJoin" || cmd == "onLeave" || cmd == "onUpdate";
                let fn = opt.handlers[cmd];
                if (fn) {
                    if (isCmdMsg) {
                        fn.call(el || document.body, mergedBody);
                    } else {
                        fn.call(el || document.body, body, request);
                    }
                } else {
                    if (!isCmdMsg) { //global receiver
                        let r = opt.receivers && opt.receivers["cmd"];
                        this.invokeReceiver(r, cmd, el, request, "cmd");
                    }
                }            
                if (isCmdMsg) {
                    fn = opt.handlers["onCommand"];
                    if (fn) {
                        fn.call(el || document.body, mergedBody);
                    }
                }
            }
        }
        else if (op === "trigger") {
            this.raiseEvent(target, request);
        }
        else if (op === "css") {
            css(els || $("body"), cmd, body);
        }

        //Named Receiver
        let r = opt.receivers && opt.receivers[op];
        this.invokeReceiver(r, cmd, el, request, op);

        if (!eventMessageType(cmd))
        {
            let fn = opt.handlers["onMessage"];
            if (fn) {
                fn.call(el || document.body, mergedBody);
            }
        }

        if (opt.onTick) 
            opt.onTick();
    }

    onError = (error?:any):void => {
        if (this.stopped) return;
        if (!error)
            error = event;
        let fn = this.options.onException;
        if (fn != null)
            fn.call(this.eventSource, error);                        

        if (this.options.onTick) 
            this.options.onTick();
    }

    getEventSourceOptions() {
        return { withCredentials: this.withCredentials };
    }

    reconnectServerEvents(opt:IReconnectServerEventsOptions = {}) {
        if (this.stopped) return;

        if (opt.error)
            this.onError(opt.error);

        const hold = this.eventSource;
        
        let url = opt.url || this.eventStreamUri || hold.url;
        if (this.options.resolveStreamUrl != null) {
            url = this.options.resolveStreamUrl(url);
        }

        const es = this.EventSource
            ? new this.EventSource(url, this.getEventSourceOptions())
            : new EventSource(url, this.getEventSourceOptions());
        es.addEventListener('error', e => (opt.onerror || hold.onerror || this.onError)(e));
        es.addEventListener('message', opt.onmessage || hold.onmessage || this.onMessage);

        let fn = this.options.onReconnect;
        if (fn != null)
            fn.call(es, opt.error);
        
        if (hold.removeEventListener) {
            hold.removeEventListener('error', this.onError);
            hold.removeEventListener('message', this.onMessage as any);
        }
        hold.close();
        return this.eventSource = es;
    }

    start() {
        this.stopped = false;
        if (this.eventSource == null || this.eventSource.readyState === EventSource.CLOSED) {
            let url = this.eventStreamUri;
            if (this.options.resolveStreamUrl != null) {
                url = this.options.resolveStreamUrl(url);
            }

            this.eventSource = this.EventSource
                ? new this.EventSource(url, this.getEventSourceOptions())
                : new EventSource(url, this.getEventSourceOptions());
            this.eventSource.addEventListener('error', this.onError);
            this.eventSource.addEventListener('message', e => this.onMessage(e as any));
        }
        return this;
    }

    stop() : Promise<void> {
        this.stopped = true;

        if (this.eventSource) {
            this.eventSource.close();
        }

        let opt = this.options;
        if (opt && opt.heartbeat) {
            clearInterval(opt.heartbeat);
        }
        
        let hold = this.connectionInfo;
        if (hold == null || hold.unRegisterUrl == null)
            return new Promise<void>((resolve, reject) => resolve());

        this.connectionInfo = null;
        return fetch(new Request(hold.unRegisterUrl, { method: "POST", mode: "cors", credentials: this.serviceClient.credentials }))
            .then(res => { if (!res.ok) throw new Error(`${res.status} - ${res.statusText}`); })
            .catch(this.onError);
    }

    invokeReceiver(r:any, cmd:string, el:Element, request:ServerEventMessage, name:string) {
        if (r) {
            if (typeof r == "function") {
                r = this.resolver.tryResolve(r);
            }
            cmd = cmd.replace("-","");
            r.client = this;
            r.request = request;
            if (typeof (r[cmd]) == "function") {
                r[cmd].call(el || r, request.body, request);
            } else if (cmd in r) {
                r[cmd] = request.body;
            } else {
                let metaProp = Object.getOwnPropertyDescriptor(r, cmd);
                if (metaProp != null) {
                    if (metaProp.set) {
                        metaProp.set(request.body);
                    } else if (metaProp.writable) {
                        r[cmd] = request.body;
                    }
                    return;
                }
                let cmdLower = cmd.toLowerCase();
                for (let k in r) {
                    if (k.toLowerCase() == cmdLower) {
                        if (typeof r[k] == "function") {
                            r[k].call(el || r, request.body, request);
                        } else {
                            r[k] = request.body;
                        }
                        return;
                    }
                }

                let noSuchMethod = r["noSuchMethod"];
                if (typeof noSuchMethod == "function") {
                    noSuchMethod.call(el || r, request.target, request);
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

    setResolver(resolver:IResolver) {
        this.options.resolver = resolver;
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
            : this.eventStreamUri;
        this.eventStreamUri = url.substring(0, Math.min(url.indexOf("?"), url.length)) + "?channels=" + channels.join(",") + "&t=" + new Date().getTime();
    }

    update(subscribe:string|string[], unsubscribe:string|string[]) {
        let sub = typeof subscribe == "string" ? subscribe.split(',') : subscribe;
        let unsub = typeof unsubscribe == "string" ? unsubscribe.split(',') : unsubscribe;
        let channels = [];
        for (let i in this.channels) {
            let c = this.channels[i];
            if (unsub == null || unsub.indexOf(c) === -1) {
                channels.push(c);
            }
        }
        if (sub) {
            for (let i in sub) {
                let c = sub[i];
                if (channels.indexOf(c) === -1) {
                    channels.push(c);
                }
            }
        }
        this.updateChannels(channels);
    }

    addListener(eventName:string, handler:((e:ServerEventMessage) => void)) {
        let handlers = this.listeners[eventName] || (this.listeners[eventName] = []);
        handlers.push(handler);
        return this;
    }

    removeListener(eventName:string, handler:((e:ServerEventMessage) => void)) {
        let handlers = this.listeners[eventName];
        if (handlers) {
            let pos = handlers.indexOf(handler);
            if (pos >= 0) {
                handlers.splice(pos, 1);
            }
        }
        return this;
    }

    raiseEvent(eventName:string, msg:ServerEventMessage) {
        let handlers = this.listeners[eventName];
        if (handlers) {
            handlers.forEach(x => {
                try {
                    x(msg);
                } catch (e) {
                    this.onError(e);
                }
            });
        }        
    }

    getConnectionInfo(){
        if (this.connectionInfo == null)
            throw "Not Connected";

        return this.connectionInfo;
    }

    getSubscriptionId() {
        return this.getConnectionInfo().id;
    }

    updateSubscriber(request:UpdateEventSubscriber): Promise<void> {
        if (request.id == null)
            request.id = this.getSubscriptionId();

        return this.serviceClient.post(request)
            .then(x => {
                this.update(request.subscribeChannels, request.unsubscribeChannels);
            }).catch(this.onError);
    }
    
    subscribeToChannels(...channels:string[]): Promise<void> {
        let request = new UpdateEventSubscriber();
        request.id = this.getSubscriptionId();
        request.subscribeChannels = channels;

        return this.serviceClient.post(request)
            .then(x => {
                this.update(channels, null);
            }).catch(this.onError);
    }
    
    unsubscribeFromChannels(...channels:string[]): Promise<void> {
        let request = new UpdateEventSubscriber();
        request.id = this.getSubscriptionId();
        request.unsubscribeChannels = channels;

        return this.serviceClient.post(request)
            .then(x => {
                this.update(null, channels);
            }).catch(this.onError);
    }

    getChannelSubscribers(): Promise<ServerEventUser[]> {
        let request = new GetEventSubscribers();
        request.channels = this.channels;

        return this.serviceClient.get(request)
            .then(r => r.map(x => this.toServerEventUser(x)))
            .catch(e => {
                this.onError(e);
                return [];
            });
    }

    toServerEventUser(map: { [id: string] : string; }): ServerEventUser {
        let channels = map["channels"];
        let to = new ServerEventUser();
        to.userId = map["userId"];
        to.displayName = map["displayName"];
        to.profileUrl = map["profileUrl"];
        to.channels = channels ? channels.split(',') : null;

        for (let k in map) {
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

export interface IRequestInit extends RequestInit
{
    url?: string;
    compress?: boolean;
}

export interface Cookie {
    name: string;
    value: string;
    path: string;
    domain?: string;
    expires?: Date;
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: string;
}

class GetAccessToken implements IReturn<GetAccessTokenResponse> {
    public constructor(init?:Partial<GetAccessToken>) { (Object as any).assign(this, init); }

    public refreshToken: string;
    public useTokenCookie?: boolean;
    public createResponse() { return new GetAccessTokenResponse(); }
    public getTypeName() { return "GetAccessToken"; }
}
export class GetAccessTokenResponse {
    accessToken: string;
    responseStatus: ResponseStatus;
}

export interface ISendRequest
{
    method:string; 
    request:any|null; 
    body?:any|null;
    args?:any; 
    url?:string; 
    returns?: { createResponse: () => any };
}

export class JsonServiceClient {
    baseUrl: string;
    replyBaseUrl: string;
    oneWayBaseUrl: string;
    mode: RequestMode;
    credentials: RequestCredentials;
    headers: Headers;
    userName: string;
    password: string;
    bearerToken: string;
    refreshToken: string;
    refreshTokenUri: string;
    useTokenCookie: boolean;
    requestFilter: (req:IRequestInit) => void;
    static globalRequestFilter: (req:IRequestInit) => void;
    responseFilter: (res:Response) => void;
    static globalResponseFilter: (res:Response) => void;
    exceptionFilter: (res:Response, error:any) => void;
    urlFilter: (url:string) => void;
    onAuthenticationRequired: () => Promise<any>;
    manageCookies: boolean;
    cookies:{ [index:string]: Cookie };
    parseJson: (res:Response) => Promise<any>;

    static toBase64: (rawString:string) => string;

    constructor(baseUrl: string = "/") {
        this.baseUrl = baseUrl;
        this.replyBaseUrl = combinePaths(baseUrl, "json", "reply") + "/";
        this.oneWayBaseUrl = combinePaths(baseUrl, "json", "oneway") + "/";

        this.mode = "cors";
        this.credentials = 'include';
        this.headers = new Headers();
        this.headers.set("Content-Type", "application/json");
        this.manageCookies = typeof document == "undefined"; //because node-fetch doesn't
        this.cookies = {};
    }

    setCredentials(userName:string, password:string): void {
        this.userName = userName;
        this.password = password;
    }

    useBasePath(path?:string) {
        if (!path) {
            this.replyBaseUrl = combinePaths(this.baseUrl, "json", "reply") + "/";
            this.oneWayBaseUrl = combinePaths(this.baseUrl, "json", "oneway") + "/";
        } else {
            if (path[0] != '/') {
                path = '/' + path;
            }
            this.replyBaseUrl = combinePaths(this.baseUrl, path) + "/";
            this.oneWayBaseUrl = combinePaths(this.baseUrl, path) + "/";
        }
        return this;
    }

    get<T>(request: IReturn<T>|string, args?:any): Promise<T> {
        return typeof request != "string" 
            ? this.fetch<T>(HttpMethods.Get, request, args)
            : this.fetch<T>(HttpMethods.Get, null, args, this.toAbsoluteUrl(request));
    }

    delete<T>(request: IReturn<T>|string, args?:any): Promise<T> {
        return typeof request != "string" 
            ? this.fetch<T>(HttpMethods.Delete, request, args)
            : this.fetch<T>(HttpMethods.Delete, null, args, this.toAbsoluteUrl(request));
    }

    post<T>(request: IReturn<T>, args?:any): Promise<T> {
        return this.fetch<T>(HttpMethods.Post, request, args);
    }

    postToUrl<T>(url:string, request:IReturn<T>, args?:any): Promise<T> {
        return this.fetch<T>(HttpMethods.Post, request, args, this.toAbsoluteUrl(url));
    }

    postBody<T>(request:IReturn<T>, body:string|any, args?:any) {
        return this.fetchBody<T>(HttpMethods.Post, request, body, args);
    }

    put<T>(request: IReturn<T>, args?:any): Promise<T> {
        return this.fetch<T>(HttpMethods.Put, request, args);
    }

    putToUrl<T>(url:string, request:IReturn<T>, args?:any): Promise<T> {
        return this.fetch<T>(HttpMethods.Put, request, args, this.toAbsoluteUrl(url));
    }

    putBody<T>(request:IReturn<T>, body:string|any, args?:any) {
        return this.fetchBody<T>(HttpMethods.Put, request, body, args);
    }

    patch<T>(request: IReturn<T>, args?:any): Promise<T> {
        return this.fetch<T>(HttpMethods.Patch, request, args);
    }

    patchToUrl<T>(url:string, request:IReturn<T>, args?:any): Promise<T> {
        return this.fetch<T>(HttpMethods.Patch, request, args, this.toAbsoluteUrl(url));
    }

    patchBody<T>(request:IReturn<T>, body:string|any, args?:any) {
        return this.fetchBody<T>(HttpMethods.Patch, request, body, args);
    }

    publish(request: IReturnVoid, args?:any): Promise<any> {
        return this.sendOneWay(request, args);
    }
    
    sendOneWay<T>(request: IReturn<T>|IReturnVoid, args?:any): Promise<T> {
        const url = combinePaths(this.oneWayBaseUrl, nameOf(request));
        return this.fetch<T>(HttpMethods.Post, request, null, url);
    }

    sendAll<T>(requests:IReturn<T>[]) : Promise<T[]> {
        if (requests.length == 0)
            return Promise.resolve([]);

        const url = combinePaths(this.replyBaseUrl, nameOf(requests[0]) + "[]");
        return this.fetch<T[]>(HttpMethods.Post, requests, null, url);
    }

    sendAllOneWay<T>(requests:IReturn<T>[]) : Promise<void> {
        if (requests.length == 0)
            return Promise.resolve(void 0);

        const url = combinePaths(this.oneWayBaseUrl, nameOf(requests[0]) + "[]");
        return this.fetch<T[]>(HttpMethods.Post, requests, null, url)
            .then(r => void 0);
    }

    createUrlFromDto<T>(method:string, request: IReturn<T>) : string {
        let url = combinePaths(this.replyBaseUrl, nameOf(request));

        const hasRequestBody = HttpMethods.hasRequestBody(method);
        if (!hasRequestBody)
            url = appendQueryString(url, request);

        return url;
    }

    toAbsoluteUrl(relativeOrAbsoluteUrl:string) : string {
        return relativeOrAbsoluteUrl.startsWith("http://") ||
               relativeOrAbsoluteUrl.startsWith("https://")
            ? relativeOrAbsoluteUrl
            : combinePaths(this.baseUrl, relativeOrAbsoluteUrl);
    }

    deleteCookie(name:string) {
        if (this.manageCookies) {
            delete this.cookies[name];
        } else {
            if (document) {
                document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
            }
        }
    }

    private createRequest({ method, request, url, args, body } : ISendRequest) : IRequestInit {

        if (!url)
            url = this.createUrlFromDto(method, request);
        if (args)
            url = appendQueryString(url, args);

        if (this.bearerToken != null) {
            this.headers.set("Authorization", "Bearer " + this.bearerToken);
        }
        else if (this.userName != null) {
            this.headers.set('Authorization', 'Basic '+ JsonServiceClient.toBase64(`${this.userName}:${this.password}`));
        }

        if (this.manageCookies) {
            let cookies = Object.keys(this.cookies)
                .map(x => {
                    let c = this.cookies[x];
                    return c.expires && c.expires < new Date()
                        ? null
                        : `${c.name}=${encodeURIComponent(c.value)}`               
                })
                .filter(x => !!x);

            if (cookies.length > 0)
                this.headers.set("Cookie", cookies.join("; "));
            else
                this.headers.delete("Cookie");
        }

        let headers = new Headers(this.headers);
        let hasRequestBody = HttpMethods.hasRequestBody(method);
        let reqInit:IRequestInit = {
            url,
            method: method,
            mode: this.mode,
            credentials: this.credentials,
            headers,
            compress: false,  // https://github.com/bitinn/node-fetch/issues/93#issuecomment-200791658
        };

        if (hasRequestBody) {
            reqInit.body = body || JSON.stringify(request);

            if (isFormData(body)) {
                headers.delete('Content-Type'); //set by FormData
            }
        }

        if (this.requestFilter != null)
            this.requestFilter(reqInit);
        if (JsonServiceClient.globalRequestFilter != null)
            JsonServiceClient.globalRequestFilter(reqInit);

        return reqInit;
    }

    private json(res:Response) : Promise<any> {
        if (this.parseJson)
            return this.parseJson(res);
        return res.json();
    }

    private createResponse<T>(res:Response, request:any|null) {
        if (!res.ok)
            throw res;

        if (this.manageCookies) {
            let setCookies = [];
            res.headers.forEach((v,k) => {
                switch (k.toLowerCase()) {
                    case "set-cookie":
                        let cookies = v.split(',');
                        cookies.forEach(c => setCookies.push(c));
                        break;
                }
            });
            setCookies.forEach(x => {
                let cookie = parseCookie(x);
                if (cookie)
                    this.cookies[cookie.name] = cookie;
            });
        }
        
        res.headers.forEach((v,k) => {
            switch (k.toLowerCase()) {
                case "x-cookies":
                    if (v.split(',').indexOf('ss-reftok') >= 0)
                        this.useTokenCookie = true;
                    break;
                }
        });

        if (this.responseFilter != null)
            this.responseFilter(res);
        if (JsonServiceClient.globalResponseFilter != null)
            JsonServiceClient.globalResponseFilter(res);

        let x = request && typeof request != "string" && typeof request.createResponse == 'function'
            ? request.createResponse()
            : null;

        if (typeof x === 'string')
            return res.text().then(o => o as Object as T);

        let contentType = res.headers.get("content-type");
        let isJson = contentType && contentType.indexOf("application/json") !== -1;
        if (isJson) {
            return this.json(res).then(o => o as Object as T);
        }

        if (typeof Uint8Array != "undefined" && x instanceof Uint8Array) {
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

        return this.json(res).then(o => o as Object as T); //fallback
    }

    private handleError(holdRes:Response, res, type:ErrorResponseType=null) {

        if (res instanceof Error)
            throw this.raiseError(holdRes, res);

        // res.json can only be called once.
        if (res.bodyUsed)
            throw this.raiseError(res, createErrorResponse(res.status, res.statusText, type));

        let isErrorResponse = typeof res.json == "undefined" && res.responseStatus;
        if (isErrorResponse) {
            return new Promise((resolve,reject) => 
                reject(this.raiseError(null, res))
            );
        }

        return this.json(res).then(o => {
            let errorDto = sanitize(o);
            if (!errorDto.responseStatus)
                throw createErrorResponse(res.status, res.statusText, type);
            if (type != null)
                errorDto.type = type;
            throw errorDto;
        }).catch(error => {
            // No responseStatus body, set from `res` Body object
            if (error instanceof Error 
                || (typeof window != "undefined" && error instanceof (window as any).DOMException /*MS Edge*/))
            {
                throw this.raiseError(res, createErrorResponse(res.status, res.statusText, type));
            }

            throw this.raiseError(res, error);
        });
    }

    fetch<T>(method:string, request:any|null, args?:any, url?:string): Promise<T> {
        return this.sendRequest<T>({ method, request, args, url });
    }

    fetchBody<T>(method:string, request:IReturn<T>, body:string|any, args?:any) {
        let url = combinePaths(this.replyBaseUrl, nameOf(request));
        return this.sendRequest<T>({
            method,
            request: body, 
            body: typeof body == "string" 
                ? body 
                : isFormData(body)
                    ? body
                    : JSON.stringify(body),
            url: appendQueryString(url, request), 
            args,
            returns: request 
        });
    }

    sendRequest<T>(info:ISendRequest): Promise<T> {

        const req = this.createRequest(info);

        const returns = info.returns || info.request;
        let holdRes:Response  = null;
        
        const resendRequest = () => {
            const req = this.createRequest(info);
            if (this.urlFilter)
                this.urlFilter(req.url);
            return fetch(req.url, req)
                .then(res => this.createResponse(res, returns))
                .catch(res => this.handleError(holdRes, res));
        }

        if (this.urlFilter)
            this.urlFilter(req.url);

        return fetch(req.url, req)
            .then(res => {
                holdRes = res;
                const response = this.createResponse(res, returns);
                return response;
            })
            .catch(res => {

                if (res.status === 401) {
                    if (this.refreshToken || this.useTokenCookie || this.cookies['ss-reftok'] != null) {
                        const jwtReq = new GetAccessToken({ refreshToken:this.refreshToken, useTokenCookie: !!this.useTokenCookie });
                        let url = this.refreshTokenUri || this.createUrlFromDto(HttpMethods.Post, jwtReq);

                        if (this.useTokenCookie) {
                            this.bearerToken = null;
                            this.headers.delete("Authorization");
                        }

                        let jwtRequest = this.createRequest({ method:HttpMethods.Post, request:jwtReq, args:null, url });
                        return fetch(url, jwtRequest)
                            .then(r => this.createResponse(r, jwtReq).then(jwtResponse => {
                                this.bearerToken = jwtResponse.accessToken || null;
                                return resendRequest();
                            }))
                            .catch(res => {
                                if (this.onAuthenticationRequired) {
                                    return this.onAuthenticationRequired()
                                        .then(resendRequest)
                                        .catch(resHandler => { 
                                            return this.handleError(holdRes, resHandler, "RefreshTokenException")
                                        });
                                } else {
                                    return this.handleError(holdRes, res, "RefreshTokenException")
                                }
                            });
                    } else {
                        if (this.onAuthenticationRequired) {
                            return this.onAuthenticationRequired().then(resendRequest);
                        }
                    }
                }

                return this.handleError(holdRes, res);
            });
    }

    raiseError(res:Response, error:any) : any {
        if (this.exceptionFilter != null) {
            this.exceptionFilter(res, error);
        }
        return error;
    }

    // Generic send that uses APIs preferred HTTP Method (requires v5.13+ DTOs)
    send<T>(request:IReturn<T>, args?:any, url?:string) {
        return this.sendRequest<T>({ method: getMethod(request), request, args, url });
    }

    // Generic send IReturnVoid that uses APIs preferred HTTP Method (requires v5.13+ DTOs)
    sendVoid(request:IReturnVoid, args?:any, url?:string) {
        return this.sendRequest<EmptyResponse>({ method: getMethod(request), request, args, url });
    }

    async api<TResponse>(request:IReturn<TResponse>, args?:any, method?:string) {
        try {
            const result = await this.fetch<TResponse>(getMethod(request,method), request, args);
            return new ApiResult<TResponse>({ response: result });
        } catch(e) {
            return new ApiResult<TResponse>({ error: getResponseStatus(e) });
        }
    }

    async apiVoid(request:IReturnVoid, args?:any, method?:string) {
        try {
            const result = await this.fetch<EmptyResponse>(getMethod(request,method), request, args);
            return new ApiResult<EmptyResponse>({ response: result });
        } catch(e) {
            return new ApiResult<EmptyResponse>({ error: getResponseStatus(e) });
        }
    }
}

export function getMethod(request:any, method?:string) {
    return method ?? typeof (request as any).getMethod == "function"
        ? (request as any).getMethod()
        : HttpMethods.Post;
}

export function getResponseStatus(e:any) {
    return e.responseStatus ?? e.ResponseStatus ??
        (e.errorCode 
            ? e 
            : (e.message ? createErrorStatus(e.message, e.errorCode) : null))
}

export class ApiResult<TResponse>
{
    response?: TResponse;
    error?: ResponseStatus;
    
    public constructor(init?:Partial<ApiResult<TResponse>>) { Object.assign(this, init); }

    get completed() { return this.completed != null || this.error != null; }
    get failed() { return this.error?.errorCode != null || this.error?.message != null; }
    get succeeded() { return !this.failed && this.response != null; }

    get errorMessage() { return this.error?.message; }
    get errorCode() { return this.error?.errorCode; }
    get errors() { return this.error?.errors ?? []; }
    get errorSummary() { return this.error != null && this.errors.length == 0 ? this.errorMessage : null; }

    fieldError(fieldName: string) { 
        let matchField = fieldName.toLowerCase()
        return this.errors?.find(x => x.fieldName.toLowerCase() == matchField);
    }
    fieldErrorMessage(fieldName: string) { return this.fieldError(fieldName)?.message; }
    hasFieldError(fieldName: string) { return this.fieldError(fieldName) != null; }

    showSummary(exceptFields: string[] = []) {
        if (!this.failed)
            return false;
        return exceptFields.every(x => !this.hasFieldError(x));
    }

    summaryMessage(exceptFields: string[] = []) {
        if (this.showSummary(exceptFields)) {
            // Return first field error that's not visible
            let fieldSet = exceptFields.map(x => x.toLowerCase());
            let fieldError = fieldSet.find(x => fieldSet.indexOf(x.toLowerCase()) == -1);
            return fieldError ?? this.errorMessage;
        }
    }

    addFieldError(fieldName:string, message:string, errorCode:string = 'Exception') {
        if (!this.error)
            this.error = new ResponseStatus();
        const fieldError = this.fieldError(fieldName);
        if (fieldError != null) {
            fieldError.errorCode = errorCode;
            fieldError.message = message;
        } else {
            this.error.errors.push(new ResponseError({ fieldName, errorCode, message }));
        }
    }
}

export function createErrorStatus(message:string, errorCode:string = 'Exception') {
    return new ResponseStatus({ errorCode, message});
}

export function createFieldError(fieldName:string, message:string, errorCode:string = 'Exception') {
    return new ResponseStatus({ errors:[new ResponseError({fieldName, errorCode, message})] });
}

export function isFormData(body:any) { return typeof window != "undefined" && body instanceof FormData; }

function createErrorResponse(errorCode: string|number, message: string, type:ErrorResponseType=null) {
    const error = new ErrorResponse();
    if (type != null)
        error.type = type;
    error.responseStatus = new ResponseStatus();
    error.responseStatus.errorCode = errorCode && errorCode.toString();
    error.responseStatus.message = message;
    return error;
};

export function createError(errorCode:string, message:string, fieldName?:string) {
    return new ErrorResponse({ 
        responseStatus: new ResponseStatus({
            errorCode,
            message,
            errors: fieldName ? [new ResponseError({ errorCode, message, fieldName })] : undefined
        })
    });
}

export function toCamelCase (s: string) { return !s ? s : s.charAt(0).toLowerCase() + s.substring(1); }

export function toPascalCase(s: string) { return !s ? s : s.charAt(0).toUpperCase() + s.substring(1); }

export function sanitize (status: any): any {
    if (status.responseStatus)
        return status;
    if (status.errors)
        return status;
    let to: any = {};

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
        for (let i=0, len = status.Errors.length; i<len; i++) {
            let o = status.Errors[i];
            let err = {};
            for (let k in o)
                err[toCamelCase(k)] = o[k];
            to.errors.push(err);
        }
    }

    return to;
}

export function nameOf(o: any) {
    if (!o)
        return "null";

    if (typeof o.getTypeName == "function")
        return o.getTypeName();

    let ctor = o && o.constructor;
    if (ctor == null)
        throw `${o} doesn't have constructor`;

    if (ctor.name)
        return ctor.name;

    let str = ctor.toString();
    return str.substring(9, str.indexOf("(")); //"function ".length == 9
}

/* utils */

function log<T>(o:T, prefix:string="LOG") {
    console.log(prefix, o);
    return o;
}

export function css (selector: string | NodeListOf<Element>, name: string, value: string) {
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

export function splitOnFirst(s: string, c: string): string[] {
    if (!s) return [s];
    let pos = s.indexOf(c);
    return pos >= 0 ? [s.substring(0, pos), s.substring(pos + 1)] : [s];
}
export function splitOnLast(s: string, c: string): string[] {
    if (!s) return [s];
    let pos = s.lastIndexOf(c);
    return pos >= 0
        ? [s.substring(0, pos), s.substring(pos + 1)]
        : [s];
}
export function leftPart(s:string, needle:string) {
    if (s == null) return null;
    let pos = s.indexOf(needle);
    return pos == -1
        ? s
        : s.substring(0, pos);
}
export function rightPart(s:string, needle:string) {
    if (s == null) return null;
    let pos = s.indexOf(needle);
    return pos == -1
        ? s
        : s.substring(pos + needle.length);
}
export function lastLeftPart(s:string, needle:string) {
    if (s == null) return null;
    let pos = s.lastIndexOf(needle);
    return pos == -1
        ? s
        : s.substring(0, pos);
}
export function lastRightPart(s:string, needle:string) {
    if (s == null) return null;
    let pos = s.lastIndexOf(needle);
    return pos == -1
        ? s
        : s.substring(pos + needle.length);
}
export function chop(str:string, len:number=1) {
    len = Math.abs(len);
    return str ? len < str.length ? str.substring(0, str.length - len) : '' : str;
}
export function onlyProps(obj:{[index:string]:any}, keys:string[]) {
    let to:{[index:string]:any} = {};
    keys.forEach(key => to[key] = obj[key]);
    return to;
}

function splitCase(t: string) {
    return typeof t != 'string' ? t : t.replace(/([A-Z]|[0-9]+)/g, ' $1').replace(/_/g, ' ').trim();
}

export function humanize(s) { return (!s || s.indexOf(' ') >= 0 ? s : splitCase(s)); }

export function queryString(url: string): any {
    if (!url || url.indexOf('?') === -1) return {};
    let pairs = splitOnFirst(url, '?')[1].split('&');
    let map = {};
    for (let i = 0; i < pairs.length; ++i) {
        let p = pairs[i].split('=');
        map[p[0]] = p.length > 1
            ? decodeURIComponent(p[1].replace(/\+/g, ' '))
            : null;
    }
    return map;
}

export function combinePaths(...paths: string[]): string {
    let parts = [], i, l;
    for (i = 0, l = paths.length; i < l; i++) {
        let arg = paths[i];
        parts = arg.indexOf("://") === -1
            ? parts.concat(arg.split("/"))
            : parts.concat(arg.lastIndexOf("/") === arg.length - 1 ? arg.substring(0, arg.length - 1) : arg);
    }
    let combinedPaths = [];
    for (i = 0, l = parts.length; i < l; i++) {
        let part = parts[i];
        if (!part || part === ".") continue;
        if (part === "..") combinedPaths.pop();
        else combinedPaths.push(part);
    }
    if (parts[0] === "") combinedPaths.unshift("");
    return combinedPaths.join("/") || (combinedPaths.length ? "/" : ".");
}

export function createPath(route: string, args: any) {
    let argKeys = {};
    for (let k in args) {
        argKeys[k.toLowerCase()] = k;
    }
    let parts = route.split("/");
    let url = "";
    for (let i = 0; i < parts.length; i++) {
        let p = parts[i];
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
}

export function createUrl(route: string, args: any) {
    let url = createPath(route, args);
    return appendQueryString(url, args);
}

export function appendQueryString(url: string, args: any): string {
    for (let k in args) {
        if (args.hasOwnProperty(k)) {
            url += url.indexOf("?") >= 0 ? "&" : "?";
            url += k + "=" + qsValue(args[k]);
        }
    }
    return url;
}

function qsValue(arg: any) {
    if (arg == null)
        return "";
    if (typeof Uint8Array != "undefined" && arg instanceof Uint8Array)
        return bytesToBase64(arg as Uint8Array);
    return encodeURIComponent(arg) || "";
}

//from: https://github.com/madmurphy/stringview.js/blob/master/stringview.js
export function bytesToBase64(aBytes: Uint8Array): string {
    let eqLen = (3 - (aBytes.length % 3)) % 3, sB64Enc = "";
    for (let nMod3, nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
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

function uint6ToB64(nUint6: number) : number {
     return nUint6 < 26 ?
      nUint6 + 65
    : nUint6 < 52 ?
      nUint6 + 71
    : nUint6 < 62 ?
      nUint6 - 4
    : nUint6 === 62 ? 43
    : nUint6 === 63 ? 47 : 65;
}

//JsonServiceClient.toBase64 requires IE10+ or node
interface NodeBuffer extends Uint8Array {
    toString(encoding?: string, start?: number, end?: number): string;
}
interface Buffer extends NodeBuffer { }
declare let Buffer: {
    from (str: string, encoding?: string): Buffer;
}
function _btoa(base64:string) {
    return typeof btoa == 'function'
        ? btoa(base64)
        : Buffer.from(base64).toString('base64');
}
function _atob(base64:string) {
    return typeof atob == 'function'
        ? atob(base64)
        : Buffer.from(base64, 'base64').toString();
}

//from: http://stackoverflow.com/a/30106551/85785
JsonServiceClient.toBase64 = (str:string) => 
    _btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match:any, p1:string) =>
        String.fromCharCode(new Number('0x' + p1).valueOf())
    ));

export function stripQuotes(s:string) { return s && s[0] == '"' && s[s.length] == '"' ? s.slice(1,-1) : s; }

export function tryDecode(s:string) {
    try {
        return decodeURIComponent(s);
    } catch(e) {
        return s;
    }
}

export function parseCookie(setCookie:string): Cookie {
    if (!setCookie)
        return null;
    let to:Cookie = null;
    let pairs = setCookie.split(/; */);
    for (let i=0; i<pairs.length; i++) {
        let pair = pairs[i];
        let parts = splitOnFirst(pair, '=');
        let name = parts[0].trim();
        let value = parts.length > 1 ? tryDecode(stripQuotes(parts[1].trim())) : null;
        if (i == 0) {
            to = { name, value, path: "/" };
        } else {
            let lower = name.toLowerCase();
            if (lower == "httponly") {
                to.httpOnly = true;
            } else if (lower == "secure") {
                to.secure = true;
            } else if (lower == "expires") {
                to.expires = new Date(value);

                // MS Edge returns Invalid Date when using '-' in "12-Mar-2037"
                if (to.expires.toString() === "Invalid Date") {
                    to.expires = new Date(value.replace(/-/g, " ")); 
                }
            } else {
                to[name] = value;
            }
        }
    }
    return to; 
}

export function normalizeKey(key: string) { return key.toLowerCase().replace(/_/g, ''); }

function isArray(o: any) { return Object.prototype.toString.call(o) === '[object Array]'; }

export function normalize(dto: any, deep?: boolean) {
    if (isArray(dto)) {
        if (!deep) return dto;
        const to = [];
        for (let i = 0; i < dto.length; i++) {
            to[i] = normalize(dto[i], deep);
        }
        return to;
    }
    if (typeof dto != "object") return dto;
    let o = {};
    for (let k in dto) {
        o[normalizeKey(k)] = deep ? normalize(dto[k], deep) : dto[k];
    }
    return o;
}

export function getField(o: any, name: string) {
    return o == null || name == null ? null :
        o[name] ||
        o[Object.keys(o).filter(k => normalizeKey(k) === normalizeKey(name))[0] || ''];
}
    
export function parseResponseStatus(json:string, defaultMsg=null) {
    try {
        let err = JSON.parse(json);
        return sanitize(err.ResponseStatus || err.responseStatus);
    } catch (e) {
        return {
            message: defaultMsg || e.message || e,
            __error: { error: e, json: json }
        };
    }
}

export function toFormData(o:any) {
    if (typeof window == "undefined") return;
    let formData = new FormData();
    for (let name in o) {
        formData.append(name, o[name]);
    }
    return formData;    
}

export function toObject(keys: any) {
    const to = {};
    if (!keys) return to;
    if (typeof keys != "object")
        throw new Error("keys must be an Array of object keys");

    const arr = Array.prototype.slice.call(keys);
    arr.forEach(key => {
        if (this[key]) {
            to[key] = this[key];
        }
    });
    return to;
}

export function errorResponseSummary() {
    const responseStatus = this.responseStatus || this.ResponseStatus;
    if (responseStatus == null)
        return undefined;

    const status = responseStatus.ErrorCode ? sanitize(responseStatus) : responseStatus;
    return !status.errors || status.errors.length == 0
        ? status.message || status.errorCode
        : undefined;
}

export function errorResponseExcept(fieldNames:string[]|string) {
    const responseStatus = this.responseStatus || this.ResponseStatus;
    if (responseStatus == null)
        return undefined;

    const status = responseStatus.ErrorCode ? sanitize(responseStatus) : responseStatus;

    const names = toVarNames(fieldNames);

    if (names && !(status.errors == null || status.errors.length == 0)) {
        const lowerFieldsNames = names.map(x => (x || '').toLowerCase());
        for (let field of status.errors) {
            if (lowerFieldsNames.indexOf((field.fieldName || '').toLowerCase()) !== -1) {
                return undefined;
            }
        }
        for (let field of status.errors) {
            if (lowerFieldsNames.indexOf((field.fieldName || '').toLowerCase()) === -1) {
                return field.message || field.errorCode;
            }
        }
    }

    return status.message || status.errorCode || undefined;
}

export function errorResponse(fieldName:string) {
    if (fieldName == null)
        return errorResponseSummary.call(this);

    const responseStatus = this.responseStatus || this.ResponseStatus;
    if (responseStatus == null)
        return undefined;

    const status = responseStatus.ErrorCode ? sanitize(responseStatus) : responseStatus;
    if (status.errors == null || status.errors.length == 0)
        return undefined;

    const field = status.errors.find(x => (x.fieldName || '').toLowerCase() == fieldName.toLowerCase());
    return field 
        ? field.message || field.errorCode 
        : undefined;
}

export function toDate(s: string|any) { return !s ? null 
    : typeof (s as Date).getMonth === 'function' 
        ? s as Date 
        : s[0] == '/' 
            ? new Date(parseFloat(/Date\(([^)]+)\)/.exec(s)[1])) 
            : new Date(s); 
}
export function toDateFmt(s: string) { return dateFmt(toDate(s)); }
export function padInt(n: number) { return n < 10 ? '0' + n : n; }
export function dateFmt(d: Date = new Date()) { return d.getFullYear() + '/' + padInt(d.getMonth() + 1) + '/' + padInt(d.getDate()); }
export function dateFmtHM(d: Date = new Date()) { return d.getFullYear() + '/' + padInt(d.getMonth() + 1) + '/' + padInt(d.getDate()) + ' ' + padInt(d.getHours()) + ":" + padInt(d.getMinutes()); }
export function timeFmt12(d: Date = new Date()) { return padInt((d.getHours() + 24) % 12 || 12) + ":" + padInt(d.getMinutes()) + ":" + padInt(d.getSeconds()) + " " + (d.getHours() > 12 ? "PM" : "AM"); }
export function toLocalISOString(d: Date = new Date()) {
    return `${d.getFullYear()}-${padInt(d.getMonth() + 1)}-${padInt(d.getDate())}T${padInt(d.getHours())}:${padInt(d.getMinutes())}:${padInt(d.getSeconds())}`;
}

export interface ICreateElementOptions {
  insertAfter?:Element|null
}
function bsAlert(msg:string) { return '<div class="alert alert-danger">' + msg + '</div>'; }
function attr(e:Element,name:string) { return e.getAttribute(name); }
function sattr(e:Element,name:string,value:string) { return e.setAttribute(name,value); }
function rattr(e:Element,name:string) { return e.removeAttribute(name); }
  
export function createElement(tagName:string, options?:ICreateElementOptions, attrs?:any) {
    const keyAliases:{ [index:string]: string } = {className: 'class', htmlFor: 'for'};
    const el = document.createElement(tagName);
  if (attrs) {
    for (const key in attrs) {
      sattr(el,keyAliases[key] || key,attrs[key]);
    }
  }
  if (options && options.insertAfter) {
    options.insertAfter.parentNode!.insertBefore(el, options.insertAfter.nextSibling);
  }
  return el;
}
function showInvalidInputs(this:HTMLInputElement) {
  let errorMsg: string|null = attr(this,'data-invalid');
  if (errorMsg) {
    //[data-invalid] can either be on input control or .form-check container containing group of radio/checkbox
    const isCheck = this.type === "checkbox" || this.type === "radio" || hasClass(this, 'form-check');
    const elFormCheck = isCheck ? parent(this, 'form-check') : null;
    if (!isCheck)
      addClass(this, 'is-invalid');
    else
      addClass(elFormCheck || this.parentElement, 'is-invalid form-control');

    const elNext = this.nextElementSibling;
    const elLast = elNext && (attr(elNext,'for') === this.id || elNext.tagName === "SMALL")
        ? (isCheck ? elFormCheck || elNext.parentElement : elNext)
        : this;
    const elError = elLast != null && elLast.nextElementSibling && hasClass(elLast.nextElementSibling, 'invalid-feedback')
        ? elLast.nextElementSibling
        : createElement("div", {insertAfter: elLast}, {className: 'invalid-feedback'});
    elError.innerHTML = errorMsg;
  }
}
function parent(el:Element|HTMLElement|null,cls:string):Element {
  while (el != null && !hasClass(el,cls))
    el = el.parentElement;
  return el as Element;
}

function hasClass(el:Element|HTMLElement|null, cls:string) { return !el ? false 
    : el.classList 
        ? el.classList.contains(cls) 
        : (" " + el!.className + " ").replace(/[\n\t\r]/g, " ").indexOf(" " + cls + " ") > -1;
}
function addClass(el:Element|HTMLElement|null, cls:string) { return !el ? null 
    : el.classList 
        ? el.classList.add(...cls.split(' ')) 
            : !hasClass(el, cls) 
            ? el.className = (el.className + " " + cls).trim() : null;
}
function remClass(el:Element|HTMLElement|null, cls:string) { return !el ? null 
    : el.classList 
        ? el.classList.remove(cls) 
        : hasClass(el, cls) 
            ? el.className = el.className.replace(/(\s|^)someclass(\s|$)/, ' ') 
            : null;
}
  
// init generic behavior to bootstrap elements
export function bootstrap(el?:Element) {
  const els = (el || document).querySelectorAll('[data-invalid]'); 
  for (let i=0; i<els.length; i++) {
    showInvalidInputs.call(els[i] as HTMLInputElement);
  }
}

if (typeof window != "undefined" && (window as any).Element !== undefined) { // polyfill IE9+
  if (!Element.prototype.matches) {
      Element.prototype.matches = (Element.prototype as any).msMatchesSelector ||
          Element.prototype.webkitMatchesSelector;
  }
  if (!Element.prototype.closest) {
      Element.prototype.closest = function(s:string) {
      let el:Element = this;
      do {
          if (el.matches(s)) return el;
          el = el.parentElement || el.parentNode as Element;
      } while (el !== null && el.nodeType === 1);
      return null;
      };
  }
}

function handleEvent(handlers:any,el:Node=document,type:string)
{
    el.addEventListener(type, function(evt) {
        const evtData = `data-${type}`;
        let el = evt.target as Element;
        let x = attr(el,evtData);
        if (!x) {
            let elParent = el.closest(`[${evtData}]`);
            if (elParent) {
                x = attr(elParent,evtData);
                el = elParent;
            }
        }
        if (!x) return;

        let pos = x.indexOf(':');
        if (pos >= 0) {
            const cmd = x.substring(0, pos);
            const data = x.substring(pos + 1);
            const fn = handlers[cmd];
            if (fn) {
                fn.apply(el, data.split(','));
            }
        } else {
            const fn = handlers[x];
            if (fn) {
                fn.apply(el, [].slice.call(arguments));
            }
        }
    });
}

export interface IBindHandlersOptions
{
    events: string[]
}
export function bindHandlers(handlers:any,el:Document|Element=document,opt:IBindHandlersOptions=null) {
    if (opt && opt.events) {
        opt.events.forEach(evt => handleEvent(handlers, el, evt));
    } else {        
        ['click','dblclick','change','focus','blur','focusin','focusout','select','keydown','keypress','keyup','hover','toggle','input']
        .forEach(evt => {
            if (el.querySelector(`[data-${evt}]`)) {
                handleEvent(handlers, el, evt);
            }
        });
    }
}

export interface IAjaxFormOptions {
  type?:string,
  url?: string,
  model?: any,
  credentials?: RequestCredentials;
  validate?:(this:HTMLFormElement) => boolean,
  onSubmitDisable?:string,
  submit?:(this:HTMLFormElement,options:IAjaxFormOptions) => Promise<any>,
  success?:(this:HTMLFormElement,result:any) => void,
  error?:(this:HTMLFormElement,e:any) => void,
  complete?:(this:HTMLFormElement) => void,
  requestFilter?: (req:IRequestInit) => void,
  responseFilter?:(res:Response) => void,
  errorFilter?:(this:IValidation,message:string,errorCode:string,type:string) => void,
  messages?:{ [index:string]: string },
}

export function bootstrapForm (form:HTMLFormElement|null, options:IAjaxFormOptions) {
  if (!form) return;
  if (options.model) 
    populateForm(form,options.model);
  form.onsubmit = function (evt) {
    evt.preventDefault();
    options.type = "bootstrap-v4";
    return ajaxSubmit(form, options);
  }
}

export interface IValidation {
  overrideMessages:boolean,
  messages: { [index:string]: string },
  errorFilter?:(this:IValidation,message:string,errorCode:string,type:string) => void,
}

function applyErrors(f: HTMLFormElement, status:any, opt:IAjaxFormOptions) {
    const validation:IValidation = {
        overrideMessages: false,
        messages: {
          NotEmpty: "Required",
          NotNull: "Required",
          Email: "Invalid email",
          AlreadyExists: "Already exists"
        },
        errorFilter: function (errorMsg:string, errorCode:string, type:string) {
          return this.overrideMessages
              ? this.messages[errorCode] || errorMsg || splitCase(errorCode)
              : errorMsg || splitCase(errorCode);
        }
      };
      
    clearErrors(f);
    if (!status) return;
    status = sanitize(status);

    addClass(f, "has-errors");

    const bs4 = opt && opt.type === "bootstrap-v4";
    const v:IValidation = {...validation, ...opt} as object as IValidation;
    if (opt.messages) {
      v.overrideMessages = true;
    }

    const filter = v.errorFilter.bind(v);
    const errors = status.errors;
    let $ = f.querySelectorAll.bind(f);

    if (errors && errors.length) {
      let fieldMap:any = {}, fieldLabelMap:any = {};
      $("input,textarea,select,button").forEach(x => {
        const el = x as HTMLInputElement;
        const prev = el.previousElementSibling;
        const next = el.nextElementSibling;
        const isCheck = el.type === "radio" || el.type === "checkbox";
        const fieldId = (!isCheck ? el.id : null) || attr(el,"name");
        if (!fieldId) return;

        const key = fieldId.toLowerCase();
        fieldMap[key] = el;
        if (!bs4) {
          if (hasClass(prev,"help-inline") || hasClass(prev,"help-block")) {
            fieldLabelMap[key] = prev;
          } else if (hasClass(next,"help-inline") || hasClass(next,"help-block")) {
            fieldLabelMap[key] = next;
          }
        }
      });
      
      $(".help-inline[data-for],.help-block[data-for]").forEach(el => {
        const key = attr(el,"data-for")!.toLowerCase();
        fieldLabelMap[key] = el;
      });
      
      for (let error of errors) {
        const key = (error.fieldName || "").toLowerCase();
        const field:HTMLInputElement = fieldMap[key];
        if (field) {
          if (!bs4) {
            addClass(field,"error");
            addClass(field.parentElement,"has-error");
          } else {
            const type = attr(field,'type'), isCheck = type === "radio" || type === "checkbox";
            if (!isCheck) addClass(field,"is-invalid");
            sattr(field,"data-invalid", filter(error.message, error.errorCode, "field"));
          }
        }
        const lblErr: HTMLElement = fieldLabelMap[key];
        if (!lblErr) 
          continue;

        addClass(lblErr,"error");
        lblErr.innerHTML = filter(error.message, error.errorCode, "field");
        lblErr.style.display = 'block';
      }

      $("[data-validation-summary]").forEach(el => {
        const fields = attr(el,'data-validation-summary')!.split(',');
        const summaryMsg = errorResponseExcept.call(status, fields);
        if (summaryMsg)
          el.innerHTML = bsAlert(summaryMsg);
      });
    } else {
      const htmlSummary = filter(status.message || splitCase(status.errorCode), status.errorCode, "summary");
      if (!bs4) {
          $(".error-summary").forEach(el => {
          el.innerHTML = htmlSummary;
          (el as HTMLElement).style.display = 'block';
        })
      } else {
          $('[data-validation-summary]').forEach(el => 
              el.innerHTML = htmlSummary[0] === "<" ? htmlSummary : bsAlert(htmlSummary));
      }
    }
    return f;
}

function clearErrors(f: HTMLFormElement) {
  remClass(f,'has-errors');    
  let $ = f.querySelectorAll.bind(f);
  $('.error-summary').forEach(el => {
    el.innerHTML = "";
    (el as HTMLElement).style.display = "none";
  });
  $('[data-validation-summary]').forEach(el => {
    el.innerHTML = "";
  });
  $('.error').forEach(el => remClass(el,'error'));
  $('.form-check.is-invalid [data-invalid]').forEach(el => {
    rattr(el,'data-invalid');
  });
  $('.form-check.is-invalid').forEach(el => remClass(el,'form-control'));
  $('.is-invalid').forEach(el => {
    remClass(el, 'is-invalid');
    rattr(el,'data-invalid');
  });
  $('.is-valid').forEach(el => remClass(el,'is-valid'));
}

enum Types {
  MultiPart = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Json = 'application/json'
}

export function toVarNames(names:string[]|string|null) { return !names ? [] :
    isArray(names)
      ? names as string[]
      : (names as string).split(',').map(s => s.trim());
}
    
export function formSubmit(this:HTMLFormElement,options:IAjaxFormOptions={}) {
  const f = this;
  const contentType = attr(f,'enctype') || Types.UrlEncoded;
  if (contentType == Types.MultiPart && (window as any).FormData === undefined)
    throw new Error(`FormData Type is needed to send '${Types.MultiPart}' Content Types`);

  let body;

  try {
    body = serializeForm(f, contentType);
  } catch (e) {
    throw new Error(`${e.message || e}`);
  }

  const headers = new Headers();
  headers.set("Accept", Types.Json);
  headers.set("Content-Type", contentType);

  const req:RequestInit = {
    method: attr(f,'method') || 'POST',
    credentials: 'include',
    mode: 'cors',
    headers,
    body,
  };
  if (options.requestFilter)
    options.requestFilter(req);

  return fetch(new Request(options.url || attr(f,'action')!, req))
    .catch(e => { throw new Error(`Network is unreachable (${e.message || e})`); })
    .then(r => {
      if (options.responseFilter)
        options.responseFilter(r);

      if (!r.ok) {
        return r.json()
          .catch(e => { throw new Error("The request failed with " + (r.statusText || r.status)); })
          .then(o => { throw Object.assign(new ErrorResponse(), sanitize(o)); });
      }

      handleHeaderBehaviors(f,r);
      return fromResponse(r);
    });
}

function handleHeaderBehaviors(f:HTMLFormElement,r:Response) {
  const loc = r.headers.get('X-Location');
  if (loc) {
    location.href = loc;
  }

  const evt = r.headers.get('X-Trigger');
  if (evt) {
    const pos = evt.indexOf(':');
    const cmd = pos >= 0 ? evt.substring(0, pos) : evt;
    const data = pos >= 0 ? evt.substring(pos + 1) : null;
    triggerEvent(f, cmd, data ? [data] : []);
  }
}

export function ajaxSubmit(f:HTMLFormElement,options:IAjaxFormOptions={}) {
  const type = options.type;
  const bs4 = type === "bootstrap-v4";
  clearErrors(f);

  try {
    if (options.validate && options.validate.call(f) === false)
      return false;
  } catch (e) {
    return false;
  }
  
  let $ = f.querySelectorAll.bind(f);
  addClass(f, 'loading');
  const disableSel = options.onSubmitDisable == null
    ? "[type=submit]"
    : options.onSubmitDisable;
  const disable = disableSel != null && disableSel != ""; 
  if (disable) {
    $(disableSel).forEach(el => {
      sattr(el,'disabled','disabled');
    });
  }
  
  function handleError(errMsg:string|null,err:any=null) {
    if (err) {
      applyErrors(f, err.ResponseStatus || err.responseStatus, {...options});
    }
    else if (errMsg) {
      addClass(f,"has-errors");
      const errorSummary = $(".error-summary")[0];
      if (errorSummary) {
        errorSummary.innerHTML = errMsg;
      }
      if (bs4) {
        const elSummary = $('[data-validation-summary]')[0];
        if (elSummary) {
          elSummary.innerHTML = bsAlert(errMsg);
        }
      }
    }
    if (options.error) {
      options.error.call(f, err);
    }
    if (bs4) {
      $('[data-invalid]').forEach(el => showInvalidInputs.call(el as HTMLInputElement));
    }
  }

  const submitFn = options.submit || formSubmit;
  return submitFn.call(f, options)
    .then(obj => {
      if (options.success)
        options.success.call(f, obj);
        return false;
    })
    .catch(e => {
      if (e.responseStatus)
        handleError(null, e);
      else
        handleError(`${e.message || e}`, null);
    })
    .finally(() => {
      remClass(f, 'loading');
      if (disable) {
        $(disableSel).forEach(el => {
          rattr(el,'disabled');
        });
      }
      if (options.complete) {
        options.complete.call(f);
      }
    });
}
  
function fromResponse(r:Response) {
  const contentType = r.headers.get("content-type");
  const isJson = contentType && contentType.indexOf(Types.Json) !== -1;
  if (isJson)
    return r.json();

  let len = r.headers.get("content-length");
  if (len === "0" || (len == null && !isJson))
    return null;

  return r.json();
}

export function serializeForm(form:HTMLFormElement, contentType:string|null=null) {
  return contentType === Types.MultiPart
    ? new FormData(form)
    : contentType == Types.Json
      ? JSON.stringify(serializeToObject(form))
      : serializeToUrlEncoded(form);
}

function formEntries<T>(form:HTMLFormElement, state:T, fn:(state:T,name:string,value:string|Blob) => void) : T {
  let field, f: any = form;
  let len = f.elements.length;
  for (let i = 0; i < len; i++) {
    field = f.elements[i];
    if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
      if (field.type == 'select-multiple') {
        for (let j = f.elements[i].options.length - 1; j >= 0; j--) {
          if (field.options[j].selected)
            fn(state,field.name, field.options[j].value);
        }
      } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
        fn(state,field.name, field.value);
      }
    }
  }
  return state;
}

export function serializeToObject(form:HTMLFormElement) { 
    return formEntries(form, {} as any, (to,name,value) => to[name] = value);
}

export function serializeToUrlEncoded(form:HTMLFormElement) {
  const to = formEntries(form, [] as string[], (s,name,value) =>
      typeof value == 'string' 
          ? s.push(encodeURIComponent(name) + "=" + encodeURIComponent(value))
          : null);
  return to.join('&').replace(/%20/g, '+');
}

export function serializeToFormData(form:HTMLFormElement) {
    return formEntries(form, new FormData(), (to,name,value) => to.append(name, value));
}

export function triggerEvent(el:Element,name:string,data:any=null) {
  if (document.createEvent) {
    let evt = document.createEvent(name == 'click' || name.startsWith('mouse') ? 'MouseEvents' : 'HTMLEvents');
    evt.initEvent(name, true, true);
    (evt as any).data = data;
    el.dispatchEvent(evt);
  } else {
    let evt = (document as any).createEventObject();
    (el as any).fireEvent("on" + name, evt);
  }
}

export function populateForm(form:HTMLFormElement, model:any) {
  if (!model) return;

  const toggleCase = (s:string) => !s ? s : 
    s[0] === s[0].toUpperCase() ? toCamelCase(s) : s[0] === s[0].toLowerCase() ? toPascalCase(s) : s;

  for (let key in model) {
    let val = model[key];

    if (typeof val == 'undefined' || val === null)
        val = '';

    const el = form.elements.namedItem(key) || form.elements.namedItem(toggleCase(key));
    const input = el as HTMLInputElement;
    if (!el)
      continue;

    const type = input.type || el[0].type;
    switch (type) {
      case 'radio':
      case 'checkbox':
        const len = (el as any).length;
        for (let i=0; i < len; i++) {
          el[i].checked = (val.indexOf(el[i].value) > -1);
        }
        break;
      case 'select-multiple':
        const values = isArray(val) ? val : [val];
        const select = el as HTMLSelectElement;
        for (let i = 0; i < select.options.length; i++) {
          select.options[i].selected = (values.indexOf(select.options[i].value) > -1);
        }
        break;
      case 'select':
      case 'select-one':
        input.value = val.toString() || val;
        break;
      case 'date':
        const d = toDate(val);
        if (d) input.value = d.toISOString().split('T')[0];
        break;
      default:
        input.value = val;
        break;
    }
  }
}

export function trimEnd(s: string, c: string) {
    let end = s.length;
    while (end > 0 && s[end - 1] === c) {
        --end;
    }
    return (end < s.length) ? s.substring(0, end) : s;
}
export function safeVarName(s: string) {
    return s.replace(/[\W]+/g, '');
}
export function pick(o:any, keys:string[]) {
    const to = {};
    for (const k in o) {
        if (o.hasOwnProperty(k) && keys.indexOf(k) >= 0) {
            to[k] = o[k];
        }
    }
    return to;
}
export function omit(o:any, keys:string[]) {
    const to = {};
    for (const k in o) {
        if (o.hasOwnProperty(k) && keys.indexOf(k) < 0) {
            to[k] = o[k];
        }
    }
    return to;
}

/* NAV */

export function activeClassNav(x: NavItem, activePath: string) {
    return x.href != null && (x.exact || activePath.length <= 1
        ? trimEnd(activePath, '/').toLowerCase() === trimEnd((x.href), '/').toLowerCase()
        : trimEnd(activePath, '/').toLowerCase().startsWith(trimEnd((x.href), '/').toLowerCase()))
        ? 'active'
        : null;
}

export function activeClass(href: string|null, activePath: string, exact?: boolean) {
    return href != null && (exact || activePath.length <= 1
        ? trimEnd(activePath, '/').toLowerCase() === trimEnd(href, '/').toLowerCase()
        : trimEnd(activePath, '/').toLowerCase().startsWith(trimEnd(href, '/').toLowerCase()))
        ? 'active'
        : null;
}

function bootstrapColors() { return ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']; }
export const BootstrapColors = bootstrapColors();
export function btnColorClass(props: any) {
    for (const color of bootstrapColors()) {
        if (props[color]) {
            return 'btn-' + color;
        }
        if (props['outline-' + color]) {
            return 'btn-outline-' + color;
        }
    }
    return null;
}
function bootstrapSizes() { return ['xs','sm','md','lg']; }
export const BootstrapSizes = bootstrapSizes();
export function btnSizeClass(props:any) {
    for (const size of bootstrapSizes()) {
        if (props[size]) {
            return 'btn-' + size;
        }
    }
    return null;
};
export function btnClasses(props:any) {
    const to = [];
    const color = btnColorClass(props);
    if (color) {
        to.push(color);
    }
    const size = btnSizeClass(props);
    if (size) {
        to.push(size);
    }
    if (props.block) {
        to.push('btn-block');
    }
    return to;
}

export class NavDefaults {
    public static navClass = 'nav';
    public static navItemClass = 'nav-item';
    public static navLinkClass = 'nav-link';

    public static childNavItemClass = 'nav-item dropdown';
    public static childNavLinkClass = 'nav-link dropdown-toggle';
    public static childNavMenuClass = 'dropdown-menu';
    public static childNavMenuItemClass = 'dropdown-item';

    public static create() { return new NavOptions(); }
    public static forNav(options?: NavOptions|null) { return options || NavDefaults.create(); }
    public static overrideDefaults(targets: NavOptions | null | undefined, source: NavOptions) {
        if (targets == null) { return source; }
        targets = Object.assign({}, targets); // clone
        if (targets.navClass === NavDefaults.navClass && source.navClass != null) { targets.navClass = source.navClass; }
        if (targets.navItemClass === NavDefaults.navItemClass && source.navItemClass != null) { targets.navItemClass = source.navItemClass; }
        if (targets.navLinkClass === NavDefaults.navLinkClass && source.navLinkClass != null) { targets.navLinkClass = source.navLinkClass; }
        if (targets.childNavItemClass === NavDefaults.childNavItemClass && source.childNavItemClass != null) { targets.childNavItemClass = source.childNavItemClass; }
        if (targets.childNavLinkClass === NavDefaults.childNavLinkClass && source.childNavLinkClass != null) { targets.childNavLinkClass = source.childNavLinkClass; }
        if (targets.childNavMenuClass === NavDefaults.childNavMenuClass && source.childNavMenuClass != null) { targets.childNavMenuClass = source.childNavMenuClass; }
        if (targets.childNavMenuItemClass === NavDefaults.childNavMenuItemClass && source.childNavMenuItemClass != null) {
            targets.childNavMenuItemClass = source.childNavMenuItemClass;
        }
        return targets;
    }
    public static showNav(navItem: NavItem, attributes: string[]) {
        if (attributes == null || attributes.length === 0) {
            return navItem.show == null;
        }
        if (navItem.show != null && attributes.indexOf(navItem.show) < 0) {
            return false;
        }
        if (navItem.hide != null && attributes.indexOf(navItem.hide) >= 0) {
            return false;
        }
        return true;
    }
}
export class NavLinkDefaults {
    public static forNavLink(options?: NavOptions|null) { return options || NavDefaults.create(); }
}
export class NavbarDefaults {
    public static navClass = 'navbar-nav';
    public static create() { return new NavOptions({ navClass: NavbarDefaults.navClass }); }
    public static forNavbar(options?: NavOptions|null) { return NavDefaults.overrideDefaults(options, NavbarDefaults.create()); }
}
export class NavButtonGroupDefaults {
    public static navClass = 'btn-group';
    public static navItemClass = 'btn btn-primary';
    public static create() { return new NavOptions({ navClass: NavButtonGroupDefaults.navClass, navItemClass: NavButtonGroupDefaults.navItemClass }); }
    public static forNavButtonGroup(options?: NavOptions|null) { return NavDefaults.overrideDefaults(options, NavButtonGroupDefaults.create()); }
}
export class LinkButtonDefaults {
    public static navItemClass = 'btn';
    public static create() { return new NavOptions({ navItemClass: LinkButtonDefaults.navItemClass }); }
    public static forLinkButton(options?: NavOptions|null) { return NavDefaults.overrideDefaults(options || null, LinkButtonDefaults.create()); }
}

export class UserAttributes
{
    public static fromSession(session:IAuthSession | null): string[] {
        const to = [];
        if (session != null) {
            to.push('auth');
            if (session.roles) {
                to.push(...session.roles.map(x => 'role:' + x));
            }
            if (session.permissions) {
                to.push(...session.permissions.map(x => 'perm:' + x));
            }
        }
        return to;
    }
}

export class NavOptions {

    public static fromSession(session:IAuthSession | null, to?: NavOptions): NavOptions {
        to = to || new NavOptions();
        to.attributes = UserAttributes.fromSession(session);
        return to;
    }

    public attributes: string[];
    public activePath?: string;
    public baseHref?: string;
    public navClass?: string;
    public navItemClass?: string;
    public navLinkClass?: string;
    public childNavItemClass?: string;
    public childNavLinkClass?: string;
    public childNavMenuClass?: string;
    public childNavMenuItemClass?: string;

    public constructor(init?: Partial<NavOptions>) {
        this.attributes = [];
        this.navClass = NavDefaults.navClass;
        this.navItemClass = NavDefaults.navItemClass;
        this.navLinkClass = NavDefaults.navLinkClass;
        this.childNavItemClass = NavDefaults.childNavItemClass;
        this.childNavLinkClass = NavDefaults.childNavLinkClass;
        this.childNavMenuClass = NavDefaults.childNavMenuClass;
        this.childNavMenuItemClass = NavDefaults.childNavMenuItemClass;
        (Object as any).assign(this, init);
    }
}

export function classNames(...args: any[]) {
    const classes = [];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (!arg) continue;

        const argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
            const inner = classNames.apply(null, arg);
            if (inner) {
                classes.push(inner);
            }
        } else if (argType === 'object') {
            for (let key of Object.keys(arg)) {
                if (arg[key]) {
                    classes.push(key);
                }
            }
        }
    }
    return classes.join(' ');
}

export function fromXsdDuration(xsd:string) {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let ms = 0.0;

    let t = splitOnFirst(xsd.substring(1),'T');
    let hasTime = t.length == 2;

    let d = splitOnFirst(t[0], 'D');
    if (d.length == 2) {
        days = parseInt(d[0], 10) || 0;
    }

    if (hasTime) {
        let h = splitOnFirst(t[1],'H');
        if (h.length == 2) {
            hours = parseInt(h[0], 10) || 0;
        }
        let m = splitOnFirst(h[h.length-1],'M');
        if (m.length == 2) {
            minutes = parseInt(m[0],10) || 0;
        }
        let s = splitOnFirst(m[m.length-1],'S');
        if (s.length == 2) {
            ms = parseFloat(s[0]);
        }
        seconds = ms|0;
        ms -= seconds;
    }

    let totalSecs = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;
    return totalSecs + ms
}

function timeFmt(time:number, asXsd:boolean) {
    let totalSeconds = time;
    let wholeSeconds = time|0;
    let seconds = wholeSeconds;
    let sec = (seconds >= 60 ? seconds % 60 : seconds)
    seconds = (seconds / 60)
    let min = seconds >= 60 ? seconds % 60 : seconds
    seconds = (seconds / 60)
    let hours = seconds >= 24 ? seconds % 24 : seconds
    let days = seconds / 24
    let remainingSecs = sec + (totalSeconds - wholeSeconds);

    let sb = asXsd ? 'P' : '';
    if (asXsd) {
        if ((days|0) > 0) {
            sb += `${days|0}D`;
        }
        if (days == 0 || (hours + min + sec) + remainingSecs > 0) {
            sb += "T";
            if ((hours|0) > 0) {
                sb += `${hours|0}H`;
            }
            if ((min|0) > 0) {
                sb += `${min|0}M`;
            }
            if (remainingSecs > 0) {
                let secFmt = remainingSecs.toFixed(7);
                secFmt = trimEnd(trimEnd(secFmt,'0'),'.');
                sb += `${secFmt}S`;
            } else if (sb.length == 2) {
                sb += '0S';
            }
        }
    } else {
        if ((days|0) > 0) {
            sb += `${days|0}:`;
        }
        sb += `${padInt(hours|0)}:${padInt(min|0)}:`;
        if (remainingSecs > 0) {
            let secFmt = remainingSecs.toFixed(7);
            secFmt = trimEnd(trimEnd(secFmt,'0'),'.');
            sb += remainingSecs >= 10 ? `${secFmt}` : `0${secFmt}`;
        } else {
            sb += '00';
        }
    }
    return sb;
}
export function toXsdDuration(time:number) { return timeFmt(time,true); }
export function toTimeSpanFmt(time:number) { return timeFmt(time,false); }

export function flatMap(f:Function, xs:any[]) { return xs.reduce((r, x) => r.concat(f(x)), []); }
export function uniq(xs:string[]) { return Array.from(new Set(xs)).sort((x,y) => x > y ? 1 : -1); }
export function enc(o:any) {
    return o == null ? null : typeof o == 'string'
        ? o.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&#34;')
        : `${o}`;
}
export function htmlAttrs(o:any) {
    let sb = [];
    Object.keys(o).forEach(k => {
        if (sb.length > 0)
            sb.push(' ');
        sb.push(k);
        sb.push('="')
        sb.push(enc(o[k]));
        sb.push('"');
    })
    return sb.join('');
}

export function indexOfAny(str:string, needles:string[]) {
    for (let i = 0, len = needles.length; i < len; i++) {
        let pos = str.indexOf(needles[i]);
        if (pos >= 0) 
            return pos;
    }
    return -1;
}

export function isNullOrEmpty(o:any) {
    return (o === null || o === undefined || o === "");
}

// From .NET DateTime (WCF JSON or ISO Date) to JS Date
export function fromDateTime(dateTime:string) {
    return toDate(dateTime);
}

// From JS Date to .NET DateTime (WCF JSON Date)
export function toDateTime(date:Date) {
    return `\/Date(${date.getTime()})\/`;
}

// From .NET TimeSpan (XSD Duration) to JS String
export function fromTimeSpan(xsdDuration:string) {
    return xsdDuration;
}

// From JS String to .NET TimeSpan (XSD Duration)
export function toTimeSpan(xsdDuration:string) {
    return xsdDuration;
}

// From .NET Guid to JS String
export function fromGuid(xsdDuration:string) {
    return xsdDuration;
}

// From JS String to .NET Guid
export function toGuid(xsdDuration:string) {
    return xsdDuration;
}

// From .NET byte[] (Base64 String) to JVM signed byte[]
export function fromByteArray(base64:string) : Uint8Array {
    let binaryStr = _atob(base64);
    let len = binaryStr.length;
    let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
    }
    return bytes;
}

// From JS Uint8Array to .NET byte[] (Base64 String)
export function toByteArray(bytes:Uint8Array) : string {
    let str = String.fromCharCode.apply(null, bytes);
    return _btoa(str);
}

// From JS String to Base64 String
export function toBase64String(source:string) : string {
    return JsonServiceClient.toBase64(source);
}

export class StringBuffer {
    buffer_ = '';
    constructor(opt_a1?:any, ...var_args:any[]) {
        if (opt_a1 != null) 
            this.append.apply(this, arguments);
    }
    set(s:string) {
        this.buffer_ = '' + s;
    }
    append(a1:any, opt_a2?:any, ...var_args:any[]) {
        this.buffer_ += String(a1);
        if (opt_a2 != null) {
          for (let i = 1; i < arguments.length; i++) {
            this.buffer_ += arguments[i];
          }
        }
        return this;
    }
    clear() { this.buffer_ = ''; }
    getLength() { return this.buffer_.length; }
    toString() { return this.buffer_; }
}

export class JSV {
    public static ESCAPE_CHARS = ['"', ':', ',', '{', '}', '[', ']', '\r', '\n'];

    public static encodeString(str:string){
        if (str == null) return null;
        if (str === '') return '""';
        if (str.indexOf('"'))
            str = str.replace(/"/g,'""');
        return indexOfAny(str, JSV.ESCAPE_CHARS) >= 0
            ? '"' + str + '"'
            : str;
    }

    public static encodeArray(array:any[]) {
        let value, sb = new StringBuffer();
        for (let i=0, len=array.length; i<len; i++) {
            value = array[i];
            if (isNullOrEmpty(value) || typeof value === 'function') continue;
            if (sb.getLength() > 0)
                sb.append(',');
    
            sb.append(JSV.stringify(value));
        }
        return `[${sb.toString()}]`;
    }

    public static encodeObject(obj:any) {
        let value, sb = new StringBuffer();
        for (let key in obj) {
            value = obj[key];
            if (!obj.hasOwnProperty(key) || isNullOrEmpty(value) || typeof value === 'function') continue;

            if (sb.getLength() > 0)
                sb.append(',');

            sb.append(JSV.encodeString(key));
            sb.append(':');
            sb.append(JSV.stringify(value));
        }
        return `{${sb.toString()}}`;
    }

    public static stringify(obj:any) {
        if (obj === null || obj === undefined) return null;
        let typeOf = typeof(obj);
        if (typeOf === 'function' || typeOf === 'symbol') return null;
    
        if (typeOf === 'object') {
            let ctorStr = obj.constructor.toString().toLowerCase();
            if (ctorStr.indexOf('string') >= 0)
                return JSV.encodeString(obj);
            if (ctorStr.indexOf('boolean') >= 0)
                return obj ? 'true' : 'false';
            if (ctorStr.indexOf('number') >= 0)
                return obj;
            if (ctorStr.indexOf('date') >= 0)
                return JSV.encodeString(toLocalISOString(obj));
            if (ctorStr.indexOf('array') >= 0)
                return JSV.encodeArray(obj);
            return JSV.encodeObject(obj);
        }
        switch(typeOf) {
            case 'string':
                return JSV.encodeString(obj);
            case 'boolean':
                return obj ? 'true' : 'false';
            case 'number':
            default:
                return obj;
        }
    }
}

export function uniqueKeys(rows:any[]) : string[] {
    let to = [];
    rows.forEach(o => Object.keys(o).forEach(k => {
        if (to.indexOf(k) === -1) {
            to.push(k);
        }
    }));
    return to;
} 
export function alignLeft(str:string, len:number, pad:string = ' ') : string {
    if (len < 0) return '';
    let aLen = len + 1 - str.length;
    if (aLen <= 0) return str;
    return pad + str + pad.repeat(len + 1 - str.length);
}
export function alignCenter(str:string, len:number, pad:string = ' ') : string {
    if (len < 0) return '';
    if (!str) str = '';
    let nLen = str.length;
    let half = Math.floor(len / 2 - nLen / 2);
    let odds = Math.abs((nLen % 2) - (len % 2));
    return pad.repeat(half + 1) + str + pad.repeat(half + 1 + odds);
}
export function alignRight(str:string, len:number, pad:string = ' ') : string {
    if (len < 0) return '';
    let aLen = len + 1 - str.length;
    if (aLen <= 0) return str;
    return pad.repeat(len + 1 - str.length) + str + pad;
}
export function alignAuto(obj:any, len:number, pad:string = ' ') : string {
    let str = `${obj}`;
    if (str.length <= len) {
    return  typeof obj === "number"
        ? alignRight(str, len, pad)
        : alignLeft(str, len, pad);
    }
    return str;
}

export class Inspect {
    static vars(obj:any) {        
        let R = nodeRequire();
        if (typeof R !== 'function') return;
        let inspectVarsPath = process.env.INSPECT_VARS;
        if (!inspectVarsPath || !obj)
            return;

        let fs = R('fs');
        let varsPath = inspectVarsPath.replace(/\\/g,'/');
        if (varsPath.indexOf('/') >= 0) {
            let dir = R('path').dirname(varsPath)
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
        }
        fs.writeFileSync(varsPath,JSON.stringify(obj));
    }
  
    static dump(obj:any) {
        let to = JSON.stringify(obj, null, 4);
        return to.replace(/"/g,'');
    }
  
    static printDump(obj:any) { console.log(Inspect.dump(obj)); }
  
    static dumpTable(rows:any[]) {
        let mapRows = rows;
        let keys = uniqueKeys(mapRows);
        let colSizes:{[index:string]:number} = {};

        keys.forEach(k => {
            let max = k.length;
            mapRows.forEach(row => {
                let col = row[k];
                if (col != null) {
                    let valSize = `${col}`.length;
                    if (valSize > max) {
                        max = valSize;
                    }
                }
            });
            colSizes[k] = max;
        });

        // sum + ' padding ' + |
        let colSizesLength = Object.keys(colSizes).length;
        let rowWidth = Object.keys(colSizes).map(k => colSizes[k]).reduce((p, c) => p + c, 0) +
            (colSizesLength * 2) +
            (colSizesLength + 1);
        let sb:string[] = [];
        sb.push(`+${'-'.repeat(rowWidth - 2)}+`);
        let head = '|';
        keys.forEach(k => head += alignCenter(k, colSizes[k]) + '|');
        sb.push(head);
        sb.push(`|${'-'.repeat(rowWidth - 2)}|`);

        mapRows.forEach(row => {
            let to = '|';
            keys.forEach(k => to += '' + alignAuto(row[k], colSizes[k]) + '|');
            sb.push(to);
        });
        sb.push(`+${'-'.repeat(rowWidth - 2)}+`);

        return sb.join('\n');
    }
  
    static printDumpTable(rows:any[]) { console.log(Inspect.dumpTable(rows)); }
}