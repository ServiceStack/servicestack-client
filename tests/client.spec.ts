/// <reference path="../typings/index.d.ts" />

import * as servicestack from '../src/index';
import * as dtos from "./dtos/techstacks.dtos";
import chai = require('chai');
import {JsonServiceClient} from "../src/index";
import {ErrorResponse} from "../src/index";

describe('JsonServiceClient Tests', () => {
    var client : servicestack.JsonServiceClient;

    beforeEach(() => {
        client = new servicestack.JsonServiceClient('http://techstacks.io/')
    });

    it('Should get techs response', (done) => {
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

    it('Should get techstacks overview', (done) => {
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

    it('Should throw 405', (done) => {
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
});