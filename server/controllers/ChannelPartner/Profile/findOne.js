const ChannelDB = require("../../../modules/ChannelPartnerProfile");
const asyncHandler = require("express-async-handler");

module.exports = asyncHandler(async (req, res) => {
  const channelProfile = await ChannelDB.find({
    channelPartner: req.params.id,
  });
  if (channelProfile) {
    res.json(channelProfile);
    // console.log(channelProfile);
  } else {
    res.status(404);
    throw new Error("channelProfile Not Found");
  }
});
