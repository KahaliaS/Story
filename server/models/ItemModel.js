const mongoose = require("mongoose");
const { Schema } = mongoose;

const item = new Schema({
  name: { type: String, required: true },
  Description: { type: String, required: true },
  //need to add power/ability
})

const Item = mongoose.model("Item", item);
module.exports = Item;
