/// <reference path="../typings/index.d.ts" />

import * as dtos from "./dtos/techstacks.dtos";
import { 
    ResponseStatus, ResponseError,
    HelloTypes,
    ReturnString, ReturnBytes, ReturnStream,
    TestAuth, TestAuthResponse,
    HelloReturnVoid,
    ThrowValidation, ThrowValidationResponse,
    EchoTypes
} from "./dtos/test.dtos";
import chai = require('chai');
import { 
    JsonServiceClient,
    ErrorResponse,
    appendQueryString,
} from  '../src/index';

describe('JsonServiceClient Tests', () => {
    var client : JsonServiceClient;
    var testClient : JsonServiceClient;

    beforeEach(() => {
        client = new JsonServiceClient('http://techstacks.io/');
        testClient = new JsonServiceClient('http://test.servicestack.net');
    });

    it('Should get techs response', done => {
        var testPromise = new Promise((resolve,reject) => {
            client.get(new dtos.GetAllTechnologies()).then((response) => {
                resolve(response);
            });
        });

        testPromise.then((res: dtos.GetAllTechnologiesResponse) => {
            try {
                chai.expect(res.Results.length).to.be.greaterThan(0);
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
                chai.expect(res.TopTechnologies.length).to.be.greaterThan(0);
                done();
            } catch(error) {
                done(error);
            }
        },done);
    });

    it('Should throw 405', done => {
        var testClient = new JsonServiceClient('https://servicestack.net/');
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
                chai.expect(res.responseStatus.errorCode).to.be.equal(401);
                chai.expect(res.responseStatus.message).to.be.equal('Unauthorized');
                done();
            } catch(error) {
                done(error);
            }
        },done);
    })

    it ('Should generate default value', () => {
        var url = "http://test.servicestack.net";
        var request = new HelloTypes();
        request.bool = false;
        request.int = 0;
        var requestUrl = appendQueryString(url, request);
        chai.expect(requestUrl).to.equal("http://test.servicestack.net?bool=false&int=0");
    })

    it ('Should return raw text', done => {

        var request = new ReturnString();
        request.data = "0x10";

        testClient.get(request)
            .then(s => {
                chai.expect(s).to.equal("0x10");
                done();
            }, done);
    })

    // node-fetch v2 will implement arrayBuffer: https://github.com/bitinn/node-fetch/issues/51#issuecomment-253998195
    // it ('Should return raw bytes', done => {
    //     var request = new ReturnBytes();
    //     request.data = new Uint8Array([0x01]);
    //     test.get(request)
    //         .then(r => {
    //             console.log('r',r);
    //             chai.expect(r[0]).to.equal(0x01);
    //             done();
    //         }, done);
    // })

    it ('Should allow HTTP Basic Auth requests', done => {
        testClient.userName = "test";
        testClient.password = "test";

        testClient.get(new TestAuth())
            .then(r => {
                chai.expect(r.userName).to.equal("test");
                done();
            }, done);
    })

    it ('Should return 401 for failed HTTP Basic Auth requests', done => {
        testClient.userName = "test";
        testClient.password = "wrong";

        testClient.exceptionFilter = (res,error) => {
            chai.expect(error.responseStatus.errorCode).to.be.equal('Unauthorized');
            chai.expect(error.responseStatus.message).to.be.equal('Invalid UserName or Password');
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
                chai.expect(res.responseStatus.message).to.be.equal('Invalid UserName or Password');
                done();
            } catch(error) {
                done(error);
            }
        },done);
    })

    it ('Should return 401 for failed Auth requests (HttpBenchmarks)', done => {
        var client = new JsonServiceClient("https://httpbenchmarks.servicestack.net");
        client.exceptionFilter = (res,error) => {
            chai.expect(error.responseStatus.errorCode).to.be.equal('Unauthorized');
            chai.expect(error.responseStatus.message).to.be.equal('Invalid UserName or Password');
        };

        var request = new dtos.Authenticate();
        request.provider = "credentials";
        request.UserName = "test";
        request.Password = "wrong";

        var testPromise = new Promise((resolve,reject) => {
            client.post(request).then(response => {
                reject(response);
            }).catch((error) => {
                resolve(error);
            })
        });

        testPromise.then((error: ErrorResponse) => {
            try {
                chai.expect(error.responseStatus.errorCode).to.be.equal('Unauthorized');
                chai.expect(error.responseStatus.message).to.be.equal('Invalid UserName or Password');
                done();
            } catch(ex) {
                done(ex);
            }
        },done);
    })

    it ('Should return 401 for failed Auth requests (Test)', done => {
        testClient.exceptionFilter = (res,error) => {
            chai.expect(error.responseStatus.errorCode).to.be.equal('Unauthorized');
            chai.expect(error.responseStatus.message).to.be.equal('Invalid UserName or Password');
        };

        var request = new dtos.Authenticate();
        request.provider = "credentials";
        request.UserName = "test";
        request.Password = "wrong";

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
                chai.expect(res.responseStatus.message).to.be.equal('Invalid UserName or Password');
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
                chai.expect(res.responseStatus.errors[1].message).to.be.equal("'Required' should not be empty.");
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
                chai.expect(res.responseStatus.errors[1].message).to.be.equal("'Required' should not be empty.");
                done();
            } catch(error) {
                done(error);
            }
        },done);
    })
});
