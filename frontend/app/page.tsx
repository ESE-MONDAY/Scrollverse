import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-scroll-background flex flex-col justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">

     <main className="gap-16 flex flex-col">
     <Navbar/>
     <div className="sm:h-auto w-full bg-scroll-black p-4 lg:p-16 flex flex-col  ">
      <div className="text-white mt-16 grid grid-cols-2 justify-between">
        <div className="col-span-1">
            <h2 className="font-medium text-xl">Empower Your Ideas</h2>
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
     <Footer/>  
     </main>
     
    </div>
  );
}
