const channelDB = require("../../../modules/ChannelPartnerProfile");

module.exports = (req, res, next) => {
  const id = req.params.id;
  const Channel = {
    channelPartner: req.params.id,
    address: req.body.address,
    landMark: req.body.landMark,
    city: req.body.city,
    stateName: req.body.stateName,
    country: req.body.country,
    postalCode: req.body.postalCode,
    accountNumber: req.body.accountNumber,
    bank: req.body.bank,
    IFSC_Code: req.body.IFSC_Code,
  };
  console.log(Channel);
  channelDB
    .findByIdAndUpdate(id, Channel, { upsert: true, new: true })
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "error whie finding Channel Details" });
      } else {
        res.status(200).json({
          msg: "Channel Details Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "error Channel Details update information" });
    });
};
