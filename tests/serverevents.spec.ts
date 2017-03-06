/// <reference path="../typings/index.d.ts" />

declare var global;
declare function require(name:string);
global.EventSource = require("eventsource");

import * as chai from "chai";
import { 
    JsonServiceClient,
    ErrorResponse,
    appendQueryString,
    ServerEventsClient,
    ISseConnect, ISseJoin, ISseLeave, ISseUpdate, ISseMessage, ISseHeartbeat
} from  '../src/index';
import {
    PostChatToChannel, ChatMessage,
    PostRawToChannel,
    PostObjectToChannel, CustomType, SetterType
} from './dtos/chat.dtos';

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
            // console.log("states remaining: " + states.length);
            var ret = next.fn();
            if (ret && ret.then) //Promise
                ret.then(() => fn(), () => fn());
            else
                fn();
        }
    };
    return fn;
}

const postChat = (sse:ServerEventsClient, message:string, channel?:string) => {
    var request = new PostChatToChannel();
    request.from = sse.getSubscriptionId();
    request.message = message;
    request.channel = channel || ServerEventsClient.UnknownChannel;
    request.selector = "cmd.chat";

    return sse.client.post(request);
}

const postRaw = (sse:ServerEventsClient, selector:string, message:string, channel?:string) => {
    var request = new PostRawToChannel();
    request.from = sse.getSubscriptionId();
    request.message = message;
    request.channel = channel || ServerEventsClient.UnknownChannel;
    request.selector = selector;

    return sse.client.post(request);
}

const postObject = (sse:ServerEventsClient, dto:CustomType, selector:string, channel?:string) => {
    var request = new PostObjectToChannel();
    request.customType = dto;
    request.channel = channel || ServerEventsClient.UnknownChannel;
    request.selector = selector;

    return sse.client.post(request);
}

const postObjectSetter = (sse:ServerEventsClient, dto:SetterType) => {
    var request = new PostObjectToChannel();
    request.setterType = dto;
    request.channel = ServerEventsClient.UnknownChannel;
    return sse.client.post(request);
}

describe('ServerEventsClient Tests', () => {

    it('Can connect to ServerEventsStream', done => {
        var client = new ServerEventsClient('http://chat.servicestack.net', ["*"], {
            handlers: {
                onConnect: (e => {
                    console.log('onConnect: ', e);
                    done();
                })
            }
        });
    })

    it('Does fire onJoin events', done => {
        var client = new ServerEventsClient('http://chat.servicestack.net', ["*"], {
            handlers: {
                onConnect: (e => {
                    chai.expect(e.heartbeatUrl).to.satisfy(x => x.startsWith("http://chat.servicestack.net"));
                }),
                onCommand: ((e:ISseJoin) => {
                    console.log('onCommand: ', e);
                    chai.expect(client.getConnectionInfo().displayName).to.equal(e.displayName);
                    done();
                })
            }
        });
    })

    it('Does fire onJoin events for multiple Channels', done => {
        var channels = ["A", "B", "C"];
        var joinMsgs:ISseJoin[] = []; 

        var client = new ServerEventsClient('http://chat.servicestack.net', channels, {
            handlers: {
                onJoin: ((e:ISseJoin) => {
                    console.log(e);
                    joinMsgs.push(e);
                    chai.expect(e.channel).to.equal(channels[joinMsgs.length-1]);
                    chai.expect(client.getConnectionInfo().displayName).to.equal(e.displayName);

                    if (joinMsgs.length == channels.length)
                        done();
                })
            }
        });
    })

    it('Does fire all callbacks', done => {
        var connectMsgs: ISseConnect[] = [];
        var msgs: ISseMessage[] = [];
        var commands: ISseMessage[] = [];
        var errors = [];

        var states = [];

        var client = new ServerEventsClient('http://chat.servicestack.net', ["*"], {
            handlers: {
                onConnect: (e => connectMsgs.push(e)),
                onCommand: (e => commands.push(e)),
                onMessage: (e => msgs.push(e)),
                onException: (e => errors.push(e))
            },
            onTick: run(states)
        });

        var client2;
        states.unshift(
        {   
            test: () => connectMsgs.length == 1 && commands.filter(x => x.type == "ISseJoin").length == 1,
            fn() {
                var connectMsg = connectMsgs[0];
                var joinMsg = commands.filter(x => x.type == "ISseJoin")[0];
                chai.expect(connectMsg).to.not.null;
                chai.expect(joinMsg).to.not.null;

                chai.expect(msgs.length).to.equal(0);
                chai.expect(errors.length).to.equal(0);
                chai.expect(commands.length).to.equal(1);

                connectMsgs = [];
                commands = [];

                client2 = new ServerEventsClient('http://chat.servicestack.net', ["*"], {
                    handlers: {
                        onConnect: (e => connectMsgs.push(e)),
                    },
                    onTick: run(states)
                });
            }
        },
        {
            test: () => connectMsgs.length == 1 && commands.length == 1,
            fn() {
                var connectMsg = connectMsgs[0];
                var joinMsg = commands.filter(x => x.type == "ISseJoin")[0];
                chai.expect(connectMsg).to.not.null;
                chai.expect(joinMsg).to.not.null;

                return client2.close();
            }
        }, 
        {
            test: () => commands.length == 2,
            fn() {

                var leaveMsg = commands.filter(x => x.type == "ISseLeave")[0];
                chai.expect(leaveMsg).to.not.null;
                chai.expect(errors.length).to.equal(0);

                client.close();
                done();
            }
        });
    })

    it('Does receive messages', done => {
        var connectMsgs: ISseConnect[] = [];
        var commands: ISseMessage[] = [];
        var msgs1: ISseMessage[] = [];
        var msgs2: ISseMessage[] = [];

        var states = [];

        var client2 = null;
        var client1 = new ServerEventsClient('http://chat.servicestack.net', ["*"], {
            handlers: {
                onConnect: (e => connectMsgs.push(e)),
                onCommand: (e => commands.push(e)),
                onMessage: (e => msgs1.push(e))
            },
            onTick: run(states)
        });

        var info1:ISseConnect;
        var info2:ISseConnect;

        states.unshift({
            test: () => connectMsgs.length > 0 && commands.length > 0,
            fn() {
                client2 = new ServerEventsClient('http://chat.servicestack.net', ["*"], {
                    handlers: {
                        onConnect: (e => connectMsgs.push(e)),
                        onMessage: (e => msgs2.push(e))
                    },
                    onTick: run(states)
                });
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

                done();
            }
        })
        
    })

    it('Does send multiple heartbeats', done => {

        var heartbeats:ISseHeartbeat[] = [];

        var client = new ServerEventsClient('http://chat.servicestack.net', ["*"], {
            handlers: {
                onConnect: ((e:ISseConnect) => e.heartbeatIntervalMs = 1000), //override to 1s
                onHeartbeat: (e => {
                    heartbeats.push(e);
                    if (heartbeats.length >= 3) {
                        chai.expect(heartbeats.length).to.greaterThan(2);
                        done();
                    }
                }),
            }
        });
    })

    it.only('Does reconnect on lost connection', done => {
        
    })

    // it('', done => {
        
    // })

});