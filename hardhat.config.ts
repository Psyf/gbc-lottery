import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    ...(process.env.ALCHEMY_API_KEY_ARBI
      ? {
          hardhat: {
            forking: {
              url: `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_ARBI}`,
              blockNumber: 63950946,
              enabled: process.env.FORKIT?.toUpperCase() === "TRUE",
            },
          },
        }
      : {}),
  },
};
