"use strict";

require("./database");

const { API_PORT, WEB_SOCKET_SERVER_PORT } = require("./config");
const mongoose = require("mongoose");
const util = require("util");
const express = require("./server");
// const {webSocketServer} = require("./websocket-server");
// require('@root/src/services/ticker/update')
// require('@root/src/services/currency-exchange/update')

// ------------------------- HTTP Server ---------------------------------

const server = express.listen(API_PORT, () => console.log(`HTTP Server Listening at :${ API_PORT }`));

// ------------------------- Web Socket Server ---------------------------

// webSocketServer.listen(() => console.log(`WS Server Listening at :${ WEB_SOCKET_SERVER_PORT }`));