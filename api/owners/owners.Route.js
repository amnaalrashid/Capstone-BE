const express = require("express");
const passport = require("passport");
const router = express.Router();
const ownerController = require("./owners.Controller");
const upload = require("../../middleware/multer");
// Signup
router.post("/signup", ownerController.signup);

// Signin
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  ownerController.signin
);

// Get My Profile
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  ownerController.getMyProfile
);

// Update Profile
router.put(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  ownerController.updateMyProfile
);

module.exports = router;
