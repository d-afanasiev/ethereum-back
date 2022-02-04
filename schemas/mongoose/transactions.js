const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const transactiontSchema = new Schema({
  blockNumber: {
    type: Number,
  },
  id: {
    type: String,
  },
  sender: {
    type: String,
  },
  recipient: {
    type: String,
  },
  confirmayions: {
    type: Number,
  },
  date: {
    type: String,
  },
  value: {
    type: String,
  },
  fee: {
    type: String,
  },
});

transactiontSchema.plugin(mongoosePaginate);

const Transactions = model("Transaction", transactiontSchema);

module.exports = { Transactions };
