"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestJavaScriptReceiver = exports.TestGlobalReceiver = exports.TestNamedReceiver = void 0;
const index_1 = require("../src/index");
class TestNamedReceiver {
    get quxSetter() { return TestNamedReceiver.QuxSetterReceived; }
    set quxSetter(value) {
        TestNamedReceiver.QuxSetterReceived = value;
    }
    fooMethod(request) {
        TestNamedReceiver.FooMethodReceived = request;
    }
    barMethod(request) {
        TestNamedReceiver.BarMethodReceived = request;
        return request;
    }
    noSuchMethod(selector, message) {
        var msg = message;
        try {
            TestNamedReceiver.NoSuchMethodReceived = JSON.parse(message.json);
            TestNamedReceiver.NoSuchMethodSelector = selector;
        }
        catch (e) {
            console.log('ERROR TestNamedReceiver:', message.json);
        }
    }
}
exports.TestNamedReceiver = TestNamedReceiver;
class TestGlobalReceiver {
    set SetterType(value) {
        TestGlobalReceiver.SetterTypeReceived = value;
    }
    CustomType(request) {
        TestGlobalReceiver.CustomTypeMethodReceived = request;
        return request;
    }
    noSuchMethod(selector, message) {
        var msg = message;
        TestGlobalReceiver.NoSuchMethodReceived = JSON.parse(message.json);
        TestGlobalReceiver.NoSuchMethodSelector = selector;
    }
}
exports.TestGlobalReceiver = TestGlobalReceiver;
class TestJavaScriptReceiver extends index_1.ServerEventReceiver {
    chat(request) {
        TestJavaScriptReceiver.ChatReceived = request;
    }
    announce(message) {
        TestJavaScriptReceiver.AnnounceReceived = message;
        this.AnnounceInstance = message;
    }
    toggle(message) {
        TestJavaScriptReceiver.ToggleReceived = message;
        TestJavaScriptReceiver.ToggleRequestReceived = this.request;
    }
    backgroundImage(message) {
        TestJavaScriptReceiver.BackgroundImageReceived = message;
        TestJavaScriptReceiver.BackgroundImageRequestReceived = this.request;
    }
}
exports.TestJavaScriptReceiver = TestJavaScriptReceiver;
