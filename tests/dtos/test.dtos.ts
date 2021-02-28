/* Options:
Date: 2021-02-28 11:58:07
Version: 5.105
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://test.servicestack.net

//GlobalNamespace: 
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: IReturn`1,IReturnVoid,IPost,IMeta,ResponseStatus,ResponseError,Authenticate,AuthenticateResponse,Hello,HelloResponse,HelloTypes,ReturnString,ReturnBytes,ReturnStream,TestAuth,TestAuthResponse,HelloReturnVoid,ThrowValidation,ThrowValidationResponse,EchoTypes,CreateJwt,CreateJwtResponse,CreateRefreshJwt,CreateRefreshJwtResponse,AuthUserSession,IAuthTokens,SendJson,SendRaw,SendText,Secured,SecuredResponse,InvalidateLastAccessToken,EmptyResponse,IHasSessionId,IHasBearerToken
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
    createResponse(): T;
}

export interface IReturnVoid
{
    createResponse(): void;
}

export interface IHasSessionId
{
    sessionId: string;
}

export interface IHasBearerToken
{
    bearerToken: string;
}

export interface IPost
{
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public fieldName: string;

    // @DataMember(Order=3)
    public message: string;

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseError>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public message: string;

    // @DataMember(Order=3)
    public stackTrace: string;

    // @DataMember(Order=4)
    public errors: ResponseError[];

    // @DataMember(Order=5)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseStatus>) { (Object as any).assign(this, init); }
}

export interface IAuthTokens
{
    provider: string;
    userId: string;
    accessToken: string;
    accessTokenSecret: string;
    refreshToken: string;
    refreshTokenExpiry?: string;
    requestToken: string;
    requestTokenSecret: string;
    items: { [index: string]: string; };
}

// @DataContract
export class AuthUserSession
{
    // @DataMember(Order=1)
    public referrerUrl: string;

    // @DataMember(Order=2)
    public id: string;

    // @DataMember(Order=3)
    public userAuthId: string;

    // @DataMember(Order=4)
    public userAuthName: string;

    // @DataMember(Order=5)
    public userName: string;

    // @DataMember(Order=6)
    public twitterUserId: string;

    // @DataMember(Order=7)
    public twitterScreenName: string;

    // @DataMember(Order=8)
    public facebookUserId: string;

    // @DataMember(Order=9)
    public facebookUserName: string;

    // @DataMember(Order=10)
    public firstName: string;

    // @DataMember(Order=11)
    public lastName: string;

    // @DataMember(Order=12)
    public displayName: string;

    // @DataMember(Order=13)
    public company: string;

    // @DataMember(Order=14)
    public email: string;

    // @DataMember(Order=15)
    public primaryEmail: string;

    // @DataMember(Order=16)
    public phoneNumber: string;

    // @DataMember(Order=17)
    public birthDate?: string;

    // @DataMember(Order=18)
    public birthDateRaw: string;

    // @DataMember(Order=19)
    public address: string;

    // @DataMember(Order=20)
    public address2: string;

    // @DataMember(Order=21)
    public city: string;

    // @DataMember(Order=22)
    public state: string;

    // @DataMember(Order=23)
    public country: string;

    // @DataMember(Order=24)
    public culture: string;

    // @DataMember(Order=25)
    public fullName: string;

    // @DataMember(Order=26)
    public gender: string;

    // @DataMember(Order=27)
    public language: string;

    // @DataMember(Order=28)
    public mailAddress: string;

    // @DataMember(Order=29)
    public nickname: string;

    // @DataMember(Order=30)
    public postalCode: string;

    // @DataMember(Order=31)
    public timeZone: string;

    // @DataMember(Order=32)
    public requestTokenSecret: string;

    // @DataMember(Order=33)
    public createdAt: string;

    // @DataMember(Order=34)
    public lastModified: string;

    // @DataMember(Order=35)
    public roles: string[];

    // @DataMember(Order=36)
    public permissions: string[];

    // @DataMember(Order=37)
    public isAuthenticated: boolean;

    // @DataMember(Order=38)
    public fromToken: boolean;

    // @DataMember(Order=39)
    public profileUrl: string;

    // @DataMember(Order=40)
    public sequence: string;

    // @DataMember(Order=41)
    public tag: number;

    // @DataMember(Order=42)
    public authProvider: string;

    // @DataMember(Order=43)
    public providerOAuthAccess: IAuthTokens[];

    // @DataMember(Order=44)
    public meta: { [index: string]: string; };

    // @DataMember(Order=45)
    public audiences: string[];

    // @DataMember(Order=46)
    public scopes: string[];

    // @DataMember(Order=47)
    public dns: string;

    // @DataMember(Order=48)
    public rsa: string;

    // @DataMember(Order=49)
    public sid: string;

    // @DataMember(Order=50)
    public hash: string;

    // @DataMember(Order=51)
    public homePhone: string;

    // @DataMember(Order=52)
    public mobilePhone: string;

    // @DataMember(Order=53)
    public webpage: string;

    // @DataMember(Order=54)
    public emailConfirmed?: boolean;

    // @DataMember(Order=55)
    public phoneNumberConfirmed?: boolean;

    // @DataMember(Order=56)
    public twoFactorEnabled?: boolean;

    // @DataMember(Order=57)
    public securityStamp: string;

    // @DataMember(Order=58)
    public type: string;

    public constructor(init?: Partial<AuthUserSession>) { (Object as any).assign(this, init); }
}

export class ThrowValidationResponse
{
    public age: number;
    public required: string;
    public email: string;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<ThrowValidationResponse>) { (Object as any).assign(this, init); }
}

export class SecuredResponse
{
    public result: string;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<SecuredResponse>) { (Object as any).assign(this, init); }
}

export class CreateJwtResponse
{
    public token: string;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<CreateJwtResponse>) { (Object as any).assign(this, init); }
}

export class CreateRefreshJwtResponse
{
    public token: string;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<CreateRefreshJwtResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmptyResponse
{
    // @DataMember(Order=1)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<EmptyResponse>) { (Object as any).assign(this, init); }
}

export class HelloResponse
{
    public result: string;

    public constructor(init?: Partial<HelloResponse>) { (Object as any).assign(this, init); }
}

// @Route("/hellotypes/{Name}")
export class HelloTypes implements IReturn<HelloTypes>
{
    public string: string;
    public bool: boolean;
    public int: number;

    public constructor(init?: Partial<HelloTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloTypes(); }
    public getTypeName() { return 'HelloTypes'; }
}

export class TestAuthResponse
{
    public userId: string;
    public sessionId: string;
    public userName: string;
    public displayName: string;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<TestAuthResponse>) { (Object as any).assign(this, init); }
}

// @Route("/echo/types")
export class EchoTypes implements IReturn<EchoTypes>
{
    public byte: number;
    public short: number;
    public int: number;
    public long: number;
    public uShort: number;
    public uInt: number;
    public uLong: number;
    public float: number;
    public double: number;
    public decimal: number;
    public string: string;
    public dateTime: string;
    public timeSpan: string;
    public dateTimeOffset: string;
    public guid: string;
    public char: string;

    public constructor(init?: Partial<EchoTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new EchoTypes(); }
    public getTypeName() { return 'EchoTypes'; }
}

// @DataContract
export class AuthenticateResponse implements IHasSessionId, IHasBearerToken
{
    // @DataMember(Order=1)
    public userId: string;

    // @DataMember(Order=2)
    public sessionId: string;

    // @DataMember(Order=3)
    public userName: string;

    // @DataMember(Order=4)
    public displayName: string;

    // @DataMember(Order=5)
    public referrerUrl: string;

    // @DataMember(Order=6)
    public bearerToken: string;

    // @DataMember(Order=7)
    public refreshToken: string;

    // @DataMember(Order=8)
    public profileUrl: string;

    // @DataMember(Order=9)
    public roles: string[];

    // @DataMember(Order=10)
    public permissions: string[];

    // @DataMember(Order=11)
    public responseStatus: ResponseStatus;

    // @DataMember(Order=12)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<AuthenticateResponse>) { (Object as any).assign(this, init); }
}

// @Route("/throwvalidation")
export class ThrowValidation implements IReturn<ThrowValidationResponse>
{
    public age: number;
    public required: string;
    public email: string;

    public constructor(init?: Partial<ThrowValidation>) { (Object as any).assign(this, init); }
    public createResponse() { return new ThrowValidationResponse(); }
    public getTypeName() { return 'ThrowValidation'; }
}

// @Route("/secured")
// @ValidateRequest(Validator="IsAuthenticated")
export class Secured implements IReturn<SecuredResponse>
{
    public name: string;

    public constructor(init?: Partial<Secured>) { (Object as any).assign(this, init); }
    public createResponse() { return new SecuredResponse(); }
    public getTypeName() { return 'Secured'; }
}

// @Route("/jwt")
export class CreateJwt extends AuthUserSession implements IReturn<CreateJwtResponse>
{
    public jwtExpiry?: string;

    public constructor(init?: Partial<CreateJwt>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new CreateJwtResponse(); }
    public getTypeName() { return 'CreateJwt'; }
}

// @Route("/jwt-refresh")
export class CreateRefreshJwt implements IReturn<CreateRefreshJwtResponse>
{
    public userAuthId: string;
    public jwtExpiry?: string;

    public constructor(init?: Partial<CreateRefreshJwt>) { (Object as any).assign(this, init); }
    public createResponse() { return new CreateRefreshJwtResponse(); }
    public getTypeName() { return 'CreateRefreshJwt'; }
}

// @Route("/jwt-invalidate")
export class InvalidateLastAccessToken implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<InvalidateLastAccessToken>) { (Object as any).assign(this, init); }
    public createResponse() { return new EmptyResponse(); }
    public getTypeName() { return 'InvalidateLastAccessToken'; }
}

// @Route("/hello")
// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse>
{
    // @Required()
    public name: string;

    public title: string;

    public constructor(init?: Partial<Hello>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloResponse(); }
    public getTypeName() { return 'Hello'; }
}

export class HelloReturnVoid implements IReturnVoid
{
    public id: number;

    public constructor(init?: Partial<HelloReturnVoid>) { (Object as any).assign(this, init); }
    public createResponse() {}
    public getTypeName() { return 'HelloReturnVoid'; }
}

// @Route("/return/string")
export class ReturnString implements IReturn<string>
{
    public data: string;

    public constructor(init?: Partial<ReturnString>) { (Object as any).assign(this, init); }
    public createResponse() { return ''; }
    public getTypeName() { return 'ReturnString'; }
}

// @Route("/return/bytes")
export class ReturnBytes implements IReturn<Uint8Array>
{
    public data: Uint8Array;

    public constructor(init?: Partial<ReturnBytes>) { (Object as any).assign(this, init); }
    public createResponse() { return new Uint8Array(0); }
    public getTypeName() { return 'ReturnBytes'; }
}

// @Route("/return/stream")
export class ReturnStream implements IReturn<Blob>
{
    public data: Uint8Array;

    public constructor(init?: Partial<ReturnStream>) { (Object as any).assign(this, init); }
    public createResponse() { return new Blob(); }
    public getTypeName() { return 'ReturnStream'; }
}

// @Route("/sendjson")
export class SendJson implements IReturn<string>
{
    public id: number;
    public name: string;

    public constructor(init?: Partial<SendJson>) { (Object as any).assign(this, init); }
    public createResponse() { return ''; }
    public getTypeName() { return 'SendJson'; }
}

// @Route("/sendtext")
export class SendText implements IReturn<string>
{
    public id: number;
    public name: string;
    public contentType: string;

    public constructor(init?: Partial<SendText>) { (Object as any).assign(this, init); }
    public createResponse() { return ''; }
    public getTypeName() { return 'SendText'; }
}

// @Route("/sendraw")
export class SendRaw implements IReturn<Uint8Array>
{
    public id: number;
    public name: string;
    public contentType: string;

    public constructor(init?: Partial<SendRaw>) { (Object as any).assign(this, init); }
    public createResponse() { return new Uint8Array(0); }
    public getTypeName() { return 'SendRaw'; }
}

// @Route("/testauth")
export class TestAuth implements IReturn<TestAuthResponse>
{

    public constructor(init?: Partial<TestAuth>) { (Object as any).assign(this, init); }
    public createResponse() { return new TestAuthResponse(); }
    public getTypeName() { return 'TestAuth'; }
}

// @Route("/auth")
// @Route("/auth/{provider}")
// @DataContract
export class Authenticate implements IReturn<AuthenticateResponse>, IPost
{
    // @DataMember(Order=1)
    public provider: string;

    // @DataMember(Order=2)
    public state: string;

    // @DataMember(Order=3)
    public oauth_token: string;

    // @DataMember(Order=4)
    public oauth_verifier: string;

    // @DataMember(Order=5)
    public userName: string;

    // @DataMember(Order=6)
    public password: string;

    // @DataMember(Order=7)
    public rememberMe?: boolean;

    // @DataMember(Order=9)
    public errorView: string;

    // @DataMember(Order=10)
    public nonce: string;

    // @DataMember(Order=11)
    public uri: string;

    // @DataMember(Order=12)
    public response: string;

    // @DataMember(Order=13)
    public qop: string;

    // @DataMember(Order=14)
    public nc: string;

    // @DataMember(Order=15)
    public cnonce: string;

    // @DataMember(Order=16)
    public useTokenCookie?: boolean;

    // @DataMember(Order=17)
    public accessToken: string;

    // @DataMember(Order=18)
    public accessTokenSecret: string;

    // @DataMember(Order=19)
    public scope: string;

    // @DataMember(Order=20)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<Authenticate>) { (Object as any).assign(this, init); }
    public createResponse() { return new AuthenticateResponse(); }
    public getTypeName() { return 'Authenticate'; }
}

