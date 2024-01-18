"use strict";

const { version } = require(".././package.json");
const { ENV } = require("./constants");
const routes = require("./routes");
const express = require("express");
const qs = require("qs");

// ------------------------- Server ---------------------------

const server = express();

// ------------------------- Settings -------------------------

server.disable("x-powered-by");

server.enable("trust proxy");

server.set("view engine", "ejs");

server.set("query parser", qs.parse);

/* istanbul ignore next */
server.set("json replacer fn", (key, value) => {
  return key[0] === "_" ? undefined : value;
});

// ------------------------- Routes ---------------------------

server.use(routes);

// ------------------------- Exports --------------------------

module.exports = server;
