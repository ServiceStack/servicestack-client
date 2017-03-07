import { ServerEventMessage, ServerEventReceiver } from '../src/index';
import { ChatMessage, CustomType, SetterType } from './dtos/chat.dtos';
export declare class TestNamedReceiver {
    static FooMethodReceived: CustomType;
    static BarMethodReceived: CustomType;
    static NoSuchMethodReceived: CustomType;
    static NoSuchMethodSelector: string;
    static QuxSetterReceived: CustomType;
    quxSetter: CustomType;
    fooMethod(request: CustomType): void;
    barMethod(request: CustomType): CustomType;
    noSuchMethod(selector: string, message: ServerEventMessage): void;
}
export declare class TestGlobalReceiver {
    static CustomTypeMethodReceived: CustomType;
    static NoSuchMethodReceived: CustomType;
    static NoSuchMethodSelector: string;
    static SetterTypeReceived: SetterType;
    SetterType: SetterType;
    CustomType(request: CustomType): CustomType;
    noSuchMethod(selector: string, message: ServerEventMessage): void;
}
export declare class TestJavaScriptReceiver extends ServerEventReceiver {
    static ChatReceived: ChatMessage;
    static AnnounceReceived: string;
    AnnounceInstance: string;
    static ToggleReceived: string;
    static ToggleRequestReceived: ServerEventMessage;
    static BackgroundImageReceived: string;
    static BackgroundImageRequestReceived: ServerEventMessage;
    chat(request: ChatMessage): void;
    announce(message: string): void;
    toggle(message: string): void;
    backgroundImage(message: string): void;
}
