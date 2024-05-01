const mongoose = require("mongoose");
const { Schema } = mongoose;

const user = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  level: { type: Number, required: true },
  notebook: {
    type: Schema.Types.ObjectId,
    ref: "Notebook",
    required: true,
  },
  inventory: {
    type: Schema.Types.ObjectId,
    ref: "Inventory",
    required: true,
  },
});

const User = mongoose.model("User", user);
module.exports = User;
