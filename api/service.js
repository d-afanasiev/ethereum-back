const axios = require("axios");

const getNumberBlock = async () => {
  const { data } = await axios.get(
    `https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${process.env.TOKEN}`
  );
  return data.result;
};

const getBlockByNumber = async (token) => {
  const { data } = await axios.get(
    `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${token}&boolean=true&apikey=${process.env.TOKEN}`
  );
  return data.result;
};

module.exports = {
  getNumberBlock,
  getBlockByNumber,
};
