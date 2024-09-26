import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full p-4'>
        <div className='flex gap-4 sm:gap-16'>
            <Link href="/" className='text-base'> ScrollVerse <sub>made with 💖</sub></Link>
            <div className='flex gap-4'>
                <Link href="/" className='text-sm text-black hover:text-scroll-orange'>Ecosystem</Link>
                <Link href="/" className='text-sm text-black hover:text-scroll-orange'>Bridge</Link>
                
            </div>
        </div>
        <div>
            <button className='bg-scroll-foreground text-scroll-black px-4 py-2 text-sm rounded-lg'>Connect Wallet</button>
        </div>
       

    </nav>
    
  )
}

export default Navbar