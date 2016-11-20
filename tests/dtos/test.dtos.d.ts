export interface IReturn<T> {
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
export declare class HelloTypes implements IReturn<HelloTypes> {
    string: string;
    bool: boolean;
    int: number;
    createResponse(): HelloTypes;
    getTypeName(): string;
}
export declare class TestAuthResponse {
    userId: string;
    sessionId: string;
    userName: string;
    displayName: string;
    responseStatus: ResponseStatus;
}
export declare class ReturnString implements IReturn<string> {
    data: string;
    createResponse(): string;
    getTypeName(): string;
}
export declare class ReturnBytes implements IReturn<Uint8Array> {
    data: Uint8Array;
    createResponse(): Uint8Array;
    getTypeName(): string;
}
export declare class ReturnStream implements IReturn<Blob> {
    data: Uint8Array;
    createResponse(): Blob;
    getTypeName(): string;
}
export declare class TestAuth implements IReturn<TestAuthResponse> {
    createResponse(): TestAuthResponse;
    getTypeName(): string;
}
