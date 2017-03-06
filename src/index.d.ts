import 'isomorphic-fetch';
export interface IReturnVoid {
    createResponse(): any;
}
export interface IReturn<T> {
    createResponse(): T;
}
export declare class ResponseStatus {
    errorCode: string;
    message: string;
    stackTrace: string;
    errors: ResponseError[];
    meta: {
        [index: string]: string;
    };
}
export declare class ResponseError {
    errorCode: string;
    fieldName: string;
    message: string;
    meta: {
        [index: string]: string;
    };
}
export declare class ErrorResponse {
    responseStatus: ResponseStatus;
}
export interface ISseMessage {
    type: string;
    eventId: number;
    channel: string;
    data: string;
    selector: string;
    json: string;
    op: string;
    target: string;
    cssSelector: string;
    meta: {
        [index: string]: string;
    };
}
export interface ISseCommand extends ISseMessage {
    userId: string;
    displayName: string;
    channels: string;
    profileUrl: string;
}
export interface ISseConnect extends ISseCommand {
    id: string;
    unRegisterUrl: string;
    heartbeatUrl: string;
    updateSubscriberUrl: string;
    heartbeatIntervalMs: number;
    idleTimeoutMs: number;
}
export interface ISseHeartbeat extends ISseCommand {
}
export interface ISseJoin extends ISseCommand {
}
export interface ISseLeave extends ISseCommand {
}
export interface ISseUpdate extends ISseCommand {
}
export interface IReconnectServerEventsOptions {
    url?: string;
    onerror?: (...args: any[]) => void;
    onmessage?: (...args: any[]) => void;
    errorArgs?: any[];
}
/**
 * EventSource
 */
export declare enum ReadyState {
    CONNECTING = 0,
    OPEN = 1,
    CLOSED = 2,
}
export interface IEventSourceStatic extends EventTarget {
    new (url: string, eventSourceInitDict?: IEventSourceInit): IEventSourceStatic;
    url: string;
    withCredentials: boolean;
    CONNECTING: ReadyState;
    OPEN: ReadyState;
    CLOSED: ReadyState;
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
export declare class ServerEventsClient {
    channels: string[];
    options: any;
    eventSource: IEventSourceStatic;
    static UnknownChannel: string;
    eventSourceUrl: string;
    updateSubscriberUrl: string;
    connectionInfo: ISseConnect;
    client: JsonServiceClient;
    closed: boolean;
    constructor(baseUrl: string, channels: string[], options?: any, eventSource?: IEventSourceStatic);
    onMessage(e: IOnMessageEvent): void;
    onError(e: any): void;
    reconnectServerEvents(opt?: any): IEventSourceStatic;
    close(): Promise<Response>;
    invokeReceiver(r: any, cmd: string, el: Element, msg: string, e: any, name: string): void;
    registerHandler(name: string, fn: Function): void;
    registerReceiver(name: string, receiver: any): void;
    unregisterReceiver(name: string): void;
    updateChannels(channels: string[]): void;
    updateSubscriberInfo(subscribe: string | string[], unsubscribe: string | string[]): void;
    getConnectionInfo(): ISseConnect;
    getSubscriptionId(): string;
    updateSubscriber(request: UpdateEventSubscriber): Promise<any>;
    subscribeToChannels(channels: string[]): Promise<void>;
    unsubscribeFromChannels(channels: string[]): Promise<void>;
    getChannelSubscribers(): Promise<ServerEventUser[]>;
    toServerEventUser(map: {
        [id: string]: string;
    }): ServerEventUser;
}
export declare class UpdateEventSubscriber implements IReturn<UpdateEventSubscriberResponse> {
    id: string;
    subscribeChannels: string[];
    unsubscribeChannels: string[];
    createResponse(): UpdateEventSubscriberResponse;
    getTypeName(): string;
}
export declare class UpdateEventSubscriberResponse {
    responseStatus: ResponseStatus;
}
export declare class GetEventSubscribers implements IReturn<any[]> {
    channels: string[];
    createResponse(): any[];
    getTypeName(): string;
}
export declare class ServerEventUser {
    userId: string;
    displayName: string;
    profileUrl: string;
    channels: string[];
    meta: {
        [index: string]: string;
    };
}
export declare class HttpMethods {
    static Get: string;
    static Post: string;
    static Put: string;
    static Delete: string;
    static Patch: string;
    static Head: string;
    static Options: string;
    static hasRequestBody: (method: string) => boolean;
}
export interface IRequestFilterOptions {
    url: string;
}
export declare class JsonServiceClient {
    baseUrl: string;
    replyBaseUrl: string;
    oneWayBaseUrl: string;
    mode: string;
    credentials: string;
    headers: Headers;
    userName: string;
    password: string;
    requestFilter: (req: Request, options?: IRequestFilterOptions) => void;
    responseFilter: (res: Response) => void;
    exceptionFilter: (res: Response, error: any) => void;
    static toBase64: (rawString: string) => string;
    constructor(baseUrl: string);
    setCredentials(userName: string, password: string): void;
    get<T>(request: IReturn<T> | string, args?: any): Promise<T>;
    delete<T>(request: IReturn<T> | string, args?: any): Promise<T>;
    post<T>(request: IReturn<T> | string, args?: any): Promise<T>;
    put<T>(request: IReturn<T> | string, args?: any): Promise<T>;
    patch<T>(request: IReturn<T> | string, args?: any): Promise<T>;
    createUrlFromDto<T>(method: string, request: IReturn<T>): string;
    toAbsoluteUrl(method: string, relativeOrAbsoluteUrl: string): string;
    send<T>(method: string, request: any | string, args?: any): Promise<T>;
    raiseError(res: Response, error: any): any;
}
export declare const toCamelCase: (key: string) => string;
export declare const sanitize: (status: any) => any;
export declare const nameOf: (o: any) => any;
export declare const css: (selector: string | NodeListOf<Element>, name: string, value: string) => void;
export declare const splitOnFirst: (s: string, c: string) => string[];
export declare const splitOnLast: (s: string, c: string) => string[];
export declare const humanize: (s: any) => any;
export declare const queryString: (url: string) => any;
export declare const combinePaths: (...paths: string[]) => string;
export declare const createPath: (route: string, args: any) => string;
export declare const createUrl: (route: string, args: any) => string;
export declare const appendQueryString: (url: string, args: any) => string;
export declare const bytesToBase64: (aBytes: Uint8Array) => string;
export declare const toDate: (s: string) => Date;
export declare const toDateFmt: (s: string) => string;
export declare const padInt: (n: number) => string | number;
export declare const dateFmt: (d?: Date) => string;
export declare const dateFmtHM: (d?: Date) => string;
export declare const timeFmt12: (d?: Date) => string;
