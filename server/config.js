"use strict";
const config = {
    bot: {
        app: process.env.BOT_APP_ID || 'fc8c4331-3e8e-48c2-b6c8-15df6a54e84c',
        key: process.env.BOT_KEY || 'b1jZdehvaAFU7FKazSYkRu8'
    },
    luis: {
        app: process.env.LUIS_APP || '',
        key: process.env.LUIS_KEY || '',
        url: process.env.LUIS_URL || 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/8204e650-feb0-471d-ab15-2813c0a33447?subscription-key=252d60e7d01c4236a6a7e77d03c558ff&timezoneOffset=0&verbose=true&q='
    },
    webServer: {
        port: process.env.WEB_SERVER_PORT || process.env.PORT || 3978
    }
};
module.exports = config;
//# sourceMappingURL=config.js.map