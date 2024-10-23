/// <reference path="./dtos/test.interfaces.d.ts" />

import {  Authenticate,TestAuth, CreateJwt, CreateRefreshJwt, Secured, InvalidateLastAccessToken } from "./dtos/test.dtos";
import * as chai from "chai";
const { expect, assert } = chai
import { 
    JsonServiceClient,
    ServerEventsClient,
    ErrorResponse,
    appendQueryString,
    nameOf
} from  '../src/index';

const TEST_URL = "https://test.servicestack.net";
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

declare let global;
const supportsServerEvents = () => typeof global.EventSource != "undefined";

describe ('JsonServiceClient Auth Tests', () => {

    let client : JsonServiceClient;

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
            let status = (e as ErrorResponse).responseStatus;
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

        let response = await client.get(new TestAuth());
        expect(count).eq(1);
    })

    it ("Can use onAuthenticationRequired to fetch new token", async () => {

        let count = 0;
        client.onAuthenticationRequired = async () => {
            count++;
            
            let authClient = new JsonServiceClient(TEST_URL);
            authClient.userName = "test";
            authClient.password = "test";
            const response = await authClient.get(new Authenticate());
            client.bearerToken = authClient.cookies['ss-tok'].value;
        };

        let response = await client.get(new TestAuth());
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
        let response = await client.get(new TestAuth());
        expect(count).eq(1);
    })

    it ("Can reauthenticate after an auto refresh access token", async () => {

        let client = new JsonServiceClient(TEST_URL);
        let auth = new Authenticate();
        auth.provider = "credentials";
        auth.userName = "test";
        auth.password = "test";
        let authResponse = await client.post(auth);

        let refreshToken = authResponse.refreshToken;

        let createExpiredJwt = createJwt();
        createExpiredJwt.jwtExpiry = "2000-01-01";
        const expiredJwt = await client.post(createExpiredJwt);
        let bearerToken = expiredJwt.token;

        await clearSession(client);

        client = new JsonServiceClient(TEST_URL);
        client.bearerToken = bearerToken;
        client.refreshToken = refreshToken;

        auth.password = "notvalid";
        try {
            await client.post(auth);
            assert.fail("should throw");
        } catch(e){
            let status = (e as ErrorResponse).responseStatus;
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
        let client = new JsonServiceClient(TEST_URL);
        client.refreshToken = "Invalid.Refresh.Token";

        try {
            let response = await client.get(new TestAuth());
            assert.fail("should throw");
        } catch(e) {
            expect(e.type).eq("RefreshTokenException");
            expect(e.responseStatus.errorCode).eq("ArgumentException");
            expect(e.responseStatus.message).eq("Illegal base64url string!");
        }
    })

    it ("Expires RefreshToken throws RefreshTokenException", async () => {
        let client = new JsonServiceClient(TEST_URL);

        let createExpiredJwt = new CreateRefreshJwt();
        createExpiredJwt.jwtExpiry = "2000-01-01";
        const expiredJwt = await client.post(createExpiredJwt);
        client.refreshToken = expiredJwt.token;

        try {
            let response = await client.get(new TestAuth());
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

            let authClient = new JsonServiceClient(TEST_URL);
            
            const request = createJwt();
            let response = await authClient.post(request);

            // Alternatives for browsers is to convert the JWT to a cookie so it's sent in future HTTP requests

            // a) Typed API
            // let client = new JsonServiceClient(TEST_URL);
            // client.setBearerToken(response.token);
            // await client.post(new dtos.ConvertSessionToToken());
            
            // b) Using fetch directly without types
            // let headers = new Headers();
            // headers.set("Authorization", "Bearer " + response.token);
            // await fetch(TEST_URL + "/session-to-token", 
            //     { method:"POST", headers, credentials:"include" });

            // Remote Server needs `new JwtAuthProvider { AllowInQueryString = true }`
            let sseClient = new ServerEventsClient(TEST_URL, ["*"], {
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