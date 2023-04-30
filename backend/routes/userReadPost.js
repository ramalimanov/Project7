const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userHasRead = require("../controllers/userReadPost");

router.get("/:postId", auth, userHasRead.isRead);
router.post("/:postId", auth, userHasRead.read);

module.exports = router;
