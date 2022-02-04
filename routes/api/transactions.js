const express = require("express");
const { ctrlWrapperMiddleware, validation } = require("../../middlewares");
const {
  getAllTransaction,
  getTransactionByQuery,
} = require("../../controllers/transactions");

const { getSchema } = require("../../schemas/joi/transactions");

const router = express.Router();

router.get("/", ctrlWrapperMiddleware(getAllTransaction));

router.get(
  "/search",
  validation(getSchema),
  ctrlWrapperMiddleware(getTransactionByQuery)
);

module.exports = router;
