const mongoose = require("mongoose");
const { Schema } = mongoose;

const inventory = new Schema({
  gemsAmount: { type: Number, required: true },
  currencyAmount: { type: Number, required: true },
  level: { type: Number, required: true }
  //need to add space for items that they've bought with currency
});

const Inventory = mongoose.model("Inventory", inventory);
module.exports = Inventory;
