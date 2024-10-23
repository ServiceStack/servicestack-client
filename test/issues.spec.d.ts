export interface IReturn<T> {
    createResponse(): T;
}
export interface IReturnVoid {
    createResponse(): void;
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
export declare class GetProducts implements IReturn<ResponseBase<ProductDto>> {
    id: string;
    createResponse(): ResponseBase<ProductDto>;
    getTypeName(): string;
}
export declare class ResponseBase<T> {
    responseStatus: ResponseStatus;
    result: T;
    results: T[];
    total: number;
}
export declare class ProductDto implements IReturn<ResponseBase<ProductDto>> {
    id: string;
    createResponse(): ResponseBase<ProductDto>;
    getTypeName(): string;
}
