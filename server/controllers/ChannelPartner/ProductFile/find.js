const ProductFileDB = require("../../../modules/ProductFile");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    ProductFileDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `ProductFile may not present with this ${id}`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    ProductFileDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
