"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
globalThis.EventSource = require("eventsource");
const chai = require("chai");
const { expect, assert } = chai;
const index_1 = require("../src/index");
const test_dtos_1 = require("./dtos/test.dtos");
const receivers_1 = require("./receivers");
const run = (states, debug) => {
    let i = 0;
    const fn = () => {
        if (debug)
            debug(i);
        if (states.length == 0)
            return;
        let next = states[0];
        if (next.test()) {
            states.shift();
            // uncomment to find out the last state that was run
            // console.log("states remaining: " + states.length);
            let ret = next.fn();
            if (ret && ret.then) //Promise
                ret.then(fn)
                    .catch(console.log)
                    .then(fn);
            else
                fn();
        }
    };
    return fn;
};
const pause = () => {
    return new Promise(resolve => setTimeout(resolve, 100));
};
const postChat = (sse, message, channel) => {
    const request = new test_dtos_1.PostChatToChannel();
    request.from = sse.getSubscriptionId();
    request.message = message;
    request.channel = channel || index_1.ServerEventsClient.UnknownChannel;
    request.selector = "cmd.chat";
    return sse.serviceClient.post(request);
};
const postRaw = (sse, selector, message, channel) => {
    const request = new test_dtos_1.PostRawToChannel();
    request.from = sse.getSubscriptionId();
    request.message = message;
    request.channel = channel || index_1.ServerEventsClient.UnknownChannel;
    request.selector = selector;
    return sse.serviceClient.post(request);
};
const postObject = (sse, dto, selector, channel) => {
    const request = new test_dtos_1.PostObjectToChannel();
    request.customType = dto;
    request.channel = channel || index_1.ServerEventsClient.UnknownChannel;
    request.selector = selector;
    return sse.serviceClient.post(request);
};
const postObjectSetter = (sse, dto) => {
    const request = new test_dtos_1.PostObjectToChannel();
    request.setterType = dto;
    request.channel = index_1.ServerEventsClient.UnknownChannel;
    return sse.serviceClient.post(request);
};
const complete = (done, ...clients) => {
    Promise.all(clients.map(x => x.stop()))
        .then(r => done());
};
const SERVER_EVENTS_URL = 'https://test.servicestack.net';
//const SERVER_EVENTS_URL = 'http://localhost:5000';
describe('ServerEventsClient Tests', () => {
    it('Can connect to ServerEventsStream', done => {
        const client = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onConnect: (e => {
                    // console.log('onConnect: ', e);
                    complete(done, client);
                })
            }
        }).start();
    });
    it('Does fire onJoin events', done => {
        const client = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onConnect: ((e) => {
                    expect(e.heartbeatUrl).to.satisfy(x => x.startsWith(SERVER_EVENTS_URL));
                }),
                onCommand: ((e) => {
                    // console.log('onCommand: ', e);
                    expect(client.getConnectionInfo().displayName).to.equal(e.displayName);
                    complete(done, client);
                })
            }
        }).start();
    });
    it('Does fire onJoin events for multiple Channels', done => {
        const channels = ["A", "B", "C"];
        const joinMsgs = [];
        const client = new index_1.ServerEventsClient(SERVER_EVENTS_URL, channels, {
            handlers: {
                onJoin: ((e) => {
                    // console.log(e);
                    joinMsgs.push(e);
                    expect(e.channel).to.equal(channels[joinMsgs.length - 1]);
                    expect(client.getConnectionInfo().displayName).to.equal(e.displayName);
                    if (joinMsgs.length == channels.length) {
                        complete(done, client);
                    }
                })
            }
        }).start();
    });
    it('Does fire all callbacks', done => {
        let connectMsgs = [];
        let msgs = [];
        let commands = [];
        let errors = [];
        let states = [];
        const client = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onConnect: (e => connectMsgs.push(e)),
                onCommand: (e => commands.push(e)),
                onMessage: (e => msgs.push(e)),
                onException: (e => errors.push(e))
            },
            onTick: run(states)
        }).start();
        let client2;
        states.unshift({
            test: () => connectMsgs.length == 1 && commands.filter(x => x.type == "ServerEventJoin").length == 1,
            fn() {
                const connectMsg = connectMsgs[0];
                const joinMsg = commands.filter(x => x.type == "ServerEventJoin")[0];
                expect(connectMsg).to.not.null;
                expect(joinMsg).to.not.null;
                expect(msgs.length).to.equal(0);
                expect(errors.length).to.equal(0);
                expect(commands.length).to.equal(1);
                connectMsgs = [];
                commands = [];
                client2 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
                    handlers: {
                        onConnect: (e => connectMsgs.push(e)),
                    },
                    onTick: run(states)
                }).start();
            }
        }, {
            test: () => connectMsgs.length == 1 && commands.length == 1,
            fn() {
                let connectMsg = connectMsgs[0];
                let joinMsg = commands.filter(x => x.type == "ServerEventJoin")[0];
                expect(connectMsg).to.not.null;
                expect(joinMsg).to.not.null;
                return client2.stop();
            }
        }, {
            test: () => commands.length == 2,
            fn() {
                let leaveMsg = commands.filter(x => x.type == "ServerEventLeave")[0];
                expect(leaveMsg).to.not.null;
                expect(errors.length).to.equal(0);
                complete(done, client);
            }
        });
    });
    it('Does receive messages', done => {
        let connectMsgs = [];
        let commands = [];
        let msgs1 = [];
        let msgs2 = [];
        let states = [];
        let client2 = null;
        const client1 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onConnect: (e => connectMsgs.push(e)),
                onCommand: (e => commands.push(e)),
                onMessage: (e => msgs1.push(e))
            },
            onTick: run(states)
        }).start();
        let info1;
        let info2;
        states.unshift({
            test: () => connectMsgs.length > 0 && commands.length > 0,
            fn() {
                client2 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
                    handlers: {
                        onConnect: (e => connectMsgs.push(e)),
                        onMessage: (e => msgs2.push(e))
                    },
                    onTick: run(states)
                }).start();
            }
        }, { test: () => connectMsgs.length > 1 && commands.length > 1,
            fn() {
                info1 = connectMsgs[0];
                return postChat(client1, "hello from client1");
            },
        }, { test: () => msgs1.length >= 1 && msgs2.length >= 1,
            fn() {
                let msg1 = msgs1[0];
                let msg2 = msgs2[0];
                expect(msg1.eventId).to.greaterThan(0);
                expect(msg2.eventId).to.greaterThan(0);
                expect(msg1.selector).to.equal("cmd.chat");
                expect(msg2.selector).to.equal("cmd.chat");
                let chatMsg1 = JSON.parse(msg1.json);
                let chatMsg2 = JSON.parse(msg2.json);
                [chatMsg1, chatMsg2].forEach(chatMsg => {
                    expect(chatMsg.id).to.greaterThan(0);
                    expect(chatMsg.fromUserId).to.equal(info1.userId);
                    expect(chatMsg.fromName).to.equal(info1.displayName);
                });
                expect(msgs1.length).to.equal(1);
                expect(msgs2.length).to.equal(1);
                info2 = connectMsgs[1];
                return postChat(client2, "hello from client2");
            }
        }, { test: () => msgs1.length >= 2 && msgs2.length >= 2,
            fn() {
                let msg1 = msgs1[1];
                let msg2 = msgs2[1];
                let chatMsg1 = JSON.parse(msg1.json);
                let chatMsg2 = JSON.parse(msg2.json);
                [chatMsg1, chatMsg2].forEach(chatMsg => {
                    expect(chatMsg.id).to.greaterThan(0);
                    expect(chatMsg.fromUserId).to.equal(info2.userId);
                    expect(chatMsg.fromName).to.equal(info2.displayName);
                });
                expect(msgs1.length).to.equal(2);
                expect(msgs2.length).to.equal(2);
                complete(done, client1, client2);
            }
        });
    });
    it('Does send multiple heartbeats', function (done) {
        this.timeout(10000);
        let heartbeats = [];
        const client = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onConnect: ((e) => e.heartbeatIntervalMs = 1000),
                onHeartbeat: (e => {
                    heartbeats.push(e);
                    if (heartbeats.length >= 3) {
                        expect(heartbeats.length).to.greaterThan(2);
                        complete(done, client);
                    }
                }),
            }
        }).start();
    });
    it('Does reconnect on lost connection', function (done) {
        this.timeout(31000);
        let connectMsgs = [];
        let msgs1 = [];
        let states = [];
        let client2 = null;
        const client1 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onConnect: (e => connectMsgs.push(e)),
                onMessage: (e => msgs1.push(e))
            },
            onTick: run(states)
        }).start();
        states.unshift({
            test: () => connectMsgs.length >= 1,
            fn() {
                return postChat(client1, "msg1 from client1");
            }
        }, { test: () => msgs1.length >= 1,
            fn() {
                return client1.serviceClient.post(new test_dtos_1.ResetServerEvents())
                    .then(r => {
                    client2 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
                        handlers: {
                            onConnect: (e => connectMsgs.push(e)),
                        },
                        onTick: run(states)
                    }).start();
                });
            }
        }, { test: () => connectMsgs.length >= 3,
            fn() {
                return postChat(client2, "msg2 from client2");
            }
        }, { test: () => msgs1.length >= 2,
            fn() {
                let msg2 = msgs1[1];
                let chatMsg2 = JSON.parse(msg2.json);
                expect(chatMsg2.message).to.equal("msg2 from client2");
                complete(done, client1, client2);
            }
        });
    });
    it('Does send message to Handler', done => {
        let chatMsgs = [];
        let states = [];
        const client1 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                chat: (chatMsg, e) => {
                    // console.log(chatMsg);
                    chatMsgs.push(chatMsg);
                }
            },
            onTick: run(states)
        }).start();
        states.unshift({
            test: () => client1.hasConnected(),
            fn() {
                return postChat(client1, "msg1");
            }
        }, { test: () => chatMsgs.length >= 1,
            fn() {
                let chatMsg = chatMsgs[chatMsgs.length - 1];
                expect(chatMsg.message).to.equal("msg1");
                return postChat(client1, "msg2");
            }
        }, { test: () => chatMsgs.length >= 2,
            fn() {
                let chatMsg = chatMsgs[chatMsgs.length - 1];
                expect(chatMsg.message).to.equal("msg2");
                complete(done, client1);
            }
        });
    });
    it('Does send string to Handler', done => {
        let announceMsgs = [];
        let states = [];
        const client1 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                announce: (msg, e) => {
                    // console.log(msg, e);
                    announceMsgs.push(msg);
                }
            },
            onTick: run(states)
        }).start();
        states.unshift({
            test: () => client1.hasConnected(),
            fn() {
                return postRaw(client1, "cmd.announce", "msg1");
            }
        }, { test: () => announceMsgs.length >= 1,
            fn() {
                let announceMsg = announceMsgs[announceMsgs.length - 1];
                expect(announceMsg).to.equal("msg1");
                return postRaw(client1, "cmd.announce", "msg2");
            }
        }, { test: () => announceMsgs.length >= 2,
            fn() {
                let announceMsg = announceMsgs[announceMsgs.length - 1];
                expect(announceMsg).to.equal("msg2");
                complete(done, client1);
            }
        });
    });
    it('Does send message to named receiver', function (done) {
        this.timeout(10000);
        let msgs1 = [];
        let states = [];
        const client1 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onMessage: e => {
                    //console.log(`msg #${msgs1.length+1}:`, e);
                    msgs1.push(e);
                }
            },
            receivers: {
                test: new receivers_1.TestNamedReceiver()
            },
            onTick: run(states)
        }).start();
        client1.hasConnected();
        states.unshift({
            test: () => client1.hasConnected(),
            fn() {
                const request = new test_dtos_1.CustomType();
                request.id = 1;
                request.name = "Foo";
                return postObject(client1, request, "test.fooMethod");
            }
        }, { test: () => msgs1.length >= 1,
            fn() {
                let foo = receivers_1.TestNamedReceiver.FooMethodReceived;
                expect(foo).to.not.undefined;
                expect(foo.id).to.equal(1);
                expect(foo.name).to.equal("Foo");
                const request = new test_dtos_1.CustomType();
                request.id = 2;
                request.name = "Bar";
                return postObject(client1, request, "test.barMethod");
            }
        }, { test: () => msgs1.length >= 2,
            fn() {
                let bar = receivers_1.TestNamedReceiver.BarMethodReceived;
                expect(bar).to.not.undefined;
                expect(bar.id).to.equal(2);
                expect(bar.name).to.equal("Bar");
                const request = new test_dtos_1.CustomType();
                request.id = 3;
                request.name = "Baz";
                return postObject(client1, request, "test.BazMethod");
            }
        }, { test: () => msgs1.length >= 3,
            fn() {
                let baz = receivers_1.TestNamedReceiver.NoSuchMethodReceived;
                expect(baz).to.not.undefined;
                expect(baz.id).to.equal(3);
                expect(baz.name).to.equal("Baz");
                expect(receivers_1.TestNamedReceiver.NoSuchMethodSelector).to.equal("BazMethod");
                const request = new test_dtos_1.CustomType();
                request.id = 4;
                request.name = "Qux";
                return postObject(client1, request, "test.quxSetter");
            }
        }, { test: () => msgs1.length >= 4,
            fn() {
                let qux = receivers_1.TestNamedReceiver.QuxSetterReceived;
                expect(qux).to.not.undefined;
                expect(qux.id).to.equal(4);
                expect(qux.name).to.equal("Qux");
                complete(done, client1);
            }
        });
    });
    it('Does send message to global receiver', done => {
        let msgs1 = [];
        let states = [];
        const client1 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onMessage: e => msgs1.push(e)
            },
            onTick: run(states)
        })
            .registerReceiver(new receivers_1.TestGlobalReceiver())
            .start();
        states.unshift({
            test: () => client1.hasConnected(),
            fn() {
                const request = new test_dtos_1.CustomType();
                request.id = 1;
                request.name = "Foo";
                return postObject(client1, request);
            }
        }, { test: () => msgs1.length >= 1,
            fn() {
                let foo = receivers_1.TestGlobalReceiver.CustomTypeMethodReceived;
                expect(foo).to.not.undefined;
                expect(foo.id).to.equal(1);
                expect(foo.name).to.equal("Foo");
                complete(done, client1);
            }
        });
    });
    it('Does set properties on global receiver', done => {
        let msgs1 = [];
        let states = [];
        const client1 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onMessage: e => msgs1.push(e)
            },
            onTick: run(states)
        })
            .registerReceiver(new receivers_1.TestGlobalReceiver())
            .start();
        states.unshift({
            test: () => client1.hasConnected(),
            fn() {
                const request = new test_dtos_1.SetterType();
                request.id = 1;
                request.name = "Foo";
                return postObjectSetter(client1, request);
            }
        }, { test: () => msgs1.length >= 1,
            fn() {
                let foo = receivers_1.TestGlobalReceiver.SetterTypeReceived;
                expect(foo).to.not.undefined;
                expect(foo.id).to.equal(1);
                expect(foo.name).to.equal("Foo");
                complete(done, client1);
            }
        });
    });
    it('Does send raw string messages', function (done) {
        this.timeout(10000);
        let msgs1 = [];
        let states = [];
        const client1 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            handlers: {
                onMessage: e => msgs1.push(e)
            },
            receivers: {
                "css": new receivers_1.TestJavaScriptReceiver()
            },
            onTick: run(states)
        })
            .registerReceiver(new receivers_1.TestJavaScriptReceiver())
            .start();
        states.unshift({
            test: () => client1.hasConnected(),
            fn() {
                return postChat(client1, "chat msg");
            }
        }, { test: () => msgs1.length >= 1,
            fn() {
                let chatMsg = receivers_1.TestJavaScriptReceiver.ChatReceived;
                expect(chatMsg).to.not.undefined;
                expect(chatMsg.message).to.equal("chat msg");
                return postRaw(client1, "cmd.announce", "This is your captain speaking...");
            }
        }, { test: () => msgs1.length >= 2,
            fn() {
                let announce = receivers_1.TestJavaScriptReceiver.AnnounceReceived;
                expect(announce).to.equal("This is your captain speaking...");
                return postRaw(client1, "cmd.toggle$#channels", null);
            }
        }, { test: () => msgs1.length >= 3,
            fn() {
                let toggle = receivers_1.TestJavaScriptReceiver.ToggleReceived;
                expect(toggle).to.null;
                let toggleRequest = receivers_1.TestJavaScriptReceiver.ToggleRequestReceived;
                expect(toggleRequest.selector).to.equal("cmd.toggle$#channels");
                expect(toggleRequest.op).to.equal("cmd");
                expect(toggleRequest.target).to.equal("toggle");
                expect(toggleRequest.cssSelector).to.equal("#channels");
                return postRaw(client1, "css.background-image$#top", "url(http://bit.ly/1yIJOBH)");
            }
        }, { test: () => msgs1.length >= 4,
            fn() {
                let bgImage = receivers_1.TestJavaScriptReceiver.BackgroundImageReceived;
                expect(bgImage).to.equal("url(http://bit.ly/1yIJOBH)");
                let bgImageRequest = receivers_1.TestJavaScriptReceiver.BackgroundImageRequestReceived;
                expect(bgImageRequest.selector).to.equal("css.background-image$#top");
                expect(bgImageRequest.op).to.equal("css");
                expect(bgImageRequest.target).to.equal("background-image");
                expect(bgImageRequest.cssSelector).to.equal("#top");
                complete(done, client1);
            }
        });
    });
    it('Can reuse same instance', done => {
        let msgs1 = [];
        let states = [];
        const client1 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            resolver: new index_1.SingletonInstanceResolver(),
            handlers: {
                onMessage: e => msgs1.push(e)
            },
            receivers: {
                "css": receivers_1.TestJavaScriptReceiver
            },
            onTick: run(states)
        })
            .registerReceiver(receivers_1.TestJavaScriptReceiver)
            .start();
        states.unshift({
            test: () => client1.hasConnected(),
            fn() {
                return postRaw(client1, "cmd.announce", "This is your captain speaking...");
            }
        }, { test: () => msgs1.length >= 1,
            fn() {
                let instance = client1.resolver.tryResolve(receivers_1.TestJavaScriptReceiver);
                expect(instance.AnnounceInstance).to.equal("This is your captain speaking...");
                complete(done, client1);
            }
        });
    });
    it('Does receive messages on to clients subscribed on multiple channels', done => {
        let msgsA = [];
        let msgsAB = [];
        let msgsABC = [];
        let msgsABCD = [];
        let states = [];
        const clientA = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["A"], {
            handlers: { onMessage: e => msgsA.push(e) }, onTick: run(states)
        });
        const clientAB = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["A", "B"], {
            handlers: { onMessage: e => msgsAB.push(e) }, onTick: run(states)
        });
        const clientABC = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["A", "B", "C"], {
            handlers: { onMessage: e => msgsABC.push(e) }, onTick: run(states)
        });
        const clientABCD = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["A", "B", "C", "D"], {
            handlers: { onMessage: e => msgsABCD.push(e) }, onTick: run(states)
        });
        let allClients = [clientA, clientAB, clientABC, clientABCD];
        allClients.forEach(x => x.start());
        let channelAsubscribers = [];
        let channelABsubscribers = [];
        states.unshift({
            test: () => allClients.every(x => x.hasConnected()),
            fn() {
                return Promise.all([
                    clientA.getChannelSubscribers()
                        .then(r => channelAsubscribers = r),
                    clientAB.getChannelSubscribers()
                        .then(r => channelABsubscribers = r)
                ]).then(r => {
                    expect(channelAsubscribers.length).to.equal(4);
                    expect(channelABsubscribers.length).to.equal(4);
                    // console.log("Publishing Msg Batch #1 ...");
                    return Promise.all([
                        postChat(clientA, "#1 hello to A", "A"),
                        postChat(clientA, "#2 hello to B", "B"),
                        postChat(clientA, "#3 hello to C", "C"),
                        postChat(clientA, "#4 hello to D", "D")
                    ]);
                });
            }
        }, { test: () => (msgsA.length + msgsAB.length + msgsABC.length + msgsABCD.length) == 10,
            fn() {
                expect(msgsA.length).to.equal(1);
                expect(msgsAB.length).to.equal(2);
                expect(msgsABC.length).to.equal(3);
                expect(msgsABCD.length).to.equal(4);
                // console.log("Publishing Msg Batch #2 ...");
                return Promise.all([
                    postChat(clientA, "#5 hello to A", "A"),
                    postChat(clientA, "#6 hello to B", "B"),
                    postChat(clientA, "#7 hello to C", "C"),
                    postChat(clientA, "#8 hello to D", "D")
                ]);
            }
        }, { test: () => (msgsA.length + msgsAB.length + msgsABC.length + msgsABCD.length) == 20,
            fn() {
                expect(msgsA.length).to.equal(2);
                expect(msgsAB.length).to.equal(4);
                expect(msgsABC.length).to.equal(6);
                expect(msgsABCD.length).to.equal(8);
                complete(done, ...allClients);
            }
        });
    });
    it('Does receive all join and leave messages', function (done) {
        this.timeout(10000);
        let joinA = [];
        let joinB = [];
        let joinAB = [];
        let leaveA = [];
        let leaveB = [];
        let leaveAB = [];
        let states = [];
        const clientA = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["A"], {
            handlers: { onJoin: e => joinA.push(e), onLeave: e => leaveA.push(e) }, onTick: run(states)
        });
        const clientB = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["B"], {
            handlers: { onJoin: e => joinB.push(e), onLeave: e => leaveB.push(e) }, onTick: run(states)
        });
        const clientAB = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["A", "B"], {
            handlers: { onJoin: e => joinAB.push(e), onLeave: e => leaveAB.push(e) }, onTick: run(states)
        });
        let allClients = [clientA, clientB, clientAB];
        [clientA, clientB].forEach(x => x.start());
        states.unshift({
            test: () => clientA.hasConnected() && clientB.hasConnected(),
            fn() {
                return clientAB.start();
            }
        }, { test: () => joinA.length >= 2 && joinB.length >= 2 && joinAB.length >= 2,
            fn() {
                expect(joinA.length).to.equal(2); //A + [(A) B]
                expect(joinB.length).to.equal(2); //B + [A (B)]
                expect(joinAB.length).to.equal(2); //[(A) B] + [A (B)]
                return Promise.all([
                    clientA.getChannelSubscribers().then(r => expect(r.length).to.equal(2)),
                    clientB.getChannelSubscribers().then(r => expect(r.length).to.equal(2)),
                    clientAB.getChannelSubscribers().then(r => expect(r.length).to.equal(3))
                ])
                    .then(r => {
                    const createRequest = (...channels) => {
                        let request = new index_1.GetEventSubscribers();
                        request.channels = channels;
                        return request;
                    };
                    return Promise.all([
                        clientA.serviceClient.get(createRequest("A")).then(r => expect(r.length).to.equal(2)),
                        clientB.serviceClient.get(createRequest("B")).then(r => expect(r.length).to.equal(2)),
                        clientAB.serviceClient.get(createRequest("A", "B")).then(r => expect(r.length).to.equal(3))
                    ]);
                })
                    .then(r => clientAB.stop());
            }
        }, { test: () => leaveA.length + leaveB.length >= 2,
            fn() {
                return Promise.all([clientA.stop(), clientB.stop()])
                    .then(r => {
                    expect(leaveA.length).to.equal(1);
                    expect(leaveB.length).to.equal(1);
                    expect(leaveAB.length).to.equal(0);
                    complete(done);
                });
            }
        });
    });
    it('MultiChannel Does receive all join and leave messages', function (done) {
        this.timeout(10000);
        let joinA = [];
        let joinB = [];
        let joinAB = [];
        let leaveA = [];
        let leaveB = [];
        let leaveAB = [];
        let states = [];
        const clientA = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["A"], {
            handlers: { onJoin: e => joinA.push(e), onLeave: e => leaveA.push(e) }, onTick: run(states)
        });
        const clientB = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["B"], {
            handlers: { onJoin: e => joinB.push(e), onLeave: e => leaveB.push(e) }, onTick: run(states)
        });
        const clientAB = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["A", "B"], {
            handlers: { onJoin: e => joinAB.push(e), onLeave: e => leaveAB.push(e) }, onTick: run(states)
        });
        let allClients = [clientA, clientB, clientAB];
        clientAB.start();
        states.unshift({
            test: () => clientAB.hasConnected(),
            fn() {
                return Promise.all([clientA.start(), clientB.start()]);
            }
        }, { test: () => joinAB.length >= 4 && joinA.length >= 1 && joinB.length >= 1,
            fn() {
                expect(joinAB.length).to.equal(4); //[(A) B] + [A (B)] + A + B
                expect(joinA.length).to.equal(1);
                expect(joinB.length).to.equal(1);
                return Promise.all([clientA.stop(), clientB.stop()])
                    .then(pause);
            }
        }, { test: () => leaveAB.length >= 2,
            fn() {
                expect(leaveAB.length).to.equal(2);
                expect(leaveA.length).to.equal(0);
                expect(leaveB.length).to.equal(0);
                complete(done, clientAB);
            }
        });
    });
    it('Can subscribe to channels whilst connected', function (done) {
        this.timeout(10000);
        let msgs1 = [];
        let msgs2 = [];
        let states = [];
        const client1 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["A"], {
            handlers: { onMessage: e => msgs1.push(e) },
            onTick: run(states)
        }).start();
        const client2 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["B"], {
            handlers: { onMessage: e => msgs2.push(e) },
            onTick: run(states)
        }).start();
        states.unshift({
            test: () => client1.hasConnected() && client2.hasConnected(),
            fn() {
                expect(client1.channels).to.deep.equal(["A"]);
                return postChat(client2, "#1 hello to B", "B");
            }
        }, { test: () => msgs1.length + msgs2.length >= 1,
            fn() {
                expect(msgs1.length).to.equal(0);
                expect(msgs2.length).to.equal(1);
                return client1.subscribeToChannels("B");
            }
        }, { test: () => client1.channels.indexOf("B") >= 0,
            fn() {
                expect(client1.channels).to.deep.equal(["A", "B"]);
                expect(client2.channels).to.deep.equal(["B"]);
                expect(client1.eventStreamUri.split('&')[0]).to.satisfy(x => x.endsWith("?channels=A,B"));
                expect(client2.eventStreamUri.split('&')[0]).to.satisfy(x => x.endsWith("?channels=B"));
                return Promise.all([
                    postChat(client2, "#2 hello to B", "B"),
                    postChat(client2, "#3 hello to C", "C")
                ]);
            }
        }, { test: () => msgs1.length + msgs2.length >= 3,
            fn() {
                expect(msgs1.length).to.equal(1);
                expect(msgs2.length).to.equal(2);
                return Promise.all([
                    client1.subscribeToChannels("C"),
                    client2.subscribeToChannels("C")
                ]);
            }
        }, { test: () => client1.channels.indexOf("C") >= 0 && client2.channels.indexOf("C") >= 0,
            fn() {
                return postChat(client2, "#4 hello to C", "C");
            }
        }, { test: () => msgs1.length + msgs2.length >= 5,
            fn() {
                expect(client1.channels).to.deep.equal(["A", "B", "C"]);
                expect(client2.channels).to.deep.equal(["B", "C"]);
                expect(client1.eventStreamUri.split('&')[0]).to.satisfy(x => x.endsWith("?channels=A,B,C"));
                expect(client2.eventStreamUri.split('&')[0]).to.satisfy(x => x.endsWith("?channels=B,C"));
                expect(msgs1.length).to.equal(2);
                expect(msgs2.length).to.equal(3);
                complete(done, client1, client2);
            }
        });
    });
    it('Can unsubscribe from channels whilst connected', function (done) {
        this.timeout(15000);
        let msgs1 = [];
        let msgs2 = [];
        let states = [];
        const client1 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["A", "B", "C"], {
            handlers: { onMessage: e => msgs1.push(e) },
            onTick: run(states)
        }).start();
        const client2 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["B", "C"], {
            handlers: { onMessage: e => msgs2.push(e) },
            onTick: run(states)
        }).start();
        states.unshift({
            test: () => client1.hasConnected() && client2.hasConnected(),
            fn() {
                expect(client1.channels).to.deep.equal(["A", "B", "C"]);
                return postChat(client2, "#1 hello to B", "B");
            }
        }, { test: () => msgs1.length + msgs2.length >= 2,
            fn() {
                expect(msgs1.length).to.equal(1);
                expect(msgs2.length).to.equal(1);
                return client1.unsubscribeFromChannels("B");
            }
        }, { test: () => client1.channels.indexOf("B") == -1,
            fn() {
                return Promise.all([
                    postChat(client2, "#2 hello to B", "B"),
                    postChat(client2, "#3 hello to C", "C")
                ]);
            }
        }, { test: () => msgs1.length + msgs2.length >= 5,
            fn() {
                expect(msgs1.length).to.equal(2);
                expect(msgs2.length).to.equal(3);
                expect(client1.channels).to.deep.equal(["A", "C"]);
                expect(client2.channels).to.deep.equal(["B", "C"]);
                expect(client1.eventStreamUri.split('&')[0]).to.satisfy(x => x.endsWith("?channels=A,C"));
                expect(client2.eventStreamUri.split('&')[0]).to.satisfy(x => x.endsWith("?channels=B,C"));
                return Promise.all([
                    client1.unsubscribeFromChannels("C"),
                    client2.unsubscribeFromChannels("C")
                ]).then(r => postChat(client2, "#4 hello to C", "C"));
            }
        }, { test: () => client1.channels.indexOf("C") == -1 && client2.channels.indexOf("C") == -1,
            fn() {
                expect(client1.channels).to.deep.equal(["A"]);
                expect(client2.channels).to.deep.equal(["B"]);
                expect(client1.eventStreamUri.split('&')[0]).to.satisfy(x => x.endsWith("?channels=A"));
                expect(client2.eventStreamUri.split('&')[0]).to.satisfy(x => x.endsWith("?channels=B"));
                complete(done, client1, client2);
            }
        });
    });
    it('Does fire multiple listeners for custom trigger', done => {
        let msgs1 = [];
        let msgs2 = [];
        const handler = (e) => {
            msgs1.push(e);
        };
        let states = [];
        const client1 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            onTick: run(states)
        })
            .addListener("customEvent", handler)
            .addListener("customEvent", e => msgs2.push(e))
            .start();
        const client2 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            onTick: run(states)
        }).start();
        states.unshift({
            test: () => client1.hasConnected() && client2.hasConnected(),
            fn() {
                postRaw(client2, "trigger.customEvent", "arg");
            }
        }, { test: () => msgs1.length >= 1 && msgs2.length >= 1,
            fn() {
                expect(msgs1.length).to.equal(1);
                expect(msgs2.length).to.equal(1);
                client1.removeListener("customEvent", handler);
                postRaw(client2, "trigger.customEvent", "arg");
            }
        }, { test: () => msgs2.length >= 2,
            fn() {
                expect(msgs1.length).to.equal(1);
                expect(msgs2.length).to.equal(2);
                expect([...msgs1, ...msgs2].every(x => JSON.parse(x.json) == "arg")).to.be.true;
                complete(done, client1, client2);
            }
        });
    });
    it("Does raise Error Messages", done => {
        let errors = [];
        let states = [];
        const client1 = new index_1.ServerEventsClient('http://chat.servicestack.invalid', ["*"], {
            onException: (e) => {
                expect(e).to.exist;
                errors.push(e);
            },
            onTick: run(states)
        }).start();
        const client2 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
            onTick: run(states)
        }).start();
        let client3;
        states.unshift({
            test: () => errors.length >= 1,
            fn() {
                client3 = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {
                    handlers: {
                        onConnect: (e) => {
                            e.heartbeatIntervalMs = 1000;
                        },
                    },
                    onException: function (e) {
                        expect(e).to.exist;
                        errors.push(e);
                    },
                    onTick: run(states)
                }).start();
            }
        }, { test: () => client3.hasConnected() && client2.hasConnected(),
            fn() {
                return client2.serviceClient.post(new test_dtos_1.ResetServerEvents());
            }
        }, { test: () => errors.length >= 2,
            fn() {
                // errors.forEach(e => console.log(e.message));
                complete(done, client1, client2, client3);
            }
        });
    });
    it('Does create EventSource instance withCredentials', () => {
        let client = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {})
            .start();
        expect(client.getEventSourceOptions().withCredentials).eq(true);
        if (typeof window != "undefined") {
            expect(client.eventSource.withCredentials).eq(true);
        }
        client.stop();
        client = new index_1.ServerEventsClient(SERVER_EVENTS_URL, ["*"], {});
        client.withCredentials = false;
        client.start();
        expect(client.getEventSourceOptions().withCredentials).eq(false);
        if (typeof window != "undefined") {
            expect(client.eventSource.withCredentials).eq(false);
        }
        client.stop();
    });
});
