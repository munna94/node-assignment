const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const uri = process.env.MONGO_HOST;

mongoose.connect(uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    console.log("error while connectinh to db");
    console.log(err);
    //client.close();
    //throw err;
  }
});
module.exports = {
  mongoose //this will return the mongoose object
};
