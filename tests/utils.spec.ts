import * as chai from "chai";

const { expect, assert } = chai;
import { 
    JsonServiceClient,
    parseCookie,
    errorResponse,
    errorResponseExcept,
    toObject,
} from  '../src/index';

describe ('Util Tests', () => {
    it ('Can parse cookie', done => {
        var cookie = parseCookie('ss-pid=2quSav3JNK2T3Xbf7MiU; expires=Thu, 12-Mar-2037 12:54:06 GMT; path=/; HttpOnly');
        expect(cookie.name).eq("ss-pid");
        expect(cookie.value).eq("2quSav3JNK2T3Xbf7MiU");
        expect(cookie.path).eq("/");
        expect(cookie.expires.getFullYear()).eq(2037);
        expect(cookie.expires.getMonth() + 1).eq(3);
        expect(cookie.expires.getDate()).eq(12);
        expect(cookie.httpOnly).eq(true);
        done();
    })

    it ('errorMessage returns error summary when no field specified', () => {
        const errorCode = "ERROR_CODE";
        const message = "The Message";

        expect(errorResponse.call({ responseStatus: { message, errorCode } })).eq(message);
        expect(errorResponse.call({ responseStatus: { errorCode } })).eq(errorCode);

        expect(errorResponse.call({ ResponseStatus: { message, errorCode } })).eq(message);
        expect(errorResponse.call({ ResponseStatus: { errorCode } })).eq(errorCode);

        expect(errorResponse.call({ ResponseStatus: { Message: message, ErrorCode: errorCode } })).eq(message);
        expect(errorResponse.call({ ResponseStatus: { ErrorCode: errorCode } })).eq(errorCode);
    })

    it ('errorMessage returns undefined when field specified', () => {
        const errorCode = "ERROR_CODE";
        const message = "The Message";
        const fieldName = "TheField";

        expect(errorResponse.call({ responseStatus: { message, errorCode } }, fieldName)).undefined;
        expect(errorResponse.call({ responseStatus: { errorCode } }, fieldName)).undefined;

        expect(errorResponse.call({ ResponseStatus: { message, errorCode } }, fieldName)).undefined;
        expect(errorResponse.call({ ResponseStatus: { errorCode } }, fieldName)).undefined;

        expect(errorResponse.call({ ResponseStatus: { Message: message, ErrorCode: errorCode } }, fieldName)).undefined;
        expect(errorResponse.call({ ResponseStatus: { ErrorCode: errorCode } }, fieldName)).undefined;
    })

    it ('errorMessage returns field error when field specified', () => {
        const errorCode = "ERROR_CODE";
        const message = "The Message";
        const fieldName = "TheField";
        const fieldMessage = "Field Message";
        const errors = [{ errorCode: "FIELD_ERROR", message: fieldMessage, fieldName }];

        expect(errorResponse.call({ responseStatus: { message, errorCode, errors } }, fieldName)).eq(fieldMessage);
        expect(errorResponse.call({ responseStatus: { errorCode, errors } }, fieldName)).eq(fieldMessage);

        expect(errorResponse.call({ ResponseStatus: { message, errorCode, errors } }, fieldName)).eq(fieldMessage);
        expect(errorResponse.call({ ResponseStatus: { errorCode, errors } }, fieldName)).eq(fieldMessage);

        expect(errorResponse.call({ ResponseStatus: { Message: message, ErrorCode: errorCode, Errors: errors } }, fieldName)).eq(fieldMessage);
        expect(errorResponse.call({ ResponseStatus: { ErrorCode: errorCode, Errors: errors } }, fieldName)).eq(fieldMessage);
    })

    it ('errorResponseExcept returns undefined when Except fieldName exists', () => {
        const errorCode = "ERROR_CODE";
        const message = "The Message";
        const fieldName = "TheField";
        const fieldMessage = "Field Message";
        const errors = [{ errorCode: "FIELD_ERROR", message: fieldMessage, fieldName }];

        expect(errorResponseExcept.call({ responseStatus: { message, errorCode, errors } }, fieldName)).undefined;
        expect(errorResponseExcept.call({ responseStatus: { message, errorCode, errors } }, fieldName.toUpperCase())).undefined;
        expect(errorResponseExcept.call({ responseStatus: { message, errorCode, errors } }, [fieldName])).undefined;
        expect(errorResponseExcept.call({ responseStatus: { message, errorCode, errors } }, [fieldName.toUpperCase()])).undefined;
        expect(errorResponseExcept.call({ responseStatus: { message, errorCode, errors } }, ['AnotherFieldName',fieldName.toUpperCase()])).undefined;
        expect(errorResponseExcept.call({ responseStatus: { message, errorCode, errors } }, `AnotherFieldName,${fieldName.toUpperCase()}`)).undefined;
    })

    it ('errorResponseExcept returns first unspecified error or message summary if no field match found', () => {
        const errorCode = "ERROR_CODE";
        const message = "The Message";
        const fieldName = "TheField";
        const fieldMessage = "Field Message";
        const errors = [{ errorCode: "FIELD_ERROR", message: fieldMessage, fieldName }];

        expect(errorResponseExcept.call({ responseStatus: { message, errorCode, errors } }, ['AnotherFieldName'])).eq(fieldMessage);
        expect(errorResponseExcept.call({ responseStatus: { message, errorCode } }, ['AnotherFieldName'])).eq(message);
        expect(errorResponseExcept.call({ responseStatus: { errorCode } }, ['AnotherFieldName'])).eq(errorCode);
        expect(errorResponseExcept.call({ responseStatus: { message, errorCode } }, [fieldName])).eq(message);
        expect(errorResponseExcept.call({ responseStatus: { errorCode } }, [fieldName])).eq(errorCode);
    })

    it ('returns object with specified field names', () => {
        const o = { a: 1, foo:"bar", active:true };

        expect(toObject.call(o, ['a'])).deep.eq({ a: 1 });
        expect(toObject.call(o, 'a foo unknown'.split(' '))).deep.eq({ a: 1, foo:"bar" });
        expect(toObject.call(o, Object.keys(o))).deep.eq(o);
    })

    it ('Can base64 encode', () => {
        expect(JsonServiceClient.toBase64("Aa1&/:+=!()|[]@")).eq("QWExJi86Kz0hKCl8W11A");
    })
});