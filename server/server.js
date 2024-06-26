require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3002;
const URI = process.env.DB_CONNECTION_STRING;
// const userRoutes = require("./routes/user");

//add controller

mongoose
  .connect(URI)
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  //   res.send("Welcome to my home page");
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, "../public/index.html"));
});
// app.use("/api/user", userRoutes);

//404 handler
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
