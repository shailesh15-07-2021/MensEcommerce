const asyncHandler = require("express-async-handler");
const channelDB = require("../../../modules/ChannelPartnerProfile");

module.exports = asyncHandler(async (req, res) => {
  const id = req.params.id;

  channelDB
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete Order Details` });
      } else {
        res.send({
          message: "Order Detail deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Order Details",
      });
    });
});
