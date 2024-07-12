require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3002;
const URI = process.env.DB_CONNECTION_STRING;
const userRoutes = require("./routes/user");

// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

// Define API routes before the static middleware
app.use("/api/user", userRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../build")));

// 404 handler for API routes
app.use("/api/*", (req, res) => {
  res.status(404).send("API Not Found");
});

// Serve the React app for any unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

// Global 404 handler for any other routes
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

// Global error handler
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
