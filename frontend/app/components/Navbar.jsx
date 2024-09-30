'use client'
import React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import { Web3Context } from './context/WalletProvider';


const Navbar= () => {
  const { account, connectWallet,disconnectWallet } = useContext(Web3Context);

  const handleConnectAndSign = async () => {
    try {

      await connectWallet();
  } catch (error) {
      console.error("Error connecting or signing:", error);
  }

    
  };

  return (
    <nav className='flex justify-between items-center w-full p-4 sm:p-8'>
      <div className='flex gap-4 sm:gap-16'>
        <Link href="/" className='text-base'>ScrollVerse <sub>made with 💖</sub></Link>
        <div className='hidden sm:flex gap-4'>
          <Link href="/ecosystem" className='text-sm text-black hover:text-scroll-orange'>Ecosystem</Link>
          <Link href="/" className='text-sm text-black hover:text-scroll-orange'>Bridge</Link>
        </div>
      </div>
      <div>
        {!account ? (
          <button onClick={handleConnectAndSign} className='bg-scroll-foreground text-scroll-black px-4 py-2 text-sm rounded-lg'>
            Connect Wallet
          </button>
        ) : (
          <button onClick={disconnectWallet} className='text-sm text-black bg-scroll-foreground px-4 py-2 '>
            {account.slice(0, 6)}...{account.slice(-4)} {/* Displaying a shortened version of the address */}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
