# @servicestack/client

The **@servicestack/client** library enables the best end-to-end typed developer experience for calling [ServiceStack APIs](https://servicestack.net/) in any TypeScript or JavaScript project.

### v2.x Changes

 - **@servicestack/client** now dependency-free

As [fetch is available in Node.js v18+ LTS](https://blog.logrocket.com/fetch-api-node-js/) all polyfills have been removed to make **@servicestack/client** dependency-free in its latest major **v2.x** version.

This should have no effect when using [JsonServiceClient](https://docs.servicestack.net/javascript-client) in Browsers which uses its native `fetch()` or from Node.js v18+ that now has native `fetch` support. 

#### ServerEventsClient in Node.js

Node.js projects using [ServerEventsClient](https://docs.servicestack.net/typescript-server-events-client) (e.g. in tests) now require a polyfill:

```bash
$ npm install eventsource
```

Then polyfill with:

```ts
globalThis.EventSource = require("eventsource")
```

#### JsonServiceClient in Node.js < v18

Older Node.js runtimes using `JsonServiceClient` can continue using the existing **v1.x** version or polyfill `fetch` with:

```bash
$ npm install cross-fetch
```

Then polyfill with:

```js
require('cross-fetch/polyfill')
```

## Usage in ServiceStack Projects

All ServiceStack Project Templates are already pre-configured with **@servicestack/client**, create from:

### [https://servicestack.net/start](https://servicestack.net/start)

## Usage in TypeScript or npm projects

Projects using TypeScript or any npm build system can install the dependency-free library with:

```bash
npm install @servicestack/client
```

Which can be used with your APIs typed DTOs that TypeScript projects can generate using 
[TypeScript Add ServiceStack Reference](https://docs.servicestack.net/typescript-add-servicestack-reference#typescript-serviceclient) with:

```bash
x ts https://localhost:5001
```

Which will save your API DTOs to **dtos.ts** that can be referenced in your code with:

```ts
import { Hello } from "./dtos"
```

### JavaScript npm projects

Non-TypeScript npm projects can choose to have TypeScript generate the DTOs into the preferred JavaScript target:

```bash
tsc dtos.ts 
```

Alternatively they can generate ES6 annotated DTOs using [JavaScript Add ServiceStack Reference](https://docs.servicestack.net/javascript-add-servicestack-reference) with:

```bash
x mjs https://localhost:5001
```

Which will save your API DTOs to **dtos.mjs** where they can be referenced in your code with:

```ts
import { Hello } from "./dtos.mjs"
```

### Example Usage

Either solution gives you the same productive end-to-end Typed API access, e.g:

```ts
import { JsonApiClient } from "@servicestack/client"

const client = JsonApiClient.create(baseUrl)

const api = await client.api(new Hello({ Name: 'World' }))
if (api.succeeded) {
    console.log(api.response.result)
} else {
    console.log(api.error)
}
```

## Usage in .NET Apps without npm

Modern JavaScript Apps not using an npm build system like the [Razor Vue Tailwind templates](https://docs.servicestack.net/vue/#getting-started) can download 
**@servicestack/client** from:

 - https://unpkg.com/@servicestack/client@2/dist/servicestack-client.mjs
 - https://unpkg.com/@servicestack/client@2/dist/servicestack-client.min.mjs (minified)

Then use an [importmap](https://docs.servicestack.net/javascript-add-servicestack-reference#import-maps) to specify where to load **@servicestack/client** from, e.g:

```html
<!-- polyfill for safari -->
<script async src="https://ga.jspm.io/npm:es-module-shims@1.6.3/dist/es-module-shims.js"></script>
<script type="importmap">
{
    "imports": {
        "@servicestack/client": "/js/servicestack-client.mjs"
    }
}
</script>
```

### ImportMap in Razor Pages or MVC

Razor Pages or MVC projects can use `@Html.ImportMap()` in **_Layout.cshtml** to use different builds for development and production, e.g:

```csharp
@if (Context.Request.Headers.UserAgent.Any(x => x.Contains("Safari") && !x.Contains("Chrome")))
{
    <script async src="https://ga.jspm.io/npm:es-module-shims@1.6.3/dist/es-module-shims.js"></script>
}
@Html.ImportMap(new()
{
    ["@servicestack/client"] = ("/js/servicestack-client.mjs", "/js/servicestack-client.min.mjs"),
})
```

This lets your source code reference the library by package name to enable using the same source code in a 
[JavaScript Module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), e.g:

```html
<script type="module">
import { JsonApiClient } from "@servicestack/client"

const client = JsonApiClient.create(baseUrl)

const api = await client.api(new Hello({ Name: 'World' }))
</script>
```

### JavaScript API DTOs

Your [JavaScript API DTOs](https://docs.servicestack.net/javascript-add-servicestack-reference) can either directly reference the **/types/mjs** endpoint:

```js
import { Hello } from '/types/mjs'
```

### Enable static analysis and intelli-sense 

Or for better IDE intelli-sense during development, save the annotated Typed DTOs to disk with the [x dotnet tool](https://docs.servicestack.net/dotnet-tool):

```sh
x mjs
```

Then reference it instead to enable IDE static analysis when calling Typed APIs from JavaScript:

```js
import { Hello } from '/js/dtos.mjs'
client.api(new Hello({ name }))
```
    
To also enable static analysis for **@servicestack/client**, install the dependency-free library as a dev dependency:
    
```sh
npm install -D @servicestack/client
```

Where only its TypeScript definitions are used by the IDE during development to enable its type-checking and intelli-sense.

#### Support Legacy Browsers

JavaScript Projects needing to support legacy browsers can use [ES3 Common.js DTOs](https://docs.servicestack.net/commonjs-add-servicestack-reference) to 
enable access using old-style `<script>` includes.

## JsonServiceClient

To create `JsonServiceClient` instances in v6+ projects using the [JSON /api route](https://docs.servicestack.net/routing#json-api-pre-defined-route) use:

```js
const client = JsonApiClient.create(baseUrl)
```

Where it's configured to not use any JSON HTTP Headers to enable more efficient CORS requests without preflight requests.

Alternatively all other projects can use the default constructor:

```js
const client = new JsonServiceClient(baseUrl)
```

### API Reference

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/clients/JsonServiceClient-ui-reference.png)](https://api.locode.dev/classes/client.JsonServiceClient.html)

### API method

The `api` returns a typed `ApiResult<Response>` Value Result that encapsulates either a Typed Response or a 
structured API Error populated in `ResponseStatus` allowing you to handle API responses programmatically without
`try/catch` handling:

```ts
const api = client.api(new Hello({ name }))
if (api.failed) {
    console.log(`Greeting failed! ${e.errorCode}: ${e.errorMessage}`);
    return;
}

console.log(`API Says: ${api.response.result}`) //api.succeeded
```

### Simplified API Handling

Being able to treat errors as values greatly increases the ability to programmatically handle and genericize api handling
and greatly simplifies functionality needing to handle both successful and error responses like binding to UI components.

An example of this is below where we're able to concurrently fire off multiple unrelated async requests in parallel, 
wait for them all to complete, print out the ones that have succeeded or failed then access their strong typed responses: 

```ts
import { JsonServiceClient } from "@servicestack/client"

let requests:ApiRequest[] = [
    new AppOverview(),            // GET => AppOverviewResponse
    new DeleteTechnology(),       // DELETE => IReturnVoid (requires auth) 
    new GetAllTechnologies(),     // GET => GetAllTechnologiesResponse
    new GetAllTechnologyStacks(), // GET => GetAllTechnologyStacksResponse
]

let results = await Promise.all(requests.map(async (request) =>
    ({ request, api:await client.api(request) as ApiResponse}) ))

let failed = results.filter(x => x.api.failed)
console.log(`${failed.length} failed:`)
failed.forEach(x =>
    console.log(`    ${x.request.getTypeName()} Request Failed: ${failed.map(x => x.api.errorMessage)}`))

let succeeded = results.filter(x => x.api.succeeded)
console.log(`\n${succeeded.length} succeeded: ${succeeded.map(x => x.request.getTypeName()).join(', ')}`)

let r = succeeded.find(x => x.request.getTypeName() == 'AppOverview')?.api.response as AppOverviewResponse
if (r) console.log(`Top 5 Technologies:${r.topTechnologies.slice(0,4).map(tech => tech.name).join(', ')}`)
```

Output:

```
1 failed
DeleteTechnology Request Failed: Unauthorized

3 succeeded: AppOverview, GetAllTechnologies, GetAllTechnologyStacks
Top 5 Technologies: Redis, MySQL, Amazon EC2, Nginx
```

Being able to treat Errors as values has dramatically reduced the effort required to accomplish the same feat if needing 
to handle errors with `try/catch`.

### Ideal Typed Message-based API

The TypeScript `JsonServiceClient` enables the same productive, typed API development experience available 
in ServiceStack's other [1st-class supported client platforms](https://docs.servicestack.net/typescript-add-servicestack-reference). 

The `JsonServiceClient` leverages the additional type hints ServiceStack embeds in each TypeScript Request DTO 
to achieve the ideal typed, message-based API - so all API requests benefit from a succinct, boilerplate-free 
Typed API. 

Here's a quick look at what it looks like. The example below shows how to create a 
[C# Gist in Gistlyn](https://github.com/ServiceStack/Gistlyn) 
after adding a [TypeScript ServiceStack Reference](https://docs.servicestack.net/typescript-add-servicestack-reference)
to `gistlyn.com` and installing the [@servicestack/client](https://www.npmjs.com/package/@servicestack/client) 
npm package: 

```ts
import { JsonServiceClient } from '@servicestack/client';
import { StoreGist, GithubFile } from './dtos';

const client = new JsonServiceClient("https://gistlyn.com");

const request = new StoreGist({
    files: { 
        [file.filename]: new GithubFile({
            filename: 'main.cs',
            content: 'var greeting = "Hi, from TypeScript!";' 
        }) 
    }
})

const api = client.api(request); //response:StoreGistResponse
if (api.succeeded) {
    console.log(`New C# Gist was created with id: ${r.gist}`);
    location.href = `https://gist.cafe/${r.gist}`;
} else {
    console.log("Failed to create Gist: ", e.errorMessage);
}
```

Where the `response` param is typed to `StoreGistResponse` DTO Type.

### Sending additional arguments with Typed API Requests

Many AutoQuery Services utilize 
[implicit conventions](https://docs.servicestack.net/autoquery-rdbms#implicit-conventions) 
to query fields that aren't explicitly defined on AutoQuery Request DTOs, these can now be queried by specifying additional arguments with the typed Request DTO, e.g:

```ts
//typed to QueryResponse<TechnologyStack> 
const response = await client.get(new FindTechStacks(), { VendorName: "ServiceStack" });
```

Which will [return TechStacks](http://techstacks.io/ss_admin/autoquery/FindTechStacks) developed by ServiceStack.

### Calling APIs with Custom URLs

You can call Services using relative or absolute urls, e.g:

```ts
client.get<GetTechnologyResponse>("/technology/ServiceStack")

client.get<GetTechnologyResponse>("http://techstacks.io/technology/ServiceStack")

// GET http://techstacks.io/technology?Slug=ServiceStack
client.get<GetTechnologyResponse>("/technology", { Slug: "ServiceStack" }) 
```

as well as POST Request DTOs to custom urls:

```ts
client.postToUrl("/custom-path", request, { Slug: "ServiceStack" });

client.putToUrl("http://example.org/custom-path", request);
```

### Raw Data Responses

The `JsonServiceClient` also supports Raw Data responses like `string` and `byte[]` which also get a Typed API 
once declared on Request DTOs using the `IReturn<T>` marker:

```csharp
public class ReturnString : IReturn<string> {}
public class ReturnBytes : IReturn<byte[]> {}
```

Which can then be accessed as normal, with their Response typed to a JavaScript `string` or `Uint8Array` for 
raw `byte[]` responses:

```ts
let str:string = await client.get(new ReturnString());

let data:Uint8Array = await client.get(new ReturnBytes());
```

### Authenticating using Basic Auth

Basic Auth support is implemented in `JsonServiceClient` and follows the same API made available in the C# 
Service Clients where the `userName/password` properties can be set individually, e.g:

```ts
var client = new JsonServiceClient(baseUrl);
client.userName = user;
client.password = pass;

const response = await client.get(new SecureRequest());
```

Or use `client.setCredentials()` to have them set both together.

### Authenticating using Credentials

Alternatively you can authenticate using userName/password credentials by 
[adding a TypeScript Reference](https://docs.servicestack.net/typescript-add-servicestack-reference#add-typescript-reference) 
to your remote ServiceStack Instance and sending a populated `Authenticate` Request DTO, e.g:

```ts
const response = await client.post(new Authenticate({
    provider: "credentials", userName, password, rememberMe: true }));
```

This will populate the `JsonServiceClient` with 
[Session Cookies](https://docs.servicestack.net/sessions#cookie-session-ids) 
which will transparently be sent on subsequent requests to make authenticated requests.

### Authenticating using JWT

Use the `bearerToken` property to Authenticate with a [ServiceStack JWT Provider](https://docs.servicestack.net/jwt-authprovider) using a JWT Token:

```ts
client.bearerToken = jwtToken;
```

Alternatively you can use a [Refresh Token](https://docs.servicestack.net/jwt-authprovider#refresh-tokens) instead:

```ts
client.refreshToken = refreshToken;
```

### Authenticating using an API Key

Use the `bearerToken` property to Authenticate with an [API Key](https://docs.servicestack.net/api-key-authprovider):

```ts
client.bearerToken = apiKey;
```

### Transparently handle 401 Unauthorized Responses

If the server returns a 401 Unauthorized Response either because the client was Unauthenticated or the 
configured Bearer Token or API Key used had expired or was invalidated, you can use `onAuthenticationRequired`
callback to re-configure the client before automatically retrying the original request, e.g:

```ts
client.onAuthenticationRequired = async () => {
    const authClient = new JsonServiceClient(authBaseUrl);
    authClient.userName = userName;
    authClient.password = password;
    const response = await authClient.get(new Authenticate());
    client.bearerToken = response.bearerToken;
};

//Automatically retries requests returning 401 Responses with new bearerToken
var response = await client.get(new Secured());
```

### Automatically refresh Access Tokens

With the [Refresh Token support in JWT](https://docs.servicestack.net/jwt-authprovider#refresh-tokens) 
you can use the `refreshToken` property to instruct the Service Client to automatically fetch new 
JWT Tokens behind the scenes before automatically retrying failed requests due to invalid or expired JWTs, e.g:

```ts
//Authenticate to get new Refresh Token
const authClient = new JsonServiceClient(authBaseUrl);
authClient.userName = userName;
authClient.password = password;
const authResponse = await authClient.get(new Authenticate());

//Configure client with RefreshToken
client.refreshToken = authResponse.RefreshToken;

//Call authenticated Services and clients will automatically retrieve new JWT Tokens as needed
const response = await client.get(new Secured());
```

Use the `refreshTokenUri` property when refresh tokens need to be sent to a different ServiceStack Server, e.g:

```ts
client.refreshToken = refreshToken;
client.refreshTokenUri = authBaseUrl + "/access-token";
```

### [ServerEvents Client](https://docs.servicestack.net/typescript-server-events-client)

The [TypeScript ServerEventClient](https://docs.servicestack.net/typescript-server-events-client) 
is an idiomatic port of ServiceStack's 
[C# Server Events Client](https://docs.servicestack.net/csharp-server-events-client) 
in native TypeScript providing a productive client to consume ServiceStack's 
[real-time Server Events](https://docs.servicestack.net/server-events) that can be used in TypeScript 
[Web, Node.js Server and React Native iOS and Android Mobile Apps](https://github.com/ServiceStackApps/typescript-server-events).

```ts
const channels = ["home"];
const client = new ServerEventsClient("/", channels, {
    handlers: {
        onConnect: (sub:ServerEventConnect) => {  // Successful SSE connection
            console.log("You've connected! welcome " + sub.displayName);
        },
        onJoin: (msg:ServerEventJoin) => {        // User has joined subscribed channel
            console.log("Welcome, " + msg.displayName);
        },
        onLeave: (msg:ServerEventLeave) => {      // User has left subscribed channel
            console.log(msg.displayName + " has left the building");
        },
        onUpdate: (msg:ServerEventUpdate) => {    // User channel subscription was changed
            console.log(msg.displayName + " channels subscription were updated");
        },        
        onMessage: (msg:ServerEventMessage) => {},// Invoked for each other message
        //... Register custom handlers
        announce: (text:string) => {},            // Handle messages with simple argument
        chat: (chatMsg:ChatMessage) => {},        // Handle messages with complex type argument
        CustomMessage: (msg:CustomMessage) => {}, // Handle complex types with default selector
    },
    receivers: { 
        //... Register any receivers
        tv: {
            watch: function (id) {                // Handle 'tv.watch {url}' messages 
                var el = document.querySelector("#tv");
                if (id.indexOf('youtu.be') >= 0) {
                    var v = splitOnLast(id, '/')[1];
                    el.innerHTML = templates.youtube.replace("{id}", v);
                } else {
                    el.innerHTML = templates.generic.replace("{id}", id);
                }
                el.style.display = 'block'; 
            },
            off: function () {                    // Handle 'tv.off' messages
                var el = document.querySelector("#tv");
                el.style.display = 'none';
                el.innerHTML = '';
            }
        }
    },
    onException: (e:Error) => {},                 // Invoked on each Error
    onReconnect: (e:Error) => {}                  // Invoked after each auto-reconnect
})
.addListener("theEvent",(e:ServerEventMessage) => {}) // Add listener for pub/sub event trigger
.start();                                             // Start listening for Server Events!
```

When publishing a DTO Type for your Server Events message, your clients will be able to benefit from the generated DTOs in [TypeScript ServiceStack References](https://docs.servicestack.net/typescript-add-servicestack-reference).

## Rich intelli-sense support

Even pure HTML/JS Apps that don't use TypeScript or any external dependencies will still benefit from the Server 
generated `dtos.ts` and TypeScript definitions where you'll be able to benefit from rich intelli-sense support 
in smart IDEs like [Rider](https://www.jetbrains.com/rider/) for both the client library:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/init-rider-ts-client.png)

As well as your App's server generated DTOs:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v6.6/mjs-intellisense.png)

So even simple Apps without complex bundling solutions or external dependencies can still benefit from a rich typed authoring 
experience without any additional build time or tooling complexity.

## Feedback and Support

Support is available from the ServiceStack [Customer Forums](https://forums.servicestack.net) or [GitHub Discussions](https://servicestack.net/ask).
