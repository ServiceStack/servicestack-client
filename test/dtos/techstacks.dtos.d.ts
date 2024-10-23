export interface IReturn<T> {
    createResponse(): T;
}
export interface IReturnVoid {
    createResponse(): void;
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
export declare class QueryDb_1<T> extends QueryBase {
    constructor(init?: Partial<QueryDb_1<T>>);
}
export declare enum PostType {
    Announcement = "Announcement",
    Post = "Post",
    Showcase = "Showcase",
    Question = "Question",
    Request = "Request"
}
export declare class Post {
    id: number;
    organizationId: number;
    userId: number;
    type: PostType;
    categoryId: number;
    title: string;
    slug: string;
    url: string;
    imageUrl: string;
    content: string;
    contentHtml: string;
    pinCommentId?: number;
    technologyIds: number[];
    fromDate?: string;
    toDate?: string;
    location: string;
    metaType: string;
    meta: string;
    approved: boolean;
    upVotes: number;
    downVotes: number;
    points: number;
    views: number;
    favorites: number;
    subscribers: number;
    replyCount: number;
    commentsCount: number;
    wordCount: number;
    reportCount: number;
    linksCount: number;
    linkedToCount: number;
    score: number;
    rank: number;
    labels: string[];
    refUserIds: number[];
    refLinks: string[];
    muteUserIds: number[];
    lastCommentDate?: string;
    lastCommentId?: number;
    lastCommentUserId?: number;
    deleted?: string;
    deletedBy: string;
    locked?: string;
    lockedBy: string;
    hidden?: string;
    hiddenBy: string;
    status: string;
    statusDate?: string;
    statusBy: string;
    archived: boolean;
    bumped?: string;
    created: string;
    createdBy: string;
    modified: string;
    modifiedBy: string;
    refId?: number;
    refSource: string;
    refUrn: string;
    constructor(init?: Partial<Post>);
}
export declare enum ReportAction {
    Dismiss = "Dismiss",
    Delete = "Delete"
}
export declare enum FlagType {
    Violation = "Violation",
    Spam = "Spam",
    Abusive = "Abusive",
    Confidential = "Confidential",
    OffTopic = "OffTopic",
    Other = "Other"
}
export declare enum Frequency {
    Daily = 1,
    Weekly = 7,
    Monthly = 30,
    Quarterly = 90
}
export declare class QueryDb_2<From, Into> extends QueryBase {
    constructor(init?: Partial<QueryDb_2<From, Into>>);
}
export declare enum TechnologyTier {
    ProgrammingLanguage = "ProgrammingLanguage",
    Client = "Client",
    Http = "Http",
    Server = "Server",
    Data = "Data",
    SoftwareInfrastructure = "SoftwareInfrastructure",
    OperatingSystem = "OperatingSystem",
    HardwareInfrastructure = "HardwareInfrastructure",
    ThirdPartyServices = "ThirdPartyServices"
}
export declare class TechnologyBase {
    id: number;
    name: string;
    vendorName: string;
    vendorUrl: string;
    productUrl: string;
    logoUrl: string;
    description: string;
    created: string;
    createdBy: string;
    lastModified: string;
    lastModifiedBy: string;
    ownerId: string;
    slug: string;
    logoApproved: boolean;
    isLocked: boolean;
    tier: TechnologyTier;
    lastStatusUpdate?: string;
    organizationId?: number;
    commentsPostId?: number;
    viewCount: number;
    favCount: number;
    constructor(init?: Partial<TechnologyBase>);
}
export declare class Technology extends TechnologyBase {
    constructor(init?: Partial<Technology>);
}
export declare class TechnologyView {
    id?: number;
    name: string;
    vendorName: string;
    vendorUrl: string;
    productUrl: string;
    logoUrl: string;
    description: string;
    created?: string;
    createdBy: string;
    lastModified?: string;
    lastModifiedBy: string;
    ownerId: string;
    slug: string;
    logoApproved?: boolean;
    isLocked?: boolean;
    tier?: TechnologyTier;
    lastStatusUpdate?: string;
    organizationId?: number;
    commentsPostId?: number;
    viewCount?: number;
    favCount?: number;
    constructor(init?: Partial<TechnologyView>);
}
export interface IRegisterStats {
}
export declare class TechnologyStackBase {
    id: number;
    name: string;
    vendorName: string;
    description: string;
    appUrl: string;
    screenshotUrl: string;
    created: string;
    createdBy: string;
    lastModified: string;
    lastModifiedBy: string;
    isLocked: boolean;
    ownerId: string;
    slug: string;
    details: string;
    detailsHtml: string;
    lastStatusUpdate?: string;
    organizationId?: number;
    commentsPostId?: number;
    viewCount: number;
    favCount: number;
    constructor(init?: Partial<TechnologyStackBase>);
}
export declare class TechnologyStack extends TechnologyStackBase {
    constructor(init?: Partial<TechnologyStack>);
}
export declare class TechnologyStackView {
    id?: number;
    name: string;
    vendorName: string;
    description: string;
    appUrl: string;
    screenshotUrl: string;
    created?: string;
    createdBy: string;
    lastModified?: string;
    lastModifiedBy: string;
    isLocked?: boolean;
    ownerId: string;
    slug: string;
    details: string;
    detailsHtml: string;
    lastStatusUpdate?: string;
    organizationId?: number;
    commentsPostId?: number;
    viewCount?: number;
    favCount?: number;
    constructor(init?: Partial<TechnologyStackView>);
}
export declare class UserVoiceUser {
    id: number;
    name: string;
    email: string;
    avatarUrl: string;
    createdAt: string;
    updatedAt: string;
    constructor(init?: Partial<UserVoiceUser>);
}
export declare class UserVoiceComment {
    text: string;
    formattedText: string;
    createdAt: string;
    creator: UserVoiceUser;
    constructor(init?: Partial<UserVoiceComment>);
}
export declare class PostComment {
    id: number;
    postId: number;
    userId: number;
    replyId?: number;
    content: string;
    contentHtml: string;
    score: number;
    rank: number;
    upVotes: number;
    downVotes: number;
    favorites: number;
    wordCount: number;
    reportCount: number;
    deleted?: string;
    hidden?: string;
    modified: string;
    created: string;
    createdBy: string;
    refId?: number;
    refSource: string;
    refUrn: string;
    constructor(init?: Partial<PostComment>);
}
export declare class Organization {
    id: number;
    name: string;
    slug: string;
    description: string;
    descriptionHtml: string;
    color: string;
    textColor: string;
    linkColor: string;
    backgroundColor: string;
    backgroundUrl: string;
    logoUrl: string;
    heroUrl: string;
    lang: string;
    defaultPostType: string;
    defaultSubscriptionPostTypes: string[];
    postTypes: string[];
    moderatorPostTypes: string[];
    deletePostsWithReportCount: number;
    disableInvites?: boolean;
    upVotes: number;
    downVotes: number;
    views: number;
    favorites: number;
    subscribers: number;
    commentsCount: number;
    postsCount: number;
    score: number;
    rank: number;
    refId?: number;
    refSource: string;
    hidden?: string;
    hiddenBy: string;
    locked?: string;
    lockedBy: string;
    deleted?: string;
    deletedBy: string;
    created: string;
    createdBy: string;
    modified: string;
    modifiedBy: string;
    constructor(init?: Partial<Organization>);
}
export declare class OrganizationLabel {
    slug: string;
    organizationId: number;
    description: string;
    color: string;
    constructor(init?: Partial<OrganizationLabel>);
}
export declare class Category {
    id: number;
    organizationId: number;
    name: string;
    slug: string;
    description: string;
    color: string;
    technologyIds: number[];
    commentsCount: number;
    postsCount: number;
    score: number;
    rank: number;
    constructor(init?: Partial<Category>);
}
export declare class OrganizationMember {
    id: number;
    organizationId: number;
    userId: number;
    userName: string;
    isOwner: boolean;
    isModerator: boolean;
    denyAll: boolean;
    denyPosts: boolean;
    denyComments: boolean;
    notes: string;
    constructor(init?: Partial<OrganizationMember>);
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
export declare class OrganizationMemberInvite {
    id: number;
    organizationId: number;
    userId: number;
    userName: string;
    dismissed?: string;
    constructor(init?: Partial<OrganizationMemberInvite>);
}
export declare class PostReportInfo {
    id: number;
    organizationId: number;
    postId: number;
    userId: number;
    userName: string;
    flagType: FlagType;
    reportNotes: string;
    created: string;
    acknowledged?: string;
    acknowledgedBy: string;
    dismissed?: string;
    dismissedBy: string;
    title: string;
    reportCount: number;
    createdBy: string;
    constructor(init?: Partial<PostReportInfo>);
}
export declare class PostCommentReportInfo {
    id: number;
    organizationId: number;
    postId: number;
    postCommentId: number;
    userId: number;
    userName: string;
    flagType: FlagType;
    reportNotes: string;
    created: string;
    acknowledged?: string;
    acknowledgedBy: string;
    dismissed?: string;
    dismissedBy: string;
    contentHtml: string;
    reportCount: number;
    createdBy: string;
    constructor(init?: Partial<PostCommentReportInfo>);
}
export declare class UserRef {
    id: number;
    userName: string;
    email: string;
    refId?: number;
    refSource: string;
    refUrn: string;
    constructor(init?: Partial<UserRef>);
}
export declare class OrganizationSubscription {
    id: number;
    organizationId: number;
    userId: number;
    userName: string;
    postTypes: string[];
    frequencyDays?: number;
    lastSyncedId?: number;
    lastSynced?: string;
    created: string;
    constructor(init?: Partial<OrganizationSubscription>);
}
export declare class UserActivity {
    id: number;
    userName: string;
    karma: number;
    technologyCount: number;
    techStacksCount: number;
    postsCount: number;
    postUpVotes: number;
    postDownVotes: number;
    commentUpVotes: number;
    commentDownVotes: number;
    postCommentsCount: number;
    pinnedCommentCount: number;
    postReportCount: number;
    postCommentReportCount: number;
    created: string;
    modified: string;
    constructor(init?: Partial<UserActivity>);
}
export declare class TechnologyHistory extends TechnologyBase {
    technologyId: number;
    operation: string;
    constructor(init?: Partial<TechnologyHistory>);
}
export declare class TechnologyStackHistory extends TechnologyStackBase {
    technologyStackId: number;
    operation: string;
    technologyIds: number[];
    constructor(init?: Partial<TechnologyStackHistory>);
}
export declare class UserInfo {
    userName: string;
    avatarUrl: string;
    stacksCount: number;
    constructor(init?: Partial<UserInfo>);
}
export declare class TechnologyInfo {
    tier: TechnologyTier;
    slug: string;
    name: string;
    logoUrl: string;
    stacksCount: number;
    constructor(init?: Partial<TechnologyInfo>);
}
export declare class TechnologyInStack extends TechnologyBase {
    technologyId: number;
    technologyStackId: number;
    justification: string;
    constructor(init?: Partial<TechnologyInStack>);
}
export declare class TechStackDetails extends TechnologyStackBase {
    technologyChoices: TechnologyInStack[];
    constructor(init?: Partial<TechStackDetails>);
}
export declare class LabelInfo {
    slug: string;
    color: string;
    constructor(init?: Partial<LabelInfo>);
}
export declare class CategoryInfo {
    id: number;
    name: string;
    slug: string;
    constructor(init?: Partial<CategoryInfo>);
}
export declare class OrganizationInfo {
    id: number;
    name: string;
    slug: string;
    refId?: number;
    refSource: string;
    upVotes?: number;
    downVotes?: number;
    membersCount: number;
    rank: number;
    disableInvites?: boolean;
    lang: string;
    postTypes: string[];
    moderatorPostTypes: string[];
    locked?: string;
    labels: LabelInfo[];
    categories: CategoryInfo[];
    constructor(init?: Partial<OrganizationInfo>);
}
export declare class Option {
    name: string;
    title: string;
    value?: TechnologyTier;
    constructor(init?: Partial<Option>);
}
export declare class GetOrganizationResponse {
    cache: number;
    id: number;
    slug: string;
    organization: Organization;
    labels: OrganizationLabel[];
    categories: Category[];
    owners: OrganizationMember[];
    moderators: OrganizationMember[];
    membersCount: number;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetOrganizationResponse>);
}
export declare class GetOrganizationMembersResponse {
    organizationId: number;
    results: OrganizationMember[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetOrganizationMembersResponse>);
}
export declare class GetOrganizationAdminResponse {
    labels: OrganizationLabel[];
    members: OrganizationMember[];
    memberInvites: OrganizationMemberInvite[];
    reportedPosts: PostReportInfo[];
    reportedPostComments: PostCommentReportInfo[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetOrganizationAdminResponse>);
}
export declare class CreateOrganizationForTechnologyResponse {
    organizationId: number;
    organizationSlug: string;
    commentsPostId: number;
    commentsPostSlug: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<CreateOrganizationForTechnologyResponse>);
}
export declare class CreateOrganizationResponse {
    id: number;
    slug: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<CreateOrganizationResponse>);
}
export declare class UpdateOrganizationResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UpdateOrganizationResponse>);
}
export declare class OrganizationLabelResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<OrganizationLabelResponse>);
}
export declare class AddOrganizationCategoryResponse {
    id: number;
    slug: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<AddOrganizationCategoryResponse>);
}
export declare class UpdateOrganizationCategoryResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UpdateOrganizationCategoryResponse>);
}
export declare class AddOrganizationMemberResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<AddOrganizationMemberResponse>);
}
export declare class UpdateOrganizationMemberResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UpdateOrganizationMemberResponse>);
}
export declare class SetOrganizationMembersResponse {
    userIdsAdded: number[];
    userIdsRemoved: number[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<SetOrganizationMembersResponse>);
}
export declare class GetOrganizationMemberInvitesResponse {
    results: OrganizationMemberInvite[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetOrganizationMemberInvitesResponse>);
}
export declare class RequestOrganizationMemberInviteResponse {
    organizationId: number;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<RequestOrganizationMemberInviteResponse>);
}
export declare class UpdateOrganizationMemberInviteResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UpdateOrganizationMemberInviteResponse>);
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
export declare class GetPostResponse {
    responseStatus: ResponseStatus;
    cache: number;
    post: Post;
    comments: PostComment[];
    constructor(init?: Partial<GetPostResponse>);
}
export declare class CreatePostResponse {
    id: number;
    slug: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<CreatePostResponse>);
}
export declare class UpdatePostResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UpdatePostResponse>);
}
export declare class DeletePostResponse {
    id: number;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<DeletePostResponse>);
}
export declare class CreatePostCommentResponse {
    id: number;
    postId: number;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<CreatePostCommentResponse>);
}
export declare class UpdatePostCommentResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UpdatePostCommentResponse>);
}
export declare class DeletePostCommentResponse {
    id: number;
    postId: number;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<DeletePostCommentResponse>);
}
export declare class GetUserPostCommentVotesResponse {
    postId: number;
    upVotedCommentIds: number[];
    downVotedCommentIds: number[];
    constructor(init?: Partial<GetUserPostCommentVotesResponse>);
}
export declare class PinPostCommentResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<PinPostCommentResponse>);
}
export declare class GetUsersByEmailsResponse {
    results: UserRef[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetUsersByEmailsResponse>);
}
export declare class GetUserPostActivityResponse {
    upVotedPostIds: number[];
    downVotedPostIds: number[];
    favoritePostIds: number[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetUserPostActivityResponse>);
}
export declare class GetUserOrganizationsResponse {
    members: OrganizationMember[];
    memberInvites: OrganizationMemberInvite[];
    subscriptions: OrganizationSubscription[];
    constructor(init?: Partial<GetUserOrganizationsResponse>);
}
export declare class UserPostVoteResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UserPostVoteResponse>);
}
export declare class UserPostFavoriteResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UserPostFavoriteResponse>);
}
export declare class UserPostReportResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UserPostReportResponse>);
}
export declare class UserPostCommentVoteResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UserPostCommentVoteResponse>);
}
export declare class UserPostCommentReportResponse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UserPostCommentReportResponse>);
}
export declare class SessionInfoResponse {
    created: string;
    id: string;
    referrerUrl: string;
    userAuthId: string;
    userAuthName: string;
    userName: string;
    displayName: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    lastModified: string;
    roles: string[];
    permissions: string[];
    isAuthenticated: boolean;
    authProvider: string;
    profileUrl: string;
    githubProfileUrl: string;
    twitterProfileUrl: string;
    accessToken: string;
    avatarUrl: string;
    techStacks: TechnologyStack[];
    favoriteTechStacks: TechnologyStack[];
    favoriteTechnologies: Technology[];
    userActivity: UserActivity;
    members: OrganizationMember[];
    memberInvites: OrganizationMemberInvite[];
    subscriptions: OrganizationSubscription[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<SessionInfoResponse>);
}
export declare class GetTechnologyPreviousVersionsResponse {
    results: TechnologyHistory[];
    constructor(init?: Partial<GetTechnologyPreviousVersionsResponse>);
}
export declare class GetAllTechnologiesResponse {
    results: Technology[];
    total: number;
    constructor(init?: Partial<GetAllTechnologiesResponse>);
}
export declare class GetTechnologyResponse {
    created: string;
    technology: Technology;
    technologyStacks: TechnologyStack[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetTechnologyResponse>);
}
export declare class GetTechnologyFavoriteDetailsResponse {
    users: string[];
    favoriteCount: number;
    constructor(init?: Partial<GetTechnologyFavoriteDetailsResponse>);
}
export declare class CreateTechnologyResponse {
    result: Technology;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<CreateTechnologyResponse>);
}
export declare class UpdateTechnologyResponse {
    result: Technology;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UpdateTechnologyResponse>);
}
export declare class DeleteTechnologyResponse {
    result: Technology;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<DeleteTechnologyResponse>);
}
export declare class GetTechnologyStackPreviousVersionsResponse {
    results: TechnologyStackHistory[];
    constructor(init?: Partial<GetTechnologyStackPreviousVersionsResponse>);
}
export declare class GetPageStatsResponse {
    type: string;
    slug: string;
    viewCount: number;
    favCount: number;
    constructor(init?: Partial<GetPageStatsResponse>);
}
export declare class HourlyTaskResponse {
    meta: {
        [index: string]: string;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<HourlyTaskResponse>);
}
export declare class OverviewResponse {
    created: string;
    topUsers: UserInfo[];
    topTechnologies: TechnologyInfo[];
    latestTechStacks: TechStackDetails[];
    popularTechStacks: TechnologyStack[];
    allOrganizations: OrganizationInfo[];
    topTechnologiesByTier: {
        [index: string]: TechnologyInfo[];
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<OverviewResponse>);
}
export declare class AppOverviewResponse {
    created: string;
    allTiers: Option[];
    topTechnologies: TechnologyInfo[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<AppOverviewResponse>);
}
export declare class GetAllTechnologyStacksResponse {
    results: TechnologyStack[];
    total: number;
    constructor(init?: Partial<GetAllTechnologyStacksResponse>);
}
export declare class GetTechnologyStackResponse {
    created: string;
    result: TechStackDetails;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetTechnologyStackResponse>);
}
export declare class GetTechnologyStackFavoriteDetailsResponse {
    users: string[];
    favoriteCount: number;
    constructor(init?: Partial<GetTechnologyStackFavoriteDetailsResponse>);
}
export declare class GetConfigResponse {
    allTiers: Option[];
    allPostTypes: Option[];
    allFlagTypes: Option[];
    constructor(init?: Partial<GetConfigResponse>);
}
export declare class CreateTechnologyStackResponse {
    result: TechStackDetails;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<CreateTechnologyStackResponse>);
}
export declare class UpdateTechnologyStackResponse {
    result: TechStackDetails;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UpdateTechnologyStackResponse>);
}
export declare class DeleteTechnologyStackResponse {
    result: TechStackDetails;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<DeleteTechnologyStackResponse>);
}
export declare class GetFavoriteTechStackResponse {
    results: TechnologyStack[];
    constructor(init?: Partial<GetFavoriteTechStackResponse>);
}
export declare class FavoriteTechStackResponse {
    result: TechnologyStack;
    constructor(init?: Partial<FavoriteTechStackResponse>);
}
export declare class GetFavoriteTechnologiesResponse {
    results: Technology[];
    constructor(init?: Partial<GetFavoriteTechnologiesResponse>);
}
export declare class FavoriteTechnologyResponse {
    result: Technology;
    constructor(init?: Partial<FavoriteTechnologyResponse>);
}
export declare class GetUserFeedResponse {
    results: TechStackDetails[];
    constructor(init?: Partial<GetUserFeedResponse>);
}
export declare class GetUsersKarmaResponse {
    results: {
        [index: number]: number;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetUsersKarmaResponse>);
}
export declare class GetUserInfoResponse {
    id: number;
    userName: string;
    created: string;
    avatarUrl: string;
    techStacks: TechnologyStack[];
    favoriteTechStacks: TechnologyStack[];
    favoriteTechnologies: Technology[];
    userActivity: UserActivity;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetUserInfoResponse>);
}
export declare class SyncDiscourseSiteResponse {
    timeTaken: string;
    userLogs: string[];
    postsLogs: string[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<SyncDiscourseSiteResponse>);
}
export declare class LogoUrlApprovalResponse {
    result: Technology;
    constructor(init?: Partial<LogoUrlApprovalResponse>);
}
export declare class LockStackResponse {
    constructor(init?: Partial<LockStackResponse>);
}
export declare class EmailTestRespoonse {
    responseStatus: ResponseStatus;
    constructor(init?: Partial<EmailTestRespoonse>);
}
export declare class ImportUserResponse {
    id: number;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<ImportUserResponse>);
}
export declare class ImportUserVoiceSuggestionResponse {
    postId: number;
    postSlug: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<ImportUserVoiceSuggestionResponse>);
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
export declare class Ping {
    constructor(init?: Partial<Ping>);
    getMethod(): string;
}
export declare class GetOrganization implements IReturn<GetOrganizationResponse>, IGet {
    id?: number;
    constructor(init?: Partial<GetOrganization>);
    createResponse(): GetOrganizationResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetOrganizationBySlug implements IReturn<GetOrganizationResponse>, IGet {
    slug: string;
    constructor(init?: Partial<GetOrganizationBySlug>);
    createResponse(): GetOrganizationResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetOrganizationMembers implements IReturn<GetOrganizationMembersResponse>, IGet {
    id: number;
    constructor(init?: Partial<GetOrganizationMembers>);
    createResponse(): GetOrganizationMembersResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetOrganizationAdmin implements IReturn<GetOrganizationAdminResponse>, IGet {
    id: number;
    constructor(init?: Partial<GetOrganizationAdmin>);
    createResponse(): GetOrganizationAdminResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class CreateOrganizationForTechnology implements IReturn<CreateOrganizationForTechnologyResponse>, IPost {
    technologyId?: number;
    techStackId?: number;
    constructor(init?: Partial<CreateOrganizationForTechnology>);
    createResponse(): CreateOrganizationForTechnologyResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class CreateOrganization implements IReturn<CreateOrganizationResponse>, IPost {
    name: string;
    slug: string;
    description: string;
    refId?: number;
    refSource: string;
    refUrn: string;
    constructor(init?: Partial<CreateOrganization>);
    createResponse(): CreateOrganizationResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UpdateOrganization implements IReturn<UpdateOrganizationResponse>, IPut {
    id: number;
    slug: string;
    name: string;
    description: string;
    color: string;
    textColor: string;
    linkColor: string;
    backgroundColor: string;
    backgroundUrl: string;
    logoUrl: string;
    heroUrl: string;
    lang: string;
    deletePostsWithReportCount: number;
    disableInvites?: boolean;
    defaultPostType: string;
    defaultSubscriptionPostTypes: string[];
    postTypes: string[];
    moderatorPostTypes: string[];
    technologyIds: number[];
    constructor(init?: Partial<UpdateOrganization>);
    createResponse(): UpdateOrganizationResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class DeleteOrganization implements IReturnVoid, IDelete {
    id: number;
    constructor(init?: Partial<DeleteOrganization>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class LockOrganization implements IReturnVoid, IPut {
    id: number;
    lock: boolean;
    reason: string;
    constructor(init?: Partial<LockOrganization>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class AddOrganizationLabel implements IReturn<OrganizationLabelResponse>, IPost {
    organizationId: number;
    slug: string;
    description: string;
    color: string;
    constructor(init?: Partial<AddOrganizationLabel>);
    createResponse(): OrganizationLabelResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UpdateOrganizationLabel implements IReturn<OrganizationLabelResponse>, IPut {
    organizationId: number;
    slug: string;
    description: string;
    color: string;
    constructor(init?: Partial<UpdateOrganizationLabel>);
    createResponse(): OrganizationLabelResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class RemoveOrganizationLabel implements IReturnVoid, IDelete {
    organizationId: number;
    slug: string;
    constructor(init?: Partial<RemoveOrganizationLabel>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class AddOrganizationCategory implements IReturn<AddOrganizationCategoryResponse>, IPost {
    organizationId: number;
    slug: string;
    name: string;
    description: string;
    technologyIds: number[];
    constructor(init?: Partial<AddOrganizationCategory>);
    createResponse(): AddOrganizationCategoryResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UpdateOrganizationCategory implements IReturn<UpdateOrganizationCategoryResponse>, IPut {
    organizationId: number;
    id: number;
    name: string;
    slug: string;
    description: string;
    technologyIds: number[];
    constructor(init?: Partial<UpdateOrganizationCategory>);
    createResponse(): UpdateOrganizationCategoryResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class DeleteOrganizationCategory implements IReturnVoid, IDelete {
    organizationId: number;
    id: number;
    constructor(init?: Partial<DeleteOrganizationCategory>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class AddOrganizationMember implements IReturn<AddOrganizationMemberResponse>, IPost {
    organizationId: number;
    userName: string;
    isOwner: boolean;
    isModerator: boolean;
    denyPosts: boolean;
    denyComments: boolean;
    denyAll: boolean;
    notes: string;
    constructor(init?: Partial<AddOrganizationMember>);
    createResponse(): AddOrganizationMemberResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UpdateOrganizationMember implements IReturn<UpdateOrganizationMemberResponse>, IPut {
    organizationId: number;
    userId: number;
    isOwner: boolean;
    isModerator: boolean;
    denyPosts: boolean;
    denyComments: boolean;
    denyAll: boolean;
    notes: string;
    constructor(init?: Partial<UpdateOrganizationMember>);
    createResponse(): UpdateOrganizationMemberResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class RemoveOrganizationMember implements IReturnVoid, IDelete {
    organizationId: number;
    userId: number;
    constructor(init?: Partial<RemoveOrganizationMember>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class SetOrganizationMembers implements IReturn<SetOrganizationMembersResponse>, IPost {
    organizationId: number;
    githubUserNames: string[];
    twitterUserNames: string[];
    emails: string[];
    removeUnspecifiedMembers: boolean;
    isOwner: boolean;
    isModerator: boolean;
    denyPosts: boolean;
    denyComments: boolean;
    denyAll: boolean;
    constructor(init?: Partial<SetOrganizationMembers>);
    createResponse(): SetOrganizationMembersResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetOrganizationMemberInvites implements IReturn<GetOrganizationMemberInvitesResponse>, IGet {
    organizationId: number;
    constructor(init?: Partial<GetOrganizationMemberInvites>);
    createResponse(): GetOrganizationMemberInvitesResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class RequestOrganizationMemberInvite implements IReturn<RequestOrganizationMemberInviteResponse>, IPost {
    organizationId: number;
    constructor(init?: Partial<RequestOrganizationMemberInvite>);
    createResponse(): RequestOrganizationMemberInviteResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UpdateOrganizationMemberInvite implements IReturn<UpdateOrganizationMemberInviteResponse>, IPut {
    organizationId: number;
    userName: string;
    approve: boolean;
    dismiss: boolean;
    constructor(init?: Partial<UpdateOrganizationMemberInvite>);
    createResponse(): UpdateOrganizationMemberInviteResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class QueryPosts extends QueryDb_1<Post> implements IReturn<QueryResponse<Post>>, IGet {
    ids: number[];
    organizationId?: number;
    organizationIds: number[];
    types: string[];
    anyTechnologyIds: number[];
    is: string[];
    constructor(init?: Partial<QueryPosts>);
    createResponse(): QueryResponse<Post>;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetPost implements IReturn<GetPostResponse>, IGet {
    id: number;
    include: string;
    constructor(init?: Partial<GetPost>);
    createResponse(): GetPostResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class CreatePost implements IReturn<CreatePostResponse>, IPost {
    organizationId: number;
    type: PostType;
    categoryId: number;
    title: string;
    url: string;
    imageUrl: string;
    content: string;
    lock?: boolean;
    technologyIds: number[];
    labels: string[];
    fromDate?: string;
    toDate?: string;
    metaType: string;
    meta: string;
    refId?: number;
    refSource: string;
    refUrn: string;
    constructor(init?: Partial<CreatePost>);
    createResponse(): CreatePostResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UpdatePost implements IReturn<UpdatePostResponse>, IPut {
    id: number;
    organizationId: number;
    type: PostType;
    categoryId: number;
    title: string;
    url: string;
    imageUrl: string;
    content: string;
    lock?: boolean;
    technologyIds: number[];
    labels: string[];
    fromDate?: string;
    toDate?: string;
    metaType: string;
    meta: string;
    constructor(init?: Partial<UpdatePost>);
    createResponse(): UpdatePostResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class DeletePost implements IReturn<DeletePostResponse>, IDelete {
    id: number;
    constructor(init?: Partial<DeletePost>);
    createResponse(): DeletePostResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class LockPost implements IReturnVoid, IPut {
    id: number;
    lock: boolean;
    reason: string;
    constructor(init?: Partial<LockPost>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class HidePost implements IReturnVoid, IPut {
    id: number;
    hide: boolean;
    reason: string;
    constructor(init?: Partial<HidePost>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class ChangeStatusPost implements IReturnVoid, IPut {
    id: number;
    status: string;
    reason: string;
    constructor(init?: Partial<ChangeStatusPost>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class ActionPostReport implements IReturnVoid, IPost {
    postId: number;
    id: number;
    reportAction: ReportAction;
    constructor(init?: Partial<ActionPostReport>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class CreatePostComment implements IReturn<CreatePostCommentResponse>, IPost {
    postId: number;
    replyId?: number;
    content: string;
    constructor(init?: Partial<CreatePostComment>);
    createResponse(): CreatePostCommentResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UpdatePostComment implements IReturn<UpdatePostCommentResponse>, IPut {
    id: number;
    postId: number;
    content: string;
    constructor(init?: Partial<UpdatePostComment>);
    createResponse(): UpdatePostCommentResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class DeletePostComment implements IReturn<DeletePostCommentResponse>, IDelete {
    id: number;
    postId: number;
    constructor(init?: Partial<DeletePostComment>);
    createResponse(): DeletePostCommentResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class ActionPostCommentReport implements IReturnVoid, IPost {
    id: number;
    postCommentId: number;
    postId: number;
    reportAction: ReportAction;
    constructor(init?: Partial<ActionPostCommentReport>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetUserPostCommentVotes implements IReturn<GetUserPostCommentVotesResponse>, IGet {
    postId: number;
    constructor(init?: Partial<GetUserPostCommentVotes>);
    createResponse(): GetUserPostCommentVotesResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class PinPostComment implements IReturn<PinPostCommentResponse>, IPut {
    id: number;
    postId: number;
    pin: boolean;
    constructor(init?: Partial<PinPostComment>);
    createResponse(): PinPostCommentResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetUsersByEmails implements IReturn<GetUsersByEmailsResponse>, IGet {
    emails: string[];
    constructor(init?: Partial<GetUsersByEmails>);
    createResponse(): GetUsersByEmailsResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetUserPostActivity implements IReturn<GetUserPostActivityResponse>, IGet {
    constructor(init?: Partial<GetUserPostActivity>);
    createResponse(): GetUserPostActivityResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetUserOrganizations implements IReturn<GetUserOrganizationsResponse>, IGet {
    constructor(init?: Partial<GetUserOrganizations>);
    createResponse(): GetUserOrganizationsResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UserPostVote implements IReturn<UserPostVoteResponse>, IPut {
    id: number;
    weight: number;
    constructor(init?: Partial<UserPostVote>);
    createResponse(): UserPostVoteResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UserPostFavorite implements IReturn<UserPostFavoriteResponse>, IPut {
    id: number;
    constructor(init?: Partial<UserPostFavorite>);
    createResponse(): UserPostFavoriteResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UserPostReport implements IReturn<UserPostReportResponse>, IPut {
    id: number;
    flagType: FlagType;
    reportNotes: string;
    constructor(init?: Partial<UserPostReport>);
    createResponse(): UserPostReportResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UserPostCommentVote implements IReturn<UserPostCommentVoteResponse>, IGet {
    id: number;
    postId: number;
    weight: number;
    constructor(init?: Partial<UserPostCommentVote>);
    createResponse(): UserPostCommentVoteResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UserPostCommentReport implements IReturn<UserPostCommentReportResponse>, IPut {
    id: number;
    postId: number;
    flagType: FlagType;
    reportNotes: string;
    constructor(init?: Partial<UserPostCommentReport>);
    createResponse(): UserPostCommentReportResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class StorePreRender implements IReturnVoid, IPut {
    path: string;
    constructor(init?: Partial<StorePreRender>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetPreRender implements IReturn<string>, IGet {
    path: string;
    constructor(init?: Partial<GetPreRender>);
    createResponse(): string;
    getTypeName(): string;
    getMethod(): string;
}
export declare class SessionInfo implements IReturn<SessionInfoResponse>, IGet {
    constructor(init?: Partial<SessionInfo>);
    createResponse(): SessionInfoResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class SubscribeToOrganization implements IReturnVoid, IPut {
    organizationId: number;
    postTypes: PostType[];
    frequency?: Frequency;
    constructor(init?: Partial<SubscribeToOrganization>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class SubscribeToPost implements IReturnVoid, IPut {
    postId: number;
    constructor(init?: Partial<SubscribeToPost>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class DeleteOrganizationSubscription implements IReturnVoid, IDelete {
    organizationId: number;
    constructor(init?: Partial<DeleteOrganizationSubscription>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class DeletePostSubscription implements IReturnVoid, IDelete {
    postId: number;
    constructor(init?: Partial<DeletePostSubscription>);
    createResponse(): void;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetTechnologyPreviousVersions implements IReturn<GetTechnologyPreviousVersionsResponse>, IGet {
    slug: string;
    constructor(init?: Partial<GetTechnologyPreviousVersions>);
    createResponse(): GetTechnologyPreviousVersionsResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetAllTechnologies implements IReturn<GetAllTechnologiesResponse>, IGet {
    constructor(init?: Partial<GetAllTechnologies>);
    createResponse(): GetAllTechnologiesResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class FindTechnologies extends QueryDb_2<Technology, TechnologyView> implements IReturn<QueryResponse<TechnologyView>>, IGet {
    ids: number[];
    name: string;
    vendorName: string;
    nameContains: string;
    vendorNameContains: string;
    descriptionContains: string;
    constructor(init?: Partial<FindTechnologies>);
    createResponse(): QueryResponse<TechnologyView>;
    getTypeName(): string;
    getMethod(): string;
}
export declare class QueryTechnology extends QueryDb_2<Technology, TechnologyView> implements IReturn<QueryResponse<TechnologyView>>, IGet {
    ids: number[];
    name: string;
    vendorName: string;
    nameContains: string;
    vendorNameContains: string;
    descriptionContains: string;
    constructor(init?: Partial<QueryTechnology>);
    createResponse(): QueryResponse<TechnologyView>;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetTechnology implements IReturn<GetTechnologyResponse>, IRegisterStats, IGet {
    slug: string;
    constructor(init?: Partial<GetTechnology>);
    createResponse(): GetTechnologyResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetTechnologyFavoriteDetails implements IReturn<GetTechnologyFavoriteDetailsResponse>, IGet {
    slug: string;
    constructor(init?: Partial<GetTechnologyFavoriteDetails>);
    createResponse(): GetTechnologyFavoriteDetailsResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class CreateTechnology implements IReturn<CreateTechnologyResponse>, IPost {
    name: string;
    slug: string;
    vendorName: string;
    vendorUrl: string;
    productUrl: string;
    logoUrl: string;
    description: string;
    isLocked: boolean;
    tier: TechnologyTier;
    constructor(init?: Partial<CreateTechnology>);
    createResponse(): CreateTechnologyResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UpdateTechnology implements IReturn<UpdateTechnologyResponse>, IPut {
    id: number;
    name: string;
    vendorName: string;
    vendorUrl: string;
    productUrl: string;
    logoUrl: string;
    description: string;
    isLocked: boolean;
    tier: TechnologyTier;
    constructor(init?: Partial<UpdateTechnology>);
    createResponse(): UpdateTechnologyResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class DeleteTechnology implements IReturn<DeleteTechnologyResponse>, IDelete {
    id: number;
    constructor(init?: Partial<DeleteTechnology>);
    createResponse(): DeleteTechnologyResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetTechnologyStackPreviousVersions implements IReturn<GetTechnologyStackPreviousVersionsResponse>, IGet {
    slug: string;
    constructor(init?: Partial<GetTechnologyStackPreviousVersions>);
    createResponse(): GetTechnologyStackPreviousVersionsResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetPageStats implements IReturn<GetPageStatsResponse>, IGet {
    type: string;
    slug: string;
    id?: number;
    constructor(init?: Partial<GetPageStats>);
    createResponse(): GetPageStatsResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class ClearCache implements IReturn<string>, IGet {
    constructor(init?: Partial<ClearCache>);
    createResponse(): string;
    getTypeName(): string;
    getMethod(): string;
}
export declare class HourlyTask implements IReturn<HourlyTaskResponse>, IGet {
    force: boolean;
    constructor(init?: Partial<HourlyTask>);
    createResponse(): HourlyTaskResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class FindTechStacks extends QueryDb_2<TechnologyStack, TechnologyStackView> implements IReturn<QueryResponse<TechnologyStackView>>, IGet {
    ids: number[];
    name: string;
    vendorName: string;
    nameContains: string;
    vendorNameContains: string;
    descriptionContains: string;
    constructor(init?: Partial<FindTechStacks>);
    createResponse(): QueryResponse<TechnologyStackView>;
    getTypeName(): string;
    getMethod(): string;
}
export declare class QueryTechStacks extends QueryDb_2<TechnologyStack, TechnologyStackView> implements IReturn<QueryResponse<TechnologyStackView>>, IGet {
    ids: number[];
    name: string;
    vendorName: string;
    nameContains: string;
    vendorNameContains: string;
    descriptionContains: string;
    constructor(init?: Partial<QueryTechStacks>);
    createResponse(): QueryResponse<TechnologyStackView>;
    getTypeName(): string;
    getMethod(): string;
}
export declare class Overview implements IReturn<OverviewResponse>, IGet {
    reload: boolean;
    constructor(init?: Partial<Overview>);
    createResponse(): OverviewResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class AppOverview implements IReturn<AppOverviewResponse>, IGet {
    reload: boolean;
    constructor(init?: Partial<AppOverview>);
    createResponse(): AppOverviewResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetAllTechnologyStacks implements IReturn<GetAllTechnologyStacksResponse>, IGet {
    constructor(init?: Partial<GetAllTechnologyStacks>);
    createResponse(): GetAllTechnologyStacksResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetTechnologyStack implements IReturn<GetTechnologyStackResponse>, IRegisterStats, IGet {
    slug: string;
    constructor(init?: Partial<GetTechnologyStack>);
    createResponse(): GetTechnologyStackResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetTechnologyStackFavoriteDetails implements IReturn<GetTechnologyStackFavoriteDetailsResponse>, IGet {
    slug: string;
    constructor(init?: Partial<GetTechnologyStackFavoriteDetails>);
    createResponse(): GetTechnologyStackFavoriteDetailsResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetConfig implements IReturn<GetConfigResponse>, IGet {
    constructor(init?: Partial<GetConfig>);
    createResponse(): GetConfigResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class CreateTechnologyStack implements IReturn<CreateTechnologyStackResponse>, IPost {
    name: string;
    slug: string;
    vendorName: string;
    appUrl: string;
    screenshotUrl: string;
    description: string;
    details: string;
    isLocked: boolean;
    technologyIds: number[];
    constructor(init?: Partial<CreateTechnologyStack>);
    createResponse(): CreateTechnologyStackResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UpdateTechnologyStack implements IReturn<UpdateTechnologyStackResponse>, IPut {
    id: number;
    name: string;
    vendorName: string;
    appUrl: string;
    screenshotUrl: string;
    description: string;
    details: string;
    isLocked: boolean;
    technologyIds: number[];
    constructor(init?: Partial<UpdateTechnologyStack>);
    createResponse(): UpdateTechnologyStackResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class DeleteTechnologyStack implements IReturn<DeleteTechnologyStackResponse>, IDelete {
    id: number;
    constructor(init?: Partial<DeleteTechnologyStack>);
    createResponse(): DeleteTechnologyStackResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetFavoriteTechStack implements IReturn<GetFavoriteTechStackResponse>, IGet {
    technologyStackId: number;
    constructor(init?: Partial<GetFavoriteTechStack>);
    createResponse(): GetFavoriteTechStackResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class AddFavoriteTechStack implements IReturn<FavoriteTechStackResponse>, IPut {
    technologyStackId: number;
    constructor(init?: Partial<AddFavoriteTechStack>);
    createResponse(): FavoriteTechStackResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class RemoveFavoriteTechStack implements IReturn<FavoriteTechStackResponse>, IDelete {
    technologyStackId: number;
    constructor(init?: Partial<RemoveFavoriteTechStack>);
    createResponse(): FavoriteTechStackResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetFavoriteTechnologies implements IReturn<GetFavoriteTechnologiesResponse>, IGet {
    technologyId: number;
    constructor(init?: Partial<GetFavoriteTechnologies>);
    createResponse(): GetFavoriteTechnologiesResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class AddFavoriteTechnology implements IReturn<FavoriteTechnologyResponse>, IPut {
    technologyId: number;
    constructor(init?: Partial<AddFavoriteTechnology>);
    createResponse(): FavoriteTechnologyResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class RemoveFavoriteTechnology implements IReturn<FavoriteTechnologyResponse>, IDelete {
    technologyId: number;
    constructor(init?: Partial<RemoveFavoriteTechnology>);
    createResponse(): FavoriteTechnologyResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetUserFeed implements IReturn<GetUserFeedResponse>, IGet {
    constructor(init?: Partial<GetUserFeed>);
    createResponse(): GetUserFeedResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetUsersKarma implements IReturn<GetUsersKarmaResponse>, IGet {
    userIds: number[];
    constructor(init?: Partial<GetUsersKarma>);
    createResponse(): GetUsersKarmaResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class GetUserInfo implements IReturn<GetUserInfoResponse>, IGet {
    userName: string;
    constructor(init?: Partial<GetUserInfo>);
    createResponse(): GetUserInfoResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class UserAvatar implements IGet {
    userName: string;
    constructor(init?: Partial<UserAvatar>);
    getMethod(): string;
}
export declare class MqStart implements IReturn<string> {
    constructor(init?: Partial<MqStart>);
    createResponse(): string;
    getTypeName(): string;
    getMethod(): string;
}
export declare class MqStop implements IReturn<string> {
    constructor(init?: Partial<MqStop>);
    createResponse(): string;
    getTypeName(): string;
    getMethod(): string;
}
export declare class MqStats implements IReturn<string> {
    constructor(init?: Partial<MqStats>);
    createResponse(): string;
    getTypeName(): string;
    getMethod(): string;
}
export declare class MqStatus implements IReturn<string> {
    constructor(init?: Partial<MqStatus>);
    createResponse(): string;
    getTypeName(): string;
    getMethod(): string;
}
export declare class SyncDiscourseSite implements IReturn<SyncDiscourseSiteResponse>, IPost {
    site: string;
    constructor(init?: Partial<SyncDiscourseSite>);
    createResponse(): SyncDiscourseSiteResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class LogoUrlApproval implements IReturn<LogoUrlApprovalResponse>, IPut {
    technologyId: number;
    approved: boolean;
    constructor(init?: Partial<LogoUrlApproval>);
    createResponse(): LogoUrlApprovalResponse;
    getTypeName(): string;
    getMethod(): string;
}
/**
* Limit updates to TechStack to Owner or Admin users
*/
export declare class LockTechStack implements IReturn<LockStackResponse>, IPut {
    technologyStackId: number;
    isLocked: boolean;
    constructor(init?: Partial<LockTechStack>);
    createResponse(): LockStackResponse;
    getTypeName(): string;
    getMethod(): string;
}
/**
* Limit updates to Technology to Owner or Admin users
*/
export declare class LockTech implements IReturn<LockStackResponse>, IPut {
    technologyId: number;
    isLocked: boolean;
    constructor(init?: Partial<LockTech>);
    createResponse(): LockStackResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class DummyTypes {
    post: Post[];
    constructor(init?: Partial<DummyTypes>);
    getMethod(): string;
}
export declare class EmailTest implements IReturn<EmailTestRespoonse> {
    postId?: number;
    constructor(init?: Partial<EmailTest>);
    createResponse(): EmailTestRespoonse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class ImportUser implements IReturn<ImportUserResponse>, IPost {
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    company: string;
    refSource: string;
    refId?: number;
    refIdStr: string;
    refUrn: string;
    defaultProfileUrl: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ImportUser>);
    createResponse(): ImportUserResponse;
    getTypeName(): string;
    getMethod(): string;
}
export declare class ImportUserVoiceSuggestion implements IReturn<ImportUserVoiceSuggestionResponse>, IPost {
    organizationId: number;
    url: string;
    id: number;
    topicId: number;
    state: string;
    title: string;
    slug: string;
    category: string;
    text: string;
    formattedText: string;
    voteCount: number;
    closedAt?: string;
    statusKey: string;
    statusHexColor: string;
    statusChangedBy: UserVoiceUser;
    creator: UserVoiceUser;
    response: UserVoiceComment;
    createdAt: string;
    updatedAt: string;
    constructor(init?: Partial<ImportUserVoiceSuggestion>);
    createResponse(): ImportUserVoiceSuggestionResponse;
    getTypeName(): string;
    getMethod(): string;
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
    getMethod(): string;
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
    getMethod(): string;
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
    getMethod(): string;
}
export declare class ConvertSessionToToken implements IReturn<ConvertSessionToTokenResponse>, IPost {
    preserveSession: boolean;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ConvertSessionToToken>);
    createResponse(): ConvertSessionToTokenResponse;
    getTypeName(): string;
    getMethod(): string;
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
    getMethod(): string;
}
export declare class QueryPostComments extends QueryDb_1<PostComment> implements IReturn<QueryResponse<PostComment>>, IGet {
    id?: number;
    userId?: number;
    postId?: number;
    contentContains: string;
    upVotesAbove?: number;
    upVotesBelow?: number;
    downVotesAbove?: number;
    downVotes?: number;
    favoritesAbove?: number;
    favoritesBelow?: number;
    wordCountAbove?: number;
    wordCountBelow?: number;
    reportCountAbove?: number;
    reportCountBelow?: number;
    constructor(init?: Partial<QueryPostComments>);
    createResponse(): QueryResponse<PostComment>;
    getTypeName(): string;
    getMethod(): string;
}
