const mongoose = require("mongoose");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { createError } = require("../middlewares/error");
const { log } = require("console");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    console.log(req.body);
    const hash = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "USer created successfully",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: "1h",
    });
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, token });
  } catch (err) {
    next(err);
  }
};
