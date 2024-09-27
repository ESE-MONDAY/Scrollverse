import Link from 'next/link';
import React from 'react'
import { FaCaretUp, FaExternalLinkAlt } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";

const Card = ({props, openModal}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex-col flex sm:flex-row gap-4'>
            <div className='border-[1px] border-scroll-black rounded-sm flex flex-col items-center h-10 w-10 p-1 bg-scroll-black text-white'>Hellp</div>

            <div className='flex flex-col gap-2'>
                <p className='text-xs '>
                <span className='font-semibold'>{props.title}</span> -  <span className='text-xs text-scroll-black/80'>{props.description}</span>
                <Link href={props.link} target='_blank' className='text-xs text-scroll-black px-1 inline-flex'><FaExternalLinkAlt /></Link>
                </p>
                <div className='flex gap-2'>
                    <button onClick={openModal} className='flex gap-1 items-center  text-xs hover:text-scroll-orange'><IoChatbubbleEllipses/> {props.commentCount}</button>  •
                    <p className='flex gap-1 items-center  text-xs'> {props.categories.map((category) => (
                        <span className='text-xs text-scroll-black/80' key={category}>{category} |
                        </span>
                    ))}</p>
                </div>
            </div>
        </div>
        <div className='border-[1px] border-scroll-black rounded-sm flex flex-col items-center h-10 w-10 p-1 hover:bg-scroll-black hover:text-white'>
        <FaCaretUp className='text-2xl' />
        <p className='text-sm font-medium'>{props.upvoteCount}</p>

        </div>
    </div>
  )
}

export default Card