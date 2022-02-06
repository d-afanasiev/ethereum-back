const { format } = require("date-fns");
const { getNumberBlock, getBlockByNumber } = require("../api/service");
const { Transactions } = require("../schemas/mongoose/transactions");
const sleep = require("./sleep");

let oldBlock;

async function getBlockchain(i) {
  if (!i) {
    return;
  }
  await sleep(5000);
  const numberBlock = await getNumberBlock();
  if (oldBlock === numberBlock) {
    oldBlock = numberBlock;
    return getBlockchain(i);
  } else {
    oldBlock = numberBlock;
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
        value: parseFloat(data.value),
        fee: parseFloat(data.nonce),
      };
    });

    await Transactions.insertMany(currentBlock);
    return getBlockchain(i - 1);
  }
}

module.exports = getBlockchain;
