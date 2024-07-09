const User = require("../models/UserModel");

const UserController = {
  async getAllUsers(req, res, next) {
    try {
      const allUsers = await User.find({});
      res.locals.allUsers = allUsers;
      return next();
    } catch (err) {
      return next({
        log: "Express error handler caught middleware error when getting all user",
        message: { err: "No users exist" },
      });
    }
  },
  async getUser(req, res, next) {
    const userEmail = req.params.email;
    const user = await User.findOne({ email: userEmail.slice(1) });
    if (!user) {
      return next({
        log: "Express error handler caught middleware error when getting user",
        message: { err: "User does not exist" },
      });
    }
    // console.log("user found");
    res.locals.userFound = user;
    return next();
  },
  async createUser(req, res, next) {
    const { username, password, email, level, notebook, inventory } = req.body;
    try {
      const user = await User.create({
        username,
        password,
        email,
        level,
        notebook,
        inventory,
      });
      console.log(user);
      res.locals.newUser = user;
      return next();
    } catch (err) {
      return next({
        log: "Express error handler caught middleware error when creating user",
        message: { err: err },
      });
    }
  },
  async deleteUser(req, res, next) {
    try {
      const email = req.params.email;

      // Attempt to find and delete the user
      //
      const user = await User.findOneAndDelete({ email });
      console.log(user);
      // If no user found with the specified username, return an error
      if (user === null) {
        return next({
          log: "Express error handler caught middleware error when deleting user",
          message: { err: "User does not exist" },
        });
      }

      // Log successful deletion
      console.log(`User deleted: ${email}`);
      // Continue to the next middleware
      return next();
    } catch (err) {
      // Handle any unexpected errors
      return next(err); // Pass the error to the next middleware
    }
  },

  // async updateUser(req, res, next) {
  //   const { username, newPassword } = req.body;

  //   try {
  //     //update the user password
  //     const updatedUser = await User.findOneAndUpdate(
  //       { username: username },
  //       { password: newPassword },
  //       { new: true, useFindAndModify: false },
  //     );
  //     if (!updatedUser) {
  //       return res.status(404).send("User not found");
  //     }
  //   } catch (err) {
  //     res.status(500).send('Error updating password');
  //   }
  // },
};

module.exports = UserController;
