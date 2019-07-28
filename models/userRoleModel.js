var mongoose = require("mongoose");
Schema = mongoose.Schema;
var UserRole = mongoose.Schema({
  is_admin: Boolean
});

module.exports = mongoose.model("userRole", UserRole, "user_roles");
