const mongoose = require("mongoose");
const { Schema } = mongoose;

const notebook = new Schema({});

const Notebook = mongoose.model("Notebook", notebook);
module.exports = Notebook;
