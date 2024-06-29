const mongoose = require("mongoose");
const { Schema } = mongoose;

const notebookSchema = new Schema(
  {
    arrays: {
      type: String,
      default:
        "An array is a special variable, which can hold more than one value",
    },
    object: {
      type: String,
      default: "An object is a standalone entity, with properties and type",
    },
  },
  { _id: false },
);

const inventorySchema = new Schema(
  {
    health: { type: Number, default: 5 },
    gems: { type: [String], default: ["Amethyst", "Amber"] },
  },
  { _id: false },
);

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
    default: 0,
  },
  notebook: {
    type: notebookSchema,
    required: true,
    default: () => ({}),
  },
  inventory: {
    type: inventorySchema,
    required: true,
    default: () => ({}),
  },
  /* notebook: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Notebook",
  //   required: true,
  // },
  // inventory: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Inventory",
  //   required: true,
  // },
  */
});

const User = mongoose.model("User", userSchema);
module.exports = User;
