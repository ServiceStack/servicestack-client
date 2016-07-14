/* Options:
Date: 2016-07-14 17:36:13
Version: 4.00
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:55799

//GlobalNamespace: 
//ExportAsTypes: True
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturnVoid
{
}

export interface IReturn<T>
{
}

export class RequestLogEntry
{
    Id: number;
    DateTime: string;
    HttpMethod: string;
    AbsoluteUri: string;
    PathInfo: string;
    RequestBody: string;
    RequestDto: Object;
    UserAuthId: string;
    SessionId: string;
    IpAddress: string;
    ForwardedFor: string;
    Referer: string;
    Headers: { [index:string]: string; };
    FormData: { [index:string]: string; };
    Items: { [index:string]: string; };
    Session: Object;
    ResponseDto: Object;
    ErrorResponse: Object;
    RequestDuration: string;
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    ErrorCode: string;

    // @DataMember(Order=2)
    Message: string;

    // @DataMember(Order=3)
    StackTrace: string;

    // @DataMember(Order=4)
    Errors: ResponseError[];

    // @DataMember(Order=5)
    Meta: { [index:string]: string; };
}

export class Rockstar
{
    /**
    * Ð˜Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸ÐºÐ°Ñ‚Ð¾Ñ€
    */
    Id: number;
    /**
    * Ð¤Ð°Ð¼Ð¸Ð»Ð¸Ñ�
    */
    FirstName: string;
    /**
    * Ð˜Ð¼Ñ�
    */
    LastName: string;
    /**
    * Ð’Ð¾Ð·Ñ€Ð°Ñ�Ñ‚
    */
    Age: number;
}

export class ObjectDesign
{
    Id: number;
}

export class MetadataTestChild
{
    Name: string;
    Results: MetadataTestNestedChild[];
}

// @DataContract
export class MenuExample
{
    // @DataMember(Order=1)
    // @ApiMember()
    MenuItemExample1: MenuItemExample;
}

export class MetadataType
{
    Name: string;
    Namespace: string;
    GenericArgs: string[];
    Inherits: MetadataTypeName;
    Implements: MetadataTypeName[];
    DisplayType: string;
    Description: string;
    ReturnVoidMarker: boolean;
    IsNested: boolean;
    IsEnum: boolean;
    IsEnumInt: boolean;
    IsInterface: boolean;
    IsAbstract: boolean;
    ReturnMarkerTypeName: MetadataTypeName;
    Routes: MetadataRoute[];
    DataContract: MetadataDataContract;
    Properties: MetadataPropertyType[];
    Attributes: MetadataAttribute[];
    InnerTypes: MetadataTypeName[];
    EnumNames: string[];
    EnumValues: string[];
}

export class AutoQueryViewerConfig
{
    ServiceBaseUrl: string;
    ServiceName: string;
    ServiceDescription: string;
    ServiceIconUrl: string;
    Formats: string[];
    MaxLimit: number;
    IsPublic: boolean;
    OnlyShowAnnotatedServices: boolean;
    ImplicitConventions: AutoQueryConvention[];
    DefaultSearchField: string;
    DefaultSearchType: string;
    DefaultSearchText: string;
    BrandUrl: string;
    BrandImageUrl: string;
    TextColor: string;
    LinkColor: string;
    BackgroundColor: string;
    BackgroundImageUrl: string;
    IconUrl: string;
}

export class AutoQueryViewerUserInfo
{
    IsAuthenticated: boolean;
    QueryCount: number;
}

export class AutoQueryOperation
{
    Request: string;
    From: string;
    To: string;
}

export class Issue221Base<T>
{
    Id: T;
}

export class NativeTypesTestService
{
}

export class NestedClass
{
    Value: string;
}

export class ListResult
{
    Result: string;
}

export class OnlyInReturnListArg
{
    Result: string;
}

export class ArrayResult
{
    Result: string;
}

export type EnumType = "Value1" | "Value2";

export type EnumWithValues = "Value1" | "Value2";

// @Flags()
export enum EnumFlags
{
    Value1 = 1,
    Value2 = 2,
    Value3 = 4,
}

export class AllCollectionTypes
{
    IntArray: number[];
    IntList: number[];
    StringArray: string[];
    StringList: string[];
    PocoArray: Poco[];
    PocoList: Poco[];
    PocoLookup: { [index:string]: Poco[]; };
    PocoLookupMap: { [index:string]: { [index:string]: Poco; }[]; };
}

export class SubType
{
    Id: number;
    Name: string;
}

export class HelloBase
{
    Id: number;
}

export class HelloResponseBase
{
    RefId: number;
}

export class Poco
{
    Name: string;
}

export class HelloBase_1<T>
{
    Items: T[];
    Counts: number[];
}

export class Item
{
    Value: string;
}

export class InheritedItem
{
    Name: string;
}

export class HelloWithReturnResponse
{
    Result: string;
}

export class HelloType
{
    Result: string;
}

// @DataContract
export class AuthUserSession
{
    // @DataMember(Order=1)
    ReferrerUrl: string;

    // @DataMember(Order=2)
    Id: string;

    // @DataMember(Order=3)
    UserAuthId: string;

    // @DataMember(Order=4)
    UserAuthName: string;

    // @DataMember(Order=5)
    UserName: string;

    // @DataMember(Order=6)
    TwitterUserId: string;

    // @DataMember(Order=7)
    TwitterScreenName: string;

    // @DataMember(Order=8)
    FacebookUserId: string;

    // @DataMember(Order=9)
    FacebookUserName: string;

    // @DataMember(Order=10)
    FirstName: string;

    // @DataMember(Order=11)
    LastName: string;

    // @DataMember(Order=12)
    DisplayName: string;

    // @DataMember(Order=13)
    Company: string;

    // @DataMember(Order=14)
    Email: string;

    // @DataMember(Order=15)
    PrimaryEmail: string;

    // @DataMember(Order=16)
    PhoneNumber: string;

    // @DataMember(Order=17)
    BirthDate: string;

    // @DataMember(Order=18)
    BirthDateRaw: string;

    // @DataMember(Order=19)
    Address: string;

    // @DataMember(Order=20)
    Address2: string;

    // @DataMember(Order=21)
    City: string;

    // @DataMember(Order=22)
    State: string;

    // @DataMember(Order=23)
    Country: string;

    // @DataMember(Order=24)
    Culture: string;

    // @DataMember(Order=25)
    FullName: string;

    // @DataMember(Order=26)
    Gender: string;

    // @DataMember(Order=27)
    Language: string;

    // @DataMember(Order=28)
    MailAddress: string;

    // @DataMember(Order=29)
    Nickname: string;

    // @DataMember(Order=30)
    PostalCode: string;

    // @DataMember(Order=31)
    TimeZone: string;

    // @DataMember(Order=32)
    RequestTokenSecret: string;

    // @DataMember(Order=33)
    CreatedAt: string;

    // @DataMember(Order=34)
    LastModified: string;

    // @DataMember(Order=35)
    Roles: string[];

    // @DataMember(Order=36)
    Permissions: string[];

    // @DataMember(Order=37)
    IsAuthenticated: boolean;

    // @DataMember(Order=38)
    FromToken: boolean;

    // @DataMember(Order=39)
    ProfileUrl: string;

    // @DataMember(Order=40)
    Sequence: string;

    // @DataMember(Order=41)
    Tag: number;

    // @DataMember(Order=42)
    ProviderOAuthAccess: IAuthTokens[];
}

export interface IPoco
{
    Name?: string;
}

export interface IEmptyInterface
{
}

export class EmptyClass
{
}

export class TypeA
{
    Bar: TypeB[];
}

export class InnerType
{
    Id: number;
    Name: string;
}

export type InnerEnum = "Foo" | "Bar" | "Baz";

export interface IAuthTokens
{
    Provider?: string;
    UserId?: string;
    AccessToken?: string;
    AccessTokenSecret?: string;
    RefreshToken?: string;
    RefreshTokenExpiry?: string;
    RequestToken?: string;
    RequestTokenSecret?: string;
    Items?: { [index:string]: string; };
}

export type DayOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

// @DataContract
export type ScopeType = "Global" | "Sale";

export class CustomRockstar
{
    // @AutoQueryViewerField(Title="Name")
    FirstName: string;

    // @AutoQueryViewerField(HideInSummary=true)
    LastName: string;

    Age: number;
    // @AutoQueryViewerField(Title="Album")
    RockstarAlbumName: string;

    // @AutoQueryViewerField(Title="Genre")
    RockstarGenreName: string;
}

export class Movie
{
    Id: number;
    ImdbId: string;
    Title: string;
    Rating: string;
    Score: number;
    Director: string;
    ReleaseDate: string;
    TagLine: string;
    Genres: string[];
}

export class RockstarReference
{
    Id: number;
    FirstName: string;
    LastName: string;
    Age: number;
    Albums: RockstarAlbum[];
}

export class OnlyDefinedInGenericType
{
    Id: number;
    Name: string;
}

export class OnlyDefinedInGenericTypeFrom
{
    Id: number;
    Name: string;
}

export class OnlyDefinedInGenericTypeInto
{
    Id: number;
    Name: string;
}

export class QueryBase
{
    // @DataMember(Order=1)
    Skip: number;

    // @DataMember(Order=2)
    Take: number;

    // @DataMember(Order=3)
    OrderBy: string;

    // @DataMember(Order=4)
    OrderByDesc: string;

    // @DataMember(Order=5)
    Include: string;

    // @DataMember(Order=6)
    Fields: string;

    // @DataMember(Order=7)
    Meta: { [index:string]: string; };
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1, EmitDefaultValue=false)
    ErrorCode: string;

    // @DataMember(Order=2, EmitDefaultValue=false)
    FieldName: string;

    // @DataMember(Order=3, EmitDefaultValue=false)
    Message: string;

    // @DataMember(Order=4, EmitDefaultValue=false)
    Meta: { [index:string]: string; };
}

export class MetadataTestNestedChild
{
    Name: string;
}

export class MenuItemExample
{
    // @DataMember(Order=1)
    // @ApiMember()
    Name1: string;

    MenuItemExampleItem: MenuItemExampleItem;
}

export class MetadataTypeName
{
    Name: string;
    Namespace: string;
    GenericArgs: string[];
}

export class MetadataRoute
{
    Path: string;
    Verbs: string;
    Notes: string;
    Summary: string;
}

export class MetadataDataContract
{
    Name: string;
    Namespace: string;
}

export class MetadataPropertyType
{
    Name: string;
    Type: string;
    IsValueType: boolean;
    TypeNamespace: string;
    GenericArgs: string[];
    Value: string;
    Description: string;
    DataMember: MetadataDataMember;
    ReadOnly: boolean;
    ParamType: string;
    DisplayType: string;
    IsRequired: boolean;
    AllowableValues: string[];
    AllowableMin: number;
    AllowableMax: number;
    Attributes: MetadataAttribute[];
}

export class MetadataAttribute
{
    Name: string;
    ConstructorArgs: MetadataPropertyType[];
    Args: MetadataPropertyType[];
}

export class AutoQueryConvention
{
    Name: string;
    Value: string;
    Types: string;
}

export class TypeB
{
    Foo: string;
}

export class TypesGroup
{
}

export class RockstarAlbum
{
    Id: number;
    RockstarId: number;
    Name: string;
}

export class MenuItemExampleItem
{
    // @DataMember(Order=1)
    // @ApiMember()
    Name1: string;
}

export class MetadataDataMember
{
    Name: string;
    Order: number;
    IsRequired: boolean;
    EmitDefaultValue: boolean;
}

export class QueryData<T> extends QueryBase
{
}

export class QueryDb_1<T> extends QueryBase
{
}

export class PgRockstar extends Rockstar
{
}

export class QueryDb_2<From, Into> extends QueryBase
{
}

// @DataContract
export class QueryResponse<T>
{
    // @DataMember(Order=1)
    Offset: number;

    // @DataMember(Order=2)
    Total: number;

    // @DataMember(Order=3)
    Results: T[];

    // @DataMember(Order=4)
    Meta: { [index:string]: string; };

    // @DataMember(Order=5)
    ResponseStatus: ResponseStatus;
}

export class ChangeRequestResponse
{
    ContentType: string;
    Header: string;
    QueryString: string;
    Form: string;
    ResponseStatus: ResponseStatus;
}

export class CustomHttpErrorResponse
{
    Custom: string;
    ResponseStatus: ResponseStatus;
}

export class CustomFieldHttpErrorResponse
{
    Custom: string;
    ResponseStatus: ResponseStatus;
}

export class NoRepeatResponse
{
    Id: string;
}

export class BatchThrowsResponse
{
    Result: string;
    ResponseStatus: ResponseStatus;
}

export class ObjectDesignResponse
{
    data: ObjectDesign;
}

export class MetadataTestResponse
{
    Id: number;
    Results: MetadataTestChild[];
}

// @DataContract
export class GetExampleResponse
{
    // @DataMember(Order=1)
    ResponseStatus: ResponseStatus;

    // @DataMember(Order=2)
    // @ApiMember()
    MenuExample1: MenuExample;
}

export class AutoQueryMetadataResponse
{
    Config: AutoQueryViewerConfig;
    UserInfo: AutoQueryViewerUserInfo;
    Operations: AutoQueryOperation[];
    Types: MetadataType[];
    ResponseStatus: ResponseStatus;
}

// @DataContract
export class HelloACodeGenTestResponse
{
    /**
    * Description for FirstResult
    */
    // @DataMember
    FirstResult: number;

    /**
    * Description for SecondResult
    */
    // @DataMember
    // @ApiMember(Description="Description for SecondResult")
    SecondResult: number;
}

export class HelloResponse
{
    Result: string;
}

/**
* Description on HelloAllResponse type
*/
// @DataContract
export class HelloAnnotatedResponse
{
    // @DataMember
    Result: string;
}

export class HelloExistingResponse
{
    HelloList: HelloList;
    HelloArray: HelloArray;
    ArrayResults: ArrayResult[];
    ListResults: ListResult[];
}

export class HelloAllTypesResponse
{
    Result: string;
    AllTypes: AllTypes;
    AllCollectionTypes: AllCollectionTypes;
}

export class AllTypes
{
    Id: number;
    NullableId: number;
    Byte: number;
    Short: number;
    Int: number;
    Long: number;
    UShort: number;
    UInt: number;
    ULong: number;
    Float: number;
    Double: number;
    Decimal: number;
    String: string;
    DateTime: string;
    TimeSpan: string;
    DateTimeOffset: string;
    Guid: string;
    Char: string;
    NullableDateTime: string;
    NullableTimeSpan: string;
    StringList: string[];
    StringArray: string[];
    StringMap: { [index:string]: string; };
    IntStringMap: { [index:number]: string; };
    SubType: SubType;
    Point: string;
    // @DataMember(Name="aliasedName")
    OriginalName: string;
}

// @DataContract
export class HelloWithDataContractResponse
{
    // @DataMember(Name="result", Order=1, IsRequired=true, EmitDefaultValue=false)
    Result: string;
}

/**
* Description on HelloWithDescriptionResponse type
*/
export class HelloWithDescriptionResponse
{
    Result: string;
}

export class HelloWithInheritanceResponse extends HelloResponseBase
{
    Result: string;
}

export class HelloWithAlternateReturnResponse extends HelloWithReturnResponse
{
    AltResult: string;
}

export class HelloWithRouteResponse
{
    Result: string;
}

export class HelloWithTypeResponse
{
    Result: HelloType;
}

export class HelloStruct
{
    Point: string;
}

export class HelloSessionResponse
{
    Result: AuthUserSession;
}

export class Request1Response
{
    Test: TypeA;
}

export class Request2Response
{
    Test: TypeA;
}

export class HelloInnerTypesResponse
{
    InnerType: InnerType;
    InnerEnum: InnerEnum;
}

export class CustomUserSession extends AuthUserSession
{
    // @DataMember
    CustomName: string;

    // @DataMember
    CustomInfo: string;
}

// @DataContract
export class QueryResponseTemplate<T>
{
    // @DataMember(Order=1)
    Offset: number;

    // @DataMember(Order=2)
    Total: number;

    // @DataMember(Order=3)
    Results: T[];

    // @DataMember(Order=4)
    Meta: { [index:string]: string; };

    // @DataMember(Order=5)
    ResponseStatus: ResponseStatus;
}

export class HelloVerbResponse
{
    Result: string;
}

export class EnumResponse
{
    Operator: ScopeType;
}

export class ExcludeTestNested
{
    Id: number;
}

export class RestrictLocalhost
{
    Id: number;
}

export class RestrictInternal
{
    Id: number;
}

export class Echo
{
    Sentence: string;
}

export class ThrowHttpErrorResponse
{
}

export class ThrowTypeResponse
{
    ResponseStatus: ResponseStatus;
}

export class acsprofileResponse
{
    profileId: string;
}

export class TimestampData
{
    Timestamp: number;
}

// @DataContract
export class RequestLogsResponse
{
    // @DataMember(Order=1)
    Results: RequestLogEntry[];

    // @DataMember(Order=2)
    Usage: { [index:string]: string; };

    // @DataMember(Order=3)
    ResponseStatus: ResponseStatus;
}

// @Route("/anontype")
export class AnonType
{
}

// @Route("/query/requestlogs")
// @Route("/query/requestlogs/{Date}")
export class QueryRequestLogs extends QueryData<RequestLogEntry> implements IReturn<QueryResponse<RequestLogEntry>>
{
    Date: string;
    ViewErrors: boolean;
    createResponse() { return new QueryResponse<RequestLogEntry>(); }
    getTypeName() { return "QueryRequestLogs"; }
}

export class TodayLogs extends QueryData<RequestLogEntry> implements IReturn<QueryResponse<RequestLogEntry>>
{
    createResponse() { return new QueryResponse<RequestLogEntry>(); }
    getTypeName() { return "TodayLogs"; }
}

export class TodayErrorLogs extends QueryData<RequestLogEntry> implements IReturn<QueryResponse<RequestLogEntry>>
{
    createResponse() { return new QueryResponse<RequestLogEntry>(); }
    getTypeName() { return "TodayErrorLogs"; }
}

export class YesterdayLogs extends QueryData<RequestLogEntry> implements IReturn<QueryResponse<RequestLogEntry>>
{
    createResponse() { return new QueryResponse<RequestLogEntry>(); }
    getTypeName() { return "YesterdayLogs"; }
}

export class YesterdayErrorLogs extends QueryData<RequestLogEntry> implements IReturn<QueryResponse<RequestLogEntry>>
{
    createResponse() { return new QueryResponse<RequestLogEntry>(); }
    getTypeName() { return "YesterdayErrorLogs"; }
}

// @Route("/query/rockstars")
export class QueryRockstars extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    Age: number;
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryRockstars"; }
}

// @Route("/changerequest/{Id}")
export class ChangeRequest implements IReturn<ChangeRequestResponse>
{
    Id: string;
    createResponse() { return new ChangeRequestResponse(); }
    getTypeName() { return "ChangeRequest"; }
}

// @Route("/Routing/LeadPost.aspx")
export class LegacyLeadPost
{
    LeadType: string;
    MyId: number;
}

// @Route("/info/{Id}")
export class Info
{
    Id: string;
}

export class CustomHttpError implements IReturn<CustomHttpErrorResponse>
{
    StatusCode: number;
    StatusDescription: string;
    createResponse() { return new CustomHttpErrorResponse(); }
    getTypeName() { return "CustomHttpError"; }
}

export class CustomFieldHttpError implements IReturn<CustomFieldHttpErrorResponse>
{
    createResponse() { return new CustomFieldHttpErrorResponse(); }
    getTypeName() { return "CustomFieldHttpError"; }
}

// @Route("{PathInfo*}")
export class FallbackRoute
{
    PathInfo: string;
}

export class NoRepeat implements IReturn<NoRepeatResponse>
{
    Id: string;
    createResponse() { return new NoRepeatResponse(); }
    getTypeName() { return "NoRepeat"; }
}

export class BatchThrows implements IReturn<BatchThrowsResponse>
{
    Id: number;
    Name: string;
    createResponse() { return new BatchThrowsResponse(); }
    getTypeName() { return "BatchThrows"; }
}

export class BatchThrowsAsync implements IReturn<BatchThrowsResponse>
{
    Id: number;
    Name: string;
    createResponse() { return new BatchThrowsResponse(); }
    getTypeName() { return "BatchThrowsAsync"; }
}

// @Route("/code/object", "GET")
export class ObjectId implements IReturn<ObjectDesignResponse>
{
    objectName: string;
    createResponse() { return new ObjectDesignResponse(); }
    getTypeName() { return "ObjectId"; }
}

export class MetadataTest implements IReturn<MetadataTestResponse>
{
    Id: number;
    createResponse() { return new MetadataTestResponse(); }
    getTypeName() { return "MetadataTest"; }
}

// @Route("/example", "GET")
// @DataContract
export class GetExample implements IReturn<GetExampleResponse>
{
    createResponse() { return new GetExampleResponse(); }
    getTypeName() { return "GetExample"; }
}

export class MetadataRequest implements IReturn<AutoQueryMetadataResponse>
{
    MetadataType: MetadataType;
    createResponse() { return new AutoQueryMetadataResponse(); }
    getTypeName() { return "MetadataRequest"; }
}

// @Route("/namedconnection")
export class NamedConnection
{
    EmailAddresses: string;
}

export class Issue221Long extends Issue221Base<number>
{
}

/**
* Description for HelloACodeGenTest
*/
export class HelloACodeGenTest implements IReturn<HelloACodeGenTestResponse>
{
    /**
    * Description for FirstField
    */
    FirstField: number;
    SecondFields: string[];
    createResponse() { return new HelloACodeGenTestResponse(); }
    getTypeName() { return "HelloACodeGenTest"; }
}

export class HelloInService implements IReturn<HelloResponse>
{
    Name: string;
    createResponse() { return new HelloResponse(); }
    getTypeName() { return "NativeTypesTestService.HelloInService"; }
}

// @Route("/hello")
// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse>
{
    // @Required()
    Name: string;

    Title: string;
    createResponse() { return new HelloResponse(); }
    getTypeName() { return "Hello"; }
}

/**
* Description on HelloAll type
*/
// @DataContract
export class HelloAnnotated implements IReturn<HelloAnnotatedResponse>
{
    // @DataMember
    Name: string;
    createResponse() { return new HelloAnnotatedResponse(); }
    getTypeName() { return "HelloAnnotated"; }
}

export class HelloWithNestedClass implements IReturn<HelloResponse>
{
    Name: string;
    NestedClassProp: NestedClass;
    createResponse() { return new HelloResponse(); }
    getTypeName() { return "HelloWithNestedClass"; }
}

export class HelloList implements IReturn<Array<ListResult>>
{
    Names: string[];
    createResponse() { return new Array<ListResult>(); }
    getTypeName() { return "HelloList"; }
}

export class HelloReturnList implements IReturn<Array<OnlyInReturnListArg>>
{
    Names: string[];
    createResponse() { return new Array<OnlyInReturnListArg>(); }
    getTypeName() { return "HelloReturnList"; }
}

export class HelloArray implements IReturn<Array<ArrayResult>>
{
    Names: string[];
    createResponse() { return new Array<ArrayResult>(); }
    getTypeName() { return "HelloArray"; }
}

export class HelloExisting implements IReturn<HelloExistingResponse>
{
    Names: string[];
    createResponse() { return new HelloExistingResponse(); }
    getTypeName() { return "HelloExisting"; }
}

export class HelloWithEnum
{
    EnumProp: EnumType;
    EnumWithValues: EnumWithValues;
    NullableEnumProp: EnumType;
    EnumFlags: EnumFlags;
}

export class RestrictedAttributes
{
    Id: number;
    Name: string;
    Hello: Hello;
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
    // @DataMember
    // @Required()
    Id: number;

    /**
    * Range Description
    */
    // @DataMember(Name="Aliased")
    // @ApiMember(ParameterType="path", Description="Range Description", DataType="double", IsRequired=true)
    Range: number;
}

/**
* Multi Line Class
*/
// @Api("Multi Line Class")
export class HelloMultiline
{
    /**
    * Multi Line Property
    */
    // @ApiMember(Description="Multi Line Property")
    Overflow: string;
}

export class HelloAllTypes implements IReturn<HelloAllTypesResponse>
{
    Name: string;
    AllTypes: AllTypes;
    AllCollectionTypes: AllCollectionTypes;
    createResponse() { return new HelloAllTypesResponse(); }
    getTypeName() { return "HelloAllTypes"; }
}

export class HelloString implements IReturn<string>
{
    Name: string;
    createResponse() { return ""; }
    getTypeName() { return "HelloString"; }
}

export class HelloVoid implements IReturnVoid
{
    Name: string;
    createResponse() {}
    getTypeName() { return "HelloVoid"; }
}

// @DataContract
export class HelloWithDataContract implements IReturn<HelloWithDataContractResponse>
{
    // @DataMember(Name="name", Order=1, IsRequired=true, EmitDefaultValue=false)
    Name: string;

    // @DataMember(Name="id", Order=2, EmitDefaultValue=false)
    Id: number;
    createResponse() { return new HelloWithDataContractResponse(); }
    getTypeName() { return "HelloWithDataContract"; }
}

/**
* Description on HelloWithDescription type
*/
export class HelloWithDescription implements IReturn<HelloWithDescriptionResponse>
{
    Name: string;
    createResponse() { return new HelloWithDescriptionResponse(); }
    getTypeName() { return "HelloWithDescription"; }
}

export class HelloWithInheritance extends HelloBase implements IReturn<HelloWithInheritanceResponse>
{
    Name: string;
    createResponse() { return new HelloWithInheritanceResponse(); }
    getTypeName() { return "HelloWithInheritance"; }
}

export class HelloWithGenericInheritance extends HelloBase_1<Poco>
{
    Result: string;
}

export class HelloWithGenericInheritance2 extends HelloBase_1<Hello>
{
    Result: string;
}

export class HelloWithNestedInheritance extends HelloBase_1<Item>
{
}

export class HelloWithListInheritance extends Array<InheritedItem>
{
}

export class HelloWithReturn implements IReturn<HelloWithAlternateReturnResponse>
{
    Name: string;
    createResponse() { return new HelloWithAlternateReturnResponse(); }
    getTypeName() { return "HelloWithReturn"; }
}

// @Route("/helloroute")
export class HelloWithRoute implements IReturn<HelloWithRouteResponse>
{
    Name: string;
    createResponse() { return new HelloWithRouteResponse(); }
    getTypeName() { return "HelloWithRoute"; }
}

export class HelloWithType implements IReturn<HelloWithTypeResponse>
{
    Name: string;
    createResponse() { return new HelloWithTypeResponse(); }
    getTypeName() { return "HelloWithType"; }
}

export class HelloSession implements IReturn<HelloSessionResponse>
{
    createResponse() { return new HelloSessionResponse(); }
    getTypeName() { return "HelloSession"; }
}

export class HelloInterface
{
    Poco: IPoco;
    EmptyInterface: IEmptyInterface;
    EmptyClass: EmptyClass;
    Value: string;
}

export class Request1 implements IReturn<Request1Response>
{
    Test: TypeA;
    createResponse() { return new Request1Response(); }
    getTypeName() { return "Request1"; }
}

export class Request2 implements IReturn<Request2Response>
{
    Test: TypeA;
    createResponse() { return new Request2Response(); }
    getTypeName() { return "Request2"; }
}

export class HelloInnerTypes implements IReturn<HelloInnerTypesResponse>
{
    createResponse() { return new HelloInnerTypesResponse(); }
    getTypeName() { return "HelloInnerTypes"; }
}

export class GetUserSession implements IReturn<CustomUserSession>
{
    createResponse() { return new CustomUserSession(); }
    getTypeName() { return "GetUserSession"; }
}

export class QueryTemplate implements IReturn<QueryResponseTemplate<Poco>>
{
    createResponse() { return new QueryResponseTemplate<Poco>(); }
    getTypeName() { return "QueryTemplate"; }
}

export class HelloReserved
{
    Class: string;
    Type: string;
    extension: string;
}

export class HelloDictionary implements IReturn<any>
{
    Key: string;
    Value: string;
    createResponse() { return new Object(); }
    getTypeName() { return "HelloDictionary"; }
}

export class HelloBuiltin
{
    DayOfWeek: DayOfWeek;
}

export class HelloGet implements IReturn<HelloVerbResponse>
{
    Id: number;
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloGet"; }
}

export class HelloPost extends HelloBase implements IReturn<HelloVerbResponse>
{
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloPost"; }
}

export class HelloPut implements IReturn<HelloVerbResponse>
{
    Id: number;
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloPut"; }
}

export class HelloDelete implements IReturn<HelloVerbResponse>
{
    Id: number;
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloDelete"; }
}

export class HelloPatch implements IReturn<HelloVerbResponse>
{
    Id: number;
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloPatch"; }
}

export class HelloReturnVoid implements IReturnVoid
{
    Id: number;
    createResponse() {}
    getTypeName() { return "HelloReturnVoid"; }
}

export class EnumRequest implements IReturn<EnumResponse>
{
    Operator: ScopeType;
    createResponse() { return new EnumResponse(); }
    getTypeName() { return "EnumRequest"; }
}

export class ExcludeTest1 implements IReturn<ExcludeTestNested>
{
    createResponse() { return new ExcludeTestNested(); }
    getTypeName() { return "ExcludeTest1"; }
}

export class ExcludeTest2 implements IReturn<string>
{
    ExcludeTestNested: ExcludeTestNested;
    createResponse() { return ""; }
    getTypeName() { return "ExcludeTest2"; }
}

/**
* Echoes a sentence
*/
// @Route("/echoes", "POST")
// @Api("Echoes a sentence")
export class Echoes implements IReturn<Echo>
{
    /**
    * The sentence to echo.
    */
    // @ApiMember(ParameterType="form", Name="Sentence", Description="The sentence to echo.", DataType="string", IsRequired=true)
    Sentence: string;
    createResponse() { return new Echo(); }
    getTypeName() { return "Echoes"; }
}

export class CachedEcho
{
    Reload: boolean;
    Sentence: string;
}

export class AsyncTest implements IReturn<Echo>
{
    createResponse() { return new Echo(); }
    getTypeName() { return "AsyncTest"; }
}

// @Route("/throwhttperror/{Status}")
export class ThrowHttpError implements IReturn<ThrowHttpErrorResponse>
{
    Status: number;
    Message: string;
    createResponse() { return new ThrowHttpErrorResponse(); }
    getTypeName() { return "ThrowHttpError"; }
}

// @Route("/throw404")
// @Route("/throw404/{Message}")
export class Throw404
{
    Message: string;
}

// @Route("/return404")
export class Return404
{
}

// @Route("/return404result")
export class Return404Result
{
}

// @Route("/throw/{Type}")
export class ThrowType implements IReturn<ThrowTypeResponse>
{
    Type: string;
    Message: string;
    createResponse() { return new ThrowTypeResponse(); }
    getTypeName() { return "ThrowType"; }
}

// @Route("/api/acsprofiles", "POST,PUT,PATCH,DELETE")
// @Route("/api/acsprofiles/{profileId}")
export class ACSProfile implements IReturn<acsprofileResponse>
{
    profileId: string;
    // @Required()
    // @StringLength(20)
    shortName: string;

    // @StringLength(60)
    longName: string;

    // @StringLength(20)
    regionId: string;

    // @StringLength(20)
    groupId: string;

    // @StringLength(12)
    deviceID: string;

    lastUpdated: string;
    enabled: boolean;
    Version: number;
    SessionId: string;
    createResponse() { return new acsprofileResponse(); }
    getTypeName() { return "ACSProfile"; }
}

// @Route("/test/errorview")
export class TestErrorView
{
    Id: string;
}

// @Route("/timestamp", "GET")
export class GetTimestamp implements IReturn<TimestampData>
{
    createResponse() { return new TimestampData(); }
    getTypeName() { return "GetTimestamp"; }
}

export class TestMiniverView
{
}

// @Route("/testexecproc")
export class TestExecProc
{
}

// @Route("/files/{Path*}")
export class GetFile
{
    Path: string;
}

// @Route("/requestlogs")
// @DataContract
export class RequestLogs implements IReturn<RequestLogsResponse>
{
    // @DataMember(Order=1)
    BeforeSecs: number;

    // @DataMember(Order=2)
    AfterSecs: number;

    // @DataMember(Order=3)
    IpAddress: string;

    // @DataMember(Order=4)
    ForwardedFor: string;

    // @DataMember(Order=5)
    UserAuthId: string;

    // @DataMember(Order=6)
    SessionId: string;

    // @DataMember(Order=7)
    Referer: string;

    // @DataMember(Order=8)
    PathInfo: string;

    // @DataMember(Order=9)
    Ids: number[];

    // @DataMember(Order=10)
    BeforeId: number;

    // @DataMember(Order=11)
    AfterId: number;

    // @DataMember(Order=12)
    HasResponse: boolean;

    // @DataMember(Order=13)
    WithErrors: boolean;

    // @DataMember(Order=14)
    Skip: number;

    // @DataMember(Order=15)
    Take: number;

    // @DataMember(Order=16)
    EnableSessionTracking: boolean;

    // @DataMember(Order=17)
    EnableResponseTracking: boolean;

    // @DataMember(Order=18)
    EnableErrorTracking: boolean;

    // @DataMember(Order=19)
    DurationLongerThan: string;

    // @DataMember(Order=20)
    DurationLessThan: string;
    createResponse() { return new RequestLogsResponse(); }
    getTypeName() { return "RequestLogs"; }
}

// @Route("/dynamically/registered/{Name}")
export class DynamicallyRegistered
{
    Name: string;
}

// @Route("/pgsql/rockstars")
export class QueryPostgresRockstars extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    Age: number;
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryPostgresRockstars"; }
}

// @Route("/pgsql/pgrockstars")
export class QueryPostgresPgRockstars extends QueryDb_1<PgRockstar> implements IReturn<QueryResponse<PgRockstar>>
{
    Age: number;
    createResponse() { return new QueryResponse<PgRockstar>(); }
    getTypeName() { return "QueryPostgresPgRockstars"; }
}

export class QueryRockstarsConventions extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    Ids: number[];
    AgeOlderThan: number;
    AgeGreaterThanOrEqualTo: number;
    AgeGreaterThan: number;
    GreaterThanAge: number;
    FirstNameStartsWith: string;
    LastNameEndsWith: string;
    LastNameContains: string;
    RockstarAlbumNameContains: string;
    RockstarIdAfter: number;
    RockstarIdOnOrAfter: number;
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryRockstarsConventions"; }
}

// @AutoQueryViewer(Title="Search for Rockstars", Description="Use this option to search for Rockstars!")
export class QueryCustomRockstars extends QueryDb_2<Rockstar, CustomRockstar> implements IReturn<QueryResponse<CustomRockstar>>
{
    Age: number;
    createResponse() { return new QueryResponse<CustomRockstar>(); }
    getTypeName() { return "QueryCustomRockstars"; }
}

// @Route("/customrockstars")
export class QueryRockstarAlbums extends QueryDb_2<Rockstar, CustomRockstar> implements IReturn<QueryResponse<CustomRockstar>>
{
    Age: number;
    RockstarAlbumName: string;
    createResponse() { return new QueryResponse<CustomRockstar>(); }
    getTypeName() { return "QueryRockstarAlbums"; }
}

export class QueryRockstarAlbumsImplicit extends QueryDb_2<Rockstar, CustomRockstar> implements IReturn<QueryResponse<CustomRockstar>>
{
    createResponse() { return new QueryResponse<CustomRockstar>(); }
    getTypeName() { return "QueryRockstarAlbumsImplicit"; }
}

export class QueryRockstarAlbumsLeftJoin extends QueryDb_2<Rockstar, CustomRockstar> implements IReturn<QueryResponse<CustomRockstar>>
{
    Age: number;
    AlbumName: string;
    createResponse() { return new QueryResponse<CustomRockstar>(); }
    getTypeName() { return "QueryRockstarAlbumsLeftJoin"; }
}

export class QueryOverridedRockstars extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    Age: number;
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryOverridedRockstars"; }
}

export class QueryOverridedCustomRockstars extends QueryDb_2<Rockstar, CustomRockstar> implements IReturn<QueryResponse<CustomRockstar>>
{
    Age: number;
    createResponse() { return new QueryResponse<CustomRockstar>(); }
    getTypeName() { return "QueryOverridedCustomRockstars"; }
}

export class QueryFieldRockstars extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    FirstName: string;
    FirstNames: string[];
    Age: number;
    FirstNameCaseInsensitive: string;
    FirstNameStartsWith: string;
    LastNameEndsWith: string;
    FirstNameBetween: string[];
    OrLastName: string;
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryFieldRockstars"; }
}

export class QueryFieldRockstarsDynamic extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    Age: number;
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryFieldRockstarsDynamic"; }
}

export class QueryRockstarsFilter extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    Age: number;
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryRockstarsFilter"; }
}

export class QueryCustomRockstarsFilter extends QueryDb_2<Rockstar, CustomRockstar> implements IReturn<QueryResponse<CustomRockstar>>
{
    Age: number;
    createResponse() { return new QueryResponse<CustomRockstar>(); }
    getTypeName() { return "QueryCustomRockstarsFilter"; }
}

export class QueryRockstarsIFilter extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    Age: number;
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryRockstarsIFilter"; }
}

// @Route("/OrRockstars")
export class QueryOrRockstars extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    Age: number;
    FirstName: string;
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryOrRockstars"; }
}

export class QueryGetRockstars extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    Ids: number[];
    Ages: number[];
    FirstNames: string[];
    IdsBetween: number[];
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryGetRockstars"; }
}

export class QueryGetRockstarsDynamic extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryGetRockstarsDynamic"; }
}

// @Route("/movies/search")
export class SearchMovies extends QueryDb_1<Movie> implements IReturn<QueryResponse<Movie>>
{
    createResponse() { return new QueryResponse<Movie>(); }
    getTypeName() { return "SearchMovies"; }
}

// @Route("/movies")
export class QueryMovies extends QueryDb_1<Movie> implements IReturn<QueryResponse<Movie>>
{
    Ids: number[];
    ImdbIds: string[];
    Ratings: string[];
    createResponse() { return new QueryResponse<Movie>(); }
    getTypeName() { return "QueryMovies"; }
}

export class StreamMovies extends QueryDb_1<Movie> implements IReturn<QueryResponse<Movie>>
{
    Ratings: string[];
    createResponse() { return new QueryResponse<Movie>(); }
    getTypeName() { return "StreamMovies"; }
}

export class QueryUnknownRockstars extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    UnknownInt: number;
    UnknownProperty: string;
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryUnknownRockstars"; }
}

// @Route("/query/rockstar-references")
export class QueryRockstarsWithReferences extends QueryDb_1<RockstarReference> implements IReturn<QueryResponse<RockstarReference>>
{
    Age: number;
    createResponse() { return new QueryResponse<RockstarReference>(); }
    getTypeName() { return "QueryRockstarsWithReferences"; }
}

export class QueryPocoBase extends QueryDb_1<OnlyDefinedInGenericType> implements IReturn<QueryResponse<OnlyDefinedInGenericType>>
{
    Id: number;
    createResponse() { return new QueryResponse<OnlyDefinedInGenericType>(); }
    getTypeName() { return "QueryPocoBase"; }
}

export class QueryPocoIntoBase extends QueryDb_2<OnlyDefinedInGenericTypeFrom, OnlyDefinedInGenericTypeInto> implements IReturn<QueryResponse<OnlyDefinedInGenericTypeInto>>
{
    Id: number;
    createResponse() { return new QueryResponse<OnlyDefinedInGenericTypeInto>(); }
    getTypeName() { return "QueryPocoIntoBase"; }
}

// @Route("/querydata/rockstars")
export class QueryDataRockstars extends QueryData<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    Age: number;
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryDataRockstars"; }
}
