const { format } = require("date-fns");
const { getNumberBlock, getBlockByNumber } = require("../api/service");
const { Transactions } = require("../schemas/mongoose/transactions");
const sleep = require("./sleep");

async function getBlockchain(i) {
  let currentBlock;
  await sleep(5000);
  const numberBlock = await getNumberBlock();
  if (currentBlock === numberBlock) {
    currentBlock = numberBlock;
    return getBlockchain(i);
  } else {
    const numberBlock = await getNumberBlock();
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
    console.log("number: ", parseInt(numberBlock));
    return getBlockchain(i - 1);
  }
}

module.exports = getBlockchain;
