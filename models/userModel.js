var mongoose = require("mongoose");
Schema = mongoose.Schema;
var User = mongoose.Schema({
  name: String,
  id: String, //mandatory
  role: { type: Schema.Types.ObjectId, ref: "userRole" }
});

module.exports = mongoose.model("User", User, "users");
