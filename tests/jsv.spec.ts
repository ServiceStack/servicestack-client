import * as chai from "chai";

const { expect, assert } = chai;
import { 
    JSV,
} from  '../src/index';

describe ('JSV Tests', () => {

    it ('Can serialize to JSV', () => {
        expect(JSV.stringify({Key:"Value"})).eq('{Key:Value}');
        expect(JSV.stringify({ Id: 1234, Name: "TEST", Obj: [{Id: 1, Key: "Value" }] })).eq('{Id:1234,Name:TEST,Obj:[{Id:1,Key:Value}]}');
        expect(JSV.stringify({Float: 1.1, Double: 2.2, Decimal: 3.3})).eq('{Float:1.1,Double:2.2,Decimal:3.3}');
        expect(JSV.stringify("https://url.com")).eq('"https://url.com"');
    })

})