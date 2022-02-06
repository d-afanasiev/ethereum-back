const { connectMongo, closeConnectMongo } = require("../db/connection");
const getBlockchain = require("../helpers/getBlockchain");

(async () => {
  await connectMongo();
  console.log("Database connection successful");
  await getBlockchain(1000);
  await closeConnectMongo();
  console.log("Database close connection");
})();
