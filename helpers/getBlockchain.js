const { format } = require("date-fns");
const { getNumberBlock, getBlockByNumber } = require("../api/service");
const { Transactions } = require("../schemas/mongoose/transactions");
const sleep = require("./sleep");

async function getBlockchain(iter) {
  let currentData = null;
  let numberBlock = await getNumberBlock();
  for (let i = 0; i < iter; i++) {
    await Transactions.updateMany({}, { $inc: { confirmayions: 1 } });
    await sleep(5000);
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
    currentData = parseInt(numberBlock) - 1;
    numberBlock = `0x${currentData.toString(16)}`;
    await Transactions.insertMany(currentBlock);
  }
}

module.exports = getBlockchain;
