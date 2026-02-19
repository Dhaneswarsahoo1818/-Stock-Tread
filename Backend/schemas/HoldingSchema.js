const mongoose = require("mongoose");

const HoldingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: { type: Boolean, default: false },
});

module.exports={HoldingSchema};

