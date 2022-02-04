const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { ctrlWrapperMiddleware } = require("./middlewares");
const { getAllTransaction } = require("./controllers/transactions");

const transactionsRouter = require("./routes/api/transactions");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/transactions", transactionsRouter);

app.use((req, res) => {
  ctrlWrapperMiddleware(getAllTransaction);
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
