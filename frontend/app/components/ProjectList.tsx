'use client'
import React, { useContext, useState}  from 'react'
import { projects } from "@/lib/data";
import Card from './Card';
import { Web3Context } from './context/WalletProvider';
import { FaPlus } from "react-icons/fa6";
import Modal from './Modal';
import { createHash } from 'crypto';


const ProjectList = () => {
  const { account, registerProject } = useContext(Web3Context);
  const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleOpenModal = () => {
    //   setIsModalOpen(true);
    // };

    const hashUUID = (uuid: string) => {
      return createHash('sha256').update(uuid).digest('hex');
  };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

   
    

    const name = "hello";
    const description = "hello";
    const website = "hello";

    const handleRegisterProject = async () => {
        const response = await fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, website, creator: account }),
        });

        const data = await response.json();
      
        console.log('Registered project:', data);

        // Assuming data.projectId contains the project ID
        if (data.id) {
          const hashedProjectId = hashUUID(data.id); // Hash the UUID
              const projectId = parseInt(hashedProjectId.slice(0, 16), 16);
            try {
              
                const tx = await registerProject(projectId);
                const receipt = await tx.wait(); 
                if (receipt.status === 1) {
                  console.log('Project registered on the blockchain:', receipt);
                  // Optionally check for events
                  const event = receipt.events?.find((e: { event: string }) => e.event === 'ProjectRegistered');
                  if (event) {
                      console.log('Project registration confirmed:', event.args);
                  }
                  // Show success message to the user
              } else {
                  console.error('Transaction failed:', receipt);
                  // Show error message to the user
              }
                console.log(projectId);
                console.log('Project registered on the blockchain successfully!');
            } catch (error) {
                console.error('Error registering project on the blockchain:', error);
            }
        } else {
            console.error('No project ID received from the database.');
        }
    };

  


   
  return (
    <div className="p-4 lg:p-8 flex flex-col gap-4 ">
      <div className='flex justify-between p-1 border-b-[1px] border-b-scroll-black'>
      <h3  className="font-medium text-xl ">Top Launch 🔥</h3>
      <button disabled={account == null} onClick={handleRegisterProject}   className= " border-[1px]  border-scroll-black hover:bg-scroll-black hover:text-white disabled:bg-scroll-black/10  disabled:hover:text-scroll-black disabled:cursor-not-allowed flex items-center gap-1 text-scroll-black text-sm p-2 rounded-md"><FaPlus /> Add Project</button>
      </div>
    
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <div key={project.id} className="hover:bg-scroll-orange/10">
          <Card props={project} />
        </div>
      ))}
    </div>
    <Modal open={isModalOpen} onClick={handleCloseModal} >
      hello
    </Modal>
 </div>
  )
}

export default ProjectList