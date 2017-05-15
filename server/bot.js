"use strict";
const builder = require("botbuilder");
const config = require("./config");
class Bot {
    initializeForWeb() {
        if (!config.bot.key) {
            this.connector = new builder.ChatConnector();
            console.log('WARNING: Starting bot without ID or Secret');
        }
        else {
            this.connector = new builder.ChatConnector({ appId: config.bot.app, appPassword: config.bot.key });
            console.log('Bot started with App Id %s', config.bot.app);
        }
        this.init();
    }
    initializeForConsole() {
        this.connector = new builder.ConsoleConnector();
        this.init();
    }
    registerDialogs() {
        this.bot.dialog('/', this.dialog);
        this.bot.on('conversationUpdate', (message) => {
            if (message.membersAdded) {
                message.membersAdded.forEach((identity) => {
                    if (identity.id === message.address.bot.id) {
                        var reply = new builder.Message()
                            .address(message.address)
                            .text("Helo! I am the art bot");
                        this.bot.send(reply);
                    }
                });
            }
        });
    }
    bindDialogs() {
        this.bot.dialog("/artist", (session, args) => {
            var Artist = builder.EntityRecognizer.findEntity(args.entities, 'Artist');
        });
        this.dialog.matches('artist', '/artist');
    }
    initBackChannel() {
        this.bot.on("message", (message) => {
        });
        this.bot.on("event", function (message) {
            if (message.name === "myCustomEvent") {
            }
        });
    }
    init() {
        this.bot = new builder.UniversalBot(this.connector);
        const url = config.luis.url;
        this.recognizer = new builder.LuisRecognizer(url);
        this.dialog = new builder.IntentDialog({ recognizers: [this.recognizer] });
        console.log('Initialize defaults...');
        this.dialog.onDefault((session, message) => {
            if (session.message.text === "3D") {
                var msg = new builder.Message();
                msg.data.type = "event";
                msg.data.name = "launch3D";
                msg.data.value = "Cause 3D rocks.";
                session.send(msg);
            }
        });
        console.log('Creating dialogs...');
        this.registerDialogs();
        console.log('Binding dialogs to intents...');
        this.bindDialogs();
        console.log('Initialize backchannel...');
        this.initBackChannel();
    }
}
module.exports = Bot;
//# sourceMappingURL=bot.js.map