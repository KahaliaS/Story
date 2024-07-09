const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

//GET ALL users
router.get("/", UserController.getAllUsers, (req, res) => {
  res.status(200).json(res.locals.allUsers);
});

//GET a user
router.get("/:email", UserController.getUser, (req, res) => {
  res.status(200).json(res.locals.userFound);
});

//POST or create a new user
router.post("/create/", UserController.createUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

//PATCH or update a user
//as of now they can only update their password
// router.put(
//   ":/email",
//   UserController.updateUser,
//   (req, res) => {
//     res.json({ msg: "the user has been updated" });
//     res.sendStatus(200);
//   },
// );

//DELETE a user
router.delete("/:email", UserController.deleteUser, (req, res, next) => {
  res.sendStatus(204);
});

module.exports = router;
