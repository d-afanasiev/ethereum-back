function sleepTimeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = sleepTimeout;
