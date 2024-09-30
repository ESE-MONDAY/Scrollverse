'use client'
import React, { useContext, useState, useEffect}  from 'react'
import Card from './Card';
import { Web3Context } from './context/WalletProvider';
import { FaPlus } from "react-icons/fa6";
import Modal from './Modal';
import Form from './form';



const ProjectList = () => {
  const { account, registerProject, vote } = useContext(Web3Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [project, setProject] = useState([])
      interface Project {
        id: number;
        // Add other properties relevant to the project
    }
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const fetchProjects = async () => {
      try {
          const response = await fetch('/api/projects'); // Adjust the URL as needed
          if (!response.ok) throw new Error('Failed to fetch projects');
          const data = await response.json();
          console.log(data);
          setProject(data);
      } catch (error) {
          console.error(error);
      }
  };
    useEffect(() => {
      fetchProjects();
  }, []);
   
  return (
    <div className="p-4 lg:p-8 flex flex-col gap-4 ">
      <div className='flex justify-between p-1 border-b-[1px] border-b-scroll-black'>
      <h3  className="font-medium text-xl ">Top Launch 🔥</h3>
      <button disabled={account == null} onClick={handleOpenModal}   className= " border-[1px]  border-scroll-black hover:bg-scroll-black hover:text-white disabled:bg-scroll-black/10  disabled:hover:text-scroll-black disabled:cursor-not-allowed flex items-center gap-1 text-scroll-black text-sm p-2 rounded-md"><FaPlus /> Add Project</button>
      </div>
    
    <div className="flex flex-col gap-4">
      {project.length === 0 ? <p>No projects found</p>:
      project.map((project: Project) => (
        <div key={project.id} className="hover:bg-scroll-orange/10">
      <Card props={{ project, fetchProjects, vote }} />
      </div>
        
      ))}
    </div>
    <Modal open={isModalOpen} onClick={handleCloseModal} >
    <Form registerProject={registerProject} account={account} closeModal={handleCloseModal} fetchProject={fetchProjects}  />
    </Modal>
 </div>
  )
}

export default ProjectList