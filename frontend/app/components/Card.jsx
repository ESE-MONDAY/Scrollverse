'use client'
import Link from 'next/link';
import React, {useState} from 'react'
import { FaCaretUp, FaExternalLinkAlt } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Modal from "../components/Modal";
import { IoMdCloseCircleOutline } from "react-icons/io";


const Card = ({props}) => {
    const { project, fetchProjects, vote,account } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

    const handleOpenDonationModal = () => {
        setIsDonationModalOpen(true);
    }
    const handleCloseDonationModal = () => {
        setIsDonationModalOpen(false);
    }

    
    const handleUpvote = async () => {
        // First, call the blockchain method
        const blockchainResponse = await vote(project.id, true);
        
        // Check if the blockchain operation was successful
        if (blockchainResponse.success) {
            // Proceed to update the database if the blockchain operation succeeded
            const response = await fetch('/api/projects', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ projectId: project.id }),
            });
    
            const updatedProject = await response.json();
            fetchProjects();
            console.log('Updated project:', updatedProject);
        } else {
            console.error('Blockchain operation failed:', blockchainResponse.error);
        }
    };
    
    
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div onClick={handleOpenModal}  className='flex justify-between items-center'>
        <div className='flex-col flex sm:flex-row gap-4'>
            <div className='border-[1px] border-scroll-black rounded-sm flex flex-col items-center h-10 w-10 p-1 bg-scroll-black text-white'>PI</div>

            <div className='flex flex-col gap-2'>
                <p className='text-xs '>
                <span className='font-semibold'>{props.project.name}</span> -  <span className='text-xs text-scroll-black/80'>{project.shortDescription}</span>
                <Link href={project.website} target='_blank' className='text-xs text-scroll-black px-1 inline-flex hover:text-scroll-orange'><FaExternalLinkAlt /></Link>
                </p>
                <div className='flex gap-2'>
                    <button onClick={handleOpenModal} className='flex gap-1 items-center  text-xs hover:text-scroll-orange'><IoChatbubbleEllipses/> {project.upvotes}</button>  •
                    <p className='flex gap-1 items-center  text-xs'> {project.categories.map((category) => (
                        <span className='text-xs text-scroll-black/80' key={category}>{category} |
                        </span>
                    ))}</p>
                </div>
            </div>
        </div>
        <div className='border-[1px] border-scroll-black rounded-sm flex flex-col items-center h-10 w-10 p-1 hover:bg-scroll-black hover:text-white'>
        <FaCaretUp className='text-2xl' />
        <p className='text-sm font-medium'>{project.upvotes}</p>

        </div>
        <Modal open={isModalOpen} onClick={handleCloseModal} header={project.name} className='p-4 flex flex-col gap-1'>
        <div className='border-[1px] bg-sc border-scroll-black rounded-sm flex flex-col items-center h-10 w-10 p-1 bg-scroll-black text-white'>PI</div>
        <div className=''>
            <h3 className='font-semibold text-xl sm:text-3xl'>{project.name}</h3>
            <div className='flex justify-between sm:items-center gap-1 flex-col sm:flex-row'>
                <p>{project.shortDescription} <Link href={project.website} target='_blank' className='text-xs text-scroll-black px-1 inline-flex hover:text-scroll-orange'><FaExternalLinkAlt /></Link></p>
                <div className='flex w-full sm:w-[250px]  justify-end gap-2 items-center'>
                    <div className='flex flex-col'>
                    {!account && <small className='text-xs text-scroll-black/80 m-1'>Connect your wallet to upvote</small>}
                    <button disabled={!account} onClick={handleUpvote} className='border-[1px]  border-scroll-black hover:bg-scroll-black  hover:text-white disabled:bg-scroll-black/10  disabled:hover:text-scroll-black disabled:cursor-not-allowed flex justify-center items-center gap-2 text-scroll-black text-sm p-2 rounded-md'>
                        <FaCaretUp className='text-2xl' />
                        <p>Upvote</p>
                        <p className='text-sm font-medium'>{project.upvotes}</p>

                        </button>
                    </div>
                    

                </div>
            </div>
        </div>

       <div className='flex flex-col gap-1'>
       <p className='text-xs text-scroll-black/80'>
                 {project.fullDescription}</p>
                 <p className='flex gap-1 items-center flex-wrap  text-xs'> Category:  {project.categories.map((category) => (
                        <span className='text-xs text-scroll-black/80 bg-scroll-foreground rounded p-[2px] font-medium' key={category}>{category}
                        </span>
                    ))} <span>lauched by {project.creatorName}</span></p>
       </div>
       <div className='mt-2 flex justify-between items-center'>
        <p className='font-medium text-sm'>Amount Raised
            <span className='font-bold'> ${project.totalDonations}</span>
        </p>
        <button onClick={handleOpenDonationModal} className='bg-scroll-orange p-2 rounded-md text-white hover:shadow-md '>Donate</button>
       </div>

       <div className='flex justify-between mt-8'>
        <div className='w-full border-r-[1px] flex flex-col items-center justify-center'>
            <p className='text-scroll-black font-medium text-sm'>Upvotes</p>
            <p className='text-scroll-black font-semibold text-xs'>{project.upvotes}</p>
        </div>
        <div className='w-full border-r-[1px] flex flex-col items-center justify-center'>
            <p className='text-scroll-black font-medium text-sm'>Downvote</p>
            <p className='text-scroll-black font-semibold text-xs'>{project.downvotes}</p>
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-scroll-black font-medium text-sm'>Comments</p>
            <p className='text-scroll-black font-semibold text-xs'>{project.upvotes}</p>
        </div>
       </div>
      
      </Modal>
      <Modal open={isDonationModalOpen} onClick={handleCloseDonationModal} header={props.title} className='p-4 flex flex-col gap-1 '>
        <div className='max-w-[400px] mx-auto  rounded w-full p-2 border-[1px] border-scroll-foreground'>
            <div className='flex justify-between'>
            <h3 className='font-semibold text-sm'>Donate to {project.name}</h3>
        
        <button onClick={handleCloseDonationModal}>
        <IoMdCloseCircleOutline />
        </button>
            </div>
          
        </div>
      </Modal>
    </div>
  )
}

export default Card