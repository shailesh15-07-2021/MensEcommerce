var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const ProductFileCreate = require("../controllers/ChannelPartner/ProductFile/create");
const ProductFileFind = require("../controllers/ChannelPartner/ProductFile/find");
const ProductFileFindOne = require("../controllers/ChannelPartner/ProductFile/findOne");
const ProductFileDelete = require("../controllers/ChannelPartner/ProductFile/delete");
const ProductFileUpdate = require("../controllers/ChannelPartner/ProductFile/update");

//  Routes
router.post("/create", auth, ProductFileCreate);
router.get("/find", auth, ProductFileFind);
router.get("/find/:id", auth, ProductFileFindOne);
router.put("/update/:id", auth, ProductFileUpdate);
router.delete("/delete/:id", auth, ProductFileDelete);

module.exports = router;
