'use client'
import React, { createContext, useState, useCallback } from 'react';
import Web3 from 'web3';

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  const SCROLL_SEPOLIA_CHAIN_ID = '0x82751'; // 534351 in decimal
  const SCROLL_SEPOLIA_RPC_URL = 'https://sepolia-rpc.scroll.io';
  const SCROLL_SEPOLIA_BLOCK_EXPLORER = 'https://sepolia.scrollscan.com';

  const formatWalletAddress = useCallback((address) => {
    if (!address) return "No address provided";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, []);

  const isCorrectNetwork = useCallback(async () => {
    if (!web3) return false;
    const chainId = await web3.eth.getChainId();
    return chainId === parseInt(SCROLL_SEPOLIA_CHAIN_ID, 16);
  }, [web3]);

  const connectWallet = useCallback(async () => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        if (!await isCorrectNetwork()) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: SCROLL_SEPOLIA_CHAIN_ID }],
            });
          } catch (error) {
            if (error.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: SCROLL_SEPOLIA_CHAIN_ID,
                  chainName: 'Scroll Sepolia',
                  rpcUrls: [SCROLL_SEPOLIA_RPC_URL],
                  nativeCurrency: {
                    name: 'Ether',
                    symbol: 'ETH',
                    decimals: 18,
                  },
                  blockExplorerUrls: [SCROLL_SEPOLIA_BLOCK_EXPLORER],
                }],
              });
            } else {
              console.error('Error switching chains:', error);
              return;
            }
          }
        }

        const accounts = await web3Instance.eth.getAccounts();
        const shortenedWalletAddress = formatWalletAddress(accounts[0]);
        setAccount(shortenedWalletAddress);
      } catch (error) {
        console.error('Failed to connect to Ethereum:', error);
      }
    } else {
      console.log('MetaMask is not installed');
    }
  }, [formatWalletAddress, isCorrectNetwork]);

  const signMessage = useCallback(async (message) => {
    if (!web3 || !account) {
      throw new Error("No account connected");
    }
    try {
      const fullAccount = await web3.eth.getAccounts().then(accounts => accounts[0]);
      const signature = await web3.eth.personal.sign(message, fullAccount, '');
      return signature;
    } catch (error) {
      console.error('Failed to sign message:', error);
      throw error;
    }
  }, [web3, account]);

  const disconnectWallet = useCallback(() => {
    setWeb3(null);
    setAccount(null);
  }, []);

  return (
    <Web3Context.Provider value={{ web3, account, connectWallet, signMessage, disconnectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};