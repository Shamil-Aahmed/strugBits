"use strict";
const {handleChatMessageControllerV1 } = require("../.././controllers");
const { Router } = require("express");

const router = Router();

// ------------------------- Params ------------------------------------

// router.param("user", userParam);

// ------------------------- Chat  --------------------------------

// router.route("/delete-for-me/:chatId")
//   .post(handleChatMessageControllerV1);

// ------------------------- Exports -----------------------------------

module.exports = Router().use("/chats", router);
