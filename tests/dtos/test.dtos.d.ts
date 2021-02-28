export interface IReturn<T> {
    createResponse(): T;
}
export interface IReturnVoid {
    createResponse(): void;
}
export interface IHasSessionId {
    sessionId: string;
}
export interface IHasBearerToken {
    bearerToken: string;
}
export interface IPost {
}
export declare class ResponseError {
    errorCode: string;
    fieldName: string;
    message: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ResponseError>);
}
export declare class ResponseStatus {
    errorCode: string;
    message: string;
    stackTrace: string;
    errors: ResponseError[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ResponseStatus>);
}
export interface IAuthTokens {
    provider: string;
    userId: string;
    accessToken: string;
    accessTokenSecret: string;
    refreshToken: string;
    refreshTokenExpiry?: string;
    requestToken: string;
    requestTokenSecret: string;
    items: {
        [index: string]: string;
    };
}
export declare class AuthUserSession {
    referrerUrl: string;
    id: string;
    userAuthId: string;
    userAuthName: string;
    userName: string;
    twitterUserId: string;
    twitterScreenName: string;
    facebookUserId: string;
    facebookUserName: string;
    firstName: string;
    lastName: string;
    displayName: string;
    company: string;
    email: string;
    primaryEmail: string;
    phoneNumber: string;
    birthDate?: string;
    birthDateRaw: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    culture: string;
    fullName: string;
    gender: string;
    language: string;
    mailAddress: string;
    nickname: string;
    postalCode: string;
    timeZone: string;
    requestTokenSecret: string;
    createdAt: string;
    lastModified: string;
    roles: string[];
    permissions: string[];
    isAuthenticated: boolean;
    fromToken: boolean;
    profileUrl: string;
    sequence: string;
    tag: number;
    authProvider: string;
    providerOAuthAccess: IAuthTokens[];
    meta: {
        [index: string]: string;
    };
    audiences: string[];
    scopes: string[];
    dns: string;
    rsa: string;
    sid: string;
    hash: string;
    homePhone: string;
    mobilePhone: string;
    webpage: string;
    emailConfirmed?: boolean;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    securityStamp: string;
    type: string;
    constructor(init?: Partial<AuthUserSession>);
}
export declare class ThrowValidationResponse {
    age: number;
    required: string;
    email: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<ThrowValidationResponse>);
}
export declare class SecuredResponse {
    result: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<SecuredResponse>);
}
export declare class CreateJwtResponse {
    token: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<CreateJwtResponse>);
}
export declare class CreateRefreshJwtResponse {
    token: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<CreateRefreshJwtResponse>);
}
export declare class EmptyResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<EmptyResponse>);
}
export declare class HelloResponse {
    result: string;
    constructor(init?: Partial<HelloResponse>);
}
export declare class HelloTypes implements IReturn<HelloTypes> {
    string: string;
    bool: boolean;
    int: number;
    constructor(init?: Partial<HelloTypes>);
    createResponse(): HelloTypes;
    getTypeName(): string;
}
export declare class TestAuthResponse {
    userId: string;
    sessionId: string;
    userName: string;
    displayName: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<TestAuthResponse>);
}
export declare class EchoTypes implements IReturn<EchoTypes> {
    byte: number;
    short: number;
    int: number;
    long: number;
    uShort: number;
    uInt: number;
    uLong: number;
    float: number;
    double: number;
    decimal: number;
    string: string;
    dateTime: string;
    timeSpan: string;
    dateTimeOffset: string;
    guid: string;
    char: string;
    constructor(init?: Partial<EchoTypes>);
    createResponse(): EchoTypes;
    getTypeName(): string;
}
export declare class AuthenticateResponse implements IHasSessionId, IHasBearerToken {
    userId: string;
    sessionId: string;
    userName: string;
    displayName: string;
    referrerUrl: string;
    bearerToken: string;
    refreshToken: string;
    profileUrl: string;
    roles: string[];
    permissions: string[];
    responseStatus: ResponseStatus;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AuthenticateResponse>);
}
export declare class ThrowValidation implements IReturn<ThrowValidationResponse> {
    age: number;
    required: string;
    email: string;
    constructor(init?: Partial<ThrowValidation>);
    createResponse(): ThrowValidationResponse;
    getTypeName(): string;
}
export declare class Secured implements IReturn<SecuredResponse> {
    name: string;
    constructor(init?: Partial<Secured>);
    createResponse(): SecuredResponse;
    getTypeName(): string;
}
export declare class CreateJwt extends AuthUserSession implements IReturn<CreateJwtResponse> {
    jwtExpiry?: string;
    constructor(init?: Partial<CreateJwt>);
    createResponse(): CreateJwtResponse;
    getTypeName(): string;
}
export declare class CreateRefreshJwt implements IReturn<CreateRefreshJwtResponse> {
    userAuthId: string;
    jwtExpiry?: string;
    constructor(init?: Partial<CreateRefreshJwt>);
    createResponse(): CreateRefreshJwtResponse;
    getTypeName(): string;
}
export declare class InvalidateLastAccessToken implements IReturn<EmptyResponse> {
    constructor(init?: Partial<InvalidateLastAccessToken>);
    createResponse(): EmptyResponse;
    getTypeName(): string;
}
export declare class Hello implements IReturn<HelloResponse> {
    name: string;
    title: string;
    constructor(init?: Partial<Hello>);
    createResponse(): HelloResponse;
    getTypeName(): string;
}
export declare class HelloReturnVoid implements IReturnVoid {
    id: number;
    constructor(init?: Partial<HelloReturnVoid>);
    createResponse(): void;
    getTypeName(): string;
}
export declare class ReturnString implements IReturn<string> {
    data: string;
    constructor(init?: Partial<ReturnString>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class ReturnBytes implements IReturn<Uint8Array> {
    data: Uint8Array;
    constructor(init?: Partial<ReturnBytes>);
    createResponse(): Uint8Array;
    getTypeName(): string;
}
export declare class ReturnStream implements IReturn<Blob> {
    data: Uint8Array;
    constructor(init?: Partial<ReturnStream>);
    createResponse(): Blob;
    getTypeName(): string;
}
export declare class SendJson implements IReturn<string> {
    id: number;
    name: string;
    constructor(init?: Partial<SendJson>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class SendText implements IReturn<string> {
    id: number;
    name: string;
    contentType: string;
    constructor(init?: Partial<SendText>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class SendRaw implements IReturn<Uint8Array> {
    id: number;
    name: string;
    contentType: string;
    constructor(init?: Partial<SendRaw>);
    createResponse(): Uint8Array;
    getTypeName(): string;
}
export declare class TestAuth implements IReturn<TestAuthResponse> {
    constructor(init?: Partial<TestAuth>);
    createResponse(): TestAuthResponse;
    getTypeName(): string;
}
export declare class Authenticate implements IReturn<AuthenticateResponse>, IPost {
    provider: string;
    state: string;
    oauth_token: string;
    oauth_verifier: string;
    userName: string;
    password: string;
    rememberMe?: boolean;
    errorView: string;
    nonce: string;
    uri: string;
    response: string;
    qop: string;
    nc: string;
    cnonce: string;
    useTokenCookie?: boolean;
    accessToken: string;
    accessTokenSecret: string;
    scope: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<Authenticate>);
    createResponse(): AuthenticateResponse;
    getTypeName(): string;
}
