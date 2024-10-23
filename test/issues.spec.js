"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDto = exports.ResponseBase = exports.GetProducts = exports.ResponseStatus = exports.ResponseError = void 0;
const chai = require("chai");
const { expect, assert } = chai;
const index_1 = require("../src/index");
describe('Issues', () => {
    it('Does generate URL', done => {
        let dtoName = (0, index_1.nameOf)(new GetProducts());
        expect(dtoName).eq('GetProducts');
        done();
    });
});
// @DataContract
class ResponseError {
}
exports.ResponseError = ResponseError;
// @DataContract
class ResponseStatus {
}
exports.ResponseStatus = ResponseStatus;
// @Route("/settings/products", "GET")
// @Route("/settings/products/{Id}", "GET")
class GetProducts {
    createResponse() { return new ResponseBase(); }
    getTypeName() { return "GetProducts"; }
}
exports.GetProducts = GetProducts;
class ResponseBase {
}
exports.ResponseBase = ResponseBase;
// @Route("/settings/products", "POST")
// @Route("/settings/products/{Id}", "PUT")
class ProductDto {
    // more...
    createResponse() { return new ResponseBase(); }
    getTypeName() { return "GetProducts"; }
}
exports.ProductDto = ProductDto;
