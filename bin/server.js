const app = require("../app");
const { connectMongo, closeConnectMongo } = require("../db/connection");
const getBlockchain = require("../helpers/getBlockchain");

const PORT = process.env.PORT || 8081;

(async () => {
  try {
    await connectMongo();
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    await getBlockchain(10);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
})();
