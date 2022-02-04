const { Transactions } = require("../../schemas/mongoose/transactions.js");

const getAllTransactionModel = async (page = 1, limit = 14) => {
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };
  return await Transactions.paginate({}, options);
};
module.exports = getAllTransactionModel;
