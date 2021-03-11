export interface IReturn<T> {
    createResponse(): T;
}
export interface IReturnVoid {
    createResponse(): void;
}
export interface ICreateDb<Table> {
}
export interface IUpdateDb<Table> {
}
export interface IPatchDb<Table> {
}
export interface IHasSessionId {
    sessionId: string;
}
export interface IHasBearerToken {
    bearerToken: string;
}
export interface IGet {
}
export interface IPost {
}
export interface IPut {
}
export interface IDelete {
}
export interface IPatch {
}
export interface IDeleteDb<Table> {
}
export declare class ResponseError {
    errorCode: string;
    fieldName: string;
    message: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ResponseError>);
}
export declare class ResponseStatus {
    errorCode: string;
    message: string;
    stackTrace: string;
    errors: ResponseError[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ResponseStatus>);
}
export declare class CustomType {
    id: number;
    name: string;
    constructor(init?: Partial<CustomType>);
}
export declare class SetterType {
    id: number;
    name: string;
    constructor(init?: Partial<SetterType>);
}
export declare class Item {
    name: string;
    description: string;
    constructor(init?: Partial<Item>);
}
export interface IAuthTokens {
    provider: string;
    userId: string;
    accessToken: string;
    accessTokenSecret: string;
    refreshToken: string;
    refreshTokenExpiry?: string;
    requestToken: string;
    requestTokenSecret: string;
    items: {
        [index: string]: string;
    };
}
export declare class AuthUserSession {
    referrerUrl: string;
    id: string;
    userAuthId: string;
    userAuthName: string;
    userName: string;
    twitterUserId: string;
    twitterScreenName: string;
    facebookUserId: string;
    facebookUserName: string;
    firstName: string;
    lastName: string;
    displayName: string;
    company: string;
    email: string;
    primaryEmail: string;
    phoneNumber: string;
    birthDate?: string;
    birthDateRaw: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    culture: string;
    fullName: string;
    gender: string;
    language: string;
    mailAddress: string;
    nickname: string;
    postalCode: string;
    timeZone: string;
    requestTokenSecret: string;
    createdAt: string;
    lastModified: string;
    roles: string[];
    permissions: string[];
    isAuthenticated: boolean;
    fromToken: boolean;
    profileUrl: string;
    sequence: string;
    tag: number;
    authProvider: string;
    providerOAuthAccess: IAuthTokens[];
    meta: {
        [index: string]: string;
    };
    audiences: string[];
    scopes: string[];
    dns: string;
    rsa: string;
    sid: string;
    hash: string;
    homePhone: string;
    mobilePhone: string;
    webpage: string;
    emailConfirmed?: boolean;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    securityStamp: string;
    type: string;
    constructor(init?: Partial<AuthUserSession>);
}
export declare class MetadataTestNestedChild {
    name: string;
    constructor(init?: Partial<MetadataTestNestedChild>);
}
export declare class MetadataTestChild {
    name: string;
    results: MetadataTestNestedChild[];
    constructor(init?: Partial<MetadataTestChild>);
}
export declare class MenuItemExampleItem {
    name1: string;
    constructor(init?: Partial<MenuItemExampleItem>);
}
export declare class MenuItemExample {
    name1: string;
    menuItemExampleItem: MenuItemExampleItem;
    constructor(init?: Partial<MenuItemExample>);
}
export declare class MenuExample {
    menuItemExample1: MenuItemExample;
    constructor(init?: Partial<MenuExample>);
}
export declare class NestedClass {
    value: string;
    constructor(init?: Partial<NestedClass>);
}
export declare class ListResult {
    result: string;
    constructor(init?: Partial<ListResult>);
}
export declare class ArrayResult {
    result: string;
    constructor(init?: Partial<ArrayResult>);
}
export declare enum EnumType {
    Value1 = "Value1",
    Value2 = "Value2",
    Value3 = "Value3",
}
export declare enum EnumTypeFlags {
    Value1 = 0,
    Value2 = 1,
    Value3 = 2,
}
export declare enum EnumWithValues {
    None = "None",
    Value1 = "Member 1",
    Value2 = "Value2",
}
export declare enum EnumFlags {
    Value0 = "Value0",
    Value1 = "Value 1",
    Value2 = "Value2",
    Value3 = "Value3",
    Value123 = "Value123",
}
export declare enum EnumAsInt {
    Value1 = 1000,
    Value2 = 2000,
    Value3 = 3000,
}
export declare enum EnumStyle {
    lower = "lower",
    UPPER = "UPPER",
    PascalCase = "PascalCase",
    camelCase = "camelCase",
    camelUPPER = "camelUPPER",
    PascalUPPER = "PascalUPPER",
}
export declare enum EnumStyleMembers {
    Lower = "lower",
    Upper = "UPPER",
    PascalCase = "PascalCase",
    CamelCase = "camelCase",
    CamelUpper = "camelUPPER",
    PascalUpper = "PascalUPPER",
}
export declare class KeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
    constructor(init?: Partial<KeyValuePair<TKey, TValue>>);
}
export declare class SubType {
    id: number;
    name: string;
    constructor(init?: Partial<SubType>);
}
export declare class AllTypesBase {
    id: number;
    nullableId?: number;
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
    keyValuePair: KeyValuePair<string, string>;
    nullableDateTime?: string;
    nullableTimeSpan?: string;
    stringList: string[];
    stringArray: string[];
    stringMap: {
        [index: string]: string;
    };
    intStringMap: {
        [index: number]: string;
    };
    subType: SubType;
    constructor(init?: Partial<AllTypesBase>);
}
export declare class Poco {
    name: string;
    constructor(init?: Partial<Poco>);
}
export declare class HelloBase {
    id: number;
    constructor(init?: Partial<HelloBase>);
}
export declare class HelloResponseBase {
    refId: number;
    constructor(init?: Partial<HelloResponseBase>);
}
export declare class HelloBase_1<T> {
    items: T[];
    counts: number[];
    constructor(init?: Partial<HelloBase_1<T>>);
}
export declare class HelloWithReturnResponse {
    result: string;
    constructor(init?: Partial<HelloWithReturnResponse>);
}
export declare class HelloType {
    result: string;
    constructor(init?: Partial<HelloType>);
}
export interface IPoco {
    name: string;
}
export interface IEmptyInterface {
}
export declare class EmptyClass {
    constructor(init?: Partial<EmptyClass>);
}
export declare class InnerType {
    id: number;
    name: string;
    constructor(init?: Partial<InnerType>);
}
export declare enum InnerEnum {
    Foo = "Foo",
    Bar = "Bar",
    Baz = "Baz",
}
export declare enum DayOfWeek {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
}
export declare enum ScopeType {
    Global = 1,
    Sale = 2,
}
export declare class PingService {
    constructor(init?: Partial<PingService>);
}
export declare class ReturnedDto {
    id: number;
    constructor(init?: Partial<ReturnedDto>);
}
export declare class CustomUserSession extends AuthUserSession {
    customName: string;
    customInfo: string;
    constructor(init?: Partial<CustomUserSession>);
}
export declare class UnAuthInfo {
    customInfo: string;
    constructor(init?: Partial<UnAuthInfo>);
}
export declare class Channel {
    name: string;
    value: string;
    constructor(init?: Partial<Channel>);
}
export declare class Device {
    id: number;
    type: string;
    timeStamp: number;
    channels: Channel[];
    constructor(init?: Partial<Device>);
}
export declare class Logger {
    id: number;
    devices: Device[];
    constructor(init?: Partial<Logger>);
}
export declare class Rockstar {
    id: number;
    firstName: string;
    lastName: string;
    age?: number;
    constructor(init?: Partial<Rockstar>);
}
export declare class QueryBase {
    skip?: number;
    take?: number;
    orderBy: string;
    orderByDesc: string;
    include: string;
    fields: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<QueryBase>);
}
export declare class QueryDb_2<From, Into> extends QueryBase {
    constructor(init?: Partial<QueryDb_2<From, Into>>);
}
export declare class QueryDbTenant_2<From, Into> extends QueryDb_2<From, Into> {
    constructor(init?: Partial<QueryDbTenant_2<From, Into>>);
}
export declare class AuditBase {
    createdDate: string;
    createdBy: string;
    modifiedDate: string;
    modifiedBy: string;
    deletedDate?: string;
    deletedBy: string;
    constructor(init?: Partial<AuditBase>);
}
export declare enum LivingStatus {
    Alive = "Alive",
    Dead = "Dead",
}
export declare class RockstarAuditTenant extends AuditBase {
    tenantId: number;
    id: number;
    firstName: string;
    lastName: string;
    age?: number;
    dateOfBirth: string;
    dateDied?: string;
    livingStatus: LivingStatus;
    constructor(init?: Partial<RockstarAuditTenant>);
}
export declare class RockstarBase {
    firstName: string;
    lastName: string;
    age?: number;
    dateOfBirth: string;
    dateDied?: string;
    livingStatus: LivingStatus;
    constructor(init?: Partial<RockstarBase>);
}
export declare class RockstarAuto extends RockstarBase {
    id: number;
    constructor(init?: Partial<RockstarAuto>);
}
export declare class QueryDb_1<T> extends QueryBase {
    constructor(init?: Partial<QueryDb_1<T>>);
}
export declare class OnlyDefinedInGenericType {
    id: number;
    name: string;
    constructor(init?: Partial<OnlyDefinedInGenericType>);
}
export declare class OnlyDefinedInGenericTypeFrom {
    id: number;
    name: string;
    constructor(init?: Partial<OnlyDefinedInGenericTypeFrom>);
}
export declare class OnlyDefinedInGenericTypeInto {
    id: number;
    name: string;
    constructor(init?: Partial<OnlyDefinedInGenericTypeInto>);
}
export declare class RockstarAudit extends RockstarBase {
    id: number;
    createdDate: string;
    createdBy: string;
    createdInfo: string;
    modifiedDate: string;
    modifiedBy: string;
    modifiedInfo: string;
    constructor(init?: Partial<RockstarAudit>);
}
export declare class CreateAuditBase<Table, TResponse> implements ICreateDb<Table> {
    constructor(init?: Partial<CreateAuditBase<Table, TResponse>>);
}
export declare class CreateAuditTenantBase<Table, TResponse> extends CreateAuditBase<Table, TResponse> {
    constructor(init?: Partial<CreateAuditTenantBase<Table, TResponse>>);
}
export declare class UpdateAuditBase<Table, TResponse> implements IUpdateDb<Table> {
    constructor(init?: Partial<UpdateAuditBase<Table, TResponse>>);
}
export declare class UpdateAuditTenantBase<Table, TResponse> extends UpdateAuditBase<Table, TResponse> {
    constructor(init?: Partial<UpdateAuditTenantBase<Table, TResponse>>);
}
export declare class PatchAuditBase<Table, TResponse> implements IPatchDb<Table> {
    constructor(init?: Partial<PatchAuditBase<Table, TResponse>>);
}
export declare class PatchAuditTenantBase<Table, TResponse> extends PatchAuditBase<Table, TResponse> {
    constructor(init?: Partial<PatchAuditTenantBase<Table, TResponse>>);
}
export declare class SoftDeleteAuditBase<Table, TResponse> implements IUpdateDb<Table> {
    constructor(init?: Partial<SoftDeleteAuditBase<Table, TResponse>>);
}
export declare class SoftDeleteAuditTenantBase<Table, TResponse> extends SoftDeleteAuditBase<Table, TResponse> {
    constructor(init?: Partial<SoftDeleteAuditTenantBase<Table, TResponse>>);
}
export declare class RockstarVersion extends RockstarBase {
    id: number;
    rowVersion: number;
    constructor(init?: Partial<RockstarVersion>);
}
export declare class TypesGroup {
    constructor(init?: Partial<TypesGroup>);
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
    constructor(init?: Partial<ChatMessage>);
}
export declare class GetChatHistoryResponse {
    results: ChatMessage[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetChatHistoryResponse>);
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
    birthDate?: string;
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
    constructor(init?: Partial<GetUserDetailsResponse>);
}
export declare class CustomHttpErrorResponse {
    custom: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<CustomHttpErrorResponse>);
}
export declare class QueryResponseAlt<T> {
    offset: number;
    total: number;
    results: T[];
    meta: {
        [index: string]: string;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<QueryResponseAlt<T>>);
}
export declare class Items {
    results: Item[];
    constructor(init?: Partial<Items>);
}
export declare class ThrowTypeResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<ThrowTypeResponse>);
}
export declare class ThrowValidationResponse {
    age: number;
    required: string;
    email: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<ThrowValidationResponse>);
}
export declare class ThrowBusinessErrorResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<ThrowBusinessErrorResponse>);
}
export declare class Account {
    name: string;
    constructor(init?: Partial<Account>);
}
export declare class Project {
    account: string;
    name: string;
    constructor(init?: Partial<Project>);
}
export declare class SecuredResponse {
    result: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<SecuredResponse>);
}
export declare class CreateJwtResponse {
    token: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<CreateJwtResponse>);
}
export declare class CreateRefreshJwtResponse {
    token: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<CreateRefreshJwtResponse>);
}
export declare class EmptyResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<EmptyResponse>);
}
export declare class MetadataTestResponse {
    id: number;
    results: MetadataTestChild[];
    constructor(init?: Partial<MetadataTestResponse>);
}
export declare class GetExampleResponse {
    responseStatus: ResponseStatus;
    menuExample1: MenuExample;
    constructor(init?: Partial<GetExampleResponse>);
}
export declare class GetRandomIdsResponse {
    results: string[];
    constructor(init?: Partial<GetRandomIdsResponse>);
}
export declare class HelloResponse {
    result: string;
    constructor(init?: Partial<HelloResponse>);
}
/**
* Description on HelloAllResponse type
*/
export declare class HelloAnnotatedResponse {
    result: string;
    constructor(init?: Partial<HelloAnnotatedResponse>);
}
export declare class AllTypes implements IReturn<AllTypes> {
    id: number;
    nullableId?: number;
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
    keyValuePair: KeyValuePair<string, string>;
    nullableDateTime?: string;
    nullableTimeSpan?: string;
    stringList: string[];
    stringArray: string[];
    stringMap: {
        [index: string]: string;
    };
    intStringMap: {
        [index: number]: string;
    };
    subType: SubType;
    constructor(init?: Partial<AllTypes>);
    createResponse(): AllTypes;
    getTypeName(): string;
}
export declare class AllCollectionTypes implements IReturn<AllCollectionTypes> {
    intArray: number[];
    intList: number[];
    stringArray: string[];
    stringList: string[];
    floatArray: number[];
    doubleList: number[];
    byteArray: string;
    charArray: string[];
    decimalList: number[];
    pocoArray: Poco[];
    pocoList: Poco[];
    pocoLookup: {
        [index: string]: Poco[];
    };
    pocoLookupMap: {
        [index: string]: {
            [index: string]: Poco;
        }[];
    };
    constructor(init?: Partial<AllCollectionTypes>);
    createResponse(): AllCollectionTypes;
    getTypeName(): string;
}
export declare class HelloAllTypesResponse {
    result: string;
    allTypes: AllTypes;
    allCollectionTypes: AllCollectionTypes;
    constructor(init?: Partial<HelloAllTypesResponse>);
}
export declare class SubAllTypes extends AllTypesBase {
    hierarchy: number;
    constructor(init?: Partial<SubAllTypes>);
}
export declare class HelloDateTime implements IReturn<HelloDateTime> {
    dateTime: string;
    constructor(init?: Partial<HelloDateTime>);
    createResponse(): HelloDateTime;
    getTypeName(): string;
}
export declare class HelloWithDataContractResponse {
    result: string;
    constructor(init?: Partial<HelloWithDataContractResponse>);
}
/**
* Description on HelloWithDescriptionResponse type
*/
export declare class HelloWithDescriptionResponse {
    result: string;
    constructor(init?: Partial<HelloWithDescriptionResponse>);
}
export declare class HelloWithInheritanceResponse extends HelloResponseBase {
    result: string;
    constructor(init?: Partial<HelloWithInheritanceResponse>);
}
export declare class HelloWithAlternateReturnResponse extends HelloWithReturnResponse {
    altResult: string;
    constructor(init?: Partial<HelloWithAlternateReturnResponse>);
}
export declare class HelloWithRouteResponse {
    result: string;
    constructor(init?: Partial<HelloWithRouteResponse>);
}
export declare class HelloWithTypeResponse {
    result: HelloType;
    constructor(init?: Partial<HelloWithTypeResponse>);
}
export declare class HelloInnerTypesResponse {
    innerType: InnerType;
    innerEnum: InnerEnum;
    constructor(init?: Partial<HelloInnerTypesResponse>);
}
export declare class HelloVerbResponse {
    result: string;
    constructor(init?: Partial<HelloVerbResponse>);
}
export declare class EnumResponse {
    operator: ScopeType;
    constructor(init?: Partial<EnumResponse>);
}
export declare class HelloTypes implements IReturn<HelloTypes> {
    string: string;
    bool: boolean;
    int: number;
    constructor(init?: Partial<HelloTypes>);
    createResponse(): HelloTypes;
    getTypeName(): string;
}
export declare class HelloZipResponse {
    result: string;
    constructor(init?: Partial<HelloZipResponse>);
}
export declare class PingResponse {
    responses: {
        [index: string]: ResponseStatus;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<PingResponse>);
}
export declare class RequiresRoleResponse {
    result: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<RequiresRoleResponse>);
}
export declare class SendVerbResponse {
    id: number;
    pathInfo: string;
    requestMethod: string;
    constructor(init?: Partial<SendVerbResponse>);
}
export declare class GetSessionResponse {
    result: CustomUserSession;
    unAuthInfo: UnAuthInfo;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetSessionResponse>);
}
export declare class GetStuffResponse {
    summaryDate?: string;
    summaryEndDate?: string;
    symbol: string;
    email: string;
    isEnabled?: boolean;
    constructor(init?: Partial<GetStuffResponse>);
}
export declare class StoreLogsResponse {
    existingLogs: Logger[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<StoreLogsResponse>);
}
export declare class TestAuthResponse {
    userId: string;
    sessionId: string;
    userName: string;
    displayName: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<TestAuthResponse>);
}
export declare class RequiresAdmin implements IReturn<RequiresAdmin> {
    id: number;
    constructor(init?: Partial<RequiresAdmin>);
    createResponse(): RequiresAdmin;
    getTypeName(): string;
}
export declare class CustomRoute implements IReturn<CustomRoute> {
    data: string;
    constructor(init?: Partial<CustomRoute>);
    createResponse(): CustomRoute;
    getTypeName(): string;
}
export declare class Wait implements IReturn<Wait> {
    forMs: number;
    constructor(init?: Partial<Wait>);
    createResponse(): Wait;
    getTypeName(): string;
}
export declare class EchoTypes implements IReturn<EchoTypes> {
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
    constructor(init?: Partial<EchoTypes>);
    createResponse(): EchoTypes;
    getTypeName(): string;
}
export declare class EchoCollections implements IReturn<EchoCollections> {
    stringList: string[];
    stringArray: string[];
    stringMap: {
        [index: string]: string;
    };
    intStringMap: {
        [index: number]: string;
    };
    constructor(init?: Partial<EchoCollections>);
    createResponse(): EchoCollections;
    getTypeName(): string;
}
export declare class EchoComplexTypes implements IReturn<EchoComplexTypes> {
    subType: SubType;
    subTypes: SubType[];
    subTypeMap: {
        [index: string]: SubType;
    };
    stringMap: {
        [index: string]: string;
    };
    intStringMap: {
        [index: number]: string;
    };
    constructor(init?: Partial<EchoComplexTypes>);
    createResponse(): EchoComplexTypes;
    getTypeName(): string;
}
export declare class StoreRockstars extends Array<Rockstar> implements IReturn<StoreRockstars> {
    constructor(init?: Partial<StoreRockstars>);
    createResponse(): StoreRockstars;
    getTypeName(): string;
}
export declare class AuthenticateResponse implements IHasSessionId, IHasBearerToken {
    userId: string;
    sessionId: string;
    userName: string;
    displayName: string;
    referrerUrl: string;
    bearerToken: string;
    refreshToken: string;
    profileUrl: string;
    roles: string[];
    permissions: string[];
    responseStatus: ResponseStatus;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AuthenticateResponse>);
}
export declare class AssignRolesResponse {
    allRoles: string[];
    allPermissions: string[];
    meta: {
        [index: string]: string;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<AssignRolesResponse>);
}
export declare class UnAssignRolesResponse {
    allRoles: string[];
    allPermissions: string[];
    meta: {
        [index: string]: string;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UnAssignRolesResponse>);
}
export declare class ConvertSessionToTokenResponse {
    meta: {
        [index: string]: string;
    };
    accessToken: string;
    refreshToken: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<ConvertSessionToTokenResponse>);
}
export declare class GetAccessTokenResponse {
    accessToken: string;
    meta: {
        [index: string]: string;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetAccessTokenResponse>);
}
export declare class QueryResponse<T> {
    offset: number;
    total: number;
    results: T[];
    meta: {
        [index: string]: string;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<QueryResponse<T>>);
}
export declare class RockstarWithIdResponse {
    id: number;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<RockstarWithIdResponse>);
}
export declare class RockstarWithIdAndResultResponse {
    id: number;
    result: RockstarAuto;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<RockstarWithIdAndResultResponse>);
}
export declare class RockstarWithIdAndCountResponse {
    id: number;
    count: number;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<RockstarWithIdAndCountResponse>);
}
export declare class RockstarWithIdAndRowVersionResponse {
    id: number;
    rowVersion: number;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<RockstarWithIdAndRowVersionResponse>);
}
export declare class PostRawToChannel implements IReturnVoid {
    from: string;
    toUserId: string;
    channel: string;
    message: string;
    selector: string;
    constructor(init?: Partial<PostRawToChannel>);
    createResponse(): void;
    getTypeName(): string;
}
export declare class PostChatToChannel implements IReturn<ChatMessage> {
    from: string;
    toUserId: string;
    channel: string;
    message: string;
    selector: string;
    constructor(init?: Partial<PostChatToChannel>);
    createResponse(): ChatMessage;
    getTypeName(): string;
}
export declare class GetChatHistory implements IReturn<GetChatHistoryResponse> {
    channels: string[];
    afterId?: number;
    take?: number;
    constructor(init?: Partial<GetChatHistory>);
    createResponse(): GetChatHistoryResponse;
    getTypeName(): string;
}
export declare class ClearChatHistory implements IReturnVoid {
    constructor(init?: Partial<ClearChatHistory>);
    createResponse(): void;
    getTypeName(): string;
}
export declare class ResetServerEvents implements IReturnVoid {
    constructor(init?: Partial<ResetServerEvents>);
    createResponse(): void;
    getTypeName(): string;
}
export declare class PostObjectToChannel implements IReturnVoid {
    toUserId: string;
    channel: string;
    selector: string;
    customType: CustomType;
    setterType: SetterType;
    constructor(init?: Partial<PostObjectToChannel>);
    createResponse(): void;
    getTypeName(): string;
}
export declare class GetUserDetails implements IReturn<GetUserDetailsResponse> {
    constructor(init?: Partial<GetUserDetails>);
    createResponse(): GetUserDetailsResponse;
    getTypeName(): string;
}
export declare class CustomHttpError implements IReturn<CustomHttpErrorResponse> {
    statusCode: number;
    statusDescription: string;
    constructor(init?: Partial<CustomHttpError>);
    createResponse(): CustomHttpErrorResponse;
    getTypeName(): string;
}
export declare class AltQueryItems implements IReturn<QueryResponseAlt<Item>> {
    name: string;
    constructor(init?: Partial<AltQueryItems>);
    createResponse(): QueryResponseAlt<Item>;
    getTypeName(): string;
}
export declare class GetItems implements IReturn<Items> {
    constructor(init?: Partial<GetItems>);
    createResponse(): Items;
    getTypeName(): string;
}
export declare class GetNakedItems implements IReturn<Item[]> {
    constructor(init?: Partial<GetNakedItems>);
    createResponse(): Item[];
    getTypeName(): string;
}
export declare class DummyTypes {
    helloResponses: HelloResponse[];
    listResult: ListResult[];
    arrayResult: ArrayResult[];
    constructor(init?: Partial<DummyTypes>);
}
export declare class ThrowHttpError {
    status?: number;
    message: string;
    constructor(init?: Partial<ThrowHttpError>);
}
export declare class Throw404 {
    message: string;
    constructor(init?: Partial<Throw404>);
}
export declare class ThrowCustom400 {
    message: string;
    constructor(init?: Partial<ThrowCustom400>);
}
export declare class ThrowType implements IReturn<ThrowTypeResponse> {
    type: string;
    message: string;
    constructor(init?: Partial<ThrowType>);
    createResponse(): ThrowTypeResponse;
    getTypeName(): string;
}
export declare class ThrowValidation implements IReturn<ThrowValidationResponse> {
    age: number;
    required: string;
    email: string;
    constructor(init?: Partial<ThrowValidation>);
    createResponse(): ThrowValidationResponse;
    getTypeName(): string;
}
export declare class ThrowBusinessError implements IReturn<ThrowBusinessErrorResponse> {
    constructor(init?: Partial<ThrowBusinessError>);
    createResponse(): ThrowBusinessErrorResponse;
    getTypeName(): string;
}
export declare class RootPathRoutes {
    path: string;
    constructor(init?: Partial<RootPathRoutes>);
}
export declare class GetAccount implements IReturn<Account> {
    account: string;
    constructor(init?: Partial<GetAccount>);
    createResponse(): Account;
    getTypeName(): string;
}
export declare class GetProject implements IReturn<Project> {
    account: string;
    project: string;
    constructor(init?: Partial<GetProject>);
    createResponse(): Project;
    getTypeName(): string;
}
export declare class ImageAsStream implements IReturn<Blob> {
    format: string;
    constructor(init?: Partial<ImageAsStream>);
    createResponse(): Blob;
    getTypeName(): string;
}
export declare class ImageAsBytes implements IReturn<string> {
    format: string;
    constructor(init?: Partial<ImageAsBytes>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class ImageAsCustomResult implements IReturn<string> {
    format: string;
    constructor(init?: Partial<ImageAsCustomResult>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class ImageWriteToResponse implements IReturn<string> {
    format: string;
    constructor(init?: Partial<ImageWriteToResponse>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class ImageAsFile implements IReturn<string> {
    format: string;
    constructor(init?: Partial<ImageAsFile>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class ImageAsRedirect {
    format: string;
    constructor(init?: Partial<ImageAsRedirect>);
}
export declare class HelloImage implements IReturn<string> {
    name: string;
    format: string;
    width?: number;
    height?: number;
    fontSize?: number;
    fontFamily: string;
    foreground: string;
    background: string;
    constructor(init?: Partial<HelloImage>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class Secured implements IReturn<SecuredResponse> {
    name: string;
    constructor(init?: Partial<Secured>);
    createResponse(): SecuredResponse;
    getTypeName(): string;
}
export declare class CreateJwt extends AuthUserSession implements IReturn<CreateJwtResponse> {
    jwtExpiry?: string;
    constructor(init?: Partial<CreateJwt>);
    createResponse(): CreateJwtResponse;
    getTypeName(): string;
}
export declare class CreateRefreshJwt implements IReturn<CreateRefreshJwtResponse> {
    userAuthId: string;
    jwtExpiry?: string;
    constructor(init?: Partial<CreateRefreshJwt>);
    createResponse(): CreateRefreshJwtResponse;
    getTypeName(): string;
}
export declare class InvalidateLastAccessToken implements IReturn<EmptyResponse> {
    constructor(init?: Partial<InvalidateLastAccessToken>);
    createResponse(): EmptyResponse;
    getTypeName(): string;
}
export declare class ViewLogs implements IReturn<string> {
    clear: boolean;
    constructor(init?: Partial<ViewLogs>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class MetadataTest implements IReturn<MetadataTestResponse> {
    id: number;
    constructor(init?: Partial<MetadataTest>);
    createResponse(): MetadataTestResponse;
    getTypeName(): string;
}
export declare class MetadataTestArray implements IReturn<MetadataTestChild[]> {
    id: number;
    constructor(init?: Partial<MetadataTestArray>);
    createResponse(): MetadataTestChild[];
    getTypeName(): string;
}
export declare class GetExample implements IReturn<GetExampleResponse> {
    constructor(init?: Partial<GetExample>);
    createResponse(): GetExampleResponse;
    getTypeName(): string;
}
export declare class GetRandomIds implements IReturn<GetRandomIdsResponse> {
    take?: number;
    constructor(init?: Partial<GetRandomIds>);
    createResponse(): GetRandomIdsResponse;
    getTypeName(): string;
}
export declare class TextFileTest {
    asAttachment: boolean;
    constructor(init?: Partial<TextFileTest>);
}
export declare class ReturnText {
    text: string;
    constructor(init?: Partial<ReturnText>);
}
export declare class ReturnHtml {
    text: string;
    constructor(init?: Partial<ReturnHtml>);
}
export declare class Hello implements IReturn<HelloResponse> {
    name: string;
    title: string;
    constructor(init?: Partial<Hello>);
    createResponse(): HelloResponse;
    getTypeName(): string;
}
/**
* Description on HelloAll type
*/
export declare class HelloAnnotated implements IReturn<HelloAnnotatedResponse> {
    name: string;
    constructor(init?: Partial<HelloAnnotated>);
    createResponse(): HelloAnnotatedResponse;
    getTypeName(): string;
}
export declare class HelloWithNestedClass implements IReturn<HelloResponse> {
    name: string;
    nestedClassProp: NestedClass;
    constructor(init?: Partial<HelloWithNestedClass>);
    createResponse(): HelloResponse;
    getTypeName(): string;
}
export declare class HelloList implements IReturn<ListResult[]> {
    names: string[];
    constructor(init?: Partial<HelloList>);
    createResponse(): ListResult[];
    getTypeName(): string;
}
export declare class HelloArray implements IReturn<ArrayResult[]> {
    names: string[];
    constructor(init?: Partial<HelloArray>);
    createResponse(): ArrayResult[];
    getTypeName(): string;
}
export declare class HelloWithEnum {
    enumProp: EnumType;
    enumTypeFlags: EnumTypeFlags;
    enumWithValues: EnumWithValues;
    nullableEnumProp?: EnumType;
    enumFlags: EnumFlags;
    enumAsInt: EnumAsInt;
    enumStyle: EnumStyle;
    enumStyleMembers: EnumStyleMembers;
    constructor(init?: Partial<HelloWithEnum>);
}
export declare class HelloWithEnumList {
    enumProp: EnumType[];
    enumWithValues: EnumWithValues[];
    nullableEnumProp: EnumType[];
    enumFlags: EnumFlags[];
    enumStyle: EnumStyle[];
    constructor(init?: Partial<HelloWithEnumList>);
}
export declare class HelloWithEnumMap {
    enumProp: {
        [index: string]: EnumType;
    };
    enumWithValues: {
        [index: string]: EnumWithValues;
    };
    nullableEnumProp: {
        [index: string]: EnumType;
    };
    enumFlags: {
        [index: string]: EnumFlags;
    };
    enumStyle: {
        [index: string]: EnumStyle;
    };
    constructor(init?: Partial<HelloWithEnumMap>);
}
export declare class RestrictedAttributes {
    id: number;
    name: string;
    hello: Hello;
    constructor(init?: Partial<RestrictedAttributes>);
}
/**
* AllowedAttributes Description
*/
export declare class AllowedAttributes {
    /**
    * Range Description
    */
    range: number;
    constructor(init?: Partial<AllowedAttributes>);
}
export declare class HelloAllTypes implements IReturn<HelloAllTypesResponse> {
    name: string;
    allTypes: AllTypes;
    allCollectionTypes: AllCollectionTypes;
    constructor(init?: Partial<HelloAllTypes>);
    createResponse(): HelloAllTypesResponse;
    getTypeName(): string;
}
export declare class HelloSubAllTypes extends AllTypesBase implements IReturn<SubAllTypes> {
    hierarchy: number;
    constructor(init?: Partial<HelloSubAllTypes>);
    createResponse(): SubAllTypes;
    getTypeName(): string;
}
export declare class HelloString implements IReturn<string> {
    name: string;
    constructor(init?: Partial<HelloString>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class HelloVoid {
    name: string;
    constructor(init?: Partial<HelloVoid>);
}
export declare class HelloWithDataContract implements IReturn<HelloWithDataContractResponse> {
    name: string;
    id: number;
    constructor(init?: Partial<HelloWithDataContract>);
    createResponse(): HelloWithDataContractResponse;
    getTypeName(): string;
}
/**
* Description on HelloWithDescription type
*/
export declare class HelloWithDescription implements IReturn<HelloWithDescriptionResponse> {
    name: string;
    constructor(init?: Partial<HelloWithDescription>);
    createResponse(): HelloWithDescriptionResponse;
    getTypeName(): string;
}
export declare class HelloWithInheritance extends HelloBase implements IReturn<HelloWithInheritanceResponse> {
    name: string;
    constructor(init?: Partial<HelloWithInheritance>);
    createResponse(): HelloWithInheritanceResponse;
    getTypeName(): string;
}
export declare class HelloWithGenericInheritance extends HelloBase_1<Poco> {
    result: string;
    constructor(init?: Partial<HelloWithGenericInheritance>);
}
export declare class HelloWithGenericInheritance2 extends HelloBase_1<Hello> {
    result: string;
    constructor(init?: Partial<HelloWithGenericInheritance2>);
}
export declare class HelloWithNestedInheritance extends HelloBase_1<Item> {
    constructor(init?: Partial<HelloWithNestedInheritance>);
}
export declare class HelloWithReturn implements IReturn<HelloWithAlternateReturnResponse> {
    name: string;
    constructor(init?: Partial<HelloWithReturn>);
    createResponse(): HelloWithAlternateReturnResponse;
    getTypeName(): string;
}
export declare class HelloWithRoute implements IReturn<HelloWithRouteResponse> {
    name: string;
    constructor(init?: Partial<HelloWithRoute>);
    createResponse(): HelloWithRouteResponse;
    getTypeName(): string;
}
export declare class HelloWithType implements IReturn<HelloWithTypeResponse> {
    name: string;
    constructor(init?: Partial<HelloWithType>);
    createResponse(): HelloWithTypeResponse;
    getTypeName(): string;
}
export declare class HelloInterface {
    poco: IPoco;
    emptyInterface: IEmptyInterface;
    emptyClass: EmptyClass;
    constructor(init?: Partial<HelloInterface>);
}
export declare class HelloInnerTypes implements IReturn<HelloInnerTypesResponse> {
    constructor(init?: Partial<HelloInnerTypes>);
    createResponse(): HelloInnerTypesResponse;
    getTypeName(): string;
}
export declare class HelloBuiltin {
    dayOfWeek: DayOfWeek;
    constructor(init?: Partial<HelloBuiltin>);
}
export declare class HelloGet implements IReturn<HelloVerbResponse>, IGet {
    id: number;
    constructor(init?: Partial<HelloGet>);
    createResponse(): HelloVerbResponse;
    getTypeName(): string;
}
export declare class HelloPost extends HelloBase implements IReturn<HelloVerbResponse>, IPost {
    constructor(init?: Partial<HelloPost>);
    createResponse(): HelloVerbResponse;
    getTypeName(): string;
}
export declare class HelloPut implements IReturn<HelloVerbResponse>, IPut {
    id: number;
    constructor(init?: Partial<HelloPut>);
    createResponse(): HelloVerbResponse;
    getTypeName(): string;
}
export declare class HelloDelete implements IReturn<HelloVerbResponse>, IDelete {
    id: number;
    constructor(init?: Partial<HelloDelete>);
    createResponse(): HelloVerbResponse;
    getTypeName(): string;
}
export declare class HelloPatch implements IReturn<HelloVerbResponse>, IPatch {
    id: number;
    constructor(init?: Partial<HelloPatch>);
    createResponse(): HelloVerbResponse;
    getTypeName(): string;
}
export declare class HelloReturnVoid implements IReturnVoid {
    id: number;
    constructor(init?: Partial<HelloReturnVoid>);
    createResponse(): void;
    getTypeName(): string;
}
export declare class EnumRequest implements IReturn<EnumResponse>, IPut {
    operator: ScopeType;
    constructor(init?: Partial<EnumRequest>);
    createResponse(): EnumResponse;
    getTypeName(): string;
}
export declare class HelloZip implements IReturn<HelloZipResponse> {
    name: string;
    test: string[];
    constructor(init?: Partial<HelloZip>);
    createResponse(): HelloZipResponse;
    getTypeName(): string;
}
export declare class Ping implements IReturn<PingResponse> {
    constructor(init?: Partial<Ping>);
    createResponse(): PingResponse;
    getTypeName(): string;
}
export declare class ResetConnections {
    constructor(init?: Partial<ResetConnections>);
}
export declare class RequiresRole implements IReturn<RequiresRoleResponse> {
    constructor(init?: Partial<RequiresRole>);
    createResponse(): RequiresRoleResponse;
    getTypeName(): string;
}
export declare class ReturnString implements IReturn<string> {
    data: string;
    constructor(init?: Partial<ReturnString>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class ReturnBytes implements IReturn<string> {
    data: string;
    constructor(init?: Partial<ReturnBytes>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class ReturnStream implements IReturn<Blob> {
    data: string;
    constructor(init?: Partial<ReturnStream>);
    createResponse(): Blob;
    getTypeName(): string;
}
export declare class GetRequest1 implements IReturn<ReturnedDto[]>, IGet {
    constructor(init?: Partial<GetRequest1>);
    createResponse(): ReturnedDto[];
    getTypeName(): string;
}
export declare class GetRequest2 implements IReturn<ReturnedDto[]>, IGet {
    constructor(init?: Partial<GetRequest2>);
    createResponse(): ReturnedDto[];
    getTypeName(): string;
}
export declare class SendJson implements IReturn<string> {
    id: number;
    name: string;
    constructor(init?: Partial<SendJson>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class SendText implements IReturn<string> {
    id: number;
    name: string;
    contentType: string;
    constructor(init?: Partial<SendText>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class SendRaw implements IReturn<string> {
    id: number;
    name: string;
    contentType: string;
    constructor(init?: Partial<SendRaw>);
    createResponse(): string;
    getTypeName(): string;
}
export declare class SendDefault implements IReturn<SendVerbResponse> {
    id: number;
    constructor(init?: Partial<SendDefault>);
    createResponse(): SendVerbResponse;
    getTypeName(): string;
}
export declare class SendRestGet implements IReturn<SendVerbResponse>, IGet {
    id: number;
    constructor(init?: Partial<SendRestGet>);
    createResponse(): SendVerbResponse;
    getTypeName(): string;
}
export declare class SendGet implements IReturn<SendVerbResponse>, IGet {
    id: number;
    constructor(init?: Partial<SendGet>);
    createResponse(): SendVerbResponse;
    getTypeName(): string;
}
export declare class SendPost implements IReturn<SendVerbResponse>, IPost {
    id: number;
    constructor(init?: Partial<SendPost>);
    createResponse(): SendVerbResponse;
    getTypeName(): string;
}
export declare class SendPut implements IReturn<SendVerbResponse>, IPut {
    id: number;
    constructor(init?: Partial<SendPut>);
    createResponse(): SendVerbResponse;
    getTypeName(): string;
}
export declare class SendReturnVoid implements IReturnVoid {
    id: number;
    constructor(init?: Partial<SendReturnVoid>);
    createResponse(): void;
    getTypeName(): string;
}
export declare class GetSession implements IReturn<GetSessionResponse> {
    constructor(init?: Partial<GetSession>);
    createResponse(): GetSessionResponse;
    getTypeName(): string;
}
export declare class UpdateSession implements IReturn<GetSessionResponse> {
    customName: string;
    constructor(init?: Partial<UpdateSession>);
    createResponse(): GetSessionResponse;
    getTypeName(): string;
}
export declare class GetStuff implements IReturn<GetStuffResponse> {
    summaryDate?: string;
    summaryEndDate?: string;
    symbol: string;
    email: string;
    isEnabled?: boolean;
    constructor(init?: Partial<GetStuff>);
    createResponse(): GetStuffResponse;
    getTypeName(): string;
}
export declare class StoreLogs implements IReturn<StoreLogsResponse> {
    loggers: Logger[];
    constructor(init?: Partial<StoreLogs>);
    createResponse(): StoreLogsResponse;
    getTypeName(): string;
}
export declare class HelloAuth implements IReturn<HelloResponse> {
    name: string;
    constructor(init?: Partial<HelloAuth>);
    createResponse(): HelloResponse;
    getTypeName(): string;
}
export declare class TestAuth implements IReturn<TestAuthResponse> {
    constructor(init?: Partial<TestAuth>);
    createResponse(): TestAuthResponse;
    getTypeName(): string;
}
export declare class TestDataAllTypes implements IReturn<AllTypes> {
    constructor(init?: Partial<TestDataAllTypes>);
    createResponse(): AllTypes;
    getTypeName(): string;
}
export declare class TestDataAllCollectionTypes implements IReturn<AllCollectionTypes> {
    constructor(init?: Partial<TestDataAllCollectionTypes>);
    createResponse(): AllCollectionTypes;
    getTypeName(): string;
}
export declare class TestVoidResponse {
    constructor(init?: Partial<TestVoidResponse>);
}
export declare class TestNullResponse {
    constructor(init?: Partial<TestNullResponse>);
}
export declare class Authenticate implements IReturn<AuthenticateResponse>, IPost {
    provider: string;
    state: string;
    oauth_token: string;
    oauth_verifier: string;
    userName: string;
    password: string;
    rememberMe?: boolean;
    errorView: string;
    nonce: string;
    uri: string;
    response: string;
    qop: string;
    nc: string;
    cnonce: string;
    useTokenCookie?: boolean;
    accessToken: string;
    accessTokenSecret: string;
    scope: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<Authenticate>);
    createResponse(): AuthenticateResponse;
    getTypeName(): string;
}
export declare class AssignRoles implements IReturn<AssignRolesResponse>, IPost {
    userName: string;
    permissions: string[];
    roles: string[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AssignRoles>);
    createResponse(): AssignRolesResponse;
    getTypeName(): string;
}
export declare class UnAssignRoles implements IReturn<UnAssignRolesResponse>, IPost {
    userName: string;
    permissions: string[];
    roles: string[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<UnAssignRoles>);
    createResponse(): UnAssignRolesResponse;
    getTypeName(): string;
}
export declare class ConvertSessionToToken implements IReturn<ConvertSessionToTokenResponse>, IPost {
    preserveSession: boolean;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ConvertSessionToToken>);
    createResponse(): ConvertSessionToTokenResponse;
    getTypeName(): string;
}
export declare class GetAccessToken implements IReturn<GetAccessTokenResponse>, IPost {
    refreshToken: string;
    useTokenCookie?: boolean;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<GetAccessToken>);
    createResponse(): GetAccessTokenResponse;
    getTypeName(): string;
}
export declare class QueryRockstarAudit extends QueryDbTenant_2<RockstarAuditTenant, RockstarAuto> implements IReturn<QueryResponse<RockstarAuto>> {
    id?: number;
    constructor(init?: Partial<QueryRockstarAudit>);
    createResponse(): QueryResponse<RockstarAuto>;
    getTypeName(): string;
}
export declare class QueryRockstarAuditSubOr extends QueryDb_2<RockstarAuditTenant, RockstarAuto> implements IReturn<QueryResponse<RockstarAuto>> {
    firstNameStartsWith: string;
    ageOlderThan?: number;
    constructor(init?: Partial<QueryRockstarAuditSubOr>);
    createResponse(): QueryResponse<RockstarAuto>;
    getTypeName(): string;
}
export declare class QueryPocoBase extends QueryDb_1<OnlyDefinedInGenericType> implements IReturn<QueryResponse<OnlyDefinedInGenericType>> {
    id: number;
    constructor(init?: Partial<QueryPocoBase>);
    createResponse(): QueryResponse<OnlyDefinedInGenericType>;
    getTypeName(): string;
}
export declare class QueryPocoIntoBase extends QueryDb_2<OnlyDefinedInGenericTypeFrom, OnlyDefinedInGenericTypeInto> implements IReturn<QueryResponse<OnlyDefinedInGenericTypeInto>> {
    id: number;
    constructor(init?: Partial<QueryPocoIntoBase>);
    createResponse(): QueryResponse<OnlyDefinedInGenericTypeInto>;
    getTypeName(): string;
}
export declare class QueryRockstars extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>> {
    constructor(init?: Partial<QueryRockstars>);
    createResponse(): QueryResponse<Rockstar>;
    getTypeName(): string;
}
export declare class CreateRockstarAudit extends RockstarBase implements IReturn<RockstarWithIdResponse>, ICreateDb<RockstarAudit> {
    constructor(init?: Partial<CreateRockstarAudit>);
    createResponse(): RockstarWithIdResponse;
    getTypeName(): string;
}
export declare class CreateRockstarAuditTenant extends CreateAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse> implements IReturn<RockstarWithIdAndResultResponse>, IHasSessionId {
    sessionId: string;
    firstName: string;
    lastName: string;
    age?: number;
    dateOfBirth: string;
    dateDied?: string;
    livingStatus: LivingStatus;
    constructor(init?: Partial<CreateRockstarAuditTenant>);
    createResponse(): RockstarWithIdAndResultResponse;
    getTypeName(): string;
}
export declare class UpdateRockstarAuditTenant extends UpdateAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse> implements IReturn<RockstarWithIdAndResultResponse>, IHasSessionId {
    sessionId: string;
    id: number;
    firstName: string;
    livingStatus?: LivingStatus;
    constructor(init?: Partial<UpdateRockstarAuditTenant>);
    createResponse(): RockstarWithIdAndResultResponse;
    getTypeName(): string;
}
export declare class PatchRockstarAuditTenant extends PatchAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse> implements IReturn<RockstarWithIdAndResultResponse>, IHasSessionId {
    sessionId: string;
    id: number;
    firstName: string;
    livingStatus?: LivingStatus;
    constructor(init?: Partial<PatchRockstarAuditTenant>);
    createResponse(): RockstarWithIdAndResultResponse;
    getTypeName(): string;
}
export declare class SoftDeleteAuditTenant extends SoftDeleteAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse> implements IReturn<RockstarWithIdAndResultResponse> {
    id: number;
    constructor(init?: Partial<SoftDeleteAuditTenant>);
    createResponse(): RockstarWithIdAndResultResponse;
    getTypeName(): string;
}
export declare class CreateRockstarAuditMqToken extends RockstarBase implements IReturn<RockstarWithIdResponse>, ICreateDb<RockstarAudit>, IHasBearerToken {
    bearerToken: string;
    constructor(init?: Partial<CreateRockstarAuditMqToken>);
    createResponse(): RockstarWithIdResponse;
    getTypeName(): string;
}
export declare class RealDeleteAuditTenant implements IReturn<RockstarWithIdAndCountResponse>, IDeleteDb<RockstarAuditTenant>, IHasSessionId {
    sessionId: string;
    id: number;
    age?: number;
    constructor(init?: Partial<RealDeleteAuditTenant>);
    createResponse(): RockstarWithIdAndCountResponse;
    getTypeName(): string;
}
export declare class CreateRockstarVersion extends RockstarBase implements IReturn<RockstarWithIdAndRowVersionResponse>, ICreateDb<RockstarVersion> {
    constructor(init?: Partial<CreateRockstarVersion>);
    createResponse(): RockstarWithIdAndRowVersionResponse;
    getTypeName(): string;
}
