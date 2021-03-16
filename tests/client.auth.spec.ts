/// <reference path="./dtos/test.interfaces.d.ts" />

import * as dtos from "./dtos/techstacks.dtos";
import { 
    ResponseStatus, ResponseError,
    Authenticate,AuthenticateResponse,
    TestAuth, TestAuthResponse,
    CreateJwt,CreateJwtResponse,
    CreateRefreshJwt,CreateRefreshJwtResponse, Secured, InvalidateLastAccessToken,
} from "./dtos/test.dtos";
import * as chai from "chai";
import { 
    JsonServiceClient,
    ServerEventsClient,
    ServerEventConnect, ServerEventJoin, ServerEventLeave, ServerEventUpdate, ServerEventMessage, ServerEventHeartbeat,
    ErrorResponse,
    appendQueryString,
    nameOf
} from  '../src/index';

const expect = chai.expect;
const assert = chai.assert;

const TEST_URL = "http://test.servicestack.net";
//const TEST_URL = "http://localhost:56500";

const createJwt = (opt:any={}) : CreateJwt => {
    const request = Object.assign(new CreateJwt(), opt);
    if (!request.userAuthId)
        request.userAuthId = "1";
    if (!request.displayName)
        request.displayName = "test jwt";
    if (!request.email)
        request.email = "test@auth.com";
    return request;
}

//Clear existing User Session
const clearSession = async (client:JsonServiceClient) => {
    let logout = new Authenticate();
    logout.provider = "logout";
    await client.post(logout);
};

declare var global;
const supportsServerEvents = () => typeof global.EventSource != "undefined";

describe ('JsonServiceClient Auth Tests', () => {

    var client : JsonServiceClient;

    beforeEach(() => {
        client = new JsonServiceClient(TEST_URL);
    });


    it ("Can auth with JWT", async () => {

        const request = createJwt();
        let response = await client.post(request);

        client.bearerToken = response.token;

        let testAuth = await client.get(new TestAuth());
        expect(testAuth.userId).eq("1");
        expect(testAuth.displayName).eq("test jwt");
        expect(testAuth.sessionId).not.empty;
    })

    it ("Does fire onAuthenticationRequired callback on 401", async () => {

        let count = 0;
        client.onAuthenticationRequired = () => {
            count++;
            return Promise.resolve(null);
        }

        try {
            await client.get(new TestAuth());
            assert.fail("should throw");
        } catch (e) {
            var status = (e as ErrorResponse).responseStatus;
            expect(status.errorCode).eq("401");
            expect(status.message).eq("Unauthorized");
            expect(count).eq(1);
        }
    })

    it ("Can use onAuthenticationRequired to auth client", async () => {

        let count = 0;
        client.onAuthenticationRequired = () => {
            count++;
            client.userName = "test";
            client.password = "test";
            return Promise.resolve(null);
        };

        var response = await client.get(new TestAuth());
        expect(count).eq(1);
    })

    it ("Can use onAuthenticationRequired to fetch new token", async () => {

        let count = 0;
        client.onAuthenticationRequired = async () => {
            count++;
            
            var authClient = new JsonServiceClient(TEST_URL);
            authClient.userName = "test";
            authClient.password = "test";
            const response = await authClient.get(new Authenticate());
            client.bearerToken = response.bearerToken;
        };

        var response = await client.get(new TestAuth());
        expect(count).eq(1);
    })

    it ("Can use onAuthenticationRequired to fetch new token after expired token", async () => {

        let count = 0;
        client.onAuthenticationRequired = async () => {
            count++;
            let createFreshJwt = createJwt();
            const freshJwt = await client.post(createFreshJwt);
            client.bearerToken = freshJwt.token;
        };

        let createExpiredJwt = createJwt();
        createExpiredJwt.jwtExpiry = "2000-01-01";
        const expiredJwt = await client.post(createExpiredJwt);

        client.bearerToken = expiredJwt.token;
        var response = await client.get(new TestAuth());
        expect(count).eq(1);
    })

    it ("Can use refreshToken to fetch new token after expired token not using Token Cookies", async () => {

        let count = 0;
        var authClient = new JsonServiceClient(TEST_URL);
        client.userName = "test";
        client.password = "test";
        var request = new Authenticate();
        request.useTokenCookie = false;
        var authResponse = await client.post(request);

        client.refreshToken = authResponse.refreshToken;
        client.setCredentials(null,null);

        let createExpiredJwt = createJwt();
        createExpiredJwt.jwtExpiry = "2000-01-01";
        const expiredJwt = await client.post(createExpiredJwt);

        client.bearerToken = expiredJwt.token;
        var response = await client.get(new TestAuth());

        expect(client.bearerToken).not.eq(expiredJwt.token);
    })

    it ("Can use refreshToken to fetch new token after expired token with explicit useTokenCookie", async () => {

        let count = 0;
        var client = new JsonServiceClient(TEST_URL);
        client.userName = "test";
        client.password = "test";
        client.useTokenCookie = true;
        var authResponse = await client.post(new Authenticate());

        client.refreshToken = authResponse.refreshToken;
        client.setCredentials(null,null);

        let createExpiredJwt = createJwt();
        createExpiredJwt.jwtExpiry = "2000-01-01";
        const expiredJwt = await client.post(createExpiredJwt);

        client.bearerToken = expiredJwt.token;
        client.useTokenCookie = true;
        var response = await client.get(new TestAuth());

        expect(client.bearerToken).eq(null);
    })

    it ("Can reauthenticate after an auto refresh access token", async () => {

        var client = new JsonServiceClient(TEST_URL);
        var auth = new Authenticate();
        auth.provider = "credentials";
        auth.userName = "test";
        auth.password = "test";
        var authResponse = await client.post(auth);

        var refreshToken = authResponse.refreshToken;

        let createExpiredJwt = createJwt();
        createExpiredJwt.jwtExpiry = "2000-01-01";
        const expiredJwt = await client.post(createExpiredJwt);
        var bearerToken = expiredJwt.token;

        await clearSession(client);

        client = new JsonServiceClient(TEST_URL);
        client.bearerToken = bearerToken;
        client.refreshToken = refreshToken;

        auth.password = "notvalid";
        try {
            await client.post(auth);
            assert.fail("should throw");
        } catch(e){
            var status = (e as ErrorResponse).responseStatus;
            expect(status.errorCode).eq("Unauthorized");
            expect(status.message).eq("Invalid Username or Password");
        }
    })

    it ('Does fetch AccessToken using RefreshTokenCookies', async () => {
        let client = new JsonServiceClient(TEST_URL);
        let authResponse = await client.post(new Authenticate({
            provider:"credentials", 
            userName:"test",
            password:"test"
        }));

        expect(client.useTokenCookie).eq(true);

        let request = new Secured({ name:"test" });
        let response = await client.post(request);
        expect(response.result).eq(request.name);

        await client.post(new InvalidateLastAccessToken());

        response = await client.post(request);
        expect(response.result).eq(request.name);
    })

    it ("Invalid RefreshToken throws RefreshTokenException ErrorResponse", async () => {
        var client = new JsonServiceClient(TEST_URL);
        client.refreshToken = "Invalid.Refresh.Token";

        try {
            var response = await client.get(new TestAuth());
            assert.fail("should throw");
        } catch(e) {
            expect(e.type).eq("RefreshTokenException");
            expect(e.responseStatus.errorCode).eq("ArgumentException");
            expect(e.responseStatus.message).eq("Illegal base64url string!");
        }
    })

    it ("Expires RefreshToken throws RefreshTokenException", async () => {
        var client = new JsonServiceClient(TEST_URL);

        let createExpiredJwt = new CreateRefreshJwt();
        createExpiredJwt.jwtExpiry = "2000-01-01";
        const expiredJwt = await client.post(createExpiredJwt);
        client.refreshToken = expiredJwt.token;

        try {
            var response = await client.get(new TestAuth());
            assert.fail("should throw");
        } catch(e) {
            expect(e.type).eq("RefreshTokenException");
            expect(e.responseStatus.errorCode).eq("TokenException");
            expect(e.responseStatus.message).eq("Token has expired");
        }
    })

    it ("Can authenticate with ServerEvents using JWT", done => {
        (async () => {

            if (!supportsServerEvents()) return done();

            var authClient = new JsonServiceClient(TEST_URL);
            
            const request = createJwt();
            let response = await authClient.post(request);

            // Alternatives for browsers is to convert the JWT to a cookie so it's sent in future HTTP requests

            // a) Typed API
            // var client = new JsonServiceClient(TEST_URL);
            // client.setBearerToken(response.token);
            // await client.post(new dtos.ConvertSessionToToken());
            
            // b) Using fetch directly without types
            // var headers = new Headers();
            // headers.set("Authorization", "Bearer " + response.token);
            // await fetch(TEST_URL + "/session-to-token", 
            //     { method:"POST", headers, credentials:"include" });

            // Remote Server needs `new JwtAuthProvider { AllowInQueryString = true }`
            var sseClient = new ServerEventsClient(TEST_URL, ["*"], {
                // Works in both browers + node.exe server apps
                resolveStreamUrl: url => appendQueryString(url, { "ss-tok": response.token }),
                handlers: {
                    onConnect: (e => {
                        sseClient.stop();
                        done();
                    })
                },
                onException: (e:Error) => {
                    expect(JSON.stringify(e)).null;
                },
            });

            // c) also works in browsers:
            // sseClient.serviceClient.setBearerToken(response.token);
            // await sseClient.serviceClient.post(new dtos.ConvertSessionToToken());

            sseClient.start();

        })();
     })

});