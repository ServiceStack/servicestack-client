import * as chai from "chai";
const { expect, assert } = chai;

import {
    Poco,
    AllCollectionTypes,
    AllTypes,
    SubType,
    HelloAllTypes, HelloAllTypesResponse,
} from "./dtos/test.dtos";
import {
    JsonServiceClient,
    toDateTime,
    toBase64String,
} from '../src/index';


function createPoco(name: string) {
    return new Poco({ name: name });
}

function createAllCollectionTypes(): AllCollectionTypes {
    return new AllCollectionTypes({
        intArray: [
            1,
            2,
            3
        ], intList: [
            4,
            5,
            6
        ], stringArray: [
            "A",
            "B",
            "C"
        ], stringList: [
            "D",
            "E",
            "F"
        ], byteArray: toBase64String("ABC"),
        pocoArray: [
            createPoco("pocoArray")
        ], pocoList: [
            createPoco("pocoList")
        ], pocoLookup: {
            "A": [createPoco("B"), createPoco("C")]
        }, pocoLookupMap: {
            "A": [
                { "B": createPoco("C"), "D": createPoco("E") }
            ]
        }
    });
}

function createHelloAllTypes() {
    return new HelloAllTypes({
        name: "name",
        allTypes: createAllTypes(),
        allCollectionTypes: createAllCollectionTypes()
    });
}

function createAllTypes() {
    return new AllTypes({
        id: 1,
        char: 'c',
        byte: 2,
        short: 3,
        int: 4,
        long: 5,
        uShort: 6,
        uInt: 7,
        uLong: 8,
        float: 1.1,
        double: 2.2,
        decimal: 3.0,
        string: "string",
        dateTime: toDateTime(new Date(2001,0,1)),
        dateTimeOffset: toDateTime(new Date(2001,0,1)),
        timeSpan: "PT1H",
        guid: "ea762009b66c410b9bf5ce21ad519249",
        stringList: ["A", "B", "C"],
        stringArray: ["D", "E", "F"],
        stringMap: {
            "A": "D",
            "B": "E",
            "C": "F",
        },
        intStringMap: { 1: "A", 2: "B", 3: "C" },
        subType: new SubType({ id: 1, name: "name" })
    });
}

function assertHelloAllTypesResponse(dto: HelloAllTypesResponse) {
    expect(dto.result).equals("name");
    assertAllTypes(dto.allTypes);
    assertAllCollectionTypes(dto.allCollectionTypes);
}

function assertAllTypes(dto: AllTypes) {
    expect(dto.id).equals(1);
    expect(dto.byte).equals(2);
    expect(dto.short).equals(3);
    expect(dto.int).equals(4);
    expect(dto.uShort).equals(6);
    expect(dto.uInt).equals(7);
    expect(dto.uLong).equals(8);
    expect(dto.float).equals(1.1);
    expect(dto.double).equals(2.2);
    expect(dto.decimal).equals(3.0);
    expect(dto.string).equals("string");
    expect(dto.dateTime).equals("/Date(978278400000)/");
    expect(dto.dateTimeOffset).equals("/Date(978278400000)/");
    expect(dto.timeSpan).equals("PT1H");
    expect(dto.guid).equals("ea762009b66c410b9bf5ce21ad519249");
    expect(dto.stringList).deep.equals(["A", "B", "C"]);
    expect(dto.stringArray).deep.equals(["D", "E", "F"]);
    expect(dto.stringMap).deep.equals({
        "A": "D",
        "B": "E",
        "C": "F",
    });
    expect(dto.intStringMap).deep.equals({ 1: "A", 2: "B", 3: "C" });
    expect(dto.subType.id).equals(1);
    expect(dto.subType.name).equals("name");
}

function assertAllCollectionTypes(dto: AllCollectionTypes) {
    expect(dto.intArray).deep.equals([1, 2, 3]);
    expect(dto.intList).deep.equals([4, 5, 6]);
    expect(dto.stringArray).deep.equals(["A", "B", "C"]);
    expect(dto.stringList).deep.equals(["D", "E", "F"]);
    expect(dto.byteArray).equals(toBase64String("ABC")); 

    expect(dto.pocoArray.length).equals(1);
    expect(dto.pocoArray[0].name).equals("pocoArray");
    expect(dto.pocoList.length).equals(1);
    expect(dto.pocoList[0].name).equals("pocoList");

    expect(Object.keys(dto.pocoLookup).length).equals(1);
    var pocoLookupValues = dto.pocoLookup["A"];
    expect(pocoLookupValues.length).equals(2);
    expect(pocoLookupValues[0].name).equals("B");
    expect(pocoLookupValues[1].name).equals("C");

    expect(Object.keys(dto.pocoLookupMap).length).equals(1);
    var pocoLookupMapValues = dto.pocoLookupMap["A"];
    expect(Object.keys(pocoLookupMapValues).length).equals(1);
    var pocoLookupMapAList = pocoLookupMapValues[0];
    expect(Object.keys(pocoLookupMapAList).length).equals(2);
    expect(pocoLookupMapAList["B"].name).equals("C");
    expect(pocoLookupMapAList["D"].name).equals("E");
}

const TEST_URL = "http://test.servicestack.net";
function createTestClient() {
    return new JsonServiceClient(TEST_URL);
}

describe ('Serialization Tests', () => {

    it ('Can POST HelloAllTypes', async () => {
        var client = createTestClient();
        var request = createHelloAllTypes();
        var response = await client.post(request);
        assertHelloAllTypesResponse(response);
    });

    it ('Can PUT HelloAllTypes', async () => {
        var client = createTestClient();
        var request = createHelloAllTypes();
        var response = await client.put(request);
        assertHelloAllTypesResponse(response);
    });

})