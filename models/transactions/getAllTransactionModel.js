const { Transactions } = require("../../schemas/mongoose/transactions.js");

const getAllTransactionModel = async () => {
  return await Transactions.find({});
};
module.exports = getAllTransactionModel;
