const express = require("express");
const router = express.Router();

// tüm ürünleri getirme
router.get("/", async(req, res)=> {
    res.send("ürünler geldi");
})
module.exports = router;