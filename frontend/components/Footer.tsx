import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-black flex justify-between p-4 sm:p-16'>
       
        <Link href="/" className='text-base text-white'> ScrollVerse</Link>
        <div className='flex flex-col gap-3'>
            <Link href="/" className='text-sm text-white hover:text-scroll-orange'>Terms of Service</Link>
            <Link href="/" className='text-sm text-white hover:text-scroll-orange'>Privacy Policy</Link>
        </div>
        <div className='text-white flex flex-col gap-3'>
            <h3>Follow us 👇🏼</h3>
            <div className='flex gap-4'>
                <Link href="/" className='text-sm text-white hover:text-scroll-orange'><FaTwitter /></Link>
                <Link href="/" className='text-sm text-white hover:text-scroll-orange'><FaDiscord/></Link>
                <Link href="/" className='text-sm text-white hover:text-scroll-orange'><FaGithub/></Link>
            </div>
        </div>
            
        </div>
  )
}

export default Footer