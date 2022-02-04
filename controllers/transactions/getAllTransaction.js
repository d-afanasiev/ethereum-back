const { getAllTransactionModel } = require("../../models/transactions");

const getAllTransaction = async (req, res) => {
  const { page, limit } = req.query;
  const transactions = await getAllTransactionModel(page, limit);

  res.status(200).json(transactions);
};
module.exports = getAllTransaction;
