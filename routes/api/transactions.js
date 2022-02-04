const express = require("express");
const { ctrlWrapperMiddleware } = require("../../middlewares");
const { getAllTransaction } = require("../../controllers/transactions");

const router = express.Router();

router.get("/", ctrlWrapperMiddleware(getAllTransaction));

module.exports = router;
