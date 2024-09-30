import React from 'react'
import Navbar from '../components/Navbar'
import ProjectList from '../components/ProjectList'



const Ecosystem = () => {
  return (
    <main  className="bg-scroll-background flex flex-col justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <div className=" flex flex-col">
      <Navbar />
     <ProjectList/>

      </div>

    </main>
  )
}

export default Ecosystem