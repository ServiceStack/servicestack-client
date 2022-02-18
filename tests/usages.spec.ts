import * as chai from "chai"
const { expect, assert } = chai
import {
    each,
    JsonServiceClient,
} from '../src/index'

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

    it ('Does map each item and returns result', () => {
        let o = { a:1, b:2 }

        let r = each(Object.keys(o), (acc, k) => acc[k] = o[k] * 2)
        expect(r.a).eq(2)
        expect(r.b).eq(4)

        r = each(Object.keys(o), (acc, k) => acc[k] = o[k] * 2, { c: 1 })
        expect(r.a).eq(2)
        expect(r.b).eq(4)
        expect(r.c).eq(1)
    })

})
