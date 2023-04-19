const jwt = require("jsonwebtoken");
const { createError } = require("./error.js");
const { log } = require("console");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      console.log(err);
      return next(createError(403, "Token is not valid!"));
    }
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
