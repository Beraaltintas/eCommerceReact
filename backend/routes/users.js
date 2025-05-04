const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

// tüm kategorileri getirme
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});

module.exports = router;