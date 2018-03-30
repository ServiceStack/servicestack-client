/* Options:
Date: 2018-03-28 20:12:56
Version: 5.00
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://chat.servicestack.net

//GlobalNamespace: 
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
    createResponse() : T;
}

export interface IReturnVoid
{
    createResponse() : void;
}

export interface IPost
{
}

export interface IMeta
{
    meta?: { [index:string]: string; };
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

export class CustomType
{
    id: number;
    name: string;
}

export class SetterType
{
    id: number;
    name: string;
}

export class ChatMessage
{
    id: number;
    channel: string;
    fromUserId: string;
    fromName: string;
    displayName: string;
    message: string;
    userAuthId: string;
    private: boolean;
}

export class GetChatHistoryResponse
{
    results: ChatMessage[];
    responseStatus: ResponseStatus;
}

export class GetUserDetailsResponse
{
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

// @DataContract
export class AuthenticateResponse
{
    // @DataMember(Order=1)
    userId: string;

    // @DataMember(Order=2)
    sessionId: string;

    // @DataMember(Order=3)
    userName: string;

    // @DataMember(Order=4)
    displayName: string;

    // @DataMember(Order=5)
    referrerUrl: string;

    // @DataMember(Order=6)
    bearerToken: string;

    // @DataMember(Order=7)
    refreshToken: string;

    // @DataMember(Order=8)
    responseStatus: ResponseStatus;

    // @DataMember(Order=9)
    meta: { [index:string]: string; };
}

// @DataContract
export class AssignRolesResponse
{
    // @DataMember(Order=1)
    allRoles: string[];

    // @DataMember(Order=2)
    allPermissions: string[];

    // @DataMember(Order=3)
    responseStatus: ResponseStatus;
}

// @DataContract
export class UnAssignRolesResponse
{
    // @DataMember(Order=1)
    allRoles: string[];

    // @DataMember(Order=2)
    allPermissions: string[];

    // @DataMember(Order=3)
    responseStatus: ResponseStatus;
}

// @Route("/channels/{Channel}/raw")
export class PostRawToChannel implements IReturnVoid
{
    from: string;
    toUserId: string;
    channel: string;
    message: string;
    selector: string;
    createResponse() {}
    getTypeName() { return "PostRawToChannel"; }
}

// @Route("/channels/{Channel}/chat")
export class PostChatToChannel implements IReturn<ChatMessage>
{
    from: string;
    toUserId: string;
    channel: string;
    message: string;
    selector: string;
    createResponse() { return new ChatMessage(); }
    getTypeName() { return "PostChatToChannel"; }
}

// @Route("/chathistory")
export class GetChatHistory implements IReturn<GetChatHistoryResponse>
{
    channels: string[];
    afterId: number;
    take: number;
    createResponse() { return new GetChatHistoryResponse(); }
    getTypeName() { return "GetChatHistory"; }
}

// @Route("/reset")
export class ClearChatHistory implements IReturnVoid
{
    createResponse() {}
    getTypeName() { return "ClearChatHistory"; }
}

// @Route("/reset-serverevents")
export class ResetServerEvents implements IReturnVoid
{
    createResponse() {}
    getTypeName() { return "ResetServerEvents"; }
}

// @Route("/channels/{Channel}/object")
export class PostObjectToChannel implements IReturnVoid
{
    toUserId: string;
    channel: string;
    selector: string;
    customType: CustomType;
    setterType: SetterType;
    createResponse() {}
    getTypeName() { return "PostObjectToChannel"; }
}

// @Route("/account")
export class GetUserDetails implements IReturn<GetUserDetailsResponse>
{
    createResponse() { return new GetUserDetailsResponse(); }
    getTypeName() { return "GetUserDetails"; }
}

// @Route("/auth")
// @Route("/auth/{provider}")
// @Route("/authenticate")
// @Route("/authenticate/{provider}")
// @DataContract
export class Authenticate implements IReturn<AuthenticateResponse>, IPost, IMeta
{
    // @DataMember(Order=1)
    provider: string;

    // @DataMember(Order=2)
    state: string;

    // @DataMember(Order=3)
    oauth_token: string;

    // @DataMember(Order=4)
    oauth_verifier: string;

    // @DataMember(Order=5)
    userName: string;

    // @DataMember(Order=6)
    password: string;

    // @DataMember(Order=7)
    rememberMe: boolean;

    // @DataMember(Order=8)
    continue: string;

    // @DataMember(Order=9)
    nonce: string;

    // @DataMember(Order=10)
    uri: string;

    // @DataMember(Order=11)
    response: string;

    // @DataMember(Order=12)
    qop: string;

    // @DataMember(Order=13)
    nc: string;

    // @DataMember(Order=14)
    cnonce: string;

    // @DataMember(Order=15)
    useTokenCookie: boolean;

    // @DataMember(Order=16)
    accessToken: string;

    // @DataMember(Order=17)
    accessTokenSecret: string;

    // @DataMember(Order=18)
    meta: { [index:string]: string; };
    createResponse() { return new AuthenticateResponse(); }
    getTypeName() { return "Authenticate"; }
}

// @Route("/assignroles")
// @DataContract
export class AssignRoles implements IReturn<AssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    userName: string;

    // @DataMember(Order=2)
    permissions: string[];

    // @DataMember(Order=3)
    roles: string[];
    createResponse() { return new AssignRolesResponse(); }
    getTypeName() { return "AssignRoles"; }
}

// @Route("/unassignroles")
// @DataContract
export class UnAssignRoles implements IReturn<UnAssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    userName: string;

    // @DataMember(Order=2)
    permissions: string[];

    // @DataMember(Order=3)
    roles: string[];
    createResponse() { return new UnAssignRolesResponse(); }
    getTypeName() { return "UnAssignRoles"; }
}
