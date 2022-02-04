const { getTransactionByQueryModel } = require("../../models/transactions/");

const getTransactionByQuery = async (req, res) => {
  const { search, type, page, limit } = req.query;
  const transactions = await getTransactionByQueryModel(
    page,
    limit,
    search,
    type
  );

  res.status(200).json(transactions);
};
module.exports = getTransactionByQuery;
