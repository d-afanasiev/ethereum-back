const { connectMongo, closeConnectMongo } = require("../db/connection");
const { format } = require("date-fns");
const { getNumberBlock, getBlockByNumber } = require("../api/service");
const { Transactions } = require("../schemas/mongoose/transactions");

(async () => {
  await connectMongo();
  console.log("Database connection successful");
  const numberBlock = await getNumberBlock();
  setTimeout(async () => {
    const block = await getBlockByNumber(numberBlock);
    const currentBlock = block.transactions.map((data) => {
      return {
        blockNumber: parseInt(data.blockNumber),
        id: data.transactionIndex,
        sender: data.from,
        recipient: data.to,
        confirmayions: 0,
        date: format(new Date(), "MMM-dd-yyyy"),
        value: parseFloat(data.value),
        fee: parseFloat(data.nonce),
      };
    });

    await Transactions.insertMany(currentBlock);
    await closeConnectMongo();
    console.log("Database close connection");
  }, 5000);

  console.log("number: ", parseInt(numberBlock));
})();
