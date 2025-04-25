const express = require("express");
const router = express.Router();

// tüm ürünleri getirme
router.get("/", async(req, res)=> {
    res.send("kategoriler geldi");
})
module.exports = router;