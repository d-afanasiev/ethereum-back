const { getAllTransactionModel } = require("../../models/transactions");

const getAllTransaction = async (req, res) => {
  const transactions = await getAllTransactionModel();

  res.status(200).json(transactions);
};
module.exports = getAllTransaction;
