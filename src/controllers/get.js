"use strict";

const { name, version } = require("../../package.json");

const CONTROLLER = [
  function get(req, res) {
    res.json({
      name,
      version,
      msg: 'halooo'
    });
  },
];

module.exports = CONTROLLER;
