const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

//yeni ürün oluşturma (create)
router.post("/", async (req, res) => {
    try {
      const product = req.body;
      const newProduct = new Product(product);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  });
module.exports = router;