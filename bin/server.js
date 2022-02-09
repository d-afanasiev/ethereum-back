const app = require("../app");
const { connectMongo, closeConnectMongo } = require("../db/connection");
const getOldBlock = require("../helpers/getOldBlock");
const getNewBlock = require("../helpers/getNewBlock");

const PORT = process.env.PORT || 8081;

(async () => {
  try {
    await connectMongo();
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    await getOldBlock(10, getNewBlock);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
})();
