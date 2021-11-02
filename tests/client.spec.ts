/// <reference path="./dtos/test.interfaces.d.ts" />

import * as dtos from "./dtos/techstacks.dtos";
import { 
    ResponseStatus, ResponseError,
    Authenticate,AuthenticateResponse,
    Hello, HelloResponse,
    HelloTypes,
    ReturnString, ReturnBytes, ReturnStream,
    TestAuth, TestAuthResponse,
    HelloReturnVoid,
    ThrowValidation, ThrowValidationResponse,
    EchoTypes,
    SendJson, SendText, SendRaw,
} from "./dtos/test.dtos";
import * as chai from "chai";
import { 
    JsonServiceClient,
    ErrorResponse,
    appendQueryString,
} from  '../src/index';

declare var process:any;

const expect = chai.expect; 
const assert = chai.assert; 

const TECHSTACKS_URL = "https://www.techstacks.io";
const TEST_URL = "http://test.servicestack.net";

//Clear existing User Session
const clearSession = async (client:JsonServiceClient) => {
    let logout = new Authenticate();
    logout.provider = "logout";
    await client.post(logout);
};

describe ('JsonServiceClient Tests', () => {
    var client : JsonServiceClient;
    var testClient : JsonServiceClient;

    beforeEach(() => {
        client = new JsonServiceClient(TECHSTACKS_URL);
        testClient = new JsonServiceClient(TEST_URL);
    });

    it('Should get techs response', done => {
        var testPromise = new Promise((resolve,reject) => {
            client.get(new dtos.GetAllTechnologies()).then((response) => {
                resolve(response);
            });
        });

        testPromise.then((res: dtos.GetAllTechnologiesResponse) => {
            try {
                chai.expect(res.results.length).to.be.greaterThan(0);
                done();
            } catch(error) {
                done(error);
            }
        },done);
    });

    it('Should get techstacks overview', done => {
        var testPromise = new Promise((resolve,reject) => {
            client.get(new dtos.Overview()).then((response) => {
                resolve(response);
            });
        });

        testPromise.then((res: dtos.OverviewResponse) => {
            try {
                chai.expect(res.topTechnologies.length).to.be.greaterThan(0);
                done();
            } catch(error) {
                done(error);
            }
        },done);
    });

    it('Should throw 405', done => {
        var testClient = new JsonServiceClient('http://test.servicestack.net/');
        var testPromise = new Promise((resolve,reject) => {
            testClient.get(new dtos.Overview()).then((response) => {
                reject(response);
            }).catch((err) => {
                resolve(err);
            });
        });

        testPromise.then((res: ErrorResponse) => {
            try {
                chai.expect(res.responseStatus.errorCode).to.be.equal('NotImplementedException');
                chai.expect(res.responseStatus.message).to.be.equal('The operation \'Overview\' does not exist for this service');
                done();
            } catch(error) {
                done(error);
            }
        },done);
    });

    it('Should throw 401', done => {
        var testPromise = new Promise((resolve,reject) => {
            client.post(new dtos.CreateTechnology()).then((response) => {
                reject(response);
            }).catch((error) => {
                resolve(error);
            })
        });

        testPromise.then((res: ErrorResponse) => {
            try {
                chai.expect(res.responseStatus.errorCode).to.equal("401");
                chai.expect(res.responseStatus.message).to.equal('Unauthorized');
                done();
            } catch(error) {
                done(error);
            }
        },done);
    })

    it ('Should generate default value', () => {
        var request = new HelloTypes();
        request.bool = false;
        request.int = 0;
        var requestUrl = appendQueryString(TEST_URL, request);
        chai.expect(requestUrl).to.equal(TEST_URL + "?bool=false&int=0");
    })

    it ('Should return raw text', async () => {

        let request = new ReturnString();
        request.data = "0x10";

        const str = await testClient.get(request);
        expect(str).eq("0x10");
    })

    // node-fetch v2 will implement arrayBuffer: https://github.com/bitinn/node-fetch/issues/51#issuecomment-253998195
    // it ('Should return raw bytes', done => {
    //     var request = new ReturnBytes();
    //     request.data = new Uint8Array([0x01]);
    //     testClient.get(request)
    //         .then(r => {
    //             console.log('r',r);
    //             chai.expect(r[0]).to.equal(0x01);
    //             done();
    //         }, done);
    // })

    it ('Can authenticate with HTTP Basic Auth', done => {
        testClient.userName = "test";
        testClient.password = "test";

        //authenticated request
        testClient.get(new TestAuth())
            .then(r => {
                chai.expect(r.userName).to.equal("test");
                done();
            }, done);
    })

    it ('Can authenticate with Credentials', async () => {

        await clearSession(testClient);

        var request = new Authenticate();
        request.provider = "credentials";
        request.userName = "test";
        request.password = "test";
        request.rememberMe = true;
        let authResponse = await testClient.post(request);

        chai.expect(authResponse.userId).not.empty;
        chai.expect(authResponse.sessionId).not.empty;

        //authenticated request
        var r = await testClient.get(new TestAuth());
        chai.expect(r.userName).to.equal("test");
    
        await clearSession(testClient);
    })

    it ('Can authenticate with BearerToken', async () => {
        var request = new Authenticate();
        request.provider = "credentials";
        request.userName = "test";
        request.password = "test";
        var authResponse = await testClient.post(request);
        var jwtToken = authResponse.bearerToken;
        chai.expect(jwtToken).not.empty;

        //Clear existing User Session
        var logout = new Authenticate();
        logout.provider = "logout";
        await testClient.post(logout);

        var newClient = new JsonServiceClient(TEST_URL);

        try {
            //New Client without BearerToken should fail
            await newClient.post(new Authenticate());
            chai.assert.fail(0,1, "Should not be allowed to authenticate");
        } catch (e) {
            if (e instanceof chai.AssertionError)
                throw e;

            const status = (e as ErrorResponse).responseStatus;
            chai.expect(status.errorCode).to.equal("401");
            chai.expect(status.message).to.equal("Unauthorized");

            //New Client with BearerToken
            newClient.bearerToken = jwtToken;
            var success = await newClient.post(new Authenticate());
            chai.expect(success.userId).not.empty;
            chai.expect(success.sessionId).not.empty;
        }
    })
    
    it ('Should return 401 for failed HTTP Basic Auth requests', done => {
        testClient.userName = "test";
        testClient.password = "wrong";

        testClient.exceptionFilter = (res,error) => {
            chai.expect(error.responseStatus.errorCode).to.be.equal('Unauthorized');
            chai.expect(error.responseStatus.message).to.be.equal('Invalid Username or Password');
        };

        var testPromise = new Promise((resolve,reject) => {
            testClient.post(new TestAuth()).then(response => {
                reject(response);
            }).catch((error) => {
                resolve(error);
            })
        });

        testPromise.then((res: ErrorResponse) => {
            try {
                chai.expect(res.responseStatus.errorCode).to.be.equal('Unauthorized');
                chai.expect(res.responseStatus.message).to.be.equal('Invalid Username or Password');
                done();
            } catch(error) {
                done(error);
            }
        },done);
    })

    it ('Should return 401 for failed Auth requests (HttpBenchmarks)', async () => {
        
        var client = new JsonServiceClient("https://httpbenchmarks.servicestack.net");
        client.exceptionFilter = (res,error) => {
            chai.expect(error.responseStatus.errorCode).to.be.equal('Unauthorized');
            chai.expect(error.responseStatus.message).to.be.equal('Invalid UserName or Password');
        };

        var request = new dtos.Authenticate();
        request.provider = "credentials";
        request.userName = "test";
        request.password = "wrong";

        process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
        try {
            await client.post(request);
        } catch(error) {
            chai.expect(error.responseStatus.errorCode).to.be.equal('Unauthorized');
            chai.expect(error.responseStatus.message).to.be.equal('Invalid UserName or Password');
        } finally {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = 1;
        }
    })

    it ('Should return 401 for failed Auth requests (Test)', done => {
        testClient.exceptionFilter = (res,error) => {
            chai.expect(error.responseStatus.errorCode).to.be.equal('Unauthorized');
            chai.expect(error.responseStatus.message).to.be.equal('Invalid Username or Password');
        };

        var request = new dtos.Authenticate();
        request.provider = "credentials";
        request.userName = "test";
        request.password = "wrong";

        var testPromise = new Promise((resolve,reject) => {
            testClient.post(request).then(response => {
                reject(response);
            }).catch((error) => {
                resolve(error);
            })
        });

        testPromise.then((res: ErrorResponse) => {
            try {
                chai.expect(res.responseStatus.errorCode).to.be.equal('Unauthorized');
                chai.expect(res.responseStatus.message).to.be.equal('Invalid Username or Password');
                done();
            } catch(error) {
                done(error);
            }
        },done);
    })

    it ('Can POST to EchoTypes', done => {
        let request = new EchoTypes();
        request.int = 1;
        request.string = "foo";

        testClient.post(request)
            .then(r => {
                chai.expect(r.int).to.equal(request.int);
                chai.expect(r.string).to.equal(request.string);
                done();
            }, done);
    })

    it ('Can GET IReturnVoid requests', done => {
        let request = new HelloReturnVoid();
        request.id = 1;
        testClient.get(request)
            .then(r => done(), done)
    })

    it ('Can POST IReturnVoid requests', done => {
        let request = new HelloReturnVoid();
        request.id = 1;
        testClient.post(request)
            .then(r => done(), done)
    })

    it ('Can handle Validation Errors with Camel Casing', done => {
        var testPromise = new Promise((resolve,reject) => {
            testClient.requestFilter = req => {
                req.url += "?jsconfig=EmitCamelCaseNames:true";
            };
            testClient.get(new ThrowValidation()).then((response) => {
                reject(response);
            }).catch((err) => {
                resolve(err);
            });
        });

        testPromise.then((res: ThrowValidationResponse) => {
            try {
                chai.expect(res.responseStatus.errorCode).to.be.equal("InclusiveBetween");
                chai.expect(res.responseStatus.message).to.be.equal("'Age' must be between 1 and 120. You entered 0.");
                chai.expect(res.responseStatus.errors.length).to.be.equal(3);
                chai.expect(res.responseStatus.errors[1].errorCode).to.be.equal("NotEmpty");
                chai.expect(res.responseStatus.errors[1].fieldName).to.be.equal("Required");
                chai.expect(res.responseStatus.errors[1].message).to.be.equal("'Required' must not be empty.");
                done();
            } catch(error) {
                done(error);
            }
        },done);
    })

    it ('Can handle Validation Errors with Pascal Casing', done => {
        var testPromise = new Promise((resolve,reject) => {
            testClient.requestFilter = req => {
                req.url += "?jsconfig=EmitCamelCaseNames:false";
            };
            testClient.get(new ThrowValidation()).then((response) => {
                reject(response);
            }).catch((err) => {
                resolve(err);
            });
        });

        testPromise.then((res: ThrowValidationResponse) => {
            try {
                chai.expect(res.responseStatus.errorCode).to.be.equal("InclusiveBetween");
                chai.expect(res.responseStatus.message).to.be.equal("'Age' must be between 1 and 120. You entered 0.");
                chai.expect(res.responseStatus.errors.length).to.be.equal(3);
                chai.expect(res.responseStatus.errors[1].errorCode).to.be.equal("NotEmpty");
                chai.expect(res.responseStatus.errors[1].fieldName).to.be.equal("Required");
                chai.expect(res.responseStatus.errors[1].message).to.be.equal("'Required' must not be empty.");
                done();
            } catch(error) {
                done(error);
            }
        },done);
    })

    it ('Can GET using only path info', done => {
        testClient.get<HelloResponse>("/hello/World")
            .then(r => {
                chai.expect(r.result).to.equal("Hello, World!");
                done();
            }, done);
    })

    it ('Can GET using absolute url', done => {
        testClient.get<HelloResponse>("http://test.servicestack.net/hello/World")
            .then(r => {
                chai.expect(r.result).to.equal("Hello, World!");
                done();
            }, done);
    })

    it ('Can GET using route and queryString', done => {
        testClient.get<HelloResponse>("/hello", { name: "World" })
            .then(r => {
                chai.expect(r.result).to.equal("Hello, World!");
                done();
            }, done);
    })

    it ('Can GET EchoTypes using route and interface', done => {
        let request:interfaces.EchoTypes = { int: 1, string: "foo" };

        testClient.get<EchoTypes>("/echo/types", request)
            .then(r => {
                chai.expect(r.int).to.equal(request.int);
                chai.expect(r.string).to.equal(request.string);
                done();
            }, done);
    })

    it ('Can query AutoQuery with runtime args', done => {
        let request = new dtos.FindTechnologies();
        request.take = 3;
        
        client.get(request, { VendorName: "Amazon" })
            .then(r => {
                chai.expect(r.results.length).to.equal(3);
                chai.expect(r.results.map(x => x.vendorName)).to.have.members(["Amazon","Amazon","Amazon"]);
                done();
            }, done);
    })

    it ('Can query AutoQuery with anon object and runtime args', done => {
        let request = { Take: 3, VendorName: "Amazon" };
        
        client.get<dtos.QueryResponse<dtos.Technology>>("/technology/search", request)
            .then(r => {
                chai.expect(r.results.length).to.equal(3);
                chai.expect(r.results.map(x => x.vendorName)).to.have.members(["Amazon","Amazon","Amazon"]);
                done();
            }, done);
    })

    it ('Can send raw JSON as object', async () => {
        let body = { foo: "bar" };

        let request = new SendJson();
        request.id = 1;
        request.name = "name";

        var testClient = new JsonServiceClient(TEST_URL);
        if (typeof document == "undefined") //fetch in browser ignores custom headers
            testClient.responseFilter = res => chai.expect(res.headers.get("X-Args")).to.eq("1,name");

        var json = await testClient.postBody(request, body);
        var obj = JSON.parse(json);
        chai.expect(obj["foo"]).to.eq("bar");
    }) 

    it ('Can send raw JSON as string', async () => {
        let body = { foo: "bar" };

        let request = new SendJson();
        request.id = 1;
        request.name = "name";

        var testClient = new JsonServiceClient(TEST_URL);
        if (typeof document == "undefined") //fetch in browser ignores custom headers
            testClient.responseFilter = res => chai.expect(res.headers.get("X-Args")).to.eq("1,name");

        var json = await testClient.postBody(request, JSON.stringify(body));
        var obj = JSON.parse(json);
        chai.expect(obj["foo"]).to.eq("bar");
    }) 

    it ('Can send raw string', async () => {
        let body = { foo: "bar" };

        let request = new SendText();
        request.id = 1;
        request.name = "name";
        request.contentType = "text/plain";

        var testClient = new JsonServiceClient(TEST_URL);
        if (typeof document == "undefined") //fetch in browser ignores custom headers
            testClient.responseFilter = res => chai.expect(res.headers.get("X-Args")).to.eq("1,name");

        var str = await testClient.postBody(request, "foo");
        chai.expect(str).to.eq("foo");
    });

    it ('Can sendAll batch request', async () => {
        const requests = ["foo","bar","baz"].map(name => Object.assign(new Hello(), { name }));

        testClient.urlFilter = url => expect(url).eq(TEST_URL + "/json/reply/Hello[]");

        const responses = await testClient.sendAll(requests);

        expect(responses.map(x => x.result)).deep.equals(['Hello, foo!', 'Hello, bar!', 'Hello, baz!'])

        testClient.urlFilter = null;
    })

    it ('Can sendAllOneWay IReturn<T> batch request', async () => {
        const requests = ["foo","bar","baz"].map(name => Object.assign(new Hello(), { name }));

        testClient.urlFilter = url => expect(url).eq(TEST_URL + "/json/oneway/Hello[]");

        const response = await testClient.sendAllOneWay(requests);

        expect(response).to.undefined;

        testClient.urlFilter = null;
    })

    it ('Can sendAllOneWay IReturnVoid batch request', async () => {
        const requests = ["foo","bar","baz"].map(name => Object.assign(new HelloReturnVoid(), { name }));

        testClient.urlFilter = url => expect(url).eq(TEST_URL + "/json/oneway/HelloReturnVoid[]");

        const response = await testClient.sendAllOneWay(requests);

        expect(response).to.undefined;

        testClient.urlFilter = null;
    })

    it ('Should change base path', () => {
        let client = new JsonServiceClient('https://example.org')
            .useBasePath('/api');
        expect(client.replyBaseUrl).to.eq('https://example.org/api/')
        expect(client.oneWayBaseUrl).to.eq('https://example.org/api/')

        client.useBasePath()
        expect(client.replyBaseUrl).to.eq('https://example.org/json/reply/')
        expect(client.oneWayBaseUrl).to.eq('https://example.org/json/oneway/')
    })

});

