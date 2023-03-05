const UserModel = require('../models/user');
const { hashPass, comparePass } = require('../helpers/bcrypt');
const jwt = require("jsonwebtoken");

module.exports = class User {
  static async register(req, res, next) {
    try {
      // validasi request
      if (!req.body.username) throw new Error('Username is required');
      if (req.body.username.length < 6) throw new Error('Username min 6 length');
      if (!req.body.name) throw new Error('Name is required');
      if (req.body.name.length < 6) throw new Error('Username min 6 length');
      if (!req.body.phoneNumber) throw new Error('Phone number is required');
      if (req.body.phoneNumber.length < 12) throw new Error('Phone number min 12 number');
      if (!req.body.email) throw new Error('Email is required');
      if (!req.body.password) throw new Error('Password is required');

      // cek username
      const user = await UserModel.findOne({
        username: req.body.username,
      });
      if (user) throw new Error('Username already exist');

      // create new user + bcrypt pass
      const newUser = await UserModel.create({
        username: req.body.username,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: await hashPass(req.body.password),
      });

      //respons
      res.json({
        status: true,
        newUser,
      });
    } catch (error) {
      res.json({
        status: false,
        error: error.message,
      });
      console.log(error);
    }
  }

  static async login(req, res, next) {
    try {
      // validasi username dan password
      if (!req.body.username) throw new Error('Username is required');
      if (!req.body.password) throw new Error('Password is required');

      // cek username
      const user = await UserModel.findOne({
        username: req.body.username,
      });
      if (!user) throw new Error('User not found');

      // cek password
      const validPass = await comparePass(req.body.password, user.password);
      if (!validPass) throw new Error('Invalid password');

      // create jwt
      const token = jwt.sign(
        { id: user._id, email: user.email, username: user.username },
        process.env.SECRET_KEY
      );

      // respons
      res.json({
        status: true,
        token,
      });
    } catch (error) {
      res.json({
        status: false,
        error: error.message,
      });
      console.log(error);
    }
  }
}

