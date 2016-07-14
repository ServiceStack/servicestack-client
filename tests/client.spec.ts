/// <reference path="../typings/index.d.ts" />
import * as servicestack from '../src/index';

describe('JsonServiceClient Tests', () => {
    var client : servicestack.JsonServiceClient;

    beforeEach(() => {
        client = new servicestack.JsonServiceClient('http://test.servicestack.net');
    });

    it('#Should get hello response', () => {
        
    })
});