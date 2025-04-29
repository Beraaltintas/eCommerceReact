const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");

//yeni kupon oluşturma (create)
router.post("/", async (req, res) => {
  try {

    const {code} = req.body;
    const existingCoupon = await Coupon.findOne({code});
    if(existingCoupon){
       return res.status(400).json({error: "coupon already exist."})
    }

    const newCoupon = new Coupon(req.body);
    await newCoupon.save();
    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});

// tüm kupopnları getirme
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});

//belirli bir kupon getirme id ye göre(read-single)
router.get("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const coupon = await Coupon.findById(couponId);
    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }
    res.status(200).json(coupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});
//belirli bir kupon getirme name e göre ye göre(read-single)
router.get("/code/:couponCode", async (req, res) => {
  try {
    const couponCode = req.params.couponCode;
    const coupon = await Coupon.findOne({code: couponCode});
    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }
    const {discountPercent} = coupon;

    res.status(200).json({discountPercent: discountPercent});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});

//coupon update
router.put("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const updates = req.body;
    const existingCoupon = await Coupon.findById(couponId);
    console.log(existingCoupon);

    if (!existingCoupon) {
      return res.status(404).json({ error: "coupon not found" });
    }

    const updatedCoupon = await Coupon.findByIdAndUpdate(
        couponId,
      updates,
      { new: true }
    );
    res.status(200).json(updatedCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});

// caregory silme (delete)
router.delete("/:couponId", async (req, res) => {
    try {
      const couponId = req.params.couponId;
      const deletedCoupon = await Coupon.findByIdAndDelete(couponId);
      if(!deletedCoupon){
          return res.status(404).json({error: "Coupon not found"});
      }
      res.status(200).json(deletedCoupon);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "server error" });
    }
  });

module.exports = router;
