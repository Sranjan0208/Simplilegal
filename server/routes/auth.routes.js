const express = require("express");
const router = express.Router();

const { SignUp, Login, Logout } = require("../controllers/auth.controllers");
const { userVerification } = require("../middlewares/auth.middlewares");

router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/logout", Logout);
router.post("/", userVerification);

module.exports = router;
