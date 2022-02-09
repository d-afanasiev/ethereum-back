const { format } = require("date-fns");
const { getNumberBlock, getBlockByNumber } = require("../api/service");
const { Transactions } = require("../schemas/mongoose/transactions");
const sleepTimeout = require("./sleep");

function getNewBlock() {
  setInterval(async () => {
    let numberBlock = await getNumberBlock();
    await sleepTimeout(5000);
    const block = await getBlockByNumber(numberBlock);
    await Transactions.updateMany({}, { $inc: { confirmayions: 1 } });
    const currentBlock = block.transactions.map((data) => {
      return {
        blockNumber: parseInt(data.blockNumber),
        id: data.hash,
        sender: data.from,
        recipient: data.to,
        confirmayions: 0,
        date: format(new Date(), "MMM-dd-yyyy"),
        value: parseInt(data.value),
        fee: parseInt(data.nonce),
      };
    });
    await Transactions.insertMany(currentBlock);
  }, 5000);
}

module.exports = getNewBlock;
