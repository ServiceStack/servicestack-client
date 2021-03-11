/* Options:
Date: 2021-03-11 06:06:51
Version: 5.105
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://test.servicestack.net

//GlobalNamespace: 
//MakePropertiesOptional: False
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
    createResponse(): T;
}

export interface IReturnVoid
{
    createResponse(): void;
}

export interface ICreateDb<Table>
{
}

export interface IUpdateDb<Table>
{
}

export interface IPatchDb<Table>
{
}

export interface IHasSessionId
{
    sessionId: string;
}

export interface IHasBearerToken
{
    bearerToken: string;
}

export interface IGet
{
}

export interface IPost
{
}

export interface IPut
{
}

export interface IDelete
{
}

export interface IPatch
{
}

export interface IDeleteDb<Table>
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

export class CustomType
{
    public id: number;
    public name: string;

    public constructor(init?: Partial<CustomType>) { (Object as any).assign(this, init); }
}

export class SetterType
{
    public id: number;
    public name: string;

    public constructor(init?: Partial<SetterType>) { (Object as any).assign(this, init); }
}

export class Item
{
    public name: string;
    public description: string;

    public constructor(init?: Partial<Item>) { (Object as any).assign(this, init); }
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

export class MetadataTestNestedChild
{
    public name: string;

    public constructor(init?: Partial<MetadataTestNestedChild>) { (Object as any).assign(this, init); }
}

export class MetadataTestChild
{
    public name: string;
    public results: MetadataTestNestedChild[];

    public constructor(init?: Partial<MetadataTestChild>) { (Object as any).assign(this, init); }
}

export class MenuItemExampleItem
{
    // @DataMember(Order=1)
    // @ApiMember()
    public name1: string;

    public constructor(init?: Partial<MenuItemExampleItem>) { (Object as any).assign(this, init); }
}

export class MenuItemExample
{
    // @DataMember(Order=1)
    // @ApiMember()
    public name1: string;

    public menuItemExampleItem: MenuItemExampleItem;

    public constructor(init?: Partial<MenuItemExample>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MenuExample
{
    // @DataMember(Order=1)
    // @ApiMember()
    public menuItemExample1: MenuItemExample;

    public constructor(init?: Partial<MenuExample>) { (Object as any).assign(this, init); }
}

export class NestedClass
{
    public value: string;

    public constructor(init?: Partial<NestedClass>) { (Object as any).assign(this, init); }
}

export class ListResult
{
    public result: string;

    public constructor(init?: Partial<ListResult>) { (Object as any).assign(this, init); }
}

export class ArrayResult
{
    public result: string;

    public constructor(init?: Partial<ArrayResult>) { (Object as any).assign(this, init); }
}

export enum EnumType
{
    Value1 = 'Value1',
    Value2 = 'Value2',
    Value3 = 'Value3',
}

// @Flags()
export enum EnumTypeFlags
{
    Value1 = 0,
    Value2 = 1,
    Value3 = 2,
}

export enum EnumWithValues
{
    None = 'None',
    Value1 = 'Member 1',
    Value2 = 'Value2',
}

// @Flags()
export enum EnumFlags
{
    Value0 = 'Value0',
    Value1 = 'Value 1',
    Value2 = 'Value2',
    Value3 = 'Value3',
    Value123 = 'Value123',
}

export enum EnumAsInt
{
    Value1 = 1000,
    Value2 = 2000,
    Value3 = 3000,
}

export enum EnumStyle
{
    lower = 'lower',
    UPPER = 'UPPER',
    PascalCase = 'PascalCase',
    camelCase = 'camelCase',
    camelUPPER = 'camelUPPER',
    PascalUPPER = 'PascalUPPER',
}

export enum EnumStyleMembers
{
    Lower = 'lower',
    Upper = 'UPPER',
    PascalCase = 'PascalCase',
    CamelCase = 'camelCase',
    CamelUpper = 'camelUPPER',
    PascalUpper = 'PascalUPPER',
}

export class KeyValuePair<TKey, TValue>
{
    public key: TKey;
    public value: TValue;

    public constructor(init?: Partial<KeyValuePair<TKey, TValue>>) { (Object as any).assign(this, init); }
}

export class SubType
{
    public id: number;
    public name: string;

    public constructor(init?: Partial<SubType>) { (Object as any).assign(this, init); }
}

export class AllTypesBase
{
    public id: number;
    public nullableId?: number;
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
    public keyValuePair: KeyValuePair<string, string>;
    public nullableDateTime?: string;
    public nullableTimeSpan?: string;
    public stringList: string[];
    public stringArray: string[];
    public stringMap: { [index: string]: string; };
    public intStringMap: { [index: number]: string; };
    public subType: SubType;

    public constructor(init?: Partial<AllTypesBase>) { (Object as any).assign(this, init); }
}

export class Poco
{
    public name: string;

    public constructor(init?: Partial<Poco>) { (Object as any).assign(this, init); }
}

export class HelloBase
{
    public id: number;

    public constructor(init?: Partial<HelloBase>) { (Object as any).assign(this, init); }
}

export class HelloResponseBase
{
    public refId: number;

    public constructor(init?: Partial<HelloResponseBase>) { (Object as any).assign(this, init); }
}

export class HelloBase_1<T>
{
    public items: T[];
    public counts: number[];

    public constructor(init?: Partial<HelloBase_1<T>>) { (Object as any).assign(this, init); }
}

export class HelloWithReturnResponse
{
    public result: string;

    public constructor(init?: Partial<HelloWithReturnResponse>) { (Object as any).assign(this, init); }
}

export class HelloType
{
    public result: string;

    public constructor(init?: Partial<HelloType>) { (Object as any).assign(this, init); }
}

export interface IPoco
{
    name: string;
}

export interface IEmptyInterface
{
}

export class EmptyClass
{

    public constructor(init?: Partial<EmptyClass>) { (Object as any).assign(this, init); }
}

export class InnerType
{
    public id: number;
    public name: string;

    public constructor(init?: Partial<InnerType>) { (Object as any).assign(this, init); }
}

export enum InnerEnum
{
    Foo = 'Foo',
    Bar = 'Bar',
    Baz = 'Baz',
}

export enum DayOfWeek
{
    Sunday = 'Sunday',
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
}

// @DataContract
export enum ScopeType
{
    Global = 1,
    Sale = 2,
}

export class PingService
{

    public constructor(init?: Partial<PingService>) { (Object as any).assign(this, init); }
}

export class ReturnedDto
{
    public id: number;

    public constructor(init?: Partial<ReturnedDto>) { (Object as any).assign(this, init); }
}

export class CustomUserSession extends AuthUserSession
{
    // @DataMember
    public customName: string;

    // @DataMember
    public customInfo: string;

    public constructor(init?: Partial<CustomUserSession>) { super(init); (Object as any).assign(this, init); }
}

export class UnAuthInfo
{
    public customInfo: string;

    public constructor(init?: Partial<UnAuthInfo>) { (Object as any).assign(this, init); }
}

export class Channel
{
    public name: string;
    public value: string;

    public constructor(init?: Partial<Channel>) { (Object as any).assign(this, init); }
}

export class Device
{
    public id: number;
    public type: string;
    public timeStamp: number;
    public channels: Channel[];

    public constructor(init?: Partial<Device>) { (Object as any).assign(this, init); }
}

export class Logger
{
    public id: number;
    public devices: Device[];

    public constructor(init?: Partial<Logger>) { (Object as any).assign(this, init); }
}

export class Rockstar
{
    public id: number;
    public firstName: string;
    public lastName: string;
    public age?: number;

    public constructor(init?: Partial<Rockstar>) { (Object as any).assign(this, init); }
}

// @DataContract
export class QueryBase
{
    // @DataMember(Order=1)
    public skip?: number;

    // @DataMember(Order=2)
    public take?: number;

    // @DataMember(Order=3)
    public orderBy: string;

    // @DataMember(Order=4)
    public orderByDesc: string;

    // @DataMember(Order=5)
    public include: string;

    // @DataMember(Order=6)
    public fields: string;

    // @DataMember(Order=7)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<QueryBase>) { (Object as any).assign(this, init); }
}

export class QueryDb_2<From, Into> extends QueryBase
{

    public constructor(init?: Partial<QueryDb_2<From, Into>>) { super(init); (Object as any).assign(this, init); }
}

export class QueryDbTenant_2<From, Into> extends QueryDb_2<From, Into>
{

    public constructor(init?: Partial<QueryDbTenant_2<From, Into>>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class AuditBase
{
    // @DataMember(Order=1)
    public createdDate: string;

    // @DataMember(Order=2)
    // @Required()
    public createdBy: string;

    // @DataMember(Order=3)
    public modifiedDate: string;

    // @DataMember(Order=4)
    // @Required()
    public modifiedBy: string;

    // @DataMember(Order=5)
    public deletedDate?: string;

    // @DataMember(Order=6)
    public deletedBy: string;

    public constructor(init?: Partial<AuditBase>) { (Object as any).assign(this, init); }
}

export enum LivingStatus
{
    Alive = 'Alive',
    Dead = 'Dead',
}

export class RockstarAuditTenant extends AuditBase
{
    public tenantId: number;
    public id: number;
    public firstName: string;
    public lastName: string;
    public age?: number;
    public dateOfBirth: string;
    public dateDied?: string;
    public livingStatus: LivingStatus;

    public constructor(init?: Partial<RockstarAuditTenant>) { super(init); (Object as any).assign(this, init); }
}

export class RockstarBase
{
    public firstName: string;
    public lastName: string;
    public age?: number;
    public dateOfBirth: string;
    public dateDied?: string;
    public livingStatus: LivingStatus;

    public constructor(init?: Partial<RockstarBase>) { (Object as any).assign(this, init); }
}

export class RockstarAuto extends RockstarBase
{
    public id: number;

    public constructor(init?: Partial<RockstarAuto>) { super(init); (Object as any).assign(this, init); }
}

export class QueryDb_1<T> extends QueryBase
{

    public constructor(init?: Partial<QueryDb_1<T>>) { super(init); (Object as any).assign(this, init); }
}

export class OnlyDefinedInGenericType
{
    public id: number;
    public name: string;

    public constructor(init?: Partial<OnlyDefinedInGenericType>) { (Object as any).assign(this, init); }
}

export class OnlyDefinedInGenericTypeFrom
{
    public id: number;
    public name: string;

    public constructor(init?: Partial<OnlyDefinedInGenericTypeFrom>) { (Object as any).assign(this, init); }
}

export class OnlyDefinedInGenericTypeInto
{
    public id: number;
    public name: string;

    public constructor(init?: Partial<OnlyDefinedInGenericTypeInto>) { (Object as any).assign(this, init); }
}

export class RockstarAudit extends RockstarBase
{
    public id: number;
    public createdDate: string;
    public createdBy: string;
    public createdInfo: string;
    public modifiedDate: string;
    public modifiedBy: string;
    public modifiedInfo: string;

    public constructor(init?: Partial<RockstarAudit>) { super(init); (Object as any).assign(this, init); }
}

export class CreateAuditBase<Table, TResponse> implements ICreateDb<Table>
{

    public constructor(init?: Partial<CreateAuditBase<Table, TResponse>>) { (Object as any).assign(this, init); }
}

export class CreateAuditTenantBase<Table, TResponse> extends CreateAuditBase<Table, TResponse>
{

    public constructor(init?: Partial<CreateAuditTenantBase<Table, TResponse>>) { super(init); (Object as any).assign(this, init); }
}

export class UpdateAuditBase<Table, TResponse> implements IUpdateDb<Table>
{

    public constructor(init?: Partial<UpdateAuditBase<Table, TResponse>>) { (Object as any).assign(this, init); }
}

export class UpdateAuditTenantBase<Table, TResponse> extends UpdateAuditBase<Table, TResponse>
{

    public constructor(init?: Partial<UpdateAuditTenantBase<Table, TResponse>>) { super(init); (Object as any).assign(this, init); }
}

export class PatchAuditBase<Table, TResponse> implements IPatchDb<Table>
{

    public constructor(init?: Partial<PatchAuditBase<Table, TResponse>>) { (Object as any).assign(this, init); }
}

export class PatchAuditTenantBase<Table, TResponse> extends PatchAuditBase<Table, TResponse>
{

    public constructor(init?: Partial<PatchAuditTenantBase<Table, TResponse>>) { super(init); (Object as any).assign(this, init); }
}

export class SoftDeleteAuditBase<Table, TResponse> implements IUpdateDb<Table>
{

    public constructor(init?: Partial<SoftDeleteAuditBase<Table, TResponse>>) { (Object as any).assign(this, init); }
}

export class SoftDeleteAuditTenantBase<Table, TResponse> extends SoftDeleteAuditBase<Table, TResponse>
{

    public constructor(init?: Partial<SoftDeleteAuditTenantBase<Table, TResponse>>) { super(init); (Object as any).assign(this, init); }
}

export class RockstarVersion extends RockstarBase
{
    public id: number;
    public rowVersion: number;

    public constructor(init?: Partial<RockstarVersion>) { super(init); (Object as any).assign(this, init); }
}

export class TypesGroup
{

    public constructor(init?: Partial<TypesGroup>) { (Object as any).assign(this, init); }
}

export class ChatMessage
{
    public id: number;
    public channel: string;
    public fromUserId: string;
    public fromName: string;
    public displayName: string;
    public message: string;
    public userAuthId: string;
    public private: boolean;

    public constructor(init?: Partial<ChatMessage>) { (Object as any).assign(this, init); }
}

export class GetChatHistoryResponse
{
    public results: ChatMessage[];
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<GetChatHistoryResponse>) { (Object as any).assign(this, init); }
}

export class GetUserDetailsResponse
{
    public provider: string;
    public userId: string;
    public userName: string;
    public fullName: string;
    public displayName: string;
    public firstName: string;
    public lastName: string;
    public company: string;
    public email: string;
    public phoneNumber: string;
    public birthDate?: string;
    public birthDateRaw: string;
    public address: string;
    public address2: string;
    public city: string;
    public state: string;
    public country: string;
    public culture: string;
    public gender: string;
    public language: string;
    public mailAddress: string;
    public nickname: string;
    public postalCode: string;
    public timeZone: string;

    public constructor(init?: Partial<GetUserDetailsResponse>) { (Object as any).assign(this, init); }
}

export class CustomHttpErrorResponse
{
    public custom: string;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<CustomHttpErrorResponse>) { (Object as any).assign(this, init); }
}

export class QueryResponseAlt<T>
{
    public offset: number;
    public total: number;
    public results: T[];
    public meta: { [index: string]: string; };
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<QueryResponseAlt<T>>) { (Object as any).assign(this, init); }
}

export class Items
{
    public results: Item[];

    public constructor(init?: Partial<Items>) { (Object as any).assign(this, init); }
}

export class ThrowTypeResponse
{
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<ThrowTypeResponse>) { (Object as any).assign(this, init); }
}

export class ThrowValidationResponse
{
    public age: number;
    public required: string;
    public email: string;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<ThrowValidationResponse>) { (Object as any).assign(this, init); }
}

export class ThrowBusinessErrorResponse
{
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<ThrowBusinessErrorResponse>) { (Object as any).assign(this, init); }
}

export class Account
{
    public name: string;

    public constructor(init?: Partial<Account>) { (Object as any).assign(this, init); }
}

export class Project
{
    public account: string;
    public name: string;

    public constructor(init?: Partial<Project>) { (Object as any).assign(this, init); }
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

export class MetadataTestResponse
{
    public id: number;
    public results: MetadataTestChild[];

    public constructor(init?: Partial<MetadataTestResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class GetExampleResponse
{
    // @DataMember(Order=1)
    public responseStatus: ResponseStatus;

    // @DataMember(Order=2)
    // @ApiMember()
    public menuExample1: MenuExample;

    public constructor(init?: Partial<GetExampleResponse>) { (Object as any).assign(this, init); }
}

export class GetRandomIdsResponse
{
    public results: string[];

    public constructor(init?: Partial<GetRandomIdsResponse>) { (Object as any).assign(this, init); }
}

export class HelloResponse
{
    public result: string;

    public constructor(init?: Partial<HelloResponse>) { (Object as any).assign(this, init); }
}

/**
* Description on HelloAllResponse type
*/
// @DataContract
export class HelloAnnotatedResponse
{
    // @DataMember
    public result: string;

    public constructor(init?: Partial<HelloAnnotatedResponse>) { (Object as any).assign(this, init); }
}

export class AllTypes implements IReturn<AllTypes>
{
    public id: number;
    public nullableId?: number;
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
    public keyValuePair: KeyValuePair<string, string>;
    public nullableDateTime?: string;
    public nullableTimeSpan?: string;
    public stringList: string[];
    public stringArray: string[];
    public stringMap: { [index: string]: string; };
    public intStringMap: { [index: number]: string; };
    public subType: SubType;

    public constructor(init?: Partial<AllTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new AllTypes(); }
    public getTypeName() { return 'AllTypes'; }
}

export class AllCollectionTypes implements IReturn<AllCollectionTypes>
{
    public intArray: number[];
    public intList: number[];
    public stringArray: string[];
    public stringList: string[];
    public floatArray: number[];
    public doubleList: number[];
    public byteArray: Uint8Array;
    public charArray: string[];
    public decimalList: number[];
    public pocoArray: Poco[];
    public pocoList: Poco[];
    public pocoLookup: { [index: string]: Poco[]; };
    public pocoLookupMap: { [index: string]: { [index:string]: Poco; }[]; };

    public constructor(init?: Partial<AllCollectionTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new AllCollectionTypes(); }
    public getTypeName() { return 'AllCollectionTypes'; }
}

export class HelloAllTypesResponse
{
    public result: string;
    public allTypes: AllTypes;
    public allCollectionTypes: AllCollectionTypes;

    public constructor(init?: Partial<HelloAllTypesResponse>) { (Object as any).assign(this, init); }
}

export class SubAllTypes extends AllTypesBase
{
    public hierarchy: number;

    public constructor(init?: Partial<SubAllTypes>) { super(init); (Object as any).assign(this, init); }
}

export class HelloDateTime implements IReturn<HelloDateTime>
{
    public dateTime: string;

    public constructor(init?: Partial<HelloDateTime>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloDateTime(); }
    public getTypeName() { return 'HelloDateTime'; }
}

// @DataContract
export class HelloWithDataContractResponse
{
    // @DataMember(Name="result", Order=1, IsRequired=true, EmitDefaultValue=false)
    public result: string;

    public constructor(init?: Partial<HelloWithDataContractResponse>) { (Object as any).assign(this, init); }
}

/**
* Description on HelloWithDescriptionResponse type
*/
export class HelloWithDescriptionResponse
{
    public result: string;

    public constructor(init?: Partial<HelloWithDescriptionResponse>) { (Object as any).assign(this, init); }
}

export class HelloWithInheritanceResponse extends HelloResponseBase
{
    public result: string;

    public constructor(init?: Partial<HelloWithInheritanceResponse>) { super(init); (Object as any).assign(this, init); }
}

export class HelloWithAlternateReturnResponse extends HelloWithReturnResponse
{
    public altResult: string;

    public constructor(init?: Partial<HelloWithAlternateReturnResponse>) { super(init); (Object as any).assign(this, init); }
}

export class HelloWithRouteResponse
{
    public result: string;

    public constructor(init?: Partial<HelloWithRouteResponse>) { (Object as any).assign(this, init); }
}

export class HelloWithTypeResponse
{
    public result: HelloType;

    public constructor(init?: Partial<HelloWithTypeResponse>) { (Object as any).assign(this, init); }
}

export class HelloInnerTypesResponse
{
    public innerType: InnerType;
    public innerEnum: InnerEnum;

    public constructor(init?: Partial<HelloInnerTypesResponse>) { (Object as any).assign(this, init); }
}

export class HelloVerbResponse
{
    public result: string;

    public constructor(init?: Partial<HelloVerbResponse>) { (Object as any).assign(this, init); }
}

export class EnumResponse
{
    public operator: ScopeType;

    public constructor(init?: Partial<EnumResponse>) { (Object as any).assign(this, init); }
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

// @DataContract
export class HelloZipResponse
{
    // @DataMember
    public result: string;

    public constructor(init?: Partial<HelloZipResponse>) { (Object as any).assign(this, init); }
}

export class PingResponse
{
    public responses: { [index: string]: ResponseStatus; };
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<PingResponse>) { (Object as any).assign(this, init); }
}

export class RequiresRoleResponse
{
    public result: string;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<RequiresRoleResponse>) { (Object as any).assign(this, init); }
}

export class SendVerbResponse
{
    public id: number;
    public pathInfo: string;
    public requestMethod: string;

    public constructor(init?: Partial<SendVerbResponse>) { (Object as any).assign(this, init); }
}

export class GetSessionResponse
{
    public result: CustomUserSession;
    public unAuthInfo: UnAuthInfo;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<GetSessionResponse>) { (Object as any).assign(this, init); }
}

// @DataContract(Namespace="http://schemas.servicestack.net/types")
export class GetStuffResponse
{
    // @DataMember
    public summaryDate?: string;

    // @DataMember
    public summaryEndDate?: string;

    // @DataMember
    public symbol: string;

    // @DataMember
    public email: string;

    // @DataMember
    public isEnabled?: boolean;

    public constructor(init?: Partial<GetStuffResponse>) { (Object as any).assign(this, init); }
}

export class StoreLogsResponse
{
    public existingLogs: Logger[];
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<StoreLogsResponse>) { (Object as any).assign(this, init); }
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

export class RequiresAdmin implements IReturn<RequiresAdmin>
{
    public id: number;

    public constructor(init?: Partial<RequiresAdmin>) { (Object as any).assign(this, init); }
    public createResponse() { return new RequiresAdmin(); }
    public getTypeName() { return 'RequiresAdmin'; }
}

// @Route("/custom")
// @Route("/custom/{Data}")
export class CustomRoute implements IReturn<CustomRoute>
{
    public data: string;

    public constructor(init?: Partial<CustomRoute>) { (Object as any).assign(this, init); }
    public createResponse() { return new CustomRoute(); }
    public getTypeName() { return 'CustomRoute'; }
}

// @Route("/wait/{ForMs}")
export class Wait implements IReturn<Wait>
{
    public forMs: number;

    public constructor(init?: Partial<Wait>) { (Object as any).assign(this, init); }
    public createResponse() { return new Wait(); }
    public getTypeName() { return 'Wait'; }
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

// @Route("/echo/collections")
export class EchoCollections implements IReturn<EchoCollections>
{
    public stringList: string[];
    public stringArray: string[];
    public stringMap: { [index: string]: string; };
    public intStringMap: { [index: number]: string; };

    public constructor(init?: Partial<EchoCollections>) { (Object as any).assign(this, init); }
    public createResponse() { return new EchoCollections(); }
    public getTypeName() { return 'EchoCollections'; }
}

// @Route("/echo/complex")
export class EchoComplexTypes implements IReturn<EchoComplexTypes>
{
    public subType: SubType;
    public subTypes: SubType[];
    public subTypeMap: { [index: string]: SubType; };
    public stringMap: { [index: string]: string; };
    public intStringMap: { [index: number]: string; };

    public constructor(init?: Partial<EchoComplexTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new EchoComplexTypes(); }
    public getTypeName() { return 'EchoComplexTypes'; }
}

// @Route("/rockstars", "POST")
export class StoreRockstars extends Array<Rockstar> implements IReturn<StoreRockstars>
{

    public constructor(init?: Partial<StoreRockstars>) { super(); (Object as any).assign(this, init); }
    public createResponse() { return new StoreRockstars(); }
    public getTypeName() { return 'StoreRockstars'; }
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

// @DataContract
export class AssignRolesResponse
{
    // @DataMember(Order=1)
    public allRoles: string[];

    // @DataMember(Order=2)
    public allPermissions: string[];

    // @DataMember(Order=3)
    public meta: { [index: string]: string; };

    // @DataMember(Order=4)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<AssignRolesResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class UnAssignRolesResponse
{
    // @DataMember(Order=1)
    public allRoles: string[];

    // @DataMember(Order=2)
    public allPermissions: string[];

    // @DataMember(Order=3)
    public meta: { [index: string]: string; };

    // @DataMember(Order=4)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<UnAssignRolesResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ConvertSessionToTokenResponse
{
    // @DataMember(Order=1)
    public meta: { [index: string]: string; };

    // @DataMember(Order=2)
    public accessToken: string;

    // @DataMember(Order=3)
    public refreshToken: string;

    // @DataMember(Order=4)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<ConvertSessionToTokenResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class GetAccessTokenResponse
{
    // @DataMember(Order=1)
    public accessToken: string;

    // @DataMember(Order=2)
    public meta: { [index: string]: string; };

    // @DataMember(Order=3)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<GetAccessTokenResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class QueryResponse<T>
{
    // @DataMember(Order=1)
    public offset: number;

    // @DataMember(Order=2)
    public total: number;

    // @DataMember(Order=3)
    public results: T[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    // @DataMember(Order=5)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<QueryResponse<T>>) { (Object as any).assign(this, init); }
}

export class RockstarWithIdResponse
{
    public id: number;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<RockstarWithIdResponse>) { (Object as any).assign(this, init); }
}

export class RockstarWithIdAndResultResponse
{
    public id: number;
    public result: RockstarAuto;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<RockstarWithIdAndResultResponse>) { (Object as any).assign(this, init); }
}

export class RockstarWithIdAndCountResponse
{
    public id: number;
    public count: number;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<RockstarWithIdAndCountResponse>) { (Object as any).assign(this, init); }
}

export class RockstarWithIdAndRowVersionResponse
{
    public id: number;
    public rowVersion: number;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<RockstarWithIdAndRowVersionResponse>) { (Object as any).assign(this, init); }
}

// @Route("/channels/{Channel}/raw")
export class PostRawToChannel implements IReturnVoid
{
    public from: string;
    public toUserId: string;
    public channel: string;
    public message: string;
    public selector: string;

    public constructor(init?: Partial<PostRawToChannel>) { (Object as any).assign(this, init); }
    public createResponse() {}
    public getTypeName() { return 'PostRawToChannel'; }
}

// @Route("/channels/{Channel}/chat")
export class PostChatToChannel implements IReturn<ChatMessage>
{
    public from: string;
    public toUserId: string;
    public channel: string;
    public message: string;
    public selector: string;

    public constructor(init?: Partial<PostChatToChannel>) { (Object as any).assign(this, init); }
    public createResponse() { return new ChatMessage(); }
    public getTypeName() { return 'PostChatToChannel'; }
}

// @Route("/chathistory")
export class GetChatHistory implements IReturn<GetChatHistoryResponse>
{
    public channels: string[];
    public afterId?: number;
    public take?: number;

    public constructor(init?: Partial<GetChatHistory>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetChatHistoryResponse(); }
    public getTypeName() { return 'GetChatHistory'; }
}

// @Route("/reset")
export class ClearChatHistory implements IReturnVoid
{

    public constructor(init?: Partial<ClearChatHistory>) { (Object as any).assign(this, init); }
    public createResponse() {}
    public getTypeName() { return 'ClearChatHistory'; }
}

// @Route("/reset-serverevents")
export class ResetServerEvents implements IReturnVoid
{

    public constructor(init?: Partial<ResetServerEvents>) { (Object as any).assign(this, init); }
    public createResponse() {}
    public getTypeName() { return 'ResetServerEvents'; }
}

// @Route("/channels/{Channel}/object")
export class PostObjectToChannel implements IReturnVoid
{
    public toUserId: string;
    public channel: string;
    public selector: string;
    public customType: CustomType;
    public setterType: SetterType;

    public constructor(init?: Partial<PostObjectToChannel>) { (Object as any).assign(this, init); }
    public createResponse() {}
    public getTypeName() { return 'PostObjectToChannel'; }
}

// @Route("/account")
export class GetUserDetails implements IReturn<GetUserDetailsResponse>
{

    public constructor(init?: Partial<GetUserDetails>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetUserDetailsResponse(); }
    public getTypeName() { return 'GetUserDetails'; }
}

export class CustomHttpError implements IReturn<CustomHttpErrorResponse>
{
    public statusCode: number;
    public statusDescription: string;

    public constructor(init?: Partial<CustomHttpError>) { (Object as any).assign(this, init); }
    public createResponse() { return new CustomHttpErrorResponse(); }
    public getTypeName() { return 'CustomHttpError'; }
}

export class AltQueryItems implements IReturn<QueryResponseAlt<Item>>
{
    public name: string;

    public constructor(init?: Partial<AltQueryItems>) { (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponseAlt<Item>(); }
    public getTypeName() { return 'AltQueryItems'; }
}

export class GetItems implements IReturn<Items>
{

    public constructor(init?: Partial<GetItems>) { (Object as any).assign(this, init); }
    public createResponse() { return new Items(); }
    public getTypeName() { return 'GetItems'; }
}

export class GetNakedItems implements IReturn<Item[]>
{

    public constructor(init?: Partial<GetNakedItems>) { (Object as any).assign(this, init); }
    public createResponse() { return new Array<Item>(); }
    public getTypeName() { return 'GetNakedItems'; }
}

export class DummyTypes
{
    public helloResponses: HelloResponse[];
    public listResult: ListResult[];
    public arrayResult: ArrayResult[];

    public constructor(init?: Partial<DummyTypes>) { (Object as any).assign(this, init); }
}

// @Route("/throwhttperror/{Status}")
export class ThrowHttpError
{
    public status?: number;
    public message: string;

    public constructor(init?: Partial<ThrowHttpError>) { (Object as any).assign(this, init); }
}

// @Route("/throw404")
// @Route("/throw404/{Message}")
export class Throw404
{
    public message: string;

    public constructor(init?: Partial<Throw404>) { (Object as any).assign(this, init); }
}

// @Route("/throwcustom400")
// @Route("/throwcustom400/{Message}")
export class ThrowCustom400
{
    public message: string;

    public constructor(init?: Partial<ThrowCustom400>) { (Object as any).assign(this, init); }
}

// @Route("/throw/{Type}")
export class ThrowType implements IReturn<ThrowTypeResponse>
{
    public type: string;
    public message: string;

    public constructor(init?: Partial<ThrowType>) { (Object as any).assign(this, init); }
    public createResponse() { return new ThrowTypeResponse(); }
    public getTypeName() { return 'ThrowType'; }
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

// @Route("/throwbusinesserror")
export class ThrowBusinessError implements IReturn<ThrowBusinessErrorResponse>
{

    public constructor(init?: Partial<ThrowBusinessError>) { (Object as any).assign(this, init); }
    public createResponse() { return new ThrowBusinessErrorResponse(); }
    public getTypeName() { return 'ThrowBusinessError'; }
}

export class RootPathRoutes
{
    public path: string;

    public constructor(init?: Partial<RootPathRoutes>) { (Object as any).assign(this, init); }
}

export class GetAccount implements IReturn<Account>
{
    public account: string;

    public constructor(init?: Partial<GetAccount>) { (Object as any).assign(this, init); }
    public createResponse() { return new Account(); }
    public getTypeName() { return 'GetAccount'; }
}

export class GetProject implements IReturn<Project>
{
    public account: string;
    public project: string;

    public constructor(init?: Partial<GetProject>) { (Object as any).assign(this, init); }
    public createResponse() { return new Project(); }
    public getTypeName() { return 'GetProject'; }
}

// @Route("/image-stream")
export class ImageAsStream implements IReturn<Blob>
{
    public format: string;

    public constructor(init?: Partial<ImageAsStream>) { (Object as any).assign(this, init); }
    public createResponse() { return new Blob(); }
    public getTypeName() { return 'ImageAsStream'; }
}

// @Route("/image-bytes")
export class ImageAsBytes implements IReturn<Uint8Array>
{
    public format: string;

    public constructor(init?: Partial<ImageAsBytes>) { (Object as any).assign(this, init); }
    public createResponse() { return new Uint8Array(0); }
    public getTypeName() { return 'ImageAsBytes'; }
}

// @Route("/image-custom")
export class ImageAsCustomResult implements IReturn<Uint8Array>
{
    public format: string;

    public constructor(init?: Partial<ImageAsCustomResult>) { (Object as any).assign(this, init); }
    public createResponse() { return new Uint8Array(0); }
    public getTypeName() { return 'ImageAsCustomResult'; }
}

// @Route("/image-response")
export class ImageWriteToResponse implements IReturn<Uint8Array>
{
    public format: string;

    public constructor(init?: Partial<ImageWriteToResponse>) { (Object as any).assign(this, init); }
    public createResponse() { return new Uint8Array(0); }
    public getTypeName() { return 'ImageWriteToResponse'; }
}

// @Route("/image-file")
export class ImageAsFile implements IReturn<Uint8Array>
{
    public format: string;

    public constructor(init?: Partial<ImageAsFile>) { (Object as any).assign(this, init); }
    public createResponse() { return new Uint8Array(0); }
    public getTypeName() { return 'ImageAsFile'; }
}

// @Route("/image-redirect")
export class ImageAsRedirect
{
    public format: string;

    public constructor(init?: Partial<ImageAsRedirect>) { (Object as any).assign(this, init); }
}

// @Route("/hello-image/{Name}")
export class HelloImage implements IReturn<Uint8Array>
{
    public name: string;
    public format: string;
    public width?: number;
    public height?: number;
    public fontSize?: number;
    public fontFamily: string;
    public foreground: string;
    public background: string;

    public constructor(init?: Partial<HelloImage>) { (Object as any).assign(this, init); }
    public createResponse() { return new Uint8Array(0); }
    public getTypeName() { return 'HelloImage'; }
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

// @Route("/logs")
export class ViewLogs implements IReturn<string>
{
    public clear: boolean;

    public constructor(init?: Partial<ViewLogs>) { (Object as any).assign(this, init); }
    public createResponse() { return ''; }
    public getTypeName() { return 'ViewLogs'; }
}

// @Route("/metadatatest")
export class MetadataTest implements IReturn<MetadataTestResponse>
{
    public id: number;

    public constructor(init?: Partial<MetadataTest>) { (Object as any).assign(this, init); }
    public createResponse() { return new MetadataTestResponse(); }
    public getTypeName() { return 'MetadataTest'; }
}

// @Route("/metadatatest-array")
export class MetadataTestArray implements IReturn<MetadataTestChild[]>
{
    public id: number;

    public constructor(init?: Partial<MetadataTestArray>) { (Object as any).assign(this, init); }
    public createResponse() { return new Array<MetadataTestChild>(); }
    public getTypeName() { return 'MetadataTestArray'; }
}

// @Route("/example", "GET")
// @DataContract
export class GetExample implements IReturn<GetExampleResponse>
{

    public constructor(init?: Partial<GetExample>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetExampleResponse(); }
    public getTypeName() { return 'GetExample'; }
}

// @Route("/randomids")
export class GetRandomIds implements IReturn<GetRandomIdsResponse>
{
    public take?: number;

    public constructor(init?: Partial<GetRandomIds>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetRandomIdsResponse(); }
    public getTypeName() { return 'GetRandomIds'; }
}

// @Route("/textfile-test")
export class TextFileTest
{
    public asAttachment: boolean;

    public constructor(init?: Partial<TextFileTest>) { (Object as any).assign(this, init); }
}

// @Route("/return/text")
export class ReturnText
{
    public text: string;

    public constructor(init?: Partial<ReturnText>) { (Object as any).assign(this, init); }
}

// @Route("/return/html")
export class ReturnHtml
{
    public text: string;

    public constructor(init?: Partial<ReturnHtml>) { (Object as any).assign(this, init); }
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

/**
* Description on HelloAll type
*/
// @DataContract
export class HelloAnnotated implements IReturn<HelloAnnotatedResponse>
{
    // @DataMember
    public name: string;

    public constructor(init?: Partial<HelloAnnotated>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloAnnotatedResponse(); }
    public getTypeName() { return 'HelloAnnotated'; }
}

export class HelloWithNestedClass implements IReturn<HelloResponse>
{
    public name: string;
    public nestedClassProp: NestedClass;

    public constructor(init?: Partial<HelloWithNestedClass>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloResponse(); }
    public getTypeName() { return 'HelloWithNestedClass'; }
}

export class HelloList implements IReturn<ListResult[]>
{
    public names: string[];

    public constructor(init?: Partial<HelloList>) { (Object as any).assign(this, init); }
    public createResponse() { return new Array<ListResult>(); }
    public getTypeName() { return 'HelloList'; }
}

export class HelloArray implements IReturn<ArrayResult[]>
{
    public names: string[];

    public constructor(init?: Partial<HelloArray>) { (Object as any).assign(this, init); }
    public createResponse() { return new Array<ArrayResult>(); }
    public getTypeName() { return 'HelloArray'; }
}

export class HelloWithEnum
{
    public enumProp: EnumType;
    public enumTypeFlags: EnumTypeFlags;
    public enumWithValues: EnumWithValues;
    public nullableEnumProp?: EnumType;
    public enumFlags: EnumFlags;
    public enumAsInt: EnumAsInt;
    public enumStyle: EnumStyle;
    public enumStyleMembers: EnumStyleMembers;

    public constructor(init?: Partial<HelloWithEnum>) { (Object as any).assign(this, init); }
}

export class HelloWithEnumList
{
    public enumProp: EnumType[];
    public enumWithValues: EnumWithValues[];
    public nullableEnumProp: EnumType[];
    public enumFlags: EnumFlags[];
    public enumStyle: EnumStyle[];

    public constructor(init?: Partial<HelloWithEnumList>) { (Object as any).assign(this, init); }
}

export class HelloWithEnumMap
{
    public enumProp: { [index: string]: EnumType; };
    public enumWithValues: { [index: string]: EnumWithValues; };
    public nullableEnumProp: { [index: string]: EnumType; };
    public enumFlags: { [index: string]: EnumFlags; };
    public enumStyle: { [index: string]: EnumStyle; };

    public constructor(init?: Partial<HelloWithEnumMap>) { (Object as any).assign(this, init); }
}

export class RestrictedAttributes
{
    public id: number;
    public name: string;
    public hello: Hello;

    public constructor(init?: Partial<RestrictedAttributes>) { (Object as any).assign(this, init); }
}

/**
* AllowedAttributes Description
*/
// @Route("/allowed-attributes", "GET")
// @Api(Description="AllowedAttributes Description")
// @ApiResponse(Description="Your request was not understood", StatusCode=400)
// @DataContract
export class AllowedAttributes
{
    /**
    * Range Description
    */
    // @DataMember(Name="Aliased")
    // @ApiMember(DataType="double", Description="Range Description", IsRequired=true, ParameterType="path")
    public range: number;

    public constructor(init?: Partial<AllowedAttributes>) { (Object as any).assign(this, init); }
}

// @Route("/all-types")
export class HelloAllTypes implements IReturn<HelloAllTypesResponse>
{
    public name: string;
    public allTypes: AllTypes;
    public allCollectionTypes: AllCollectionTypes;

    public constructor(init?: Partial<HelloAllTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloAllTypesResponse(); }
    public getTypeName() { return 'HelloAllTypes'; }
}

export class HelloSubAllTypes extends AllTypesBase implements IReturn<SubAllTypes>
{
    public hierarchy: number;

    public constructor(init?: Partial<HelloSubAllTypes>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new SubAllTypes(); }
    public getTypeName() { return 'HelloSubAllTypes'; }
}

export class HelloString implements IReturn<string>
{
    public name: string;

    public constructor(init?: Partial<HelloString>) { (Object as any).assign(this, init); }
    public createResponse() { return ''; }
    public getTypeName() { return 'HelloString'; }
}

export class HelloVoid
{
    public name: string;

    public constructor(init?: Partial<HelloVoid>) { (Object as any).assign(this, init); }
}

// @DataContract
export class HelloWithDataContract implements IReturn<HelloWithDataContractResponse>
{
    // @DataMember(Name="name", Order=1, IsRequired=true, EmitDefaultValue=false)
    public name: string;

    // @DataMember(Name="id", Order=2, EmitDefaultValue=false)
    public id: number;

    public constructor(init?: Partial<HelloWithDataContract>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloWithDataContractResponse(); }
    public getTypeName() { return 'HelloWithDataContract'; }
}

/**
* Description on HelloWithDescription type
*/
export class HelloWithDescription implements IReturn<HelloWithDescriptionResponse>
{
    public name: string;

    public constructor(init?: Partial<HelloWithDescription>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloWithDescriptionResponse(); }
    public getTypeName() { return 'HelloWithDescription'; }
}

export class HelloWithInheritance extends HelloBase implements IReturn<HelloWithInheritanceResponse>
{
    public name: string;

    public constructor(init?: Partial<HelloWithInheritance>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new HelloWithInheritanceResponse(); }
    public getTypeName() { return 'HelloWithInheritance'; }
}

export class HelloWithGenericInheritance extends HelloBase_1<Poco>
{
    public result: string;

    public constructor(init?: Partial<HelloWithGenericInheritance>) { super(init); (Object as any).assign(this, init); }
}

export class HelloWithGenericInheritance2 extends HelloBase_1<Hello>
{
    public result: string;

    public constructor(init?: Partial<HelloWithGenericInheritance2>) { super(init); (Object as any).assign(this, init); }
}

export class HelloWithNestedInheritance extends HelloBase_1<Item>
{

    public constructor(init?: Partial<HelloWithNestedInheritance>) { super(init); (Object as any).assign(this, init); }
}

export class HelloWithReturn implements IReturn<HelloWithAlternateReturnResponse>
{
    public name: string;

    public constructor(init?: Partial<HelloWithReturn>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloWithAlternateReturnResponse(); }
    public getTypeName() { return 'HelloWithReturn'; }
}

// @Route("/helloroute")
export class HelloWithRoute implements IReturn<HelloWithRouteResponse>
{
    public name: string;

    public constructor(init?: Partial<HelloWithRoute>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloWithRouteResponse(); }
    public getTypeName() { return 'HelloWithRoute'; }
}

export class HelloWithType implements IReturn<HelloWithTypeResponse>
{
    public name: string;

    public constructor(init?: Partial<HelloWithType>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloWithTypeResponse(); }
    public getTypeName() { return 'HelloWithType'; }
}

export class HelloInterface
{
    public poco: IPoco;
    public emptyInterface: IEmptyInterface;
    public emptyClass: EmptyClass;

    public constructor(init?: Partial<HelloInterface>) { (Object as any).assign(this, init); }
}

export class HelloInnerTypes implements IReturn<HelloInnerTypesResponse>
{

    public constructor(init?: Partial<HelloInnerTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloInnerTypesResponse(); }
    public getTypeName() { return 'HelloInnerTypes'; }
}

export class HelloBuiltin
{
    public dayOfWeek: DayOfWeek;

    public constructor(init?: Partial<HelloBuiltin>) { (Object as any).assign(this, init); }
}

export class HelloGet implements IReturn<HelloVerbResponse>, IGet
{
    public id: number;

    public constructor(init?: Partial<HelloGet>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloVerbResponse(); }
    public getTypeName() { return 'HelloGet'; }
}

export class HelloPost extends HelloBase implements IReturn<HelloVerbResponse>, IPost
{

    public constructor(init?: Partial<HelloPost>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new HelloVerbResponse(); }
    public getTypeName() { return 'HelloPost'; }
}

export class HelloPut implements IReturn<HelloVerbResponse>, IPut
{
    public id: number;

    public constructor(init?: Partial<HelloPut>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloVerbResponse(); }
    public getTypeName() { return 'HelloPut'; }
}

export class HelloDelete implements IReturn<HelloVerbResponse>, IDelete
{
    public id: number;

    public constructor(init?: Partial<HelloDelete>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloVerbResponse(); }
    public getTypeName() { return 'HelloDelete'; }
}

export class HelloPatch implements IReturn<HelloVerbResponse>, IPatch
{
    public id: number;

    public constructor(init?: Partial<HelloPatch>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloVerbResponse(); }
    public getTypeName() { return 'HelloPatch'; }
}

export class HelloReturnVoid implements IReturnVoid
{
    public id: number;

    public constructor(init?: Partial<HelloReturnVoid>) { (Object as any).assign(this, init); }
    public createResponse() {}
    public getTypeName() { return 'HelloReturnVoid'; }
}

export class EnumRequest implements IReturn<EnumResponse>, IPut
{
    public operator: ScopeType;

    public constructor(init?: Partial<EnumRequest>) { (Object as any).assign(this, init); }
    public createResponse() { return new EnumResponse(); }
    public getTypeName() { return 'EnumRequest'; }
}

// @Route("/hellozip")
// @DataContract
export class HelloZip implements IReturn<HelloZipResponse>
{
    // @DataMember
    public name: string;

    // @DataMember
    public test: string[];

    public constructor(init?: Partial<HelloZip>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloZipResponse(); }
    public getTypeName() { return 'HelloZip'; }
}

// @Route("/ping")
export class Ping implements IReturn<PingResponse>
{

    public constructor(init?: Partial<Ping>) { (Object as any).assign(this, init); }
    public createResponse() { return new PingResponse(); }
    public getTypeName() { return 'Ping'; }
}

// @Route("/reset-connections")
export class ResetConnections
{

    public constructor(init?: Partial<ResetConnections>) { (Object as any).assign(this, init); }
}

// @Route("/requires-role")
export class RequiresRole implements IReturn<RequiresRoleResponse>
{

    public constructor(init?: Partial<RequiresRole>) { (Object as any).assign(this, init); }
    public createResponse() { return new RequiresRoleResponse(); }
    public getTypeName() { return 'RequiresRole'; }
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

// @Route("/Request1", "GET")
export class GetRequest1 implements IReturn<ReturnedDto[]>, IGet
{

    public constructor(init?: Partial<GetRequest1>) { (Object as any).assign(this, init); }
    public createResponse() { return new Array<ReturnedDto>(); }
    public getTypeName() { return 'GetRequest1'; }
}

// @Route("/Request2", "GET")
export class GetRequest2 implements IReturn<ReturnedDto[]>, IGet
{

    public constructor(init?: Partial<GetRequest2>) { (Object as any).assign(this, init); }
    public createResponse() { return new Array<ReturnedDto>(); }
    public getTypeName() { return 'GetRequest2'; }
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

export class SendDefault implements IReturn<SendVerbResponse>
{
    public id: number;

    public constructor(init?: Partial<SendDefault>) { (Object as any).assign(this, init); }
    public createResponse() { return new SendVerbResponse(); }
    public getTypeName() { return 'SendDefault'; }
}

// @Route("/sendrestget/{Id}", "GET")
export class SendRestGet implements IReturn<SendVerbResponse>, IGet
{
    public id: number;

    public constructor(init?: Partial<SendRestGet>) { (Object as any).assign(this, init); }
    public createResponse() { return new SendVerbResponse(); }
    public getTypeName() { return 'SendRestGet'; }
}

export class SendGet implements IReturn<SendVerbResponse>, IGet
{
    public id: number;

    public constructor(init?: Partial<SendGet>) { (Object as any).assign(this, init); }
    public createResponse() { return new SendVerbResponse(); }
    public getTypeName() { return 'SendGet'; }
}

export class SendPost implements IReturn<SendVerbResponse>, IPost
{
    public id: number;

    public constructor(init?: Partial<SendPost>) { (Object as any).assign(this, init); }
    public createResponse() { return new SendVerbResponse(); }
    public getTypeName() { return 'SendPost'; }
}

export class SendPut implements IReturn<SendVerbResponse>, IPut
{
    public id: number;

    public constructor(init?: Partial<SendPut>) { (Object as any).assign(this, init); }
    public createResponse() { return new SendVerbResponse(); }
    public getTypeName() { return 'SendPut'; }
}

export class SendReturnVoid implements IReturnVoid
{
    public id: number;

    public constructor(init?: Partial<SendReturnVoid>) { (Object as any).assign(this, init); }
    public createResponse() {}
    public getTypeName() { return 'SendReturnVoid'; }
}

// @Route("/session")
export class GetSession implements IReturn<GetSessionResponse>
{

    public constructor(init?: Partial<GetSession>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetSessionResponse(); }
    public getTypeName() { return 'GetSession'; }
}

// @Route("/session/edit/{CustomName}")
export class UpdateSession implements IReturn<GetSessionResponse>
{
    public customName: string;

    public constructor(init?: Partial<UpdateSession>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetSessionResponse(); }
    public getTypeName() { return 'UpdateSession'; }
}

// @Route("/Stuff")
// @DataContract(Namespace="http://schemas.servicestack.net/types")
export class GetStuff implements IReturn<GetStuffResponse>
{
    // @DataMember
    // @ApiMember(DataType="DateTime", Name="Summary Date")
    public summaryDate?: string;

    // @DataMember
    // @ApiMember(DataType="DateTime", Name="Summary End Date")
    public summaryEndDate?: string;

    // @DataMember
    // @ApiMember(DataType="string", Name="Symbol")
    public symbol: string;

    // @DataMember
    // @ApiMember(DataType="string", Name="Email")
    public email: string;

    // @DataMember
    // @ApiMember(DataType="bool", Name="Is Enabled")
    public isEnabled?: boolean;

    public constructor(init?: Partial<GetStuff>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetStuffResponse(); }
    public getTypeName() { return 'GetStuff'; }
}

export class StoreLogs implements IReturn<StoreLogsResponse>
{
    public loggers: Logger[];

    public constructor(init?: Partial<StoreLogs>) { (Object as any).assign(this, init); }
    public createResponse() { return new StoreLogsResponse(); }
    public getTypeName() { return 'StoreLogs'; }
}

export class HelloAuth implements IReturn<HelloResponse>
{
    public name: string;

    public constructor(init?: Partial<HelloAuth>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloResponse(); }
    public getTypeName() { return 'HelloAuth'; }
}

// @Route("/testauth")
export class TestAuth implements IReturn<TestAuthResponse>
{

    public constructor(init?: Partial<TestAuth>) { (Object as any).assign(this, init); }
    public createResponse() { return new TestAuthResponse(); }
    public getTypeName() { return 'TestAuth'; }
}

// @Route("/testdata/AllTypes")
export class TestDataAllTypes implements IReturn<AllTypes>
{

    public constructor(init?: Partial<TestDataAllTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new AllTypes(); }
    public getTypeName() { return 'TestDataAllTypes'; }
}

// @Route("/testdata/AllCollectionTypes")
export class TestDataAllCollectionTypes implements IReturn<AllCollectionTypes>
{

    public constructor(init?: Partial<TestDataAllCollectionTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new AllCollectionTypes(); }
    public getTypeName() { return 'TestDataAllCollectionTypes'; }
}

// @Route("/void-response")
export class TestVoidResponse
{

    public constructor(init?: Partial<TestVoidResponse>) { (Object as any).assign(this, init); }
}

// @Route("/null-response")
export class TestNullResponse
{

    public constructor(init?: Partial<TestNullResponse>) { (Object as any).assign(this, init); }
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

// @Route("/assignroles")
// @DataContract
export class AssignRoles implements IReturn<AssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public permissions: string[];

    // @DataMember(Order=3)
    public roles: string[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<AssignRoles>) { (Object as any).assign(this, init); }
    public createResponse() { return new AssignRolesResponse(); }
    public getTypeName() { return 'AssignRoles'; }
}

// @Route("/unassignroles")
// @DataContract
export class UnAssignRoles implements IReturn<UnAssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public permissions: string[];

    // @DataMember(Order=3)
    public roles: string[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<UnAssignRoles>) { (Object as any).assign(this, init); }
    public createResponse() { return new UnAssignRolesResponse(); }
    public getTypeName() { return 'UnAssignRoles'; }
}

// @Route("/session-to-token")
// @DataContract
export class ConvertSessionToToken implements IReturn<ConvertSessionToTokenResponse>, IPost
{
    // @DataMember(Order=1)
    public preserveSession: boolean;

    // @DataMember(Order=2)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ConvertSessionToToken>) { (Object as any).assign(this, init); }
    public createResponse() { return new ConvertSessionToTokenResponse(); }
    public getTypeName() { return 'ConvertSessionToToken'; }
}

// @Route("/access-token")
// @DataContract
export class GetAccessToken implements IReturn<GetAccessTokenResponse>, IPost
{
    // @DataMember(Order=1)
    public refreshToken: string;

    // @DataMember(Order=2)
    public useTokenCookie?: boolean;

    // @DataMember(Order=3)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<GetAccessToken>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetAccessTokenResponse(); }
    public getTypeName() { return 'GetAccessToken'; }
}

export class QueryRockstarAudit extends QueryDbTenant_2<RockstarAuditTenant, RockstarAuto> implements IReturn<QueryResponse<RockstarAuto>>
{
    public id?: number;

    public constructor(init?: Partial<QueryRockstarAudit>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<RockstarAuto>(); }
    public getTypeName() { return 'QueryRockstarAudit'; }
}

export class QueryRockstarAuditSubOr extends QueryDb_2<RockstarAuditTenant, RockstarAuto> implements IReturn<QueryResponse<RockstarAuto>>
{
    public firstNameStartsWith: string;
    public ageOlderThan?: number;

    public constructor(init?: Partial<QueryRockstarAuditSubOr>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<RockstarAuto>(); }
    public getTypeName() { return 'QueryRockstarAuditSubOr'; }
}

export class QueryPocoBase extends QueryDb_1<OnlyDefinedInGenericType> implements IReturn<QueryResponse<OnlyDefinedInGenericType>>
{
    public id: number;

    public constructor(init?: Partial<QueryPocoBase>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<OnlyDefinedInGenericType>(); }
    public getTypeName() { return 'QueryPocoBase'; }
}

export class QueryPocoIntoBase extends QueryDb_2<OnlyDefinedInGenericTypeFrom, OnlyDefinedInGenericTypeInto> implements IReturn<QueryResponse<OnlyDefinedInGenericTypeInto>>
{
    public id: number;

    public constructor(init?: Partial<QueryPocoIntoBase>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<OnlyDefinedInGenericTypeInto>(); }
    public getTypeName() { return 'QueryPocoIntoBase'; }
}

// @Route("/rockstars", "GET")
export class QueryRockstars extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{

    public constructor(init?: Partial<QueryRockstars>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<Rockstar>(); }
    public getTypeName() { return 'QueryRockstars'; }
}

export class CreateRockstarAudit extends RockstarBase implements IReturn<RockstarWithIdResponse>, ICreateDb<RockstarAudit>
{

    public constructor(init?: Partial<CreateRockstarAudit>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new RockstarWithIdResponse(); }
    public getTypeName() { return 'CreateRockstarAudit'; }
}

export class CreateRockstarAuditTenant extends CreateAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse> implements IReturn<RockstarWithIdAndResultResponse>, IHasSessionId
{
    public sessionId: string;
    public firstName: string;
    public lastName: string;
    public age?: number;
    public dateOfBirth: string;
    public dateDied?: string;
    public livingStatus: LivingStatus;

    public constructor(init?: Partial<CreateRockstarAuditTenant>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new RockstarWithIdAndResultResponse(); }
    public getTypeName() { return 'CreateRockstarAuditTenant'; }
}

export class UpdateRockstarAuditTenant extends UpdateAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse> implements IReturn<RockstarWithIdAndResultResponse>, IHasSessionId
{
    public sessionId: string;
    public id: number;
    public firstName: string;
    public livingStatus?: LivingStatus;

    public constructor(init?: Partial<UpdateRockstarAuditTenant>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new RockstarWithIdAndResultResponse(); }
    public getTypeName() { return 'UpdateRockstarAuditTenant'; }
}

export class PatchRockstarAuditTenant extends PatchAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse> implements IReturn<RockstarWithIdAndResultResponse>, IHasSessionId
{
    public sessionId: string;
    public id: number;
    public firstName: string;
    public livingStatus?: LivingStatus;

    public constructor(init?: Partial<PatchRockstarAuditTenant>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new RockstarWithIdAndResultResponse(); }
    public getTypeName() { return 'PatchRockstarAuditTenant'; }
}

export class SoftDeleteAuditTenant extends SoftDeleteAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse> implements IReturn<RockstarWithIdAndResultResponse>
{
    public id: number;

    public constructor(init?: Partial<SoftDeleteAuditTenant>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new RockstarWithIdAndResultResponse(); }
    public getTypeName() { return 'SoftDeleteAuditTenant'; }
}

export class CreateRockstarAuditMqToken extends RockstarBase implements IReturn<RockstarWithIdResponse>, ICreateDb<RockstarAudit>, IHasBearerToken
{
    public bearerToken: string;

    public constructor(init?: Partial<CreateRockstarAuditMqToken>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new RockstarWithIdResponse(); }
    public getTypeName() { return 'CreateRockstarAuditMqToken'; }
}

export class RealDeleteAuditTenant implements IReturn<RockstarWithIdAndCountResponse>, IDeleteDb<RockstarAuditTenant>, IHasSessionId
{
    public sessionId: string;
    public id: number;
    public age?: number;

    public constructor(init?: Partial<RealDeleteAuditTenant>) { (Object as any).assign(this, init); }
    public createResponse() { return new RockstarWithIdAndCountResponse(); }
    public getTypeName() { return 'RealDeleteAuditTenant'; }
}

export class CreateRockstarVersion extends RockstarBase implements IReturn<RockstarWithIdAndRowVersionResponse>, ICreateDb<RockstarVersion>
{

    public constructor(init?: Partial<CreateRockstarVersion>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new RockstarWithIdAndRowVersionResponse(); }
    public getTypeName() { return 'CreateRockstarVersion'; }
}

