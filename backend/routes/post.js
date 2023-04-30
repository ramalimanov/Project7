const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const postCtrl = require("../controllers/post");

router.get("/", auth, postCtrl.getAll);
router.post("/", auth, multer.single("file"), postCtrl.create);

module.exports = router;
