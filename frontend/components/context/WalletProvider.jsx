'use client'
import React, { createContext, useState } from 'react';
import { Web3} from 'web3';
import ProjectVoting  from './PrivateVoting';




export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  // const web3 = new Web3(window.ethereum);
  const [account, setAccount] = useState(null);
  const [formattedAccount, setFormmatedAccount] = useState(null);
  const [projectVoting, setProjectVoting] = useState(null); 



  function formatWalletAddress(address) {
    if (!address) {
      return ""; // Return an empty string instead of a message
    }
    const firstPart = address.slice(0, 6);
    const lastPart = address.slice(-4);
    return `${firstPart}...${lastPart}`;
  }



const connectWallet = async () => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });

      const targetChainId = '0x8274f'; // Target chain ID in hex format

      if (chainId !== targetChainId) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: targetChainId }],
          });
        } catch (error) {
          if (error.code === 4902) {
            // Chain not recognized, add it
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: targetChainId,
                chainName: 'Scroll Sepolia',
                rpcUrls: ['https://sepolia-rpc.scroll.io'],
                nativeCurrency: {
                  name: 'Ethereum',
                  symbol: 'ETH',
                  decimals: 18,
                },
                blockExplorerUrls: ['https://sepolia.scrollscan.com/'],
              }],
            });
          } else {
            console.error('Error switching chains:', error);
          }
        }
      }
      
      const shortenedWalletAddress = formatWalletAddress(accounts[0]);
      setFormmatedAccount(shortenedWalletAddress);
      setAccount(accounts[0]);
      const signature = signMessage("Welcome to Scrollverse!");
      console.log(accounts[0], chainId, signature);
    } catch (err) {
      console.error(err.message);
    }
  } else {
    console.log("Please install MetaMask");
  }
};



  const signMessage = async (message) => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (!accounts) {
      throw new Error("No account connected");
    }
    try {
      const web3Instance = new Web3(window.ethereum);
      const signature = await web3Instance.eth.personal.sign(message, accounts[0], '');
      setProjectVoting(new ProjectVoting(web3Instance)); 
      return signature;
    } catch (error) {
      console.error('Failed to sign message:', error);
    }
  };
  
  const disconnectWallet = () => {
    setWeb3(null);
    setAccount(null);
  };

  return (
    <Web3Context.Provider value={{ account, connectWallet, signMessage, disconnectWallet, projectVoting, formattedAccount }}>
      {children}
    </Web3Context.Provider>
  );
};
