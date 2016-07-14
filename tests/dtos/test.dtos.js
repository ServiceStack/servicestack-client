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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testdtos;
(function (testdtos) {
    // @DataContract
    var ResponseStatus = (function () {
        function ResponseStatus() {
        }
        return ResponseStatus;
    }());
    testdtos.ResponseStatus = ResponseStatus;
    var ExternalType = (function () {
        function ExternalType() {
        }
        return ExternalType;
    }());
    testdtos.ExternalType = ExternalType;
    var MetadataTestChild = (function () {
        function MetadataTestChild() {
        }
        return MetadataTestChild;
    }());
    testdtos.MetadataTestChild = MetadataTestChild;
    // @DataContract
    var MenuExample = (function () {
        function MenuExample() {
        }
        return MenuExample;
    }());
    testdtos.MenuExample = MenuExample;
    var NestedClass = (function () {
        function NestedClass() {
        }
        return NestedClass;
    }());
    testdtos.NestedClass = NestedClass;
    var ListResult = (function () {
        function ListResult() {
        }
        return ListResult;
    }());
    testdtos.ListResult = ListResult;
    var ArrayResult = (function () {
        function ArrayResult() {
        }
        return ArrayResult;
    }());
    testdtos.ArrayResult = ArrayResult;
    var AllCollectionTypes = (function () {
        function AllCollectionTypes() {
        }
        return AllCollectionTypes;
    }());
    testdtos.AllCollectionTypes = AllCollectionTypes;
    var SubType = (function () {
        function SubType() {
        }
        return SubType;
    }());
    testdtos.SubType = SubType;
    var HelloBase = (function () {
        function HelloBase() {
        }
        return HelloBase;
    }());
    testdtos.HelloBase = HelloBase;
    var HelloResponseBase = (function () {
        function HelloResponseBase() {
        }
        return HelloResponseBase;
    }());
    testdtos.HelloResponseBase = HelloResponseBase;
    var Poco = (function () {
        function Poco() {
        }
        return Poco;
    }());
    testdtos.Poco = Poco;
    var HelloBase_1 = (function () {
        function HelloBase_1() {
        }
        return HelloBase_1;
    }());
    testdtos.HelloBase_1 = HelloBase_1;
    var Item = (function () {
        function Item() {
        }
        return Item;
    }());
    testdtos.Item = Item;
    var HelloWithReturnResponse = (function () {
        function HelloWithReturnResponse() {
        }
        return HelloWithReturnResponse;
    }());
    testdtos.HelloWithReturnResponse = HelloWithReturnResponse;
    var HelloType = (function () {
        function HelloType() {
        }
        return HelloType;
    }());
    testdtos.HelloType = HelloType;
    var EmptyClass = (function () {
        function EmptyClass() {
        }
        return EmptyClass;
    }());
    testdtos.EmptyClass = EmptyClass;
    var InnerType = (function () {
        function InnerType() {
        }
        return InnerType;
    }());
    testdtos.InnerType = InnerType;
    var PingService = (function () {
        function PingService() {
        }
        return PingService;
    }());
    testdtos.PingService = PingService;
    var CustomUserSession = (function (_super) {
        __extends(CustomUserSession, _super);
        function CustomUserSession() {
            _super.apply(this, arguments);
        }
        return CustomUserSession;
    }(AuthUserSession));
    testdtos.CustomUserSession = CustomUserSession;
    var UnAuthInfo = (function () {
        function UnAuthInfo() {
        }
        return UnAuthInfo;
    }());
    testdtos.UnAuthInfo = UnAuthInfo;
    var Logger = (function () {
        function Logger() {
        }
        return Logger;
    }());
    testdtos.Logger = Logger;
    var RequestLogEntry = (function () {
        function RequestLogEntry() {
        }
        return RequestLogEntry;
    }());
    testdtos.RequestLogEntry = RequestLogEntry;
    var QueryBase_1 = (function (_super) {
        __extends(QueryBase_1, _super);
        function QueryBase_1() {
            _super.apply(this, arguments);
        }
        return QueryBase_1;
    }(QueryBase));
    testdtos.QueryBase_1 = QueryBase_1;
    var OnlyDefinedInGenericType = (function () {
        function OnlyDefinedInGenericType() {
        }
        return OnlyDefinedInGenericType;
    }());
    testdtos.OnlyDefinedInGenericType = OnlyDefinedInGenericType;
    var QueryBase_2 = (function (_super) {
        __extends(QueryBase_2, _super);
        function QueryBase_2() {
            _super.apply(this, arguments);
        }
        return QueryBase_2;
    }(QueryBase));
    testdtos.QueryBase_2 = QueryBase_2;
    var OnlyDefinedInGenericTypeFrom = (function () {
        function OnlyDefinedInGenericTypeFrom() {
        }
        return OnlyDefinedInGenericTypeFrom;
    }());
    testdtos.OnlyDefinedInGenericTypeFrom = OnlyDefinedInGenericTypeFrom;
    var OnlyDefinedInGenericTypeInto = (function () {
        function OnlyDefinedInGenericTypeInto() {
        }
        return OnlyDefinedInGenericTypeInto;
    }());
    testdtos.OnlyDefinedInGenericTypeInto = OnlyDefinedInGenericTypeInto;
    var Rockstar = (function () {
        function Rockstar() {
        }
        return Rockstar;
    }());
    testdtos.Rockstar = Rockstar;
    // @DataContract
    var ResponseError = (function () {
        function ResponseError() {
        }
        return ResponseError;
    }());
    testdtos.ResponseError = ResponseError;
    var MetadataTestNestedChild = (function () {
        function MetadataTestNestedChild() {
        }
        return MetadataTestNestedChild;
    }());
    testdtos.MetadataTestNestedChild = MetadataTestNestedChild;
    var MenuItemExample = (function () {
        function MenuItemExample() {
        }
        return MenuItemExample;
    }());
    testdtos.MenuItemExample = MenuItemExample;
    var TypesGroup = (function () {
        function TypesGroup() {
        }
        return TypesGroup;
    }());
    testdtos.TypesGroup = TypesGroup;
    // @DataContract
    var AuthUserSession = (function () {
        function AuthUserSession() {
        }
        return AuthUserSession;
    }());
    testdtos.AuthUserSession = AuthUserSession;
    var Device = (function () {
        function Device() {
        }
        return Device;
    }());
    testdtos.Device = Device;
    var QueryBase = (function () {
        function QueryBase() {
        }
        return QueryBase;
    }());
    testdtos.QueryBase = QueryBase;
    var MenuItemExampleItem = (function () {
        function MenuItemExampleItem() {
        }
        return MenuItemExampleItem;
    }());
    testdtos.MenuItemExampleItem = MenuItemExampleItem;
    var Channel = (function () {
        function Channel() {
        }
        return Channel;
    }());
    testdtos.Channel = Channel;
    var CustomHttpErrorResponse = (function () {
        function CustomHttpErrorResponse() {
        }
        return CustomHttpErrorResponse;
    }());
    testdtos.CustomHttpErrorResponse = CustomHttpErrorResponse;
    var ThrowTypeResponse = (function () {
        function ThrowTypeResponse() {
        }
        return ThrowTypeResponse;
    }());
    testdtos.ThrowTypeResponse = ThrowTypeResponse;
    var ThrowValidationResponse = (function () {
        function ThrowValidationResponse() {
        }
        return ThrowValidationResponse;
    }());
    testdtos.ThrowValidationResponse = ThrowValidationResponse;
    var ThrowBusinessErrorResponse = (function () {
        function ThrowBusinessErrorResponse() {
        }
        return ThrowBusinessErrorResponse;
    }());
    testdtos.ThrowBusinessErrorResponse = ThrowBusinessErrorResponse;
    var ExternalOperationResponse = (function () {
        function ExternalOperationResponse() {
        }
        return ExternalOperationResponse;
    }());
    testdtos.ExternalOperationResponse = ExternalOperationResponse;
    var ExternalOperation2Response = (function () {
        function ExternalOperation2Response() {
        }
        return ExternalOperation2Response;
    }());
    testdtos.ExternalOperation2Response = ExternalOperation2Response;
    var ExternalReturnTypeResponse = (function () {
        function ExternalReturnTypeResponse() {
        }
        return ExternalReturnTypeResponse;
    }());
    testdtos.ExternalReturnTypeResponse = ExternalReturnTypeResponse;
    var Account = (function () {
        function Account() {
        }
        return Account;
    }());
    testdtos.Account = Account;
    var Project = (function () {
        function Project() {
        }
        return Project;
    }());
    testdtos.Project = Project;
    var MetadataTestResponse = (function () {
        function MetadataTestResponse() {
        }
        return MetadataTestResponse;
    }());
    testdtos.MetadataTestResponse = MetadataTestResponse;
    // @DataContract
    var GetExampleResponse = (function () {
        function GetExampleResponse() {
        }
        return GetExampleResponse;
    }());
    testdtos.GetExampleResponse = GetExampleResponse;
    var GetRandomIdsResponse = (function () {
        function GetRandomIdsResponse() {
        }
        return GetRandomIdsResponse;
    }());
    testdtos.GetRandomIdsResponse = GetRandomIdsResponse;
    var HelloResponse = (function () {
        function HelloResponse() {
        }
        return HelloResponse;
    }());
    testdtos.HelloResponse = HelloResponse;
    var HelloAllTypesResponse = (function () {
        function HelloAllTypesResponse() {
        }
        return HelloAllTypesResponse;
    }());
    testdtos.HelloAllTypesResponse = HelloAllTypesResponse;
    var HelloDateTime = (function () {
        function HelloDateTime() {
        }
        return HelloDateTime;
    }());
    testdtos.HelloDateTime = HelloDateTime;
    // @DataContract
    var HelloWithDataContractResponse = (function () {
        function HelloWithDataContractResponse() {
        }
        return HelloWithDataContractResponse;
    }());
    testdtos.HelloWithDataContractResponse = HelloWithDataContractResponse;
    /**
    * Description on HelloWithDescriptionResponse type
    */
    var HelloWithDescriptionResponse = (function () {
        function HelloWithDescriptionResponse() {
        }
        return HelloWithDescriptionResponse;
    }());
    testdtos.HelloWithDescriptionResponse = HelloWithDescriptionResponse;
    var HelloWithInheritanceResponse = (function (_super) {
        __extends(HelloWithInheritanceResponse, _super);
        function HelloWithInheritanceResponse() {
            _super.apply(this, arguments);
        }
        return HelloWithInheritanceResponse;
    }(HelloResponseBase));
    testdtos.HelloWithInheritanceResponse = HelloWithInheritanceResponse;
    var HelloWithAlternateReturnResponse = (function (_super) {
        __extends(HelloWithAlternateReturnResponse, _super);
        function HelloWithAlternateReturnResponse() {
            _super.apply(this, arguments);
        }
        return HelloWithAlternateReturnResponse;
    }(HelloWithReturnResponse));
    testdtos.HelloWithAlternateReturnResponse = HelloWithAlternateReturnResponse;
    var HelloWithRouteResponse = (function () {
        function HelloWithRouteResponse() {
        }
        return HelloWithRouteResponse;
    }());
    testdtos.HelloWithRouteResponse = HelloWithRouteResponse;
    var HelloWithTypeResponse = (function () {
        function HelloWithTypeResponse() {
        }
        return HelloWithTypeResponse;
    }());
    testdtos.HelloWithTypeResponse = HelloWithTypeResponse;
    var HelloInnerTypesResponse = (function () {
        function HelloInnerTypesResponse() {
        }
        return HelloInnerTypesResponse;
    }());
    testdtos.HelloInnerTypesResponse = HelloInnerTypesResponse;
    var HelloVerbResponse = (function () {
        function HelloVerbResponse() {
        }
        return HelloVerbResponse;
    }());
    testdtos.HelloVerbResponse = HelloVerbResponse;
    var EnumResponse = (function () {
        function EnumResponse() {
        }
        return EnumResponse;
    }());
    testdtos.EnumResponse = EnumResponse;
    var PingResponse = (function () {
        function PingResponse() {
        }
        return PingResponse;
    }());
    testdtos.PingResponse = PingResponse;
    var RequiresRoleResponse = (function () {
        function RequiresRoleResponse() {
        }
        return RequiresRoleResponse;
    }());
    testdtos.RequiresRoleResponse = RequiresRoleResponse;
    var SendVerbResponse = (function () {
        function SendVerbResponse() {
        }
        return SendVerbResponse;
    }());
    testdtos.SendVerbResponse = SendVerbResponse;
    var GetSessionResponse = (function () {
        function GetSessionResponse() {
        }
        return GetSessionResponse;
    }());
    testdtos.GetSessionResponse = GetSessionResponse;
    var StoreLogsResponse = (function () {
        function StoreLogsResponse() {
        }
        return StoreLogsResponse;
    }());
    testdtos.StoreLogsResponse = StoreLogsResponse;
    var TestAuthResponse = (function () {
        function TestAuthResponse() {
        }
        return TestAuthResponse;
    }());
    testdtos.TestAuthResponse = TestAuthResponse;
    // @Route("/wait/{ForMs}")
    var Wait = (function () {
        function Wait() {
        }
        return Wait;
    }());
    testdtos.Wait = Wait;
    // @Route("/echo/types")
    var EchoTypes = (function () {
        function EchoTypes() {
        }
        return EchoTypes;
    }());
    testdtos.EchoTypes = EchoTypes;
    // @Route("/echo/collections")
    var EchoCollections = (function () {
        function EchoCollections() {
        }
        return EchoCollections;
    }());
    testdtos.EchoCollections = EchoCollections;
    var EchoComplexTypes = (function () {
        function EchoComplexTypes() {
        }
        return EchoComplexTypes;
    }());
    testdtos.EchoComplexTypes = EchoComplexTypes;
    // @DataContract
    var RequestLogsResponse = (function () {
        function RequestLogsResponse() {
        }
        return RequestLogsResponse;
    }());
    testdtos.RequestLogsResponse = RequestLogsResponse;
    // @DataContract
    var AuthenticateResponse = (function () {
        function AuthenticateResponse() {
        }
        return AuthenticateResponse;
    }());
    testdtos.AuthenticateResponse = AuthenticateResponse;
    // @DataContract
    var AssignRolesResponse = (function () {
        function AssignRolesResponse() {
        }
        return AssignRolesResponse;
    }());
    testdtos.AssignRolesResponse = AssignRolesResponse;
    // @DataContract
    var UnAssignRolesResponse = (function () {
        function UnAssignRolesResponse() {
        }
        return UnAssignRolesResponse;
    }());
    testdtos.UnAssignRolesResponse = UnAssignRolesResponse;
    // @DataContract
    var QueryResponse = (function () {
        function QueryResponse() {
        }
        return QueryResponse;
    }());
    testdtos.QueryResponse = QueryResponse;
    var CustomHttpError = (function () {
        function CustomHttpError() {
        }
        return CustomHttpError;
    }());
    testdtos.CustomHttpError = CustomHttpError;
    // @Route("/throwhttperror/{Status}")
    var ThrowHttpError = (function () {
        function ThrowHttpError() {
        }
        return ThrowHttpError;
    }());
    testdtos.ThrowHttpError = ThrowHttpError;
    // @Route("/throw404")
    // @Route("/throw404/{Message}")
    var Throw404 = (function () {
        function Throw404() {
        }
        return Throw404;
    }());
    testdtos.Throw404 = Throw404;
    // @Route("/throwcustom400")
    // @Route("/throwcustom400/{Message}")
    var ThrowCustom400 = (function () {
        function ThrowCustom400() {
        }
        return ThrowCustom400;
    }());
    testdtos.ThrowCustom400 = ThrowCustom400;
    // @Route("/throw/{Type}")
    var ThrowType = (function () {
        function ThrowType() {
        }
        return ThrowType;
    }());
    testdtos.ThrowType = ThrowType;
    // @Route("/throwvalidation")
    var ThrowValidation = (function () {
        function ThrowValidation() {
        }
        return ThrowValidation;
    }());
    testdtos.ThrowValidation = ThrowValidation;
    // @Route("/throwbusinesserror")
    var ThrowBusinessError = (function () {
        function ThrowBusinessError() {
        }
        return ThrowBusinessError;
    }());
    testdtos.ThrowBusinessError = ThrowBusinessError;
    var ExternalOperation = (function () {
        function ExternalOperation() {
        }
        return ExternalOperation;
    }());
    testdtos.ExternalOperation = ExternalOperation;
    var ExternalOperation2 = (function () {
        function ExternalOperation2() {
        }
        return ExternalOperation2;
    }());
    testdtos.ExternalOperation2 = ExternalOperation2;
    var ExternalOperation3 = (function () {
        function ExternalOperation3() {
        }
        return ExternalOperation3;
    }());
    testdtos.ExternalOperation3 = ExternalOperation3;
    var ExternalOperation4 = (function () {
        function ExternalOperation4() {
        }
        return ExternalOperation4;
    }());
    testdtos.ExternalOperation4 = ExternalOperation4;
    // @Route("/{Path*}")
    var RootPathRoutes = (function () {
        function RootPathRoutes() {
        }
        return RootPathRoutes;
    }());
    testdtos.RootPathRoutes = RootPathRoutes;
    var GetAccount = (function () {
        function GetAccount() {
        }
        return GetAccount;
    }());
    testdtos.GetAccount = GetAccount;
    var GetProject = (function () {
        function GetProject() {
        }
        return GetProject;
    }());
    testdtos.GetProject = GetProject;
    // @Route("/image-stream")
    var ImageAsStream = (function () {
        function ImageAsStream() {
        }
        return ImageAsStream;
    }());
    testdtos.ImageAsStream = ImageAsStream;
    // @Route("/image-bytes")
    var ImageAsBytes = (function () {
        function ImageAsBytes() {
        }
        return ImageAsBytes;
    }());
    testdtos.ImageAsBytes = ImageAsBytes;
    // @Route("/image-custom")
    var ImageAsCustomResult = (function () {
        function ImageAsCustomResult() {
        }
        return ImageAsCustomResult;
    }());
    testdtos.ImageAsCustomResult = ImageAsCustomResult;
    // @Route("/image-response")
    var ImageWriteToResponse = (function () {
        function ImageWriteToResponse() {
        }
        return ImageWriteToResponse;
    }());
    testdtos.ImageWriteToResponse = ImageWriteToResponse;
    // @Route("/image-file")
    var ImageAsFile = (function () {
        function ImageAsFile() {
        }
        return ImageAsFile;
    }());
    testdtos.ImageAsFile = ImageAsFile;
    // @Route("/image-redirect")
    var ImageAsRedirect = (function () {
        function ImageAsRedirect() {
        }
        return ImageAsRedirect;
    }());
    testdtos.ImageAsRedirect = ImageAsRedirect;
    // @Route("/image-draw/{Name}")
    var DrawImage = (function () {
        function DrawImage() {
        }
        return DrawImage;
    }());
    testdtos.DrawImage = DrawImage;
    // @Route("/metadatatest")
    var MetadataTest = (function () {
        function MetadataTest() {
        }
        return MetadataTest;
    }());
    testdtos.MetadataTest = MetadataTest;
    // @Route("/metadatatest-array")
    var MetadataTestArray = (function () {
        function MetadataTestArray() {
        }
        return MetadataTestArray;
    }());
    testdtos.MetadataTestArray = MetadataTestArray;
    // @Route("/example", "GET")
    // @DataContract
    var GetExample = (function () {
        function GetExample() {
        }
        return GetExample;
    }());
    testdtos.GetExample = GetExample;
    // @Route("/randomids")
    var GetRandomIds = (function () {
        function GetRandomIds() {
        }
        return GetRandomIds;
    }());
    testdtos.GetRandomIds = GetRandomIds;
    // @Route("/textfile-test")
    var TextFileTest = (function () {
        function TextFileTest() {
        }
        return TextFileTest;
    }());
    testdtos.TextFileTest = TextFileTest;
    // @Route("/hello")
    // @Route("/hello/{Name}")
    var Hello = (function () {
        function Hello() {
        }
        return Hello;
    }());
    testdtos.Hello = Hello;
    var HelloWithNestedClass = (function () {
        function HelloWithNestedClass() {
        }
        return HelloWithNestedClass;
    }());
    testdtos.HelloWithNestedClass = HelloWithNestedClass;
    var HelloList = (function () {
        function HelloList() {
        }
        return HelloList;
    }());
    testdtos.HelloList = HelloList;
    var HelloArray = (function () {
        function HelloArray() {
        }
        return HelloArray;
    }());
    testdtos.HelloArray = HelloArray;
    var HelloWithEnum = (function () {
        function HelloWithEnum() {
        }
        return HelloWithEnum;
    }());
    testdtos.HelloWithEnum = HelloWithEnum;
    var HelloExternal = (function () {
        function HelloExternal() {
        }
        return HelloExternal;
    }());
    testdtos.HelloExternal = HelloExternal;
    /**
    * AllowedAttributes Description
    */
    // @Route("/allowed-attributes", "GET")
    // @Api("AllowedAttributes Description")
    // @ApiResponse(400, "Your request was not understood")
    // @DataContract
    var AllowedAttributes = (function () {
        function AllowedAttributes() {
        }
        return AllowedAttributes;
    }());
    testdtos.AllowedAttributes = AllowedAttributes;
    // @Route("/all-types")
    var HelloAllTypes = (function () {
        function HelloAllTypes() {
        }
        return HelloAllTypes;
    }());
    testdtos.HelloAllTypes = HelloAllTypes;
    var AllTypes = (function () {
        function AllTypes() {
        }
        return AllTypes;
    }());
    testdtos.AllTypes = AllTypes;
    var HelloString = (function () {
        function HelloString() {
        }
        return HelloString;
    }());
    testdtos.HelloString = HelloString;
    var HelloVoid = (function () {
        function HelloVoid() {
        }
        return HelloVoid;
    }());
    testdtos.HelloVoid = HelloVoid;
    // @DataContract
    var HelloWithDataContract = (function () {
        function HelloWithDataContract() {
        }
        return HelloWithDataContract;
    }());
    testdtos.HelloWithDataContract = HelloWithDataContract;
    /**
    * Description on HelloWithDescription type
    */
    var HelloWithDescription = (function () {
        function HelloWithDescription() {
        }
        return HelloWithDescription;
    }());
    testdtos.HelloWithDescription = HelloWithDescription;
    var HelloWithInheritance = (function (_super) {
        __extends(HelloWithInheritance, _super);
        function HelloWithInheritance() {
            _super.apply(this, arguments);
        }
        return HelloWithInheritance;
    }(HelloBase));
    testdtos.HelloWithInheritance = HelloWithInheritance;
    var HelloWithGenericInheritance = (function (_super) {
        __extends(HelloWithGenericInheritance, _super);
        function HelloWithGenericInheritance() {
            _super.apply(this, arguments);
        }
        return HelloWithGenericInheritance;
    }(HelloBase_1));
    testdtos.HelloWithGenericInheritance = HelloWithGenericInheritance;
    var HelloWithGenericInheritance2 = (function (_super) {
        __extends(HelloWithGenericInheritance2, _super);
        function HelloWithGenericInheritance2() {
            _super.apply(this, arguments);
        }
        return HelloWithGenericInheritance2;
    }(HelloBase_1));
    testdtos.HelloWithGenericInheritance2 = HelloWithGenericInheritance2;
    var HelloWithNestedInheritance = (function (_super) {
        __extends(HelloWithNestedInheritance, _super);
        function HelloWithNestedInheritance() {
            _super.apply(this, arguments);
        }
        return HelloWithNestedInheritance;
    }(HelloBase_1));
    testdtos.HelloWithNestedInheritance = HelloWithNestedInheritance;
    var HelloWithReturn = (function () {
        function HelloWithReturn() {
        }
        return HelloWithReturn;
    }());
    testdtos.HelloWithReturn = HelloWithReturn;
    // @Route("/helloroute")
    var HelloWithRoute = (function () {
        function HelloWithRoute() {
        }
        return HelloWithRoute;
    }());
    testdtos.HelloWithRoute = HelloWithRoute;
    var HelloWithType = (function () {
        function HelloWithType() {
        }
        return HelloWithType;
    }());
    testdtos.HelloWithType = HelloWithType;
    var HelloInterface = (function () {
        function HelloInterface() {
        }
        return HelloInterface;
    }());
    testdtos.HelloInterface = HelloInterface;
    var HelloInnerTypes = (function () {
        function HelloInnerTypes() {
        }
        return HelloInnerTypes;
    }());
    testdtos.HelloInnerTypes = HelloInnerTypes;
    var HelloBuiltin = (function () {
        function HelloBuiltin() {
        }
        return HelloBuiltin;
    }());
    testdtos.HelloBuiltin = HelloBuiltin;
    var HelloGet = (function () {
        function HelloGet() {
        }
        return HelloGet;
    }());
    testdtos.HelloGet = HelloGet;
    var HelloPost = (function (_super) {
        __extends(HelloPost, _super);
        function HelloPost() {
            _super.apply(this, arguments);
        }
        return HelloPost;
    }(HelloBase));
    testdtos.HelloPost = HelloPost;
    var HelloPut = (function () {
        function HelloPut() {
        }
        return HelloPut;
    }());
    testdtos.HelloPut = HelloPut;
    var HelloDelete = (function () {
        function HelloDelete() {
        }
        return HelloDelete;
    }());
    testdtos.HelloDelete = HelloDelete;
    var HelloPatch = (function () {
        function HelloPatch() {
        }
        return HelloPatch;
    }());
    testdtos.HelloPatch = HelloPatch;
    var HelloReturnVoid = (function () {
        function HelloReturnVoid() {
        }
        return HelloReturnVoid;
    }());
    testdtos.HelloReturnVoid = HelloReturnVoid;
    var EnumRequest = (function () {
        function EnumRequest() {
        }
        return EnumRequest;
    }());
    testdtos.EnumRequest = EnumRequest;
    // @Route("/ping")
    var Ping = (function () {
        function Ping() {
        }
        return Ping;
    }());
    testdtos.Ping = Ping;
    // @Route("/reset-connections")
    var ResetConnections = (function () {
        function ResetConnections() {
        }
        return ResetConnections;
    }());
    testdtos.ResetConnections = ResetConnections;
    // @Route("/requires-role")
    var RequiresRole = (function () {
        function RequiresRole() {
        }
        return RequiresRole;
    }());
    testdtos.RequiresRole = RequiresRole;
    var SendDefault = (function () {
        function SendDefault() {
        }
        return SendDefault;
    }());
    testdtos.SendDefault = SendDefault;
    // @Route("/sendrestget/{Id}", "GET")
    var SendRestGet = (function () {
        function SendRestGet() {
        }
        return SendRestGet;
    }());
    testdtos.SendRestGet = SendRestGet;
    var SendGet = (function () {
        function SendGet() {
        }
        return SendGet;
    }());
    testdtos.SendGet = SendGet;
    var SendPost = (function () {
        function SendPost() {
        }
        return SendPost;
    }());
    testdtos.SendPost = SendPost;
    var SendPut = (function () {
        function SendPut() {
        }
        return SendPut;
    }());
    testdtos.SendPut = SendPut;
    // @Route("/session")
    var GetSession = (function () {
        function GetSession() {
        }
        return GetSession;
    }());
    testdtos.GetSession = GetSession;
    // @Route("/session/edit/{CustomName}")
    var UpdateSession = (function () {
        function UpdateSession() {
        }
        return UpdateSession;
    }());
    testdtos.UpdateSession = UpdateSession;
    var StoreLogs = (function () {
        function StoreLogs() {
        }
        return StoreLogs;
    }());
    testdtos.StoreLogs = StoreLogs;
    // @Route("/testauth")
    var TestAuth = (function () {
        function TestAuth() {
        }
        return TestAuth;
    }());
    testdtos.TestAuth = TestAuth;
    // @Route("/void-response")
    var TestVoidResponse = (function () {
        function TestVoidResponse() {
        }
        return TestVoidResponse;
    }());
    testdtos.TestVoidResponse = TestVoidResponse;
    // @Route("/null-response")
    var TestNullResponse = (function () {
        function TestNullResponse() {
        }
        return TestNullResponse;
    }());
    testdtos.TestNullResponse = TestNullResponse;
    // @Route("/requestlogs")
    // @DataContract
    var RequestLogs = (function () {
        function RequestLogs() {
        }
        return RequestLogs;
    }());
    testdtos.RequestLogs = RequestLogs;
    // @Route("/auth")
    // @Route("/auth/{provider}")
    // @Route("/authenticate")
    // @Route("/authenticate/{provider}")
    // @DataContract
    var Authenticate = (function () {
        function Authenticate() {
        }
        return Authenticate;
    }());
    testdtos.Authenticate = Authenticate;
    // @Route("/assignroles")
    // @DataContract
    var AssignRoles = (function () {
        function AssignRoles() {
        }
        return AssignRoles;
    }());
    testdtos.AssignRoles = AssignRoles;
    // @Route("/unassignroles")
    // @DataContract
    var UnAssignRoles = (function () {
        function UnAssignRoles() {
        }
        return UnAssignRoles;
    }());
    testdtos.UnAssignRoles = UnAssignRoles;
    var QueryPocoBase = (function (_super) {
        __extends(QueryPocoBase, _super);
        function QueryPocoBase() {
            _super.apply(this, arguments);
        }
        return QueryPocoBase;
    }(QueryBase_1));
    testdtos.QueryPocoBase = QueryPocoBase;
    var QueryPocoIntoBase = (function (_super) {
        __extends(QueryPocoIntoBase, _super);
        function QueryPocoIntoBase() {
            _super.apply(this, arguments);
        }
        return QueryPocoIntoBase;
    }(QueryBase_2));
    testdtos.QueryPocoIntoBase = QueryPocoIntoBase;
    // @Route("/rockstars")
    var QueryRockstars = (function (_super) {
        __extends(QueryRockstars, _super);
        function QueryRockstars() {
            _super.apply(this, arguments);
        }
        return QueryRockstars;
    }(QueryBase_1));
    testdtos.QueryRockstars = QueryRockstars;
})(testdtos || (testdtos = {}));
//# sourceMappingURL=test.dtos.js.map