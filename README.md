# servicestack-client

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/servicestack-heart-typescript.png)](https://github.com/ServiceStack/ServiceStack/wiki/TypeScript-Add-ServiceStack-Reference)

This library contains the Typed ServiceStack Client library that is an idiomatic port of ServiceStack's
[ss-utils.js JavaScript Client](https://github.com/ServiceStack/ServiceStack/wiki/ss-utils.js-JavaScript-Client-Library) 
in native TypeScript. It provides integration with many ServiceStack features 
including [TypeScript Add ServiceStack Reference](https://github.com/ServiceStack/ServiceStack/wiki/TypeScript-Add-ServiceStack-Reference)
and [Server Events](https://github.com/ServiceStack/ServiceStack/wiki/Server-Events).

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

Then fetch the Type Definitions for either project type with:

    typings install servicestack-client --save
    typings install dt~isomorphic-fetch --global --save

### Ideal Typed Message-based API

The TypeScript `JsonServiceClient` enables the same productive, typed API development experience available 
in ServiceStack's other [1st-class supported client platforms](https://github.com/ServiceStack/ServiceStack/wiki/TypeScript-Add-ServiceStack-Reference). 

The `JsonServiceClient` leverages the additional type hints ServiceStack embeds in each TypeScript Request DTO 
to achieve the ideal typed, message-based API - so all API requests benefit from a succinct, boilerplate-free 
Typed API. 

Here's a quick look at what it looks like. The example below shows how to create a 
[C# Gist in Gislyn](https://github.com/ServiceStack/Gistlyn) 
after adding a [TypeScript ServiceStack Reference](TypeScript-Add-ServiceStack-Reference)
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

### ServerEventsClient

In addition to `JsonServiceClient` this package contains most of the JavaScript utils in 
[ss-utils.js](https://github.com/ServiceStack/ServiceStack/wiki/ss-utils.js-JavaScript-Client-Library),
including the new `ServerEventsClient` which [gistlyn.com](http://gistlyn.com) uses to process real-time 
Server Events from the executing C# Gist with:

```ts
const channels = ["gist"];
const sse = new ServerEventsClient("/", channels, {
    handlers: {
        onConnect(activeSub:ISseConnect) {                       // Successful SSE connection
            store.dispatch({ type: 'SSE_CONNECT', activeSub });  // Tell Redux Store we're connected 
            fetch("/session-to-token", {                         // Convert Session to JWT
                method:"POST", credentials:"include" 
            }); 
        },
        ConsoleMessage(m, e) {                                   // C# Gist Console Logs
            batchLogs.queue({ msg: m.message });
        },
        ScriptExecutionResult(m:ScriptExecutionResult, e) {      // Script Status Updates
            //...
        }
    }
});
```
