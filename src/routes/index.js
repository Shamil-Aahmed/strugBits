"use strict";

const { NODE_ENV } = require(".././config");
const { ENV} = require("../constants");
const { get } = require(".././controllers");
const cors = require("cors");
const { Router, ...express } = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const v1Routes = require('./v1') 
const authRoutes = require('./auth')

const router = Router();


// ------------------------- Middlewares ----------------------------

/* istanbul ignore next */
if (NODE_ENV === ENV.DEVELOPMENT)
  router.use(morgan("dev"));

router
  .use(cors())
  .use(helmet())
  .use(express.static(
    path.resolve(__dirname, "..", "..", "public"),
    {
      index: false,
    },
  ));

// ------------------------- Routes ---------------------------------

router.route("/")
  .get(get);

router
  .use(v1Routes)
  .use(authRoutes)

// ------------------------- Exports --------------------------------

module.exports = router;
