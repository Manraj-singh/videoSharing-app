const router = require("express").Router();

router.use("/api/auth", require("./auth.js"));
router.use("/api/users", require("./users.js"));
router.use("/api/videos", require("./videos.js"));
router.use("/api/comments", require("./comments.js"));

module.exports = router;
