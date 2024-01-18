"use strict";

const {
} = require("../.././controllers");
const { Router } = require("express");

const router = Router();

// ------------------------- Params ------------------------------------

// router.param("user", userParam);

// ------------------------- User --------------------------------------

// router.route("/:user")
//   .get(showUserV1)
  
// ------------------------- User Password --------------------------------

// router.route("/:user/password")
//   .patch(updateUserPasswordV1);

// ------------------------- Exports -----------------------------------

module.exports = Router().use("/users", router);
