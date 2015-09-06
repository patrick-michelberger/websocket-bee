var argv = require('optimist').argv;
var W3CWebSocket = require('websocket').w3cwebsocket;

var clientCount = argv.clients;
var clients = [];

var heartbeatInterval = 25 * 1000;
var idx = 0;
var intervalID;

var makeConnection = function() {
    console.log("makeConnection...");
    clients[idx] = new W3CWebSocket('ws://localhost:1337');

    console.log(clients.length);

    if (idx === clientCount) {
        clearInterval(intervalID);
    }

    clients[idx].onerror = function() {
        console.log('Connection Error');
    };

    clients[idx].onopen = function() {
        console.log('WebSocket Client Connected');

    };

    clients[idx].onclose = function() {
        console.log('echo-protocol Client Closed');
    };

    clients[idx].onmessage = function(e) {
        if (typeof e.data === 'string') {
            console.log("Received: '" + e.data + "'");
        }
    };

    idx++;
};

intervalID = setInterval(makeConnection, heartbeatInterval/clientCount);
