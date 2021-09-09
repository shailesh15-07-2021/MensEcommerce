const ProductFileDB = require("../../../modules/ProductFile");

module.exports = (req, res, next) => {
  const ProductFile = new ProductFileDB({
    channelPartner: req.body.channelPartner,
    product: req.body.product,
    status: req.body.status,
  });
  // console.log(req.body);

  ProductFile.save()
    .then((data) => {
      res.status(201).json({
        msg: "ProductFile added Sucessfully",
        data: data,
      });
      //   console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        mesaage:
          err.message || "some error occured while creating ProductFile Profile ",
      });
    });
};
