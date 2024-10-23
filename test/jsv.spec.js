"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const { expect, assert } = chai;
const index_1 = require("../src/index");
describe('JSV Tests', () => {
    it('Can serialize to JSV', () => {
        expect(index_1.JSV.stringify({ Key: "Value" })).eq('{Key:Value}');
        expect(index_1.JSV.stringify({ Id: 1234, Name: "TEST", Obj: [{ Id: 1, Key: "Value" }] })).eq('{Id:1234,Name:TEST,Obj:[{Id:1,Key:Value}]}');
        expect(index_1.JSV.stringify({ Float: 1.1, Double: 2.2, Decimal: 3.3 })).eq('{Float:1.1,Double:2.2,Decimal:3.3}');
        expect(index_1.JSV.stringify("https://url.com")).eq('"https://url.com"');
        expect(index_1.JSV.stringify("1,2,3")).eq('"1,2,3"');
    });
});
