require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { PRIVATE_KEY, RPC_URL } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.6",
  networks: {
    sepolia: {
      url: `https://scroll-sepolia.g.alchemy.com/v2/${RPC_URL}`,
      accounts: [`${PRIVATE_KEY}`]
    },
    scrollSepolia: {
      url: 'https://sepolia-rpc.scroll.io',
      accounts: [`${PRIVATE_KEY}`]
    }
  },
  
  etherscan: {
    apiKey: {
      scrollSepolia: process.env.SCROLL_ETHERSCAN_API_KEY, // Ensure this is in your .env
    },
    customChains: [
      {
        network: 'scrollSepolia',
        chainId: 534351,
        urls: {
          apiURL: 'https://api-sepolia.scrollscan.com/api',
          browserURL: 'https://sepolia.scrollscan.com/',
        },
      },
    ],
  },
  
  sourcify: {
    enabled: true
  }
};
