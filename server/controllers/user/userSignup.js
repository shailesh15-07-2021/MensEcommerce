const userDB = require("../../modules/userModel");
const shortId = require("shortid");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

// Load input validations
const validateUserInput = require("../../validation/userValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateUserInput(req.body);
  // console.log(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  userDB.findOne({ email: req.body.email }).then((user) => {
    errors.email = "Email already exists";
    if (user) {
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.name, {
        s: "200", // size
        r: "pg", // rating
        d: "mm", // default
      });

      const User = userDB({
        name: req.body.name,
        email: req.body.email,
        username: shortId.generate(),
        contact: req.body.contact,
        password: req.body.password,
        password2: req.body.password2,
        role: req.body.role,
        avatar,
      });

      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(User.password, salt, (err, hash) => {
          if (err) throw err;
          User.password = hash;
          User.save()
            .then((data) => {
              res.status(201).json({
                msg: "Success",
                data: data,
              });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
};
