import * as chai from "chai"
const { expect, assert } = chai
import {
    JsonServiceClient,
} from  '../src/index'

describe ('Usages Tests', () => {

    it ('Can configure basePath and headers', () => {
        const client = new JsonServiceClient('https://example.org')
            .apply(c => {
                c.basePath = '/api'
                c.headers = new Headers()
            })

        expect(client.replyBaseUrl).eq('https://example.org/api/')
        expect(client.oneWayBaseUrl).eq('https://example.org/api/')
        expect(Array.from(client.headers.keys()).length).eq(0)
    })

})
