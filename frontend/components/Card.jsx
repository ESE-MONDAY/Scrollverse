'use client'
import Link from 'next/link';
import React, {useState} from 'react'
import { FaCaretUp, FaExternalLinkAlt } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Modal from "@/components/Modal";

const Card = ({props}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className='flex justify-between items-center'>
        <div className='flex-col flex sm:flex-row gap-4'>
            <div className='border-[1px] border-scroll-black rounded-sm flex flex-col items-center h-10 w-10 p-1 bg-scroll-black text-white'>Hellp</div>

            <div className='flex flex-col gap-2'>
                <p className='text-xs '>
                <span className='font-semibold'>{props.title}</span> -  <span className='text-xs text-scroll-black/80'>{props.description}</span>
                <Link href={props.link} target='_blank' className='text-xs text-scroll-black px-1 inline-flex hover:text-scroll-orange'><FaExternalLinkAlt /></Link>
                </p>
                <div className='flex gap-2'>
                    <button onClick={handleOpenModal} className='flex gap-1 items-center  text-xs hover:text-scroll-orange'><IoChatbubbleEllipses/> {props.commentCount}</button>  •
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
        <Modal open={isModalOpen} onClick={handleCloseModal} header={props.title} className='p-4 flex flex-col gap-1'>
        <div className='border-[1px] border-scroll-black rounded-sm flex flex-col items-center h-10 w-10 p-1 bg-scroll-black text-white'>Hellp</div>
        <div className=''>
            <h3 className='font-semibold text-xl sm:text-3xl'>{props.name}</h3>
            <div className='flex justify-between sm:items-center gap-1 flex-col sm:flex-row'>
                <p>{props.title} <Link href={props.link} target='_blank' className='text-xs text-scroll-black px-1 inline-flex hover:text-scroll-orange'><FaExternalLinkAlt /></Link></p>
                <div className='flex w-full sm:w-[250px]  justify-end gap-2 items-center'>
                    
                    <div className='border-[1px] border-scroll-black rounded-sm flex  items-center gap-1  p-1 hover:bg-scroll-black hover:text-white'>
                        <FaCaretUp className='text-2xl' />
                        <p>Upvote</p>
                        <p className='text-sm font-medium'>{props.upvoteCount}</p>

                        </div>

                </div>
            </div>
        </div>

       <div className='flex flex-col gap-1'>
       <p className='text-xs text-scroll-black/80'>
                 {props.description}</p>
                 <p className='flex gap-1 items-center flex-wrap  text-xs'> Category:  {props.categories.map((category) => (
                        <span className='text-xs text-scroll-black/80 bg-scroll-foreground rounded p-[2px] font-medium' key={category}>{category}
                        </span>
                    ))} <span>lauched by {props.author}</span></p>
       </div>
       <div className='mt-2'>
        <p className='font-medium text-sm'>Amount Raised
            <span className='font-bold'> ${props.amountRaised}</span>
        </p>
       </div>

       <div className='flex justify-between mt-8'>
        <div className='w-full border-r-[1px] flex flex-col items-center justify-center'>
            <p className='text-scroll-black font-medium text-sm'>Upvotes</p>
            <p className='text-scroll-black font-semibold text-xs'>{props.upvoteCount}</p>
        </div>
        <div className='w-full border-r-[1px] flex flex-col items-center justify-center'>
            <p className='text-scroll-black font-medium text-sm'>Downvote</p>
            <p className='text-scroll-black font-semibold text-xs'>{props.downvoteCount}</p>
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-scroll-black font-medium text-sm'>Comments</p>
            <p className='text-scroll-black font-semibold text-xs'>{props.commentCount}</p>
        </div>
       </div>
      
      </Modal>
    </div>
  )
}

export default Card