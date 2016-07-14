"use strict";
/// <reference path="../typings/index.d.ts" />
var servicestack = require('../src/index');
describe('JsonServiceClient Tests', function () {
    var client;
    beforeEach(function () {
        client = new servicestack.JsonServiceClient('http://test.servicestack.net');
    });
    it('#Should get hello response', function () {
    });
});
//# sourceMappingURL=client.spec.js.map