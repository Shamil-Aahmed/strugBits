"use strict";

const { Joi } = require("../../lib");
const { validate } = require("../../middlewares");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const CONTROLLER = [
  bodyParser.urlencoded({ extended: true }),
  validate({
    body: Joi
      .object()
      .keys({
        email: Joi
          .string()
          .email()
          .required(),
        password: Joi
          .string()
          .required(),
      })
      .required(),
  }),
  async function loginInteraction(req, res) {
    console.log(req.body)

    const { email, password } = req.body;

    try{
      const user = await User.findOne({
        email: email,
        deleted_at: { $exists: false },
      });

      if (user == null || !bcrypt.compareSync(password, user.password)) {
        throw new Error("Invalid email or password. Please try again.")
      }

      res.status(200).send('Logged In Successfully. Welcome to StrugBits')


     }catch(error){
        console.error(error.message)
        res.status(403).send(error.message);
      };
    }
];

module.exports = CONTROLLER;
