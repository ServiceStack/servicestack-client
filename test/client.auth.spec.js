"use strict";
/// <reference path="./dtos/test.interfaces.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_dtos_1 = require("./dtos/test.dtos");
const chai = require("chai");
const { expect, assert } = chai;
const index_1 = require("../src/index");
const TEST_URL = "https://test.servicestack.net";
//const TEST_URL = "http://localhost:56500";
const createJwt = (opt = {}) => {
    const request = Object.assign(new test_dtos_1.CreateJwt(), opt);
    if (!request.userAuthId)
        request.userAuthId = "1";
    if (!request.displayName)
        request.displayName = "test jwt";
    if (!request.email)
        request.email = "test@auth.com";
    return request;
};
//Clear existing User Session
const clearSession = (client) => __awaiter(void 0, void 0, void 0, function* () {
    let logout = new test_dtos_1.Authenticate();
    logout.provider = "logout";
    yield client.post(logout);
});
const supportsServerEvents = () => typeof global.EventSource != "undefined";
describe('JsonServiceClient Auth Tests', () => {
    let client;
    beforeEach(() => {
        client = new index_1.JsonServiceClient(TEST_URL);
    });
    it("Can auth with JWT", () => __awaiter(void 0, void 0, void 0, function* () {
        const request = createJwt();
        let response = yield client.post(request);
        client.bearerToken = response.token;
        let testAuth = yield client.get(new test_dtos_1.TestAuth());
        expect(testAuth.userId).eq("1");
        expect(testAuth.displayName).eq("test jwt");
        expect(testAuth.sessionId).not.empty;
    }));
    it("Does fire onAuthenticationRequired callback on 401", () => __awaiter(void 0, void 0, void 0, function* () {
        let count = 0;
        client.onAuthenticationRequired = () => {
            count++;
            return Promise.resolve(null);
        };
        try {
            yield client.get(new test_dtos_1.TestAuth());
            assert.fail("should throw");
        }
        catch (e) {
            let status = e.responseStatus;
            expect(status.errorCode).eq("401");
            expect(status.message).eq("Unauthorized");
            expect(count).eq(1);
        }
    }));
    it("Can use onAuthenticationRequired to auth client", () => __awaiter(void 0, void 0, void 0, function* () {
        let count = 0;
        client.onAuthenticationRequired = () => {
            count++;
            client.userName = "test";
            client.password = "test";
            return Promise.resolve(null);
        };
        let response = yield client.get(new test_dtos_1.TestAuth());
        expect(count).eq(1);
    }));
    it("Can use onAuthenticationRequired to fetch new token", () => __awaiter(void 0, void 0, void 0, function* () {
        let count = 0;
        client.onAuthenticationRequired = () => __awaiter(void 0, void 0, void 0, function* () {
            count++;
            let authClient = new index_1.JsonServiceClient(TEST_URL);
            authClient.userName = "test";
            authClient.password = "test";
            const response = yield authClient.get(new test_dtos_1.Authenticate());
            client.bearerToken = authClient.cookies['ss-tok'].value;
        });
        let response = yield client.get(new test_dtos_1.TestAuth());
        expect(count).eq(1);
    }));
    it("Can use onAuthenticationRequired to fetch new token after expired token", () => __awaiter(void 0, void 0, void 0, function* () {
        let count = 0;
        client.onAuthenticationRequired = () => __awaiter(void 0, void 0, void 0, function* () {
            count++;
            let createFreshJwt = createJwt();
            const freshJwt = yield client.post(createFreshJwt);
            client.bearerToken = freshJwt.token;
        });
        let createExpiredJwt = createJwt();
        createExpiredJwt.jwtExpiry = "2000-01-01";
        const expiredJwt = yield client.post(createExpiredJwt);
        client.bearerToken = expiredJwt.token;
        let response = yield client.get(new test_dtos_1.TestAuth());
        expect(count).eq(1);
    }));
    it("Can reauthenticate after an auto refresh access token", () => __awaiter(void 0, void 0, void 0, function* () {
        let client = new index_1.JsonServiceClient(TEST_URL);
        let auth = new test_dtos_1.Authenticate();
        auth.provider = "credentials";
        auth.userName = "test";
        auth.password = "test";
        let authResponse = yield client.post(auth);
        let refreshToken = authResponse.refreshToken;
        let createExpiredJwt = createJwt();
        createExpiredJwt.jwtExpiry = "2000-01-01";
        const expiredJwt = yield client.post(createExpiredJwt);
        let bearerToken = expiredJwt.token;
        yield clearSession(client);
        client = new index_1.JsonServiceClient(TEST_URL);
        client.bearerToken = bearerToken;
        client.refreshToken = refreshToken;
        auth.password = "notvalid";
        try {
            yield client.post(auth);
            assert.fail("should throw");
        }
        catch (e) {
            let status = e.responseStatus;
            expect(status.errorCode).eq("Unauthorized");
            expect(status.message).eq("Invalid Username or Password");
        }
    }));
    it('Does fetch AccessToken using RefreshTokenCookies', () => __awaiter(void 0, void 0, void 0, function* () {
        let client = new index_1.JsonServiceClient(TEST_URL);
        let authResponse = yield client.post(new test_dtos_1.Authenticate({
            provider: "credentials",
            userName: "test",
            password: "test"
        }));
        expect(client.useTokenCookie).eq(true);
        let request = new test_dtos_1.Secured({ name: "test" });
        let response = yield client.post(request);
        expect(response.result).eq(request.name);
        yield client.post(new test_dtos_1.InvalidateLastAccessToken());
        response = yield client.post(request);
        expect(response.result).eq(request.name);
    }));
    it("Invalid RefreshToken throws RefreshTokenException ErrorResponse", () => __awaiter(void 0, void 0, void 0, function* () {
        let client = new index_1.JsonServiceClient(TEST_URL);
        client.refreshToken = "Invalid.Refresh.Token";
        try {
            let response = yield client.get(new test_dtos_1.TestAuth());
            assert.fail("should throw");
        }
        catch (e) {
            expect(e.type).eq("RefreshTokenException");
            expect(e.responseStatus.errorCode).eq("ArgumentException");
            expect(e.responseStatus.message).eq("Illegal base64url string!");
        }
    }));
    it("Expires RefreshToken throws RefreshTokenException", () => __awaiter(void 0, void 0, void 0, function* () {
        let client = new index_1.JsonServiceClient(TEST_URL);
        let createExpiredJwt = new test_dtos_1.CreateRefreshJwt();
        createExpiredJwt.jwtExpiry = "2000-01-01";
        const expiredJwt = yield client.post(createExpiredJwt);
        client.refreshToken = expiredJwt.token;
        try {
            let response = yield client.get(new test_dtos_1.TestAuth());
            assert.fail("should throw");
        }
        catch (e) {
            expect(e.type).eq("RefreshTokenException");
            expect(e.responseStatus.errorCode).eq("TokenException");
            expect(e.responseStatus.message).eq("Token has expired");
        }
    }));
    it("Can authenticate with ServerEvents using JWT", done => {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            if (!supportsServerEvents())
                return done();
            let authClient = new index_1.JsonServiceClient(TEST_URL);
            const request = createJwt();
            let response = yield authClient.post(request);
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
            let sseClient = new index_1.ServerEventsClient(TEST_URL, ["*"], {
                // Works in both browers + node.exe server apps
                resolveStreamUrl: url => (0, index_1.appendQueryString)(url, { "ss-tok": response.token }),
                handlers: {
                    onConnect: (e => {
                        sseClient.stop();
                        done();
                    })
                },
                onException: (e) => {
                    expect(JSON.stringify(e)).null;
                },
            });
            // c) also works in browsers:
            // sseClient.serviceClient.setBearerToken(response.token);
            // await sseClient.serviceClient.post(new dtos.ConvertSessionToToken());
            sseClient.start();
        }))();
    });
});
