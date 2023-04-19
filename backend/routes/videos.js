const router = require("express").Router();
const { videoController } = require("../controllers");
const { addVideo, addView, getByTag, getVideo, random, search, sub, trend } =
  videoController;
const verifyToken = require("../middlewares/verifyToken.js");

//create a video
router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, getVideo);
router.delete("/:id", verifyToken, addVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", verifyToken, sub);
router.get("/tags", getByTag);
router.get("/search", search);

module.exports = router;
