/* Options:
Date: 2016-07-14 01:56:45
Version: 4.00
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://test.servicestack.net

GlobalNamespace: testdtos
//ExportAsTypes: True
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


module testdtos
{

    export interface IReturnVoid
    {
    }

    export interface IReturn<T>
    {
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

    export const enum ExternalEnum
    {
        foo,
        bar,
        baz,
    }

    export class ExternalType
    {
        externalEnum2: string;
    }

    export const enum ExternalEnum3
    {
        un,
        deux,
        trois,
    }

    export class MetadataTestChild
    {
        name: string;
        results: MetadataTestNestedChild[];
    }

    // @DataContract
    export class MenuExample
    {
        // @DataMember(Order=1)
        // @ApiMember()
        menuItemExample1: MenuItemExample;
    }

    export class NestedClass
    {
        value: string;
    }

    export class ListResult
    {
        result: string;
    }

    export class ArrayResult
    {
        result: string;
    }

    export const enum EnumType
    {
        value1,
        value2,
    }

    // @Flags()
    export const enum EnumFlags
    {
        value1 = 1,
        value2 = 2,
        value3 = 4,
    }

    export class AllCollectionTypes
    {
        intArray: number[];
        intList: number[];
        stringArray: string[];
        stringList: string[];
        pocoArray: Poco[];
        pocoList: Poco[];
        pocoLookup: { [index:string]: Poco[]; };
        pocoLookupMap: { [index:string]: { [index:string]: Poco; }[]; };
    }

    export class SubType
    {
        id: number;
        name: string;
    }

    export class HelloBase
    {
        id: number;
    }

    export class HelloResponseBase
    {
        refId: number;
    }

    export class Poco
    {
        name: string;
    }

    export class HelloBase_1<T>
    {
        items: T[];
        counts: number[];
    }

    export class Item
    {
        value: string;
    }

    export class HelloWithReturnResponse
    {
        result: string;
    }

    export class HelloType
    {
        result: string;
    }

    export interface IPoco
    {
        name?: string;
    }

    export interface IEmptyInterface
    {
    }

    export class EmptyClass
    {
    }

    export class InnerType
    {
        id: number;
        name: string;
    }

    export const enum InnerEnum
    {
        foo,
        bar,
        baz,
    }

    export const enum DayOfWeek
    {
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
    }

    // @DataContract
    export const enum ScopeType
    {
        global = 1,
        sale = 2,
    }

    export class PingService
    {
    }

    export class CustomUserSession extends AuthUserSession
    {
        // @DataMember
        customName: string;

        // @DataMember
        customInfo: string;
    }

    export class UnAuthInfo
    {
        customInfo: string;
    }

    export class Logger
    {
        id: number;
        devices: Device[];
    }

    export class RequestLogEntry
    {
        id: number;
        dateTime: string;
        httpMethod: string;
        absoluteUri: string;
        pathInfo: string;
        requestBody: string;
        requestDto: Object;
        userAuthId: string;
        sessionId: string;
        ipAddress: string;
        forwardedFor: string;
        referer: string;
        headers: { [index:string]: string; };
        formData: { [index:string]: string; };
        items: { [index:string]: string; };
        session: Object;
        responseDto: Object;
        errorResponse: Object;
        requestDuration: string;
    }

    export class QueryBase_1<T> extends QueryBase
    {
    }

    export class OnlyDefinedInGenericType
    {
        id: number;
        name: string;
    }

    export class QueryBase_2<From, Into> extends QueryBase
    {
    }

    export class OnlyDefinedInGenericTypeFrom
    {
        id: number;
        name: string;
    }

    export class OnlyDefinedInGenericTypeInto
    {
        id: number;
        name: string;
    }

    export class Rockstar
    {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
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

    export const enum ExternalEnum2
    {
        uno,
        due,
        tre,
    }

    export class MetadataTestNestedChild
    {
        name: string;
    }

    export class MenuItemExample
    {
        // @DataMember(Order=1)
        // @ApiMember()
        name1: string;

        menuItemExampleItem: MenuItemExampleItem;
    }

    export class TypesGroup
    {
    }

    export interface IAuthTokens
    {
        provider?: string;
        userId?: string;
        accessToken?: string;
        accessTokenSecret?: string;
        refreshToken?: string;
        refreshTokenExpiry?: string;
        requestToken?: string;
        requestTokenSecret?: string;
        items?: { [index:string]: string; };
    }

    // @DataContract
    export class AuthUserSession
    {
        // @DataMember(Order=1)
        referrerUrl: string;

        // @DataMember(Order=2)
        id: string;

        // @DataMember(Order=3)
        userAuthId: string;

        // @DataMember(Order=4)
        userAuthName: string;

        // @DataMember(Order=5)
        userName: string;

        // @DataMember(Order=6)
        twitterUserId: string;

        // @DataMember(Order=7)
        twitterScreenName: string;

        // @DataMember(Order=8)
        facebookUserId: string;

        // @DataMember(Order=9)
        facebookUserName: string;

        // @DataMember(Order=10)
        firstName: string;

        // @DataMember(Order=11)
        lastName: string;

        // @DataMember(Order=12)
        displayName: string;

        // @DataMember(Order=13)
        company: string;

        // @DataMember(Order=14)
        email: string;

        // @DataMember(Order=15)
        primaryEmail: string;

        // @DataMember(Order=16)
        phoneNumber: string;

        // @DataMember(Order=17)
        birthDate: string;

        // @DataMember(Order=18)
        birthDateRaw: string;

        // @DataMember(Order=19)
        address: string;

        // @DataMember(Order=20)
        address2: string;

        // @DataMember(Order=21)
        city: string;

        // @DataMember(Order=22)
        state: string;

        // @DataMember(Order=23)
        country: string;

        // @DataMember(Order=24)
        culture: string;

        // @DataMember(Order=25)
        fullName: string;

        // @DataMember(Order=26)
        gender: string;

        // @DataMember(Order=27)
        language: string;

        // @DataMember(Order=28)
        mailAddress: string;

        // @DataMember(Order=29)
        nickname: string;

        // @DataMember(Order=30)
        postalCode: string;

        // @DataMember(Order=31)
        timeZone: string;

        // @DataMember(Order=32)
        requestTokenSecret: string;

        // @DataMember(Order=33)
        createdAt: string;

        // @DataMember(Order=34)
        lastModified: string;

        // @DataMember(Order=35)
        roles: string[];

        // @DataMember(Order=36)
        permissions: string[];

        // @DataMember(Order=37)
        isAuthenticated: boolean;

        // @DataMember(Order=38)
        sequence: string;

        // @DataMember(Order=39)
        tag: number;

        // @DataMember(Order=40)
        providerOAuthAccess: IAuthTokens[];
    }

    export class Device
    {
        id: number;
        type: string;
        timeStamp: number;
        channels: Channel[];
    }

    export class QueryBase
    {
        // @DataMember(Order=1)
        skip: number;

        // @DataMember(Order=2)
        take: number;

        // @DataMember(Order=3)
        orderBy: string;

        // @DataMember(Order=4)
        orderByDesc: string;

        // @DataMember(Order=5)
        include: string;

        // @DataMember(Order=6)
        fields: string;

        // @DataMember(Order=7)
        meta: { [index:string]: string; };
    }

    export class MenuItemExampleItem
    {
        // @DataMember(Order=1)
        // @ApiMember()
        name1: string;
    }

    export class Channel
    {
        name: string;
        value: string;
    }

    export class CustomHttpErrorResponse
    {
        custom: string;
        responseStatus: ResponseStatus;
    }

    export class ThrowTypeResponse
    {
        responseStatus: ResponseStatus;
    }

    export class ThrowValidationResponse
    {
        age: number;
        required: string;
        email: string;
        responseStatus: ResponseStatus;
    }

    export class ThrowBusinessErrorResponse
    {
        responseStatus: ResponseStatus;
    }

    export class ExternalOperationResponse
    {
        result: string;
    }

    export class ExternalOperation2Response
    {
        externalType: ExternalType;
    }

    export class ExternalReturnTypeResponse
    {
        externalEnum3: string;
    }

    export class Account
    {
        name: string;
    }

    export class Project
    {
        account: string;
        name: string;
    }

    export class MetadataTestResponse
    {
        id: number;
        results: MetadataTestChild[];
    }

    // @DataContract
    export class GetExampleResponse
    {
        // @DataMember(Order=1)
        responseStatus: ResponseStatus;

        // @DataMember(Order=2)
        // @ApiMember()
        menuExample1: MenuExample;
    }

    export class GetRandomIdsResponse
    {
        results: string[];
    }

    export class HelloResponse
    {
        result: string;
    }

    export class HelloAllTypesResponse
    {
        result: string;
        allTypes: AllTypes;
        allCollectionTypes: AllCollectionTypes;
    }

    export class HelloDateTime
    {
        dateTime: string;
    }

    // @DataContract
    export class HelloWithDataContractResponse
    {
        // @DataMember(Name="result", Order=1, IsRequired=true, EmitDefaultValue=false)
        result: string;
    }

    /**
    * Description on HelloWithDescriptionResponse type
    */
    export class HelloWithDescriptionResponse
    {
        result: string;
    }

    export class HelloWithInheritanceResponse extends HelloResponseBase
    {
        result: string;
    }

    export class HelloWithAlternateReturnResponse extends HelloWithReturnResponse
    {
        altResult: string;
    }

    export class HelloWithRouteResponse
    {
        result: string;
    }

    export class HelloWithTypeResponse
    {
        result: HelloType;
    }

    export class HelloInnerTypesResponse
    {
        innerType: InnerType;
        innerEnum: string;
    }

    export class HelloVerbResponse
    {
        result: string;
    }

    export class EnumResponse
    {
        operator: string;
    }

    export class PingResponse
    {
        responses: { [index:string]: ResponseStatus; };
        responseStatus: ResponseStatus;
    }

    export class RequiresRoleResponse
    {
        result: string;
        responseStatus: ResponseStatus;
    }

    export class SendVerbResponse
    {
        id: number;
        pathInfo: string;
        requestMethod: string;
    }

    export class GetSessionResponse
    {
        result: CustomUserSession;
        unAuthInfo: UnAuthInfo;
        responseStatus: ResponseStatus;
    }

    export class StoreLogsResponse
    {
        existingLogs: Logger[];
        responseStatus: ResponseStatus;
    }

    export class TestAuthResponse
    {
        userId: string;
        sessionId: string;
        userName: string;
        displayName: string;
        responseStatus: ResponseStatus;
    }

    // @Route("/wait/{ForMs}")
    export class Wait
    {
        forMs: number;
    }

    // @Route("/echo/types")
    export class EchoTypes
    {
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
    }

    // @Route("/echo/collections")
    export class EchoCollections
    {
        stringList: string[];
        stringArray: string[];
        stringMap: { [index:string]: string; };
        intStringMap: { [index:number]: string; };
    }

    export class EchoComplexTypes
    {
        subType: SubType;
    }

    // @DataContract
    export class RequestLogsResponse
    {
        // @DataMember(Order=1)
        results: RequestLogEntry[];

        // @DataMember(Order=2)
        usage: { [index:string]: string; };

        // @DataMember(Order=3)
        responseStatus: ResponseStatus;
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
        responseStatus: ResponseStatus;

        // @DataMember(Order=7)
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

    // @DataContract
    export class QueryResponse<T>
    {
        // @DataMember(Order=1)
        offset: number;

        // @DataMember(Order=2)
        total: number;

        // @DataMember(Order=3)
        results: T[];

        // @DataMember(Order=4)
        meta: { [index:string]: string; };

        // @DataMember(Order=5)
        responseStatus: ResponseStatus;
    }

    export class CustomHttpError implements IReturn<CustomHttpErrorResponse>
    {
        statusCode: number;
        statusDescription: string;
    }

    // @Route("/throwhttperror/{Status}")
    export class ThrowHttpError
    {
        status: number;
        message: string;
    }

    // @Route("/throw404")
    // @Route("/throw404/{Message}")
    export class Throw404
    {
        message: string;
    }

    // @Route("/throwcustom400")
    // @Route("/throwcustom400/{Message}")
    export class ThrowCustom400
    {
        message: string;
    }

    // @Route("/throw/{Type}")
    export class ThrowType implements IReturn<ThrowTypeResponse>
    {
        type: string;
        message: string;
    }

    // @Route("/throwvalidation")
    export class ThrowValidation implements IReturn<ThrowValidationResponse>
    {
        age: number;
        required: string;
        email: string;
    }

    // @Route("/throwbusinesserror")
    export class ThrowBusinessError implements IReturn<ThrowBusinessErrorResponse>
    {
    }

    export class ExternalOperation implements IReturn<ExternalOperationResponse>
    {
        id: number;
        name: string;
        externalEnum: string;
    }

    export class ExternalOperation2 implements IReturn<ExternalOperation2Response>
    {
        id: number;
    }

    export class ExternalOperation3 implements IReturn<ExternalReturnTypeResponse>
    {
        id: number;
    }

    export class ExternalOperation4
    {
        id: number;
    }

    // @Route("/{Path*}")
    export class RootPathRoutes
    {
        path: string;
    }

    export class GetAccount implements IReturn<Account>
    {
        account: string;
    }

    export class GetProject implements IReturn<Project>
    {
        account: string;
        project: string;
    }

    // @Route("/image-stream")
    export class ImageAsStream
    {
        format: string;
    }

    // @Route("/image-bytes")
    export class ImageAsBytes
    {
        format: string;
    }

    // @Route("/image-custom")
    export class ImageAsCustomResult
    {
        format: string;
    }

    // @Route("/image-response")
    export class ImageWriteToResponse
    {
        format: string;
    }

    // @Route("/image-file")
    export class ImageAsFile
    {
        format: string;
    }

    // @Route("/image-redirect")
    export class ImageAsRedirect
    {
        format: string;
    }

    // @Route("/image-draw/{Name}")
    export class DrawImage
    {
        name: string;
        format: string;
        width: number;
        height: number;
        fontSize: number;
        foreground: string;
        background: string;
    }

    // @Route("/metadatatest")
    export class MetadataTest implements IReturn<MetadataTestResponse>
    {
        id: number;
    }

    // @Route("/metadatatest-array")
    export class MetadataTestArray implements IReturn<Array<MetadataTestChild>>
    {
        id: number;
    }

    // @Route("/example", "GET")
    // @DataContract
    export class GetExample implements IReturn<GetExampleResponse>
    {
    }

    // @Route("/randomids")
    export class GetRandomIds implements IReturn<GetRandomIdsResponse>
    {
        take: number;
    }

    // @Route("/textfile-test")
    export class TextFileTest
    {
        asAttachment: boolean;
    }

    // @Route("/hello")
    // @Route("/hello/{Name}")
    export class Hello implements IReturn<HelloResponse>
    {
        // @Required()
        name: string;

        title: string;
    }

    export class HelloWithNestedClass implements IReturn<HelloResponse>
    {
        name: string;
        nestedClassProp: NestedClass;
    }

    export class HelloList implements IReturn<Array<ListResult>>
    {
        names: string[];
    }

    export class HelloArray implements IReturn<Array<ArrayResult>>
    {
        names: string[];
    }

    export class HelloWithEnum
    {
        enumProp: string;
        nullableEnumProp: EnumType;
        enumFlags: string;
    }

    export class HelloExternal
    {
        name: string;
    }

    /**
    * AllowedAttributes Description
    */
    // @Route("/allowed-attributes", "GET")
    // @Api("AllowedAttributes Description")
    // @ApiResponse(400, "Your request was not understood")
    // @DataContract
    export class AllowedAttributes
    {
        // @DataMember(Name="Aliased")
        // @ApiMember(ParameterType="path", Description="Range Description", DataType="double", IsRequired=true)
        range: number;
    }

    // @Route("/all-types")
    export class HelloAllTypes implements IReturn<HelloAllTypesResponse>
    {
        name: string;
        allTypes: AllTypes;
        allCollectionTypes: AllCollectionTypes;
    }

    export class AllTypes
    {
        id: number;
        nullableId: number;
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
        nullableDateTime: string;
        nullableTimeSpan: string;
        stringList: string[];
        stringArray: string[];
        stringMap: { [index:string]: string; };
        intStringMap: { [index:number]: string; };
        subType: SubType;
    }

    export class HelloString implements IReturn<string>
    {
        name: string;
    }

    export class HelloVoid
    {
        name: string;
    }

    // @DataContract
    export class HelloWithDataContract implements IReturn<HelloWithDataContractResponse>
    {
        // @DataMember(Name="name", Order=1, IsRequired=true, EmitDefaultValue=false)
        name: string;

        // @DataMember(Name="id", Order=2, EmitDefaultValue=false)
        id: number;
    }

    /**
    * Description on HelloWithDescription type
    */
    export class HelloWithDescription implements IReturn<HelloWithDescriptionResponse>
    {
        name: string;
    }

    export class HelloWithInheritance extends HelloBase implements IReturn<HelloWithInheritanceResponse>
    {
        name: string;
    }

    export class HelloWithGenericInheritance extends HelloBase_1<Poco>
    {
        result: string;
    }

    export class HelloWithGenericInheritance2 extends HelloBase_1<Hello>
    {
        result: string;
    }

    export class HelloWithNestedInheritance extends HelloBase_1<Item>
    {
    }

    export class HelloWithReturn implements IReturn<HelloWithAlternateReturnResponse>
    {
        name: string;
    }

    // @Route("/helloroute")
    export class HelloWithRoute implements IReturn<HelloWithRouteResponse>
    {
        name: string;
    }

    export class HelloWithType implements IReturn<HelloWithTypeResponse>
    {
        name: string;
    }

    export class HelloInterface
    {
        poco: IPoco;
        emptyInterface: IEmptyInterface;
        emptyClass: EmptyClass;
    }

    export class HelloInnerTypes implements IReturn<HelloInnerTypesResponse>
    {
    }

    export class HelloBuiltin
    {
        dayOfWeek: DayOfWeek;
    }

    export class HelloGet implements IReturn<HelloVerbResponse>
    {
        id: number;
    }

    export class HelloPost extends HelloBase implements IReturn<HelloVerbResponse>
    {
    }

    export class HelloPut implements IReturn<HelloVerbResponse>
    {
        id: number;
    }

    export class HelloDelete implements IReturn<HelloVerbResponse>
    {
        id: number;
    }

    export class HelloPatch implements IReturn<HelloVerbResponse>
    {
        id: number;
    }

    export class HelloReturnVoid implements IReturnVoid
    {
        id: number;
    }

    export class EnumRequest implements IReturn<EnumResponse>
    {
        operator: string;
    }

    // @Route("/ping")
    export class Ping implements IReturn<PingResponse>
    {
    }

    // @Route("/reset-connections")
    export class ResetConnections
    {
    }

    // @Route("/requires-role")
    export class RequiresRole implements IReturn<RequiresRoleResponse>
    {
    }

    export class SendDefault implements IReturn<SendVerbResponse>
    {
        id: number;
    }

    // @Route("/sendrestget/{Id}", "GET")
    export class SendRestGet implements IReturn<SendVerbResponse>
    {
        id: number;
    }

    export class SendGet implements IReturn<SendVerbResponse>
    {
        id: number;
    }

    export class SendPost implements IReturn<SendVerbResponse>
    {
        id: number;
    }

    export class SendPut implements IReturn<SendVerbResponse>
    {
        id: number;
    }

    // @Route("/session")
    export class GetSession implements IReturn<GetSessionResponse>
    {
    }

    // @Route("/session/edit/{CustomName}")
    export class UpdateSession implements IReturn<GetSessionResponse>
    {
        customName: string;
    }

    export class StoreLogs implements IReturn<StoreLogsResponse>
    {
        loggers: Logger[];
    }

    // @Route("/testauth")
    export class TestAuth implements IReturn<TestAuthResponse>
    {
    }

    // @Route("/void-response")
    export class TestVoidResponse
    {
    }

    // @Route("/null-response")
    export class TestNullResponse
    {
    }

    // @Route("/requestlogs")
    // @DataContract
    export class RequestLogs implements IReturn<RequestLogsResponse>
    {
        // @DataMember(Order=1)
        beforeSecs: number;

        // @DataMember(Order=2)
        afterSecs: number;

        // @DataMember(Order=3)
        ipAddress: string;

        // @DataMember(Order=4)
        forwardedFor: string;

        // @DataMember(Order=5)
        userAuthId: string;

        // @DataMember(Order=6)
        sessionId: string;

        // @DataMember(Order=7)
        referer: string;

        // @DataMember(Order=8)
        pathInfo: string;

        // @DataMember(Order=9)
        ids: number[];

        // @DataMember(Order=10)
        beforeId: number;

        // @DataMember(Order=11)
        afterId: number;

        // @DataMember(Order=12)
        hasResponse: boolean;

        // @DataMember(Order=13)
        withErrors: boolean;

        // @DataMember(Order=14)
        skip: number;

        // @DataMember(Order=15)
        take: number;

        // @DataMember(Order=16)
        enableSessionTracking: boolean;

        // @DataMember(Order=17)
        enableResponseTracking: boolean;

        // @DataMember(Order=18)
        enableErrorTracking: boolean;

        // @DataMember(Order=19)
        durationLongerThan: string;

        // @DataMember(Order=20)
        durationLessThan: string;
    }

    // @Route("/auth")
    // @Route("/auth/{provider}")
    // @Route("/authenticate")
    // @Route("/authenticate/{provider}")
    // @DataContract
    export class Authenticate implements IReturn<AuthenticateResponse>
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
        meta: { [index:string]: string; };
    }

    // @Route("/assignroles")
    // @DataContract
    export class AssignRoles implements IReturn<AssignRolesResponse>
    {
        // @DataMember(Order=1)
        userName: string;

        // @DataMember(Order=2)
        permissions: string[];

        // @DataMember(Order=3)
        roles: string[];
    }

    // @Route("/unassignroles")
    // @DataContract
    export class UnAssignRoles implements IReturn<UnAssignRolesResponse>
    {
        // @DataMember(Order=1)
        userName: string;

        // @DataMember(Order=2)
        permissions: string[];

        // @DataMember(Order=3)
        roles: string[];
    }

    export class QueryPocoBase extends QueryBase_1<OnlyDefinedInGenericType> implements IReturn<QueryResponse<OnlyDefinedInGenericType>>
    {
        id: number;
    }

    export class QueryPocoIntoBase extends QueryBase_2<OnlyDefinedInGenericTypeFrom, OnlyDefinedInGenericTypeInto> implements IReturn<QueryResponse<OnlyDefinedInGenericTypeInto>>
    {
        id: number;
    }

    // @Route("/rockstars")
    export class QueryRockstars extends QueryBase_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
    {
    }

}
