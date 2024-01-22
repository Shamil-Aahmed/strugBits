"use strict";

const { MONGODB_URI } = require("./config");
const mongoose = require("mongoose");

/* istanbul ignore next */
mongoose
  .connect(
    MONGODB_URI,
  )
  .then(() => console.log("MongoDB connection established"))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
