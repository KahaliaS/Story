const User = require("../models/UserModel");

const UserController = {
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
};

module.exports = UserController;
