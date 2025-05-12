const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js");
const Info = require("../models/Information.js");

//create new info
router.post("/", async (req, res) => {
  try {
    const { name, address, phone, logo, email, open_hours } = req.body;
    const newInfo = new Info({ name, address, phone, logo, email, open_hours });
    await newInfo.save();
    res.status(201).json(newInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

//get all info

router.get("/", async (req, res) => {
  try {
    const informations = await Info.find();
    res.status(200).json(informations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

//get single info
router.get("/:infoId", async (req, res) => {
  try {
    const infoId = req.params.infoId;
    try {
      const info = await Info.findById(infoId);
      res.status(200).json(info);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Info not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

//Update info
router.put("/:infoId", async (req, res) => {
  try {
    const infoId = req.params.infoId;
    const updates = req.body;
    const existingInfo = await Info.findById(infoId);
    console.log(existingInfo);

    if (!existingInfo) {
      return res.status(404).json({ error: "Info not Found" });
    }
    const updatedInfo = await Info.findByIdAndUpdate(infoId, updates, {
      new: true,
    });
    res.status(200).json(updatedInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

//delete info

router.delete("/:infoId", async (req, res) => {
  try {
    const dataId = req.params.infoId;
    const deleteInfo = await Info.findByIdAndDelete(dataId);
    if (!deleteInfo) {
      return res.status(404).json({ error: "Info not found" });
    }
    res.status(200).json(deleteInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
