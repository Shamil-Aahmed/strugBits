"use strict";

const { Router } = require("express");
const users = require("./users");

const router = Router();

router
  .use(users)
  
module.exports = Router().use("/v1", router);
