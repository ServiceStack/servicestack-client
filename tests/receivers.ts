import { 
    ServerEventConnect, ServerEventJoin, ServerEventLeave, ServerEventUpdate, ServerEventMessage, ServerEventHeartbeat,
    ServerEventReceiver
} from  '../src/index';

import {
    PostChatToChannel, ChatMessage,
    PostRawToChannel,
    PostObjectToChannel, CustomType, SetterType,
    ResetServerEvents
} from './dtos/test.dtos';

export class TestNamedReceiver {
    static FooMethodReceived: CustomType;
    static BarMethodReceived: CustomType;
    static NoSuchMethodReceived: CustomType;
    static NoSuchMethodSelector: string;
    static QuxSetterReceived: CustomType;

    get quxSetter(){ return TestNamedReceiver.QuxSetterReceived; }
    set quxSetter(value:CustomType) {
        TestNamedReceiver.QuxSetterReceived = value;
    }

    fooMethod(request: CustomType) {
        TestNamedReceiver.FooMethodReceived = request;
    }

    barMethod(request: CustomType): CustomType {
        TestNamedReceiver.BarMethodReceived = request;
        return request;
    }

    noSuchMethod(selector:string, message:ServerEventMessage) {
        var msg:ServerEventMessage  = message;
        try {
            TestNamedReceiver.NoSuchMethodReceived = JSON.parse(message.json);
            TestNamedReceiver.NoSuchMethodSelector = selector;
        } catch(e) {
            console.log('ERROR TestNamedReceiver:', message.json);
        }
    }
}

export class TestGlobalReceiver {
    static CustomTypeMethodReceived: CustomType;
    static NoSuchMethodReceived: CustomType;
    static NoSuchMethodSelector: string;
    static SetterTypeReceived: SetterType;

    set SetterType(value: SetterType) {
        TestGlobalReceiver.SetterTypeReceived = value;
    }

    CustomType(request: CustomType): CustomType {
        TestGlobalReceiver.CustomTypeMethodReceived = request;
        return request;
    }

    noSuchMethod(selector:string, message:ServerEventMessage) {
        var msg:ServerEventMessage  = message;
        TestGlobalReceiver.NoSuchMethodReceived = JSON.parse(message.json);
        TestGlobalReceiver.NoSuchMethodSelector = selector;
    }
}

export class TestJavaScriptReceiver extends ServerEventReceiver {
    static ChatReceived: ChatMessage;
    static AnnounceReceived: string;
    AnnounceInstance: string;
    static ToggleReceived: string;
    static ToggleRequestReceived: ServerEventMessage;
    static BackgroundImageReceived: string;
    static BackgroundImageRequestReceived: ServerEventMessage;

    chat(request: ChatMessage) {
        TestJavaScriptReceiver.ChatReceived = request;
    }

    announce(message:string) {
        TestJavaScriptReceiver.AnnounceReceived = message;
        this.AnnounceInstance = message;
    }

    toggle(message:string) {
        TestJavaScriptReceiver.ToggleReceived = message;
        TestJavaScriptReceiver.ToggleRequestReceived = this.request;
    }

    backgroundImage(message:string) {
        TestJavaScriptReceiver.BackgroundImageReceived = message;
        TestJavaScriptReceiver.BackgroundImageRequestReceived = this.request;
    }
}