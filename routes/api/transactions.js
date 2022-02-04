const express = require("express");
const { ctrlWrapperMiddleware, validation } = require("../../middlewares");
const {
  getAllTransaction,
  getTransactionByQuery,
} = require("../../controllers/transactions");

const { getSchema, getSerchSchema } = require("../../schemas/joi/transactions");

const router = express.Router();

router.get(
  "/",
  validation(getSchema, "query"),
  ctrlWrapperMiddleware(getAllTransaction)
);

router.get(
  "/search",
  validation(getSerchSchema, "query"),
  ctrlWrapperMiddleware(getTransactionByQuery)
);

module.exports = router;
