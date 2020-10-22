// all middleware for production
const helmet = require("helmet");
const compression = require("compression"); // compress http request

module.exports = function (app) {
  app.use(helmet());
  app.use(compression());
};
