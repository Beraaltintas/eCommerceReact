const express = require("express");
const router = express.Router();
//route dosyaları içe aktarma
const productRoute = require("./products.js");
const couponRoute = require("./coupons.js");
const authRoute = require("./auth.js");
const categoryRoute = require("./categories.js");
const userRoute = require("./users.js");
const paymentRoute = require("./payment.js");
const informationRoute = require("./informations.js");
//her rotayı ilgili yol altında kullanıyoruz
router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);
router.use("/coupons", couponRoute);
router.use("/users", userRoute);
router.use("/payment", paymentRoute);
router.use("/information", informationRoute);

module.exports = router;