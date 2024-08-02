const express = require("express");
const router = express.Router();
const { User } = require("../models/user.js");

router.post("/", async (req, res) => {
  const user = new User(req.body);

  await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        err,
      });
    });
});

module.exports = router;
