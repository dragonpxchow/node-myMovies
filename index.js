const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();
//  added by Pei app.use
// Enable CORS
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://intense-lowlands-44905.herokuapp.com"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
