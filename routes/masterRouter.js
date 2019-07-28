var express = require("express");
var masterRouter = express.Router();
var User = require("./../models/userModel");
var UserRole = require("../models/userRoleModel");

var userController = require("./../controllers/userController");
//var userRoleController = require("../controllers/userRoleController");

//roles router
masterRouter.route("/employees/register").post(userController.registerUser);

module.exports = masterRouter;
