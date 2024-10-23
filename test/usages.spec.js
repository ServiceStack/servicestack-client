"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const { expect, assert } = chai;
const index_1 = require("../src/index");
describe('Usages Tests', () => {
    it('Can configure basePath and headers', () => {
        const client = new index_1.JsonServiceClient('https://example.org')
            .apply(c => {
            c.basePath = '/api';
            c.headers = new Headers();
        });
        expect(client.replyBaseUrl).eq('https://example.org/api/');
        expect(client.oneWayBaseUrl).eq('https://example.org/api/');
        expect(Array.from(client.headers.keys()).length).eq(0);
    });
    it('Does map each item and returns result', () => {
        let o = { a: 1, b: 2 };
        let r = (0, index_1.each)(Object.keys(o), (acc, k) => acc[k] = o[k] * 2);
        expect(r.a).eq(2);
        expect(r.b).eq(4);
        r = (0, index_1.each)(Object.keys(o), (acc, k) => acc[k] = o[k] * 2, { c: 1 });
        expect(r.a).eq(2);
        expect(r.b).eq(4);
        expect(r.c).eq(1);
    });
    it('Does allow usage of FormData from node', () => {
        const formData = new FormData();
        formData.append('a', 'b');
    });
});
