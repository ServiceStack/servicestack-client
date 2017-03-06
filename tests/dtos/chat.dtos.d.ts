export interface IReturnVoid {
    createResponse(): void;
}
export interface IReturn<T> {
    createResponse(): T;
}
export declare class ResponseError {
    errorCode: string;
    fieldName: string;
    message: string;
    meta: {
        [index: string]: string;
    };
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
export declare class CustomType {
    id: number;
    name: string;
}
export declare class SetterType {
    id: number;
    name: string;
}
export declare class ChatMessage {
    id: number;
    channel: string;
    fromUserId: string;
    fromName: string;
    displayName: string;
    message: string;
    userAuthId: string;
    private: boolean;
}
export declare class GetChatHistoryResponse {
    results: ChatMessage[];
    responseStatus: ResponseStatus;
}
export declare class GetUserDetailsResponse {
    provider: string;
    userId: string;
    userName: string;
    fullName: string;
    displayName: string;
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phoneNumber: string;
    birthDate: string;
    birthDateRaw: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    culture: string;
    gender: string;
    language: string;
    mailAddress: string;
    nickname: string;
    postalCode: string;
    timeZone: string;
}
export declare class AuthenticateResponse {
    userId: string;
    sessionId: string;
    userName: string;
    displayName: string;
    referrerUrl: string;
    bearerToken: string;
    responseStatus: ResponseStatus;
    meta: {
        [index: string]: string;
    };
}
export declare class AssignRolesResponse {
    allRoles: string[];
    allPermissions: string[];
    responseStatus: ResponseStatus;
}
export declare class UnAssignRolesResponse {
    allRoles: string[];
    allPermissions: string[];
    responseStatus: ResponseStatus;
}
export declare class PostRawToChannel implements IReturnVoid {
    from: string;
    toUserId: string;
    channel: string;
    message: string;
    selector: string;
    createResponse(): void;
    getTypeName(): string;
}
export declare class PostChatToChannel implements IReturn<ChatMessage> {
    from: string;
    toUserId: string;
    channel: string;
    message: string;
    selector: string;
    createResponse(): ChatMessage;
    getTypeName(): string;
}
export declare class GetChatHistory implements IReturn<GetChatHistoryResponse> {
    channels: string[];
    afterId: number;
    take: number;
    createResponse(): GetChatHistoryResponse;
    getTypeName(): string;
}
export declare class ClearChatHistory implements IReturnVoid {
    createResponse(): void;
    getTypeName(): string;
}
export declare class ResetServerEvents implements IReturnVoid {
    createResponse(): void;
    getTypeName(): string;
}
export declare class PostObjectToChannel implements IReturnVoid {
    toUserId: string;
    channel: string;
    selector: string;
    customType: CustomType;
    setterType: SetterType;
    createResponse(): void;
    getTypeName(): string;
}
export declare class GetUserDetails implements IReturn<GetUserDetailsResponse> {
    createResponse(): GetUserDetailsResponse;
    getTypeName(): string;
}
export declare class Authenticate implements IReturn<AuthenticateResponse> {
    provider: string;
    state: string;
    oauth_token: string;
    oauth_verifier: string;
    userName: string;
    password: string;
    rememberMe: boolean;
    continue: string;
    nonce: string;
    uri: string;
    response: string;
    qop: string;
    nc: string;
    cnonce: string;
    useTokenCookie: boolean;
    accessToken: string;
    accessTokenSecret: string;
    meta: {
        [index: string]: string;
    };
    createResponse(): AuthenticateResponse;
    getTypeName(): string;
}
export declare class AssignRoles implements IReturn<AssignRolesResponse> {
    userName: string;
    permissions: string[];
    roles: string[];
    createResponse(): AssignRolesResponse;
    getTypeName(): string;
}
export declare class UnAssignRoles implements IReturn<UnAssignRolesResponse> {
    userName: string;
    permissions: string[];
    roles: string[];
    createResponse(): UnAssignRolesResponse;
    getTypeName(): string;
}
