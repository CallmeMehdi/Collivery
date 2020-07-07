const mongoose = require("mongoose");

const ColliverySchema = mongoose.Schema({
  user: String,
  date: String,
  weight: String,
  info: String,
  starting: String,
  destination: String,
  state: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("Collivery", ColliverySchema);