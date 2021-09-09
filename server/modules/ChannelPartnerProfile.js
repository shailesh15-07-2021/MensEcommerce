const mongoose = require("mongoose");

const ChannelPartnerProfileSchema = new mongoose.Schema({
  channelPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ChannelPartner",
    required: true,
    unique: true,
  },

  address: {
    type: String,
    min: 10,
    max: 100,
    required: true,
  },
  landMark: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  stateName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  postalCode: {
    type: String,
  },

  accountNumber: {
    type: String,
    required: true,
  },
  bank: {
    type: String,
    required: true,
  },
  IFSC_Code: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "ChannelPartnerProfile",
  ChannelPartnerProfileSchema
);
