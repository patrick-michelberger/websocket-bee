var W3CWebSocket = require('websocket').w3cwebsocket;

// command-line parameters
var argv = require('optimist').argv;
var clientCount = argv.clientCount || 1;
var websocketHost = argv.websocketHost;
var websocketPort = argv.websocketPort || 1337;

var clients = [];
var heartbeatInterval = 25 * 1000;
var idx = 0;
var intervalID;

if (!websocketHost || !websocketPort) { 
    console.log("Please set a websocket host with --websocketHost and a port with --websocketPort");
    return;
}

var makeConnection = function() {
    clients[idx] = new W3CWebSocket("ws://" + websocketHost + ":"  + websocketPort);

    if (idx === clientCount) {
        process.exit();
        clearInterval(intervalID);
    }

    clients[idx].onerror = function(err) {
        console.log('Connection Error: Client ' + idx);
    };

    clients[idx].onopen = function() {
        console.log('WebSocket Connected: Client ' + idx);

    };

    clients[idx].onclose = function() {
        console.log('echo-protocol Closed: Client ' + idx);
    };

    clients[idx].onmessage = function(e) {
        if (typeof e.data === 'string') {
            console.log("Received: '" + e.data + "'");
        }
    };

    idx++;
};

intervalID = setInterval(makeConnection, heartbeatInterval/clientCount);