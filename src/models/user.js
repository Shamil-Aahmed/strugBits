"use strict";

const { MODEL: NAME, COLLECTION, USER_GENDER, USER_STATUS, TIMESTAMPS} = require("../constants");
const { Schema, model } = require("mongoose");

// ------------------------- Schema -----------------------------

const SCHEMA = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      first: {
        type: String,
      },
      last: {
        type: String,
      },
    },
    birthdate: {
      type: Date,
    },
    gender: {
      type: String,
      enum: Object.values(USER_GENDER),
    },
    phone_number: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(USER_STATUS),
      default: USER_STATUS.ACTIVE,
    },
    isAdmin:{
      type: Boolean,
      default: false
    },
    deleted_at: {
      type: Date,
    },
  },
  {
    collection: COLLECTION.USER,
    timestamps: TIMESTAMPS
  },
);

// ------------------------- Statics ----------------------------

SCHEMA.static({
  /**
   * Returns fields that can be selected by query parameters.
   *
   * @returns {string[]}
   */
  getSelectableFields() {
    return [
      "id",
      "email",
      "name",
      "birthdate",
      "gender",
      "phone_number",
      "status",
      "created_at",
      "updated_at",
    ];
  },
});

// ------------------------- Model ------------------------------

const MODEL = model(NAME.USER, SCHEMA);

// ------------------------- Exports ----------------------------

module.exports = MODEL;

