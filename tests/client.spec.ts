/// <reference path="../typings/index.d.ts" />
/// <reference path="dtos/testing.dtos.ts" />

import * as servicestack from '../src/index';
import {HelloResponse, Hello} from "./dtos/testing.dtos";
import chai = require('chai');

describe('JsonServiceClient Tests', () => {
    var client : servicestack.JsonServiceClient;

    beforeEach(() => {
        client = new servicestack.JsonServiceClient('http://localhost:48088/');
    });

    it('#Should get hello response', (done) => {
        var testPromise = new Promise((resolve,reject) => {
            var request = new Hello();
            request.Name = 'World';
            client.get(request).then((response) => {
                resolve(response.Result);
            });
        });

        testPromise.then((res) => {
            try {
                chai.expect(res).to.equal('Hello, World!');
                done();
            } catch(error) {
                done(error);
            }
        },done);
    })
});