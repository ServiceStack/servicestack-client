/// <reference path="../typings/index.d.ts" />

import * as servicestack from '../src/index';
import * as techstacks from "./dtos/techstacks.dtos";
import * as checkWeb from './dtos/checkweb.dtos';
import chai = require('chai');

describe('JsonServiceClient Tests', () => {
    var client : servicestack.JsonServiceClient;
    var techStacksClient : servicestack.JsonServiceClient;

    beforeEach(() => {
        client = new servicestack.JsonServiceClient('http://localhost:55799/');
        techStacksClient = new servicestack.JsonServiceClient('http://techstacks.io/')
    });

    it('Should get hello response', (done) => {
        var testPromise = new Promise((resolve,reject) => {
            var request = new checkWeb.Hello();
            request.Name = 'World';
            client.get(request).then((response) => {
                resolve(response);
            });
        });

        testPromise.then((res: checkWeb.HelloResponse) => {
            try {
                chai.expect(res.Result).to.equal('World');
                done();
            } catch(error) {
                done(error);
            }
        },done);
    });

    it('Should get techstacks overview', (done) => {
        var testPromise = new Promise((resolve,reject) => {
            techStacksClient.get(new techstacks.Overview()).then((response) => {
                resolve(response);
            });
        });

        testPromise.then((res: techstacks.OverviewResponse) => {
            try {
                chai.expect(res.TopTechnologies.length).to.be.greaterThan(0);
                done();
            } catch(error) {
                done(error);
            }
        },done);
    });
});