const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  List of All route paths

router.use("/", require("./userRoute"));
router.use("/admin", require("./adminRoutes"));
router.use("/vendor", require("./vendorRoute"));
router.use("/channelprofile", require("./channelProfileRoute"));
router.use("/product-file", require("./ProductFileRoute"));
router.use("/category", require("./categoryRoute"));
router.use("/sub-category", require("./subCategoryRoute"));
router.use("/cart", require("./cartRoute"));
router.use("/product", require("./productRoute"));
router.use("/order", require("./orderRoute"));
router.use("/wishlist", require("./whishlistRoute"));
router.use("/contact", require("./contactUsRoute"));
router.use("/subscribe", require("./subscribeRoute"));

module.exports = router;
