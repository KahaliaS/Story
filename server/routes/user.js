const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

//GET a user
router.get("/:email", UserController.getUser, (req, res) => {
  res.status(200).json(res.locals.userFound);
});

//POST or create a new user
router.post("/create/", UserController.createUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

module.exports = router;
