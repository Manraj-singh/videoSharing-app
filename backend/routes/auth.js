const router = require("express").Router();

const { authController } = require("../controllers");
const { signin, signup } = authController;

//REGISTER A USER
router.post("/signup", signup);

//SIGN IN
router.post("/signin", signin);

module.exports = router;
