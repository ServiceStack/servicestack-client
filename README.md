# servicestack-client

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/servicestack-heart-typescript.png)](http://docs.servicestack.net/typescript-add-servicestack-reference)

This library contains the Typed ServiceStack Client library that is an idiomatic port of ServiceStack's
[ss-utils.js JavaScript Client](http://docs.servicestack.net/ss-utils-js) 
in native TypeScript. It provides integration with many ServiceStack features 
including [TypeScript Add ServiceStack Reference](http://docs.servicestack.net/typescript-add-servicestack-reference)
and [Server Events](http://docs.servicestack.net/server-events).

### Web, Node.js and React Native

It contains a clean "jQuery-free" implementation based on JavaScript's new 
[Fetch API standard](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), 
utilizing the [fetch-everywhere](https://www.npmjs.com/package/isomorphic-fetch) implementation
so it can be used in both JavaScript Web apps, Node.js server and test projects as well as 
React Native iOS and Android Mobile Apps as seen in [TypeScript Server Event Examples](https://github.com/ServiceStackApps/typescript-server-events).

## Install

This package is pre-configured in all [ServiceStackVS TypeScript VS.NET Templates](https://github.com/ServiceStack/ServiceStackVS)

Node.js projects can install it with:

    npm install servicestack-client --save

Or if using jspm:

    jspm install servicestack-client

The Type Definitions are contained in the above `servicestack-client` npm package, if using jspm it 
can be installed with:

    npm install servicestack-client --save-dev

### Ideal Typed Message-based API

The TypeScript `JsonServiceClient` enables the same productive, typed API development experience available 
in ServiceStack's other [1st-class supported client platforms](http://docs.servicestack.net/typescript-add-servicestack-reference). 

The `JsonServiceClient` leverages the additional type hints ServiceStack embeds in each TypeScript Request DTO 
to achieve the ideal typed, message-based API - so all API requests benefit from a succinct, boilerplate-free 
Typed API. 

Here's a quick look at what it looks like. The example below shows how to create a 
[C# Gist in Gislyn](https://github.com/ServiceStack/Gistlyn) 
after adding a [TypeScript ServiceStack Reference](http://docs.servicestack.net/typescript-add-servicestack-reference)
to `gistlyn.com` and installing the [servicestack-client](https://www.npmjs.com/package/servicestack-client) 
npm package: 

```ts
import { JsonServiceClient } from 'servicestack-client';
import { StoreGist, GithubFile } from './Gistlyn.dtos';

var client = new JsonServiceClient("http://gistlyn.com");

var request = new StoreGist();
var file = new GithubFile();
file.filename = "main.cs";
file.content = 'var greeting = "Hi, from TypeScript!";';
request.files = { [file.filename]: file };

try {
    const response = client.post(request); //response:StoreGistResponse

    console.log(`New C# Gist was created with id: ${r.gist}`);
    location.href = `http://gistlyn.com?gist=${r.gist}`;
} catch(e) {
    console.log("Failed to create Gist: ", e.responseStatus);
}
```

Where the `response` param is typed to `StoreGistResponse` DTO Type.

### Sending additional arguments with Typed API Requests

Many AutoQuery Services utilize 
[implicit conventions](http://docs.servicestack.net/autoquery-rdbms#implicit-conventions) 
to query fields that aren't explicitly defined on AutoQuery Request DTOs, these can now be queried by specifying additional arguments with the typed Request DTO, e.g:

```ts
const request = new FindTechStacks();

//typed to QueryResponse<TechnologyStack> 
const response = await client.get(request, { VendorName: "ServiceStack" });
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
[adding a TypeScript Reference](http://docs.servicestack.net/typescript-add-servicestack-reference#add-typescript-reference) 
to your remote ServiceStack Instance and sending a populated `Authenticate` Request DTO, e.g:

```ts
let request = new Authenticate();
request.provider = "credentials";
request.userName = userName;
request.password = password;
request.rememberMe = true;

const response = await client.post(request);
```

This will populate the `JsonServiceClient` with 
[Session Cookies](http://docs.servicestack.net/sessions#cookie-session-ids) 
which will transparently be sent on subsequent requests to make authenticated requests.

### Authenticating using JWT

Use the `bearerToken` property to Authenticate with a [ServiceStack JWT Provider](http://docs.servicestack.net/jwt-authprovider) using a JWT Token:

```ts
client.bearerToken = jwtToken;
```

Alternatively you can use a [Refresh Token](http://docs.servicestack.net/jwt-authprovider#refresh-tokens) instead:

```ts
client.refreshToken = refreshToken;
```

### Authenticating using an API Key

Use the `bearerToken` property to Authenticate with an [API Key](http://docs.servicestack.net/api-key-authprovider):

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

With the [Refresh Token support in JWT](http://docs.servicestack.net/jwt-authprovider#refresh-tokens) 
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

### [ServerEvents Client](http://docs.servicestack.net/typescript-server-events-client)

The [TypeScript ServerEventClient](http://docs.servicestack.net/typescript-server-events-client) 
is an idiomatic port of ServiceStack's 
[C# Server Events Client](http://docs.servicestack.net/csharp-server-events-client) 
in native TypeScript providing a productive client to consume ServiceStack's 
[real-time Server Events](http://docs.servicestack.net/server-events) that can be used in TypeScript 
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
        onMessage: (msg:ServerEventMessage) => {} // Invoked for each other message
        //... Register custom handlers
        announce: (text:string) => {}             // Handle messages with simple argument
        chat: (chatMsg:ChatMessage) => {}         // Handle messages with complex type argument
        CustomMessage: (msg:CustomMessage) => {}  // Handle complex types with default selector
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

When publishing a DTO Type for your Server Events message, your clients will be able to benefit from the generated DTOs in [TypeScript ServiceStack References](http://docs.servicestack.net/typescript-add-servicestack-reference).

## Troubleshooting

If you're getting missing Type Definitions for `Headers`, `Response`, `Request`, etc. You'll need to import
the Type Definitions for W3C's `fetch` API, preferably by using the latest version of TypeScript and
referencing the core **es2016** lib in TypeScript's `tsconfig.json`, e.g:

```json
{
  "compilerOptions": {
    "lib": [
      "es2016"
    ]
  }
}
```

Alternatively you can import the [whatwg-fetch](https://www.npmjs.com/package/@types/whatwg-fetch) Type Definitions with:

    npm install @types/whatwg-fetch --save-dev