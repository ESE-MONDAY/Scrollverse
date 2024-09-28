'use client'
import React, { createContext, useState } from 'react';
import Web3 from 'web3';

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);


  function formatWalletAddress(address) {
    if (!address) {
      return "No address provided";
    }
    const firstPart = address.slice(0, 6);
    const lastPart = address.slice(-4);
    return `${firstPart}...${lastPart}`;
  }

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if (chainId !== 0x5) { // Using string for comparison
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x5' }],
            });
          } catch (error) {
            if (error.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: 0x5,
                  chainName: 'Scroll Sepolia',
                  rpcUrls: ['https://sepolia-rpc.scroll.io/'], // Updated RPC URL
                  nativeCurrency: {
                    name: 'Scroll ETH',
                    symbol: 'ETH',
                    decimals: 18,
                  },
                  blockExplorerUrls: ['https://sepolia.scroll.io'],
                }],
              });
            } else {
              console.error('Error switching chains:', error);
            }
          }
        }
  
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
  
        const accounts = await web3Instance.eth.getAccounts();
        const shortenedWalletAddress = formatWalletAddress(accounts[0]);
        setAccount(shortenedWalletAddress);
        const message = 'Welcome to Scroll Sepolia!';
      const signature = await signMessage(message);
      console.log('Signed Message:', signature);
      } catch (error) {
        console.error('Failed to connect to Ethereum:', error);
      }
    } else {
      console.log('MetaMask is not installed');
    }
  };
  

  const signMessage = async (message) => {
    if (!account) {
      throw new Error("No account connected");
    }
    try {
      const web3Instance = new Web3(window.ethereum);
      const signature = await web3Instance.eth.personal.sign(message, account);
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
    <Web3Context.Provider value={{ web3, account, connectWallet, signMessage, disconnectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};
