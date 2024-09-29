'use client'
import React, { useContext, useState}  from 'react'
import { projects } from "@/lib/data";
import Card from './Card';
import { Web3Context } from './context/WalletProvider';
import { FaPlus } from "react-icons/fa6";
import Modal from './Modal';

const ProjectList = () => {
  const { account,projectVoting } = useContext(Web3Context);
  const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleOpenModal = () => {
    //   setIsModalOpen(true);
    // };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    const handleRegisterProject = async () => {
      if (projectVoting) {
        const name = "New Project";
        const description = "Project description";
        const website = "https://example.com";
        await projectVoting.registerProject(name, description, website, account);
      }
    };


    // const fetchProjects = async () => {0
    //   if (!projectVoting) return;
  
    //   try {
    //     const ids = await projectVoting.getAllProjects();
    //     console.log("Project IDs:", ids);
  
    //     const details = await projectVoting.getProjectsDetails();
    //   console.log("Project Details:", details);
    //   } catch (error) {
    //     console.error("Error fetching projects:", error);
    //   }
    // };
  
    // useEffect(() => {
    //   fetchProjects();
    // }, []);
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