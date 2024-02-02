var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
    else if (typeof window != "undefined") factory(window.require||function(){}, window["@servicestack/client"]={});
})(function (require, exports) {
    "use strict";
    var __syncRequire = typeof module === "object" && typeof module.exports === "object";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Inspect = exports.createBus = exports.EventBus = exports.alignAuto = exports.alignRight = exports.alignCenter = exports.alignLeft = exports.uniqueKeys = exports.JSV = exports.StringBuffer = exports.toBase64String = exports.toByteArray = exports.fromByteArray = exports.toGuid = exports.fromGuid = exports.toTimeSpan = exports.fromTimeSpan = exports.toDateTime = exports.fromDateTime = exports.isNullOrEmpty = exports.indexOfAny = exports.htmlAttrs = exports.enc = exports.uniq = exports.flatMap = exports.toTimeSpanFmt = exports.toXsdDuration = exports.fromXsdDuration = exports.classNames = exports.NavOptions = exports.UserAttributes = exports.LinkButtonDefaults = exports.NavButtonGroupDefaults = exports.NavbarDefaults = exports.NavLinkDefaults = exports.NavDefaults = exports.btnClasses = exports.btnSizeClass = exports.BootstrapSizes = exports.btnColorClass = exports.BootstrapColors = exports.activeClass = exports.activeClassNav = exports.apiValueFmt = exports.apiValue = exports.mapGet = exports.resolve = exports.each = exports.apply = exports.omitEmpty = exports.omit = exports.pick = exports.safeVarName = exports.trimEnd = exports.populateForm = exports.triggerEvent = exports.sanitizeFormData = exports.serializeToFormData = exports.serializeToUrlEncoded = exports.serializeToObject = exports.serializeForm = exports.ajaxSubmit = exports.formSubmit = exports.toVarNames = exports.bootstrapForm = exports.bindHandlers = exports.bootstrap = exports.delaySet = exports.addScript = exports.on = exports.$$ = exports.$1 = exports.isElement = exports.createElement = exports.padStart = exports.msToTime = exports.toTime = exports.toLocalISOString = exports.timeFmt12 = exports.dateFmtHM = exports.dateFmt = exports.padInt = exports.toDateFmt = exports.toDate = exports.isDate = exports.errorResponse = exports.errorResponseExcept = exports.errorResponseSummary = exports.toObject = exports.toFormData = exports.parseResponseStatus = exports.getField = exports.normalize = exports.normalizeKey = exports.parseCookie = exports.tryDecode = exports.stripQuotes = exports.bytesToBase64 = exports.setQueryString = exports.appendQueryString = exports.createUrl = exports.createPath = exports.combinePaths = exports.queryString = exports.humanify = exports.splitTitleCase = exports.isDigit = exports.isLower = exports.isUpper = exports.ucFirst = exports.humanize = exports.onlyProps = exports.chop = exports.lastRightPart = exports.lastLeftPart = exports.rightPart = exports.leftPart = exports.splitOnLast = exports.splitOnFirst = exports.css = exports.nameOf = exports.sanitize = exports.camelCaseAny = exports.map = exports.toKebabCase = exports.toPascalCase = exports.toCamelCase = exports.createError = exports.isFormData = exports.createFieldError = exports.createErrorStatus = exports.ApiResult = exports.getResponseStatus = exports.getMethod = exports.JsonApiClient = exports.JsonServiceClient = exports.GetAccessTokenResponse = exports.HttpMethods = exports.ServerEventUser = exports.GetEventSubscribers = exports.UpdateEventSubscriberResponse = exports.UpdateEventSubscriber = exports.ServerEventReceiver = exports.getAllMembers = exports.ServerEventsClient = exports.ReadyState = exports.SingletonInstanceResolver = exports.NewInstanceResolver = exports.MetadataType = exports.MetadataPropertyType = exports.MetadataAttribute = exports.MetadataDataMember = exports.MetadataDataContract = exports.MetadataTypeName = exports.MetadataTypes = exports.MetadataOperationType = exports.MetadataRoute = exports.MetadataTypesConfig = exports.GetNavItemsResponse = exports.GetNavItems = exports.NavItem = exports.EmptyResponse = exports.ErrorResponse = exports.ResponseError = exports.ResponseStatus = void 0;
    var ResponseStatus = /** @class */ (function () {
        function ResponseStatus(init) {
            Object.assign(this, init);
        }
        return ResponseStatus;
    }());
    exports.ResponseStatus = ResponseStatus;
    var ResponseError = /** @class */ (function () {
        function ResponseError(init) {
            Object.assign(this, init);
        }
        return ResponseError;
    }());
    exports.ResponseError = ResponseError;
    var ErrorResponse = /** @class */ (function () {
        function ErrorResponse(init) {
            Object.assign(this, init);
        }
        return ErrorResponse;
    }());
    exports.ErrorResponse = ErrorResponse;
    var EmptyResponse = /** @class */ (function () {
        function EmptyResponse(init) {
            Object.assign(this, init);
        }
        return EmptyResponse;
    }());
    exports.EmptyResponse = EmptyResponse;
    var NavItem = /** @class */ (function () {
        function NavItem(init) {
            Object.assign(this, init);
        }
        return NavItem;
    }());
    exports.NavItem = NavItem;
    var GetNavItems = /** @class */ (function () {
        function GetNavItems(init) {
            Object.assign(this, init);
        }
        GetNavItems.prototype.createResponse = function () { return new GetNavItemsResponse(); };
        GetNavItems.prototype.getTypeName = function () { return 'GetNavItems'; };
        GetNavItems.prototype.getMethod = function () { return 'GET'; };
        return GetNavItems;
    }());
    exports.GetNavItems = GetNavItems;
    var GetNavItemsResponse = /** @class */ (function () {
        function GetNavItemsResponse(init) {
            Object.assign(this, init);
        }
        return GetNavItemsResponse;
    }());
    exports.GetNavItemsResponse = GetNavItemsResponse;
    var MetadataTypesConfig = /** @class */ (function () {
        function MetadataTypesConfig(init) {
            Object.assign(this, init);
        }
        return MetadataTypesConfig;
    }());
    exports.MetadataTypesConfig = MetadataTypesConfig;
    var MetadataRoute = /** @class */ (function () {
        function MetadataRoute(init) {
            Object.assign(this, init);
        }
        return MetadataRoute;
    }());
    exports.MetadataRoute = MetadataRoute;
    var MetadataOperationType = /** @class */ (function () {
        function MetadataOperationType(init) {
            Object.assign(this, init);
        }
        return MetadataOperationType;
    }());
    exports.MetadataOperationType = MetadataOperationType;
    var MetadataTypes = /** @class */ (function () {
        function MetadataTypes(init) {
            Object.assign(this, init);
        }
        return MetadataTypes;
    }());
    exports.MetadataTypes = MetadataTypes;
    var MetadataTypeName = /** @class */ (function () {
        function MetadataTypeName(init) {
            Object.assign(this, init);
        }
        return MetadataTypeName;
    }());
    exports.MetadataTypeName = MetadataTypeName;
    var MetadataDataContract = /** @class */ (function () {
        function MetadataDataContract(init) {
            Object.assign(this, init);
        }
        return MetadataDataContract;
    }());
    exports.MetadataDataContract = MetadataDataContract;
    var MetadataDataMember = /** @class */ (function () {
        function MetadataDataMember(init) {
            Object.assign(this, init);
        }
        return MetadataDataMember;
    }());
    exports.MetadataDataMember = MetadataDataMember;
    var MetadataAttribute = /** @class */ (function () {
        function MetadataAttribute(init) {
            Object.assign(this, init);
        }
        return MetadataAttribute;
    }());
    exports.MetadataAttribute = MetadataAttribute;
    var MetadataPropertyType = /** @class */ (function () {
        function MetadataPropertyType(init) {
            Object.assign(this, init);
        }
        return MetadataPropertyType;
    }());
    exports.MetadataPropertyType = MetadataPropertyType;
    var MetadataType = /** @class */ (function () {
        function MetadataType(init) {
            Object.assign(this, init);
        }
        return MetadataType;
    }());
    exports.MetadataType = MetadataType;
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
    var ServerEventsClient = /** @class */ (function () {
        function ServerEventsClient(baseUrl, channels, options, eventSource) {
            if (options === void 0) { options = {}; }
            if (eventSource === void 0) { eventSource = null; }
            var _this = this;
            this.channels = channels;
            this.options = options;
            this.eventSource = eventSource;
            this.onMessage = function (e) {
                if (typeof document == "undefined") { //node
                    //latest node-fetch + eventsource doesn't split SSE messages properly
                    var requireSplitPos = e.data ? e.data.indexOf('\n') : -1;
                    if (requireSplitPos >= 0) {
                        var data = e.data;
                        var lastEventId = e.lastEventId;
                        var e1 = Object.assign({}, { lastEventId: lastEventId, data: data.substring(0, requireSplitPos) }), e2 = Object.assign({}, { lastEventId: lastEventId, data: data.substring(requireSplitPos + 1) });
                        _this._onMessage(e1);
                        _this._onMessage(e2);
                        return;
                    }
                }
                _this._onMessage(e);
            };
            this._onMessage = function (e) {
                if (_this.stopped)
                    return;
                var opt = _this.options;
                if (typeof document == "undefined") {
                    var document = {
                        querySelectorAll: function (sel) { return []; }
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
                var json = parts[1];
                var body = null;
                try {
                    body = json ? JSON.parse(json) : null;
                }
                catch (ignore) { }
                parts = splitOnFirst(selector, ".");
                if (parts.length <= 1)
                    throw "invalid selector format: " + selector;
                var op = parts[0], target = parts[1].replace(new RegExp("%20", "g"), " ");
                var tokens = splitOnFirst(target, "$");
                var cmd = tokens[0], cssSelector = tokens[1];
                var els = cssSelector && $$(cssSelector);
                var el = els && els[0];
                var eventId = parseInt(e.lastEventId);
                var data = e.data;
                var type = eventMessageType(cmd) || "ServerEventMessage";
                var request = { eventId: eventId, data: data, type: type, channel: channel, selector: selector, json: json, body: body, op: op, target: tokens[0], cssSelector: cssSelector, meta: {} };
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
                            opt.heartbeat = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                                var stopFn, reqHeartbeat, res, error, error_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (this.eventSource.readyState === EventSource.CLOSED) {
                                                clearInterval(opt.heartbeat);
                                                stopFn = opt.handlers["onStop"];
                                                if (stopFn != null)
                                                    stopFn.apply(this.eventSource);
                                                this.reconnectServerEvents({ error: new Error("EventSource is CLOSED") });
                                                return [2 /*return*/];
                                            }
                                            reqHeartbeat = new Request(opt.heartbeatUrl, {
                                                method: "POST", mode: "cors", headers: headers, credentials: this.serviceClient.credentials
                                            });
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 6, , 7]);
                                            return [4 /*yield*/, fetch(reqHeartbeat)];
                                        case 2:
                                            res = _a.sent();
                                            if (!!res.ok) return [3 /*break*/, 3];
                                            error = new Error("".concat(res.status, " - ").concat(res.statusText));
                                            this.reconnectServerEvents({ error: error });
                                            return [3 /*break*/, 5];
                                        case 3: return [4 /*yield*/, res.text()];
                                        case 4:
                                            _a.sent();
                                            _a.label = 5;
                                        case 5: return [3 /*break*/, 7];
                                        case 6:
                                            error_1 = _a.sent();
                                            this.reconnectServerEvents({ error: error_1 });
                                            return [3 /*break*/, 7];
                                        case 7: return [2 /*return*/];
                                    }
                                });
                            }); }, (_this.connectionInfo && _this.connectionInfo.heartbeatIntervalMs) || opt.heartbeatIntervalMs || 10000);
                        }
                        if (opt.unRegisterUrl) {
                            if (typeof window != "undefined") {
                                window.onunload = function () {
                                    if (navigator.sendBeacon) { // Chrome https://developers.google.com/web/updates/2019/12/chrome-80-deps-rems
                                        _this.stopped = true;
                                        if (_this.eventSource)
                                            _this.eventSource.close();
                                        navigator.sendBeacon(opt.unRegisterUrl);
                                    }
                                    else {
                                        _this.stop();
                                    }
                                };
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
                            if (!isCmdMsg) { //global receiver
                                var r_1 = opt.receivers && opt.receivers["cmd"];
                                _this.invokeReceiver(r_1, cmd, el, request, "cmd");
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
                    css(els || $$("body"), cmd, body);
                }
                //Named Receiver
                var r = opt.receivers && opt.receivers[op];
                _this.invokeReceiver(r, cmd, el, request, op);
                if (!eventMessageType(cmd)) {
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
            this.eventStreamUri = combinePaths(baseUrl, "event-stream") + "?";
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
            es.addEventListener('error', function (e) { return (opt.onerror || hold.onerror || _this.onError)(e); });
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
                throw new Error("".concat(res.status, " - ").concat(res.statusText)); })
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
                    var metaProp = Object.getOwnPropertyDescriptor(r, cmd);
                    if (metaProp != null) {
                        if (metaProp.set) {
                            metaProp.set(request.body);
                        }
                        else if (metaProp.writable) {
                            r[cmd] = request.body;
                        }
                        return;
                    }
                    var cmdLower_1 = cmd.toLowerCase();
                    getAllMembers(r).forEach(function (k) {
                        if (k.toLowerCase() == cmdLower_1) {
                            if (typeof r[k] == "function") {
                                r[k].call(el || r, request.body, request);
                            }
                            else {
                                r[k] = request.body;
                            }
                            return;
                        }
                    });
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
    function getAllMembers(o) {
        var props = [];
        do {
            var l = Object.getOwnPropertyNames(o)
                .concat(Object.getOwnPropertySymbols(o).map(function (s) { return s.toString(); }))
                .sort()
                .filter(function (p, i, arr) {
                return p !== 'constructor' && //not the constructor
                    (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                    props.indexOf(p) === -1;
            } //not overridden in a child
            );
            props = props.concat(l);
        } while ((o = Object.getPrototypeOf(o)) && //walk-up the prototype chain
            Object.getPrototypeOf(o) //not the the Object prototype methods (hasOwnProperty, etc...)
        );
        return props;
    }
    exports.getAllMembers = getAllMembers;
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
        function GetAccessToken(init) {
            Object.assign(this, init);
        }
        GetAccessToken.prototype.createResponse = function () { return new GetAccessTokenResponse(); };
        GetAccessToken.prototype.getTypeName = function () { return 'GetAccessToken'; };
        GetAccessToken.prototype.getMethod = function () { return 'POST'; };
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
            this.mode = "cors";
            this.credentials = "include";
            this.headers = new Headers();
            this.headers.set("Content-Type", "application/json");
            this.manageCookies = typeof document == "undefined"; //because node-fetch doesn't
            this.cookies = {};
            this.enableAutoRefreshToken = true;
            this.basePath = 'api';
        }
        JsonServiceClient.prototype.setCredentials = function (userName, password) {
            this.userName = userName;
            this.password = password;
        };
        JsonServiceClient.prototype.useBasePath = function (path) {
            this.basePath = path;
            return this;
        };
        Object.defineProperty(JsonServiceClient.prototype, "basePath", {
            set: function (path) {
                if (!path) {
                    this.replyBaseUrl = combinePaths(this.baseUrl, "json", "reply") + "/";
                    this.oneWayBaseUrl = combinePaths(this.baseUrl, "json", "oneway") + "/";
                }
                else {
                    this.replyBaseUrl = combinePaths(this.baseUrl, path) + "/";
                    this.oneWayBaseUrl = combinePaths(this.baseUrl, path) + "/";
                }
            },
            enumerable: false,
            configurable: true
        });
        JsonServiceClient.prototype.apply = function (f) {
            f(this);
            return this;
        };
        JsonServiceClient.prototype.get = function (request, args) {
            return typeof request != "string"
                ? this.fetch(HttpMethods.Get, request, args)
                : this.fetch(HttpMethods.Get, null, args, this.toAbsoluteUrl(request));
        };
        JsonServiceClient.prototype.delete = function (request, args) {
            return typeof request != "string"
                ? this.fetch(HttpMethods.Delete, request, args)
                : this.fetch(HttpMethods.Delete, null, args, this.toAbsoluteUrl(request));
        };
        JsonServiceClient.prototype.post = function (request, args) {
            return this.fetch(HttpMethods.Post, request, args);
        };
        JsonServiceClient.prototype.postToUrl = function (url, request, args) {
            return this.fetch(HttpMethods.Post, request, args, this.toAbsoluteUrl(url));
        };
        JsonServiceClient.prototype.postBody = function (request, body, args) {
            return this.fetchBody(HttpMethods.Post, request, body, args);
        };
        JsonServiceClient.prototype.put = function (request, args) {
            return this.fetch(HttpMethods.Put, request, args);
        };
        JsonServiceClient.prototype.putToUrl = function (url, request, args) {
            return this.fetch(HttpMethods.Put, request, args, this.toAbsoluteUrl(url));
        };
        JsonServiceClient.prototype.putBody = function (request, body, args) {
            return this.fetchBody(HttpMethods.Put, request, body, args);
        };
        JsonServiceClient.prototype.patch = function (request, args) {
            return this.fetch(HttpMethods.Patch, request, args);
        };
        JsonServiceClient.prototype.patchToUrl = function (url, request, args) {
            return this.fetch(HttpMethods.Patch, request, args, this.toAbsoluteUrl(url));
        };
        JsonServiceClient.prototype.patchBody = function (request, body, args) {
            return this.fetchBody(HttpMethods.Patch, request, body, args);
        };
        JsonServiceClient.prototype.publish = function (request, args) {
            return this.sendOneWay(request, args);
        };
        JsonServiceClient.prototype.sendOneWay = function (request, args) {
            var url = combinePaths(this.oneWayBaseUrl, nameOf(request));
            return this.fetch(HttpMethods.Post, request, null, url);
        };
        JsonServiceClient.prototype.sendAll = function (requests) {
            if (requests.length == 0)
                return Promise.resolve([]);
            var url = combinePaths(this.replyBaseUrl, nameOf(requests[0]) + "[]");
            return this.fetch(HttpMethods.Post, requests, null, url);
        };
        JsonServiceClient.prototype.sendAllOneWay = function (requests) {
            if (requests.length == 0)
                return Promise.resolve(void 0);
            var url = combinePaths(this.oneWayBaseUrl, nameOf(requests[0]) + "[]");
            return this.fetch(HttpMethods.Post, requests, null, url)
                .then(function (r) { return void 0; });
        };
        JsonServiceClient.prototype.createUrlFromDto = function (method, request) {
            var url = combinePaths(this.replyBaseUrl, nameOf(request));
            var hasRequestBody = HttpMethods.hasRequestBody(method);
            if (!hasRequestBody)
                url = appendQueryString(url, request);
            return url;
        };
        JsonServiceClient.prototype.toAbsoluteUrl = function (relativeOrAbsoluteUrl) {
            return relativeOrAbsoluteUrl.startsWith("http://") ||
                relativeOrAbsoluteUrl.startsWith("https://")
                ? relativeOrAbsoluteUrl
                : combinePaths(this.baseUrl, relativeOrAbsoluteUrl);
        };
        JsonServiceClient.prototype.deleteCookie = function (name) {
            if (this.manageCookies) {
                delete this.cookies[name];
            }
            else {
                if (document) {
                    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
                }
            }
        };
        JsonServiceClient.prototype.createRequest = function (_a) {
            var _this = this;
            var method = _a.method, request = _a.request, url = _a.url, args = _a.args, body = _a.body;
            if (!url)
                url = this.createUrlFromDto(method, request);
            if (args)
                url = appendQueryString(url, args);
            if (this.bearerToken != null) {
                this.headers.set("Authorization", "Bearer " + this.bearerToken);
            }
            else if (this.userName != null) {
                this.headers.set('Authorization', 'Basic ' + JsonServiceClient.toBase64("".concat(this.userName, ":").concat(this.password)));
            }
            if (this.manageCookies) {
                var cookies = Object.keys(this.cookies)
                    .map(function (x) {
                    var c = _this.cookies[x];
                    return c.expires && c.expires < new Date()
                        ? null
                        : "".concat(c.name, "=").concat(encodeURIComponent(c.value));
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
        };
        JsonServiceClient.prototype.json = function (res) {
            if (this.parseJson)
                return this.parseJson(res);
            return res.text().then(function (txt) {
                return txt.length > 0 ? JSON.parse(txt) : null;
            });
        };
        JsonServiceClient.prototype.applyResponseFilters = function (res) {
            if (this.responseFilter != null)
                this.responseFilter(res);
            if (JsonServiceClient.globalResponseFilter != null)
                JsonServiceClient.globalResponseFilter(res);
        };
        JsonServiceClient.prototype.createResponse = function (res, request) {
            var _this = this;
            if (!res.ok) {
                this.applyResponseFilters(res);
                throw res;
            }
            if (this.manageCookies) {
                var setCookies_1 = [];
                res.headers.forEach(function (v, k) {
                    switch (k.toLowerCase()) {
                        case "set-cookie":
                            var cookies = v.split(',');
                            cookies.forEach(function (c) { return setCookies_1.push(c); });
                            break;
                    }
                });
                setCookies_1.forEach(function (x) {
                    var cookie = parseCookie(x);
                    if (cookie)
                        _this.cookies[cookie.name] = cookie;
                });
            }
            res.headers.forEach(function (v, k) {
                switch (k.toLowerCase()) {
                    case "x-cookies":
                        if (v.split(',').indexOf('ss-reftok') >= 0)
                            _this.useTokenCookie = true;
                        break;
                }
            });
            this.applyResponseFilters(res);
            var x = request && typeof request != "string" && typeof request.createResponse == 'function'
                ? request.createResponse()
                : null;
            if (typeof x === 'string')
                return res.text().then(function (o) { return o; });
            var contentType = res.headers.get("content-type");
            var isJson = contentType && contentType.indexOf("application/json") !== -1;
            if (isJson) {
                return this.json(res).then(function (o) { return o; });
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
                return res.text().then(function (_) { return x; });
            }
            return this.json(res).then(function (o) { return o; }); //fallback
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
            return this.json(res).then(function (o) {
                var errorDto = sanitize(o);
                if (!errorDto.responseStatus)
                    throw createErrorResponse(res.status, res.statusText, type);
                if (type != null)
                    errorDto.type = type;
                throw errorDto;
            }).catch(function (error) {
                // No responseStatus body, set from `res` Body object
                if (error instanceof Error
                    || (typeof window != "undefined" && window.DOMException && error instanceof window.DOMException /*MS Edge*/)) {
                    throw _this.raiseError(res, createErrorResponse(res.status, res.statusText, type));
                }
                throw _this.raiseError(res, error);
            });
        };
        JsonServiceClient.prototype.fetch = function (method, request, args, url) {
            return this.sendRequest({ method: method, request: request, args: args, url: url });
        };
        JsonServiceClient.prototype.fetchBody = function (method, request, body, args) {
            var url = combinePaths(this.replyBaseUrl, nameOf(request));
            return this.sendRequest({
                method: method,
                request: body,
                body: typeof body == "string"
                    ? body
                    : isFormData(body)
                        ? body
                        : JSON.stringify(body),
                url: appendQueryString(url, request),
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
                    if (_this.enableAutoRefreshToken && (_this.refreshToken || _this.useTokenCookie || _this.cookies['ss-reftok'] != null)) {
                        var jwtReq_1 = new GetAccessToken({ refreshToken: _this.refreshToken, useTokenCookie: !!_this.useTokenCookie });
                        var url = _this.refreshTokenUri || _this.createUrlFromDto(HttpMethods.Post, jwtReq_1);
                        if (_this.useTokenCookie) {
                            _this.bearerToken = null;
                            _this.headers.delete("Authorization");
                        }
                        var jwtRequest = _this.createRequest({ method: HttpMethods.Post, request: jwtReq_1, args: null, url: url });
                        return fetch(url, jwtRequest)
                            .then(function (r) { return _this.createResponse(r, jwtReq_1).then(function (jwtResponse) {
                            _this.bearerToken = (jwtResponse === null || jwtResponse === void 0 ? void 0 : jwtResponse.accessToken) || null;
                            return resendRequest();
                        }); })
                            .catch(function (res) {
                            if (_this.onAuthenticationRequired) {
                                return _this.onAuthenticationRequired()
                                    .then(resendRequest)
                                    .catch(function (resHandler) {
                                    return _this.handleError(holdRes, resHandler, "RefreshTokenException");
                                });
                            }
                            else {
                                return _this.handleError(holdRes, res, "RefreshTokenException");
                            }
                        });
                    }
                    else {
                        if (_this.onAuthenticationRequired) {
                            return _this.onAuthenticationRequired().then(resendRequest);
                        }
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
        // Generic send that uses APIs preferred HTTP Method (requires v5.13+ DTOs)
        JsonServiceClient.prototype.send = function (request, args, url) {
            return this.sendRequest({ method: getMethod(request), request: request, args: args, url: url });
        };
        // Generic send IReturnVoid that uses APIs preferred HTTP Method (requires v5.13+ DTOs)
        JsonServiceClient.prototype.sendVoid = function (request, args, url) {
            return this.sendRequest({ method: getMethod(request), request: request, args: args, url: url });
        };
        JsonServiceClient.prototype.api = function (request, args, method) {
            return __awaiter(this, void 0, void 0, function () {
                var result, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.fetch(getMethod(request, method), request, args)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, new ApiResult({ response: result })];
                        case 2:
                            e_1 = _a.sent();
                            return [2 /*return*/, new ApiResult({ error: getResponseStatus(e_1) })];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        JsonServiceClient.prototype.apiVoid = function (request, args, method) {
            return __awaiter(this, void 0, void 0, function () {
                var result, e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.fetch(getMethod(request, method), request, args)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, new ApiResult({ response: result !== null && result !== void 0 ? result : new EmptyResponse() })];
                        case 2:
                            e_2 = _a.sent();
                            return [2 /*return*/, new ApiResult({ error: getResponseStatus(e_2) })];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        JsonServiceClient.prototype.apiForm = function (request, body, args, method) {
            return __awaiter(this, void 0, void 0, function () {
                var result, e_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.fetchBody(getMethod(request, method), request, body, args)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, new ApiResult({ response: result })];
                        case 2:
                            e_3 = _a.sent();
                            return [2 /*return*/, new ApiResult({ error: getResponseStatus(e_3) })];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        JsonServiceClient.prototype.apiFormVoid = function (request, body, args, method) {
            return __awaiter(this, void 0, void 0, function () {
                var result, e_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.fetchBody(getMethod(request, method), request, body, args)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, new ApiResult({ response: result !== null && result !== void 0 ? result : new EmptyResponse() })];
                        case 2:
                            e_4 = _a.sent();
                            return [2 /*return*/, new ApiResult({ error: getResponseStatus(e_4) })];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return JsonServiceClient;
    }());
    exports.JsonServiceClient = JsonServiceClient;
    var JsonApiClient = /** @class */ (function () {
        function JsonApiClient() {
        }
        JsonApiClient.create = function (baseUrl, f) {
            if (baseUrl === void 0) { baseUrl = "/"; }
            var client = new JsonServiceClient(baseUrl).apply(function (c) {
                c.basePath = "/api";
                c.headers = new Headers(); //avoid pre-flight CORS requests
                c.enableAutoRefreshToken = false; // Use JWT Cookies by default
                if (f) {
                    f(c);
                }
            });
            return client;
        };
        return JsonApiClient;
    }());
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
    var ApiResult = /** @class */ (function () {
        function ApiResult(init) {
            Object.assign(this, init);
        }
        Object.defineProperty(ApiResult.prototype, "completed", {
            get: function () { return this.response != null || this.error != null; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ApiResult.prototype, "failed", {
            get: function () { var _a, _b; return ((_a = this.error) === null || _a === void 0 ? void 0 : _a.errorCode) != null || ((_b = this.error) === null || _b === void 0 ? void 0 : _b.message) != null; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ApiResult.prototype, "succeeded", {
            get: function () { return !this.failed && this.response != null; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ApiResult.prototype, "errorMessage", {
            get: function () { var _a; return (_a = this.error) === null || _a === void 0 ? void 0 : _a.message; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ApiResult.prototype, "errorCode", {
            get: function () { var _a; return (_a = this.error) === null || _a === void 0 ? void 0 : _a.errorCode; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ApiResult.prototype, "errors", {
            get: function () { var _a, _b; return (_b = (_a = this.error) === null || _a === void 0 ? void 0 : _a.errors) !== null && _b !== void 0 ? _b : []; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ApiResult.prototype, "errorSummary", {
            get: function () { return this.error != null && this.errors.length == 0 ? this.errorMessage : null; },
            enumerable: false,
            configurable: true
        });
        ApiResult.prototype.fieldError = function (fieldName) {
            var _a;
            var matchField = fieldName.toLowerCase();
            return (_a = this.errors) === null || _a === void 0 ? void 0 : _a.find(function (x) { return x.fieldName.toLowerCase() == matchField; });
        };
        ApiResult.prototype.fieldErrorMessage = function (fieldName) { var _a; return (_a = this.fieldError(fieldName)) === null || _a === void 0 ? void 0 : _a.message; };
        ApiResult.prototype.hasFieldError = function (fieldName) { return this.fieldError(fieldName) != null; };
        ApiResult.prototype.showSummary = function (exceptFields) {
            var _this = this;
            if (exceptFields === void 0) { exceptFields = []; }
            if (!this.failed)
                return false;
            return exceptFields.every(function (x) { return !_this.hasFieldError(x); });
        };
        ApiResult.prototype.summaryMessage = function (exceptFields) {
            if (exceptFields === void 0) { exceptFields = []; }
            if (this.showSummary(exceptFields)) {
                // Return first field error that's not visible
                var fieldSet_1 = exceptFields.map(function (x) { return x.toLowerCase(); });
                var fieldError = fieldSet_1.find(function (x) { return fieldSet_1.indexOf(x.toLowerCase()) == -1; });
                return fieldError !== null && fieldError !== void 0 ? fieldError : this.errorMessage;
            }
        };
        ApiResult.prototype.addFieldError = function (fieldName, message, errorCode) {
            if (errorCode === void 0) { errorCode = 'Exception'; }
            if (!this.error)
                this.error = new ResponseStatus();
            var fieldError = this.fieldError(fieldName);
            if (fieldError != null) {
                fieldError.errorCode = errorCode;
                fieldError.message = message;
            }
            else {
                this.error.errors.push(new ResponseError({ fieldName: fieldName, errorCode: errorCode, message: message }));
            }
        };
        return ApiResult;
    }());
    exports.ApiResult = ApiResult;
    function createErrorStatus(message, errorCode) {
        if (errorCode === void 0) { errorCode = 'Exception'; }
        return new ResponseStatus({ errorCode: errorCode, message: message });
    }
    exports.createErrorStatus = createErrorStatus;
    function createFieldError(fieldName, message, errorCode) {
        if (errorCode === void 0) { errorCode = 'Exception'; }
        return new ResponseStatus({ errors: [new ResponseError({ fieldName: fieldName, errorCode: errorCode, message: message })] });
    }
    exports.createFieldError = createFieldError;
    function isFormData(body) { return typeof window != "undefined" && body instanceof FormData; }
    exports.isFormData = isFormData;
    function createErrorResponse(errorCode, message, type) {
        if (type === void 0) { type = null; }
        var error = apply(new ErrorResponse(), function (e) {
            if (type != null)
                e.type = type;
            e.responseStatus = apply(new ResponseStatus(), function (status) {
                status.errorCode = errorCode && errorCode.toString();
                status.message = message;
            });
        });
        return error;
    }
    function createError(errorCode, message, fieldName) {
        return new ErrorResponse({
            responseStatus: new ResponseStatus({
                errorCode: errorCode,
                message: message,
                errors: fieldName ? [new ResponseError({ errorCode: errorCode, message: message, fieldName: fieldName })] : undefined
            })
        });
    }
    exports.createError = createError;
    function toCamelCase(s) { return !s ? s : s.charAt(0).toLowerCase() + s.substring(1); }
    exports.toCamelCase = toCamelCase;
    function toPascalCase(s) { return !s ? s : s.charAt(0).toUpperCase() + s.substring(1); }
    exports.toPascalCase = toPascalCase;
    function toKebabCase(s) { return (s || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(); }
    exports.toKebabCase = toKebabCase;
    function map(o, f) { return o == null ? null : f(o); }
    exports.map = map;
    function camelCaseAny(o) {
        if (!o || !(o instanceof Object) || Array.isArray(o))
            return o;
        var to = {};
        for (var k in o) {
            if (o.hasOwnProperty(k)) {
                var key = toCamelCase(k);
                var val = o[k];
                if (Array.isArray(val))
                    to[key] = val.map(function (x) { return camelCaseAny(x); });
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
        var to = camelCaseAny(status);
        return to;
    }
    exports.sanitize = sanitize;
    function nameOf(o) {
        if (!o)
            return "null";
        if (typeof o.getTypeName == "function")
            return o.getTypeName();
        var ctor = o && o.constructor;
        if (ctor == null)
            throw "".concat(o, " doesn't have constructor");
        if (ctor.name)
            return ctor.name;
        var str = ctor.toString();
        return str.substring(9, str.indexOf("(")); //"function ".length == 9
    }
    exports.nameOf = nameOf;
    /* utils */
    function log(o, prefix) {
        if (prefix === void 0) { prefix = "LOG"; }
        console.log(prefix, o);
        return o;
    }
    function css(selector, name, value) {
        var els = typeof selector == "string"
            ? document.querySelectorAll(selector)
            : selector;
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            if (el != null && el.style != null) {
                el.style[name] = value;
            }
        }
    }
    exports.css = css;
    function splitOnFirst(s, c) {
        if (!s)
            return [s];
        var pos = s.indexOf(c);
        return pos >= 0 ? [s.substring(0, pos), s.substring(pos + 1)] : [s];
    }
    exports.splitOnFirst = splitOnFirst;
    function splitOnLast(s, c) {
        if (!s)
            return [s];
        var pos = s.lastIndexOf(c);
        return pos >= 0
            ? [s.substring(0, pos), s.substring(pos + 1)]
            : [s];
    }
    exports.splitOnLast = splitOnLast;
    function leftPart(s, needle) {
        if (s == null)
            return null;
        var pos = s.indexOf(needle);
        return pos == -1
            ? s
            : s.substring(0, pos);
    }
    exports.leftPart = leftPart;
    function rightPart(s, needle) {
        if (s == null)
            return null;
        var pos = s.indexOf(needle);
        return pos == -1
            ? s
            : s.substring(pos + needle.length);
    }
    exports.rightPart = rightPart;
    function lastLeftPart(s, needle) {
        if (s == null)
            return null;
        var pos = s.lastIndexOf(needle);
        return pos == -1
            ? s
            : s.substring(0, pos);
    }
    exports.lastLeftPart = lastLeftPart;
    function lastRightPart(s, needle) {
        if (s == null)
            return null;
        var pos = s.lastIndexOf(needle);
        return pos == -1
            ? s
            : s.substring(pos + needle.length);
    }
    exports.lastRightPart = lastRightPart;
    function chop(str, len) {
        if (len === void 0) { len = 1; }
        len = Math.abs(len);
        return str ? len < str.length ? str.substring(0, str.length - len) : '' : str;
    }
    exports.chop = chop;
    function onlyProps(obj, keys) {
        var to = {};
        keys.forEach(function (key) { return to[key] = obj[key]; });
        return to;
    }
    exports.onlyProps = onlyProps;
    function splitCase(t) {
        return typeof t != 'string' ? t : t.replace(/([A-Z]|[0-9]+)/g, ' $1').replace(/_/g, ' ').trim();
    }
    function humanize(s) { return (!s || s.indexOf(' ') >= 0 ? s : splitCase(toPascalCase(s))); }
    exports.humanize = humanize;
    var ucFirst = function (s) { return s.charAt(0).toUpperCase() + s.substring(1); };
    exports.ucFirst = ucFirst;
    var isUpper = function (c) { return c >= 'A' && c <= 'Z'; };
    exports.isUpper = isUpper;
    var isLower = function (c) { return c >= 'a' && c <= 'z'; };
    exports.isLower = isLower;
    var isDigit = function (c) { return c >= '0' && c <= '9'; };
    exports.isDigit = isDigit;
    var upperOrDigit = function (c) { return (0, exports.isUpper)(c) || (0, exports.isDigit)(c); };
    function splitTitleCase(s) {
        var to = [];
        if (typeof s != 'string')
            return to;
        var lastSplit = 0;
        for (var i = 0; i < s.length; i++) {
            var c = s[i];
            var prev = i > 0 ? s[i - 1] : null;
            var next = i + 1 < s.length ? s[i + 1] : null;
            if (upperOrDigit(c) && (!upperOrDigit(prev) || !upperOrDigit(next))) {
                to.push(s.substring(lastSplit, i));
                lastSplit = i;
            }
        }
        to.push(s.substring(lastSplit, s.length));
        return to.filter(function (x) { return !!x; });
    }
    exports.splitTitleCase = splitTitleCase;
    function humanify(s) { return !s || s.indexOf(' ') >= 0 ? s : (0, exports.ucFirst)(splitTitleCase(s).join(' ')); }
    exports.humanify = humanify;
    function queryString(url) {
        if (!url || url.indexOf('?') === -1)
            return {};
        var pairs = rightPart(url, '?').split('&');
        var map = {};
        for (var i = 0; i < pairs.length; ++i) {
            var p = pairs[i].split('=');
            map[p[0]] = p.length > 1
                ? decodeURIComponent(p[1].replace(/\+/g, ' '))
                : null;
        }
        return map;
    }
    exports.queryString = queryString;
    function combinePaths() {
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
    }
    exports.combinePaths = combinePaths;
    function createPath(route, args) {
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
    }
    exports.createPath = createPath;
    function createUrl(route, args) {
        var url = createPath(route, args);
        return appendQueryString(url, args);
    }
    exports.createUrl = createUrl;
    function appendQueryString(url, args) {
        for (var k in args) {
            if (args.hasOwnProperty(k)) {
                var val = args[k];
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
        var baseUrl = leftPart(url, '?');
        var qs = Object.assign(queryString(url), args);
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
        var eqLen = (3 - (aBytes.length % 3)) % 3, sB64Enc = "";
        for (var nMod3 = void 0, nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
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
    JsonServiceClient.toBase64 = function (str) {
        return _btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode(new Number('0x' + p1).valueOf());
        }));
    };
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
        var to = null;
        var pairs = setCookie.split(/; */);
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            var parts = splitOnFirst(pair, '=');
            var name_1 = parts[0].trim();
            var value = parts.length > 1 ? tryDecode(stripQuotes(parts[1].trim())) : null;
            if (i == 0) {
                to = { name: name_1, value: value, path: "/" };
            }
            else {
                var lower = name_1.toLowerCase();
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
                    to[name_1] = value;
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
            var to = [];
            for (var i = 0; i < dto.length; i++) {
                to[i] = normalize(dto[i], deep);
            }
            return to;
        }
        if (typeof dto != "object")
            return dto;
        var o = {};
        for (var k in dto) {
            o[normalizeKey(k)] = deep ? normalize(dto[k], deep) : dto[k];
        }
        return o;
    }
    exports.normalize = normalize;
    function getField(o, name) {
        return o == null || name == null ? null :
            o[name] ||
                o[Object.keys(o).filter(function (k) { return normalizeKey(k) === normalizeKey(name); })[0] || ''];
    }
    exports.getField = getField;
    function parseResponseStatus(json, defaultMsg) {
        if (defaultMsg === void 0) { defaultMsg = null; }
        try {
            var err = JSON.parse(json);
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
        var formData = new FormData();
        for (var name_2 in o) {
            formData.append(name_2, o[name_2]);
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
        var status = responseStatus.ErrorCode ? sanitize(responseStatus) : responseStatus;
        return !status.errors || status.errors.length == 0
            ? status.message || status.errorCode
            : undefined;
    }
    exports.errorResponseSummary = errorResponseSummary;
    function errorResponseExcept(fieldNames) {
        var responseStatus = this.responseStatus || this.ResponseStatus;
        if (responseStatus == null)
            return undefined;
        var status = responseStatus.ErrorCode ? sanitize(responseStatus) : responseStatus;
        var names = toVarNames(fieldNames);
        if (names && !(status.errors == null || status.errors.length == 0)) {
            var lowerFieldsNames = names.map(function (x) { return (x || '').toLowerCase(); });
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
        var status = responseStatus.ErrorCode ? sanitize(responseStatus) : responseStatus;
        if (status.errors == null || status.errors.length == 0)
            return undefined;
        var field = status.errors.find(function (x) { return (x.fieldName || '').toLowerCase() == fieldName.toLowerCase(); });
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
    function dateFmt(d) {
        if (d === void 0) { d = new Date(); }
        return d.getFullYear() + '/' + padInt(d.getMonth() + 1) + '/' + padInt(d.getDate());
    }
    exports.dateFmt = dateFmt;
    function dateFmtHM(d) {
        if (d === void 0) { d = new Date(); }
        return d.getFullYear() + '/' + padInt(d.getMonth() + 1) + '/' + padInt(d.getDate()) + ' ' + padInt(d.getHours()) + ":" + padInt(d.getMinutes());
    }
    exports.dateFmtHM = dateFmtHM;
    function timeFmt12(d) {
        if (d === void 0) { d = new Date(); }
        return padInt((d.getHours() + 24) % 12 || 12) + ":" + padInt(d.getMinutes()) + ":" + padInt(d.getSeconds()) + " " + (d.getHours() > 12 ? "PM" : "AM");
    }
    exports.timeFmt12 = timeFmt12;
    function toLocalISOString(d) {
        if (d === void 0) { d = new Date(); }
        return "".concat(d.getFullYear(), "-").concat(padInt(d.getMonth() + 1), "-").concat(padInt(d.getDate()), "T").concat(padInt(d.getHours()), ":").concat(padInt(d.getMinutes()), ":").concat(padInt(d.getSeconds()));
    }
    exports.toLocalISOString = toLocalISOString;
    function toTime(s) {
        if (typeof s == 'string' && s.indexOf(':') >= 0)
            return s;
        var ms = s instanceof Date
            ? s.getTime()
            : typeof s == 'string'
                ? fromXsdDuration(s) * 1000
                : s;
        return msToTime(ms);
    }
    exports.toTime = toTime;
    function msToTime(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
        var t = padInt(hrs) + ':' + padInt(mins) + ':' + padInt(secs);
        return ms > 0
            ? t + '.' + padStart("".concat(ms), 3, '0').substring(0, 3)
            : t;
    }
    exports.msToTime = msToTime;
    function padStart(s, len, pad) {
        len = Math.floor(len) || 0;
        if (len < s.length)
            return s;
        pad = pad ? String(pad) : ' ';
        var p = '';
        var l = len - s.length;
        var i = 0;
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
        var keyAliases = { className: 'class', htmlFor: 'for' };
        var el = document.createElement(tagName);
        if (options === null || options === void 0 ? void 0 : options.attrs) {
            for (var key in options.attrs) {
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
        var errorMsg = attr(this, 'data-invalid');
        if (errorMsg) {
            //[data-invalid] can either be on input control or .form-check container containing group of radio/checkbox
            var isCheck = this.type === "checkbox" || this.type === "radio" || hasClass(this, 'form-check');
            var elFormCheck = isCheck ? parent(this, 'form-check') : null;
            if (!isCheck)
                addClass(this, 'is-invalid');
            else
                addClass(elFormCheck || this.parentElement, 'is-invalid form-control');
            var elNext = this.nextElementSibling;
            var elLast = elNext && (attr(elNext, 'for') === this.id || elNext.tagName === "SMALL")
                ? (isCheck ? elFormCheck || elNext.parentElement : elNext)
                : this;
            var elError = elLast != null && elLast.nextElementSibling && hasClass(elLast.nextElementSibling, 'invalid-feedback')
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
        var _a;
        return !el ? null
            : el.classList
                ? (_a = el.classList).add.apply(_a, cls.split(' ')) : !hasClass(el, cls)
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
            return sel.flatMap(function (x) { return $$(x, el); });
        return [sel];
    }
    exports.$$ = $$;
    function on(sel, handlers) {
        $$(sel).forEach(function (e) {
            Object.keys(handlers).forEach(function (evt) {
                var fn = handlers[evt];
                if (typeof evt === 'string' && typeof fn === 'function') {
                    e.addEventListener(evt, handlers[evt] = fn.bind(e));
                }
            });
        });
        return handlers;
    }
    exports.on = on;
    function addScript(src) {
        return new Promise(function (resolve, reject) {
            document.body.appendChild(createElement('script', {
                attrs: { src: src },
                events: {
                    load: resolve,
                    error: reject,
                }
            }));
        });
    }
    exports.addScript = addScript;
    function delaySet(f, opt) {
        var duration = opt && opt.duration || 300;
        var timeout = setTimeout(function () { return f(true); }, duration);
        return function () { clearTimeout(timeout); f(false); };
    }
    exports.delaySet = delaySet;
    // init generic behavior to bootstrap elements
    function bootstrap(el) {
        var els = (el || document).querySelectorAll('[data-invalid]');
        for (var i = 0; i < els.length; i++) {
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
                var el = this;
                do {
                    if (el.matches(s))
                        return el;
                    el = el.parentElement || el.parentNode;
                } while (el !== null && el.nodeType === 1);
                return null;
            };
        }
    }
    function handleEvent(handlers, el, type) {
        if (el === void 0) { el = document; }
        el.addEventListener(type, function (evt) {
            var evtData = "data-".concat(type);
            var el = evt.target;
            var x = attr(el, evtData);
            if (!x) {
                var elParent = el.closest("[".concat(evtData, "]"));
                if (elParent) {
                    x = attr(elParent, evtData);
                    el = elParent;
                }
            }
            if (!x)
                return;
            var pos = x.indexOf(':');
            if (pos >= 0) {
                var cmd = x.substring(0, pos);
                var data = x.substring(pos + 1);
                var fn = handlers[cmd];
                if (fn) {
                    fn.apply(el, data.split(','));
                }
            }
            else {
                var fn = handlers[x];
                if (fn) {
                    fn.apply(el, [].slice.call(arguments));
                }
            }
        });
    }
    function bindHandlers(handlers, el, opt) {
        if (el === void 0) { el = document; }
        if (opt === void 0) { opt = null; }
        if (opt && opt.events) {
            opt.events.forEach(function (evt) { return handleEvent(handlers, el, evt); });
        }
        else {
            ['click', 'dblclick', 'change', 'focus', 'blur', 'focusin', 'focusout', 'select', 'keydown', 'keypress', 'keyup', 'hover', 'toggle', 'input']
                .forEach(function (evt) {
                if (el.querySelector("[data-".concat(evt, "]"))) {
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
        var validation = {
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
        var bs4 = opt && opt.type === "bootstrap-v4";
        var v = __assign(__assign({}, validation), opt);
        if (opt.messages) {
            v.overrideMessages = true;
        }
        var filter = v.errorFilter.bind(v);
        var errors = status.errors;
        if (errors && errors.length) {
            var fieldMap_1 = {}, fieldLabelMap_1 = {};
            $$("input,textarea,select,button").forEach(function (x) {
                var el = x;
                var prev = el.previousElementSibling;
                var next = el.nextElementSibling;
                var isCheck = el.type === "radio" || el.type === "checkbox";
                var fieldId = (!isCheck ? el.id : null) || attr(el, "name");
                if (!fieldId)
                    return;
                var key = fieldId.toLowerCase();
                fieldMap_1[key] = el;
                if (!bs4) {
                    if (hasClass(prev, "help-inline") || hasClass(prev, "help-block")) {
                        fieldLabelMap_1[key] = prev;
                    }
                    else if (hasClass(next, "help-inline") || hasClass(next, "help-block")) {
                        fieldLabelMap_1[key] = next;
                    }
                }
            });
            $$(".help-inline[data-for],.help-block[data-for]").forEach(function (el) {
                var key = attr(el, "data-for").toLowerCase();
                fieldLabelMap_1[key] = el;
            });
            for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
                var error = errors_1[_i];
                var key = (error.fieldName || "").toLowerCase();
                var field = fieldMap_1[key];
                if (field) {
                    if (!bs4) {
                        addClass(field, "error");
                        addClass(field.parentElement, "has-error");
                    }
                    else {
                        var type = attr(field, 'type'), isCheck = type === "radio" || type === "checkbox";
                        if (!isCheck)
                            addClass(field, "is-invalid");
                        sattr(field, "data-invalid", filter(error.message, error.errorCode, "field"));
                    }
                }
                var lblErr = fieldLabelMap_1[key];
                if (!lblErr)
                    continue;
                addClass(lblErr, "error");
                lblErr.innerHTML = filter(error.message, error.errorCode, "field");
                lblErr.style.display = 'block';
            }
            $$("[data-validation-summary]").forEach(function (el) {
                var fields = attr(el, 'data-validation-summary').split(',');
                var summaryMsg = errorResponseExcept.call(status, fields);
                if (summaryMsg)
                    el.innerHTML = bsAlert(summaryMsg);
            });
        }
        else {
            var htmlSummary_1 = filter(status.message || splitCase(status.errorCode), status.errorCode, "summary");
            if (!bs4) {
                $$(".error-summary").forEach(function (el) {
                    el.innerHTML = htmlSummary_1(el).style.display = 'block';
                });
            }
            else {
                $$('[data-validation-summary]').forEach(function (el) {
                    return el.innerHTML = htmlSummary_1[0] === "<" ? htmlSummary_1 : bsAlert(htmlSummary_1);
                });
            }
        }
        return f;
    }
    function clearErrors(f) {
        remClass(f, 'has-errors');
        $$('.error-summary').forEach(function (el) {
            el.innerHTML = "";
            el.style.display = "none";
        });
        $$('[data-validation-summary]').forEach(function (el) {
            el.innerHTML = "";
        });
        $$('.error').forEach(function (el) { return remClass(el, 'error'); });
        $$('.form-check.is-invalid [data-invalid]').forEach(function (el) {
            rattr(el, 'data-invalid');
        });
        $$('.form-check.is-invalid').forEach(function (el) { return remClass(el, 'form-control'); });
        $$('.is-invalid').forEach(function (el) {
            remClass(el, 'is-invalid');
            rattr(el, 'data-invalid');
        });
        $$('.is-valid').forEach(function (el) { return remClass(el, 'is-valid'); });
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
                : names.split(',').map(function (s) { return s.trim(); });
    }
    exports.toVarNames = toVarNames;
    function formSubmit(options) {
        if (options === void 0) { options = {}; }
        var f = this;
        var contentType = attr(f, 'enctype') || Types.UrlEncoded;
        if (contentType == Types.MultiPart && window.FormData === undefined)
            throw new Error("FormData Type is needed to send '".concat(Types.MultiPart, "' Content Types"));
        var body;
        try {
            body = serializeForm(f, contentType);
        }
        catch (e) {
            throw new Error("".concat(e.message || e));
        }
        var headers = new Headers();
        headers.set("Accept", Types.Json);
        headers.set("Content-Type", contentType);
        var req = {
            method: attr(f, 'method') || 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: headers,
            body: body,
        };
        if (options.requestFilter)
            options.requestFilter(req);
        return fetch(new Request(options.url || attr(f, 'action'), req))
            .catch(function (e) { throw new Error("Network is unreachable (".concat(e.message || e, ")")); })
            .then(function (r) {
            if (options.responseFilter)
                options.responseFilter(r);
            if (!r.ok) {
                return r.json()
                    .catch(function (e) { throw new Error("The request failed with " + (r.statusText || r.status)); })
                    .then(function (o) { throw Object.assign(new ErrorResponse(), sanitize(o)); });
            }
            handleHeaderBehaviors(f, r);
            return fromResponse(r);
        });
    }
    exports.formSubmit = formSubmit;
    function handleHeaderBehaviors(f, r) {
        var loc = r.headers.get('X-Location');
        if (loc) {
            location.href = loc;
        }
        var evt = r.headers.get('X-Trigger');
        if (evt) {
            var pos = evt.indexOf(':');
            var cmd = pos >= 0 ? evt.substring(0, pos) : evt;
            var data = pos >= 0 ? evt.substring(pos + 1) : null;
            triggerEvent(f, cmd, data ? [data] : []);
        }
    }
    function ajaxSubmit(f, options) {
        if (options === void 0) { options = {}; }
        var type = options.type;
        var bs4 = type === "bootstrap-v4";
        clearErrors(f);
        try {
            if (options.validate && options.validate.call(f) === false)
                return false;
        }
        catch (e) {
            return false;
        }
        addClass(f, 'loading');
        var disableSel = options.onSubmitDisable == null
            ? "[type=submit]"
            : options.onSubmitDisable;
        var disable = disableSel != null && disableSel != "";
        if (disable) {
            $$(disableSel).forEach(function (el) {
                sattr(el, 'disabled', 'disabled');
            });
        }
        function handleError(errMsg, err) {
            if (err === void 0) { err = null; }
            if (err) {
                applyErrors(f, err.ResponseStatus || err.responseStatus, __assign({}, options));
            }
            else if (errMsg) {
                addClass(f, "has-errors");
                var errorSummary = $$(".error-summary")[0];
                if (errorSummary) {
                    errorSummary.innerHTML = errMsg;
                }
                if (bs4) {
                    var elSummary = $$('[data-validation-summary]')[0];
                    if (elSummary) {
                        elSummary.innerHTML = bsAlert(errMsg);
                    }
                }
            }
            if (options.error) {
                options.error.call(f, err);
            }
            if (bs4) {
                $$('[data-invalid]').forEach(function (el) { return showInvalidInputs.call(el); });
            }
        }
        var submitFn = options.submit || formSubmit;
        return submitFn.call(f, options)
            .then(function (obj) {
            if (options.success)
                options.success.call(f, obj);
            return false;
        })
            .catch(function (e) {
            if (e.responseStatus)
                handleError(null, e);
            else
                handleError("".concat(e.message || e), null);
        })
            .finally(function () {
            remClass(f, 'loading');
            if (disable) {
                $$(disableSel).forEach(function (el) {
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
        var contentType = r.headers.get("content-type");
        var isJson = contentType && contentType.indexOf(Types.Json) !== -1;
        if (isJson)
            return r.json();
        var len = r.headers.get("content-length");
        if (len === "0" || (len == null && !isJson))
            return null;
        return r.json();
    }
    function serializeForm(form, contentType) {
        if (contentType === void 0) { contentType = null; }
        return contentType === Types.MultiPart
            ? new FormData(form)
            : contentType == Types.Json
                ? JSON.stringify(serializeToObject(form))
                : serializeToUrlEncoded(form);
    }
    exports.serializeForm = serializeForm;
    function formEntries(form, state, fn) {
        var field, f = form;
        var len = f.elements.length;
        for (var i = 0; i < len; i++) {
            field = f.elements[i];
            if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
                if (field.type == 'select-multiple') {
                    for (var j = f.elements[i].options.length - 1; j >= 0; j--) {
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
        return formEntries(form, {}, function (to, name, value) { return to[name] = value; });
    }
    exports.serializeToObject = serializeToObject;
    function serializeToUrlEncoded(form) {
        var to = formEntries(form, [], function (s, name, value) {
            return typeof value == 'string'
                ? s.push(encodeURIComponent(name) + "=" + encodeURIComponent(value))
                : null;
        });
        return to.join('&').replace(/%20/g, '+');
    }
    exports.serializeToUrlEncoded = serializeToUrlEncoded;
    function serializeToFormData(form) {
        return formEntries(form, new FormData(), function (to, name, value) { return to.append(name, value); });
    }
    exports.serializeToFormData = serializeToFormData;
    function sanitizeFormData(formData) {
        // @ts-ignore
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var _a = formData_1[_i], key = _a[0], value = _a[1];
            // Remove 0 length files
            if (typeof value == 'object' && value.size === 0) {
                formData.delete(key);
            }
        }
        return formData;
    }
    exports.sanitizeFormData = sanitizeFormData;
    function triggerEvent(el, name, data) {
        if (data === void 0) { data = null; }
        if (document.createEvent) {
            var evt = document.createEvent(name == 'click' || name.startsWith('mouse') ? 'MouseEvents' : 'HTMLEvents');
            evt.initEvent(name, true, true);
            evt.data = data;
            el.dispatchEvent(evt);
        }
        else {
            var evt = document.createEventObject();
            el.fireEvent("on" + name, evt);
        }
    }
    exports.triggerEvent = triggerEvent;
    function populateForm(form, model) {
        if (!model)
            return;
        var toggleCase = function (s) { return !s ? s :
            s[0] === s[0].toUpperCase() ? toCamelCase(s) : s[0] === s[0].toLowerCase() ? toPascalCase(s) : s; };
        for (var key in model) {
            var val = model[key];
            if (typeof val == 'undefined' || val === null)
                val = '';
            var el = form.elements.namedItem(key) || form.elements.namedItem(toggleCase(key));
            var input = el;
            if (!el)
                continue;
            var type = input.type || el[0].type;
            switch (type) {
                case 'radio':
                case 'checkbox':
                    var len = el.length;
                    for (var i = 0; i < len; i++) {
                        el[i].checked = (val.indexOf(el[i].value) > -1);
                    }
                    break;
                case 'select-multiple':
                    var values = isArray(val) ? val : [val];
                    var select = el;
                    for (var i = 0; i < select.options.length; i++) {
                        select.options[i].selected = (values.indexOf(select.options[i].value) > -1);
                    }
                    break;
                case 'select':
                case 'select-one':
                    input.value = val.toString() || val;
                    break;
                case 'date':
                    var d = toDate(val);
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
        var end = s.length;
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
        var to = {};
        for (var k in o) {
            if (o.hasOwnProperty(k) && keys.indexOf(k) >= 0) {
                to[k] = o[k];
            }
        }
        return to;
    }
    exports.pick = pick;
    function omit(o, keys) {
        var to = {};
        for (var k in o) {
            if (o.hasOwnProperty(k) && keys.indexOf(k) < 0) {
                to[k] = o[k];
            }
        }
        return to;
    }
    exports.omit = omit;
    function omitEmpty(o) {
        var to = {};
        for (var k in o) {
            var v = o[k];
            if (v != null && v !== '') {
                to[k] = v;
            }
        }
        return to;
    }
    exports.omitEmpty = omitEmpty;
    function apply(x, fn) {
        fn(x);
        return x;
    }
    exports.apply = apply;
    function each(xs, f, o) {
        return xs.reduce(function (acc, x) { f(acc, x); return acc; }, o || {});
    }
    exports.each = each;
    function resolve(o, f) {
        var ret = typeof o == 'function' ? o() : o;
        return typeof f == 'function' ? f(ret) : ret;
    }
    exports.resolve = resolve;
    function mapGet(o, name) {
        if (!o || !name)
            return null;
        var ret = o[name];
        if (ret)
            return ret;
        if (typeof o == 'object') {
            var nameLower_1 = name.toLowerCase();
            var match = Object.keys(o).find(function (k) { return k.toLowerCase() === nameLower_1; });
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
        var ret = apiValue(o);
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
        for (var _i = 0, _a = bootstrapColors(); _i < _a.length; _i++) {
            var color = _a[_i];
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
        for (var _i = 0, _a = bootstrapSizes(); _i < _a.length; _i++) {
            var size = _a[_i];
            if (props[size]) {
                return 'btn-' + size;
            }
        }
        return null;
    }
    exports.btnSizeClass = btnSizeClass;
    function btnClasses(props) {
        var to = [];
        var color = btnColorClass(props);
        if (color) {
            to.push(color);
        }
        var size = btnSizeClass(props);
        if (size) {
            to.push(size);
        }
        if (props.block) {
            to.push('btn-block');
        }
        return to;
    }
    exports.btnClasses = btnClasses;
    var NavDefaults = /** @class */ (function () {
        function NavDefaults() {
        }
        NavDefaults.create = function () { return new NavOptions(); };
        NavDefaults.forNav = function (options) { return options || NavDefaults.create(); };
        NavDefaults.overrideDefaults = function (targets, source) {
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
        };
        NavDefaults.showNav = function (navItem, attributes) {
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
        };
        NavDefaults.navClass = 'nav';
        NavDefaults.navItemClass = 'nav-item';
        NavDefaults.navLinkClass = 'nav-link';
        NavDefaults.childNavItemClass = 'nav-item dropdown';
        NavDefaults.childNavLinkClass = 'nav-link dropdown-toggle';
        NavDefaults.childNavMenuClass = 'dropdown-menu';
        NavDefaults.childNavMenuItemClass = 'dropdown-item';
        return NavDefaults;
    }());
    exports.NavDefaults = NavDefaults;
    var NavLinkDefaults = /** @class */ (function () {
        function NavLinkDefaults() {
        }
        NavLinkDefaults.forNavLink = function (options) { return options || NavDefaults.create(); };
        return NavLinkDefaults;
    }());
    exports.NavLinkDefaults = NavLinkDefaults;
    var NavbarDefaults = /** @class */ (function () {
        function NavbarDefaults() {
        }
        NavbarDefaults.create = function () { return new NavOptions({ navClass: NavbarDefaults.navClass }); };
        NavbarDefaults.forNavbar = function (options) { return NavDefaults.overrideDefaults(options, NavbarDefaults.create()); };
        NavbarDefaults.navClass = 'navbar-nav';
        return NavbarDefaults;
    }());
    exports.NavbarDefaults = NavbarDefaults;
    var NavButtonGroupDefaults = /** @class */ (function () {
        function NavButtonGroupDefaults() {
        }
        NavButtonGroupDefaults.create = function () { return new NavOptions({ navClass: NavButtonGroupDefaults.navClass, navItemClass: NavButtonGroupDefaults.navItemClass }); };
        NavButtonGroupDefaults.forNavButtonGroup = function (options) { return NavDefaults.overrideDefaults(options, NavButtonGroupDefaults.create()); };
        NavButtonGroupDefaults.navClass = 'btn-group';
        NavButtonGroupDefaults.navItemClass = 'btn btn-primary';
        return NavButtonGroupDefaults;
    }());
    exports.NavButtonGroupDefaults = NavButtonGroupDefaults;
    var LinkButtonDefaults = /** @class */ (function () {
        function LinkButtonDefaults() {
        }
        LinkButtonDefaults.create = function () { return new NavOptions({ navItemClass: LinkButtonDefaults.navItemClass }); };
        LinkButtonDefaults.forLinkButton = function (options) { return NavDefaults.overrideDefaults(options || null, LinkButtonDefaults.create()); };
        LinkButtonDefaults.navItemClass = 'btn';
        return LinkButtonDefaults;
    }());
    exports.LinkButtonDefaults = LinkButtonDefaults;
    var UserAttributes = /** @class */ (function () {
        function UserAttributes() {
        }
        UserAttributes.fromSession = function (session) {
            var to = [];
            if (session != null) {
                to.push('auth');
                if (session.roles) {
                    to.push.apply(to, session.roles.map(function (x) { return 'role:' + x; }));
                }
                if (session.permissions) {
                    to.push.apply(to, session.permissions.map(function (x) { return 'perm:' + x; }));
                }
            }
            return to;
        };
        return UserAttributes;
    }());
    exports.UserAttributes = UserAttributes;
    var NavOptions = /** @class */ (function () {
        function NavOptions(init) {
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
        NavOptions.fromSession = function (session, to) {
            to = to || new NavOptions();
            to.attributes = UserAttributes.fromSession(session);
            return to;
        };
        return NavOptions;
    }());
    exports.NavOptions = NavOptions;
    function classNames() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var classes = [];
        for (var i = 0; i < args.length; i++) {
            var arg = args[i];
            if (!arg)
                continue;
            var argType = typeof arg;
            if (argType === 'string' || argType === 'number') {
                classes.push(arg);
            }
            else if (Array.isArray(arg) && arg.length) {
                var inner = classNames.apply(null, arg);
                if (inner) {
                    classes.push(inner);
                }
            }
            else if (argType === 'object') {
                for (var _a = 0, _b = Object.keys(arg); _a < _b.length; _a++) {
                    var key = _b[_a];
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
        var days = 0;
        var hours = 0;
        var minutes = 0;
        var seconds = 0;
        var ms = 0.0;
        var t = splitOnFirst(xsd.substring(1), 'T');
        var hasTime = t.length == 2;
        var d = splitOnFirst(t[0], 'D');
        if (d.length == 2) {
            days = parseInt(d[0], 10) || 0;
        }
        if (hasTime) {
            var h = splitOnFirst(t[1], 'H');
            if (h.length == 2) {
                hours = parseInt(h[0], 10) || 0;
            }
            var m = splitOnFirst(h[h.length - 1], 'M');
            if (m.length == 2) {
                minutes = parseInt(m[0], 10) || 0;
            }
            var s = splitOnFirst(m[m.length - 1], 'S');
            if (s.length == 2) {
                ms = parseFloat(s[0]);
            }
            seconds = ms | 0;
            ms -= seconds;
        }
        var totalSecs = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;
        return totalSecs + ms;
    }
    exports.fromXsdDuration = fromXsdDuration;
    function timeFmt(time, asXsd) {
        var totalSeconds = time;
        var wholeSeconds = time | 0;
        var seconds = wholeSeconds;
        var sec = (seconds >= 60 ? seconds % 60 : seconds);
        seconds = (seconds / 60);
        var min = seconds >= 60 ? seconds % 60 : seconds;
        seconds = (seconds / 60);
        var hours = seconds >= 24 ? seconds % 24 : seconds;
        var days = seconds / 24;
        var remainingSecs = sec + (totalSeconds - wholeSeconds);
        var sb = asXsd ? 'P' : '';
        if (asXsd) {
            if ((days | 0) > 0) {
                sb += "".concat(days | 0, "D");
            }
            if (days == 0 || (hours + min + sec) + remainingSecs > 0) {
                sb += "T";
                if ((hours | 0) > 0) {
                    sb += "".concat(hours | 0, "H");
                }
                if ((min | 0) > 0) {
                    sb += "".concat(min | 0, "M");
                }
                if (remainingSecs > 0) {
                    var secFmt = remainingSecs.toFixed(7);
                    secFmt = trimEnd(trimEnd(secFmt, '0'), '.');
                    sb += "".concat(secFmt, "S");
                }
                else if (sb.length == 2) {
                    sb += '0S';
                }
            }
        }
        else {
            if ((days | 0) > 0) {
                sb += "".concat(days | 0, ":");
            }
            sb += "".concat(padInt(hours | 0), ":").concat(padInt(min | 0), ":");
            if (remainingSecs > 0) {
                var secFmt = remainingSecs.toFixed(7);
                secFmt = trimEnd(trimEnd(secFmt, '0'), '.');
                sb += remainingSecs >= 10 ? "".concat(secFmt) : "0".concat(secFmt);
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
    function flatMap(f, xs) { return xs.reduce(function (r, x) { return r.concat(f(x)); }, []); }
    exports.flatMap = flatMap;
    function uniq(xs) { return Array.from(new Set(xs)).sort(function (x, y) { return x > y ? 1 : -1; }); }
    exports.uniq = uniq;
    function enc(o) {
        return o == null ? null : typeof o == 'string'
            ? o.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&#34;')
            : "".concat(o);
    }
    exports.enc = enc;
    function htmlAttrs(o) {
        var sb = [];
        Object.keys(o).forEach(function (k) {
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
        for (var i = 0, len = needles.length; i < len; i++) {
            var pos = str.indexOf(needles[i]);
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
        return "/Date(".concat(date.getTime(), ")/");
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
        var binaryStr = _atob(base64);
        var len = binaryStr.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binaryStr.charCodeAt(i);
        }
        return bytes;
    }
    exports.fromByteArray = fromByteArray;
    // From JS Uint8Array to .NET byte[] (Base64 String)
    function toByteArray(bytes) {
        var str = String.fromCharCode.apply(null, bytes);
        return _btoa(str);
    }
    exports.toByteArray = toByteArray;
    // From JS String to Base64 String
    function toBase64String(source) {
        return JsonServiceClient.toBase64(source);
    }
    exports.toBase64String = toBase64String;
    var StringBuffer = /** @class */ (function () {
        function StringBuffer(opt_a1) {
            var var_args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                var_args[_i - 1] = arguments[_i];
            }
            this.buffer_ = '';
            if (opt_a1 != null)
                this.append.apply(this, arguments);
        }
        StringBuffer.prototype.set = function (s) {
            this.buffer_ = '' + s;
        };
        StringBuffer.prototype.append = function (a1, opt_a2) {
            var var_args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                var_args[_i - 2] = arguments[_i];
            }
            this.buffer_ += String(a1);
            if (opt_a2 != null) {
                for (var i = 1; i < arguments.length; i++) {
                    this.buffer_ += arguments[i];
                }
            }
            return this;
        };
        StringBuffer.prototype.clear = function () { this.buffer_ = ''; };
        StringBuffer.prototype.getLength = function () { return this.buffer_.length; };
        StringBuffer.prototype.toString = function () { return this.buffer_; };
        return StringBuffer;
    }());
    exports.StringBuffer = StringBuffer;
    var JSV = /** @class */ (function () {
        function JSV() {
        }
        JSV.encodeString = function (str) {
            if (str == null)
                return null;
            if (str === '')
                return '""';
            if (str.indexOf('"'))
                str = str.replace(/"/g, '""');
            return indexOfAny(str, JSV.ESCAPE_CHARS) >= 0
                ? '"' + str + '"'
                : str;
        };
        JSV.encodeArray = function (array) {
            var value, sb = new StringBuffer();
            for (var i = 0, len = array.length; i < len; i++) {
                value = array[i];
                if (isNullOrEmpty(value) || typeof value === 'function')
                    continue;
                if (sb.getLength() > 0)
                    sb.append(',');
                sb.append(JSV.stringify(value));
            }
            return "[".concat(sb.toString(), "]");
        };
        JSV.encodeObject = function (obj) {
            var value, sb = new StringBuffer();
            for (var key in obj) {
                value = obj[key];
                if (!obj.hasOwnProperty(key) || isNullOrEmpty(value) || typeof value === 'function')
                    continue;
                if (sb.getLength() > 0)
                    sb.append(',');
                sb.append(JSV.encodeString(key));
                sb.append(':');
                sb.append(JSV.stringify(value));
            }
            return "{".concat(sb.toString(), "}");
        };
        JSV.stringify = function (obj) {
            if (obj === null || obj === undefined)
                return null;
            var typeOf = typeof (obj);
            if (typeOf === 'function' || typeOf === 'symbol')
                return null;
            if (typeOf === 'object') {
                var ctorStr = obj.constructor.toString().toLowerCase();
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
        };
        JSV.ESCAPE_CHARS = ['"', ':', ',', '{', '}', '[', ']', '\r', '\n'];
        return JSV;
    }());
    exports.JSV = JSV;
    function uniqueKeys(rows) {
        var to = [];
        rows.forEach(function (o) { return Object.keys(o).forEach(function (k) {
            if (to.indexOf(k) === -1) {
                to.push(k);
            }
        }); });
        return to;
    }
    exports.uniqueKeys = uniqueKeys;
    function alignLeft(str, len, pad) {
        if (pad === void 0) { pad = ' '; }
        if (len < 0)
            return '';
        var aLen = len + 1 - str.length;
        if (aLen <= 0)
            return str;
        return pad + str + pad.repeat(len + 1 - str.length);
    }
    exports.alignLeft = alignLeft;
    function alignCenter(str, len, pad) {
        if (pad === void 0) { pad = ' '; }
        if (len < 0)
            return '';
        if (!str)
            str = '';
        var nLen = str.length;
        var half = Math.floor(len / 2 - nLen / 2);
        var odds = Math.abs((nLen % 2) - (len % 2));
        return pad.repeat(half + 1) + str + pad.repeat(half + 1 + odds);
    }
    exports.alignCenter = alignCenter;
    function alignRight(str, len, pad) {
        if (pad === void 0) { pad = ' '; }
        if (len < 0)
            return '';
        var aLen = len + 1 - str.length;
        if (aLen <= 0)
            return str;
        return pad.repeat(len + 1 - str.length) + str + pad;
    }
    exports.alignRight = alignRight;
    function alignAuto(obj, len, pad) {
        if (pad === void 0) { pad = ' '; }
        var str = "".concat(obj);
        if (str.length <= len) {
            return typeof obj === "number"
                ? alignRight(str, len, pad)
                : alignLeft(str, len, pad);
        }
        return str;
    }
    exports.alignAuto = alignAuto;
    function EventBus() {
        var _a = createBus(), subscribe = _a.subscribe, publish = _a.publish;
        this.subscribe = subscribe;
        this.publish = publish;
    }
    exports.EventBus = EventBus;
    function createBus() {
        var subscriptions = {};
        function subscribe(type, callback) {
            var id = Symbol('id');
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
                .forEach(function (key) { return subscriptions[eventType][key](arg); });
        }
        return { subscribe: subscribe, publish: publish };
    }
    exports.createBus = createBus;
    var Inspect = /** @class */ (function () {
        function Inspect() {
        }
        Inspect.vars = function (obj) {
            return __awaiter(this, void 0, void 0, function () {
                var inspectVarsPath, nodeModule;
                var _this = this;
                return __generator(this, function (_a) {
                    var _b;
                    switch (_a.label) {
                        case 0:
                            if (typeof process != 'object')
                                return [2 /*return*/];
                            inspectVarsPath = process.env.INSPECT_VARS;
                            if (!inspectVarsPath || !obj)
                                return [2 /*return*/];
                            nodeModule = function (m) { return 'no' + 'de:' + "".concat(m); };
                            return [4 /*yield*/, (_b = nodeModule('fs'), __syncRequire ? Promise.resolve().then(function () { return require(_b); }) : new Promise(function (resolve_1, reject_1) { require([_b], resolve_1, reject_1); })).then(function (fs) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        var _b;
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, (_b = nodeModule('path'), __syncRequire ? Promise.resolve().then(function () { return require(_b); }) : new Promise(function (resolve_2, reject_2) { require([_b], resolve_2, reject_2); })).then(function (path) {
                                                    var varsPath = inspectVarsPath.replace(/\\/g, '/');
                                                    if (varsPath.indexOf('/') >= 0) {
                                                        var dir = path.dirname(varsPath);
                                                        if (!fs.existsSync(dir)) {
                                                            fs.mkdirSync(dir);
                                                        }
                                                    }
                                                    fs.writeFileSync(varsPath, JSON.stringify(obj));
                                                })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Inspect.dump = function (obj) {
            var to = JSON.stringify(obj, null, 4);
            return to.replace(/"/g, '');
        };
        Inspect.printDump = function (obj) { console.log(Inspect.dump(obj)); };
        Inspect.dumpTable = function (rows) {
            var mapRows = rows;
            var keys = uniqueKeys(mapRows);
            var colSizes = {};
            keys.forEach(function (k) {
                var max = k.length;
                mapRows.forEach(function (row) {
                    var col = row[k];
                    if (col != null) {
                        var valSize = "".concat(col).length;
                        if (valSize > max) {
                            max = valSize;
                        }
                    }
                });
                colSizes[k] = max;
            });
            // sum + ' padding ' + |
            var colSizesLength = Object.keys(colSizes).length;
            var rowWidth = Object.keys(colSizes).map(function (k) { return colSizes[k]; }).reduce(function (p, c) { return p + c; }, 0) +
                (colSizesLength * 2) +
                (colSizesLength + 1);
            var sb = [];
            sb.push("+".concat('-'.repeat(rowWidth - 2), "+"));
            var head = '|';
            keys.forEach(function (k) { return head += alignCenter(k, colSizes[k]) + '|'; });
            sb.push(head);
            sb.push("|".concat('-'.repeat(rowWidth - 2), "|"));
            mapRows.forEach(function (row) {
                var to = '|';
                keys.forEach(function (k) { return to += '' + alignAuto(row[k], colSizes[k]) + '|'; });
                sb.push(to);
            });
            sb.push("+".concat('-'.repeat(rowWidth - 2), "+"));
            return sb.join('\n');
        };
        Inspect.printDumpTable = function (rows) { console.log(Inspect.dumpTable(rows)); };
        return Inspect;
    }());
    exports.Inspect = Inspect;
});
