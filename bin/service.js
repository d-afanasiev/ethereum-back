const { format } = require("date-fns");
const { getNumberBlock, getBlockByNumber } = require("../api/service");
const { Transactions } = require("../schemas/mongoose/transactions");

(async () => {
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
        value: parseInt(data.value),
        fee: parseInt(data.nonce),
      };
    });

    await Transactions.insertMany(currentBlock);
    console.log("block: ", currentBlock);
  }, 5000);

  console.log("number: ", parseInt(numberBlock));
})();
