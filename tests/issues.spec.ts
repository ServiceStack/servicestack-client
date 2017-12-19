import * as chai from "chai";

const { expect, assert } = chai;
import { 
    JsonServiceClient,
    nameOf,
} from  '../src/index';

describe('Issues', () => {
    
    it.only ('Does generate URL', done => {
        
        let dtoName = nameOf(new GetProducts());
        expect(dtoName).eq('GetProducts');

        done();
    })
});

export interface IReturn<T>
{
    createResponse() : T;
}

export interface IReturnVoid
{
    createResponse() : void;
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1, EmitDefaultValue=false)
    errorCode: string;

    // @DataMember(Order=2, EmitDefaultValue=false)
    fieldName: string;

    // @DataMember(Order=3, EmitDefaultValue=false)
    message: string;

    // @DataMember(Order=4, EmitDefaultValue=false)
    meta: { [index:string]: string; };
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    errorCode: string;

    // @DataMember(Order=2)
    message: string;

    // @DataMember(Order=3)
    stackTrace: string;

    // @DataMember(Order=4)
    errors: ResponseError[];

    // @DataMember(Order=5)
    meta: { [index:string]: string; };
}

// @Route("/settings/products", "GET")
// @Route("/settings/products/{Id}", "GET")
export class GetProducts implements IReturn<ResponseBase<ProductDto>>
{
    id: string;
    createResponse() { return new ResponseBase<ProductDto>(); }
    getTypeName() { return "GetProducts"; }
}

export class ResponseBase<T>
{
    responseStatus: ResponseStatus;
    result: T;
    results: T[];
    total: number;
}

// @Route("/settings/products", "POST")
// @Route("/settings/products/{Id}", "PUT")
export class ProductDto implements IReturn<ResponseBase<ProductDto>>
{
    id: string;
   // more...

   createResponse() { return new ResponseBase<ProductDto>(); }
   getTypeName() { return "GetProducts"; }
}

