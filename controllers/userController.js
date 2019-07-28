let UserRole = require("../models/userRoleModel");
let User = require("../models/userModel");
let mongoose = require("mongoose");
const registerUser = (req, res) => {
  //find user exists or not in db
  findUserRegisteredOrNot(req.body)
    .then(count => {
      let adminFlag = false;
      if (count === 0) adminFlag = true;
      let response = "user registered successfully..";
      if (adminFlag) response = "admin registered successfully..";
      let UserRollColl = UserRole({ isadmin: adminFlag });
      UserRollColl.save((err, result) => {
        if (err) res.status(500).send({ status: "failed", message: err });
        else {
          let userDetails = req.body;

          userDetails["role"] = result._id;
          console.log(userDetails);

          let UserColl = User(userDetails);
          UserColl.save((err, userResult) => {
            if (err) res.status(500).send({ status: "failed", message: err });
            else {
              res.status(200).send({
                status: "success",
                message: response
              });
            }
          });
        }
      });
    })
    .catch(error => {
      res.status(500).send({ status: "failed", message: error });
    });
};

const findUserRegisteredOrNot = requestedData => {
  return new Promise((resolve, reject) => {
    User.countDocuments({ id: requestedData.id }, (err, count) => {
      if (err) reject(err);
      else resolve(count);
    });
  });

  //return true if user exists else false
};

module.exports = {
  registerUser
};
