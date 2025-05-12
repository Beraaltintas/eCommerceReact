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
    res.status(500).json({ error: "Server Error" });
  }
});
// tüm ürünleri getirme
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});
//belirli bir ürün getirme(read-single)
router.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

//products update
router.put("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const updates = req.body;
    const existingProduct = await Product.findById(productId);
    console.log(existingProduct);

    if (!existingProduct) {
      return res.status(404).json({ error: "product not found" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, {
      new: true,
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// PRODUCTsilme (delete)
router.delete("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: "product not found" });
    }
    res.status(200).json(deletedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});
// Product Search(name)
router.get("/search/:productName", async (req, res) => {
  try {
    const productName = req.params.productName;

    const products = await Product.find({
      name: { $regex: productName, $options: "i" }, //regex her bir karakterde arar options i büyük küçük harf duyarsız
    });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});
module.exports = router;
