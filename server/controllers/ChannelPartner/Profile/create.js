const ChannelDB = require("../../../modules/ChannelPartnerProfile");

module.exports = (req, res) => {
  console.log(req.body);
  const Channel = new ChannelDB({
    channelPartner: req.body.userResult.id,
    address: req.body.address,
    landMark: req.body.landMark,
    city: req.body.city,
    stateName: req.body.stateName,
    country: req.body.country,
    postalCode: req.body.postalCode,
    accountNumber: req.body.accountNumber,
    bank: req.body.bank,
    IFSC_Code: req.body.IFSC_Code,
  });

  Channel.save()
    .then((data) => {
      res.status(201).json({
        msg: "Channel added Sucessfully",
        data: data,
      });
      //   console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        mesaage:
          err.message || "some error occured while creating Channel Profile ",
      });
    });
};
