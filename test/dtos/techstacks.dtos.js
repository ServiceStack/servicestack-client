"use strict";
/* Options:
Date: 2021-12-16 08:26:22
Version: 5.133
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://techstacks.io

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
exports.AddOrganizationMemberResponse = exports.UpdateOrganizationCategoryResponse = exports.AddOrganizationCategoryResponse = exports.OrganizationLabelResponse = exports.UpdateOrganizationResponse = exports.CreateOrganizationResponse = exports.CreateOrganizationForTechnologyResponse = exports.GetOrganizationAdminResponse = exports.GetOrganizationMembersResponse = exports.GetOrganizationResponse = exports.Option = exports.OrganizationInfo = exports.CategoryInfo = exports.LabelInfo = exports.TechStackDetails = exports.TechnologyInStack = exports.TechnologyInfo = exports.UserInfo = exports.TechnologyStackHistory = exports.TechnologyHistory = exports.UserActivity = exports.OrganizationSubscription = exports.UserRef = exports.PostCommentReportInfo = exports.PostReportInfo = exports.OrganizationMemberInvite = exports.ResponseStatus = exports.ResponseError = exports.OrganizationMember = exports.Category = exports.OrganizationLabel = exports.Organization = exports.PostComment = exports.UserVoiceComment = exports.UserVoiceUser = exports.TechnologyStackView = exports.TechnologyStack = exports.TechnologyStackBase = exports.TechnologyView = exports.Technology = exports.TechnologyBase = exports.TechnologyTier = exports.QueryDb_2 = exports.Frequency = exports.FlagType = exports.ReportAction = exports.Post = exports.PostType = exports.QueryDb_1 = exports.QueryBase = void 0;
exports.GetUserInfoResponse = exports.GetUsersKarmaResponse = exports.GetUserFeedResponse = exports.FavoriteTechnologyResponse = exports.GetFavoriteTechnologiesResponse = exports.FavoriteTechStackResponse = exports.GetFavoriteTechStackResponse = exports.DeleteTechnologyStackResponse = exports.UpdateTechnologyStackResponse = exports.CreateTechnologyStackResponse = exports.GetConfigResponse = exports.GetTechnologyStackFavoriteDetailsResponse = exports.GetTechnologyStackResponse = exports.GetAllTechnologyStacksResponse = exports.AppOverviewResponse = exports.OverviewResponse = exports.HourlyTaskResponse = exports.GetPageStatsResponse = exports.GetTechnologyStackPreviousVersionsResponse = exports.DeleteTechnologyResponse = exports.UpdateTechnologyResponse = exports.CreateTechnologyResponse = exports.GetTechnologyFavoriteDetailsResponse = exports.GetTechnologyResponse = exports.GetAllTechnologiesResponse = exports.GetTechnologyPreviousVersionsResponse = exports.SessionInfoResponse = exports.UserPostCommentReportResponse = exports.UserPostCommentVoteResponse = exports.UserPostReportResponse = exports.UserPostFavoriteResponse = exports.UserPostVoteResponse = exports.GetUserOrganizationsResponse = exports.GetUserPostActivityResponse = exports.GetUsersByEmailsResponse = exports.PinPostCommentResponse = exports.GetUserPostCommentVotesResponse = exports.DeletePostCommentResponse = exports.UpdatePostCommentResponse = exports.CreatePostCommentResponse = exports.DeletePostResponse = exports.UpdatePostResponse = exports.CreatePostResponse = exports.GetPostResponse = exports.QueryResponse = exports.UpdateOrganizationMemberInviteResponse = exports.RequestOrganizationMemberInviteResponse = exports.GetOrganizationMemberInvitesResponse = exports.SetOrganizationMembersResponse = exports.UpdateOrganizationMemberResponse = void 0;
exports.GetUsersByEmails = exports.PinPostComment = exports.GetUserPostCommentVotes = exports.ActionPostCommentReport = exports.DeletePostComment = exports.UpdatePostComment = exports.CreatePostComment = exports.ActionPostReport = exports.ChangeStatusPost = exports.HidePost = exports.LockPost = exports.DeletePost = exports.UpdatePost = exports.CreatePost = exports.GetPost = exports.QueryPosts = exports.UpdateOrganizationMemberInvite = exports.RequestOrganizationMemberInvite = exports.GetOrganizationMemberInvites = exports.SetOrganizationMembers = exports.RemoveOrganizationMember = exports.UpdateOrganizationMember = exports.AddOrganizationMember = exports.DeleteOrganizationCategory = exports.UpdateOrganizationCategory = exports.AddOrganizationCategory = exports.RemoveOrganizationLabel = exports.UpdateOrganizationLabel = exports.AddOrganizationLabel = exports.LockOrganization = exports.DeleteOrganization = exports.UpdateOrganization = exports.CreateOrganization = exports.CreateOrganizationForTechnology = exports.GetOrganizationAdmin = exports.GetOrganizationMembers = exports.GetOrganizationBySlug = exports.GetOrganization = exports.Ping = exports.GetAccessTokenResponse = exports.ConvertSessionToTokenResponse = exports.UnAssignRolesResponse = exports.AssignRolesResponse = exports.AuthenticateResponse = exports.ImportUserVoiceSuggestionResponse = exports.ImportUserResponse = exports.EmailTestRespoonse = exports.LockStackResponse = exports.LogoUrlApprovalResponse = exports.SyncDiscourseSiteResponse = void 0;
exports.MqStop = exports.MqStart = exports.UserAvatar = exports.GetUserInfo = exports.GetUsersKarma = exports.GetUserFeed = exports.RemoveFavoriteTechnology = exports.AddFavoriteTechnology = exports.GetFavoriteTechnologies = exports.RemoveFavoriteTechStack = exports.AddFavoriteTechStack = exports.GetFavoriteTechStack = exports.DeleteTechnologyStack = exports.UpdateTechnologyStack = exports.CreateTechnologyStack = exports.GetConfig = exports.GetTechnologyStackFavoriteDetails = exports.GetTechnologyStack = exports.GetAllTechnologyStacks = exports.AppOverview = exports.Overview = exports.QueryTechStacks = exports.FindTechStacks = exports.HourlyTask = exports.ClearCache = exports.GetPageStats = exports.GetTechnologyStackPreviousVersions = exports.DeleteTechnology = exports.UpdateTechnology = exports.CreateTechnology = exports.GetTechnologyFavoriteDetails = exports.GetTechnology = exports.QueryTechnology = exports.FindTechnologies = exports.GetAllTechnologies = exports.GetTechnologyPreviousVersions = exports.DeletePostSubscription = exports.DeleteOrganizationSubscription = exports.SubscribeToPost = exports.SubscribeToOrganization = exports.SessionInfo = exports.GetPreRender = exports.StorePreRender = exports.UserPostCommentReport = exports.UserPostCommentVote = exports.UserPostReport = exports.UserPostFavorite = exports.UserPostVote = exports.GetUserOrganizations = exports.GetUserPostActivity = void 0;
exports.QueryPostComments = exports.GetAccessToken = exports.ConvertSessionToToken = exports.UnAssignRoles = exports.AssignRoles = exports.Authenticate = exports.ImportUserVoiceSuggestion = exports.ImportUser = exports.EmailTest = exports.DummyTypes = exports.LockTech = exports.LockTechStack = exports.LogoUrlApproval = exports.SyncDiscourseSite = exports.MqStatus = exports.MqStats = void 0;
// @DataContract
class QueryBase {
    constructor(init) { Object.assign(this, init); }
}
exports.QueryBase = QueryBase;
class QueryDb_1 extends QueryBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.QueryDb_1 = QueryDb_1;
var PostType;
(function (PostType) {
    PostType["Announcement"] = "Announcement";
    PostType["Post"] = "Post";
    PostType["Showcase"] = "Showcase";
    PostType["Question"] = "Question";
    PostType["Request"] = "Request";
})(PostType = exports.PostType || (exports.PostType = {}));
class Post {
    constructor(init) { Object.assign(this, init); }
}
exports.Post = Post;
var ReportAction;
(function (ReportAction) {
    ReportAction["Dismiss"] = "Dismiss";
    ReportAction["Delete"] = "Delete";
})(ReportAction = exports.ReportAction || (exports.ReportAction = {}));
var FlagType;
(function (FlagType) {
    FlagType["Violation"] = "Violation";
    FlagType["Spam"] = "Spam";
    FlagType["Abusive"] = "Abusive";
    FlagType["Confidential"] = "Confidential";
    FlagType["OffTopic"] = "OffTopic";
    FlagType["Other"] = "Other";
})(FlagType = exports.FlagType || (exports.FlagType = {}));
var Frequency;
(function (Frequency) {
    Frequency[Frequency["Daily"] = 1] = "Daily";
    Frequency[Frequency["Weekly"] = 7] = "Weekly";
    Frequency[Frequency["Monthly"] = 30] = "Monthly";
    Frequency[Frequency["Quarterly"] = 90] = "Quarterly";
})(Frequency = exports.Frequency || (exports.Frequency = {}));
class QueryDb_2 extends QueryBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.QueryDb_2 = QueryDb_2;
var TechnologyTier;
(function (TechnologyTier) {
    TechnologyTier["ProgrammingLanguage"] = "ProgrammingLanguage";
    TechnologyTier["Client"] = "Client";
    TechnologyTier["Http"] = "Http";
    TechnologyTier["Server"] = "Server";
    TechnologyTier["Data"] = "Data";
    TechnologyTier["SoftwareInfrastructure"] = "SoftwareInfrastructure";
    TechnologyTier["OperatingSystem"] = "OperatingSystem";
    TechnologyTier["HardwareInfrastructure"] = "HardwareInfrastructure";
    TechnologyTier["ThirdPartyServices"] = "ThirdPartyServices";
})(TechnologyTier = exports.TechnologyTier || (exports.TechnologyTier = {}));
class TechnologyBase {
    constructor(init) { Object.assign(this, init); }
}
exports.TechnologyBase = TechnologyBase;
class Technology extends TechnologyBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.Technology = Technology;
class TechnologyView {
    constructor(init) { Object.assign(this, init); }
}
exports.TechnologyView = TechnologyView;
class TechnologyStackBase {
    constructor(init) { Object.assign(this, init); }
}
exports.TechnologyStackBase = TechnologyStackBase;
class TechnologyStack extends TechnologyStackBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.TechnologyStack = TechnologyStack;
class TechnologyStackView {
    constructor(init) { Object.assign(this, init); }
}
exports.TechnologyStackView = TechnologyStackView;
class UserVoiceUser {
    constructor(init) { Object.assign(this, init); }
}
exports.UserVoiceUser = UserVoiceUser;
class UserVoiceComment {
    constructor(init) { Object.assign(this, init); }
}
exports.UserVoiceComment = UserVoiceComment;
class PostComment {
    constructor(init) { Object.assign(this, init); }
}
exports.PostComment = PostComment;
class Organization {
    constructor(init) { Object.assign(this, init); }
}
exports.Organization = Organization;
class OrganizationLabel {
    constructor(init) { Object.assign(this, init); }
}
exports.OrganizationLabel = OrganizationLabel;
class Category {
    constructor(init) { Object.assign(this, init); }
}
exports.Category = Category;
class OrganizationMember {
    constructor(init) { Object.assign(this, init); }
}
exports.OrganizationMember = OrganizationMember;
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
class OrganizationMemberInvite {
    constructor(init) { Object.assign(this, init); }
}
exports.OrganizationMemberInvite = OrganizationMemberInvite;
class PostReportInfo {
    constructor(init) { Object.assign(this, init); }
}
exports.PostReportInfo = PostReportInfo;
class PostCommentReportInfo {
    constructor(init) { Object.assign(this, init); }
}
exports.PostCommentReportInfo = PostCommentReportInfo;
class UserRef {
    constructor(init) { Object.assign(this, init); }
}
exports.UserRef = UserRef;
class OrganizationSubscription {
    constructor(init) { Object.assign(this, init); }
}
exports.OrganizationSubscription = OrganizationSubscription;
class UserActivity {
    constructor(init) { Object.assign(this, init); }
}
exports.UserActivity = UserActivity;
class TechnologyHistory extends TechnologyBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.TechnologyHistory = TechnologyHistory;
class TechnologyStackHistory extends TechnologyStackBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.TechnologyStackHistory = TechnologyStackHistory;
class UserInfo {
    constructor(init) { Object.assign(this, init); }
}
exports.UserInfo = UserInfo;
class TechnologyInfo {
    constructor(init) { Object.assign(this, init); }
}
exports.TechnologyInfo = TechnologyInfo;
class TechnologyInStack extends TechnologyBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.TechnologyInStack = TechnologyInStack;
class TechStackDetails extends TechnologyStackBase {
    constructor(init) { super(init); Object.assign(this, init); }
}
exports.TechStackDetails = TechStackDetails;
class LabelInfo {
    constructor(init) { Object.assign(this, init); }
}
exports.LabelInfo = LabelInfo;
class CategoryInfo {
    constructor(init) { Object.assign(this, init); }
}
exports.CategoryInfo = CategoryInfo;
class OrganizationInfo {
    constructor(init) { Object.assign(this, init); }
}
exports.OrganizationInfo = OrganizationInfo;
// @DataContract
class Option {
    constructor(init) { Object.assign(this, init); }
}
exports.Option = Option;
class GetOrganizationResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetOrganizationResponse = GetOrganizationResponse;
class GetOrganizationMembersResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetOrganizationMembersResponse = GetOrganizationMembersResponse;
class GetOrganizationAdminResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetOrganizationAdminResponse = GetOrganizationAdminResponse;
class CreateOrganizationForTechnologyResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.CreateOrganizationForTechnologyResponse = CreateOrganizationForTechnologyResponse;
class CreateOrganizationResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.CreateOrganizationResponse = CreateOrganizationResponse;
class UpdateOrganizationResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UpdateOrganizationResponse = UpdateOrganizationResponse;
class OrganizationLabelResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.OrganizationLabelResponse = OrganizationLabelResponse;
class AddOrganizationCategoryResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.AddOrganizationCategoryResponse = AddOrganizationCategoryResponse;
class UpdateOrganizationCategoryResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UpdateOrganizationCategoryResponse = UpdateOrganizationCategoryResponse;
class AddOrganizationMemberResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.AddOrganizationMemberResponse = AddOrganizationMemberResponse;
class UpdateOrganizationMemberResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UpdateOrganizationMemberResponse = UpdateOrganizationMemberResponse;
class SetOrganizationMembersResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.SetOrganizationMembersResponse = SetOrganizationMembersResponse;
class GetOrganizationMemberInvitesResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetOrganizationMemberInvitesResponse = GetOrganizationMemberInvitesResponse;
class RequestOrganizationMemberInviteResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.RequestOrganizationMemberInviteResponse = RequestOrganizationMemberInviteResponse;
class UpdateOrganizationMemberInviteResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UpdateOrganizationMemberInviteResponse = UpdateOrganizationMemberInviteResponse;
// @DataContract
class QueryResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.QueryResponse = QueryResponse;
class GetPostResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetPostResponse = GetPostResponse;
class CreatePostResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.CreatePostResponse = CreatePostResponse;
class UpdatePostResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UpdatePostResponse = UpdatePostResponse;
class DeletePostResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.DeletePostResponse = DeletePostResponse;
class CreatePostCommentResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.CreatePostCommentResponse = CreatePostCommentResponse;
class UpdatePostCommentResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UpdatePostCommentResponse = UpdatePostCommentResponse;
class DeletePostCommentResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.DeletePostCommentResponse = DeletePostCommentResponse;
class GetUserPostCommentVotesResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetUserPostCommentVotesResponse = GetUserPostCommentVotesResponse;
class PinPostCommentResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.PinPostCommentResponse = PinPostCommentResponse;
class GetUsersByEmailsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetUsersByEmailsResponse = GetUsersByEmailsResponse;
class GetUserPostActivityResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetUserPostActivityResponse = GetUserPostActivityResponse;
class GetUserOrganizationsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetUserOrganizationsResponse = GetUserOrganizationsResponse;
class UserPostVoteResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UserPostVoteResponse = UserPostVoteResponse;
class UserPostFavoriteResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UserPostFavoriteResponse = UserPostFavoriteResponse;
class UserPostReportResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UserPostReportResponse = UserPostReportResponse;
class UserPostCommentVoteResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UserPostCommentVoteResponse = UserPostCommentVoteResponse;
class UserPostCommentReportResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UserPostCommentReportResponse = UserPostCommentReportResponse;
class SessionInfoResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.SessionInfoResponse = SessionInfoResponse;
class GetTechnologyPreviousVersionsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetTechnologyPreviousVersionsResponse = GetTechnologyPreviousVersionsResponse;
class GetAllTechnologiesResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetAllTechnologiesResponse = GetAllTechnologiesResponse;
class GetTechnologyResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetTechnologyResponse = GetTechnologyResponse;
class GetTechnologyFavoriteDetailsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetTechnologyFavoriteDetailsResponse = GetTechnologyFavoriteDetailsResponse;
class CreateTechnologyResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.CreateTechnologyResponse = CreateTechnologyResponse;
class UpdateTechnologyResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UpdateTechnologyResponse = UpdateTechnologyResponse;
class DeleteTechnologyResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.DeleteTechnologyResponse = DeleteTechnologyResponse;
class GetTechnologyStackPreviousVersionsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetTechnologyStackPreviousVersionsResponse = GetTechnologyStackPreviousVersionsResponse;
class GetPageStatsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetPageStatsResponse = GetPageStatsResponse;
class HourlyTaskResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.HourlyTaskResponse = HourlyTaskResponse;
class OverviewResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.OverviewResponse = OverviewResponse;
class AppOverviewResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.AppOverviewResponse = AppOverviewResponse;
class GetAllTechnologyStacksResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetAllTechnologyStacksResponse = GetAllTechnologyStacksResponse;
class GetTechnologyStackResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetTechnologyStackResponse = GetTechnologyStackResponse;
class GetTechnologyStackFavoriteDetailsResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetTechnologyStackFavoriteDetailsResponse = GetTechnologyStackFavoriteDetailsResponse;
class GetConfigResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetConfigResponse = GetConfigResponse;
class CreateTechnologyStackResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.CreateTechnologyStackResponse = CreateTechnologyStackResponse;
class UpdateTechnologyStackResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.UpdateTechnologyStackResponse = UpdateTechnologyStackResponse;
class DeleteTechnologyStackResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.DeleteTechnologyStackResponse = DeleteTechnologyStackResponse;
class GetFavoriteTechStackResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetFavoriteTechStackResponse = GetFavoriteTechStackResponse;
class FavoriteTechStackResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.FavoriteTechStackResponse = FavoriteTechStackResponse;
class GetFavoriteTechnologiesResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetFavoriteTechnologiesResponse = GetFavoriteTechnologiesResponse;
class FavoriteTechnologyResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.FavoriteTechnologyResponse = FavoriteTechnologyResponse;
class GetUserFeedResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetUserFeedResponse = GetUserFeedResponse;
class GetUsersKarmaResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetUsersKarmaResponse = GetUsersKarmaResponse;
class GetUserInfoResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetUserInfoResponse = GetUserInfoResponse;
class SyncDiscourseSiteResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.SyncDiscourseSiteResponse = SyncDiscourseSiteResponse;
class LogoUrlApprovalResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.LogoUrlApprovalResponse = LogoUrlApprovalResponse;
class LockStackResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.LockStackResponse = LockStackResponse;
class EmailTestRespoonse {
    constructor(init) { Object.assign(this, init); }
}
exports.EmailTestRespoonse = EmailTestRespoonse;
class ImportUserResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.ImportUserResponse = ImportUserResponse;
class ImportUserVoiceSuggestionResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.ImportUserVoiceSuggestionResponse = ImportUserVoiceSuggestionResponse;
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
class ConvertSessionToTokenResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.ConvertSessionToTokenResponse = ConvertSessionToTokenResponse;
// @DataContract
class GetAccessTokenResponse {
    constructor(init) { Object.assign(this, init); }
}
exports.GetAccessTokenResponse = GetAccessTokenResponse;
// @Route("/ping")
class Ping {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.Ping = Ping;
// @Route("/orgs/{Id}", "GET")
class GetOrganization {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetOrganizationResponse(); }
    getTypeName() { return 'GetOrganization'; }
    getMethod() { return 'GET'; }
}
exports.GetOrganization = GetOrganization;
// @Route("/organizations/{Slug}", "GET")
class GetOrganizationBySlug {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetOrganizationResponse(); }
    getTypeName() { return 'GetOrganizationBySlug'; }
    getMethod() { return 'GET'; }
}
exports.GetOrganizationBySlug = GetOrganizationBySlug;
// @Route("/orgs/{Id}/members", "GET")
class GetOrganizationMembers {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetOrganizationMembersResponse(); }
    getTypeName() { return 'GetOrganizationMembers'; }
    getMethod() { return 'GET'; }
}
exports.GetOrganizationMembers = GetOrganizationMembers;
// @Route("/orgs/{Id}/admin", "GET")
class GetOrganizationAdmin {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetOrganizationAdminResponse(); }
    getTypeName() { return 'GetOrganizationAdmin'; }
    getMethod() { return 'GET'; }
}
exports.GetOrganizationAdmin = GetOrganizationAdmin;
// @Route("/orgs/posts/new", "POST")
class CreateOrganizationForTechnology {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new CreateOrganizationForTechnologyResponse(); }
    getTypeName() { return 'CreateOrganizationForTechnology'; }
    getMethod() { return 'POST'; }
}
exports.CreateOrganizationForTechnology = CreateOrganizationForTechnology;
// @Route("/orgs", "POST")
class CreateOrganization {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new CreateOrganizationResponse(); }
    getTypeName() { return 'CreateOrganization'; }
    getMethod() { return 'POST'; }
}
exports.CreateOrganization = CreateOrganization;
// @Route("/orgs/{Id}", "PUT")
class UpdateOrganization {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UpdateOrganizationResponse(); }
    getTypeName() { return 'UpdateOrganization'; }
    getMethod() { return 'PUT'; }
}
exports.UpdateOrganization = UpdateOrganization;
// @Route("/orgs/{Id}", "DELETE")
class DeleteOrganization {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'DeleteOrganization'; }
    getMethod() { return 'DELETE'; }
}
exports.DeleteOrganization = DeleteOrganization;
// @Route("/orgs/{Id}/lock", "PUT")
class LockOrganization {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'LockOrganization'; }
    getMethod() { return 'PUT'; }
}
exports.LockOrganization = LockOrganization;
// @Route("/orgs/{OrganizationId}/labels", "POST")
class AddOrganizationLabel {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new OrganizationLabelResponse(); }
    getTypeName() { return 'AddOrganizationLabel'; }
    getMethod() { return 'POST'; }
}
exports.AddOrganizationLabel = AddOrganizationLabel;
// @Route("/orgs/{OrganizationId}/members/{Slug}", "PUT")
class UpdateOrganizationLabel {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new OrganizationLabelResponse(); }
    getTypeName() { return 'UpdateOrganizationLabel'; }
    getMethod() { return 'PUT'; }
}
exports.UpdateOrganizationLabel = UpdateOrganizationLabel;
// @Route("/orgs/{OrganizationId}/labels/{Slug}", "DELETE")
class RemoveOrganizationLabel {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'RemoveOrganizationLabel'; }
    getMethod() { return 'DELETE'; }
}
exports.RemoveOrganizationLabel = RemoveOrganizationLabel;
// @Route("/orgs/{OrganizationId}/categories", "POST")
class AddOrganizationCategory {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new AddOrganizationCategoryResponse(); }
    getTypeName() { return 'AddOrganizationCategory'; }
    getMethod() { return 'POST'; }
}
exports.AddOrganizationCategory = AddOrganizationCategory;
// @Route("/orgs/{OrganizationId}/categories/{Id}", "PUT")
class UpdateOrganizationCategory {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UpdateOrganizationCategoryResponse(); }
    getTypeName() { return 'UpdateOrganizationCategory'; }
    getMethod() { return 'PUT'; }
}
exports.UpdateOrganizationCategory = UpdateOrganizationCategory;
// @Route("/orgs/{OrganizationId}/categories/{Id}", "DELETE")
class DeleteOrganizationCategory {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'DeleteOrganizationCategory'; }
    getMethod() { return 'DELETE'; }
}
exports.DeleteOrganizationCategory = DeleteOrganizationCategory;
// @Route("/orgs/{OrganizationId}/members", "POST")
class AddOrganizationMember {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new AddOrganizationMemberResponse(); }
    getTypeName() { return 'AddOrganizationMember'; }
    getMethod() { return 'POST'; }
}
exports.AddOrganizationMember = AddOrganizationMember;
// @Route("/orgs/{OrganizationId}/members/{Id}", "PUT")
class UpdateOrganizationMember {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UpdateOrganizationMemberResponse(); }
    getTypeName() { return 'UpdateOrganizationMember'; }
    getMethod() { return 'PUT'; }
}
exports.UpdateOrganizationMember = UpdateOrganizationMember;
// @Route("/orgs/{OrganizationId}/members/{UserId}", "DELETE")
class RemoveOrganizationMember {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'RemoveOrganizationMember'; }
    getMethod() { return 'DELETE'; }
}
exports.RemoveOrganizationMember = RemoveOrganizationMember;
// @Route("/orgs/{OrganizationId}/members/set", "POST")
class SetOrganizationMembers {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new SetOrganizationMembersResponse(); }
    getTypeName() { return 'SetOrganizationMembers'; }
    getMethod() { return 'POST'; }
}
exports.SetOrganizationMembers = SetOrganizationMembers;
// @Route("/orgs/{OrganizationId}/invites", "GET")
class GetOrganizationMemberInvites {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetOrganizationMemberInvitesResponse(); }
    getTypeName() { return 'GetOrganizationMemberInvites'; }
    getMethod() { return 'GET'; }
}
exports.GetOrganizationMemberInvites = GetOrganizationMemberInvites;
// @Route("/orgs/{OrganizationId}/invites", "POST")
class RequestOrganizationMemberInvite {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new RequestOrganizationMemberInviteResponse(); }
    getTypeName() { return 'RequestOrganizationMemberInvite'; }
    getMethod() { return 'POST'; }
}
exports.RequestOrganizationMemberInvite = RequestOrganizationMemberInvite;
// @Route("/orgs/{OrganizationId}/invites/{UserId}", "PUT")
class UpdateOrganizationMemberInvite {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UpdateOrganizationMemberInviteResponse(); }
    getTypeName() { return 'UpdateOrganizationMemberInvite'; }
    getMethod() { return 'PUT'; }
}
exports.UpdateOrganizationMemberInvite = UpdateOrganizationMemberInvite;
// @Route("/posts", "GET")
class QueryPosts extends QueryDb_1 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'QueryPosts'; }
    getMethod() { return 'GET'; }
}
exports.QueryPosts = QueryPosts;
// @Route("/posts/{Id}", "GET")
class GetPost {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetPostResponse(); }
    getTypeName() { return 'GetPost'; }
    getMethod() { return 'GET'; }
}
exports.GetPost = GetPost;
// @Route("/posts", "POST")
class CreatePost {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new CreatePostResponse(); }
    getTypeName() { return 'CreatePost'; }
    getMethod() { return 'POST'; }
}
exports.CreatePost = CreatePost;
// @Route("/posts/{Id}", "PUT")
class UpdatePost {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UpdatePostResponse(); }
    getTypeName() { return 'UpdatePost'; }
    getMethod() { return 'PUT'; }
}
exports.UpdatePost = UpdatePost;
// @Route("/posts/{Id}", "DELETE")
class DeletePost {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new DeletePostResponse(); }
    getTypeName() { return 'DeletePost'; }
    getMethod() { return 'DELETE'; }
}
exports.DeletePost = DeletePost;
// @Route("/posts/{Id}/lock", "PUT")
class LockPost {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'LockPost'; }
    getMethod() { return 'PUT'; }
}
exports.LockPost = LockPost;
// @Route("/posts/{Id}/hide", "PUT")
class HidePost {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'HidePost'; }
    getMethod() { return 'PUT'; }
}
exports.HidePost = HidePost;
// @Route("/posts/{Id}/status/{Status}", "PUT")
class ChangeStatusPost {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'ChangeStatusPost'; }
    getMethod() { return 'PUT'; }
}
exports.ChangeStatusPost = ChangeStatusPost;
// @Route("/posts/{PostId}/report/{Id}", "POST")
class ActionPostReport {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'ActionPostReport'; }
    getMethod() { return 'POST'; }
}
exports.ActionPostReport = ActionPostReport;
// @Route("/posts/{PostId}/comments", "POST")
class CreatePostComment {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new CreatePostCommentResponse(); }
    getTypeName() { return 'CreatePostComment'; }
    getMethod() { return 'POST'; }
}
exports.CreatePostComment = CreatePostComment;
// @Route("/posts/{PostId}/comments/{Id}", "PUT")
class UpdatePostComment {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UpdatePostCommentResponse(); }
    getTypeName() { return 'UpdatePostComment'; }
    getMethod() { return 'PUT'; }
}
exports.UpdatePostComment = UpdatePostComment;
// @Route("/posts/{PostId}/comments/{Id}", "DELETE")
class DeletePostComment {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new DeletePostCommentResponse(); }
    getTypeName() { return 'DeletePostComment'; }
    getMethod() { return 'DELETE'; }
}
exports.DeletePostComment = DeletePostComment;
// @Route("/posts/{PostId}/comments/{PostCommentId}/report/{Id}", "POST")
class ActionPostCommentReport {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'ActionPostCommentReport'; }
    getMethod() { return 'POST'; }
}
exports.ActionPostCommentReport = ActionPostCommentReport;
// @Route("/user/comments/votes")
class GetUserPostCommentVotes {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetUserPostCommentVotesResponse(); }
    getTypeName() { return 'GetUserPostCommentVotes'; }
    getMethod() { return 'GET'; }
}
exports.GetUserPostCommentVotes = GetUserPostCommentVotes;
// @Route("/posts/{PostId}/comments/{Id}/pin", "PUT")
class PinPostComment {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new PinPostCommentResponse(); }
    getTypeName() { return 'PinPostComment'; }
    getMethod() { return 'PUT'; }
}
exports.PinPostComment = PinPostComment;
// @Route("/users/by-email")
class GetUsersByEmails {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetUsersByEmailsResponse(); }
    getTypeName() { return 'GetUsersByEmails'; }
    getMethod() { return 'GET'; }
}
exports.GetUsersByEmails = GetUsersByEmails;
// @Route("/user/posts/activity")
class GetUserPostActivity {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetUserPostActivityResponse(); }
    getTypeName() { return 'GetUserPostActivity'; }
    getMethod() { return 'GET'; }
}
exports.GetUserPostActivity = GetUserPostActivity;
// @Route("/user/organizations")
class GetUserOrganizations {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetUserOrganizationsResponse(); }
    getTypeName() { return 'GetUserOrganizations'; }
    getMethod() { return 'GET'; }
}
exports.GetUserOrganizations = GetUserOrganizations;
// @Route("/posts/{Id}/vote", "PUT")
class UserPostVote {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UserPostVoteResponse(); }
    getTypeName() { return 'UserPostVote'; }
    getMethod() { return 'PUT'; }
}
exports.UserPostVote = UserPostVote;
// @Route("/posts/{Id}/favorite", "PUT")
class UserPostFavorite {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UserPostFavoriteResponse(); }
    getTypeName() { return 'UserPostFavorite'; }
    getMethod() { return 'PUT'; }
}
exports.UserPostFavorite = UserPostFavorite;
// @Route("/posts/{Id}/report", "PUT")
class UserPostReport {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UserPostReportResponse(); }
    getTypeName() { return 'UserPostReport'; }
    getMethod() { return 'PUT'; }
}
exports.UserPostReport = UserPostReport;
// @Route("/posts/{PostId}/comments/{Id}", "GET")
class UserPostCommentVote {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UserPostCommentVoteResponse(); }
    getTypeName() { return 'UserPostCommentVote'; }
    getMethod() { return 'GET'; }
}
exports.UserPostCommentVote = UserPostCommentVote;
// @Route("/posts/{PostId}/comments/{Id}/report", "PUT")
class UserPostCommentReport {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UserPostCommentReportResponse(); }
    getTypeName() { return 'UserPostCommentReport'; }
    getMethod() { return 'PUT'; }
}
exports.UserPostCommentReport = UserPostCommentReport;
// @Route("/prerender/{Path*}", "PUT")
class StorePreRender {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'StorePreRender'; }
    getMethod() { return 'PUT'; }
}
exports.StorePreRender = StorePreRender;
// @Route("/prerender/{Path*}", "GET")
class GetPreRender {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return ''; }
    getTypeName() { return 'GetPreRender'; }
    getMethod() { return 'GET'; }
}
exports.GetPreRender = GetPreRender;
// @Route("/my-session")
class SessionInfo {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new SessionInfoResponse(); }
    getTypeName() { return 'SessionInfo'; }
    getMethod() { return 'GET'; }
}
exports.SessionInfo = SessionInfo;
// @Route("/orgs/{OrganizationId}/subscribe", "PUT")
class SubscribeToOrganization {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'SubscribeToOrganization'; }
    getMethod() { return 'PUT'; }
}
exports.SubscribeToOrganization = SubscribeToOrganization;
// @Route("/posts/{PostId}/subscribe", "PUT")
class SubscribeToPost {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'SubscribeToPost'; }
    getMethod() { return 'PUT'; }
}
exports.SubscribeToPost = SubscribeToPost;
// @Route("/orgs/{OrganizationId}/subscribe", "DELETE")
class DeleteOrganizationSubscription {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'DeleteOrganizationSubscription'; }
    getMethod() { return 'DELETE'; }
}
exports.DeleteOrganizationSubscription = DeleteOrganizationSubscription;
// @Route("/posts/{PostId}/subscribe", "DELETE")
class DeletePostSubscription {
    constructor(init) { Object.assign(this, init); }
    createResponse() { }
    getTypeName() { return 'DeletePostSubscription'; }
    getMethod() { return 'DELETE'; }
}
exports.DeletePostSubscription = DeletePostSubscription;
// @Route("/technology/{Slug}/previous-versions", "GET")
class GetTechnologyPreviousVersions {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetTechnologyPreviousVersionsResponse(); }
    getTypeName() { return 'GetTechnologyPreviousVersions'; }
    getMethod() { return 'GET'; }
}
exports.GetTechnologyPreviousVersions = GetTechnologyPreviousVersions;
// @Route("/technology", "GET")
class GetAllTechnologies {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetAllTechnologiesResponse(); }
    getTypeName() { return 'GetAllTechnologies'; }
    getMethod() { return 'GET'; }
}
exports.GetAllTechnologies = GetAllTechnologies;
// @Route("/technology/search")
// @AutoQueryViewer(DefaultSearchField="Tier", DefaultSearchText="Data", DefaultSearchType="=", Description="Explore different Technologies", IconUrl="octicon:database", Title="Find Technologies")
class FindTechnologies extends QueryDb_2 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'FindTechnologies'; }
    getMethod() { return 'GET'; }
}
exports.FindTechnologies = FindTechnologies;
// @Route("/technology/query")
class QueryTechnology extends QueryDb_2 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'QueryTechnology'; }
    getMethod() { return 'GET'; }
}
exports.QueryTechnology = QueryTechnology;
// @Route("/technology/{Slug}")
class GetTechnology {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetTechnologyResponse(); }
    getTypeName() { return 'GetTechnology'; }
    getMethod() { return 'GET'; }
}
exports.GetTechnology = GetTechnology;
// @Route("/technology/{Slug}/favorites")
class GetTechnologyFavoriteDetails {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetTechnologyFavoriteDetailsResponse(); }
    getTypeName() { return 'GetTechnologyFavoriteDetails'; }
    getMethod() { return 'GET'; }
}
exports.GetTechnologyFavoriteDetails = GetTechnologyFavoriteDetails;
// @Route("/technology", "POST")
class CreateTechnology {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new CreateTechnologyResponse(); }
    getTypeName() { return 'CreateTechnology'; }
    getMethod() { return 'POST'; }
}
exports.CreateTechnology = CreateTechnology;
// @Route("/technology/{Id}", "PUT")
class UpdateTechnology {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UpdateTechnologyResponse(); }
    getTypeName() { return 'UpdateTechnology'; }
    getMethod() { return 'PUT'; }
}
exports.UpdateTechnology = UpdateTechnology;
// @Route("/technology/{Id}", "DELETE")
class DeleteTechnology {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new DeleteTechnologyResponse(); }
    getTypeName() { return 'DeleteTechnology'; }
    getMethod() { return 'DELETE'; }
}
exports.DeleteTechnology = DeleteTechnology;
// @Route("/techstacks/{Slug}/previous-versions", "GET")
class GetTechnologyStackPreviousVersions {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetTechnologyStackPreviousVersionsResponse(); }
    getTypeName() { return 'GetTechnologyStackPreviousVersions'; }
    getMethod() { return 'GET'; }
}
exports.GetTechnologyStackPreviousVersions = GetTechnologyStackPreviousVersions;
// @Route("/pagestats/{Type}/{Slug}")
class GetPageStats {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetPageStatsResponse(); }
    getTypeName() { return 'GetPageStats'; }
    getMethod() { return 'GET'; }
}
exports.GetPageStats = GetPageStats;
// @Route("/cache/clear")
class ClearCache {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return ''; }
    getTypeName() { return 'ClearCache'; }
    getMethod() { return 'GET'; }
}
exports.ClearCache = ClearCache;
// @Route("/tasks/hourly")
class HourlyTask {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new HourlyTaskResponse(); }
    getTypeName() { return 'HourlyTask'; }
    getMethod() { return 'GET'; }
}
exports.HourlyTask = HourlyTask;
// @Route("/techstacks/search")
// @AutoQueryViewer(DefaultSearchField="Description", DefaultSearchText="ServiceStack", DefaultSearchType="Contains", Description="Explore different Technology Stacks", IconUrl="material-icons:cloud", Title="Find Technology Stacks")
class FindTechStacks extends QueryDb_2 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'FindTechStacks'; }
    getMethod() { return 'GET'; }
}
exports.FindTechStacks = FindTechStacks;
// @Route("/techstacks/query")
class QueryTechStacks extends QueryDb_2 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'QueryTechStacks'; }
    getMethod() { return 'GET'; }
}
exports.QueryTechStacks = QueryTechStacks;
// @Route("/overview")
class Overview {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new OverviewResponse(); }
    getTypeName() { return 'Overview'; }
    getMethod() { return 'GET'; }
}
exports.Overview = Overview;
// @Route("/app-overview")
class AppOverview {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new AppOverviewResponse(); }
    getTypeName() { return 'AppOverview'; }
    getMethod() { return 'GET'; }
}
exports.AppOverview = AppOverview;
// @Route("/techstacks", "GET")
class GetAllTechnologyStacks {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetAllTechnologyStacksResponse(); }
    getTypeName() { return 'GetAllTechnologyStacks'; }
    getMethod() { return 'GET'; }
}
exports.GetAllTechnologyStacks = GetAllTechnologyStacks;
// @Route("/techstacks/{Slug}", "GET")
class GetTechnologyStack {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetTechnologyStackResponse(); }
    getTypeName() { return 'GetTechnologyStack'; }
    getMethod() { return 'GET'; }
}
exports.GetTechnologyStack = GetTechnologyStack;
// @Route("/techstacks/{Slug}/favorites")
class GetTechnologyStackFavoriteDetails {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetTechnologyStackFavoriteDetailsResponse(); }
    getTypeName() { return 'GetTechnologyStackFavoriteDetails'; }
    getMethod() { return 'GET'; }
}
exports.GetTechnologyStackFavoriteDetails = GetTechnologyStackFavoriteDetails;
// @Route("/config")
class GetConfig {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetConfigResponse(); }
    getTypeName() { return 'GetConfig'; }
    getMethod() { return 'GET'; }
}
exports.GetConfig = GetConfig;
// @Route("/techstacks", "POST")
class CreateTechnologyStack {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new CreateTechnologyStackResponse(); }
    getTypeName() { return 'CreateTechnologyStack'; }
    getMethod() { return 'POST'; }
}
exports.CreateTechnologyStack = CreateTechnologyStack;
// @Route("/techstacks/{Id}", "PUT")
class UpdateTechnologyStack {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new UpdateTechnologyStackResponse(); }
    getTypeName() { return 'UpdateTechnologyStack'; }
    getMethod() { return 'PUT'; }
}
exports.UpdateTechnologyStack = UpdateTechnologyStack;
// @Route("/techstacks/{Id}", "DELETE")
class DeleteTechnologyStack {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new DeleteTechnologyStackResponse(); }
    getTypeName() { return 'DeleteTechnologyStack'; }
    getMethod() { return 'DELETE'; }
}
exports.DeleteTechnologyStack = DeleteTechnologyStack;
// @Route("/favorites/techtacks", "GET")
class GetFavoriteTechStack {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetFavoriteTechStackResponse(); }
    getTypeName() { return 'GetFavoriteTechStack'; }
    getMethod() { return 'GET'; }
}
exports.GetFavoriteTechStack = GetFavoriteTechStack;
// @Route("/favorites/techtacks/{TechnologyStackId}", "PUT")
class AddFavoriteTechStack {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new FavoriteTechStackResponse(); }
    getTypeName() { return 'AddFavoriteTechStack'; }
    getMethod() { return 'PUT'; }
}
exports.AddFavoriteTechStack = AddFavoriteTechStack;
// @Route("/favorites/techtacks/{TechnologyStackId}", "DELETE")
class RemoveFavoriteTechStack {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new FavoriteTechStackResponse(); }
    getTypeName() { return 'RemoveFavoriteTechStack'; }
    getMethod() { return 'DELETE'; }
}
exports.RemoveFavoriteTechStack = RemoveFavoriteTechStack;
// @Route("/favorites/technology", "GET")
class GetFavoriteTechnologies {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetFavoriteTechnologiesResponse(); }
    getTypeName() { return 'GetFavoriteTechnologies'; }
    getMethod() { return 'GET'; }
}
exports.GetFavoriteTechnologies = GetFavoriteTechnologies;
// @Route("/favorites/technology/{TechnologyId}", "PUT")
class AddFavoriteTechnology {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new FavoriteTechnologyResponse(); }
    getTypeName() { return 'AddFavoriteTechnology'; }
    getMethod() { return 'PUT'; }
}
exports.AddFavoriteTechnology = AddFavoriteTechnology;
// @Route("/favorites/technology/{TechnologyId}", "DELETE")
class RemoveFavoriteTechnology {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new FavoriteTechnologyResponse(); }
    getTypeName() { return 'RemoveFavoriteTechnology'; }
    getMethod() { return 'DELETE'; }
}
exports.RemoveFavoriteTechnology = RemoveFavoriteTechnology;
// @Route("/my-feed")
class GetUserFeed {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetUserFeedResponse(); }
    getTypeName() { return 'GetUserFeed'; }
    getMethod() { return 'GET'; }
}
exports.GetUserFeed = GetUserFeed;
// @Route("/users/karma", "GET")
class GetUsersKarma {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetUsersKarmaResponse(); }
    getTypeName() { return 'GetUsersKarma'; }
    getMethod() { return 'GET'; }
}
exports.GetUsersKarma = GetUsersKarma;
// @Route("/userinfo/{UserName}")
class GetUserInfo {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new GetUserInfoResponse(); }
    getTypeName() { return 'GetUserInfo'; }
    getMethod() { return 'GET'; }
}
exports.GetUserInfo = GetUserInfo;
// @Route("/users/{UserName}/avatar", "GET")
class UserAvatar {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'GET'; }
}
exports.UserAvatar = UserAvatar;
// @Route("/mq/start")
class MqStart {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return ''; }
    getTypeName() { return 'MqStart'; }
    getMethod() { return 'POST'; }
}
exports.MqStart = MqStart;
// @Route("/mq/stop")
class MqStop {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return ''; }
    getTypeName() { return 'MqStop'; }
    getMethod() { return 'POST'; }
}
exports.MqStop = MqStop;
// @Route("/mq/stats")
class MqStats {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return ''; }
    getTypeName() { return 'MqStats'; }
    getMethod() { return 'POST'; }
}
exports.MqStats = MqStats;
// @Route("/mq/status")
class MqStatus {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return ''; }
    getTypeName() { return 'MqStatus'; }
    getMethod() { return 'POST'; }
}
exports.MqStatus = MqStatus;
// @Route("/sync/discourse/{Site}")
class SyncDiscourseSite {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new SyncDiscourseSiteResponse(); }
    getTypeName() { return 'SyncDiscourseSite'; }
    getMethod() { return 'POST'; }
}
exports.SyncDiscourseSite = SyncDiscourseSite;
// @Route("/admin/technology/{TechnologyId}/logo")
class LogoUrlApproval {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new LogoUrlApprovalResponse(); }
    getTypeName() { return 'LogoUrlApproval'; }
    getMethod() { return 'PUT'; }
}
exports.LogoUrlApproval = LogoUrlApproval;
/**
* Limit updates to TechStack to Owner or Admin users
*/
// @Route("/admin/techstacks/{TechnologyStackId}/lock")
class LockTechStack {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new LockStackResponse(); }
    getTypeName() { return 'LockTechStack'; }
    getMethod() { return 'PUT'; }
}
exports.LockTechStack = LockTechStack;
/**
* Limit updates to Technology to Owner or Admin users
*/
// @Route("/admin/technology/{TechnologyId}/lock")
// @Api(Description="Limit updates to Technology to Owner or Admin users")
class LockTech {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new LockStackResponse(); }
    getTypeName() { return 'LockTech'; }
    getMethod() { return 'PUT'; }
}
exports.LockTech = LockTech;
class DummyTypes {
    constructor(init) { Object.assign(this, init); }
    getMethod() { return 'POST'; }
}
exports.DummyTypes = DummyTypes;
// @Route("/email/post/{PostId}")
class EmailTest {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new EmailTestRespoonse(); }
    getTypeName() { return 'EmailTest'; }
    getMethod() { return 'POST'; }
}
exports.EmailTest = EmailTest;
class ImportUser {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new ImportUserResponse(); }
    getTypeName() { return 'ImportUser'; }
    getMethod() { return 'POST'; }
}
exports.ImportUser = ImportUser;
// @Route("/import/uservoice/suggestion")
class ImportUserVoiceSuggestion {
    constructor(init) { Object.assign(this, init); }
    createResponse() { return new ImportUserVoiceSuggestionResponse(); }
    getTypeName() { return 'ImportUserVoiceSuggestion'; }
    getMethod() { return 'POST'; }
}
exports.ImportUserVoiceSuggestion = ImportUserVoiceSuggestion;
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
// @Route("/posts/comment", "GET")
class QueryPostComments extends QueryDb_1 {
    constructor(init) { super(init); Object.assign(this, init); }
    createResponse() { return new QueryResponse(); }
    getTypeName() { return 'QueryPostComments'; }
    getMethod() { return 'GET'; }
}
exports.QueryPostComments = QueryPostComments;
