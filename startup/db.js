const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  // mongoose.connect(db).then(() => winston.info(`Connected to ${db}...`));

  const MongoClient = require("mongodb").MongoClient;
  const uri = db;

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect((err) => {
    winston.info(`Connected to ${db}...   hello`);
    //const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    //client.close();
  });
};
