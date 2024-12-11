
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    arbitrumTestnet: {
      url: "https://goerli-rollup.arbitrum.io/rpc",
      accounts: ["0xYOUR_PRIVATE_KEY"],
    },
  },
};
