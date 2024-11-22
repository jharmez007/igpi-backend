const { registerUser } = require("../controllers/user.controllers");
const upload = require("../middlewares/upload.middlewares");

const router = require("express").Router();

router.post("/register", upload.single("passportPhoto"), registerUser);

module.exports = router;
