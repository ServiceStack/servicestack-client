"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitize = exports.camelCaseAny = exports.map = exports.toKebabCase = exports.toCamelCase = exports.toPascalCase = exports.createError = exports.isFormData = exports.createFieldError = exports.createErrorStatus = exports.ApiResult = exports.getResponseStatus = exports.getMethod = exports.JsonApiClient = exports.JsonServiceClient = exports.GetAccessTokenResponse = exports.HttpMethods = exports.ServerEventUser = exports.GetEventSubscribers = exports.UpdateEventSubscriberResponse = exports.UpdateEventSubscriber = exports.ServerEventReceiver = exports.getAllMembers = exports.ServerEventsClient = exports.ReadyState = exports.SingletonInstanceResolver = exports.NewInstanceResolver = exports.FieldCss = exports.KeyValuePair = exports.RefInfo = exports.FormatInfo = exports.InputInfo = exports.ImageInfo = exports.MetadataType = exports.MetadataPropertyType = exports.MetadataAttribute = exports.MetadataDataMember = exports.MetadataDataContract = exports.MetadataTypeName = exports.MetadataTypes = exports.MetadataOperationType = exports.MetadataRoute = exports.MetadataTypesConfig = exports.GetNavItemsResponse = exports.GetNavItems = exports.NavItem = exports.EmptyResponse = exports.ErrorResponse = exports.ResponseError = exports.ResponseStatus = void 0;
exports.$1 = exports.isElement = exports.createElement = exports.padStart = exports.msToTime = exports.toTime = exports.toLocalISOString = exports.timeFmt12 = exports.dateFmtHM = exports.dateFmt = exports.padInt = exports.toDateFmt = exports.toDate = exports.isDate = exports.errorResponse = exports.errorResponseExcept = exports.errorResponseSummary = exports.toObject = exports.toFormData = exports.parseResponseStatus = exports.getField = exports.normalize = exports.normalizeKey = exports.parseCookie = exports.tryDecode = exports.stripQuotes = exports.bytesToBase64 = exports.setQueryString = exports.appendQueryString = exports.createUrl = exports.createPath = exports.combinePaths = exports.queryString = exports.humanify = exports.splitTitleCase = exports.isDigit = exports.isLower = exports.isUpper = exports.ucFirst = exports.humanize = exports.onlyProps = exports.chop = exports.lastRightPart = exports.lastLeftPart = exports.rightPart = exports.leftPart = exports.splitOnLast = exports.splitOnFirst = exports.css = exports.nameOf = void 0;
exports.htmlAttrs = exports.enc = exports.uniq = exports.flatMap = exports.toTimeSpanFmt = exports.toXsdDuration = exports.fromXsdDuration = exports.classNames = exports.NavOptions = exports.UserAttributes = exports.LinkButtonDefaults = exports.NavButtonGroupDefaults = exports.NavbarDefaults = exports.NavLinkDefaults = exports.NavDefaults = exports.btnClasses = exports.btnSizeClass = exports.BootstrapSizes = exports.btnColorClass = exports.BootstrapColors = exports.activeClass = exports.activeClassNav = exports.apiValueFmt = exports.apiValue = exports.mapGet = exports.resolve = exports.each = exports.apply = exports.omitEmpty = exports.omit = exports.pick = exports.safeVarName = exports.trimEnd = exports.populateForm = exports.triggerEvent = exports.sanitizeFormData = exports.serializeToFormData = exports.serializeToUrlEncoded = exports.serializeToObject = exports.serializeForm = exports.ajaxSubmit = exports.formSubmit = exports.toVarNames = exports.bootstrapForm = exports.bindHandlers = exports.bootstrap = exports.delaySet = exports.addScript = exports.on = exports.$$ = void 0;
exports.Inspect = exports.createBus = exports.EventBus = exports.alignAuto = exports.alignRight = exports.alignCenter = exports.alignLeft = exports.uniqueKeys = exports.JSV = exports.StringBuffer = exports.toBase64String = exports.toByteArray = exports.fromByteArray = exports.toGuid = exports.fromGuid = exports.toTimeSpan = exports.fromTimeSpan = exports.toDateTime = exports.fromDateTime = exports.isNullOrEmpty = exports.indexOfAny = void 0;
class ResponseStatus {
    constructor(init) { Object.assign(this, init); }
}
exports.ResponseStatus = ResponseStatus;
class ResponseError {
    constructor(init) { Object.assign(this, init); }
}
exports.ResponseError = ResponseError;
class ErrorResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.ErrorResponse = ErrorResponse;
class EmptyResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.EmptyResponse = EmptyResponse;
class NavItem {
    constructor(init) { Object.assign(this, init); }
}
exports.NavItem = NavItem;
class GetNavItems {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetNavItemsResponse(); }
    getTypeName() { return 'GetNavItems'; }
    getMethod() { return 'GET'; }
}
exports.GetNavItems = GetNavItems;
class GetNavItemsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetNavItemsResponse = GetNavItemsResponse;
class MetadataTypesConfig {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataTypesConfig = MetadataTypesConfig;
class MetadataRoute {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataRoute = MetadataRoute;
class MetadataOperationType {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataOperationType = MetadataOperationType;
class MetadataTypes {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataTypes = MetadataTypes;
class MetadataTypeName {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataTypeName = MetadataTypeName;
class MetadataDataContract {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataDataContract = MetadataDataContract;
class MetadataDataMember {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataDataMember = MetadataDataMember;
class MetadataAttribute {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataAttribute = MetadataAttribute;
class MetadataPropertyType {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataPropertyType = MetadataPropertyType;
class MetadataType {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataType = MetadataType;
class ImageInfo {
}
exports.ImageInfo = ImageInfo;
class InputInfo {
}
exports.InputInfo = InputInfo;
class FormatInfo {
}
exports.FormatInfo = FormatInfo;
class RefInfo {
}
exports.RefInfo = RefInfo;
class KeyValuePair {
}
exports.KeyValuePair = KeyValuePair;
class FieldCss {
}
exports.FieldCss = FieldCss;
class NewInstanceResolver {
    tryResolve(ctor) {
        return new ctor();
    }
}
exports.NewInstanceResolver = NewInstanceResolver;
class SingletonInstanceResolver {
    tryResolve(ctor) {
        return ctor.instance
            || (ctor.instance = new ctor());
    }
}
exports.SingletonInstanceResolver = SingletonInstanceResolver;
function eventMessageType(evt) {
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
/**
 * EventSource
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["CONNECTING"] = 0] = "CONNECTING";
    ReadyState[ReadyState["OPEN"] = 1] = "OPEN";
    ReadyState[ReadyState["CLOSED"] = 2] = "CLOSED";
})(ReadyState = exports.ReadyState || (exports.ReadyState = {}));
class ServerEventsClient {
    constructor(baseUrl, channels, options = {}, eventSource = null) {
        this.channels = channels;
        this.options = options;
        this.eventSource = eventSource;
        this.onMessage = (e) => {
            if (typeof document == "undefined") { //node
                //latest node-fetch + eventsource doesn't split SSE messages properly
                let requireSplitPos = e.data ? e.data.indexOf('\n') : -1;
                if (requireSplitPos >= 0) {
                    let data = e.data;
                    let lastEventId = e.lastEventId;
                    let e1 = Object.assign({}, { lastEventId, data: data.substring(0, requireSplitPos) }), e2 = Object.assign({}, { lastEventId, data: data.substring(requireSplitPos + 1) });
                    this._onMessage(e1);
                    this._onMessage(e2);
                    return;
                }
            }
            this._onMessage(e);
        };
        this._onMessage = (e) => {
            if (this.stopped)
                return;
            let opt = this.options;
            if (typeof document == "undefined") {
                var document = {
                    querySelectorAll: sel => []
                };
            }
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
            }
            catch (ignore) { }
            parts = splitOnFirst(selector, ".");
            if (parts.length <= 1)
                throw "invalid selector format: " + selector;
            let op = parts[0], target = parts[1].replace(new RegExp("%20", "g"), " ");
            const tokens = splitOnFirst(target, "$");
            const [cmd, cssSelector] = tokens;
            const els = cssSelector && $$(cssSelector);
            const el = els && els[0];
            const eventId = parseInt(e.lastEventId);
            const data = e.data;
            const type = eventMessageType(cmd) || "ServerEventMessage";
            const request = { eventId, data, type,
                channel, selector, json, body, op, target: tokens[0], cssSelector, meta: {} };
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
                    if (fn) {
                        fn.call(el || document.body, this.connectionInfo, request);
                        if (this.stopped)
                            return;
                    }
                    if (opt.heartbeatUrl) {
                        if (opt.heartbeat) {
                            clearInterval(opt.heartbeat);
                        }
                        opt.heartbeat = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                            if (this.eventSource.readyState === EventSource.CLOSED) {
                                clearInterval(opt.heartbeat);
                                const stopFn = opt.handlers["onStop"];
                                if (stopFn != null)
                                    stopFn.apply(this.eventSource);
                                this.reconnectServerEvents({ error: new Error("EventSource is CLOSED") });
                                return;
                            }
                            const reqHeartbeat = new Request(opt.heartbeatUrl, {
                                method: "POST", mode: "cors", headers: headers, credentials: this.serviceClient.credentials
                            });
                            try {
                                let res = yield fetch(reqHeartbeat);
                                if (!res.ok) {
                                    const error = new Error(`${res.status} - ${res.statusText}`);
                                    this.reconnectServerEvents({ error });
                                }
                                else {
                                    yield res.text();
                                }
                            }
                            catch (error) {
                                this.reconnectServerEvents({ error });
                            }
                        }), (this.connectionInfo && this.connectionInfo.heartbeatIntervalMs) || opt.heartbeatIntervalMs || 10000);
                    }
                    if (opt.unRegisterUrl) {
                        if (typeof window != "undefined") {
                            window.onunload = () => {
                                if (navigator.sendBeacon) { // Chrome https://developers.google.com/web/updates/2019/12/chrome-80-deps-rems
                                    this.stopped = true;
                                    if (this.eventSource)
                                        this.eventSource.close();
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
                }
                else {
                    let isCmdMsg = cmd == "onJoin" || cmd == "onLeave" || cmd == "onUpdate";
                    let fn = opt.handlers[cmd];
                    if (fn) {
                        if (isCmdMsg) {
                            fn.call(el || document.body, mergedBody);
                        }
                        else {
                            fn.call(el || document.body, body, request);
                        }
                    }
                    else {
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
                css(els || $$("body"), cmd, body);
            }
            //Named Receiver
            let r = opt.receivers && opt.receivers[op];
            this.invokeReceiver(r, cmd, el, request, op);
            if (!eventMessageType(cmd)) {
                let fn = opt.handlers["onMessage"];
                if (fn) {
                    fn.call(el || document.body, mergedBody);
                }
            }
            if (opt.onTick)
                opt.onTick();
        };
        this.onError = (error) => {
            if (this.stopped)
                return;
            if (!error)
                error = event;
            let fn = this.options.onException;
            if (fn != null)
                fn.call(this.eventSource, error);
            if (this.options.onTick)
                this.options.onTick();
        };
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
    getEventSourceOptions() {
        return { withCredentials: this.withCredentials };
    }
    reconnectServerEvents(opt = {}) {
        if (this.stopped)
            return;
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
            hold.removeEventListener('message', this.onMessage);
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
            this.eventSource.addEventListener('message', e => this.onMessage(e));
        }
        return this;
    }
    stop() {
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
            return new Promise((resolve, reject) => resolve());
        this.connectionInfo = null;
        return fetch(new Request(hold.unRegisterUrl, { method: "POST", mode: "cors", credentials: this.serviceClient.credentials }))
            .then(res => { if (!res.ok)
            throw new Error(`${res.status} - ${res.statusText}`); })
            .catch(this.onError);
    }
    invokeReceiver(r, cmd, el, request, name) {
        if (r) {
            if (typeof r == "function") {
                r = this.resolver.tryResolve(r);
            }
            cmd = cmd.replace("-", "");
            r.client = this;
            r.request = request;
            if (typeof (r[cmd]) == "function") {
                r[cmd].call(el || r, request.body, request);
            }
            else if (cmd in r) {
                r[cmd] = request.body;
            }
            else {
                let metaProp = Object.getOwnPropertyDescriptor(r, cmd);
                if (metaProp != null) {
                    if (metaProp.set) {
                        metaProp.set(request.body);
                    }
                    else if (metaProp.writable) {
                        r[cmd] = request.body;
                    }
                    return;
                }
                let cmdLower = cmd.toLowerCase();
                getAllMembers(r).forEach(k => {
                    if (k.toLowerCase() == cmdLower) {
                        if (typeof r[k] == "function") {
                            r[k].call(el || r, request.body, request);
                        }
                        else {
                            r[k] = request.body;
                        }
                        return;
                    }
                });
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
    registerHandler(name, fn) {
        if (!this.options.handlers)
            this.options.handlers = {};
        this.options.handlers[name] = fn;
        return this;
    }
    setResolver(resolver) {
        this.options.resolver = resolver;
        return this;
    }
    registerReceiver(receiver) {
        return this.registerNamedReceiver("cmd", receiver);
    }
    registerNamedReceiver(name, receiver) {
        if (!this.options.receivers)
            this.options.receivers = {};
        this.options.receivers[name] = receiver;
        return this;
    }
    unregisterReceiver(name = "cmd") {
        if (this.options.receivers) {
            delete this.options.receivers[name];
        }
        return this;
    }
    updateChannels(channels) {
        this.channels = channels;
        const url = this.eventSource != null
            ? this.eventSource.url
            : this.eventStreamUri;
        this.eventStreamUri = url.substring(0, Math.min(url.indexOf("?"), url.length)) + "?channels=" + channels.join(",") + "&t=" + new Date().getTime();
    }
    update(subscribe, unsubscribe) {
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
    addListener(eventName, handler) {
        let handlers = this.listeners[eventName] || (this.listeners[eventName] = []);
        handlers.push(handler);
        return this;
    }
    removeListener(eventName, handler) {
        let handlers = this.listeners[eventName];
        if (handlers) {
            let pos = handlers.indexOf(handler);
            if (pos >= 0) {
                handlers.splice(pos, 1);
            }
        }
        return this;
    }
    raiseEvent(eventName, msg) {
        let handlers = this.listeners[eventName];
        if (handlers) {
            handlers.forEach(x => {
                try {
                    x(msg);
                }
                catch (e) {
                    this.onError(e);
                }
            });
        }
    }
    getConnectionInfo() {
        if (this.connectionInfo == null)
            throw "Not Connected";
        return this.connectionInfo;
    }
    getSubscriptionId() {
        return this.getConnectionInfo().id;
    }
    updateSubscriber(request) {
        if (request.id == null)
            request.id = this.getSubscriptionId();
        return this.serviceClient.post(request)
            .then(x => {
            this.update(request.subscribeChannels, request.unsubscribeChannels);
        }).catch(this.onError);
    }
    subscribeToChannels(...channels) {
        let request = new UpdateEventSubscriber();
        request.id = this.getSubscriptionId();
        request.subscribeChannels = channels;
        return this.serviceClient.post(request)
            .then(x => {
            this.update(channels, null);
        }).catch(this.onError);
    }
    unsubscribeFromChannels(...channels) {
        let request = new UpdateEventSubscriber();
        request.id = this.getSubscriptionId();
        request.unsubscribeChannels = channels;
        return this.serviceClient.post(request)
            .then(x => {
            this.update(null, channels);
        }).catch(this.onError);
    }
    getChannelSubscribers() {
        let request = new GetEventSubscribers();
        request.channels = this.channels;
        return this.serviceClient.get(request)
            .then(r => r.map(x => this.toServerEventUser(x)))
            .catch(e => {
            this.onError(e);
            return [];
        });
    }
    toServerEventUser(map) {
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
exports.ServerEventsClient = ServerEventsClient;
ServerEventsClient.UnknownChannel = "*";
function getAllMembers(o) {
    let props = [];
    do {
        const l = Object.getOwnPropertyNames(o)
            .concat(Object.getOwnPropertySymbols(o).map(s => s.toString()))
            .sort()
            .filter((p, i, arr) => p !== 'constructor' && //not the constructor
            (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
            props.indexOf(p) === -1 //not overridden in a child
        );
        props = props.concat(l);
    } while ((o = Object.getPrototypeOf(o)) && //walk-up the prototype chain
        Object.getPrototypeOf(o) //not the the Object prototype methods (hasOwnProperty, etc...)
    );
    return props;
}
exports.getAllMembers = getAllMembers;
class ServerEventReceiver {
    noSuchMethod(selector, message) { }
}
exports.ServerEventReceiver = ServerEventReceiver;
class UpdateEventSubscriber {
    createResponse() { return new UpdateEventSubscriberResponse(); }
    getTypeName() { return "UpdateEventSubscriber"; }
}
exports.UpdateEventSubscriber = UpdateEventSubscriber;
class UpdateEventSubscriberResponse {
}
exports.UpdateEventSubscriberResponse = UpdateEventSubscriberResponse;
class GetEventSubscribers {
    createResponse() { return []; }
    getTypeName() { return "GetEventSubscribers"; }
}
exports.GetEventSubscribers = GetEventSubscribers;
class ServerEventUser {
}
exports.ServerEventUser = ServerEventUser;
class HttpMethods {
}
exports.HttpMethods = HttpMethods;
HttpMethods.Get = "GET";
HttpMethods.Post = "POST";
HttpMethods.Put = "PUT";
HttpMethods.Delete = "DELETE";
HttpMethods.Patch = "PATCH";
HttpMethods.Head = "HEAD";
HttpMethods.Options = "OPTIONS";
HttpMethods.hasRequestBody = (method) => !(method === "GET" || method === "DELETE" || method === "HEAD" || method === "OPTIONS");
class GetAccessToken {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetAccessTokenResponse(); }
    getTypeName() { return 'GetAccessToken'; }
    getMethod() { return 'POST'; }
}
class GetAccessTokenResponse {
}
exports.GetAccessTokenResponse = GetAccessTokenResponse;
class JsonServiceClient {
    constructor(baseUrl = "/") {
        this.baseUrl = baseUrl;
        this.mode = "cors";
        this.credentials = "include";
        this.headers = new Headers();
        this.headers.set("Content-Type", "application/json");
        this.manageCookies = typeof document == "undefined"; //because node-fetch doesn't
        this.cookies = {};
        this.enableAutoRefreshToken = true;
        this.basePath = 'api';
    }
    setCredentials(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    useBasePath(path) {
        this.basePath = path;
        return this;
    }
    set basePath(path) {
        if (!path) {
            this.replyBaseUrl = combinePaths(this.baseUrl, "json", "reply") + "/";
            this.oneWayBaseUrl = combinePaths(this.baseUrl, "json", "oneway") + "/";
        }
        else {
            this.replyBaseUrl = combinePaths(this.baseUrl, path) + "/";
            this.oneWayBaseUrl = combinePaths(this.baseUrl, path) + "/";
        }
    }
    apply(f) {
        f(this);
        return this;
    }
    get(request, args) {
        return typeof request != "string"
            ? this.fetch(HttpMethods.Get, request, args)
            : this.fetch(HttpMethods.Get, null, args, this.toAbsoluteUrl(request));
    }
    delete(request, args) {
        return typeof request != "string"
            ? this.fetch(HttpMethods.Delete, request, args)
            : this.fetch(HttpMethods.Delete, null, args, this.toAbsoluteUrl(request));
    }
    post(request, args) {
        return this.fetch(HttpMethods.Post, request, args);
    }
    postToUrl(url, request, args) {
        return this.fetch(HttpMethods.Post, request, args, this.toAbsoluteUrl(url));
    }
    postBody(request, body, args) {
        return this.fetchBody(HttpMethods.Post, request, body, args);
    }
    put(request, args) {
        return this.fetch(HttpMethods.Put, request, args);
    }
    putToUrl(url, request, args) {
        return this.fetch(HttpMethods.Put, request, args, this.toAbsoluteUrl(url));
    }
    putBody(request, body, args) {
        return this.fetchBody(HttpMethods.Put, request, body, args);
    }
    patch(request, args) {
        return this.fetch(HttpMethods.Patch, request, args);
    }
    patchToUrl(url, request, args) {
        return this.fetch(HttpMethods.Patch, request, args, this.toAbsoluteUrl(url));
    }
    patchBody(request, body, args) {
        return this.fetchBody(HttpMethods.Patch, request, body, args);
    }
    publish(request, args) {
        return this.sendOneWay(request, args);
    }
    sendOneWay(request, args) {
        const url = combinePaths(this.oneWayBaseUrl, nameOf(request));
        return this.fetch(HttpMethods.Post, request, null, url);
    }
    sendAll(requests) {
        if (requests.length == 0)
            return Promise.resolve([]);
        const url = combinePaths(this.replyBaseUrl, nameOf(requests[0]) + "[]");
        return this.fetch(HttpMethods.Post, requests, null, url);
    }
    sendAllOneWay(requests) {
        if (requests.length == 0)
            return Promise.resolve(void 0);
        const url = combinePaths(this.oneWayBaseUrl, nameOf(requests[0]) + "[]");
        return this.fetch(HttpMethods.Post, requests, null, url)
            .then(r => void 0);
    }
    createUrlFromDto(method, request) {
        let url = combinePaths(this.replyBaseUrl, nameOf(request));
        const hasRequestBody = HttpMethods.hasRequestBody(method);
        if (!hasRequestBody)
            url = appendQueryString(url, request);
        return url;
    }
    toAbsoluteUrl(relativeOrAbsoluteUrl) {
        return relativeOrAbsoluteUrl.startsWith("http://") ||
            relativeOrAbsoluteUrl.startsWith("https://")
            ? relativeOrAbsoluteUrl
            : combinePaths(this.baseUrl, relativeOrAbsoluteUrl);
    }
    deleteCookie(name) {
        if (this.manageCookies) {
            delete this.cookies[name];
        }
        else {
            if (document) {
                document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
            }
        }
    }
    createRequest({ method, request, url, args, body }) {
        if (!url)
            url = this.createUrlFromDto(method, request);
        if (args)
            url = appendQueryString(url, args);
        if (this.bearerToken != null) {
            this.headers.set("Authorization", "Bearer " + this.bearerToken);
        }
        else if (this.userName != null) {
            this.headers.set('Authorization', 'Basic ' + JsonServiceClient.toBase64(`${this.userName}:${this.password}`));
        }
        if (this.manageCookies) {
            let cookies = Object.keys(this.cookies)
                .map(x => {
                let c = this.cookies[x];
                return c.expires && c.expires < new Date()
                    ? null
                    : `${c.name}=${encodeURIComponent(c.value)}`;
            })
                .filter(x => !!x);
            if (cookies.length > 0)
                this.headers.set("Cookie", cookies.join("; "));
            else
                this.headers.delete("Cookie");
        }
        let headers = new Headers(this.headers);
        let hasRequestBody = HttpMethods.hasRequestBody(method);
        let reqInit = {
            url,
            method: method,
            mode: this.mode,
            credentials: this.credentials,
            headers,
            compress: false, // https://github.com/bitinn/node-fetch/issues/93#issuecomment-200791658
        };
        if (hasRequestBody) {
            reqInit.body = body || JSON.stringify(request);
            if (isFormData(body)) {
                reqInit.body = sanitizeFormData(body);
                headers.delete('Content-Type'); //set by FormData
            }
        }
        if (this.requestFilter != null)
            this.requestFilter(reqInit);
        if (JsonServiceClient.globalRequestFilter != null)
            JsonServiceClient.globalRequestFilter(reqInit);
        return reqInit;
    }
    json(res) {
        if (this.parseJson)
            return this.parseJson(res);
        return res.text().then(txt => {
            return txt.length > 0 ? JSON.parse(txt) : null;
        });
    }
    applyResponseFilters(res) {
        if (this.responseFilter != null)
            this.responseFilter(res);
        if (JsonServiceClient.globalResponseFilter != null)
            JsonServiceClient.globalResponseFilter(res);
    }
    createResponse(res, request) {
        if (!res.ok) {
            this.applyResponseFilters(res);
            throw res;
        }
        if (this.manageCookies) {
            let setCookies = [];
            res.headers.forEach((v, k) => {
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
        res.headers.forEach((v, k) => {
            switch (k.toLowerCase()) {
                case "x-cookies":
                    if (v.split(',').indexOf('ss-reftok') >= 0)
                        this.useTokenCookie = true;
                    break;
            }
        });
        this.applyResponseFilters(res);
        let x = request && typeof request != "string" && typeof request.createResponse == 'function'
            ? request.createResponse()
            : null;
        if (typeof x === 'string')
            return res.text().then(o => o);
        let contentType = res.headers.get("content-type");
        let isJson = contentType && contentType.indexOf("application/json") !== -1;
        if (isJson) {
            return this.json(res).then(o => o);
        }
        if (typeof Uint8Array != "undefined" && x instanceof Uint8Array) {
            if (typeof res.arrayBuffer != 'function')
                throw new Error("This fetch polyfill does not implement 'arrayBuffer'");
            return res.arrayBuffer().then(o => new Uint8Array(o));
        }
        else if (typeof Blob == "function" && x instanceof Blob) {
            if (typeof res.blob != 'function')
                throw new Error("This fetch polyfill does not implement 'blob'");
            return res.blob().then(o => o);
        }
        let contentLength = res.headers.get("content-length");
        if (contentLength === "0" || (contentLength == null && !isJson)) {
            return res.text().then(_ => x);
        }
        return this.json(res).then(o => o); //fallback
    }
    handleError(holdRes, res, type = null) {
        if (res instanceof Error)
            throw this.raiseError(holdRes, res);
        // res.json can only be called once.
        if (res.bodyUsed)
            throw this.raiseError(res, createErrorResponse(res.status, res.statusText, type));
        let isErrorResponse = typeof res.json == "undefined" && res.responseStatus;
        if (isErrorResponse) {
            return new Promise((resolve, reject) => reject(this.raiseError(null, res)));
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
                || (typeof window != "undefined" && window.DOMException && error instanceof window.DOMException /*MS Edge*/)) {
                throw this.raiseError(res, createErrorResponse(res.status, res.statusText, type));
            }
            throw this.raiseError(res, error);
        });
    }
    fetch(method, request, args, url) {
        return this.sendRequest({ method, request, args, url });
    }
    fetchBody(method, request, body, args) {
        let url = combinePaths(this.replyBaseUrl, nameOf(request));
        return this.sendRequest({
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
    sendRequest(info) {
        const req = this.createRequest(info);
        const returns = info.returns || info.request;
        let holdRes = null;
        const resendRequest = () => {
            const req = this.createRequest(info);
            if (this.urlFilter)
                this.urlFilter(req.url);
            return fetch(req.url, req)
                .then(res => this.createResponse(res, returns))
                .catch(res => this.handleError(holdRes, res));
        };
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
                if (this.enableAutoRefreshToken && (this.refreshToken || this.useTokenCookie || this.cookies['ss-reftok'] != null)) {
                    const jwtReq = new GetAccessToken({ refreshToken: this.refreshToken, useTokenCookie: !!this.useTokenCookie });
                    let url = this.refreshTokenUri || this.createUrlFromDto(HttpMethods.Post, jwtReq);
                    if (this.useTokenCookie) {
                        this.bearerToken = null;
                        this.headers.delete("Authorization");
                    }
                    let jwtRequest = this.createRequest({ method: HttpMethods.Post, request: jwtReq, args: null, url });
                    return fetch(url, jwtRequest)
                        .then(r => this.createResponse(r, jwtReq).then(jwtResponse => {
                        this.bearerToken = (jwtResponse === null || jwtResponse === void 0 ? void 0 : jwtResponse.accessToken) || null;
                        return resendRequest();
                    }))
                        .catch(res => {
                        if (this.onAuthenticationRequired) {
                            return this.onAuthenticationRequired()
                                .then(resendRequest)
                                .catch(resHandler => {
                                return this.handleError(holdRes, resHandler, "RefreshTokenException");
                            });
                        }
                        else {
                            return this.handleError(holdRes, res, "RefreshTokenException");
                        }
                    });
                }
                else {
                    if (this.onAuthenticationRequired) {
                        return this.onAuthenticationRequired().then(resendRequest);
                    }
                }
            }
            return this.handleError(holdRes, res);
        });
    }
    raiseError(res, error) {
        if (this.exceptionFilter != null) {
            this.exceptionFilter(res, error);
        }
        return error;
    }
    // Generic send that uses APIs preferred HTTP Method (requires v5.13+ DTOs)
    send(request, args, url) {
        return this.sendRequest({ method: getMethod(request), request, args, url });
    }
    // Generic send IReturnVoid that uses APIs preferred HTTP Method (requires v5.13+ DTOs)
    sendVoid(request, args, url) {
        return this.sendRequest({ method: getMethod(request), request, args, url });
    }
    api(request, args, method) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.fetch(getMethod(request, method), request, args);
                return new ApiResult({ response: result });
            }
            catch (e) {
                return new ApiResult({ error: getResponseStatus(e) });
            }
        });
    }
    apiVoid(request, args, method) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.fetch(getMethod(request, method), request, args);
                return new ApiResult({ response: result !== null && result !== void 0 ? result : new EmptyResponse() });
            }
            catch (e) {
                return new ApiResult({ error: getResponseStatus(e) });
            }
        });
    }
    apiForm(request, body, args, method) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.fetchBody(getMethod(request, method), request, body, args);
                return new ApiResult({ response: result });
            }
            catch (e) {
                return new ApiResult({ error: getResponseStatus(e) });
            }
        });
    }
    apiFormVoid(request, body, args, method) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.fetchBody(getMethod(request, method), request, body, args);
                return new ApiResult({ response: result !== null && result !== void 0 ? result : new EmptyResponse() });
            }
            catch (e) {
                return new ApiResult({ error: getResponseStatus(e) });
            }
        });
    }
}
exports.JsonServiceClient = JsonServiceClient;
class JsonApiClient {
    static create(baseUrl = "/", f) {
        let client = new JsonServiceClient(baseUrl).apply(c => {
            c.basePath = "/api";
            c.headers = new Headers(); //avoid pre-flight CORS requests
            c.enableAutoRefreshToken = false; // Use JWT Cookies by default
            if (f) {
                f(c);
            }
        });
        return client;
    }
}
exports.JsonApiClient = JsonApiClient;
function getMethod(request, method) {
    return method !== null && method !== void 0 ? method : (typeof request.getMethod == "function"
        ? request.getMethod()
        : HttpMethods.Post);
}
exports.getMethod = getMethod;
function getResponseStatus(e) {
    var _a, _b;
    return (_b = (_a = e.responseStatus) !== null && _a !== void 0 ? _a : e.ResponseStatus) !== null && _b !== void 0 ? _b : (e.errorCode
        ? e
        : (e.message ? createErrorStatus(e.message, e.errorCode) : null));
}
exports.getResponseStatus = getResponseStatus;
class ApiResult {
    constructor(init) { Object.assign(this, init); }
    get completed() { return this.response != null || this.error != null; }
    get failed() { var _a, _b; return ((_a = this.error) === null || _a === void 0 ? void 0 : _a.errorCode) != null || ((_b = this.error) === null || _b === void 0 ? void 0 : _b.message) != null; }
    get succeeded() { return !this.failed && this.response != null; }
    get errorMessage() { var _a; return (_a = this.error) === null || _a === void 0 ? void 0 : _a.message; }
    get errorCode() { var _a; return (_a = this.error) === null || _a === void 0 ? void 0 : _a.errorCode; }
    get errors() { var _a, _b; return (_b = (_a = this.error) === null || _a === void 0 ? void 0 : _a.errors) !== null && _b !== void 0 ? _b : []; }
    get errorSummary() { return this.error != null && this.errors.length == 0 ? this.errorMessage : null; }
    fieldError(fieldName) {
        var _a;
        let matchField = fieldName.toLowerCase();
        return (_a = this.errors) === null || _a === void 0 ? void 0 : _a.find(x => x.fieldName.toLowerCase() == matchField);
    }
    fieldErrorMessage(fieldName) { var _a; return (_a = this.fieldError(fieldName)) === null || _a === void 0 ? void 0 : _a.message; }
    hasFieldError(fieldName) { return this.fieldError(fieldName) != null; }
    showSummary(exceptFields = []) {
        if (!this.failed)
            return false;
        return exceptFields.every(x => !this.hasFieldError(x));
    }
    summaryMessage(exceptFields = []) {
        if (this.showSummary(exceptFields)) {
            // Return first field error that's not visible
            let fieldSet = exceptFields.map(x => x.toLowerCase());
            let fieldError = fieldSet.find(x => fieldSet.indexOf(x.toLowerCase()) == -1);
            return fieldError !== null && fieldError !== void 0 ? fieldError : this.errorMessage;
        }
    }
    addFieldError(fieldName, message, errorCode = 'Exception') {
        if (!this.error)
            this.error = new ResponseStatus();
        const fieldError = this.fieldError(fieldName);
        if (fieldError != null) {
            fieldError.errorCode = errorCode;
            fieldError.message = message;
        }
        else {
            this.error.errors.push(new ResponseError({ fieldName, errorCode, message }));
        }
    }
}
exports.ApiResult = ApiResult;
function createErrorStatus(message, errorCode = 'Exception') {
    return new ResponseStatus({ errorCode, message });
}
exports.createErrorStatus = createErrorStatus;
function createFieldError(fieldName, message, errorCode = 'Exception') {
    return new ResponseStatus({ errors: [new ResponseError({ fieldName, errorCode, message })] });
}
exports.createFieldError = createFieldError;
function isFormData(body) { return body instanceof FormData; }
exports.isFormData = isFormData;
function createErrorResponse(errorCode, message, type = null) {
    const error = apply(new ErrorResponse(), e => {
        if (type != null)
            e.type = type;
        e.responseStatus = apply(new ResponseStatus(), status => {
            status.errorCode = errorCode && errorCode.toString();
            status.message = message;
        });
    });
    return error;
}
function createError(errorCode, message, fieldName) {
    return new ErrorResponse({
        responseStatus: new ResponseStatus({
            errorCode,
            message,
            errors: fieldName ? [new ResponseError({ errorCode, message, fieldName })] : undefined
        })
    });
}
exports.createError = createError;
function toPascalCase(s) {
    if (!s)
        return '';
    const isAllCaps = s.match(/^[A-Z0-9_]+$/);
    if (isAllCaps) {
        const words = s.split('_');
        return words.map(x => x[0].toUpperCase() + x.substring(1).toLowerCase()).join('');
    }
    if (s.includes('_')) {
        return s.split('_').filter(x => x[0]).map(x => x[0].toUpperCase() + x.substring(1)).join('');
    }
    return s.charAt(0).toUpperCase() + s.substring(1);
}
exports.toPascalCase = toPascalCase;
function toCamelCase(s) {
    s = toPascalCase(s);
    if (!s)
        return '';
    return s.charAt(0).toLowerCase() + s.substring(1);
}
exports.toCamelCase = toCamelCase;
function toKebabCase(s) {
    if (!s || s.length <= 1)
        return s.toLowerCase();
    return s
        .replace(/([A-Z0-9])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, '')
        .replace(/-+/g, '-');
}
exports.toKebabCase = toKebabCase;
function map(o, f) { return o == null ? null : f(o); }
exports.map = map;
function camelCaseAny(o) {
    if (!o || !(o instanceof Object) || Array.isArray(o))
        return o;
    let to = {};
    for (let k in o) {
        if (o.hasOwnProperty(k)) {
            const key = toCamelCase(k);
            const val = o[k];
            if (Array.isArray(val))
                to[key] = val.map(x => camelCaseAny(x));
            else if (val instanceof Object)
                to[key] = camelCaseAny(val);
            else
                to[key] = val;
        }
    }
    return to;
}
exports.camelCaseAny = camelCaseAny;
function sanitize(status) {
    if (!sanitize)
        return sanitize;
    if (status.responseStatus)
        return status;
    if (status.errors)
        return status;
    let to = camelCaseAny(status);
    return to;
}
exports.sanitize = sanitize;
function nameOf(o) {
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
exports.nameOf = nameOf;
/* utils */
function log(o, prefix = "LOG") {
    console.log(prefix, o);
    return o;
}
function css(selector, name, value) {
    const els = typeof selector == "string"
        ? document.querySelectorAll(selector)
        : selector;
    for (let i = 0; i < els.length; i++) {
        const el = els[i];
        if (el != null && el.style != null) {
            el.style[name] = value;
        }
    }
}
exports.css = css;
function splitOnFirst(s, c) {
    if (!s)
        return [s];
    let pos = s.indexOf(c);
    return pos >= 0 ? [s.substring(0, pos), s.substring(pos + 1)] : [s];
}
exports.splitOnFirst = splitOnFirst;
function splitOnLast(s, c) {
    if (!s)
        return [s];
    let pos = s.lastIndexOf(c);
    return pos >= 0
        ? [s.substring(0, pos), s.substring(pos + 1)]
        : [s];
}
exports.splitOnLast = splitOnLast;
function leftPart(s, needle) {
    if (s == null)
        return null;
    let pos = s.indexOf(needle);
    return pos == -1
        ? s
        : s.substring(0, pos);
}
exports.leftPart = leftPart;
function rightPart(s, needle) {
    if (s == null)
        return null;
    let pos = s.indexOf(needle);
    return pos == -1
        ? s
        : s.substring(pos + needle.length);
}
exports.rightPart = rightPart;
function lastLeftPart(s, needle) {
    if (s == null)
        return null;
    let pos = s.lastIndexOf(needle);
    return pos == -1
        ? s
        : s.substring(0, pos);
}
exports.lastLeftPart = lastLeftPart;
function lastRightPart(s, needle) {
    if (s == null)
        return null;
    let pos = s.lastIndexOf(needle);
    return pos == -1
        ? s
        : s.substring(pos + needle.length);
}
exports.lastRightPart = lastRightPart;
function chop(str, len = 1) {
    len = Math.abs(len);
    return str ? len < str.length ? str.substring(0, str.length - len) : '' : str;
}
exports.chop = chop;
function onlyProps(obj, keys) {
    let to = {};
    keys.forEach(key => to[key] = obj[key]);
    return to;
}
exports.onlyProps = onlyProps;
function splitCase(t) {
    return typeof t != 'string' ? t : t.replace(/([A-Z]|[0-9]+)/g, ' $1').replace(/_/g, ' ').trim();
}
function humanize(s) { return (!s || s.indexOf(' ') >= 0 ? s : splitCase(toPascalCase(s))); }
exports.humanize = humanize;
const ucFirst = (s) => s.charAt(0).toUpperCase() + s.substring(1);
exports.ucFirst = ucFirst;
const isUpper = (c) => c >= 'A' && c <= 'Z';
exports.isUpper = isUpper;
const isLower = (c) => c >= 'a' && c <= 'z';
exports.isLower = isLower;
const isDigit = (c) => c >= '0' && c <= '9';
exports.isDigit = isDigit;
const upperOrDigit = (c) => (0, exports.isUpper)(c) || (0, exports.isDigit)(c);
function splitTitleCase(s) {
    let to = [];
    if (typeof s != 'string')
        return to;
    let lastSplit = 0;
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        let prev = i > 0 ? s[i - 1] : null;
        let next = i + 1 < s.length ? s[i + 1] : null;
        if (upperOrDigit(c) && (!upperOrDigit(prev) || !upperOrDigit(next))) {
            to.push(s.substring(lastSplit, i));
            lastSplit = i;
        }
    }
    to.push(s.substring(lastSplit, s.length));
    return to.filter(x => !!x);
}
exports.splitTitleCase = splitTitleCase;
function humanify(s) {
    return !s || indexOfAny(s, [' ', ',', '.', ':', '-']) >= 0
        ? s
        : (0, exports.ucFirst)(splitTitleCase(s).join(' '));
}
exports.humanify = humanify;
function queryString(url) {
    if (!url || url.indexOf('?') === -1)
        return {};
    let pairs = rightPart(url, '?').split('&');
    let map = {};
    for (let i = 0; i < pairs.length; ++i) {
        let p = pairs[i].split('=');
        map[p[0]] = p.length > 1
            ? decodeURIComponent(p[1].replace(/\+/g, ' '))
            : null;
    }
    return map;
}
exports.queryString = queryString;
function combinePaths(...paths) {
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
        if (!part || part === ".")
            continue;
        if (part === "..")
            combinedPaths.pop();
        else
            combinedPaths.push(part);
    }
    if (parts[0] === "")
        combinedPaths.unshift("");
    return combinedPaths.join("/") || (combinedPaths.length ? "/" : ".");
}
exports.combinePaths = combinePaths;
function createPath(route, args) {
    let argKeys = {};
    for (let k in args) {
        argKeys[k.toLowerCase()] = k;
    }
    let parts = route.split("/");
    let url = "";
    for (let i = 0; i < parts.length; i++) {
        let p = parts[i];
        if (p == null)
            p = "";
        if (p[0] === "{" && p[p.length - 1] === "}") {
            const key = argKeys[p.substring(1, p.length - 1).toLowerCase()];
            if (key) {
                p = args[key];
                delete args[key];
            }
        }
        if (url.length > 0)
            url += "/";
        url += p;
    }
    return url;
}
exports.createPath = createPath;
function createUrl(route, args) {
    let url = createPath(route, args);
    return appendQueryString(url, args);
}
exports.createUrl = createUrl;
function appendQueryString(url, args) {
    for (let k in args) {
        if (args.hasOwnProperty(k)) {
            let val = args[k];
            if (typeof val == 'undefined' || typeof val == 'function' || typeof val == 'symbol')
                continue;
            url += url.indexOf("?") >= 0 ? "&" : "?";
            url += k + (val === null ? '' : "=" + qsValue(val));
        }
    }
    return url;
}
exports.appendQueryString = appendQueryString;
function setQueryString(url, args) {
    const baseUrl = leftPart(url, '?');
    const qs = Object.assign(queryString(url), args);
    return appendQueryString(baseUrl, qs);
}
exports.setQueryString = setQueryString;
function qsValue(arg) {
    if (arg == null)
        return "";
    if (typeof Uint8Array != "undefined" && arg instanceof Uint8Array)
        return bytesToBase64(arg);
    return encodeURIComponent(arg) || "";
}
//from: https://github.com/madmurphy/stringview.js/blob/master/stringview.js
function bytesToBase64(aBytes) {
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
exports.bytesToBase64 = bytesToBase64;
function uint6ToB64(nUint6) {
    return nUint6 < 26 ?
        nUint6 + 65
        : nUint6 < 52 ?
            nUint6 + 71
            : nUint6 < 62 ?
                nUint6 - 4
                : nUint6 === 62 ? 43
                    : nUint6 === 63 ? 47 : 65;
}
function _btoa(base64) {
    return typeof btoa == 'function'
        ? btoa(base64)
        : Buffer.from(base64).toString('base64');
}
function _atob(base64) {
    return typeof atob == 'function'
        ? atob(base64)
        : Buffer.from(base64, 'base64').toString();
}
//from: http://stackoverflow.com/a/30106551/85785
JsonServiceClient.toBase64 = (str) => _btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(new Number('0x' + p1).valueOf())));
function stripQuotes(s) { return s && s[0] == '"' && s[s.length] == '"' ? s.slice(1, -1) : s; }
exports.stripQuotes = stripQuotes;
function tryDecode(s) {
    try {
        return decodeURIComponent(s);
    }
    catch (e) {
        return s;
    }
}
exports.tryDecode = tryDecode;
function parseCookie(setCookie) {
    if (!setCookie)
        return null;
    let to = null;
    let pairs = setCookie.split(/; */);
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        let parts = splitOnFirst(pair, '=');
        let name = parts[0].trim();
        let value = parts.length > 1 ? tryDecode(stripQuotes(parts[1].trim())) : null;
        if (i == 0) {
            to = { name, value, path: "/" };
        }
        else {
            let lower = name.toLowerCase();
            if (lower == "httponly") {
                to.httpOnly = true;
            }
            else if (lower == "secure") {
                to.secure = true;
            }
            else if (lower == "expires") {
                to.expires = new Date(value);
                // MS Edge returns Invalid Date when using '-' in "12-Mar-2037"
                if (to.expires.toString() === "Invalid Date") {
                    to.expires = new Date(value.replace(/-/g, " "));
                }
            }
            else {
                to[name] = value;
            }
        }
    }
    return to;
}
exports.parseCookie = parseCookie;
function normalizeKey(key) { return key.toLowerCase().replace(/_/g, ''); }
exports.normalizeKey = normalizeKey;
function isArray(o) { return Object.prototype.toString.call(o) === '[object Array]'; }
function normalize(dto, deep) {
    if (isArray(dto)) {
        if (!deep)
            return dto;
        const to = [];
        for (let i = 0; i < dto.length; i++) {
            to[i] = normalize(dto[i], deep);
        }
        return to;
    }
    if (typeof dto != "object")
        return dto;
    let o = {};
    for (let k in dto) {
        o[normalizeKey(k)] = deep ? normalize(dto[k], deep) : dto[k];
    }
    return o;
}
exports.normalize = normalize;
function getField(o, name) {
    return o == null || name == null ? null :
        o[name] ||
            o[Object.keys(o).filter(k => normalizeKey(k) === normalizeKey(name))[0] || ''];
}
exports.getField = getField;
function parseResponseStatus(json, defaultMsg = null) {
    try {
        let err = JSON.parse(json);
        return sanitize(err.ResponseStatus || err.responseStatus);
    }
    catch (e) {
        return {
            message: defaultMsg || e.message || e,
            __error: { error: e, json: json }
        };
    }
}
exports.parseResponseStatus = parseResponseStatus;
function toFormData(o) {
    if (typeof window == "undefined")
        return;
    let formData = new FormData();
    for (let name in o) {
        formData.append(name, o[name]);
    }
    return formData;
}
exports.toFormData = toFormData;
function toObject(keys) {
    const to = {};
    if (!keys)
        return to;
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
exports.toObject = toObject;
function errorResponseSummary() {
    const responseStatus = this.responseStatus || this.ResponseStatus;
    if (responseStatus == null)
        return undefined;
    const status = responseStatus.ErrorCode ? sanitize(responseStatus) : responseStatus;
    return !status.errors || status.errors.length == 0
        ? status.message || status.errorCode
        : undefined;
}
exports.errorResponseSummary = errorResponseSummary;
function errorResponseExcept(fieldNames) {
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
exports.errorResponseExcept = errorResponseExcept;
function errorResponse(fieldName) {
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
exports.errorResponse = errorResponse;
function isDate(d) { return d && Object.prototype.toString.call(d) === "[object Date]" && !isNaN(d); }
exports.isDate = isDate;
function toDate(s) {
    return !s ? null
        : isDate(s)
            ? s
            : s[0] == '/'
                ? new Date(parseFloat(/Date\(([^)]+)\)/.exec(s)[1]))
                : new Date(s);
}
exports.toDate = toDate;
function toDateFmt(s) { return dateFmt(toDate(s)); }
exports.toDateFmt = toDateFmt;
function padInt(n) { return n < 10 ? '0' + n : n; }
exports.padInt = padInt;
function dateFmt(d = new Date()) { return d.getFullYear() + '/' + padInt(d.getMonth() + 1) + '/' + padInt(d.getDate()); }
exports.dateFmt = dateFmt;
function dateFmtHM(d = new Date()) { return d.getFullYear() + '/' + padInt(d.getMonth() + 1) + '/' + padInt(d.getDate()) + ' ' + padInt(d.getHours()) + ":" + padInt(d.getMinutes()); }
exports.dateFmtHM = dateFmtHM;
function timeFmt12(d = new Date()) { return padInt((d.getHours() + 24) % 12 || 12) + ":" + padInt(d.getMinutes()) + ":" + padInt(d.getSeconds()) + " " + (d.getHours() > 12 ? "PM" : "AM"); }
exports.timeFmt12 = timeFmt12;
function toLocalISOString(d = new Date()) {
    return `${d.getFullYear()}-${padInt(d.getMonth() + 1)}-${padInt(d.getDate())}T${padInt(d.getHours())}:${padInt(d.getMinutes())}:${padInt(d.getSeconds())}`;
}
exports.toLocalISOString = toLocalISOString;
function toTime(s) {
    if (typeof s == 'string' && s.indexOf(':') >= 0)
        return s;
    const ms = s instanceof Date
        ? s.getTime()
        : typeof s == 'string'
            ? fromXsdDuration(s) * 1000
            : s;
    return msToTime(ms);
}
exports.toTime = toTime;
function msToTime(s) {
    const ms = s % 1000;
    s = (s - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;
    const hrs = (s - mins) / 60;
    let t = padInt(hrs) + ':' + padInt(mins) + ':' + padInt(secs);
    return ms > 0
        ? t + '.' + padStart(`${ms}`, 3, '0').substring(0, 3)
        : t;
}
exports.msToTime = msToTime;
function padStart(s, len, pad) {
    len = Math.floor(len) || 0;
    if (len < s.length)
        return s;
    pad = pad ? String(pad) : ' ';
    let p = '';
    let l = len - s.length;
    let i = 0;
    while (p.length < l) {
        if (!pad[i])
            i = 0;
        p += pad[i];
        i++;
    }
    return p + s.slice(0);
}
exports.padStart = padStart;
function bsAlert(msg) { return '<div class="alert alert-danger">' + msg + '</div>'; }
function attr(e, name) { return e.getAttribute(name); }
function sattr(e, name, value) { return e.setAttribute(name, value); }
function rattr(e, name) { return e.removeAttribute(name); }
function createElement(tagName, options) {
    const keyAliases = { className: 'class', htmlFor: 'for' };
    const el = document.createElement(tagName);
    if (options === null || options === void 0 ? void 0 : options.attrs) {
        for (const key in options.attrs) {
            sattr(el, keyAliases[key] || key, options.attrs[key]);
        }
    }
    if (options === null || options === void 0 ? void 0 : options.events) {
        on(el, options.events);
    }
    if (options && options.insertAfter) {
        options.insertAfter.parentNode.insertBefore(el, options.insertAfter.nextSibling);
    }
    return el;
}
exports.createElement = createElement;
function showInvalidInputs() {
    let errorMsg = attr(this, 'data-invalid');
    if (errorMsg) {
        //[data-invalid] can either be on input control or .form-check container containing group of radio/checkbox
        const isCheck = this.type === "checkbox" || this.type === "radio" || hasClass(this, 'form-check');
        const elFormCheck = isCheck ? parent(this, 'form-check') : null;
        if (!isCheck)
            addClass(this, 'is-invalid');
        else
            addClass(elFormCheck || this.parentElement, 'is-invalid form-control');
        const elNext = this.nextElementSibling;
        const elLast = elNext && (attr(elNext, 'for') === this.id || elNext.tagName === "SMALL")
            ? (isCheck ? elFormCheck || elNext.parentElement : elNext)
            : this;
        const elError = elLast != null && elLast.nextElementSibling && hasClass(elLast.nextElementSibling, 'invalid-feedback')
            ? elLast.nextElementSibling
            : createElement("div", { insertAfter: elLast, attrs: { className: 'invalid-feedback' } });
        elError.innerHTML = errorMsg;
    }
}
function parent(el, cls) {
    while (el != null && !hasClass(el, cls))
        el = el.parentElement;
    return el;
}
function hasClass(el, cls) {
    return !el ? false
        : el.classList
            ? el.classList.contains(cls)
            : (" " + el.className + " ").replace(/[\n\t\r]/g, " ").indexOf(" " + cls + " ") > -1;
}
function addClass(el, cls) {
    return !el ? null
        : el.classList
            ? el.classList.add(...cls.split(' '))
            : !hasClass(el, cls)
                ? el.className = (el.className + " " + cls).trim() : null;
}
function remClass(el, cls) {
    return !el ? null
        : el.classList
            ? el.classList.remove(cls)
            : hasClass(el, cls)
                ? el.className = el.className.replace(/(\s|^)someclass(\s|$)/, ' ')
                : null;
}
function isElement(el) {
    return typeof window != "undefined" && (el instanceof window.Element || el == window.document);
}
exports.isElement = isElement;
function $1(sel, el) {
    return typeof sel === "string" ? (el || document).querySelector(sel) : sel || null;
}
exports.$1 = $1;
function $$(sel, el) {
    var _a, _b;
    if (typeof sel === "string")
        return Array.from((_b = (_a = (el || typeof document != "undefined" ? document : null)) === null || _a === void 0 ? void 0 : _a.querySelectorAll(sel)) !== null && _b !== void 0 ? _b : []);
    if (Array.isArray(sel))
        return sel.flatMap(x => $$(x, el));
    return [sel];
}
exports.$$ = $$;
function on(sel, handlers) {
    $$(sel).forEach(e => {
        Object.keys(handlers).forEach(function (evt) {
            let fn = handlers[evt];
            if (typeof evt === 'string' && typeof fn === 'function') {
                e.addEventListener(evt, handlers[evt] = fn.bind(e));
            }
        });
    });
    return handlers;
}
exports.on = on;
function addScript(src) {
    return new Promise((resolve, reject) => {
        document.body.appendChild(createElement('script', {
            attrs: { src },
            events: {
                load: resolve,
                error: reject,
            }
        }));
    });
}
exports.addScript = addScript;
function delaySet(f, opt) {
    let duration = opt && opt.duration || 300;
    let timeout = setTimeout(() => f(true), duration);
    return () => { clearTimeout(timeout); f(false); };
}
exports.delaySet = delaySet;
// init generic behavior to bootstrap elements
function bootstrap(el) {
    const els = (el || document).querySelectorAll('[data-invalid]');
    for (let i = 0; i < els.length; i++) {
        showInvalidInputs.call(els[i]);
    }
}
exports.bootstrap = bootstrap;
if (typeof window != "undefined" && window.Element !== undefined) { // polyfill IE9+
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector;
    }
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (s) {
            let el = this;
            do {
                if (el.matches(s))
                    return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }
}
function handleEvent(handlers, el = document, type) {
    el.addEventListener(type, function (evt) {
        const evtData = `data-${type}`;
        let el = evt.target;
        let x = attr(el, evtData);
        if (!x) {
            let elParent = el.closest(`[${evtData}]`);
            if (elParent) {
                x = attr(elParent, evtData);
                el = elParent;
            }
        }
        if (!x)
            return;
        let pos = x.indexOf(':');
        if (pos >= 0) {
            const cmd = x.substring(0, pos);
            const data = x.substring(pos + 1);
            const fn = handlers[cmd];
            if (fn) {
                fn.apply(el, data.split(','));
            }
        }
        else {
            const fn = handlers[x];
            if (fn) {
                fn.apply(el, [].slice.call(arguments));
            }
        }
    });
}
function bindHandlers(handlers, el = document, opt = null) {
    if (opt && opt.events) {
        opt.events.forEach(evt => handleEvent(handlers, el, evt));
    }
    else {
        ['click', 'dblclick', 'change', 'focus', 'blur', 'focusin', 'focusout', 'select', 'keydown', 'keypress', 'keyup', 'hover', 'toggle', 'input']
            .forEach(evt => {
            if (el.querySelector(`[data-${evt}]`)) {
                handleEvent(handlers, el, evt);
            }
        });
    }
}
exports.bindHandlers = bindHandlers;
function bootstrapForm(form, options) {
    if (!form)
        return;
    if (options.model)
        populateForm(form, options.model);
    form.onsubmit = function (evt) {
        evt.preventDefault();
        options.type = "bootstrap-v4";
        return ajaxSubmit(form, options);
    };
}
exports.bootstrapForm = bootstrapForm;
function applyErrors(f, status, opt) {
    const validation = {
        overrideMessages: false,
        messages: {
            NotEmpty: "Required",
            NotNull: "Required",
            Email: "Invalid email",
            AlreadyExists: "Already exists"
        },
        errorFilter: function (errorMsg, errorCode, type) {
            return this.overrideMessages
                ? this.messages[errorCode] || errorMsg || splitCase(errorCode)
                : errorMsg || splitCase(errorCode);
        }
    };
    clearErrors(f);
    if (!status)
        return;
    status = sanitize(status);
    addClass(f, "has-errors");
    const bs4 = opt && opt.type === "bootstrap-v4";
    const v = Object.assign(Object.assign({}, validation), opt);
    if (opt.messages) {
        v.overrideMessages = true;
    }
    const filter = v.errorFilter.bind(v);
    const errors = status.errors;
    if (errors && errors.length) {
        let fieldMap = {}, fieldLabelMap = {};
        $$("input,textarea,select,button").forEach(x => {
            const el = x;
            const prev = el.previousElementSibling;
            const next = el.nextElementSibling;
            const isCheck = el.type === "radio" || el.type === "checkbox";
            const fieldId = (!isCheck ? el.id : null) || attr(el, "name");
            if (!fieldId)
                return;
            const key = fieldId.toLowerCase();
            fieldMap[key] = el;
            if (!bs4) {
                if (hasClass(prev, "help-inline") || hasClass(prev, "help-block")) {
                    fieldLabelMap[key] = prev;
                }
                else if (hasClass(next, "help-inline") || hasClass(next, "help-block")) {
                    fieldLabelMap[key] = next;
                }
            }
        });
        $$(".help-inline[data-for],.help-block[data-for]").forEach(el => {
            const key = attr(el, "data-for").toLowerCase();
            fieldLabelMap[key] = el;
        });
        for (let error of errors) {
            const key = (error.fieldName || "").toLowerCase();
            const field = fieldMap[key];
            if (field) {
                if (!bs4) {
                    addClass(field, "error");
                    addClass(field.parentElement, "has-error");
                }
                else {
                    const type = attr(field, 'type'), isCheck = type === "radio" || type === "checkbox";
                    if (!isCheck)
                        addClass(field, "is-invalid");
                    sattr(field, "data-invalid", filter(error.message, error.errorCode, "field"));
                }
            }
            const lblErr = fieldLabelMap[key];
            if (!lblErr)
                continue;
            addClass(lblErr, "error");
            lblErr.innerHTML = filter(error.message, error.errorCode, "field");
            lblErr.style.display = 'block';
        }
        $$("[data-validation-summary]").forEach(el => {
            const fields = attr(el, 'data-validation-summary').split(',');
            const summaryMsg = errorResponseExcept.call(status, fields);
            if (summaryMsg)
                el.innerHTML = bsAlert(summaryMsg);
        });
    }
    else {
        const htmlSummary = filter(status.message || splitCase(status.errorCode), status.errorCode, "summary");
        if (!bs4) {
            $$(".error-summary").forEach(el => {
                el.innerHTML = htmlSummary(el).style.display = 'block';
            });
        }
        else {
            $$('[data-validation-summary]').forEach(el => el.innerHTML = htmlSummary[0] === "<" ? htmlSummary : bsAlert(htmlSummary));
        }
    }
    return f;
}
function clearErrors(f) {
    remClass(f, 'has-errors');
    $$('.error-summary').forEach(el => {
        el.innerHTML = "";
        el.style.display = "none";
    });
    $$('[data-validation-summary]').forEach(el => {
        el.innerHTML = "";
    });
    $$('.error').forEach(el => remClass(el, 'error'));
    $$('.form-check.is-invalid [data-invalid]').forEach(el => {
        rattr(el, 'data-invalid');
    });
    $$('.form-check.is-invalid').forEach(el => remClass(el, 'form-control'));
    $$('.is-invalid').forEach(el => {
        remClass(el, 'is-invalid');
        rattr(el, 'data-invalid');
    });
    $$('.is-valid').forEach(el => remClass(el, 'is-valid'));
}
var Types;
(function (Types) {
    Types["MultiPart"] = "multipart/form-data";
    Types["UrlEncoded"] = "application/x-www-form-urlencoded";
    Types["Json"] = "application/json";
})(Types || (Types = {}));
function toVarNames(names) {
    return !names ? [] :
        isArray(names)
            ? names
            : names.split(',').map(s => s.trim());
}
exports.toVarNames = toVarNames;
function formSubmit(options = {}) {
    const f = this;
    const contentType = attr(f, 'enctype') || Types.UrlEncoded;
    if (contentType == Types.MultiPart && window.FormData === undefined)
        throw new Error(`FormData Type is needed to send '${Types.MultiPart}' Content Types`);
    let body;
    try {
        body = serializeForm(f, contentType);
    }
    catch (e) {
        throw new Error(`${e.message || e}`);
    }
    const headers = new Headers();
    headers.set("Accept", Types.Json);
    headers.set("Content-Type", contentType);
    const req = {
        method: attr(f, 'method') || 'POST',
        credentials: 'include',
        mode: 'cors',
        headers,
        body,
    };
    if (options.requestFilter)
        options.requestFilter(req);
    return fetch(new Request(options.url || attr(f, 'action'), req))
        .catch(e => { throw new Error(`Network is unreachable (${e.message || e})`); })
        .then(r => {
        if (options.responseFilter)
            options.responseFilter(r);
        if (!r.ok) {
            return r.json()
                .catch(e => { throw new Error("The request failed with " + (r.statusText || r.status)); })
                .then(o => { throw Object.assign(new ErrorResponse(), sanitize(o)); });
        }
        handleHeaderBehaviors(f, r);
        return fromResponse(r);
    });
}
exports.formSubmit = formSubmit;
function handleHeaderBehaviors(f, r) {
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
function ajaxSubmit(f, options = {}) {
    const type = options.type;
    const bs4 = type === "bootstrap-v4";
    clearErrors(f);
    try {
        if (options.validate && options.validate.call(f) === false)
            return false;
    }
    catch (e) {
        return false;
    }
    addClass(f, 'loading');
    const disableSel = options.onSubmitDisable == null
        ? "[type=submit]"
        : options.onSubmitDisable;
    const disable = disableSel != null && disableSel != "";
    if (disable) {
        $$(disableSel).forEach(el => {
            sattr(el, 'disabled', 'disabled');
        });
    }
    function handleError(errMsg, err = null) {
        if (err) {
            applyErrors(f, err.ResponseStatus || err.responseStatus, Object.assign({}, options));
        }
        else if (errMsg) {
            addClass(f, "has-errors");
            const errorSummary = $$(".error-summary")[0];
            if (errorSummary) {
                errorSummary.innerHTML = errMsg;
            }
            if (bs4) {
                const elSummary = $$('[data-validation-summary]')[0];
                if (elSummary) {
                    elSummary.innerHTML = bsAlert(errMsg);
                }
            }
        }
        if (options.error) {
            options.error.call(f, err);
        }
        if (bs4) {
            $$('[data-invalid]').forEach(el => showInvalidInputs.call(el));
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
            $$(disableSel).forEach(el => {
                rattr(el, 'disabled');
            });
        }
        if (options.complete) {
            options.complete.call(f);
        }
    });
}
exports.ajaxSubmit = ajaxSubmit;
function fromResponse(r) {
    const contentType = r.headers.get("content-type");
    const isJson = contentType && contentType.indexOf(Types.Json) !== -1;
    if (isJson)
        return r.json();
    let len = r.headers.get("content-length");
    if (len === "0" || (len == null && !isJson))
        return null;
    return r.json();
}
function serializeForm(form, contentType = null) {
    return contentType === Types.MultiPart
        ? new FormData(form)
        : contentType == Types.Json
            ? JSON.stringify(serializeToObject(form))
            : serializeToUrlEncoded(form);
}
exports.serializeForm = serializeForm;
function formEntries(form, state, fn) {
    let field, f = form;
    let len = f.elements.length;
    for (let i = 0; i < len; i++) {
        field = f.elements[i];
        if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
            if (field.type == 'select-multiple') {
                for (let j = f.elements[i].options.length - 1; j >= 0; j--) {
                    if (field.options[j].selected)
                        fn(state, field.name, field.options[j].value);
                }
            }
            else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                fn(state, field.name, field.value);
            }
        }
    }
    return state;
}
function serializeToObject(form) {
    return formEntries(form, {}, (to, name, value) => to[name] = value);
}
exports.serializeToObject = serializeToObject;
function serializeToUrlEncoded(form) {
    const to = formEntries(form, [], (s, name, value) => typeof value == 'string'
        ? s.push(encodeURIComponent(name) + "=" + encodeURIComponent(value))
        : null);
    return to.join('&').replace(/%20/g, '+');
}
exports.serializeToUrlEncoded = serializeToUrlEncoded;
function serializeToFormData(form) {
    return formEntries(form, new FormData(), (to, name, value) => to.append(name, value));
}
exports.serializeToFormData = serializeToFormData;
function sanitizeFormData(formData) {
    // @ts-ignore
    for (let [key, value] of formData) {
        // Remove 0 length files
        if (typeof value == 'object' && value.size === 0) {
            formData.delete(key);
        }
    }
    return formData;
}
exports.sanitizeFormData = sanitizeFormData;
function triggerEvent(el, name, data = null) {
    if (document.createEvent) {
        let evt = document.createEvent(name == 'click' || name.startsWith('mouse') ? 'MouseEvents' : 'HTMLEvents');
        evt.initEvent(name, true, true);
        evt.data = data;
        el.dispatchEvent(evt);
    }
    else {
        let evt = document.createEventObject();
        el.fireEvent("on" + name, evt);
    }
}
exports.triggerEvent = triggerEvent;
function populateForm(form, model) {
    if (!model)
        return;
    const toggleCase = (s) => !s ? s :
        s[0] === s[0].toUpperCase() ? toCamelCase(s) : s[0] === s[0].toLowerCase() ? toPascalCase(s) : s;
    for (let key in model) {
        let val = model[key];
        if (typeof val == 'undefined' || val === null)
            val = '';
        const el = form.elements.namedItem(key) || form.elements.namedItem(toggleCase(key));
        const input = el;
        if (!el)
            continue;
        const type = input.type || el[0].type;
        switch (type) {
            case 'radio':
            case 'checkbox':
                const len = el.length;
                for (let i = 0; i < len; i++) {
                    el[i].checked = (val.indexOf(el[i].value) > -1);
                }
                break;
            case 'select-multiple':
                const values = isArray(val) ? val : [val];
                const select = el;
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
                if (d)
                    input.value = d.toISOString().split('T')[0];
                break;
            default:
                input.value = val;
                break;
        }
    }
}
exports.populateForm = populateForm;
function trimEnd(s, c) {
    let end = s.length;
    while (end > 0 && s[end - 1] === c) {
        --end;
    }
    return (end < s.length) ? s.substring(0, end) : s;
}
exports.trimEnd = trimEnd;
function safeVarName(s) {
    return s.replace(/[\W]+/g, '');
}
exports.safeVarName = safeVarName;
function pick(o, keys) {
    const to = {};
    Object.keys(o).forEach(k => {
        if (keys.indexOf(k) >= 0) {
            to[k] = o[k];
        }
    });
    return to;
}
exports.pick = pick;
function omit(o, keys) {
    const to = {};
    if (!o)
        return to;
    Object.keys(o).forEach(k => {
        if (keys.indexOf(k) < 0) {
            to[k] = o[k];
        }
    });
    return to;
}
exports.omit = omit;
function omitEmpty(o) {
    const to = {};
    if (!o)
        return to;
    Object.keys(o).forEach(k => {
        const v = o[k];
        if (v != null && v !== '') {
            to[k] = v;
        }
    });
    return to;
}
exports.omitEmpty = omitEmpty;
function apply(x, fn) {
    fn(x);
    return x;
}
exports.apply = apply;
function each(xs, f, o) {
    return xs.reduce((acc, x) => { f(acc, x); return acc; }, o || {});
}
exports.each = each;
function resolve(o, f) {
    let ret = typeof o == 'function' ? o() : o;
    return typeof f == 'function' ? f(ret) : ret;
}
exports.resolve = resolve;
function mapGet(o, name) {
    if (!o || !name)
        return null;
    let ret = o[name];
    if (ret)
        return ret;
    if (typeof o == 'object') {
        let nameLower = name.toLowerCase();
        let match = Object.keys(o).find(k => k.toLowerCase() === nameLower);
        return match ? o[match] : null;
    }
    return null;
}
exports.mapGet = mapGet;
function apiValue(o) {
    if (o == null)
        return '';
    if (typeof o == 'string')
        return o.substring(0, 6) === '/Date('
            ? toDate(o)
            : o.trim();
    return o;
}
exports.apiValue = apiValue;
function apiValueFmt(o) {
    let ret = apiValue(o);
    return (ret != null
        ? isDate(ret)
            ? dateFmt(ret)
            : ret
        : null) || '';
}
exports.apiValueFmt = apiValueFmt;
/* NAV */
function activeClassNav(x, activePath) {
    return x.href != null && (x.exact || activePath.length <= 1
        ? trimEnd(activePath, '/').toLowerCase() === trimEnd((x.href), '/').toLowerCase()
        : trimEnd(activePath, '/').toLowerCase().startsWith(trimEnd((x.href), '/').toLowerCase()))
        ? 'active'
        : null;
}
exports.activeClassNav = activeClassNav;
function activeClass(href, activePath, exact) {
    return href != null && (exact || activePath.length <= 1
        ? trimEnd(activePath, '/').toLowerCase() === trimEnd(href, '/').toLowerCase()
        : trimEnd(activePath, '/').toLowerCase().startsWith(trimEnd(href, '/').toLowerCase()))
        ? 'active'
        : null;
}
exports.activeClass = activeClass;
function bootstrapColors() { return ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']; }
exports.BootstrapColors = bootstrapColors();
function btnColorClass(props) {
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
exports.btnColorClass = btnColorClass;
function bootstrapSizes() { return ['xs', 'sm', 'md', 'lg']; }
exports.BootstrapSizes = bootstrapSizes();
function btnSizeClass(props) {
    for (const size of bootstrapSizes()) {
        if (props[size]) {
            return 'btn-' + size;
        }
    }
    return null;
}
exports.btnSizeClass = btnSizeClass;
function btnClasses(props) {
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
exports.btnClasses = btnClasses;
class NavDefaults {
    static create() { return new NavOptions(); }
    static forNav(options) { return options || NavDefaults.create(); }
    static overrideDefaults(targets, source) {
        if (targets == null) {
            return source;
        }
        targets = Object.assign({}, targets); // clone
        if (targets.navClass === NavDefaults.navClass && source.navClass != null) {
            targets.navClass = source.navClass;
        }
        if (targets.navItemClass === NavDefaults.navItemClass && source.navItemClass != null) {
            targets.navItemClass = source.navItemClass;
        }
        if (targets.navLinkClass === NavDefaults.navLinkClass && source.navLinkClass != null) {
            targets.navLinkClass = source.navLinkClass;
        }
        if (targets.childNavItemClass === NavDefaults.childNavItemClass && source.childNavItemClass != null) {
            targets.childNavItemClass = source.childNavItemClass;
        }
        if (targets.childNavLinkClass === NavDefaults.childNavLinkClass && source.childNavLinkClass != null) {
            targets.childNavLinkClass = source.childNavLinkClass;
        }
        if (targets.childNavMenuClass === NavDefaults.childNavMenuClass && source.childNavMenuClass != null) {
            targets.childNavMenuClass = source.childNavMenuClass;
        }
        if (targets.childNavMenuItemClass === NavDefaults.childNavMenuItemClass && source.childNavMenuItemClass != null) {
            targets.childNavMenuItemClass = source.childNavMenuItemClass;
        }
        return targets;
    }
    static showNav(navItem, attributes) {
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
exports.NavDefaults = NavDefaults;
NavDefaults.navClass = 'nav';
NavDefaults.navItemClass = 'nav-item';
NavDefaults.navLinkClass = 'nav-link';
NavDefaults.childNavItemClass = 'nav-item dropdown';
NavDefaults.childNavLinkClass = 'nav-link dropdown-toggle';
NavDefaults.childNavMenuClass = 'dropdown-menu';
NavDefaults.childNavMenuItemClass = 'dropdown-item';
class NavLinkDefaults {
    static forNavLink(options) { return options || NavDefaults.create(); }
}
exports.NavLinkDefaults = NavLinkDefaults;
class NavbarDefaults {
    static create() { return new NavOptions({ navClass: NavbarDefaults.navClass }); }
    static forNavbar(options) { return NavDefaults.overrideDefaults(options, NavbarDefaults.create()); }
}
exports.NavbarDefaults = NavbarDefaults;
NavbarDefaults.navClass = 'navbar-nav';
class NavButtonGroupDefaults {
    static create() { return new NavOptions({ navClass: NavButtonGroupDefaults.navClass, navItemClass: NavButtonGroupDefaults.navItemClass }); }
    static forNavButtonGroup(options) { return NavDefaults.overrideDefaults(options, NavButtonGroupDefaults.create()); }
}
exports.NavButtonGroupDefaults = NavButtonGroupDefaults;
NavButtonGroupDefaults.navClass = 'btn-group';
NavButtonGroupDefaults.navItemClass = 'btn btn-primary';
class LinkButtonDefaults {
    static create() { return new NavOptions({ navItemClass: LinkButtonDefaults.navItemClass }); }
    static forLinkButton(options) { return NavDefaults.overrideDefaults(options || null, LinkButtonDefaults.create()); }
}
exports.LinkButtonDefaults = LinkButtonDefaults;
LinkButtonDefaults.navItemClass = 'btn';
class UserAttributes {
    static fromSession(session) {
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
exports.UserAttributes = UserAttributes;
class NavOptions {
    static fromSession(session, to) {
        to = to || new NavOptions();
        to.attributes = UserAttributes.fromSession(session);
        return to;
    }
    constructor(init) {
        this.attributes = [];
        this.navClass = NavDefaults.navClass;
        this.navItemClass = NavDefaults.navItemClass;
        this.navLinkClass = NavDefaults.navLinkClass;
        this.childNavItemClass = NavDefaults.childNavItemClass;
        this.childNavLinkClass = NavDefaults.childNavLinkClass;
        this.childNavMenuClass = NavDefaults.childNavMenuClass;
        this.childNavMenuItemClass = NavDefaults.childNavMenuItemClass;
        Object.assign(this, init);
    }
}
exports.NavOptions = NavOptions;
function classNames(...args) {
    const classes = [];
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (!arg)
            continue;
        const argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        }
        else if (Array.isArray(arg) && arg.length) {
            const inner = classNames.apply(null, arg);
            if (inner) {
                classes.push(inner);
            }
        }
        else if (argType === 'object') {
            for (let key of Object.keys(arg)) {
                if (arg[key]) {
                    classes.push(key);
                }
            }
        }
    }
    return classes.join(' ');
}
exports.classNames = classNames;
function fromXsdDuration(xsd) {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let ms = 0.0;
    let t = splitOnFirst(xsd.substring(1), 'T');
    let hasTime = t.length == 2;
    let d = splitOnFirst(t[0], 'D');
    if (d.length == 2) {
        days = parseInt(d[0], 10) || 0;
    }
    if (hasTime) {
        let h = splitOnFirst(t[1], 'H');
        if (h.length == 2) {
            hours = parseInt(h[0], 10) || 0;
        }
        let m = splitOnFirst(h[h.length - 1], 'M');
        if (m.length == 2) {
            minutes = parseInt(m[0], 10) || 0;
        }
        let s = splitOnFirst(m[m.length - 1], 'S');
        if (s.length == 2) {
            ms = parseFloat(s[0]);
        }
        seconds = ms | 0;
        ms -= seconds;
    }
    let totalSecs = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;
    return totalSecs + ms;
}
exports.fromXsdDuration = fromXsdDuration;
function timeFmt(time, asXsd) {
    let totalSeconds = time;
    let wholeSeconds = time | 0;
    let seconds = wholeSeconds;
    let sec = (seconds >= 60 ? seconds % 60 : seconds);
    seconds = (seconds / 60);
    let min = seconds >= 60 ? seconds % 60 : seconds;
    seconds = (seconds / 60);
    let hours = seconds >= 24 ? seconds % 24 : seconds;
    let days = seconds / 24;
    let remainingSecs = sec + (totalSeconds - wholeSeconds);
    let sb = asXsd ? 'P' : '';
    if (asXsd) {
        if ((days | 0) > 0) {
            sb += `${days | 0}D`;
        }
        if (days == 0 || (hours + min + sec) + remainingSecs > 0) {
            sb += "T";
            if ((hours | 0) > 0) {
                sb += `${hours | 0}H`;
            }
            if ((min | 0) > 0) {
                sb += `${min | 0}M`;
            }
            if (remainingSecs > 0) {
                let secFmt = remainingSecs.toFixed(7);
                secFmt = trimEnd(trimEnd(secFmt, '0'), '.');
                sb += `${secFmt}S`;
            }
            else if (sb.length == 2) {
                sb += '0S';
            }
        }
    }
    else {
        if ((days | 0) > 0) {
            sb += `${days | 0}:`;
        }
        sb += `${padInt(hours | 0)}:${padInt(min | 0)}:`;
        if (remainingSecs > 0) {
            let secFmt = remainingSecs.toFixed(7);
            secFmt = trimEnd(trimEnd(secFmt, '0'), '.');
            sb += remainingSecs >= 10 ? `${secFmt}` : `0${secFmt}`;
        }
        else {
            sb += '00';
        }
    }
    return sb;
}
function toXsdDuration(time) { return timeFmt(time, true); }
exports.toXsdDuration = toXsdDuration;
function toTimeSpanFmt(time) { return timeFmt(time, false); }
exports.toTimeSpanFmt = toTimeSpanFmt;
function flatMap(f, xs) { return xs.reduce((r, x) => r.concat(f(x)), []); }
exports.flatMap = flatMap;
function uniq(xs) { return Array.from(new Set(xs)).sort((x, y) => x > y ? 1 : -1); }
exports.uniq = uniq;
function enc(o) {
    return o == null ? null : typeof o == 'string'
        ? o.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&#34;')
        : `${o}`;
}
exports.enc = enc;
function htmlAttrs(o) {
    let sb = [];
    Object.keys(o).forEach(k => {
        if (sb.length > 0)
            sb.push(' ');
        sb.push(k);
        sb.push('="');
        sb.push(enc(o[k]));
        sb.push('"');
    });
    return sb.join('');
}
exports.htmlAttrs = htmlAttrs;
function indexOfAny(str, needles) {
    for (let i = 0, len = needles.length; i < len; i++) {
        let pos = str.indexOf(needles[i]);
        if (pos >= 0)
            return pos;
    }
    return -1;
}
exports.indexOfAny = indexOfAny;
function isNullOrEmpty(o) {
    return (o === null || o === undefined || o === "");
}
exports.isNullOrEmpty = isNullOrEmpty;
// From .NET DateTime (WCF JSON or ISO Date) to JS Date
function fromDateTime(dateTime) {
    return toDate(dateTime);
}
exports.fromDateTime = fromDateTime;
// From JS Date to .NET DateTime (WCF JSON Date)
function toDateTime(date) {
    return `\/Date(${date.getTime()})\/`;
}
exports.toDateTime = toDateTime;
// From .NET TimeSpan (XSD Duration) to JS String
function fromTimeSpan(xsdDuration) {
    return xsdDuration;
}
exports.fromTimeSpan = fromTimeSpan;
// From JS String to .NET TimeSpan (XSD Duration)
function toTimeSpan(xsdDuration) {
    return xsdDuration;
}
exports.toTimeSpan = toTimeSpan;
// From .NET Guid to JS String
function fromGuid(xsdDuration) {
    return xsdDuration;
}
exports.fromGuid = fromGuid;
// From JS String to .NET Guid
function toGuid(xsdDuration) {
    return xsdDuration;
}
exports.toGuid = toGuid;
// From .NET byte[] (Base64 String) to JVM signed byte[]
function fromByteArray(base64) {
    let binaryStr = _atob(base64);
    let len = binaryStr.length;
    let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
    }
    return bytes;
}
exports.fromByteArray = fromByteArray;
// From JS Uint8Array to .NET byte[] (Base64 String)
function toByteArray(bytes) {
    let str = String.fromCharCode.apply(null, bytes);
    return _btoa(str);
}
exports.toByteArray = toByteArray;
// From JS String to Base64 String
function toBase64String(source) {
    return JsonServiceClient.toBase64(source);
}
exports.toBase64String = toBase64String;
class StringBuffer {
    constructor(opt_a1, ...var_args) {
        this.buffer_ = '';
        if (opt_a1 != null)
            this.append.apply(this, arguments);
    }
    set(s) {
        this.buffer_ = '' + s;
    }
    append(a1, opt_a2, ...var_args) {
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
exports.StringBuffer = StringBuffer;
class JSV {
    static encodeString(str) {
        if (str == null)
            return null;
        if (str === '')
            return '""';
        if (str.indexOf('"'))
            str = str.replace(/"/g, '""');
        return indexOfAny(str, JSV.ESCAPE_CHARS) >= 0
            ? '"' + str + '"'
            : str;
    }
    static encodeArray(array) {
        let value, sb = new StringBuffer();
        for (let i = 0, len = array.length; i < len; i++) {
            value = array[i];
            if (isNullOrEmpty(value) || typeof value === 'function')
                continue;
            if (sb.getLength() > 0)
                sb.append(',');
            sb.append(JSV.stringify(value));
        }
        return `[${sb.toString()}]`;
    }
    static encodeObject(obj) {
        let value, sb = new StringBuffer();
        for (let key in obj) {
            value = obj[key];
            if (!obj.hasOwnProperty(key) || isNullOrEmpty(value) || typeof value === 'function')
                continue;
            if (sb.getLength() > 0)
                sb.append(',');
            sb.append(JSV.encodeString(key));
            sb.append(':');
            sb.append(JSV.stringify(value));
        }
        return `{${sb.toString()}}`;
    }
    static stringify(obj) {
        if (obj === null || obj === undefined)
            return null;
        let typeOf = typeof (obj);
        if (typeOf === 'function' || typeOf === 'symbol')
            return null;
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
        switch (typeOf) {
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
exports.JSV = JSV;
JSV.ESCAPE_CHARS = ['"', ':', ',', '{', '}', '[', ']', '\r', '\n'];
function uniqueKeys(rows) {
    let to = [];
    rows.forEach(o => Object.keys(o).forEach(k => {
        if (to.indexOf(k) === -1) {
            to.push(k);
        }
    }));
    return to;
}
exports.uniqueKeys = uniqueKeys;
function alignLeft(str, len, pad = ' ') {
    if (len < 0)
        return '';
    let aLen = len + 1 - str.length;
    if (aLen <= 0)
        return str;
    return pad + str + pad.repeat(len + 1 - str.length);
}
exports.alignLeft = alignLeft;
function alignCenter(str, len, pad = ' ') {
    if (len < 0)
        return '';
    if (!str)
        str = '';
    let nLen = str.length;
    let half = Math.floor(len / 2 - nLen / 2);
    let odds = Math.abs((nLen % 2) - (len % 2));
    return pad.repeat(half + 1) + str + pad.repeat(half + 1 + odds);
}
exports.alignCenter = alignCenter;
function alignRight(str, len, pad = ' ') {
    if (len < 0)
        return '';
    let aLen = len + 1 - str.length;
    if (aLen <= 0)
        return str;
    return pad.repeat(len + 1 - str.length) + str + pad;
}
exports.alignRight = alignRight;
function alignAuto(obj, len, pad = ' ') {
    let str = `${obj}`;
    if (str.length <= len) {
        return typeof obj === "number"
            ? alignRight(str, len, pad)
            : alignLeft(str, len, pad);
    }
    return str;
}
exports.alignAuto = alignAuto;
function EventBus() {
    let { subscribe, publish } = createBus();
    this.subscribe = subscribe;
    this.publish = publish;
}
exports.EventBus = EventBus;
function createBus() {
    let subscriptions = {};
    function subscribe(type, callback) {
        let id = Symbol('id');
        if (!subscriptions[type])
            subscriptions[type] = {};
        subscriptions[type][id] = callback;
        return {
            unsubscribe: function () {
                delete subscriptions[type][id];
                if (Object.getOwnPropertySymbols(subscriptions[type]).length === 0) {
                    delete subscriptions[type];
                }
            }
        };
    }
    function publish(eventType, arg) {
        if (!subscriptions[eventType])
            return;
        Object.getOwnPropertySymbols(subscriptions[eventType])
            .forEach(key => subscriptions[eventType][key](arg));
    }
    return { subscribe, publish };
}
exports.createBus = createBus;
class Inspect {
    static dump(obj) {
        let to = JSON.stringify(obj, null, 4);
        return to.replace(/"/g, '');
    }
    static printDump(obj) { console.log(Inspect.dump(obj)); }
    static dumpTable(rows) {
        let mapRows = rows;
        let keys = uniqueKeys(mapRows);
        let colSizes = {};
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
        let sb = [];
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
    static printDumpTable(rows) { console.log(Inspect.dumpTable(rows)); }
}
exports.Inspect = Inspect;
