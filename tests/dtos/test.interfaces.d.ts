/* Options:
Date: 2017-03-01 17:16:47
Version: 4.00
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://test.servicestack.net

GlobalNamespace: interfaces
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: IReturn`1,IReturnVoid,ResponseStatus,ResponseError,HelloTypes,ReturnString,ReturnBytes,ReturnStream,TestAuth,TestAuthResponse,HelloReturnVoid,ThrowValidation,ThrowValidationResponse,EchoTypes
//ExcludeTypes: 
//DefaultImports: 
*/


declare module interfaces
{

    interface IReturnVoid
    {
    }

    interface IReturn<T>
    {
    }

    // @DataContract
    interface ResponseError
    {
        // @DataMember(Order=1, EmitDefaultValue=false)
        errorCode?: string;

        // @DataMember(Order=2, EmitDefaultValue=false)
        fieldName?: string;

        // @DataMember(Order=3, EmitDefaultValue=false)
        message?: string;

        // @DataMember(Order=4, EmitDefaultValue=false)
        meta?: { [index:string]: string; };
    }

    // @DataContract
    interface ResponseStatus
    {
        // @DataMember(Order=1)
        errorCode?: string;

        // @DataMember(Order=2)
        message?: string;

        // @DataMember(Order=3)
        stackTrace?: string;

        // @DataMember(Order=4)
        errors?: ResponseError[];

        // @DataMember(Order=5)
        meta?: { [index:string]: string; };
    }

    interface ThrowValidationResponse
    {
        age?: number;
        required?: string;
        email?: string;
        responseStatus?: ResponseStatus;
    }

    // @Route("/hellotypes/{Name}")
    interface HelloTypes extends IReturn<HelloTypes>
    {
        string?: string;
        bool?: boolean;
        int?: number;
    }

    interface TestAuthResponse
    {
        userId?: string;
        sessionId?: string;
        userName?: string;
        displayName?: string;
        responseStatus?: ResponseStatus;
    }

    // @Route("/echo/types")
    interface EchoTypes extends IReturn<EchoTypes>
    {
        byte?: number;
        short?: number;
        int?: number;
        long?: number;
        uShort?: number;
        uInt?: number;
        uLong?: number;
        float?: number;
        double?: number;
        decimal?: number;
        string?: string;
        dateTime?: string;
        timeSpan?: string;
        dateTimeOffset?: string;
        guid?: string;
        char?: string;
    }

    // @Route("/throwvalidation")
    interface ThrowValidation extends IReturn<ThrowValidationResponse>
    {
        age?: number;
        required?: string;
        email?: string;
    }

    interface HelloReturnVoid extends IReturnVoid
    {
        id?: number;
    }

    // @Route("/return/string")
    interface ReturnString extends IReturn<string>
    {
        data?: string;
    }

    // @Route("/return/bytes")
    interface ReturnBytes extends IReturn<Uint8Array>
    {
        data?: Uint8Array;
    }

    // @Route("/return/stream")
    interface ReturnStream extends IReturn<Blob>
    {
        data?: Uint8Array;
    }

    // @Route("/testauth")
    interface TestAuth extends IReturn<TestAuthResponse>
    {
    }

}