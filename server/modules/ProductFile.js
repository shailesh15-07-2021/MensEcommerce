const mongoose = require("mongoose");

const ProductFileSchema = new mongoose.Schema({
  channelPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserDB",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("ProductFile", ProductFileSchema);
