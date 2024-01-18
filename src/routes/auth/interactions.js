
"use strict";

const {
  registerUser,loginUser
} = require("../../controllers/index");
const { Router } = require("express");

const router = Router();

router.route("/login")
  .post(loginUser);

router.route("/register")
  .post(registerUser);

module.exports = Router().use("/interaction", router);
