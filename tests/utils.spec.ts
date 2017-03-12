/// <reference path="../typings/index.d.ts" />
import * as chai from "chai";

const { expect, assert } = chai;
import { 
    JsonServiceClient,
    parseCookie,
} from  '../src/index';

describe('Util Tests', () => {
    it ('Can parse cookie', done => {
        var cookie = parseCookie('ss-pid=2quSav3JNK2T3Xbf7MiU; expires=Thu, 12-Mar-2037 18:54:06 GMT; path=/; HttpOnly');
        expect(cookie.name).eq("ss-pid");
        expect(cookie.value).eq("2quSav3JNK2T3Xbf7MiU");
        expect(cookie.path).eq("/");
        expect(cookie.expires.getFullYear()).eq(2037);
        expect(cookie.expires.getMonth() + 1).eq(3);
        expect(cookie.expires.getDate()).eq(12);
        expect(cookie.httpOnly).eq(true);
        done();
    })
});