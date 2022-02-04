const mongoose = require("mongoose");
require("dotenv").config();

const connectMongo = async () => {
  return mongoose.connect(process.env.DB_HOST);
};

const closeConnectMongo = async () => {
  return mongoose.connection.close();
};

module.exports = { connectMongo, closeConnectMongo };
