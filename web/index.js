(function () {

    const DIRECTLINE_SECRET = ""; //you get that from the direct line channel at dev.botframework.com

    var startChat = function () {
        let botConnection;

        //if it is a brand new conversation, we create a fresh one
        botConnection = new DirectLine.DirectLine({
            secret: DIRECTLINE_SECRET,
            webSocket: false
        });

        botConnection.connectionStatus$
            .filter(s => s === 2) //when the status is 'connected' (2)
            .subscribe(c => {

                //everything is setup in DirectLine, we can create the Chatbot control
                BotChat.App({
                    botConnection: botConnection,
                    user: { id: botConnection.conversationId}, //you could define you own userid here
                    resize: 'detect'
                }, document.getElementById("bot"));

                // HOW TO SEND TO BOT
                // botConnection
                //     .postActivity({
                //         type: "event",
                //         name: "pushsubscriptionadded",
                //         value: subscriptionInfo,
                //         from: { id: botConnection.conversationId } //you could define your own userId here
                //     })
                //     .subscribe(id => {
                //     });
            });

        botConnection.activity$.subscribe(c => {
            //CALLED EACH TIME AN ACTIVITY MESSAGE IS RECEIVED
            console.log(botConnection.watermark);
        });
    };

    //everything is defined, let's start the chat
    startChat();
})();