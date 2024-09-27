'use client';
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Modal from "@/components/Modal";


const projects = [
  {
    "title": "Eco-Friendly Packaging",
    "description": "A sustainable packaging solution that reduces plastic waste.",
    "link": "https://example.com/eco-friendly-packaging",
    "id": "1",
    "upvoteCount": 150,
    "categories": ["Environment", "Innovation"],
    "commentCount": 25,
    "imageUrl": "https://example.com/images/eco-friendly.jpg"
  },
  {
    "title": "Smart Gardening System",
    "description": "An IoT-based system to optimize plant care and maintenance.",
    "link": "https://example.com/smart-gardening",
    "id": "2",
    "upvoteCount": 120,
    "categories": ["Technology", "Gardening"],
    "commentCount": 30,
    "imageUrl": "https://example.com/images/smart-gardening.jpg"
  },
  {
    "title": "Virtual Reality Travel",
    "description": "Experience the world through immersive VR travel adventures.",
    "link": "https://example.com/vr-travel",
    "id": "3",
    "upvoteCount": 200,
    "categories": ["Travel", "Virtual Reality"],
    "commentCount": 40,
    "imageUrl": "https://example.com/images/vr-travel.jpg"
  },
  {
    "title": "AI-Powered Fitness Coach",
    "description": "A personalized fitness app that adapts to your goals and progress.",
    "link": "https://example.com/ai-fitness",
    "id": "4",
    "upvoteCount": 95,
    "categories": ["Health", "Fitness"],
    "commentCount": 15,
    "imageUrl": "https://example.com/images/ai-fitness.jpg"
  },
  {
    "title": "Blockchain Art Marketplace",
    "description": "A platform for artists to sell their work as NFTs securely.",
    "link": "https://example.com/blockchain-art",
    "id": "5",
    "upvoteCount": 180,
    "categories": ["Art", "Blockchain"],
    "commentCount": 35,
    "imageUrl": "https://example.com/images/blockchain-art.jpg"
  },
  {
    "title": "Mental Health Chatbot",
    "description": "An AI chatbot designed to provide mental health support.",
    "link": "https://example.com/mental-health-bot",
    "id": "6",
    "upvoteCount": 140,
    "categories": ["Health", "Technology"],
    "commentCount": 20,
    "imageUrl": "https://example.com/images/mental-health.jpg"
  },
  {
    "title": "Sustainable Fashion Hub",
    "description": "A marketplace for eco-friendly fashion brands and products.",
    "link": "https://example.com/sustainable-fashion",
    "id": "7",
    "upvoteCount": 110,
    "categories": ["Fashion", "Sustainability"],
    "commentCount": 28,
    "imageUrl": "https://example.com/images/sustainable-fashion.jpg"
  },
  {
    "title": "Crowdsourced Disaster Relief",
    "description": "A platform connecting volunteers with disaster-affected areas.",
    "link": "https://example.com/disaster-relief",
    "id": "8",
    "upvoteCount": 165,
    "categories": ["Social Impact", "Community"],
    "commentCount": 50,
    "imageUrl": "https://example.com/images/disaster-relief.jpg"
  },
  {
    "title": "Personal Finance Tracker",
    "description": "An app that helps you manage your finances and budget effectively.",
    "link": "https://example.com/finance-tracker",
    "id": "9",
    "upvoteCount": 130,
    "categories": ["Finance", "Productivity"],
    "commentCount": 18,
    "imageUrl": "https://example.com/images/finance-tracker.jpg"
  },
  {
    "title": "Smart Home Energy Monitor",
    "description": "Track and reduce your home's energy consumption in real-time.",
    "link": "https://example.com/energy-monitor",
    "id": "10",
    "upvoteCount": 155,
    "categories": ["Technology", "Home"],
    "commentCount": 22,
    "imageUrl": "https://example.com/images/energy-monitor.jpg"
  }
]


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-scroll-background flex flex-col justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      

     <main className="gap-16 flex flex-col">
     <Navbar/>
     <header className="h-auto px-8 sm:px-16 py-4 sm:py-8 flex flex-col items-center justify-center gap-4 ">
        <h1 className="sm:text-2xl lg:text-5xl font-bold">Discover. Support. Engage.</h1>
        <p className="sm:text-base lg:text-2xl text-center text-scroll-black max-w-[900px]">Join our revolutionary platform where creators can showcase their projects, gather community feedback, and raise funds through donations.</p>
        <Link href="/" className="bg-scroll-orange text-white px-4 py-2 text-xs sm:text-sm hover:shadow-md hover:shadow-scroll-foreground rounded-md">Explore Ecosystem</Link>
      </header>
     <div className="sm:h-auto w-full bg-scroll-black p-4 lg:p-16 flex flex-col  ">
      <div className="text-white mt-16 grid grid-cols-2 justify-between">
        <div className="col-span- flex flex-col gap-3">
            <h2 className="font-medium text-xl">Features that Inspire</h2>
            <p className="text-sm"> Our platform offers the tools you need to bring your projects to life and engage with a supportive community. :</p>
        </div>
        <div className="flex justify-end items-end">
          <Link href="/" className="bg-scroll-orange  px-4 py-2 text-xs sm:text-sm hover:shadow-md hover:shadow-scroll-foreground rounded-md">Explore Ecosystem</Link>
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
     <div className="p-4 lg:p-16 flex flex-col gap-4 ">
        <h3  className="font-medium text-xl p-1 border-b-[1px] border-b-scroll-black">Top Launch 🔥</h3>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div key={project.id} className="hover:bg-scroll-orange/10">
              <Card props={project} openModal={handleOpenModal}/>
            </div>
          ))}
        </div>
     </div>
     <Footer/>  
     </main>
    

      <Modal open={isModalOpen} onClick={handleCloseModal} header="Project Details">
        <p>This is the content of the modal. You can display any information here.</p>
      </Modal>
     
    </div>
  );
}
