import React from 'react'
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'

const projects = [
  {
    "projectname": "Ecotopia",
    "title": "Eco-Friendly Packaging",
    "author": "John Doe",
    "authorLink": "https://example.com/john-doe",
    "description": "A sustainable packaging solution that reduces plastic waste.",
    "info": "This project aims to create eco-friendly packaging solutions that are both sustainable and cost-effective. By using biodegradable materials and innovative design, we can reduce the environmental impact of traditional packaging methods.",
    "link": "https://example.com/eco-friendly-packaging",
    "amountRaised": "1000",
    "id": "1",
    "upvoteCount": 150,
    "downvoteCount": 10,
    "categories": ["Environment", "Innovation"],
    "commentCount": 25,
    "imageUrl": "https://example.com/images/eco-friendly.jpg"
  },
  {
    "name": "SmarGar",
    "title": "Smart Gardening System",
    "author": "Jane Smith",
    "authorLink": "https://example.com/jane-smith",
    "description": "An IoT-based system to optimize plant care and maintenance.",
    "info": "Our smart gardening system uses sensors and automation to monitor and manage plant health, watering schedules, and environmental conditions. With real-time data and insights, you can ensure your plants thrive with minimal effort.",
    "link": "https://example.com/smart-gardening",
    "amountRaised": "2500",
    "id": "2",
    "upvoteCount": 120,
    "downvoteCount": 5,
    "categories": ["Technology", "Gardening"],
    "commentCount": 30,
    "imageUrl": "https://example.com/images/smart-gardening.jpg"
  },
  {
    "name": "VrTrav",
    "title": "Virtual Reality Travel",
    "author": "Alice Johnson",
    "authorLink": "https://example.com/alice-johnson",
    "description": "Experience the world through immersive VR travel adventures.",
    "info": "Our VR travel platform allows users to explore destinations around the globe from the comfort of their homes. With stunning visuals and interactive experiences, you can embark on virtual adventures like never before.",
    "link": "https://example.com/vr-travel",
    "amountRaised": "3000",
    "id": "3",
    "upvoteCount": 200,
    "downvoteCount": 20,
    "categories": ["Travel", "Virtual Reality"],
    "commentCount": 40,
    "imageUrl": "https://example.com/images/vr-travel.jpg"
  },
  {
    "name": "FitAI",
    "title": "AI-Powered Fitness Coach",
    "author": "David Brown",
    "authorLink": "https://example.com/david-brown",
    "description": "A personalized fitness app that adapts to your goals and progress.",
    "info": "Our AI fitness coach uses machine learning algorithms to create customized workout plans and track your fitness journey. Whether you're a beginner or an experienced athlete, our app can help you achieve your fitness goals.",
    "link": "https://example.com/ai-fitness",
    "amountRaised": "1500",
    "id": "4",
    "upvoteCount": 95,
    "downvoteCount": 15,
    "categories": ["Health", "Fitness"],
    "commentCount": 15,
    "imageUrl": "https://example.com/images/ai-fitness.jpg"
  },
  {
    "name": "BlockArt",
    "title": "Blockchain Art Marketplace",
    "author": "Sarah Lee",
    "authorLink": "https://example.com/sarah-lee",
    "description": "A platform for artists to sell their work as NFTs securely.",
    "info": "Our blockchain art marketplace leverages NFT technology to provide artists with a secure and transparent platform to showcase and sell their digital creations. Collectors can discover unique artworks and support talented creators.",
    "link": "https://example.com/blockchain-art",
    "amountRaised": "2000",
    "id": "5",
    "upvoteCount": 180,
    "downvoteCount": 25,
    "categories": ["Art", "Blockchain"],
    "commentCount": 35,
    "imageUrl": "https://example.com/images/blockchain-art.jpg"
  },
  {
    "name": "MentalBot",
    "title": "Mental Health Chatbot",
    "author": "Alex Green",
    "authorLink": "https://example.com/alex-green",
    "description": "An AI chatbot designed to provide mental health support.",
    "info": "Our mental health chatbot offers a safe and confidential space for individuals to seek guidance and resources for their mental well-being. Whether you're feeling stressed, anxious, or overwhelmed, our chatbot is here to help.",
    "link": "https://example.com/mental-health-bot",
    "amountRaised": "1200",
    "id": "6",
    "upvoteCount": 140,
    "downvoteCount": 10,
    "categories": ["Health", "Technology"],
    "commentCount": 20,
    "imageUrl": "https://example.com/images/mental-health.jpg"
  },
  {
    "name" : "SustainHub",
    "title": "Sustainable Fashion Hub",
    "author": "Emily White",
    "authorLink": "https://example.com/emily-white",
    "description": "A marketplace for eco-friendly fashion brands and products.",
    "info": "Our sustainable fashion hub connects conscious consumers with ethical and eco-friendly fashion brands. Discover stylish and sustainable clothing, accessories, and beauty products that align with your values.",
    "link": "https://example.com/sustainable-fashion",
    "amountRaised": "1800",
    "id": "7",
    "upvoteCount": 110,
    "downvoteCount": 5,
    "categories": ["Fashion", "Sustainability"],
    "commentCount": 28,
    "imageUrl": "https://example.com/images/sustainable-fashion.jpg"
  },
  {
    "name": "DisasterRelief",
    "title": "Crowdsourced Disaster Relief",
    "author": "Michael Grey",
    "authorLink": "https://example.com/michael-grey",
    "description": "A platform connecting volunteers with disaster-affected areas.",
    "info": "Our crowdsourced disaster relief platform enables volunteers to contribute their time, resources, and skills to support communities in need. From natural disasters to humanitarian crises, you can make a difference when it matters most.",
    "link": "https://example.com/disaster-relief",
    "amountRaised": "2200",
    "id": "8",
    "upvoteCount": 165,
    "downvoteCount": 20,
    "categories": ["Social Impact", "Community"],
    "commentCount": 50,
    "imageUrl": "https://example.com/images/disaster-relief.jpg"
  },
  {
    "name": "FinanceTrack",
    "title": "Personal Finance Tracker",
    "author": "Chris Taylor",
    "authorLink": "https://example.com/chris-taylor",
    "description": "An app that helps you manage your finances and budget effectively.",
    "info": "Our personal finance tracker simplifies the process of budgeting, expense tracking, and financial planning. Take control of your money and achieve your financial goals with our intuitive and user-friendly app.",
    "link": "https://example.com/finance-tracker",
    "amountRaised": "1300",
    "id": "9",
    "upvoteCount": 130,
    "downvoteCount" : 25,
    "categories": ["Finance", "Productivity"],
    "commentCount": 18,
    "imageUrl": "https://example.com/images/finance-tracker.jpg"
  },
  {
    "name": "EnergyMonitor",
    "title": "Smart Home Energy Monitor",
    "author": "Laura Adams",
    "authorLink": "https://example.com/laura-adams",
    "description": "Track and reduce your home's energy consumption in real-time.",
    "info": "Our smart home energy monitor provides insights into your electricity usage, helping you identify energy-saving opportunities and reduce your carbon footprint. Monitor your energy consumption in real-time and make informed decisions to save money and protect the environment.",
    "link": "https://example.com/energy-monitor",
    "amountRaised": "1700",
    "id": "10",
    "upvoteCount": 155,
    "downvoteCount": 15,
    "categories": ["Technology", "Home"],
    "commentCount": 22,
    "imageUrl": "https://example.com/images/energy-monitor.jpg"
  }
]


const Ecosystem = () => {
  return (
    <main  className="bg-scroll-background flex flex-col justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <div className=" flex flex-col">
        <Navbar />
      <div className="p-4 lg:px-16 py-4 flex flex-col gap-4 ">
        <h3  className="font-medium text-xl p-1 border-b-[1px] border-b-scroll-black">Top Launch 🔥</h3>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div key={project.id} className="hover:bg-scroll-orange/10">
              <Card props={project} />
            </div>
          ))}
        </div>
     </div>

      </div>

    </main>
  )
}

export default Ecosystem