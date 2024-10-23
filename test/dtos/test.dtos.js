"use strict";
/* Options:
Date: 2021-12-16 09:26:20
Version: 5.133
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://test.servicestack.net

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rockstar = exports.Logger = exports.Device = exports.Channel = exports.PingService = exports.ScopeType = exports.DayOfWeek = exports.EmptyClass = exports.HelloBase_1 = exports.HelloBase = exports.AllTypesBase = exports.SubType = exports.KeyValuePair = exports.EnumStyleMembers = exports.EnumStyle = exports.EnumAsInt = exports.EnumFlags = exports.EnumWithValues = exports.EnumTypeFlags = exports.EnumType = exports.NestedClass = exports.AuthUserSession = exports.AuditBase = exports.StringsResponse = exports.StringResponse = exports.IdResponse = exports.GetNavItemsResponse = exports.GetNavItems = exports.NavItem = exports.RegenerateApiKeysResponse = exports.RegenerateApiKeys = exports.GetApiKeysResponse = exports.UserApiKey = exports.GetApiKeys = exports.UpdateEventSubscriberResponse = exports.UpdateEventSubscriber = exports.CancelRequestResponse = exports.ResponseStatus = exports.ResponseError = exports.CancelRequest = exports.FluentSingleValidation = exports.DeclarativeSingleValidation = exports.FluentChildValidation = exports.DeclarativeChildValidation = exports.SetterType = exports.CustomType = exports.Poco = exports.Item = exports.QueryDb_2 = exports.QueryBase = void 0;
exports.Project = exports.Account = exports.ThrowBusinessErrorResponse = exports.ThrowValidationResponse = exports.ThrowTypeResponse = exports.ReturnCustom400Response = exports.EmptyResponse = exports.Items = exports.QueryResponseAlt = exports.CustomHttpErrorResponse = exports.GetUserDetailsResponse = exports.GetChatHistoryResponse = exports.ChatMessage = exports.QueryResponse = exports.TypesGroup = exports.UnAuthInfo = exports.CustomUserSession = exports.ReturnedDto = exports.InnerEnum = exports.InnerType = exports.HelloType = exports.HelloWithReturnResponse = exports.HelloResponseBase = exports.ArrayResult = exports.ListResult = exports.MenuExample = exports.MenuItemExample = exports.MenuItemExampleItem = exports.MetadataTestChild = exports.MetadataTestNestedChild = exports.MessageCrud = exports.RockstarVersion = exports.SoftDeleteAuditTenantBase = exports.SoftDeleteAuditBase = exports.PatchAuditTenantBase = exports.PatchAuditBase = exports.UpdateAuditTenantBase = exports.UpdateAuditBase = exports.CreateAuditTenantBase = exports.CreateAuditBase = exports.RockstarAudit = exports.OnlyDefinedInGenericTypeInto = exports.OnlyDefinedInGenericTypeFrom = exports.OnlyDefinedInGenericType = exports.QueryDb_1 = exports.RockstarAuto = exports.RockstarBase = exports.RockstarAuditTenant = exports.LivingStatus = exports.QueryDbTenant_2 = void 0;
exports.QueryItems = exports.RockstarWithIdAndRowVersionResponse = exports.RockstarWithIdAndCountResponse = exports.RockstarWithIdAndResultResponse = exports.RockstarWithIdResponse = exports.GetAccessTokenResponse = exports.ConvertSessionToTokenResponse = exports.RegisterResponse = exports.UnAssignRolesResponse = exports.AssignRolesResponse = exports.AuthenticateResponse = exports.StoreRockstars = exports.EchoComplexTypes = exports.EchoCollections = exports.EchoTypes = exports.Wait = exports.CustomRoute = exports.RequiresAdmin = exports.TestAuthResponse = exports.StoreLogsResponse = exports.GetStuffResponse = exports.GetSessionResponse = exports.SendVerbResponse = exports.RequiresRoleResponse = exports.PingResponse = exports.HelloZipResponse = exports.HelloTypes = exports.EnumResponse = exports.HelloVerbResponse = exports.HelloInnerTypesResponse = exports.HelloWithTypeResponse = exports.HelloWithRouteResponse = exports.HelloWithAlternateReturnResponse = exports.HelloWithInheritanceResponse = exports.HelloWithDescriptionResponse = exports.HelloWithDataContractResponse = exports.HelloDateTime = exports.SubAllTypes = exports.HelloAllTypesResponse = exports.AllCollectionTypes = exports.AllTypes = exports.HelloAnnotatedResponse = exports.HelloResponse = exports.GetRandomIdsResponse = exports.Message = exports.GetExampleResponse = exports.MetadataTestResponse = exports.CreateRefreshJwtResponse = exports.CreateJwtResponse = exports.SecuredResponse = void 0;
exports.HelloAnnotated = exports.HelloSecure = exports.Hello = exports.ReturnHtml = exports.ReturnText = exports.TextFileTest = exports.GetRandomIds = exports.RequestMessage = exports.GetExample = exports.MetadataTestArray = exports.MetadataTest = exports.ViewLogs = exports.InvalidateLastAccessToken = exports.CreateRefreshJwt = exports.CreateJwt = exports.Secured = exports.HelloImage = exports.ImageAsRedirect = exports.ImageAsFile = exports.ImageWriteToResponse = exports.ImageAsCustomResult = exports.ImageAsBytes = exports.ImageAsStream = exports.GetProject = exports.GetAccount = exports.RootPathRoutes = exports.ThrowBusinessError = exports.ThrowValidation = exports.ThrowType = exports.ReturnCustom400 = exports.ThrowCustom400 = exports.Throw404 = exports.ThrowHttpError = exports.DummyTypes = exports.GetAccessToken = exports.ConvertSessionToToken = exports.DeclarativeSingleValidationTest = exports.DeclarativeCollectiveValidationTest = exports.DeclarativeValidationAuth = exports.GetNakedItems = exports.GetItems = exports.AltQueryItems = exports.CustomHttpError = exports.GetUserDetails = exports.PostObjectToChannel = exports.ResetServerEvents = exports.ClearChatHistory = exports.GetChatHistory = exports.PostChatToChannel = exports.PostRawToChannel = void 0;
exports.SendPut = exports.SendPost = exports.SendGet = exports.SendRestGet = exports.SendDefault = exports.SendRaw = exports.SendText = exports.SendJson = exports.GetRequest2 = exports.GetRequest1 = exports.WriteJson = exports.ReturnJsonHeader = exports.ReturnJson = exports.ReturnStream = exports.ReturnBytes = exports.ReturnString = exports.RequiresRole = exports.ResetConnections = exports.Ping = exports.HelloZip = exports.EnumRequest = exports.HelloReturnVoid = exports.HelloPatch = exports.HelloDelete = exports.HelloPut = exports.HelloPost = exports.HelloGet = exports.HelloBuiltin = exports.HelloInnerTypes = exports.HelloInterface = exports.HelloWithType = exports.HelloWithRoute = exports.HelloWithReturn = exports.HelloWithGenericInheritance2 = exports.HelloWithGenericInheritance = exports.HelloWithInheritance = exports.HelloWithDescription = exports.HelloWithDataContract = exports.HelloVoid = exports.HelloString = exports.HelloSubAllTypes = exports.HelloAllTypes = exports.AllowedAttributes = exports.RestrictedAttributes = exports.HelloWithEnumMap = exports.HelloWithEnumList = exports.HelloWithEnum = exports.HelloArray = exports.HelloList = exports.HelloWithNestedClass = void 0;
exports.CreateRockstarVersion = exports.RealDeleteAuditTenant = exports.CreateRockstarAuditMqToken = exports.SoftDeleteAuditTenant = exports.PatchRockstarAuditTenant = exports.UpdateRockstarAuditTenant = exports.CreateRockstarAuditTenant = exports.CreateRockstarAudit = exports.QueryRockstars = exports.MessageQuery = exports.QueryPocoIntoBase = exports.QueryPocoBase = exports.QueryRockstarAuditSubOr = exports.QueryRockstarAudit = exports.Register = exports.UnAssignRoles = exports.AssignRoles = exports.Authenticate = exports.TestNullResponse = exports.TestVoidResponse = exports.TestDataAllCollectionTypes = exports.TestDataAllTypes = exports.TestAuth = exports.HelloAuth = exports.StoreLogs = exports.GetStuff = exports.UpdateSession = exports.GetSession = exports.SendReturnVoid = void 0;
// @DataContract
class QueryBase {
    constructor(init) { Object.assign(this, init); }
}
exports.QueryBase = QueryBase;
class QueryDb_2 extends QueryBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.QueryDb_2 = QueryDb_2;
class Item {
    constructor(init) { Object.assign(this, init); }
}
exports.Item = Item;
class Poco {
    constructor(init) { Object.assign(this, init); }
}
exports.Poco = Poco;
class CustomType {
    constructor(init) { Object.assign(this, init); }
}
exports.CustomType = CustomType;
class SetterType {
    constructor(init) { Object.assign(this, init); }
}
exports.SetterType = SetterType;
class DeclarativeChildValidation {
    constructor(init) { Object.assign(this, init); }
}
exports.DeclarativeChildValidation = DeclarativeChildValidation;
class FluentChildValidation {
    constructor(init) { Object.assign(this, init); }
}
exports.FluentChildValidation = FluentChildValidation;
class DeclarativeSingleValidation {
    constructor(init) { Object.assign(this, init); }
}
exports.DeclarativeSingleValidation = DeclarativeSingleValidation;
class FluentSingleValidation {
    constructor(init) { Object.assign(this, init); }
}
exports.FluentSingleValidation = FluentSingleValidation;
// @DataContract
class CancelRequest {
    constructor(init) { Object.assign(this, init); }
}
exports.CancelRequest = CancelRequest;
// @DataContract
class ResponseError {
    constructor(init) { Object.assign(this, init); }
}
exports.ResponseError = ResponseError;
// @DataContract
class ResponseStatus {
    constructor(init) { Object.assign(this, init); }
}
exports.ResponseStatus = ResponseStatus;
// @DataContract
class CancelRequestResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.CancelRequestResponse = CancelRequestResponse;
// @DataContract
class UpdateEventSubscriber {
    constructor(init) { Object.assign(this, init); }
}
exports.UpdateEventSubscriber = UpdateEventSubscriber;
// @DataContract
class UpdateEventSubscriberResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UpdateEventSubscriberResponse = UpdateEventSubscriberResponse;
// @DataContract
class GetApiKeys {
    constructor(init) { Object.assign(this, init); }
}
exports.GetApiKeys = GetApiKeys;
// @DataContract
class UserApiKey {
    constructor(init) { Object.assign(this, init); }
}
exports.UserApiKey = UserApiKey;
// @DataContract
class GetApiKeysResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetApiKeysResponse = GetApiKeysResponse;
// @DataContract
class RegenerateApiKeys {
    constructor(init) { Object.assign(this, init); }
}
exports.RegenerateApiKeys = RegenerateApiKeys;
// @DataContract
class RegenerateApiKeysResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.RegenerateApiKeysResponse = RegenerateApiKeysResponse;
class NavItem {
    constructor(init) { Object.assign(this, init); }
}
exports.NavItem = NavItem;
// @DataContract
class GetNavItems {
    constructor(init) { Object.assign(this, init); }
}
exports.GetNavItems = GetNavItems;
// @DataContract
class GetNavItemsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetNavItemsResponse = GetNavItemsResponse;
// @DataContract
class IdResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.IdResponse = IdResponse;
// @DataContract
class StringResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.StringResponse = StringResponse;
// @DataContract
class StringsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.StringsResponse = StringsResponse;
// @DataContract
class AuditBase {
    constructor(init) { Object.assign(this, init); }
}
exports.AuditBase = AuditBase;
// @DataContract
class AuthUserSession {
    constructor(init) { Object.assign(this, init); }
}
exports.AuthUserSession = AuthUserSession;
class NestedClass {
    constructor(init) { Object.assign(this, init); }
}
exports.NestedClass = NestedClass;
var EnumType;
(function (EnumType) {
    EnumType["Value1"] = "Value1";
    EnumType["Value2"] = "Value2";
    EnumType["Value3"] = "Value3";
})(EnumType = exports.EnumType || (exports.EnumType = {}));
// @Flags()
var EnumTypeFlags;
(function (EnumTypeFlags) {
    EnumTypeFlags[EnumTypeFlags["Value1"] = 0] = "Value1";
    EnumTypeFlags[EnumTypeFlags["Value2"] = 1] = "Value2";
    EnumTypeFlags[EnumTypeFlags["Value3"] = 2] = "Value3";
})(EnumTypeFlags = exports.EnumTypeFlags || (exports.EnumTypeFlags = {}));
var EnumWithValues;
(function (EnumWithValues) {
    EnumWithValues["None"] = "None";
    EnumWithValues["Value1"] = "Member 1";
    EnumWithValues["Value2"] = "Value2";
})(EnumWithValues = exports.EnumWithValues || (exports.EnumWithValues = {}));
// @Flags()
var EnumFlags;
(function (EnumFlags) {
    EnumFlags[EnumFlags["Value0"] = 0] = "Value0";
    EnumFlags[EnumFlags["Value1"] = 1] = "Value1";
    EnumFlags[EnumFlags["Value2"] = 2] = "Value2";
    EnumFlags[EnumFlags["Value3"] = 4] = "Value3";
    EnumFlags[EnumFlags["Value123"] = 7] = "Value123";
})(EnumFlags = exports.EnumFlags || (exports.EnumFlags = {}));
var EnumAsInt;
(function (EnumAsInt) {
    EnumAsInt[EnumAsInt["Value1"] = 1000] = "Value1";
    EnumAsInt[EnumAsInt["Value2"] = 2000] = "Value2";
    EnumAsInt[EnumAsInt["Value3"] = 3000] = "Value3";
})(EnumAsInt = exports.EnumAsInt || (exports.EnumAsInt = {}));
var EnumStyle;
(function (EnumStyle) {
    EnumStyle["lower"] = "lower";
    EnumStyle["UPPER"] = "UPPER";
    EnumStyle["PascalCase"] = "PascalCase";
    EnumStyle["camelCase"] = "camelCase";
    EnumStyle["camelUPPER"] = "camelUPPER";
    EnumStyle["PascalUPPER"] = "PascalUPPER";
})(EnumStyle = exports.EnumStyle || (exports.EnumStyle = {}));
var EnumStyleMembers;
(function (EnumStyleMembers) {
    EnumStyleMembers["Lower"] = "lower";
    EnumStyleMembers["Upper"] = "UPPER";
    EnumStyleMembers["PascalCase"] = "PascalCase";
    EnumStyleMembers["CamelCase"] = "camelCase";
    EnumStyleMembers["CamelUpper"] = "camelUPPER";
    EnumStyleMembers["PascalUpper"] = "PascalUPPER";
})(EnumStyleMembers = exports.EnumStyleMembers || (exports.EnumStyleMembers = {}));
class KeyValuePair {
    constructor(init) { Object.assign(this, init); }
}
exports.KeyValuePair = KeyValuePair;
class SubType {
    constructor(init) { Object.assign(this, init); }
}
exports.SubType = SubType;
class AllTypesBase {
    constructor(init) { Object.assign(this, init); }
}
exports.AllTypesBase = AllTypesBase;
class HelloBase {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloBase = HelloBase;
class HelloBase_1 {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloBase_1 = HelloBase_1;
class EmptyClass {
    constructor(init) { Object.assign(this, init); }
}
exports.EmptyClass = EmptyClass;
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Sunday"] = "Sunday";
    DayOfWeek["Monday"] = "Monday";
    DayOfWeek["Tuesday"] = "Tuesday";
    DayOfWeek["Wednesday"] = "Wednesday";
    DayOfWeek["Thursday"] = "Thursday";
    DayOfWeek["Friday"] = "Friday";
    DayOfWeek["Saturday"] = "Saturday";
})(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
// @DataContract
var ScopeType;
(function (ScopeType) {
    ScopeType[ScopeType["Global"] = 1] = "Global";
    ScopeType[ScopeType["Sale"] = 2] = "Sale";
})(ScopeType = exports.ScopeType || (exports.ScopeType = {}));
class PingService {
    constructor(init) { Object.assign(this, init); }
}
exports.PingService = PingService;
class Channel {
    constructor(init) { Object.assign(this, init); }
}
exports.Channel = Channel;
class Device {
    constructor(init) { Object.assign(this, init); }
}
exports.Device = Device;
class Logger {
    constructor(init) { Object.assign(this, init); }
}
exports.Logger = Logger;
class Rockstar {
    constructor(init) { Object.assign(this, init); }
}
exports.Rockstar = Rockstar;
class QueryDbTenant_2 extends QueryDb_2 {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.QueryDbTenant_2 = QueryDbTenant_2;
var LivingStatus;
(function (LivingStatus) {
    LivingStatus["Alive"] = "Alive";
    LivingStatus["Dead"] = "Dead";
})(LivingStatus = exports.LivingStatus || (exports.LivingStatus = {}));
class RockstarAuditTenant extends AuditBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.RockstarAuditTenant = RockstarAuditTenant;
class RockstarBase {
    constructor(init) { Object.assign(this, init); }
}
exports.RockstarBase = RockstarBase;
class RockstarAuto extends RockstarBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.RockstarAuto = RockstarAuto;
class QueryDb_1 extends QueryBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.QueryDb_1 = QueryDb_1;
class OnlyDefinedInGenericType {
    constructor(init) { Object.assign(this, init); }
}
exports.OnlyDefinedInGenericType = OnlyDefinedInGenericType;
class OnlyDefinedInGenericTypeFrom {
    constructor(init) { Object.assign(this, init); }
}
exports.OnlyDefinedInGenericTypeFrom = OnlyDefinedInGenericTypeFrom;
class OnlyDefinedInGenericTypeInto {
    constructor(init) { Object.assign(this, init); }
}
exports.OnlyDefinedInGenericTypeInto = OnlyDefinedInGenericTypeInto;
class RockstarAudit extends RockstarBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.RockstarAudit = RockstarAudit;
class CreateAuditBase {
    constructor(init) { Object.assign(this, init); }
}
exports.CreateAuditBase = CreateAuditBase;
class CreateAuditTenantBase extends CreateAuditBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.CreateAuditTenantBase = CreateAuditTenantBase;
class UpdateAuditBase {
    constructor(init) { Object.assign(this, init); }
}
exports.UpdateAuditBase = UpdateAuditBase;
class UpdateAuditTenantBase extends UpdateAuditBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.UpdateAuditTenantBase = UpdateAuditTenantBase;
class PatchAuditBase {
    constructor(init) { Object.assign(this, init); }
}
exports.PatchAuditBase = PatchAuditBase;
class PatchAuditTenantBase extends PatchAuditBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.PatchAuditTenantBase = PatchAuditTenantBase;
class SoftDeleteAuditBase {
    constructor(init) { Object.assign(this, init); }
}
exports.SoftDeleteAuditBase = SoftDeleteAuditBase;
class SoftDeleteAuditTenantBase extends SoftDeleteAuditBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.SoftDeleteAuditTenantBase = SoftDeleteAuditTenantBase;
class RockstarVersion extends RockstarBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.RockstarVersion = RockstarVersion;
// @Route("/messages/crud/{Id}", "PUT")
class MessageCrud {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'MessageCrud'; }
    getMethod() { return 'PUT'; }
}
exports.MessageCrud = MessageCrud;
class MetadataTestNestedChild {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataTestNestedChild = MetadataTestNestedChild;
class MetadataTestChild {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataTestChild = MetadataTestChild;
class MenuItemExampleItem {
    constructor(init) { Object.assign(this, init); }
}
exports.MenuItemExampleItem = MenuItemExampleItem;
class MenuItemExample {
    constructor(init) { Object.assign(this, init); }
}
exports.MenuItemExample = MenuItemExample;
// @DataContract
class MenuExample {
    constructor(init) { Object.assign(this, init); }
}
exports.MenuExample = MenuExample;
class ListResult {
    constructor(init) { Object.assign(this, init); }
}
exports.ListResult = ListResult;
class ArrayResult {
    constructor(init) { Object.assign(this, init); }
}
exports.ArrayResult = ArrayResult;
class HelloResponseBase {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloResponseBase = HelloResponseBase;
class HelloWithReturnResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloWithReturnResponse = HelloWithReturnResponse;
class HelloType {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloType = HelloType;
class InnerType {
    constructor(init) { Object.assign(this, init); }
}
exports.InnerType = InnerType;
var InnerEnum;
(function (InnerEnum) {
    InnerEnum["Foo"] = "Foo";
    InnerEnum["Bar"] = "Bar";
    InnerEnum["Baz"] = "Baz";
})(InnerEnum = exports.InnerEnum || (exports.InnerEnum = {}));
class ReturnedDto {
    constructor(init) { Object.assign(this, init); }
}
exports.ReturnedDto = ReturnedDto;
class CustomUserSession extends AuthUserSession {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.CustomUserSession = CustomUserSession;
class UnAuthInfo {
    constructor(init) { Object.assign(this, init); }
}
exports.UnAuthInfo = UnAuthInfo;
class TypesGroup {
    constructor(init) { Object.assign(this, init); }
}
exports.TypesGroup = TypesGroup;
// @DataContract
class QueryResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.QueryResponse = QueryResponse;
class ChatMessage {
    constructor(init) { Object.assign(this, init); }
}
exports.ChatMessage = ChatMessage;
class GetChatHistoryResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetChatHistoryResponse = GetChatHistoryResponse;
class GetUserDetailsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetUserDetailsResponse = GetUserDetailsResponse;
class CustomHttpErrorResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.CustomHttpErrorResponse = CustomHttpErrorResponse;
class QueryResponseAlt {
    constructor(init) { Object.assign(this, init); }
}
exports.QueryResponseAlt = QueryResponseAlt;
class Items {
    constructor(init) { Object.assign(this, init); }
}
exports.Items = Items;
// @DataContract
class EmptyResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.EmptyResponse = EmptyResponse;
class ReturnCustom400Response {
    constructor(init) { Object.assign(this, init); }
}
exports.ReturnCustom400Response = ReturnCustom400Response;
class ThrowTypeResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.ThrowTypeResponse = ThrowTypeResponse;
class ThrowValidationResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.ThrowValidationResponse = ThrowValidationResponse;
class ThrowBusinessErrorResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.ThrowBusinessErrorResponse = ThrowBusinessErrorResponse;
class Account {
    constructor(init) { Object.assign(this, init); }
}
exports.Account = Account;
class Project {
    constructor(init) { Object.assign(this, init); }
}
exports.Project = Project;
class SecuredResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.SecuredResponse = SecuredResponse;
class CreateJwtResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.CreateJwtResponse = CreateJwtResponse;
class CreateRefreshJwtResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.CreateRefreshJwtResponse = CreateRefreshJwtResponse;
class MetadataTestResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.MetadataTestResponse = MetadataTestResponse;
// @DataContract
class GetExampleResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetExampleResponse = GetExampleResponse;
// @Route("/messages/{Id}", "PUT")
class Message {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Message(); }
    getTypeName() { return 'Message'; }
    getMethod() { return 'PUT'; }
}
exports.Message = Message;
class GetRandomIdsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetRandomIdsResponse = GetRandomIdsResponse;
class HelloResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloResponse = HelloResponse;
/**
* Description on HelloAllResponse type
*/
// @DataContract
class HelloAnnotatedResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloAnnotatedResponse = HelloAnnotatedResponse;
class AllTypes {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new AllTypes(); }
    getTypeName() { return 'AllTypes'; }
    getMethod() { return 'POST'; }
}
exports.AllTypes = AllTypes;
class AllCollectionTypes {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new AllCollectionTypes(); }
    getTypeName() { return 'AllCollectionTypes'; }
    getMethod() { return 'POST'; }
}
exports.AllCollectionTypes = AllCollectionTypes;
class HelloAllTypesResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloAllTypesResponse = HelloAllTypesResponse;
class SubAllTypes extends AllTypesBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.SubAllTypes = SubAllTypes;
class HelloDateTime {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloDateTime(); }
    getTypeName() { return 'HelloDateTime'; }
    getMethod() { return 'POST'; }
}
exports.HelloDateTime = HelloDateTime;
// @DataContract
class HelloWithDataContractResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloWithDataContractResponse = HelloWithDataContractResponse;
/**
* Description on HelloWithDescriptionResponse type
*/
class HelloWithDescriptionResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloWithDescriptionResponse = HelloWithDescriptionResponse;
class HelloWithInheritanceResponse extends HelloResponseBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.HelloWithInheritanceResponse = HelloWithInheritanceResponse;
class HelloWithAlternateReturnResponse extends HelloWithReturnResponse {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.HelloWithAlternateReturnResponse = HelloWithAlternateReturnResponse;
class HelloWithRouteResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloWithRouteResponse = HelloWithRouteResponse;
class HelloWithTypeResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloWithTypeResponse = HelloWithTypeResponse;
class HelloInnerTypesResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloInnerTypesResponse = HelloInnerTypesResponse;
class HelloVerbResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloVerbResponse = HelloVerbResponse;
class EnumResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.EnumResponse = EnumResponse;
// @Route("/hellotypes/{Name}")
class HelloTypes {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloTypes(); }
    getTypeName() { return 'HelloTypes'; }
    getMethod() { return 'POST'; }
}
exports.HelloTypes = HelloTypes;
// @DataContract
class HelloZipResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.HelloZipResponse = HelloZipResponse;
class PingResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.PingResponse = PingResponse;
class RequiresRoleResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.RequiresRoleResponse = RequiresRoleResponse;
class SendVerbResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.SendVerbResponse = SendVerbResponse;
class GetSessionResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetSessionResponse = GetSessionResponse;
// @DataContract(Namespace="http://schemas.servicestack.net/types")
class GetStuffResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetStuffResponse = GetStuffResponse;
class StoreLogsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.StoreLogsResponse = StoreLogsResponse;
class TestAuthResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.TestAuthResponse = TestAuthResponse;
class RequiresAdmin {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new RequiresAdmin(); }
    getTypeName() { return 'RequiresAdmin'; }
    getMethod() { return 'POST'; }
}
exports.RequiresAdmin = RequiresAdmin;
// @Route("/custom")
// @Route("/custom/{Data}")
class CustomRoute {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new CustomRoute(); }
    getTypeName() { return 'CustomRoute'; }
    getMethod() { return 'POST'; }
}
exports.CustomRoute = CustomRoute;
// @Route("/wait/{ForMs}")
class Wait {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Wait(); }
    getTypeName() { return 'Wait'; }
    getMethod() { return 'POST'; }
}
exports.Wait = Wait;
// @Route("/echo/types")
class EchoTypes {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new EchoTypes(); }
    getTypeName() { return 'EchoTypes'; }
    getMethod() { return 'POST'; }
}
exports.EchoTypes = EchoTypes;
// @Route("/echo/collections")
class EchoCollections {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new EchoCollections(); }
    getTypeName() { return 'EchoCollections'; }
    getMethod() { return 'POST'; }
}
exports.EchoCollections = EchoCollections;
// @Route("/echo/complex")
class EchoComplexTypes {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new EchoComplexTypes(); }
    getTypeName() { return 'EchoComplexTypes'; }
    getMethod() { return 'POST'; }
}
exports.EchoComplexTypes = EchoComplexTypes;
// @Route("/rockstars", "POST")
class StoreRockstars extends Array {
    constructor(init) { super(); Object.assign(this, init); }
    createResponse() { return new StoreRockstars(); }
    getTypeName() { return 'StoreRockstars'; }
    getMethod() { return 'POST'; }
}
exports.StoreRockstars = StoreRockstars;
// @DataContract
class AuthenticateResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.AuthenticateResponse = AuthenticateResponse;
// @DataContract
class AssignRolesResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.AssignRolesResponse = AssignRolesResponse;
// @DataContract
class UnAssignRolesResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UnAssignRolesResponse = UnAssignRolesResponse;
// @DataContract
class RegisterResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.RegisterResponse = RegisterResponse;
// @DataContract
class ConvertSessionToTokenResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.ConvertSessionToTokenResponse = ConvertSessionToTokenResponse;
// @DataContract
class GetAccessTokenResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetAccessTokenResponse = GetAccessTokenResponse;
class RockstarWithIdResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.RockstarWithIdResponse = RockstarWithIdResponse;
class RockstarWithIdAndResultResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.RockstarWithIdAndResultResponse = RockstarWithIdAndResultResponse;
class RockstarWithIdAndCountResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.RockstarWithIdAndCountResponse = RockstarWithIdAndCountResponse;
class RockstarWithIdAndRowVersionResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.RockstarWithIdAndRowVersionResponse = RockstarWithIdAndRowVersionResponse;
class QueryItems extends QueryDb_2 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'QueryItems'; }
    getMethod() { return 'GET'; }
}
exports.QueryItems = QueryItems;
// @Route("/channels/{Channel}/raw")
class PostRawToChannel {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'PostRawToChannel'; }
    getMethod() { return 'POST'; }
}
exports.PostRawToChannel = PostRawToChannel;
// @Route("/channels/{Channel}/chat")
class PostChatToChannel {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new ChatMessage(); }
    getTypeName() { return 'PostChatToChannel'; }
    getMethod() { return 'POST'; }
}
exports.PostChatToChannel = PostChatToChannel;
// @Route("/chathistory")
class GetChatHistory {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetChatHistoryResponse(); }
    getTypeName() { return 'GetChatHistory'; }
    getMethod() { return 'POST'; }
}
exports.GetChatHistory = GetChatHistory;
// @Route("/reset")
class ClearChatHistory {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'ClearChatHistory'; }
    getMethod() { return 'POST'; }
}
exports.ClearChatHistory = ClearChatHistory;
// @Route("/reset-serverevents")
class ResetServerEvents {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'ResetServerEvents'; }
    getMethod() { return 'POST'; }
}
exports.ResetServerEvents = ResetServerEvents;
// @Route("/channels/{Channel}/object")
class PostObjectToChannel {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'PostObjectToChannel'; }
    getMethod() { return 'POST'; }
}
exports.PostObjectToChannel = PostObjectToChannel;
// @Route("/account")
class GetUserDetails {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetUserDetailsResponse(); }
    getTypeName() { return 'GetUserDetails'; }
    getMethod() { return 'GET'; }
}
exports.GetUserDetails = GetUserDetails;
class CustomHttpError {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new CustomHttpErrorResponse(); }
    getTypeName() { return 'CustomHttpError'; }
    getMethod() { return 'POST'; }
}
exports.CustomHttpError = CustomHttpError;
class AltQueryItems {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new QueryResponseAlt(); }
    getTypeName() { return 'AltQueryItems'; }
    getMethod() { return 'POST'; }
}
exports.AltQueryItems = AltQueryItems;
class GetItems {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Items(); }
    getTypeName() { return 'GetItems'; }
    getMethod() { return 'GET'; }
}
exports.GetItems = GetItems;
class GetNakedItems {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Array(); }
    getTypeName() { return 'GetNakedItems'; }
    getMethod() { return 'GET'; }
}
exports.GetNakedItems = GetNakedItems;
// @ValidateRequest(Validator="IsAuthenticated")
class DeclarativeValidationAuth {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.DeclarativeValidationAuth = DeclarativeValidationAuth;
class DeclarativeCollectiveValidationTest {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new EmptyResponse(); }
    getTypeName() { return 'DeclarativeCollectiveValidationTest'; }
    getMethod() { return 'POST'; }
}
exports.DeclarativeCollectiveValidationTest = DeclarativeCollectiveValidationTest;
class DeclarativeSingleValidationTest {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new EmptyResponse(); }
    getTypeName() { return 'DeclarativeSingleValidationTest'; }
    getMethod() { return 'POST'; }
}
exports.DeclarativeSingleValidationTest = DeclarativeSingleValidationTest;
// @Route("/session-to-token")
// @DataContract
class ConvertSessionToToken {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new ConvertSessionToTokenResponse(); }
    getTypeName() { return 'ConvertSessionToToken'; }
    getMethod() { return 'POST'; }
}
exports.ConvertSessionToToken = ConvertSessionToToken;
// @Route("/access-token")
// @DataContract
class GetAccessToken {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetAccessTokenResponse(); }
    getTypeName() { return 'GetAccessToken'; }
    getMethod() { return 'POST'; }
}
exports.GetAccessToken = GetAccessToken;
class DummyTypes {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.DummyTypes = DummyTypes;
// @Route("/throwhttperror/{Status}")
class ThrowHttpError {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.ThrowHttpError = ThrowHttpError;
// @Route("/throw404")
// @Route("/throw404/{Message}")
class Throw404 {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.Throw404 = Throw404;
// @Route("/throwcustom400")
// @Route("/throwcustom400/{Message}")
class ThrowCustom400 {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.ThrowCustom400 = ThrowCustom400;
// @Route("/returncustom400")
// @Route("/returncustom400/{Message}")
class ReturnCustom400 {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new ReturnCustom400Response(); }
    getTypeName() { return 'ReturnCustom400'; }
    getMethod() { return 'POST'; }
}
exports.ReturnCustom400 = ReturnCustom400;
// @Route("/throw/{Type}")
class ThrowType {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new ThrowTypeResponse(); }
    getTypeName() { return 'ThrowType'; }
    getMethod() { return 'POST'; }
}
exports.ThrowType = ThrowType;
// @Route("/throwvalidation")
class ThrowValidation {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new ThrowValidationResponse(); }
    getTypeName() { return 'ThrowValidation'; }
    getMethod() { return 'POST'; }
}
exports.ThrowValidation = ThrowValidation;
// @Route("/throwbusinesserror")
class ThrowBusinessError {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new ThrowBusinessErrorResponse(); }
    getTypeName() { return 'ThrowBusinessError'; }
    getMethod() { return 'POST'; }
}
exports.ThrowBusinessError = ThrowBusinessError;
class RootPathRoutes {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.RootPathRoutes = RootPathRoutes;
class GetAccount {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Account(); }
    getTypeName() { return 'GetAccount'; }
    getMethod() { return 'POST'; }
}
exports.GetAccount = GetAccount;
class GetProject {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Project(); }
    getTypeName() { return 'GetProject'; }
    getMethod() { return 'POST'; }
}
exports.GetProject = GetProject;
// @Route("/image-stream")
class ImageAsStream {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Blob(); }
    getTypeName() { return 'ImageAsStream'; }
    getMethod() { return 'POST'; }
}
exports.ImageAsStream = ImageAsStream;
// @Route("/image-bytes")
class ImageAsBytes {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return 'ImageAsBytes'; }
    getMethod() { return 'POST'; }
}
exports.ImageAsBytes = ImageAsBytes;
// @Route("/image-custom")
class ImageAsCustomResult {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return 'ImageAsCustomResult'; }
    getMethod() { return 'POST'; }
}
exports.ImageAsCustomResult = ImageAsCustomResult;
// @Route("/image-response")
class ImageWriteToResponse {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return 'ImageWriteToResponse'; }
    getMethod() { return 'POST'; }
}
exports.ImageWriteToResponse = ImageWriteToResponse;
// @Route("/image-file")
class ImageAsFile {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return 'ImageAsFile'; }
    getMethod() { return 'POST'; }
}
exports.ImageAsFile = ImageAsFile;
// @Route("/image-redirect")
class ImageAsRedirect {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.ImageAsRedirect = ImageAsRedirect;
// @Route("/hello-image/{Name}")
class HelloImage {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return 'HelloImage'; }
    getMethod() { return 'GET'; }
}
exports.HelloImage = HelloImage;
// @Route("/secured")
// @ValidateRequest(Validator="IsAuthenticated")
class Secured {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new SecuredResponse(); }
    getTypeName() { return 'Secured'; }
    getMethod() { return 'POST'; }
}
exports.Secured = Secured;
// @Route("/jwt")
class CreateJwt extends AuthUserSession {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new CreateJwtResponse(); }
    getTypeName() { return 'CreateJwt'; }
    getMethod() { return 'POST'; }
}
exports.CreateJwt = CreateJwt;
// @Route("/jwt-refresh")
class CreateRefreshJwt {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new CreateRefreshJwtResponse(); }
    getTypeName() { return 'CreateRefreshJwt'; }
    getMethod() { return 'POST'; }
}
exports.CreateRefreshJwt = CreateRefreshJwt;
// @Route("/jwt-invalidate")
class InvalidateLastAccessToken {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new EmptyResponse(); }
    getTypeName() { return 'InvalidateLastAccessToken'; }
    getMethod() { return 'POST'; }
}
exports.InvalidateLastAccessToken = InvalidateLastAccessToken;
// @Route("/logs")
class ViewLogs {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return ''; }
    getTypeName() { return 'ViewLogs'; }
    getMethod() { return 'POST'; }
}
exports.ViewLogs = ViewLogs;
// @Route("/metadatatest")
class MetadataTest {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new MetadataTestResponse(); }
    getTypeName() { return 'MetadataTest'; }
    getMethod() { return 'POST'; }
}
exports.MetadataTest = MetadataTest;
// @Route("/metadatatest-array")
class MetadataTestArray {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Array(); }
    getTypeName() { return 'MetadataTestArray'; }
    getMethod() { return 'POST'; }
}
exports.MetadataTestArray = MetadataTestArray;
// @Route("/example", "GET")
// @DataContract
class GetExample {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetExampleResponse(); }
    getTypeName() { return 'GetExample'; }
    getMethod() { return 'GET'; }
}
exports.GetExample = GetExample;
// @Route("/messages/{Id}", "GET")
class RequestMessage {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Message(); }
    getTypeName() { return 'RequestMessage'; }
    getMethod() { return 'GET'; }
}
exports.RequestMessage = RequestMessage;
// @Route("/randomids")
class GetRandomIds {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetRandomIdsResponse(); }
    getTypeName() { return 'GetRandomIds'; }
    getMethod() { return 'POST'; }
}
exports.GetRandomIds = GetRandomIds;
// @Route("/textfile-test")
class TextFileTest {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.TextFileTest = TextFileTest;
// @Route("/return/text")
class ReturnText {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.ReturnText = ReturnText;
// @Route("/return/html")
class ReturnHtml {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.ReturnHtml = ReturnHtml;
// @Route("/hello")
// @Route("/hello/{Name}")
class Hello {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloResponse(); }
    getTypeName() { return 'Hello'; }
    getMethod() { return 'POST'; }
}
exports.Hello = Hello;
// @Route("/hello-secure/{Name}")
// @ValidateRequest(Validator="IsAuthenticated")
class HelloSecure {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloResponse(); }
    getTypeName() { return 'HelloSecure'; }
    getMethod() { return 'POST'; }
}
exports.HelloSecure = HelloSecure;
/**
* Description on HelloAll type
*/
// @DataContract
class HelloAnnotated {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloAnnotatedResponse(); }
    getTypeName() { return 'HelloAnnotated'; }
    getMethod() { return 'POST'; }
}
exports.HelloAnnotated = HelloAnnotated;
class HelloWithNestedClass {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloResponse(); }
    getTypeName() { return 'HelloWithNestedClass'; }
    getMethod() { return 'GET'; }
}
exports.HelloWithNestedClass = HelloWithNestedClass;
class HelloList {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Array(); }
    getTypeName() { return 'HelloList'; }
    getMethod() { return 'POST'; }
}
exports.HelloList = HelloList;
class HelloArray {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Array(); }
    getTypeName() { return 'HelloArray'; }
    getMethod() { return 'POST'; }
}
exports.HelloArray = HelloArray;
class HelloWithEnum {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.HelloWithEnum = HelloWithEnum;
class HelloWithEnumList {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.HelloWithEnumList = HelloWithEnumList;
class HelloWithEnumMap {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.HelloWithEnumMap = HelloWithEnumMap;
class RestrictedAttributes {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.RestrictedAttributes = RestrictedAttributes;
/**
* AllowedAttributes Description
*/
// @Route("/allowed-attributes", "GET")
// @Api(Description="AllowedAttributes Description")
// @ApiResponse(Description="Your request was not understood", StatusCode=400)
// @DataContract
class AllowedAttributes {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'GET'; }
}
exports.AllowedAttributes = AllowedAttributes;
// @Route("/all-types")
class HelloAllTypes {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloAllTypesResponse(); }
    getTypeName() { return 'HelloAllTypes'; }
    getMethod() { return 'POST'; }
}
exports.HelloAllTypes = HelloAllTypes;
class HelloSubAllTypes extends AllTypesBase {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new SubAllTypes(); }
    getTypeName() { return 'HelloSubAllTypes'; }
    getMethod() { return 'POST'; }
}
exports.HelloSubAllTypes = HelloSubAllTypes;
class HelloString {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return ''; }
    getTypeName() { return 'HelloString'; }
    getMethod() { return 'POST'; }
}
exports.HelloString = HelloString;
class HelloVoid {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.HelloVoid = HelloVoid;
// @DataContract
class HelloWithDataContract {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloWithDataContractResponse(); }
    getTypeName() { return 'HelloWithDataContract'; }
    getMethod() { return 'POST'; }
}
exports.HelloWithDataContract = HelloWithDataContract;
/**
* Description on HelloWithDescription type
*/
class HelloWithDescription {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloWithDescriptionResponse(); }
    getTypeName() { return 'HelloWithDescription'; }
    getMethod() { return 'POST'; }
}
exports.HelloWithDescription = HelloWithDescription;
class HelloWithInheritance extends HelloBase {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new HelloWithInheritanceResponse(); }
    getTypeName() { return 'HelloWithInheritance'; }
    getMethod() { return 'POST'; }
}
exports.HelloWithInheritance = HelloWithInheritance;
class HelloWithGenericInheritance extends HelloBase_1 {
    constructor(init) { super(init); Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.HelloWithGenericInheritance = HelloWithGenericInheritance;
class HelloWithGenericInheritance2 extends HelloBase_1 {
    constructor(init) { super(init); Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.HelloWithGenericInheritance2 = HelloWithGenericInheritance2;
class HelloWithReturn {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloWithAlternateReturnResponse(); }
    getTypeName() { return 'HelloWithReturn'; }
    getMethod() { return 'POST'; }
}
exports.HelloWithReturn = HelloWithReturn;
// @Route("/helloroute")
class HelloWithRoute {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloWithRouteResponse(); }
    getTypeName() { return 'HelloWithRoute'; }
    getMethod() { return 'POST'; }
}
exports.HelloWithRoute = HelloWithRoute;
class HelloWithType {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloWithTypeResponse(); }
    getTypeName() { return 'HelloWithType'; }
    getMethod() { return 'POST'; }
}
exports.HelloWithType = HelloWithType;
class HelloInterface {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.HelloInterface = HelloInterface;
class HelloInnerTypes {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloInnerTypesResponse(); }
    getTypeName() { return 'HelloInnerTypes'; }
    getMethod() { return 'POST'; }
}
exports.HelloInnerTypes = HelloInnerTypes;
class HelloBuiltin {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.HelloBuiltin = HelloBuiltin;
class HelloGet {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return 'HelloGet'; }
    getMethod() { return 'GET'; }
}
exports.HelloGet = HelloGet;
class HelloPost extends HelloBase {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return 'HelloPost'; }
    getMethod() { return 'POST'; }
}
exports.HelloPost = HelloPost;
class HelloPut {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return 'HelloPut'; }
    getMethod() { return 'PUT'; }
}
exports.HelloPut = HelloPut;
class HelloDelete {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return 'HelloDelete'; }
    getMethod() { return 'DELETE'; }
}
exports.HelloDelete = HelloDelete;
class HelloPatch {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return 'HelloPatch'; }
    getMethod() { return 'PATCH'; }
}
exports.HelloPatch = HelloPatch;
class HelloReturnVoid {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'HelloReturnVoid'; }
    getMethod() { return 'POST'; }
}
exports.HelloReturnVoid = HelloReturnVoid;
class EnumRequest {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new EnumResponse(); }
    getTypeName() { return 'EnumRequest'; }
    getMethod() { return 'PUT'; }
}
exports.EnumRequest = EnumRequest;
// @Route("/hellozip")
// @DataContract
class HelloZip {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloZipResponse(); }
    getTypeName() { return 'HelloZip'; }
    getMethod() { return 'POST'; }
}
exports.HelloZip = HelloZip;
// @Route("/ping")
class Ping {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new PingResponse(); }
    getTypeName() { return 'Ping'; }
    getMethod() { return 'POST'; }
}
exports.Ping = Ping;
// @Route("/reset-connections")
class ResetConnections {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.ResetConnections = ResetConnections;
// @Route("/requires-role")
class RequiresRole {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new RequiresRoleResponse(); }
    getTypeName() { return 'RequiresRole'; }
    getMethod() { return 'POST'; }
}
exports.RequiresRole = RequiresRole;
// @Route("/return/string")
class ReturnString {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return ''; }
    getTypeName() { return 'ReturnString'; }
    getMethod() { return 'POST'; }
}
exports.ReturnString = ReturnString;
// @Route("/return/bytes")
class ReturnBytes {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return 'ReturnBytes'; }
    getMethod() { return 'POST'; }
}
exports.ReturnBytes = ReturnBytes;
// @Route("/return/stream")
class ReturnStream {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Blob(); }
    getTypeName() { return 'ReturnStream'; }
    getMethod() { return 'POST'; }
}
exports.ReturnStream = ReturnStream;
// @Route("/return/json")
class ReturnJson {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.ReturnJson = ReturnJson;
// @Route("/return/json/header")
class ReturnJsonHeader {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.ReturnJsonHeader = ReturnJsonHeader;
// @Route("/write/json")
class WriteJson {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.WriteJson = WriteJson;
// @Route("/Request1", "GET")
class GetRequest1 {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Array(); }
    getTypeName() { return 'GetRequest1'; }
    getMethod() { return 'GET'; }
}
exports.GetRequest1 = GetRequest1;
// @Route("/Request2", "GET")
class GetRequest2 {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Array(); }
    getTypeName() { return 'GetRequest2'; }
    getMethod() { return 'GET'; }
}
exports.GetRequest2 = GetRequest2;
// @Route("/sendjson")
class SendJson {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return ''; }
    getTypeName() { return 'SendJson'; }
    getMethod() { return 'POST'; }
}
exports.SendJson = SendJson;
// @Route("/sendtext")
class SendText {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return ''; }
    getTypeName() { return 'SendText'; }
    getMethod() { return 'POST'; }
}
exports.SendText = SendText;
// @Route("/sendraw")
class SendRaw {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return 'SendRaw'; }
    getMethod() { return 'POST'; }
}
exports.SendRaw = SendRaw;
class SendDefault {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return 'SendDefault'; }
    getMethod() { return 'POST'; }
}
exports.SendDefault = SendDefault;
// @Route("/sendrestget/{Id}", "GET")
class SendRestGet {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return 'SendRestGet'; }
    getMethod() { return 'GET'; }
}
exports.SendRestGet = SendRestGet;
class SendGet {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return 'SendGet'; }
    getMethod() { return 'GET'; }
}
exports.SendGet = SendGet;
class SendPost {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return 'SendPost'; }
    getMethod() { return 'POST'; }
}
exports.SendPost = SendPost;
class SendPut {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return 'SendPut'; }
    getMethod() { return 'PUT'; }
}
exports.SendPut = SendPut;
class SendReturnVoid {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'SendReturnVoid'; }
    getMethod() { return 'POST'; }
}
exports.SendReturnVoid = SendReturnVoid;
// @Route("/session")
class GetSession {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetSessionResponse(); }
    getTypeName() { return 'GetSession'; }
    getMethod() { return 'POST'; }
}
exports.GetSession = GetSession;
// @Route("/session/edit/{CustomName}")
class UpdateSession {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetSessionResponse(); }
    getTypeName() { return 'UpdateSession'; }
    getMethod() { return 'POST'; }
}
exports.UpdateSession = UpdateSession;
// @Route("/Stuff")
// @DataContract(Namespace="http://schemas.servicestack.net/types")
class GetStuff {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetStuffResponse(); }
    getTypeName() { return 'GetStuff'; }
    getMethod() { return 'POST'; }
}
exports.GetStuff = GetStuff;
class StoreLogs {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new StoreLogsResponse(); }
    getTypeName() { return 'StoreLogs'; }
    getMethod() { return 'POST'; }
}
exports.StoreLogs = StoreLogs;
class HelloAuth {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HelloResponse(); }
    getTypeName() { return 'HelloAuth'; }
    getMethod() { return 'POST'; }
}
exports.HelloAuth = HelloAuth;
// @Route("/testauth")
class TestAuth {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new TestAuthResponse(); }
    getTypeName() { return 'TestAuth'; }
    getMethod() { return 'POST'; }
}
exports.TestAuth = TestAuth;
// @Route("/testdata/AllTypes")
class TestDataAllTypes {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new AllTypes(); }
    getTypeName() { return 'TestDataAllTypes'; }
    getMethod() { return 'POST'; }
}
exports.TestDataAllTypes = TestDataAllTypes;
// @Route("/testdata/AllCollectionTypes")
class TestDataAllCollectionTypes {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new AllCollectionTypes(); }
    getTypeName() { return 'TestDataAllCollectionTypes'; }
    getMethod() { return 'POST'; }
}
exports.TestDataAllCollectionTypes = TestDataAllCollectionTypes;
// @Route("/void-response")
class TestVoidResponse {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.TestVoidResponse = TestVoidResponse;
// @Route("/null-response")
class TestNullResponse {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.TestNullResponse = TestNullResponse;
// @Route("/auth")
// @Route("/auth/{provider}")
// @DataContract
class Authenticate {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new AuthenticateResponse(); }
    getTypeName() { return 'Authenticate'; }
    getMethod() { return 'POST'; }
}
exports.Authenticate = Authenticate;
// @Route("/assignroles")
// @DataContract
class AssignRoles {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new AssignRolesResponse(); }
    getTypeName() { return 'AssignRoles'; }
    getMethod() { return 'POST'; }
}
exports.AssignRoles = AssignRoles;
// @Route("/unassignroles")
// @DataContract
class UnAssignRoles {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UnAssignRolesResponse(); }
    getTypeName() { return 'UnAssignRoles'; }
    getMethod() { return 'POST'; }
}
exports.UnAssignRoles = UnAssignRoles;
// @Route("/register")
// @DataContract
class Register {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new RegisterResponse(); }
    getTypeName() { return 'Register'; }
    getMethod() { return 'POST'; }
}
exports.Register = Register;
class QueryRockstarAudit extends QueryDbTenant_2 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'QueryRockstarAudit'; }
    getMethod() { return 'GET'; }
}
exports.QueryRockstarAudit = QueryRockstarAudit;
class QueryRockstarAuditSubOr extends QueryDb_2 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'QueryRockstarAuditSubOr'; }
    getMethod() { return 'GET'; }
}
exports.QueryRockstarAuditSubOr = QueryRockstarAuditSubOr;
class QueryPocoBase extends QueryDb_1 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'QueryPocoBase'; }
    getMethod() { return 'GET'; }
}
exports.QueryPocoBase = QueryPocoBase;
class QueryPocoIntoBase extends QueryDb_2 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'QueryPocoIntoBase'; }
    getMethod() { return 'GET'; }
}
exports.QueryPocoIntoBase = QueryPocoIntoBase;
// @Route("/message/query/{Id}", "GET")
class MessageQuery extends QueryDb_1 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'MessageQuery'; }
    getMethod() { return 'GET'; }
}
exports.MessageQuery = MessageQuery;
// @Route("/rockstars", "GET")
class QueryRockstars extends QueryDb_1 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'QueryRockstars'; }
    getMethod() { return 'GET'; }
}
exports.QueryRockstars = QueryRockstars;
class CreateRockstarAudit extends RockstarBase {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new RockstarWithIdResponse(); }
    getTypeName() { return 'CreateRockstarAudit'; }
    getMethod() { return 'POST'; }
}
exports.CreateRockstarAudit = CreateRockstarAudit;
class CreateRockstarAuditTenant extends CreateAuditTenantBase {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new RockstarWithIdAndResultResponse(); }
    getTypeName() { return 'CreateRockstarAuditTenant'; }
    getMethod() { return 'POST'; }
}
exports.CreateRockstarAuditTenant = CreateRockstarAuditTenant;
class UpdateRockstarAuditTenant extends UpdateAuditTenantBase {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new RockstarWithIdAndResultResponse(); }
    getTypeName() { return 'UpdateRockstarAuditTenant'; }
    getMethod() { return 'PUT'; }
}
exports.UpdateRockstarAuditTenant = UpdateRockstarAuditTenant;
class PatchRockstarAuditTenant extends PatchAuditTenantBase {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new RockstarWithIdAndResultResponse(); }
    getTypeName() { return 'PatchRockstarAuditTenant'; }
    getMethod() { return 'PATCH'; }
}
exports.PatchRockstarAuditTenant = PatchRockstarAuditTenant;
class SoftDeleteAuditTenant extends SoftDeleteAuditTenantBase {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new RockstarWithIdAndResultResponse(); }
    getTypeName() { return 'SoftDeleteAuditTenant'; }
    getMethod() { return 'PUT'; }
}
exports.SoftDeleteAuditTenant = SoftDeleteAuditTenant;
class CreateRockstarAuditMqToken extends RockstarBase {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new RockstarWithIdResponse(); }
    getTypeName() { return 'CreateRockstarAuditMqToken'; }
    getMethod() { return 'POST'; }
}
exports.CreateRockstarAuditMqToken = CreateRockstarAuditMqToken;
class RealDeleteAuditTenant {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new RockstarWithIdAndCountResponse(); }
    getTypeName() { return 'RealDeleteAuditTenant'; }
    getMethod() { return 'DELETE'; }
}
exports.RealDeleteAuditTenant = RealDeleteAuditTenant;
class CreateRockstarVersion extends RockstarBase {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new RockstarWithIdAndRowVersionResponse(); }
    getTypeName() { return 'CreateRockstarVersion'; }
    getMethod() { return 'POST'; }
}
exports.CreateRockstarVersion = CreateRockstarVersion;
