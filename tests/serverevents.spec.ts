declare var global;

if (typeof this.global == "undefined" && typeof window != "undefined") this.global = window; //browser

declare function require(name:string);
global.EventSource = require("eventsource");

import * as chai from "chai";
import { 
    JsonServiceClient,
    ErrorResponse,
    appendQueryString,
    ServerEventsClient,
    ServerEventConnect, ServerEventJoin, ServerEventLeave, ServerEventUpdate, ServerEventMessage, ServerEventHeartbeat,
    ServerEventUser,
    SingletonInstanceResolver,
    GetEventSubscribers
} from  '../src/index';
import {
    PostChatToChannel, ChatMessage,
    PostRawToChannel,
    PostObjectToChannel, CustomType, SetterType,
    ResetServerEvents
} from './dtos/test.dtos';
import { TechStackDetails } from "./dtos/techstacks.dtos";
import {
    TestNamedReceiver, TestGlobalReceiver, TestJavaScriptReceiver
} from "./receivers"

const run = (states:any[], debug?:Function) => {
    var i = 0;
    const fn = () => {
        if (debug)
            debug(i);

        if (states.length == 0)
            return;

        var next = states[0];
        if (next.test()) {
            states.shift();
            // uncomment to find out the last state that was run
            // console.log("states remaining: " + states.length);
            var ret = next.fn();
            if (ret && ret.then) //Promise
                ret.then(fn)
                   .catch(console.log)
                   .then(fn);
            else
                fn();
        }
    };
    return fn;
}

const pause = () => {
    return new Promise(resolve => setTimeout(resolve, 100));
};

const postChat = (sse:ServerEventsClient, message:string, channel?:string) => {
    var request = new PostChatToChannel();
    request.from = sse.getSubscriptionId();
    request.message = message;
    request.channel = channel || ServerEventsClient.UnknownChannel;
    request.selector = "cmd.chat";

    return sse.serviceClient.post(request);
}

const postRaw = (sse:ServerEventsClient, selector:string, message:string, channel?:string) => {
    var request = new PostRawToChannel();
    request.from = sse.getSubscriptionId();
    request.message = message;
    request.channel = channel || ServerEventsClient.UnknownChannel;
    request.selector = selector;

    return sse.serviceClient.post(request);
}

const postObject = (sse:ServerEventsClient, dto:CustomType, selector?:string, channel?:string) => {
    var request = new PostObjectToChannel();
    request.customType = dto;
    request.channel = channel || ServerEventsClient.UnknownChannel;
    request.selector = selector;

    return sse.serviceClient.post(request);
}

const postObjectSetter = (sse:ServerEventsClient, dto:SetterType) => {
    var request = new PostObjectToChannel();
    request.setterType = dto;
    request.channel = ServerEventsClient.UnknownChannel;
    return sse.serviceClient.post(request);
}

const complete = (done:Function, ...clients:ServerEventsClient[]) => {
    Promise.all(clients.map(x => x.stop()))
        .then(r => done());
}

const SERVER_EVENTS_URL = 'http://test.servicestack.net';
//const SERVER_EVENTS_URL = 'http://localhost:5000';

describe ('ServerEventsClient Tests', () => {

    it ('Can connect to ServerEventsStream', done => {
        var client = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onConnect: (e => {
                    // console.log('onConnect: ', e);
                    complete(done, client);
                })
            }
        }).start();
    })

    it ('Does fire onJoin events', done => {
        var client = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onConnect: ((e:ServerEventConnect) => {
                    chai.expect(e.heartbeatUrl).to.satisfy(x => x.startsWith(SERVER_EVENTS_URL));
                }),
                onCommand: ((e:ServerEventJoin) => {
                    // console.log('onCommand: ', e);
                    chai.expect(client.getConnectionInfo().displayName).to.equal(e.displayName);

                    complete(done, client);
                })
            }
        }).start();
    })

    it ('Does fire onJoin events for multiple Channels', done => {
        var channels = ["A", "B", "C"];
        var joinMsgs:ServerEventJoin[] = []; 

        var client = new ServerEventsClient(SERVER_EVENTS_URL, channels, {
            handlers: {
                onJoin: ((e:ServerEventJoin) => {
                    // console.log(e);
                    joinMsgs.push(e);
                    chai.expect(e.channel).to.equal(channels[joinMsgs.length-1]);
                    chai.expect(client.getConnectionInfo().displayName).to.equal(e.displayName);

                    if (joinMsgs.length == channels.length){
                        complete(done, client);
                    }
                })
            }
        }).start();
    })

    it ('Does fire all callbacks', done => {
        var connectMsgs: ServerEventConnect[] = [];
        var msgs: ServerEventMessage[] = [];
        var commands: ServerEventMessage[] = [];
        var errors = [];

        var states = [];

        var client = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onConnect: (e => connectMsgs.push(e)),
                onCommand: (e => commands.push(e)),
                onMessage: (e => msgs.push(e)),
                onException: (e => errors.push(e))
            },
            onTick: run(states)
        }).start();

        var client2:ServerEventsClient;
        states.unshift(
        {   
            test: () => connectMsgs.length == 1 && commands.filter(x => x.type == "ServerEventJoin").length == 1,
            fn() {
                var connectMsg = connectMsgs[0];
                var joinMsg = commands.filter(x => x.type == "ServerEventJoin")[0];
                chai.expect(connectMsg).to.not.null;
                chai.expect(joinMsg).to.not.null;

                chai.expect(msgs.length).to.equal(0);
                chai.expect(errors.length).to.equal(0);
                chai.expect(commands.length).to.equal(1);

                connectMsgs = [];
                commands = [];

                client2 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
                    handlers: {
                        onConnect: (e => connectMsgs.push(e)),
                    },
                    onTick: run(states)
                }).start();
            }
        },
        {
            test: () => connectMsgs.length == 1 && commands.length == 1,
            fn() {
                var connectMsg = connectMsgs[0];
                var joinMsg = commands.filter(x => x.type == "ServerEventJoin")[0];
                chai.expect(connectMsg).to.not.null;
                chai.expect(joinMsg).to.not.null;

                return client2.stop();
            }
        }, 
        {
            test: () => commands.length == 2,
            fn() {

                var leaveMsg = commands.filter(x => x.type == "ServerEventLeave")[0];
                chai.expect(leaveMsg).to.not.null;
                chai.expect(errors.length).to.equal(0);

                complete(done, client);
            }
        });
    })

    it ('Does receive messages', done => {
        var connectMsgs: ServerEventConnect[] = [];
        var commands: ServerEventMessage[] = [];
        var msgs1: ServerEventMessage[] = [];
        var msgs2: ServerEventMessage[] = [];

        var states = [];

        var client2 = null;
        var client1 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onConnect: (e => connectMsgs.push(e)),
                onCommand: (e => commands.push(e)),
                onMessage: (e => msgs1.push(e))
            },
            onTick: run(states)
        }).start();

        var info1:ServerEventConnect;
        var info2:ServerEventConnect;

        states.unshift({
            test: () => connectMsgs.length > 0 && commands.length > 0,
            fn() {
                client2 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
                    handlers: {
                        onConnect: (e => connectMsgs.push(e)),
                        onMessage: (e => msgs2.push(e))
                    },
                    onTick: run(states)
                }).start();
            }
        }, {test: () => connectMsgs.length > 1 && commands.length > 1,
            fn() {
                info1 = connectMsgs[0];
                return postChat(client1, "hello from client1");
            },
        }, {test: () => msgs1.length >= 1 && msgs2.length >= 1,
            fn(){
                var msg1 = msgs1[0];
                var msg2 = msgs2[0];

                chai.expect(msg1.eventId).to.greaterThan(0);
                chai.expect(msg2.eventId).to.greaterThan(0);

                chai.expect(msg1.selector).to.equal("cmd.chat");
                chai.expect(msg2.selector).to.equal("cmd.chat");

                var chatMsg1:ChatMessage = JSON.parse(msg1.json);
                var chatMsg2:ChatMessage = JSON.parse(msg2.json);

                [chatMsg1, chatMsg2].forEach(chatMsg => {
                    chai.expect(chatMsg.id).to.greaterThan(0);
                    chai.expect(chatMsg.fromUserId).to.equal(info1.userId);
                    chai.expect(chatMsg.fromName).to.equal(info1.displayName);
                });

                chai.expect(msgs1.length).to.equal(1);
                chai.expect(msgs2.length).to.equal(1);

                info2 = connectMsgs[1];
                return postChat(client2, "hello from client2");
            }
        }, {test: () => msgs1.length >= 2 && msgs2.length >= 2,
            fn(){
                var msg1 = msgs1[1];
                var msg2 = msgs2[1];

                var chatMsg1:ChatMessage = JSON.parse(msg1.json);
                var chatMsg2:ChatMessage = JSON.parse(msg2.json);

                [chatMsg1, chatMsg2].forEach(chatMsg => {
                    chai.expect(chatMsg.id).to.greaterThan(0);
                    chai.expect(chatMsg.fromUserId).to.equal(info2.userId);
                    chai.expect(chatMsg.fromName).to.equal(info2.displayName);
                });

                chai.expect(msgs1.length).to.equal(2);
                chai.expect(msgs2.length).to.equal(2);

                complete(done, client1, client2);
            }
        })
        
    })

    it ('Does send multiple heartbeats', function(done) {
        this.timeout(10000);
        
        var heartbeats:ServerEventHeartbeat[] = [];

        var client = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onConnect: ((e:ServerEventConnect) => e.heartbeatIntervalMs = 1000), //override to 1s
                onHeartbeat: (e => {
                    heartbeats.push(e);
                    if (heartbeats.length >= 3) {
                        chai.expect(heartbeats.length).to.greaterThan(2);

                        complete(done, client);
                    }
                }),
            }
        }).start();
    })

    it ('Does reconnect on lost connection', function(done) {
        this.timeout(31000);
        
        var connectMsgs: ServerEventConnect[] = [];
        var msgs1: ServerEventMessage[] = [];

        var states = [];

        var client2 = null;
        var client1 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onConnect: (e => connectMsgs.push(e)),
                onMessage: (e => msgs1.push(e))
            },
            onTick: run(states)
        }).start();

        states.unshift({
            test: () => connectMsgs.length >= 1,
            fn(){
                return postChat(client1, "msg1 from client1");
            }
        }, {test: () => msgs1.length >= 1,
            fn() {
                return client1.serviceClient.post(new ResetServerEvents())
                    .then(r => {
                        client2 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
                            handlers: {
                                onConnect: (e => connectMsgs.push(e)),
                            },
                            onTick: run(states)
                        }).start();
                    });
            }
        }, {test: () => connectMsgs.length >= 3,
            fn() {
                return postChat(client2, "msg2 from client2");
            }
        }, {test: () => msgs1.length >= 2,
            fn() {
                var msg2 = msgs1[1];
                var chatMsg2:ChatMessage = JSON.parse(msg2.json);
                chai.expect(chatMsg2.message).to.equal("msg2 from client2");

                complete(done, client1, client2);
            }
        });
    })

    it ('Does send message to Handler', done => {
        var chatMsgs:ChatMessage[] = [];

        var states = [];
        var client1 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                chat: (chatMsg:ChatMessage, e:ServerEventMessage) => {
                    // console.log(chatMsg);
                    chatMsgs.push(chatMsg);
                }
            },
            onTick: run(states)
        }).start();
        
        states.unshift({
            test: () => client1.hasConnected(),
            fn(){
                return postChat(client1, "msg1");
            }
        }, {test: () => chatMsgs.length >= 1,
            fn(){
                var chatMsg = chatMsgs[chatMsgs.length - 1];
                chai.expect(chatMsg.message).to.equal("msg1");

                return postChat(client1, "msg2");
            }
        }, {test: () => chatMsgs.length >= 2,
            fn(){
                var chatMsg = chatMsgs[chatMsgs.length - 1];
                chai.expect(chatMsg.message).to.equal("msg2");

                complete(done, client1);
            }
        });
    })
    
    it ('Does send string to Handler', done => {
        var announceMsgs:string[] = [];

        var states = [];
        var client1 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                announce: (msg:string, e:ServerEventMessage) => {
                    // console.log(msg, e);
                    announceMsgs.push(msg);
                }
            },
            onTick: run(states)
        }).start();
        
        states.unshift({
            test: () => client1.hasConnected(),
            fn(){
                return postRaw(client1, "cmd.announce", "msg1");
            }
        }, {test: () => announceMsgs.length >= 1,
            fn(){
                var announceMsg = announceMsgs[announceMsgs.length - 1];
                chai.expect(announceMsg).to.equal("msg1");

                return postRaw(client1, "cmd.announce", "msg2");
            }
        }, {test: () => announceMsgs.length >= 2,
            fn(){
                var announceMsg = announceMsgs[announceMsgs.length - 1];
                chai.expect(announceMsg).to.equal("msg2");

                complete(done, client1);
            }
        });
    })

    it ('Does send message to named receiver', function(done) {
        this.timeout(10000);
        
        var msgs1:ServerEventMessage[] = [];

        var states = [];
        var client1 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onMessage: e => msgs1.push(e)
            },
            receivers: {
                test: new TestNamedReceiver()
            },
            onTick: run(states)
        }).start();
        
        states.unshift({
            test: () => client1.hasConnected(),
            fn(){
                var request = new CustomType();
                request.id = 1;
                request.name = "Foo";
                return postObject(client1, request, "test.FooMethod");
            }
        }, {test: () => msgs1.length >= 1,
            fn(){
                var foo = TestNamedReceiver.FooMethodReceived;
                chai.expect(foo).to.not.undefined;
                chai.expect(foo.id).to.equal(1);
                chai.expect(foo.name).to.equal("Foo");

                var request = new CustomType();
                request.id = 2;
                request.name = "Bar";
                return postObject(client1, request, "test.BarMethod");
            } 
        }, {test: () => msgs1.length >= 2,
            fn(){
                var bar = TestNamedReceiver.BarMethodReceived;
                chai.expect(bar).to.not.undefined;
                chai.expect(bar.id).to.equal(2);
                chai.expect(bar.name).to.equal("Bar");

                var request = new CustomType();
                request.id = 3;
                request.name = "Baz";
                return postObject(client1, request, "test.BazMethod");
            }
        }, {test: () => msgs1.length >= 3,
            fn(){
                var baz = TestNamedReceiver.NoSuchMethodReceived;
                chai.expect(baz).to.not.undefined;
                chai.expect(baz.id).to.equal(3);
                chai.expect(baz.name).to.equal("Baz");
                chai.expect(TestNamedReceiver.NoSuchMethodSelector).to.equal("BazMethod");

                var request = new CustomType();
                request.id = 4;
                request.name = "Qux";
                return postObject(client1, request, "test.QuxSetter");
            }
        }, {test: () => msgs1.length >= 4,
            fn(){
                var qux = TestNamedReceiver.QuxSetterReceived;
                chai.expect(qux).to.not.undefined;
                chai.expect(qux.id).to.equal(4);
                chai.expect(qux.name).to.equal("Qux");

                complete(done, client1);
            }
        });        
    })

    it ('Does send message to global receiver', done => {
        var msgs1:ServerEventMessage[] = [];

        var states = [];
        var client1 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onMessage: e => msgs1.push(e)
            },
            onTick: run(states)
        })
        .registerReceiver(new TestGlobalReceiver())
        .start();
        
        states.unshift({
            test: () => client1.hasConnected(),
            fn(){
                var request = new CustomType();
                request.id = 1;
                request.name = "Foo"; 
                return postObject(client1, request);
            }
        }, {test: () => msgs1.length >= 1,
            fn(){
                var foo = TestGlobalReceiver.CustomTypeMethodReceived;
                chai.expect(foo).to.not.undefined;
                chai.expect(foo.id).to.equal(1);
                chai.expect(foo.name).to.equal("Foo");

                complete(done, client1);
            }
        });
    })

    it ('Does set properties on global receiver', done => {
        var msgs1:ServerEventMessage[] = [];

        var states = [];
        var client1 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onMessage: e => msgs1.push(e)
            },
            onTick: run(states)
        })
        .registerReceiver(new TestGlobalReceiver())
        .start();
        
        states.unshift({
            test: () => client1.hasConnected(),
            fn(){
                var request = new SetterType();
                request.id = 1;
                request.name = "Foo"; 
                return postObjectSetter(client1, request);
            }
        }, {test: () => msgs1.length >= 1,
            fn(){
                var foo = TestGlobalReceiver.SetterTypeReceived;
                chai.expect(foo).to.not.undefined;
                chai.expect(foo.id).to.equal(1);
                chai.expect(foo.name).to.equal("Foo");

                complete(done, client1);
            }
        });
    })

    it ('Does send raw string messages', function(done) {
        this.timeout(10000);

        var msgs1:ServerEventMessage[] = [];

        var states = [];
        var client1 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onMessage: e => msgs1.push(e)
            },
            receivers: {
                "css": new TestJavaScriptReceiver()
            },
            onTick: run(states)
        })
        .registerReceiver(new TestJavaScriptReceiver())
        .start();
        
        states.unshift({
            test: () => client1.hasConnected(),
            fn(){
                return postChat(client1, "chat msg");
            }
        }, {test: () => msgs1.length >= 1,
            fn(){
                var chatMsg = TestJavaScriptReceiver.ChatReceived;
                chai.expect(chatMsg).to.not.undefined;
                chai.expect(chatMsg.message).to.equal("chat msg");

                return postRaw(client1, "cmd.announce", "This is your captain speaking...");
            }
        }, {test: () => msgs1.length >= 2,
            fn(){
                var announce = TestJavaScriptReceiver.AnnounceReceived;
                chai.expect(announce).to.equal("This is your captain speaking...");

                return postRaw(client1, "cmd.toggle$#channels", null);
            }
        }, {test: () => msgs1.length >= 3,
            fn(){
                var toggle = TestJavaScriptReceiver.ToggleReceived;
                chai.expect(toggle).to.null;
                var toggleRequest = TestJavaScriptReceiver.ToggleRequestReceived;
                chai.expect(toggleRequest.selector).to.equal("cmd.toggle$#channels");
                chai.expect(toggleRequest.op).to.equal("cmd");
                chai.expect(toggleRequest.target).to.equal("toggle");
                chai.expect(toggleRequest.cssSelector).to.equal("#channels");

                return postRaw(client1, "css.background-image$#top", "url(http://bit.ly/1yIJOBH)");
            }
        }, {test: () => msgs1.length >= 4,
            fn(){
                var bgImage = TestJavaScriptReceiver.BackgroundImageReceived;
                chai.expect(bgImage).to.equal("url(http://bit.ly/1yIJOBH)");
                var bgImageRequest = TestJavaScriptReceiver.BackgroundImageRequestReceived;
                chai.expect(bgImageRequest.selector).to.equal("css.background-image$#top");
                chai.expect(bgImageRequest.op).to.equal("css");
                chai.expect(bgImageRequest.target).to.equal("background-image");
                chai.expect(bgImageRequest.cssSelector).to.equal("#top");

                complete(done, client1);
            }
        });

    })

    it ('Can reuse same instance', done => {
        var msgs1:ServerEventMessage[] = [];

        var states = [];
        var client1 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            resolver: new SingletonInstanceResolver(),
            handlers: {
                onMessage: e => msgs1.push(e)
            },
            receivers: {
                "css": TestJavaScriptReceiver
            },
            onTick: run(states)
        })
        .registerReceiver(TestJavaScriptReceiver)
        .start();
        
        states.unshift({
            test: () => client1.hasConnected(),
            fn(){
                return postRaw(client1, "cmd.announce", "This is your captain speaking...");
            }
        }, {test: () => msgs1.length >= 1,
            fn(){
                var instance:TestJavaScriptReceiver = client1.resolver.tryResolve(TestJavaScriptReceiver);
                chai.expect(instance.AnnounceInstance).to.equal("This is your captain speaking...");

                complete(done, client1);
            }            
        });
    })

    it ('Does receive messages on to clients subscribed on multiple channels', done => {
        var msgsA:ServerEventMessage[] = [];
        var msgsAB:ServerEventMessage[] = [];
        var msgsABC:ServerEventMessage[] = [];
        var msgsABCD:ServerEventMessage[] = [];

        var states = [];
        var clientA = new ServerEventsClient(SERVER_EVENTS_URL, ["A"], {
            handlers: { onMessage: e => msgsA.push(e) }, onTick: run(states)
        });
        var clientAB = new ServerEventsClient(SERVER_EVENTS_URL, ["A", "B"], {
            handlers: { onMessage: e => msgsAB.push(e) }, onTick: run(states)
        });
        var clientABC = new ServerEventsClient(SERVER_EVENTS_URL, ["A", "B", "C"], {
            handlers: { onMessage: e => msgsABC.push(e) }, onTick: run(states)
        });
        var clientABCD = new ServerEventsClient(SERVER_EVENTS_URL, ["A", "B", "C", "D"], {
            handlers: { onMessage: e => msgsABCD.push(e) }, onTick: run(states)
        });
        var allClients = [clientA,clientAB,clientABC,clientABCD];

        allClients.forEach(x => x.start());

        var channelAsubscribers:ServerEventUser[] = [];
        var channelABsubscribers:ServerEventUser[] = [];

        states.unshift({
            test: () => allClients.every(x => x.hasConnected()),
            fn(){
                return Promise.all([
                    clientA.getChannelSubscribers()
                        .then(r => channelAsubscribers = r),
                    clientAB.getChannelSubscribers()
                        .then(r => channelABsubscribers = r)
                ]).then(r => {
                    chai.expect(channelAsubscribers.length).to.equal(4);
                    chai.expect(channelABsubscribers.length).to.equal(4);

                    // console.log("Publishing Msg Batch #1 ...");

                    return Promise.all([
                        postChat(clientA, "#1 hello to A", "A"),
                        postChat(clientA, "#2 hello to B", "B"),
                        postChat(clientA, "#3 hello to C", "C"),
                        postChat(clientA, "#4 hello to D", "D")
                    ]);
                });
            }
        }, {test: () => (msgsA.length + msgsAB.length + msgsABC.length + msgsABCD.length) == 10,
            fn(){
                chai.expect(msgsA.length).to.equal(1);
                chai.expect(msgsAB.length).to.equal(2);
                chai.expect(msgsABC.length).to.equal(3);
                chai.expect(msgsABCD.length).to.equal(4);

                // console.log("Publishing Msg Batch #2 ...");
                return Promise.all([
                    postChat(clientA, "#5 hello to A", "A"),
                    postChat(clientA, "#6 hello to B", "B"),
                    postChat(clientA, "#7 hello to C", "C"),
                    postChat(clientA, "#8 hello to D", "D")
                ]);
            }
        }, {test: () => (msgsA.length + msgsAB.length + msgsABC.length + msgsABCD.length) == 20,
            fn(){
                chai.expect(msgsA.length).to.equal(2);
                chai.expect(msgsAB.length).to.equal(4);
                chai.expect(msgsABC.length).to.equal(6);
                chai.expect(msgsABCD.length).to.equal(8);

                complete(done, ...allClients);
            }
        });
    })

    it ('Does receive all join and leave messages', function(done) {
        this.timeout(10000);

        var joinA:ServerEventJoin[] = [];
        var joinB:ServerEventJoin[] = [];
        var joinAB:ServerEventJoin[] = [];

        var leaveA:ServerEventJoin[] = [];
        var leaveB:ServerEventJoin[] = [];
        var leaveAB:ServerEventJoin[] = [];

        var states = [];
        var clientA = new ServerEventsClient(SERVER_EVENTS_URL, ["A"], {
            handlers: { onJoin: e => joinA.push(e), onLeave: e => leaveA.push(e) }, onTick: run(states)
        });
        var clientB = new ServerEventsClient(SERVER_EVENTS_URL, ["B"], {
            handlers: { onJoin: e => joinB.push(e), onLeave: e => leaveB.push(e) }, onTick: run(states)
        });
        var clientAB = new ServerEventsClient(SERVER_EVENTS_URL, ["A", "B"], {
            handlers: { onJoin: e => joinAB.push(e), onLeave: e => leaveAB.push(e) }, onTick: run(states)
        });

        var allClients = [clientA, clientB, clientAB];

        [clientA, clientB].forEach(x => x.start());

        states.unshift({
            test: () => clientA.hasConnected() && clientB.hasConnected(),
            fn(){
                return clientAB.start();
            }
        }, {test: () => joinA.length >= 2 && joinB.length >= 2 && joinAB.length >= 2,
            fn(){
                chai.expect(joinA.length).to.equal(2);  //A + [(A) B]
                chai.expect(joinB.length).to.equal(2);  //B + [A (B)]
                chai.expect(joinAB.length).to.equal(2); //[(A) B] + [A (B)]

                return Promise.all([
                    clientA.getChannelSubscribers().then(r => 
                        chai.expect(r.length).to.equal(2)),

                    clientB.getChannelSubscribers().then(r => 
                        chai.expect(r.length).to.equal(2)),

                    clientAB.getChannelSubscribers().then(r => 
                        chai.expect(r.length).to.equal(3))
                ])
                .then(r => {
                    const createRequest = (...channels) => {
                        let request = new GetEventSubscribers();
                        request.channels = channels;
                        return request;
                    }
                    return Promise.all([
                        clientA.serviceClient.get(createRequest("A")).then(r => 
                            chai.expect(r.length).to.equal(2)),

                        clientB.serviceClient.get(createRequest("B")).then(r => 
                            chai.expect(r.length).to.equal(2)),

                        clientAB.serviceClient.get(createRequest("A", "B")).then(r => 
                            chai.expect(r.length).to.equal(3))
                    ]);
                })
                .then(r => clientAB.stop())
            }
        }, {test: () => leaveA.length + leaveB.length >= 2,
            fn(){
                return Promise.all([ clientA.stop(), clientB.stop() ])
                    .then(r => {
                        chai.expect(leaveA.length).to.equal(1);
                        chai.expect(leaveB.length).to.equal(1);
                        chai.expect(leaveAB.length).to.equal(0);

                        complete(done);
                    });
            }
        });
    })

    it ('MultiChannel Does receive all join and leave messages', done => {
        var joinA:ServerEventJoin[] = [];
        var joinB:ServerEventJoin[] = [];
        var joinAB:ServerEventJoin[] = [];

        var leaveA:ServerEventJoin[] = [];
        var leaveB:ServerEventJoin[] = [];
        var leaveAB:ServerEventJoin[] = [];

        var states = [];
        var clientA = new ServerEventsClient(SERVER_EVENTS_URL, ["A"], {
            handlers: { onJoin: e => joinA.push(e), onLeave: e => leaveA.push(e) }, onTick: run(states)
        });
        var clientB = new ServerEventsClient(SERVER_EVENTS_URL, ["B"], {
            handlers: { onJoin: e => joinB.push(e), onLeave: e => leaveB.push(e) }, onTick: run(states)
        });
        var clientAB = new ServerEventsClient(SERVER_EVENTS_URL, ["A", "B"], {
            handlers: { onJoin: e => joinAB.push(e), onLeave: e => leaveAB.push(e) }, onTick: run(states)
        });

        var allClients = [clientA, clientB, clientAB];
        clientAB.start();       
        
        states.unshift({
            test: () => clientAB.hasConnected(),
            fn(){
                return Promise.all([clientA.start(), clientB.start()]);
            }
        }, {test: () => joinAB.length >= 4 && joinA.length >= 1 && joinB.length >= 1,
            fn(){
                chai.expect(joinAB.length).to.equal(4); //[(A) B] + [A (B)] + A + B
                chai.expect(joinA.length).to.equal(1);
                chai.expect(joinB.length).to.equal(1);

                return Promise.all([ clientA.stop(), clientB.stop() ])
                    .then(pause);
            }
        }, {test: () => leaveAB.length >= 2,
            fn(){
                chai.expect(leaveAB.length).to.equal(2);
                chai.expect(leaveA.length).to.equal(0);
                chai.expect(leaveB.length).to.equal(0);

                complete(done, clientAB);
            }
        });
    })

    it ('Can subscribe to channels whilst connected', function(done) {
        this.timeout(10000);

        var msgs1:ServerEventMessage[] = [];
        var msgs2:ServerEventMessage[] = [];

        var states = [];
        var client1 = new ServerEventsClient(SERVER_EVENTS_URL, ["A"], {
            handlers: { onMessage: e => msgs1.push(e) }, 
            onTick: run(states)
        }).start();
        var client2 = new ServerEventsClient(SERVER_EVENTS_URL, ["B"], {
            handlers: { onMessage: e => msgs2.push(e) }, 
            onTick: run(states)
        }).start();

        states.unshift({
            test: () => client1.hasConnected() && client2.hasConnected(),
            fn(){
                chai.expect(client1.channels).to.deep.equal(["A"]);

                return postChat(client2, "#1 hello to B", "B");
            }
        }, {test: () => msgs1.length + msgs2.length >= 1,
            fn() {
                chai.expect(msgs1.length).to.equal(0);
                chai.expect(msgs2.length).to.equal(1);

                return client1.subscribeToChannels("B");
            }
        }, {test: () => client1.channels.indexOf("B") >= 0,
            fn() {
                chai.expect(client1.channels).to.deep.equal(["A","B"]);
                chai.expect(client2.channels).to.deep.equal(["B"]);

                chai.expect(client1.eventStreamUri.split ('&')[0]).to.satisfy(x => x.endsWith("?channels=A,B"));
                chai.expect(client2.eventStreamUri.split ('&')[0]).to.satisfy(x => x.endsWith("?channels=B"));

                return Promise.all([
                    postChat(client2, "#2 hello to B", "B"),
                    postChat(client2, "#3 hello to C", "C")
                ]);
            }
        }, {test: () => msgs1.length + msgs2.length >= 3,
            fn(){
                chai.expect(msgs1.length).to.equal(1);
                chai.expect(msgs2.length).to.equal(2);

                return Promise.all([
                    client1.subscribeToChannels("C"),
                    client2.subscribeToChannels("C")
                ]);
            }
        }, {test: () => client1.channels.indexOf("C") >= 0 && client2.channels.indexOf("C") >= 0,
            fn(){
                return postChat(client2, "#4 hello to C", "C");
            }
        }, {test: () => msgs1.length + msgs2.length >= 5,
            fn(){
                chai.expect(client1.channels).to.deep.equal(["A","B","C"]);
                chai.expect(client2.channels).to.deep.equal(["B","C"]);

                chai.expect(client1.eventStreamUri.split ('&')[0]).to.satisfy(x => x.endsWith("?channels=A,B,C"));
                chai.expect(client2.eventStreamUri.split ('&')[0]).to.satisfy(x => x.endsWith("?channels=B,C"));

                chai.expect(msgs1.length).to.equal(2);
                chai.expect(msgs2.length).to.equal(3);

                complete(done, client1, client2);
            }
        });
    })

    it ('Can unsubscribe from channels whilst connected', function(done) {
        this.timeout(10000);

        var msgs1:ServerEventMessage[] = [];
        var msgs2:ServerEventMessage[] = [];

        var states = [];
        var client1 = new ServerEventsClient(SERVER_EVENTS_URL, ["A","B","C"], {
            handlers: { onMessage: e => msgs1.push(e) }, 
            onTick: run(states)
        }).start();
        var client2 = new ServerEventsClient(SERVER_EVENTS_URL, ["B","C"], {
            handlers: { onMessage: e => msgs2.push(e) }, 
            onTick: run(states)
        }).start();

        states.unshift({
            test: () => client1.hasConnected() && client2.hasConnected(),
            fn(){
                chai.expect(client1.channels).to.deep.equal(["A","B","C"]);

                return postChat(client2, "#1 hello to B", "B");
            }
        }, {test: () => msgs1.length + msgs2.length >= 2,
            fn(){
                chai.expect(msgs1.length).to.equal(1);
                chai.expect(msgs2.length).to.equal(1);

                return client1.unsubscribeFromChannels("B");
            }
        }, {test: () => client1.channels.indexOf("B") == -1,
            fn(){
                return Promise.all([
                    postChat(client2, "#2 hello to B", "B"),
                    postChat(client2, "#3 hello to C", "C")
                ]);
            }
        }, {test: () => msgs1.length + msgs2.length >= 5,
            fn(){
                chai.expect(msgs1.length).to.equal(2);
                chai.expect(msgs2.length).to.equal(3);

                chai.expect(client1.channels).to.deep.equal(["A","C"]);
                chai.expect(client2.channels).to.deep.equal(["B","C"]);

                chai.expect(client1.eventStreamUri.split ('&')[0]).to.satisfy(x => x.endsWith("?channels=A,C"));
                chai.expect(client2.eventStreamUri.split ('&')[0]).to.satisfy(x => x.endsWith("?channels=B,C"));

                return Promise.all([
                    client1.unsubscribeFromChannels("C"),
                    client2.unsubscribeFromChannels("C")
                ]).then(r => 
                    postChat(client2, "#4 hello to C", "C")
                );
            }
        }, {test: () => client1.channels.indexOf("C") == -1 && client2.channels.indexOf("C") == -1,
            fn(){
                chai.expect(client1.channels).to.deep.equal(["A"]);
                chai.expect(client2.channels).to.deep.equal(["B"]);

                chai.expect(client1.eventStreamUri.split ('&')[0]).to.satisfy(x => x.endsWith("?channels=A"));
                chai.expect(client2.eventStreamUri.split ('&')[0]).to.satisfy(x => x.endsWith("?channels=B"));

                complete(done, client1, client2);
            }            
        });
    })

    it ('Does fire multiple listeners for custom trigger', done => {
        var msgs1:ServerEventMessage[] = [];
        var msgs2:ServerEventMessage[] = [];

        const handler = (e:ServerEventMessage) => {
            msgs1.push(e);
        };

        var states = [];
        var client1 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            onTick: run(states)
        })
        .addListener("customEvent", handler)
        .addListener("customEvent", e => msgs2.push(e))
        .start();

        var client2 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            onTick: run(states)
        }).start();

        states.unshift({
            test: () => client1.hasConnected() && client2.hasConnected(),
            fn(){
                postRaw(client2, "trigger.customEvent", "arg");
            }
        }, {test: () => msgs1.length >= 1 && msgs2.length >= 1,
            fn(){
                chai.expect(msgs1.length).to.equal(1);
                chai.expect(msgs2.length).to.equal(1);

                client1.removeListener("customEvent", handler);

                postRaw(client2, "trigger.customEvent", "arg");
            }
        }, {test: () => msgs2.length >= 2, 
            fn(){
                chai.expect(msgs1.length).to.equal(1);
                chai.expect(msgs2.length).to.equal(2);

                chai.expect(
                    [...msgs1, ...msgs2].every(x => JSON.parse(x.json) == "arg")
                ).to.be.true;

                complete(done, client1, client2);
            }
        })
    });

    it ("Does raise Error Messages", done => {

        var errors = [];
        var states = [];

        var client1 = new ServerEventsClient('http://chat.servicestack.invalid', ["*"], {
            onException: (e) => {
                chai.expect(e).to.exist;
                errors.push(e);
            },
            onTick: run(states)
        }).start();

        var client2 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            onTick: run(states)
        }).start();
        
        var client3;

        states.unshift({ 
            test: () => errors.length >= 1,
            fn(){
                client3 = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
                    handlers: {
                        onConnect: (e:ServerEventConnect) => {
                            e.heartbeatIntervalMs = 1000;
                        },
                    },
                    onException: function(e) {
                        chai.expect(e).to.exist;
                        errors.push(e);
                    },
                    onTick: run(states)
                }).start();
            }
        }, {test: () => client3.hasConnected() && client2.hasConnected(),
            fn(){
                return client2.serviceClient.post(new ResetServerEvents());
            } 
        }, {test: () => errors.length >= 2,
            fn(){
                // errors.forEach(e => console.log(e.message));
                complete(done, client1, client2, client3);
            }
        });
    })

    it ('Does create EventSource instance withCredentials', () => {
        var client = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {})
            .start();

        chai.expect(client.getEventSourceOptions().withCredentials).eq(true);

        if (typeof window != "undefined")
        {
            chai.expect(client.eventSource.withCredentials).eq(true);
        }

        client.stop();

        client = new ServerEventsClient(SERVER_EVENTS_URL, ["*"], {});
        client.withCredentials = false;
        client.start();

        chai.expect(client.getEventSourceOptions().withCredentials).eq(false);

        if (typeof window != "undefined")
        {
            chai.expect(client.eventSource.withCredentials).eq(false);
        }

        client.stop();
    })

});