const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

// tüm User getirme
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});

// User silme (delete)
router.delete("/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const deletedUser = await User.findOneAndDelete({email});
    if(!deletedUser){
        return res.status(404).json({error: "user not found"});
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});


  //user update
 router.put("/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
      const updates = req.body;
      const existingUser = await User.findById(userId);
      console.log(existingUser);
  
      if (!existingUser) {
        return res.status(404).json({ error: "user not found" });
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        updates,
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "server error" });
    }
  });
  // Tek bir kullanıcıyı ID ile getirme
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});


module.exports = router;