'use client'
import React, { createContext, useState, useCallback } from 'react';
import Web3 from 'web3';

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  const formatWalletAddress = useCallback((address) => {
    if (!address) return "No address provided";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, []);

  const isCorrectNetwork = useCallback(async () => {
    if (!web3) return false;
    const chainId = await web3.eth.getChainId();
    return chainId === 534351; // Decimal representation of 0x82753
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
              params: [{ chainId: '0x82753' }],
            });
          } catch (error) {
            if (error.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0x82753',
                  chainName: 'Scroll Sepolia',
                  rpcUrls: ['https://sepolia-rpc.scroll.io'],
                  nativeCurrency: {
                    name: 'Scroll ETH',
                    symbol: 'ETH',
                    decimals: 18,
                  },
                  blockExplorerUrls: ['https://sepolia-blockscout.scroll.io'],
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