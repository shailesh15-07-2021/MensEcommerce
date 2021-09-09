var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const channelCreate = require("../controllers/ChannelPartner/Profile/create");
const channelFind = require("../controllers/ChannelPartner/Profile/find");
const channelFindOne = require("../controllers/ChannelPartner/Profile/findOne");
const channelDelete = require("../controllers/ChannelPartner/Profile/delete");
const channelUpdate = require("../controllers/ChannelPartner/Profile/update");

//  Routes
router.post("/create", auth, channelCreate);
router.get("/find", auth, channelFind);
router.get("/findOne/:id", channelFindOne);
router.put("/update/:id", channelUpdate);
router.delete("/delete/:id", auth, channelDelete);

module.exports = router;
