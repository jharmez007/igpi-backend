const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    surname: {
      type: String,
      required: true,
    },
    otherNames: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    senatorialDistrict: {
      type: String,
      required: true,
    },
    localGovernment: {
      type: String,
      required: true,
    },
    town: {
      type: String,
      required: true,
    },
    ward: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    maritalStatus: {
      type: String,
      required: true,
    },
    passportPhoto: {
      type: String,
      required: true,
    },
    membershipType: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    hasPaymentBeenMade: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
