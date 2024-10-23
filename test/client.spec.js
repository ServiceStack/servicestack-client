"use strict";
/// <reference path="./dtos/test.interfaces.d.ts" />
//import 'cross-fetch/polyfill'
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
const dtos = require("./dtos/techstacks.dtos");
const test_dtos_1 = require("./dtos/test.dtos");
const chai = require("chai");
const index_1 = require("../src/index");
const { expect, assert } = chai;
const TECHSTACKS_URL = "https://techstacks.io";
const TEST_URL = "https://test.servicestack.net";
//Clear existing User Session
const clearSession = (client) => __awaiter(void 0, void 0, void 0, function* () {
    let logout = new test_dtos_1.Authenticate({ provider: "logout" });
    yield client.post(logout);
});
describe('JsonServiceClient Tests', () => {
    let client;
    let testClient;
    beforeEach(() => {
        client = new index_1.JsonServiceClient(TECHSTACKS_URL);
        testClient = new index_1.JsonServiceClient(TEST_URL);
    });
    it('Should get techs response', () => __awaiter(void 0, void 0, void 0, function* () {
        const api = yield client.api(new dtos.GetAllTechnologies());
        expect(api.response.results.length).to.be.greaterThan(0);
        expect(api.completed).eq(true);
        expect(api.succeeded).eq(true);
        expect(api.failed).eq(false);
    }));
    it('Can get multiple responses', () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        let requests = [
            new dtos.AppOverview(),
            new dtos.DeleteTechnology(),
            new dtos.GetAllTechnologies(),
            new dtos.GetAllTechnologyStacks(),
        ];
        let results = yield Promise.all(requests.map((request) => __awaiter(void 0, void 0, void 0, function* () { return ({ request, api: yield client.api(request) }); })));
        let failed = results.filter(x => x.api.failed);
        console.log(`${failed.length} failed`);
        failed.forEach(x => console.log(`    ${x.request.getTypeName()} Request Failed: ${failed.map(x => x.api.errorMessage)}`));
        let succeeded = results.filter(x => x.api.succeeded);
        console.log(`\n${succeeded.length} succeeded: ${succeeded.map(x => x.request.getTypeName()).join(', ')}`);
        let r = (_a = succeeded.find(x => x.request.getTypeName() == 'AppOverview')) === null || _a === void 0 ? void 0 : _a.api.response;
        if (r)
            console.log(`Top 5 Technologies: ${r.topTechnologies.slice(0, 4).map(tech => tech.name).join(', ')}`);
    }));
    it('Should get techstacks overview', () => __awaiter(void 0, void 0, void 0, function* () {
        const api = yield client.api(new dtos.Overview());
        expect(api.response.topTechnologies.length).to.be.greaterThan(0);
    }));
    it('Should throw 405', () => __awaiter(void 0, void 0, void 0, function* () {
        const testClient = new index_1.JsonServiceClient(TEST_URL);
        const api = yield testClient.api(new dtos.Overview());
        expect(api.errorCode).to.be.equal('NotImplementedException');
        expect(api.errorMessage).to.be.equal('The operation does not exist for this service');
    }));
    it('Should throw 401', () => __awaiter(void 0, void 0, void 0, function* () {
        const api = yield client.api(new dtos.CreateTechnology());
        expect(api.errorCode).to.equal("401");
        // nginx reverse proxy might be stripping this, can't reproduce locally or in docker
        // expect(api.errorMessage).to.equal('Unauthorized')
    }));
    it('Should generate default value', () => {
        const request = new test_dtos_1.HelloTypes({ bool: false, int: 0 });
        const requestUrl = (0, index_1.appendQueryString)(TEST_URL, request);
        expect(requestUrl).to.equal(TEST_URL + "?bool=false&int=0");
    });
    it('Should return raw text', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = new test_dtos_1.ReturnString({ data: "0x10" });
        const str = yield testClient.get(request);
        expect(str).eq("0x10");
    }));
    // node-fetch v2 will implement arrayBuffer: https://github.com/bitinn/node-fetch/issues/51#issuecomment-253998195
    // it ('Should return raw bytes', done => {
    //     var request = new ReturnBytes()
    //     request.data = new Uint8Array([0x01])
    //     testClient.get(request)
    //         .then(r => {
    //             console.log('r',r)
    //             expect(r[0]).to.equal(0x01)
    //             done()
    //         }, done)
    // })
    it('Can authenticate with HTTP Basic Auth', () => __awaiter(void 0, void 0, void 0, function* () {
        testClient.userName = "test";
        testClient.password = "test";
        const api = yield testClient.api(new test_dtos_1.TestAuth());
        expect(api.response.userName).to.equal("test");
    }));
    it('Can authenticate with Credentials', () => __awaiter(void 0, void 0, void 0, function* () {
        yield clearSession(testClient);
        const request = new test_dtos_1.Authenticate({
            provider: "credentials",
            userName: "test",
            password: "test",
            rememberMe: true
        });
        let authResponse = yield testClient.post(request);
        expect(authResponse.userId).not.empty;
        expect(authResponse.sessionId).not.empty;
        //authenticated request
        const api = yield testClient.api(new test_dtos_1.TestAuth());
        console.log(api);
        expect(api.response.userName).to.equal("test");
        yield clearSession(testClient);
    }));
    // Test needs review due to httponly nature of jwt token cookies.
    // it ('Can authenticate with BearerToken', async () => {
    //     const request = new Authenticate({
    //         provider: "credentials",
    //         userName: "test",
    //         password: "test",
    //     })
    //     let authApi = await testClient.api(request)
    //     expect(authApi.succeeded)
    //     const jwtToken = testClient.cookies['ss-tok'].value
    //     expect(jwtToken).not.empty
    //
    //     //Clear existing User Session
    //     const logout = new Authenticate({ provider: "logout" })
    //     await testClient.api(logout)
    //
    //     const newClient = new JsonServiceClient(TEST_URL)
    //
    //     let api = await newClient.api(new Authenticate())
    //
    //     expect(api.errorCode).to.equal("401")
    //     expect(api.errorMessage).to.equal("Unauthorized")
    //
    //     //New Client with BearerToken
    //     newClient.bearerToken = jwtToken
    //     api = await newClient.api(new Authenticate())
    //     expect(api.response.userId).not.empty
    //     expect(api.response.sessionId).not.empty
    // })
    it('Should return 401 for failed HTTP Basic Auth requests', () => __awaiter(void 0, void 0, void 0, function* () {
        testClient.userName = "test";
        testClient.password = "wrong";
        testClient.exceptionFilter = (res, error) => {
            expect(error.responseStatus.errorCode).to.be.equal('Unauthorized');
            expect(error.responseStatus.message).to.be.equal('Invalid Username or Password');
        };
        const api = yield testClient.api(new test_dtos_1.TestAuth());
        expect(api.errorCode).to.be.equal('Unauthorized');
        expect(api.errorMessage).to.be.equal('Invalid Username or Password');
    }));
    it('Should return 401 for failed Auth requests (blazor-vue)', () => __awaiter(void 0, void 0, void 0, function* () {
        const client = new index_1.JsonServiceClient("https://blazor-vue.web-templates.io");
        client.exceptionFilter = (res, error) => {
            expect(error.responseStatus.errorCode).to.be.equal('Unauthorized');
            expect(error.responseStatus.message).to.be.equal('Invalid Username or Password');
        };
        const api = yield client.api(new test_dtos_1.Authenticate({
            provider: "credentials",
            userName: "test",
            password: "wrong",
        }));
        if (typeof process != "undefined")
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
        expect(api.errorCode).to.be.equal('Unauthorized');
        expect(api.errorMessage).to.be.equal('Invalid Username or Password');
        if (typeof process != "undefined")
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = 1;
    }));
    it('Should return 401 for failed Auth requests (Test)', () => __awaiter(void 0, void 0, void 0, function* () {
        testClient.exceptionFilter = (res, error) => {
            expect(error.responseStatus.errorCode).to.be.equal('Unauthorized');
            expect(error.responseStatus.message).to.be.equal('Invalid Username or Password');
        };
        const api = yield testClient.api(new test_dtos_1.Authenticate({
            provider: "credentials",
            userName: "test",
            password: "wrong",
        }));
        expect(api.errorCode).to.be.equal('Unauthorized');
        expect(api.errorMessage).to.be.equal('Invalid Username or Password');
    }));
    it('Can POST to EchoTypes', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = new test_dtos_1.EchoTypes({ int: 1, string: 'foo' });
        const api = yield testClient.api(request);
        expect(api.response.int).to.equal(request.int);
        expect(api.response.string).to.equal(request.string);
    }));
    it('Can GET IReturnVoid requests', () => __awaiter(void 0, void 0, void 0, function* () {
        let api = yield testClient.apiVoid(new test_dtos_1.HelloReturnVoid({ id: 1 }), 'GET');
        expect(api.completed).eq(true);
        expect(api.succeeded).eq(true);
        expect(api.failed).eq(false);
    }));
    it('Can POST IReturnVoid requests', () => __awaiter(void 0, void 0, void 0, function* () {
        let api = yield testClient.apiVoid(new test_dtos_1.HelloReturnVoid({ id: 1 }));
        expect(api.completed).eq(true);
        expect(api.succeeded).eq(true);
        expect(api.failed).eq(false);
    }));
    it('Can handle Validation Errors with Camel Casing', () => __awaiter(void 0, void 0, void 0, function* () {
        testClient.requestFilter = req => req.url += "?jsconfig=EmitCamelCaseNames:true";
        const api = yield testClient.api(new test_dtos_1.ThrowValidation());
        expect(api.errorCode).to.be.equal("InclusiveBetween");
        expect(api.errorMessage).to.be.equal("'Age' must be between 1 and 120. You entered 0.");
        expect(api.errors.length).to.be.equal(3);
        expect(api.errors[1].errorCode).to.be.equal("NotEmpty");
        expect(api.errors[1].fieldName).to.be.equal("Required");
        expect(api.errors[1].message).to.be.equal("'Required' must not be empty.");
    }));
    it('Can handle Validation Errors with Pascal Casing', () => __awaiter(void 0, void 0, void 0, function* () {
        testClient.requestFilter = req => req.url += "?jsconfig=EmitCamelCaseNames:false";
        const api = yield testClient.api(new test_dtos_1.ThrowValidation());
        expect(api.errorCode).to.be.equal("InclusiveBetween");
        expect(api.errorMessage).to.be.equal("'Age' must be between 1 and 120. You entered 0.");
        expect(api.errors.length).to.be.equal(3);
        expect(api.errors[1].errorCode).to.be.equal("NotEmpty");
        expect(api.errors[1].fieldName).to.be.equal("Required");
        expect(api.errors[1].message).to.be.equal("'Required' must not be empty.");
    }));
    it('Can GET using only path info', () => __awaiter(void 0, void 0, void 0, function* () {
        const r = yield testClient.get("/hello/World");
        expect(r.result).to.equal("Hello, World!");
    }));
    it('Can GET using absolute url', () => __awaiter(void 0, void 0, void 0, function* () {
        const r = yield testClient.get("https://test.servicestack.net/hello/World");
        expect(r.result).to.equal("Hello, World!");
    }));
    it('Can GET using route and queryString', () => __awaiter(void 0, void 0, void 0, function* () {
        const r = yield testClient.get("/hello", { name: "World" });
        expect(r.result).to.equal("Hello, World!");
    }));
    it('Can GET EchoTypes using route and interface', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = { int: 1, string: "foo" };
        const r = yield testClient.get("/echo/types", request);
        expect(r.int).to.equal(request.int);
        expect(r.string).to.equal(request.string);
    }));
    it('Can query AutoQuery with runtime args', () => __awaiter(void 0, void 0, void 0, function* () {
        let request = new dtos.FindTechnologies({ take: 3 });
        let r = yield client.api(request, { VendorName: "Amazon" });
        expect(r.response.results.length).to.equal(3);
        expect(r.response.results.map(x => x.vendorName)).to.have.members(["Amazon", "Amazon", "Amazon"]);
    }));
    it('Can query AutoQuery with anon object and runtime args', () => __awaiter(void 0, void 0, void 0, function* () {
        let request = { Take: 3, VendorName: "Amazon" };
        let r = yield client.get("/technology/search", request);
        expect(r.results.length).to.equal(3);
        expect(r.results.map(x => x.vendorName)).to.have.members(["Amazon", "Amazon", "Amazon"]);
    }));
    it('Can send raw JSON as object', () => __awaiter(void 0, void 0, void 0, function* () {
        let body = { foo: "bar" };
        let request = new test_dtos_1.SendJson({ id: 1, name: "name" });
        const testClient = new index_1.JsonServiceClient(TEST_URL);
        if (typeof document == "undefined") //fetch in browser ignores custom headers
            testClient.responseFilter = res => expect(res.headers.get("X-Args")).to.eq("1,name");
        const json = yield testClient.postBody(request, body);
        const obj = JSON.parse(json);
        expect(obj["foo"]).to.eq("bar");
    }));
    it('Can send raw JSON as string', () => __awaiter(void 0, void 0, void 0, function* () {
        let body = { foo: "bar" };
        let request = new test_dtos_1.SendJson({ id: 1, name: "name" });
        const testClient = new index_1.JsonServiceClient(TEST_URL);
        if (typeof document == "undefined") //fetch in browser ignores custom headers
            testClient.responseFilter = res => expect(res.headers.get("X-Args")).to.eq("1,name");
        const json = yield testClient.postBody(request, JSON.stringify(body));
        const obj = JSON.parse(json);
        expect(obj["foo"]).to.eq("bar");
    }));
    it('Can send raw string', () => __awaiter(void 0, void 0, void 0, function* () {
        let body = { foo: "bar" };
        let request = new test_dtos_1.SendText({ id: 1, name: "name", contentType: "text/plain" });
        const testClient = new index_1.JsonServiceClient(TEST_URL);
        if (typeof document == "undefined") //fetch in browser ignores custom headers
            testClient.responseFilter = res => expect(res.headers.get("X-Args")).to.eq("1,name");
        const str = yield testClient.postBody(request, "foo");
        expect(str).to.eq("foo");
    }));
    it('Can sendAll batch request', () => __awaiter(void 0, void 0, void 0, function* () {
        const requests = ["foo", "bar", "baz"].map(name => Object.assign(new test_dtos_1.Hello(), { name }));
        testClient.urlFilter = url => expect(url).eq(TEST_URL + "/api/Hello[]");
        const responses = yield testClient.sendAll(requests);
        expect(responses.map(x => x.result)).deep.equals(['Hello, foo!', 'Hello, bar!', 'Hello, baz!']);
        testClient.urlFilter = null;
    }));
    it('Can sendAllOneWay IReturn<T> batch request', () => __awaiter(void 0, void 0, void 0, function* () {
        const requests = ["foo", "bar", "baz"].map(name => Object.assign(new test_dtos_1.Hello(), { name }));
        testClient.urlFilter = url => expect(url).eq(TEST_URL + "/api/Hello[]");
        const response = yield testClient.sendAllOneWay(requests);
        expect(response).to.undefined;
        testClient.urlFilter = null;
    }));
    it('Can sendAllOneWay IReturnVoid batch request', () => __awaiter(void 0, void 0, void 0, function* () {
        const requests = ["foo", "bar", "baz"].map(name => Object.assign(new test_dtos_1.HelloReturnVoid(), { name }));
        testClient.urlFilter = url => expect(url).eq(TEST_URL + "/api/HelloReturnVoid[]");
        const response = yield testClient.sendAllOneWay(requests);
        expect(response).to.undefined;
        testClient.urlFilter = null;
    }));
    it('Should change base path', () => {
        let client = new index_1.JsonServiceClient('https://test.servicestack.net/');
        expect(client.replyBaseUrl).to.eq('https://test.servicestack.net/api/');
        expect(client.oneWayBaseUrl).to.eq('https://test.servicestack.net/api/');
        client.basePath = null;
        expect(client.replyBaseUrl).to.eq('https://test.servicestack.net/json/reply/');
        expect(client.oneWayBaseUrl).to.eq('https://test.servicestack.net/json/oneway/');
        client.basePath = 'api';
        expect(client.replyBaseUrl).to.eq('https://test.servicestack.net/api/');
        expect(client.oneWayBaseUrl).to.eq('https://test.servicestack.net/api/');
    });
});
