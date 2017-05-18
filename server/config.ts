    declare var global: any;

const config = {
    bot: {
        //David key
        // app: process.env.BOT_APP_ID || '345dffb4-150e-47de-a291-3eaf5cc30014',
        // key: process.env.BOT_KEY || 'w5dBTaxppdV41NMQ8nLozEz'

        //Etienne
        app: process.env.BOT_APP_ID || 'fc8c4331-3e8e-48c2-b6c8-15df6a54e84c',
        key: process.env.BOT_KEY || 'b1jZdehvaAFU7FKazSYkRu8'

        //Pierlag
        //pp: process.env.BOT_APP_ID || '42b9242e-7541-4b76-9183-6ff1ebab977f',
        //key: process.env.BOT_KEY || 'XpJww6n3KguRCA2aqtmHX9w'
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

export = config;

module.exports = function () {

    //process.env variables defined in Azure if deployed to a web app.

    global.searchName = process.env.AZURE_SEARCH_NAME ? process.env.AZURE_SEARCH_NAME : "<???>";
    global.indexName = process.env.INDEX_NAME ? process.env.AZURE_SEARCH_NAME : "index2";
    global.searchKey = process.env.INDEX_NAME ? process.env.AZURE_SEARCH_KEY : "<???>";
    global.queryString = 'https://' + global.searchName + '.search.windows.net/indexes/' + global.indexName + '/docs?api-key=' + global.searchKey + '&api-version=2015-02-28&';

}