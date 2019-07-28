let express = require("express");
let bodyParser = require("body-parser");
let { mongoose } = require("./db/mongooseConnection");
let masterRouter = require("./routes/masterRouter");

//let salaryController = require("./controllers/salaryController");
//initialize express app
let app = express();
//this is used to remove cors error while calling the api from clients
let cors = require("cors");
app.use(cors());
//app.use(express.bodyParser({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: "500mb" }));
app.use(express.json({ limit: "500mb" }));
//if status then don't check middleware
app.use(function(req, res, next) {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//start server and binding for publicly use within LAN
app.listen(process.env.SERVER_PORT, () => {
  console.log(`server started on port ${process.env.SERVER_PORT}`);
});
module.exports = app;
app.use("/", masterRouter);
