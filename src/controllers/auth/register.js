"use strict";

const { Joi } = require("../../lib");
const { validate } = require("../../middlewares");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const CONTROLLER = [
  bodyParser.urlencoded({ extended: true }),
  validate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      password_confirm: Joi.string().required(),
    }).required(),
  }),
  async function registerInteraction(req, res) {
    console.log(req.body);

    const { email, password, password_confirm } = req.body;

    try {
      if (password !== password_confirm) {
        throw new Error("Passwords do not match");
      }

      const userExists = await User.countDocuments({ email });

      if (userExists > 0) {
        throw new Error("User Already Exists");
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const user = await User.create({
        email,
        password: hashedPassword,
      });

      res.status(200).send("User Successfully Created");
    } catch (error) {
      console.error(error.message);
      res.status(403).send(error.message);
    }
  },
];

module.exports = CONTROLLER;