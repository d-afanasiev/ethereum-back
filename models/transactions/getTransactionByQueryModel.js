const { Transactions } = require("../../schemas/mongoose/transactions.js");

const getTransactionByQueryModel = async (
  page = 1,
  limit = 14,
  search,
  type
) => {
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };
  if (type === "blockNumber") {
    parseInt(search);
  }
  return await Transactions.paginate({ [type]: search }, options);
};
module.exports = getTransactionByQueryModel;
