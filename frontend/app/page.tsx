'use client';
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";


import Marquee from "@/components/ui/marquee";
import ProjectList from "@/components/ProjectList";




export default function Home() {
 
  return (
    <div className="bg-scroll-background flex flex-col justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      

     <main className="gap-16 flex flex-col">
     <Navbar/>
     <header className="h-auto px-8 sm:px-16 py-4 sm:py-8 flex flex-col items-center justify-center gap-4 ">
        <h1 className="sm:text-2xl lg:text-5xl font-bold">Discover. Support. Engage.</h1>
        <p className="sm:text-base lg:text-2xl text-center text-scroll-black max-w-[900px]">Join our revolutionary platform where creators can showcase their projects, gather community feedback, and raise funds through donations.</p>
        <Link href="/ecosystem" className="bg-scroll-orange text-white px-4 py-2 text-xs sm:text-sm hover:shadow-md hover:shadow-scroll-foreground rounded-md">Explore Ecosystem</Link>
      </header>
     <div className="sm:h-auto w-full bg-scroll-black p-4 lg:p-16 flex flex-col  ">
      <div className="text-white mt-16 grid grid-cols-2 justify-between">
        <div className="col-span- flex flex-col gap-3">
            <h2 className="font-medium text-xl">Features that Inspire</h2>
            <p className="text-sm"> Our platform offers the tools you need to bring your projects to life and engage with a supportive community. :</p>
        </div>
        <div className="flex justify-end items-end">
          <Link href="/ecosystem"  className="bg-scroll-orange  px-4 py-2 text-xs sm:text-sm hover:shadow-md hover:shadow-scroll-foreground rounded-md">Explore Ecosystem</Link>
        </div>
   
      </div>
      

      <div className="text-white  grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 mt-16 ">
        <div className="flex flex-col gap-3 col-span-1">
          <h3 className="font-medium text-sm sm:text-base">Showcase Your Projects</h3>
          <p className="text-xs sm:text-sm">Easily list your unique projects with detailed descriptions, ensuring that your ideas capture the attention they deserve.</p>
        </div>
        <div className="flex flex-col gap-3 col-span-1">
          <h3 className="font-medium text-sm sm:text-base">Engage the Community</h3>
          <p className="text-xs sm:text-sm">Utilize our voting system to receive constructive feedback from the community. Upvote or downvote projects to help refine and improve innovative concepts.</p>
        </div>
        <div className="flex flex-col gap-3 col-span-1">
          <h3 className="font-medium text-sm sm:text-base">Fuel Your Passion</h3>
          <p className="text-xs sm:text-sm">Enable direct donations to your project, allowing supporters to contribute and help turn your vision into reality.</p>
        </div>
        <div className="flex flex-col gap-3 col-span-1">
          <h3 className="font-medium text-sm sm:text-base">Transparent and Trustworthy</h3>
          <p className="text-xs sm:text-sm">Every vote and donation is securely recorded on the blockchain, ensuring transparency and trust in the support you receive.</p>
        </div>
      </div>

     </div>
   <ProjectList/>
     <Marquee />
     <Footer/>  
     </main>
    

      
     
    </div>
  );
}
