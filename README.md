# servicestack-client

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/servicestack-heart-typescript.png)](http://docs.servicestack.net/typescript-add-servicestack-reference)

This library contains the Typed ServiceStack Client library that is an idiomatic port of ServiceStack's
[ss-utils.js JavaScript Client](http://docs.servicestack.net/ss-utils-js) 
in native TypeScript. It provides integration with many ServiceStack features 
including [TypeScript Add ServiceStack Reference](http://docs.servicestack.net/typescript-add-servicestack-reference)
and [Server Events](http://docs.servicestack.net/server-events).

### Isomorphic Fetch

It contains a clean "jQuery-free" implementation based on JavaScript's new 
[Fetch API standard](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), 
utilizing the [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) implementation
so it can be used in both JavaScript client web apps as well as node.js server projects.

## Install

This package is pre-configured in all [ServiceStackVS TypeScript VS.NET Templates](https://github.com/ServiceStack/ServiceStackVS)

Other TypeScript or ES6 projects can install `servicestack-client` with:

    jspm install servicestack-client

node server projects can instead install it with:

    npm install servicestack-client --save

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

client.post(request)
    .then(r => { // r:StoreGistResponse
        console.log(`New C# Gist was created with id: ${r.gist}`);
        location.href = `http://gistlyn.com?gist=${r.gist}`;
    })
    .catch(e => {
        console.log("Failed to create Gist: ", e.responseStatus);
    });
```

Where the `r` param in the returned `then()` Promise callback is typed to `StoreGistResponse` DTO Type.

### Support for Basic Auth

Basic Auth support is implemented in `JsonServiceClient` and follows the same API made available in the C# 
Service Clients where the `userName/password` properties can be set individually, e.g:

```ts
var client = new JsonServiceClient(baseUrl);
client.userName = user;
client.password = pass;

client.get(new SecureRequest())
    .then(r => ...);
```

Or use `client.setCredentials()` to have them set both together.

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
client.get(new ReturnString())
    .then(str => ...);  //= str:string

client.get(new ReturnBytes())
    .then(data => ...); //= data:Uint8Array
```

### [ServerEvents Client](http://docs.servicestack.net/typescript-server-events-client)

The [TypeScript ServerEventClient](http://docs.servicestack.net/typescript-server-events-client) 
is an idiomatic port of ServiceStack's 
[C# Server Events Client](http://docs.servicestack.net/csharp-server-events-client) 
in native TypeScript providing a productive client to consume ServiceStack's 
[real-time Server Events](http://docs.servicestack.net/server-events) that can be used in both 
TypeScript Web and node.js server applications.

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
            console.log(user.displayName + " has left the building");
        },
        onUpdate: (msg:ServerEventUpdate) => {    // User channel subscription was changed
            console.log(user.displayName + " channels subscription were updated");
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
    }
})
.addListener("theEvent",(e:ServerEventMessage) => {}) // Add listener for pub/sub event trigger
.start();                                             // Start listening for Server Events!
```

When publishing a DTO Type for your Server Events message, your clients will be able to benefit from the generated DTOs in [TypeScript ServiceStack References](http://docs.servicestack.net/typescript-add-servicestack-reference).

