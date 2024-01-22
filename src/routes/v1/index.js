"use strict";

const { Router } = require("express");
const users = require("./users");
const chats = require("./chats")

const router = Router();

router
  .use(users)
  .use(chats)
  
module.exports = Router().use("/v1", router);
