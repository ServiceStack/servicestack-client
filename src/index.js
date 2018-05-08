"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("fetch-everywhere");
var ResponseStatus = /** @class */ (function () {
    function ResponseStatus() {
    }
    return ResponseStatus;
}());
exports.ResponseStatus = ResponseStatus;
var ResponseError = /** @class */ (function () {
    function ResponseError() {
    }
    return ResponseError;
}());
exports.ResponseError = ResponseError;
var ErrorResponse = /** @class */ (function () {
    function ErrorResponse() {
    }
    return ErrorResponse;
}());
exports.ErrorResponse = ErrorResponse;
var NewInstanceResolver = /** @class */ (function () {
    function NewInstanceResolver() {
    }
    NewInstanceResolver.prototype.tryResolve = function (ctor) {
        return new ctor();
    };
    return NewInstanceResolver;
}());
exports.NewInstanceResolver = NewInstanceResolver;
var SingletonInstanceResolver = /** @class */ (function () {
    function SingletonInstanceResolver() {
    }
    SingletonInstanceResolver.prototype.tryResolve = function (ctor) {
        return ctor.instance
            || (ctor.instance = new ctor());
    };
    return SingletonInstanceResolver;
}());
exports.SingletonInstanceResolver = SingletonInstanceResolver;
var TypeMap = {
    onConnect: "ServerEventConnect",
    onHeartbeat: "ServerEventHeartbeat",
    onJoin: "ServerEventJoin",
    onLeave: "ServerEventLeave",
    onUpdate: "ServerEventUpdate"
};
/**
 * EventSource
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["CONNECTING"] = 0] = "CONNECTING";
    ReadyState[ReadyState["OPEN"] = 1] = "OPEN";
    ReadyState[ReadyState["CLOSED"] = 2] = "CLOSED";
})(ReadyState = exports.ReadyState || (exports.ReadyState = {}));
var ServerEventsClient = /** @class */ (function () {
    function ServerEventsClient(baseUrl, channels, options, eventSource) {
        if (options === void 0) { options = {}; }
        if (eventSource === void 0) { eventSource = null; }
        var _this = this;
        this.channels = channels;
        this.options = options;
        this.eventSource = eventSource;
        this.onMessage = function (e) {
            if (_this.stopped)
                return;
            var opt = _this.options;
            if (typeof document == "undefined") {
                var document = {
                    querySelectorAll: function (sel) { return []; }
                };
            }
            var parts = exports.splitOnFirst(e.data, " ");
            var channel = null;
            var selector = parts[0];
            var selParts = exports.splitOnFirst(selector, "@");
            if (selParts.length > 1) {
                channel = selParts[0];
                selector = selParts[1];
            }
            var json = parts[1];
            var body = null;
            try {
                body = json ? JSON.parse(json) : null;
            }
            catch (ignore) { }
            parts = exports.splitOnFirst(selector, ".");
            if (parts.length <= 1)
                throw "invalid selector format: " + selector;
            var op = parts[0], target = parts[1].replace(new RegExp("%20", "g"), " ");
            var tokens = exports.splitOnFirst(target, "$");
            var cmd = tokens[0], cssSelector = tokens[1];
            var els = cssSelector && document.querySelectorAll(cssSelector);
            var el = els && els[0];
            var eventId = parseInt(e.lastEventId);
            var data = e.data;
            var type = TypeMap[cmd] || "ServerEventMessage";
            var request = { eventId: eventId, data: data, type: type,
                channel: channel, selector: selector, json: json, body: body, op: op, target: tokens[0], cssSelector: cssSelector, meta: {} };
            var mergedBody = typeof body == "object"
                ? Object.assign({}, request, body)
                : request;
            if (opt.validate && opt.validate(request) === false)
                return;
            var headers = new Headers();
            headers.set("Content-Type", "text/plain");
            if (op === "cmd") {
                if (cmd === "onConnect") {
                    _this.connectionInfo = mergedBody;
                    if (typeof body.heartbeatIntervalMs == "string")
                        _this.connectionInfo.heartbeatIntervalMs = parseInt(body.heartbeatIntervalMs);
                    if (typeof body.idleTimeoutMs == "string")
                        _this.connectionInfo.idleTimeoutMs = parseInt(body.idleTimeoutMs);
                    Object.assign(opt, body);
                    var fn = opt.handlers["onConnect"];
                    if (fn) {
                        fn.call(el || document.body, _this.connectionInfo, request);
                        if (_this.stopped)
                            return;
                    }
                    if (opt.heartbeatUrl) {
                        if (opt.heartbeat) {
                            clearInterval(opt.heartbeat);
                        }
                        opt.heartbeat = setInterval(function () {
                            if (_this.eventSource.readyState === EventSource.CLOSED) {
                                clearInterval(opt.heartbeat);
                                var stopFn = opt.handlers["onStop"];
                                if (stopFn != null)
                                    stopFn.apply(_this.eventSource);
                                _this.reconnectServerEvents({ error: new Error("EventSource is CLOSED") });
                                return;
                            }
                            fetch(new Request(opt.heartbeatUrl, { method: "POST", mode: "cors", headers: headers, credentials: _this.serviceClient.credentials }))
                                .then(function (res) { if (!res.ok)
                                throw new Error(res.status + " - " + res.statusText); })
                                .catch(function (error) { return _this.reconnectServerEvents({ error: error }); });
                        }, (_this.connectionInfo && _this.connectionInfo.heartbeatIntervalMs) || opt.heartbeatIntervalMs || 10000);
                    }
                    if (opt.unRegisterUrl) {
                        if (typeof window != "undefined") {
                            window.onunload = function () { return _this.stop(); };
                        }
                    }
                    _this.updateSubscriberUrl = opt.updateSubscriberUrl;
                    _this.updateChannels((opt.channels || "").split(","));
                }
                else {
                    var isCmdMsg = cmd == "onJoin" || cmd == "onLeave" || cmd == "onUpdate";
                    var fn = opt.handlers[cmd];
                    if (fn) {
                        if (isCmdMsg) {
                            fn.call(el || document.body, mergedBody);
                        }
                        else {
                            fn.call(el || document.body, body, request);
                        }
                    }
                    else {
                        if (!isCmdMsg) {
                            var r = opt.receivers && opt.receivers["cmd"];
                            _this.invokeReceiver(r, cmd, el, request, "cmd");
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
                _this.raiseEvent(target, request);
            }
            else if (op === "css") {
                exports.css(els || document.querySelectorAll("body"), cmd, body);
            }
            //Named Receiver
            var r = opt.receivers && opt.receivers[op];
            _this.invokeReceiver(r, cmd, el, request, op);
            if (!TypeMap[cmd]) {
                var fn = opt.handlers["onMessage"];
                if (fn) {
                    fn.call(el || document.body, mergedBody);
                }
            }
            if (opt.onTick)
                opt.onTick();
        };
        this.onError = function (error) {
            if (_this.stopped)
                return;
            if (!error)
                error = event;
            var fn = _this.options.onException;
            if (fn != null)
                fn.call(_this.eventSource, error);
            if (_this.options.onTick)
                _this.options.onTick();
        };
        if (this.channels.length === 0)
            throw "at least 1 channel is required";
        this.resolver = this.options.resolver || new NewInstanceResolver();
        this.eventStreamUri = exports.combinePaths(baseUrl, "event-stream") + "?";
        this.updateChannels(channels);
        this.serviceClient = new JsonServiceClient(baseUrl);
        this.listeners = {};
        this.withCredentials = true;
        if (!this.options.handlers)
            this.options.handlers = {};
    }
    ServerEventsClient.prototype.getEventSourceOptions = function () {
        return { withCredentials: this.withCredentials };
    };
    ServerEventsClient.prototype.reconnectServerEvents = function (opt) {
        var _this = this;
        if (opt === void 0) { opt = {}; }
        if (this.stopped)
            return;
        if (opt.error)
            this.onError(opt.error);
        var hold = this.eventSource;
        var url = opt.url || this.eventStreamUri || hold.url;
        if (this.options.resolveStreamUrl != null) {
            url = this.options.resolveStreamUrl(url);
        }
        var es = this.EventSource
            ? new this.EventSource(url, this.getEventSourceOptions())
            : new EventSource(url, this.getEventSourceOptions());
        es.addEventListener('error', function (e) { return opt.onerror || hold.onerror || _this.onError; });
        es.addEventListener('message', opt.onmessage || hold.onmessage || this.onMessage);
        var fn = this.options.onReconnect;
        if (fn != null)
            fn.call(es, opt.error);
        if (hold.removeEventListener) {
            hold.removeEventListener('error', this.onError);
            hold.removeEventListener('message', this.onMessage);
        }
        hold.close();
        return this.eventSource = es;
    };
    ServerEventsClient.prototype.start = function () {
        var _this = this;
        this.stopped = false;
        if (this.eventSource == null || this.eventSource.readyState === EventSource.CLOSED) {
            var url = this.eventStreamUri;
            if (this.options.resolveStreamUrl != null) {
                url = this.options.resolveStreamUrl(url);
            }
            this.eventSource = this.EventSource
                ? new this.EventSource(url, this.getEventSourceOptions())
                : new EventSource(url, this.getEventSourceOptions());
            this.eventSource.addEventListener('error', this.onError);
            this.eventSource.addEventListener('message', function (e) { return _this.onMessage(e); });
        }
        return this;
    };
    ServerEventsClient.prototype.stop = function () {
        this.stopped = true;
        if (this.eventSource) {
            this.eventSource.close();
        }
        var opt = this.options;
        if (opt && opt.heartbeat) {
            clearInterval(opt.heartbeat);
        }
        var hold = this.connectionInfo;
        if (hold == null || hold.unRegisterUrl == null)
            return new Promise(function (resolve, reject) { return resolve(); });
        this.connectionInfo = null;
        return fetch(new Request(hold.unRegisterUrl, { method: "POST", mode: "cors", credentials: this.serviceClient.credentials }))
            .then(function (res) { if (!res.ok)
            throw new Error(res.status + " - " + res.statusText); })
            .catch(this.onError);
    };
    ServerEventsClient.prototype.invokeReceiver = function (r, cmd, el, request, name) {
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
                var cmdLower = cmd.toLowerCase();
                for (var k in r) {
                    if (k.toLowerCase() == cmdLower) {
                        if (typeof r[k] == "function") {
                            r[k].call(el || r, request.body, request);
                        }
                        else {
                            r[k] = request.body;
                        }
                        return;
                    }
                }
                var noSuchMethod = r["noSuchMethod"];
                if (typeof noSuchMethod == "function") {
                    noSuchMethod.call(el || r, request.target, request);
                }
            }
        }
    };
    ServerEventsClient.prototype.hasConnected = function () {
        return this.connectionInfo != null;
    };
    ServerEventsClient.prototype.registerHandler = function (name, fn) {
        if (!this.options.handlers)
            this.options.handlers = {};
        this.options.handlers[name] = fn;
        return this;
    };
    ServerEventsClient.prototype.setResolver = function (resolver) {
        this.options.resolver = resolver;
        return this;
    };
    ServerEventsClient.prototype.registerReceiver = function (receiver) {
        return this.registerNamedReceiver("cmd", receiver);
    };
    ServerEventsClient.prototype.registerNamedReceiver = function (name, receiver) {
        if (!this.options.receivers)
            this.options.receivers = {};
        this.options.receivers[name] = receiver;
        return this;
    };
    ServerEventsClient.prototype.unregisterReceiver = function (name) {
        if (name === void 0) { name = "cmd"; }
        if (this.options.receivers) {
            delete this.options.receivers[name];
        }
        return this;
    };
    ServerEventsClient.prototype.updateChannels = function (channels) {
        this.channels = channels;
        var url = this.eventSource != null
            ? this.eventSource.url
            : this.eventStreamUri;
        this.eventStreamUri = url.substring(0, Math.min(url.indexOf("?"), url.length)) + "?channels=" + channels.join(",") + "&t=" + new Date().getTime();
    };
    ServerEventsClient.prototype.update = function (subscribe, unsubscribe) {
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
    };
    ServerEventsClient.prototype.addListener = function (eventName, handler) {
        var handlers = this.listeners[eventName] || (this.listeners[eventName] = []);
        handlers.push(handler);
        return this;
    };
    ServerEventsClient.prototype.removeListener = function (eventName, handler) {
        var handlers = this.listeners[eventName];
        if (handlers) {
            var pos = handlers.indexOf(handler);
            if (pos >= 0) {
                handlers.splice(pos, 1);
            }
        }
        return this;
    };
    ServerEventsClient.prototype.raiseEvent = function (eventName, msg) {
        var _this = this;
        var handlers = this.listeners[eventName];
        if (handlers) {
            handlers.forEach(function (x) {
                try {
                    x(msg);
                }
                catch (e) {
                    _this.onError(e);
                }
            });
        }
    };
    ServerEventsClient.prototype.getConnectionInfo = function () {
        if (this.connectionInfo == null)
            throw "Not Connected";
        return this.connectionInfo;
    };
    ServerEventsClient.prototype.getSubscriptionId = function () {
        return this.getConnectionInfo().id;
    };
    ServerEventsClient.prototype.updateSubscriber = function (request) {
        var _this = this;
        if (request.id == null)
            request.id = this.getSubscriptionId();
        return this.serviceClient.post(request)
            .then(function (x) {
            _this.update(request.subscribeChannels, request.unsubscribeChannels);
        }).catch(this.onError);
    };
    ServerEventsClient.prototype.subscribeToChannels = function () {
        var _this = this;
        var channels = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            channels[_i] = arguments[_i];
        }
        var request = new UpdateEventSubscriber();
        request.id = this.getSubscriptionId();
        request.subscribeChannels = channels;
        return this.serviceClient.post(request)
            .then(function (x) {
            _this.update(channels, null);
        }).catch(this.onError);
    };
    ServerEventsClient.prototype.unsubscribeFromChannels = function () {
        var _this = this;
        var channels = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            channels[_i] = arguments[_i];
        }
        var request = new UpdateEventSubscriber();
        request.id = this.getSubscriptionId();
        request.unsubscribeChannels = channels;
        return this.serviceClient.post(request)
            .then(function (x) {
            _this.update(null, channels);
        }).catch(this.onError);
    };
    ServerEventsClient.prototype.getChannelSubscribers = function () {
        var _this = this;
        var request = new GetEventSubscribers();
        request.channels = this.channels;
        return this.serviceClient.get(request)
            .then(function (r) { return r.map(function (x) { return _this.toServerEventUser(x); }); })
            .catch(function (e) {
            _this.onError(e);
            return [];
        });
    };
    ServerEventsClient.prototype.toServerEventUser = function (map) {
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
    };
    ServerEventsClient.UnknownChannel = "*";
    return ServerEventsClient;
}());
exports.ServerEventsClient = ServerEventsClient;
var ServerEventReceiver = /** @class */ (function () {
    function ServerEventReceiver() {
    }
    ServerEventReceiver.prototype.noSuchMethod = function (selector, message) { };
    return ServerEventReceiver;
}());
exports.ServerEventReceiver = ServerEventReceiver;
var UpdateEventSubscriber = /** @class */ (function () {
    function UpdateEventSubscriber() {
    }
    UpdateEventSubscriber.prototype.createResponse = function () { return new UpdateEventSubscriberResponse(); };
    UpdateEventSubscriber.prototype.getTypeName = function () { return "UpdateEventSubscriber"; };
    return UpdateEventSubscriber;
}());
exports.UpdateEventSubscriber = UpdateEventSubscriber;
var UpdateEventSubscriberResponse = /** @class */ (function () {
    function UpdateEventSubscriberResponse() {
    }
    return UpdateEventSubscriberResponse;
}());
exports.UpdateEventSubscriberResponse = UpdateEventSubscriberResponse;
var GetEventSubscribers = /** @class */ (function () {
    function GetEventSubscribers() {
    }
    GetEventSubscribers.prototype.createResponse = function () { return []; };
    GetEventSubscribers.prototype.getTypeName = function () { return "GetEventSubscribers"; };
    return GetEventSubscribers;
}());
exports.GetEventSubscribers = GetEventSubscribers;
var ServerEventUser = /** @class */ (function () {
    function ServerEventUser() {
    }
    return ServerEventUser;
}());
exports.ServerEventUser = ServerEventUser;
var HttpMethods = /** @class */ (function () {
    function HttpMethods() {
    }
    HttpMethods.Get = "GET";
    HttpMethods.Post = "POST";
    HttpMethods.Put = "PUT";
    HttpMethods.Delete = "DELETE";
    HttpMethods.Patch = "PATCH";
    HttpMethods.Head = "HEAD";
    HttpMethods.Options = "OPTIONS";
    HttpMethods.hasRequestBody = function (method) {
        return !(method === "GET" || method === "DELETE" || method === "HEAD" || method === "OPTIONS");
    };
    return HttpMethods;
}());
exports.HttpMethods = HttpMethods;
var GetAccessToken = /** @class */ (function () {
    function GetAccessToken() {
    }
    GetAccessToken.prototype.createResponse = function () { return new GetAccessTokenResponse(); };
    GetAccessToken.prototype.getTypeName = function () { return "GetAccessToken"; };
    return GetAccessToken;
}());
var GetAccessTokenResponse = /** @class */ (function () {
    function GetAccessTokenResponse() {
    }
    return GetAccessTokenResponse;
}());
exports.GetAccessTokenResponse = GetAccessTokenResponse;
var JsonServiceClient = /** @class */ (function () {
    function JsonServiceClient(baseUrl) {
        if (baseUrl === void 0) { baseUrl = "/"; }
        this.baseUrl = baseUrl;
        this.replyBaseUrl = exports.combinePaths(baseUrl, "json", "reply") + "/";
        this.oneWayBaseUrl = exports.combinePaths(baseUrl, "json", "oneway") + "/";
        this.mode = "cors";
        this.credentials = 'include';
        this.headers = new Headers();
        this.headers.set("Content-Type", "application/json");
        this.manageCookies = typeof document == "undefined"; //because node-fetch doesn't
        this.cookies = {};
    }
    JsonServiceClient.prototype.setCredentials = function (userName, password) {
        this.userName = userName;
        this.password = password;
    };
    // @deprecated use bearerToken property
    JsonServiceClient.prototype.setBearerToken = function (token) {
        this.bearerToken = token;
    };
    JsonServiceClient.prototype.get = function (request, args) {
        return typeof request != "string"
            ? this.send(HttpMethods.Get, request, args)
            : this.send(HttpMethods.Get, null, args, this.toAbsoluteUrl(request));
    };
    JsonServiceClient.prototype.delete = function (request, args) {
        return typeof request != "string"
            ? this.send(HttpMethods.Delete, request, args)
            : this.send(HttpMethods.Delete, null, args, this.toAbsoluteUrl(request));
    };
    JsonServiceClient.prototype.post = function (request, args) {
        return this.send(HttpMethods.Post, request, args);
    };
    JsonServiceClient.prototype.postToUrl = function (url, request, args) {
        return this.send(HttpMethods.Post, request, args, this.toAbsoluteUrl(url));
    };
    JsonServiceClient.prototype.postBody = function (request, body, args) {
        return this.sendBody(HttpMethods.Post, request, body, args);
    };
    JsonServiceClient.prototype.put = function (request, args) {
        return this.send(HttpMethods.Put, request, args);
    };
    JsonServiceClient.prototype.putToUrl = function (url, request, args) {
        return this.send(HttpMethods.Put, request, args, this.toAbsoluteUrl(url));
    };
    JsonServiceClient.prototype.putBody = function (request, body, args) {
        return this.sendBody(HttpMethods.Put, request, body, args);
    };
    JsonServiceClient.prototype.patch = function (request, args) {
        return this.send(HttpMethods.Patch, request, args);
    };
    JsonServiceClient.prototype.patchToUrl = function (url, request, args) {
        return this.send(HttpMethods.Patch, request, args, this.toAbsoluteUrl(url));
    };
    JsonServiceClient.prototype.patchBody = function (request, body, args) {
        return this.sendBody(HttpMethods.Patch, request, body, args);
    };
    JsonServiceClient.prototype.sendAll = function (requests) {
        if (requests.length == 0)
            return Promise.resolve([]);
        var url = exports.combinePaths(this.replyBaseUrl, exports.nameOf(requests[0]) + "[]");
        return this.send(HttpMethods.Post, requests, null, url);
    };
    JsonServiceClient.prototype.sendAllOneWay = function (requests) {
        if (requests.length == 0)
            return Promise.resolve(void 0);
        var url = exports.combinePaths(this.oneWayBaseUrl, exports.nameOf(requests[0]) + "[]");
        return this.send(HttpMethods.Post, requests, null, url)
            .then(function (r) { return void 0; });
    };
    JsonServiceClient.prototype.createUrlFromDto = function (method, request) {
        var url = exports.combinePaths(this.replyBaseUrl, exports.nameOf(request));
        var hasRequestBody = HttpMethods.hasRequestBody(method);
        if (!hasRequestBody)
            url = exports.appendQueryString(url, request);
        return url;
    };
    JsonServiceClient.prototype.toAbsoluteUrl = function (relativeOrAbsoluteUrl) {
        return relativeOrAbsoluteUrl.startsWith("http://") ||
            relativeOrAbsoluteUrl.startsWith("https://")
            ? relativeOrAbsoluteUrl
            : exports.combinePaths(this.baseUrl, relativeOrAbsoluteUrl);
    };
    JsonServiceClient.prototype.createRequest = function (_a) {
        var _this = this;
        var method = _a.method, request = _a.request, url = _a.url, args = _a.args, body = _a.body;
        if (!url)
            url = this.createUrlFromDto(method, request);
        if (args)
            url = exports.appendQueryString(url, args);
        if (this.bearerToken != null) {
            this.headers.set("Authorization", "Bearer " + this.bearerToken);
        }
        else if (this.userName != null) {
            this.headers.set('Authorization', 'Basic ' + JsonServiceClient.toBase64(this.userName + ":" + this.password));
        }
        if (this.manageCookies) {
            var cookies = Object.keys(this.cookies)
                .map(function (x) {
                var c = _this.cookies[x];
                return c.expires && c.expires < new Date()
                    ? null
                    : c.name + "=" + encodeURIComponent(c.value);
            })
                .filter(function (x) { return !!x; });
            if (cookies.length > 0)
                this.headers.set("Cookie", cookies.join("; "));
            else
                this.headers.delete("Cookie");
        }
        var headers = new Headers(this.headers);
        var hasRequestBody = HttpMethods.hasRequestBody(method);
        var reqInit = {
            url: url,
            method: method,
            mode: this.mode,
            credentials: this.credentials,
            headers: headers,
            compress: false,
        };
        if (hasRequestBody) {
            reqInit.body = body || JSON.stringify(request);
            if (typeof window != "undefined" && body instanceof FormData) {
                headers.delete('Content-Type'); //set by FormData
            }
        }
        if (this.requestFilter != null)
            this.requestFilter(reqInit);
        return reqInit;
    };
    JsonServiceClient.prototype.createResponse = function (res, request) {
        var _this = this;
        if (!res.ok)
            throw res;
        if (this.manageCookies) {
            var setCookies = [];
            res.headers.forEach(function (v, k) {
                if ("set-cookie" == k.toLowerCase())
                    setCookies.push(v);
            });
            setCookies.forEach(function (x) {
                var cookie = exports.parseCookie(x);
                if (cookie)
                    _this.cookies[cookie.name] = cookie;
            });
        }
        if (this.responseFilter != null)
            this.responseFilter(res);
        var x = request && typeof request != "string" && typeof request.createResponse == 'function'
            ? request.createResponse()
            : null;
        if (typeof x === 'string')
            return res.text().then(function (o) { return o; });
        var contentType = res.headers.get("content-type");
        var isJson = contentType && contentType.indexOf("application/json") !== -1;
        if (isJson) {
            return res.json().then(function (o) { return o; });
        }
        if (typeof Uint8Array != "undefined" && x instanceof Uint8Array) {
            if (typeof res.arrayBuffer != 'function')
                throw new Error("This fetch polyfill does not implement 'arrayBuffer'");
            return res.arrayBuffer().then(function (o) { return new Uint8Array(o); });
        }
        else if (typeof Blob == "function" && x instanceof Blob) {
            if (typeof res.blob != 'function')
                throw new Error("This fetch polyfill does not implement 'blob'");
            return res.blob().then(function (o) { return o; });
        }
        var contentLength = res.headers.get("content-length");
        if (contentLength === "0" || (contentLength == null && !isJson)) {
            return x;
        }
        return res.json().then(function (o) { return o; }); //fallback
    };
    JsonServiceClient.prototype.handleError = function (holdRes, res, type) {
        var _this = this;
        if (type === void 0) { type = null; }
        if (res instanceof Error)
            throw this.raiseError(holdRes, res);
        // res.json can only be called once.
        if (res.bodyUsed)
            throw this.raiseError(res, createErrorResponse(res.status, res.statusText, type));
        var isErrorResponse = typeof res.json == "undefined" && res.responseStatus;
        if (isErrorResponse) {
            return new Promise(function (resolve, reject) {
                return reject(_this.raiseError(null, res));
            });
        }
        return res.json().then(function (o) {
            var errorDto = exports.sanitize(o);
            if (!errorDto.responseStatus)
                throw createErrorResponse(res.status, res.statusText, type);
            if (type != null)
                errorDto.type = type;
            throw errorDto;
        }).catch(function (error) {
            // No responseStatus body, set from `res` Body object
            if (error instanceof Error
                || (typeof window != "undefined" && error instanceof window.DOMException /*MS Edge*/)) {
                throw _this.raiseError(res, createErrorResponse(res.status, res.statusText, type));
            }
            throw _this.raiseError(res, error);
        });
    };
    JsonServiceClient.prototype.send = function (method, request, args, url) {
        return this.sendRequest({ method: method, request: request, args: args, url: url });
    };
    JsonServiceClient.prototype.sendBody = function (method, request, body, args) {
        var url = exports.combinePaths(this.replyBaseUrl, exports.nameOf(request));
        return this.sendRequest({
            method: method,
            request: body,
            body: typeof body == "string"
                ? body
                : typeof window != "undefined" && body instanceof FormData
                    ? body
                    : JSON.stringify(body),
            url: exports.appendQueryString(url, request),
            args: args,
            returns: request
        });
    };
    JsonServiceClient.prototype.sendRequest = function (info) {
        var _this = this;
        var req = this.createRequest(info);
        var returns = info.returns || info.request;
        var holdRes = null;
        var resendRequest = function () {
            var req = _this.createRequest(info);
            if (_this.urlFilter)
                _this.urlFilter(req.url);
            return fetch(req.url, req)
                .then(function (res) { return _this.createResponse(res, returns); })
                .catch(function (res) { return _this.handleError(holdRes, res); });
        };
        if (this.urlFilter)
            this.urlFilter(req.url);
        return fetch(req.url, req)
            .then(function (res) {
            holdRes = res;
            var response = _this.createResponse(res, returns);
            return response;
        })
            .catch(function (res) {
            if (res.status === 401) {
                if (_this.refreshToken) {
                    var jwtReq_1 = new GetAccessToken();
                    jwtReq_1.refreshToken = _this.refreshToken;
                    var url = _this.refreshTokenUri || _this.createUrlFromDto(HttpMethods.Post, jwtReq_1);
                    var jwtRequest = _this.createRequest({ method: HttpMethods.Post, request: jwtReq_1, args: null, url: url });
                    return fetch(url, jwtRequest)
                        .then(function (r) { return _this.createResponse(r, jwtReq_1).then(function (jwtResponse) {
                        _this.bearerToken = jwtResponse.accessToken;
                        return resendRequest();
                    }); })
                        .catch(function (res) {
                        return _this.handleError(holdRes, res, "RefreshTokenException");
                    });
                }
                if (_this.onAuthenticationRequired) {
                    return _this.onAuthenticationRequired().then(resendRequest);
                }
            }
            return _this.handleError(holdRes, res);
        });
    };
    JsonServiceClient.prototype.raiseError = function (res, error) {
        if (this.exceptionFilter != null) {
            this.exceptionFilter(res, error);
        }
        return error;
    };
    return JsonServiceClient;
}());
exports.JsonServiceClient = JsonServiceClient;
var createErrorResponse = function (errorCode, message, type) {
    if (type === void 0) { type = null; }
    var error = new ErrorResponse();
    if (type != null)
        error.type = type;
    error.responseStatus = new ResponseStatus();
    error.responseStatus.errorCode = errorCode && errorCode.toString();
    error.responseStatus.message = message;
    return error;
};
exports.toCamelCase = function (key) {
    return !key ? key : key.charAt(0).toLowerCase() + key.substring(1);
};
exports.sanitize = function (status) {
    if (status.responseStatus)
        return status;
    if (status.errors)
        return status;
    var to = {};
    for (var k_1 in status) {
        if (status.hasOwnProperty(k_1)) {
            if (status[k_1] instanceof Object)
                to[exports.toCamelCase(k_1)] = exports.sanitize(status[k_1]);
            else
                to[exports.toCamelCase(k_1)] = status[k_1];
        }
    }
    to.errors = [];
    if (status.Errors != null) {
        for (var i = 0, len = status.Errors.length; i < len; i++) {
            var o = status.Errors[i];
            var err = {};
            for (var k in o)
                err[exports.toCamelCase(k)] = o[k];
            to.errors.push(err);
        }
    }
    return to;
};
exports.nameOf = function (o) {
    if (!o)
        return "null";
    if (typeof o.getTypeName == "function")
        return o.getTypeName();
    var ctor = o && o.constructor;
    if (ctor == null)
        throw o + " doesn't have constructor";
    if (ctor.name)
        return ctor.name;
    var str = ctor.toString();
    return str.substring(9, str.indexOf("(")); //"function ".length == 9
};
/* utils */
function log(o, prefix) {
    if (prefix === void 0) { prefix = "LOG"; }
    console.log(prefix, o);
    return o;
}
exports.css = function (selector, name, value) {
    var els = typeof selector == "string"
        ? document.querySelectorAll(selector)
        : selector;
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (el != null && el.style != null) {
            el.style[name] = value;
        }
    }
};
exports.splitOnFirst = function (s, c) {
    if (!s)
        return [s];
    var pos = s.indexOf(c);
    return pos >= 0 ? [s.substring(0, pos), s.substring(pos + 1)] : [s];
};
exports.splitOnLast = function (s, c) {
    if (!s)
        return [s];
    var pos = s.lastIndexOf(c);
    return pos >= 0
        ? [s.substring(0, pos), s.substring(pos + 1)]
        : [s];
};
var splitCase = function (t) {
    return typeof t != 'string' ? t : t.replace(/([A-Z]|[0-9]+)/g, ' $1').replace(/_/g, ' ').trim();
};
exports.humanize = function (s) { return (!s || s.indexOf(' ') >= 0 ? s : splitCase(s)); };
exports.queryString = function (url) {
    if (!url || url.indexOf('?') === -1)
        return {};
    var pairs = exports.splitOnFirst(url, '?')[1].split('&');
    var map = {};
    for (var i = 0; i < pairs.length; ++i) {
        var p = pairs[i].split('=');
        map[p[0]] = p.length > 1
            ? decodeURIComponent(p[1].replace(/\+/g, ' '))
            : null;
    }
    return map;
};
exports.combinePaths = function () {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
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
};
exports.createPath = function (route, args) {
    var argKeys = {};
    for (var k in args) {
        argKeys[k.toLowerCase()] = k;
    }
    var parts = route.split("/");
    var url = "";
    for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        if (p == null)
            p = "";
        if (p[0] === "{" && p[p.length - 1] === "}") {
            var key = argKeys[p.substring(1, p.length - 1).toLowerCase()];
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
};
exports.createUrl = function (route, args) {
    var url = exports.createPath(route, args);
    return exports.appendQueryString(url, args);
};
exports.appendQueryString = function (url, args) {
    for (var k in args) {
        if (args.hasOwnProperty(k)) {
            url += url.indexOf("?") >= 0 ? "&" : "?";
            url += k + "=" + qsValue(args[k]);
        }
    }
    return url;
};
var qsValue = function (arg) {
    if (arg == null)
        return "";
    if (typeof Uint8Array != "undefined" && arg instanceof Uint8Array)
        return exports.bytesToBase64(arg);
    return encodeURIComponent(arg) || "";
};
//from: https://github.com/madmurphy/stringview.js/blob/master/stringview.js
exports.bytesToBase64 = function (aBytes) {
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
};
var uint6ToB64 = function (nUint6) {
    return nUint6 < 26 ?
        nUint6 + 65
        : nUint6 < 52 ?
            nUint6 + 71
            : nUint6 < 62 ?
                nUint6 - 4
                : nUint6 === 62 ? 43
                    : nUint6 === 63 ? 47 : 65;
};
var _btoa = typeof btoa == 'function'
    ? btoa
    : function (str) { return new Buffer(str).toString('base64'); };
//from: http://stackoverflow.com/a/30106551/85785
JsonServiceClient.toBase64 = function (str) {
    return _btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(new Number('0x' + p1).valueOf());
    }));
};
exports.stripQuotes = function (s) {
    return s && s[0] == '"' && s[s.length] == '"' ? s.slice(1, -1) : s;
};
exports.tryDecode = function (s) {
    try {
        return decodeURIComponent(s);
    }
    catch (e) {
        return s;
    }
};
exports.parseCookie = function (setCookie) {
    if (!setCookie)
        return null;
    var to = null;
    var pairs = setCookie.split(/; */);
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var parts = exports.splitOnFirst(pair, '=');
        var name = parts[0].trim();
        var value = parts.length > 1 ? exports.tryDecode(exports.stripQuotes(parts[1].trim())) : null;
        if (i == 0) {
            to = { name: name, value: value, path: "/" };
        }
        else {
            var lower = name.toLowerCase();
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
};
exports.normalizeKey = function (key) { return key.toLowerCase().replace(/_/g, ''); };
var isArray = function (o) { return Object.prototype.toString.call(o) === '[object Array]'; };
exports.normalize = function (dto, deep) {
    if (isArray(dto)) {
        if (!deep)
            return dto;
        var to = [];
        for (var i = 0; i < dto.length; i++) {
            to[i] = exports.normalize(dto[i], deep);
        }
        return to;
    }
    if (typeof dto != "object")
        return dto;
    var o = {};
    for (var k in dto) {
        o[exports.normalizeKey(k)] = deep ? exports.normalize(dto[k], deep) : dto[k];
    }
    return o;
};
exports.getField = function (o, name) {
    return o == null || name == null ? null :
        o[name] ||
            o[Object.keys(o).filter(function (k) { return exports.normalizeKey(k) === exports.normalizeKey(name); })[0] || ''];
};
exports.parseResponseStatus = function (json, defaultMsg) {
    if (defaultMsg === void 0) { defaultMsg = null; }
    try {
        var err = JSON.parse(json);
        return exports.sanitize(err.ResponseStatus || err.responseStatus);
    }
    catch (e) {
        return {
            message: defaultMsg || e.message || e,
            __error: { error: e, json: json }
        };
    }
};
function toFormData(o) {
    if (typeof window == "undefined")
        return;
    var formData = new FormData();
    for (var name in o) {
        formData.append(name, o[name]);
    }
    return formData;
}
exports.toFormData = toFormData;
function toObject(keys) {
    var _this = this;
    var to = {};
    if (!keys)
        return to;
    if (typeof keys != "object")
        throw new Error("keys must be an Array of object keys");
    var arr = Array.prototype.slice.call(keys);
    arr.forEach(function (key) {
        if (_this[key]) {
            to[key] = _this[key];
        }
    });
    return to;
}
exports.toObject = toObject;
function errorResponseSummary() {
    var responseStatus = this.responseStatus || this.ResponseStatus;
    if (responseStatus == null)
        return undefined;
    var status = responseStatus.ErrorCode ? exports.sanitize(responseStatus) : responseStatus;
    return !status.errors || status.errors.length == 0
        ? status.message || status.errorCode
        : undefined;
}
exports.errorResponseSummary = errorResponseSummary;
function errorResponseExcept(fieldNames) {
    var responseStatus = this.responseStatus || this.ResponseStatus;
    if (responseStatus == null)
        return undefined;
    var status = responseStatus.ErrorCode ? exports.sanitize(responseStatus) : responseStatus;
    if (typeof fieldNames == 'string')
        fieldNames = arguments.length == 1 ? [fieldNames] : Array.prototype.slice.call(arguments);
    if (fieldNames && !(status.errors == null || status.errors.length == 0)) {
        var lowerFieldsNames = fieldNames.map(function (x) { return (x || '').toLowerCase(); });
        for (var _i = 0, _a = status.errors; _i < _a.length; _i++) {
            var field = _a[_i];
            if (lowerFieldsNames.indexOf((field.fieldName || '').toLowerCase()) !== -1) {
                return undefined;
            }
        }
        for (var _b = 0, _c = status.errors; _b < _c.length; _b++) {
            var field = _c[_b];
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
    var responseStatus = this.responseStatus || this.ResponseStatus;
    if (responseStatus == null)
        return undefined;
    var status = responseStatus.ErrorCode ? exports.sanitize(responseStatus) : responseStatus;
    if (status.errors == null || status.errors.length == 0)
        return undefined;
    var field = status.errors.find(function (x) { return (x.fieldName || '').toLowerCase() == fieldName.toLowerCase(); });
    return field
        ? field.message || field.errorCode
        : undefined;
}
exports.errorResponse = errorResponse;
exports.toDate = function (s) { return new Date(parseFloat(/Date\(([^)]+)\)/.exec(s)[1])); };
exports.toDateFmt = function (s) { return exports.dateFmt(exports.toDate(s)); };
exports.padInt = function (n) { return n < 10 ? '0' + n : n; };
exports.dateFmt = function (d) {
    if (d === void 0) { d = new Date(); }
    return d.getFullYear() + '/' + exports.padInt(d.getMonth() + 1) + '/' + exports.padInt(d.getDate());
};
exports.dateFmtHM = function (d) {
    if (d === void 0) { d = new Date(); }
    return d.getFullYear() + '/' + exports.padInt(d.getMonth() + 1) + '/' + exports.padInt(d.getDate()) + ' ' + exports.padInt(d.getHours()) + ":" + exports.padInt(d.getMinutes());
};
exports.timeFmt12 = function (d) {
    if (d === void 0) { d = new Date(); }
    return exports.padInt((d.getHours() + 24) % 12 || 12) + ":" + exports.padInt(d.getMinutes()) + ":" + exports.padInt(d.getSeconds()) + " " + (d.getHours() > 12 ? "PM" : "AM");
};
