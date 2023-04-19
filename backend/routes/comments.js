const router = require("express").Router();
const { commentController } = require("../controllers");
const { addComment, deleteComment, getComments } = commentController;
const verifyToken = require("../middlewares/verifyToken.js");

router.post("/", verifyToken, addComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:videoId", getComments);

module.exports = router;
