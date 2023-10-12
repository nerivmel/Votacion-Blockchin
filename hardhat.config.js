require("@nomicfoundation/hardhat-toolbox");
//require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/8pTMLeoynWxTehCX7NTZgkOmra7FjJLS`,
      accounts: ["97fa447d38d49c7b50acd0cc5679dd32e9f4ad1aac205779398b4a5a3105642a"],
    },
  },
};