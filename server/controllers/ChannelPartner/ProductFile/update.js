const ProductFileDB = require("../../../modules/ProductFile");

module.exports = (req, res, next) => {
  const id = req.params.id;
  ProductFileDB.findByIdAndUpdate(id, req.body, { upsert: true, new: true })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({ message: "error whie finding ProductFile Details" });
      } else {
        res.status(200).json({
          msg: "ProductFile Details Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "error ProductFile Details update information" });
    });
};
