'use client';
import Navbar from "./components/Navbar";
import Link from "next/link";
import Footer from "./components/Footer";

import ProjectList from "./components/ProjectList";
import Header from "./components/Header";



export default function Home() {
 
  return (
    <div className="bg-scroll-background flex flex-col justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      

     <main className=" flex flex-col">
     <Navbar/>
     <Header/>
   
     <div className="sm:h-auto w-full bg-scroll-black p-4 lg:p-16 flex flex-col  ">
      <div className="text-white mt-16 grid grid-cols-2 justify-between">
        <div className="col-span-1 flex flex-col gap-3">
            <h2 className="font-medium text-xl">Features that Inspire</h2>
            <p className="text-sm"> Our platform offers the tools you need to bring your projects to life and engage with a supportive community. :</p>
        </div>
        <div className="flex justify-end items-end">
          <Link href="/ecosystem"  className="bg-scroll-orange  px-4 py-2 text-xs sm:text-sm hover:shadow-md hover:shadow-scroll-foreground/30 rounded-md">Explore Ecosystem</Link>
        </div>
   
      </div>
      

      <div className="text-white  grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 mt-16 ">
        <div className="flex flex-col gap-3 col-span-1">
          <div className="w-full flex items-center justify-center p-4">
          <svg
                width="40"
                height="40"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 2H16V11H0V2ZM14 4H2V9H14V4Z"
                    fill="#ffffff"
                  ></path>
                  <path d="M3 13H13V15H3V13Z" fill="#ffffff"></path>
                </g>
              </svg>
          </div>
          <h3 className="font-medium text-sm sm:text-base">Showcase Your Projects</h3>
          <p className="text-xs sm:text-sm text-justify">Easily list your unique projects with detailed descriptions, ensuring that your ideas capture the attention they deserve.</p>
        </div>
        <div className="flex flex-col gap-3 col-span-1">
          <div className="w-full flex items-center justify-center p-4">
          <svg
              fill="#fcf8f8"
              height="40px"
              width="40px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 263.976 263.976"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M149.763,36.21c3.01-3.811,4.871-8.616,4.871-13.837C154.634,10.036,144.628,0,132.291,0s-22.358,10.036-22.358,22.373 c0,5.222,1.597,10.026,4.605,13.837c-9.211,5.839-15.55,16.117-15.55,27.807v27.22c0,4.143,3.785,7.739,7.928,7.739h50.811 c4.143,0,7.262-3.597,7.262-7.739v-27.22C164.988,52.327,158.976,42.048,149.763,36.21z"></path>
                  <path d="M81.988,124.539v-27.22c0-11.689-5.754-21.969-14.967-27.807c3.01-3.811,5-8.616,5-13.837 c0-12.337-9.942-22.373-22.279-22.373S27.416,43.339,27.416,55.676c0,5.222,1.855,10.026,4.863,13.837 c-9.212,5.839-15.292,16.117-15.292,27.807v27.22c0,4.143,3.301,7.437,7.443,7.437h50.811 C79.384,131.976,81.988,128.682,81.988,124.539z"></path>
                  <path d="M232.034,69.513c3.008-3.811,5.006-8.616,5.006-13.837c0-12.337-9.939-22.373-22.276-22.373 c-12.337,0-22.325,10.036-22.325,22.373c0,5.222,1.843,10.026,4.852,13.837c-9.212,5.839-15.304,16.117-15.304,27.807v27.22 c0,4.143,3.326,7.437,7.469,7.437h50.811c4.143,0,6.721-3.294,6.721-7.437v-27.22C246.988,85.63,241.245,75.351,232.034,69.513z"></path>
                  <path d="M149.763,201.464c3.01-3.811,4.871-8.615,4.871-13.836c0-12.337-10.006-22.373-22.343-22.373s-22.358,10.036-22.358,22.373 c0,5.221,1.597,10.026,4.605,13.837c-9.211,5.839-15.55,16.117-15.55,27.807v27.22c0,4.143,3.785,7.484,7.928,7.484h50.811 c4.143,0,7.262-3.342,7.262-7.484v-27.22C164.988,217.581,158.976,207.304,149.763,201.464z M132.321,180.255 c4.065,0,7.373,3.308,7.373,7.373c0,4.066-3.308,7.373-7.373,7.373s-7.373-3.308-7.373-7.373 C124.948,183.563,128.255,180.255,132.321,180.255z M149.988,248.976h-36v-19.704c0-9.874,8.127-17.906,18.001-17.906 c9.872,0,17.999,8.032,17.999,17.906V248.976z"></path>
                  <path d="M138.988,138.555v-24.854c0-4.143-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5v24.854c0,4.143,3.357,7.5,7.5,7.5 C135.63,146.055,138.988,142.697,138.988,138.555z"></path>
                  <path d="M59.331,140.177c-3.009-2.847-7.753-2.718-10.604,0.289c-2.848,3.008-2.718,7.755,0.289,10.604l37.709,35.707 c1.451,1.373,3.305,2.054,5.156,2.054c1.987,0,3.972-0.786,5.447-2.343c2.848-3.008,2.718-7.755-0.289-10.604L59.331,140.177z"></path>
                  <path d="M205.241,140.071l-37.606,35.789c-3.001,2.855-3.118,7.603-0.263,10.603c1.474,1.55,3.452,2.33,5.434,2.33 c1.857,0,3.718-0.686,5.169-2.067l37.606-35.789c3.001-2.855,3.118-7.602,0.263-10.602 C212.989,137.332,208.241,137.217,205.241,140.071z"></path>
                </g>
              </g>
            </svg>

          </div>
       
          
          <h3 className="font-medium text-sm sm:text-base">Community Feedback</h3>
          <p className="text-xs sm:text-sm text-justify">Utilize our voting system to receive constructive feedback from the community. Upvote or downvote projects to help refine and improve innovative concepts.</p>
        </div>
        <div className="flex flex-col gap-3 col-span-1">
          <div className="w-full flex items-center justify-center p-4">
          <svg
              fill="#ffffff"
              width="40px"
              height="40px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 256 229"
              enableBackground="new 0 0 256 229"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M192.498,97.8c9.278,0,16.8,7.522,16.8,16.8s-7.522,16.8-16.8,16.8s-16.8-7.522-16.8-16.8S183.22,97.8,192.498,97.8z M171.798,139.6c9.278,0,16.8,7.522,16.8,16.8s-7.522,16.8-16.8,16.8s-16.8-7.522-16.8-16.8S162.52,139.6,171.798,139.6z M144.998,176.3h-18.9h-18.9c-11.5,0-18.7,9.5-18.7,21.4V227h12.9v-25.9c0-1.2,1-2,2-2c1.2,0,2,0.8,2,2v25.8h41.5v-25.8 c0-1.2,1-2,2-2c1.2,0,2,1,2,2v25.8h12.9v-29.1C163.998,185.8,156.698,176.3,144.998,176.3z M149.698,97.8 c9.278,0,16.8,7.522,16.8,16.8s-7.522,16.8-16.8,16.8s-16.8-7.522-16.8-16.8S140.42,97.8,149.698,97.8z M199.098,156.4 c0,9.3,7.5,16.8,16.8,16.8s16.8-7.5,16.8-16.8s-7.5-16.8-16.8-16.8S199.098,147.1,199.098,156.4z M197.398,176.3 c-11.5,0-18.7,9.5-18.7,21.4V227h12.9v-25.9c0-1.2,1-2,2-2c1.2,0,2,0.8,2,2v25.8h41.5v-25.8c0-1.2,1-2,2-2c1.2,0,2,1,2,2v25.8h12.9v-29.1c0.2-12.1-7.1-21.6-18.7-21.6h-18.9h-19V176.3z M39.798,139.6c9.278,0,16.8,7.522,16.8,16.8s-7.522,16.8-16.8,16.8s-16.8-7.522-16.8-16.8S30.52,139.6,39.798,139.6z M14.798,226.9v-25.8c0-1.2,1-2,2-2c1.2,0,2,0.8,2,2v25.8h41.5v-25.8 c0-1.2,1-2,2-2c1.2,0,2,1,2,2v25.8h12.9v-29.1c0.2-12.1-7.1-21.6-18.7-21.6h-18.9h-18.9c-11.5,0-18.7,9.5-18.7,21.4v29.3 L14.798,226.9L14.798,226.9z M109.298,156.4c0,9.3,7.5,16.8,16.8,16.8c9.3,0,16.8-7.5,16.8-16.8s-7.5-16.8-16.8-16.8 S109.298,147.1,109.298,156.4z M61.298,97.8c9.278,0,16.8,7.522,16.8,16.8s-7.522,16.8-16.8,16.8s-16.8-7.522-16.8-16.8 S52.02,97.8,61.298,97.8z M106.698,97.8c9.278,0,16.8,7.522,16.8,16.8s-7.522,16.8-16.8,16.8s-16.8-7.522-16.8-16.8 S97.42,97.8,106.698,97.8z M84.098,139.6c9.278,0,16.8,7.522,16.8,16.8s-7.522,16.8-16.8,16.8s-16.8-7.522-16.8-16.8 S74.82,139.6,84.098,139.6z M150.863,35.108c0,12.672-10.245,22.755-22.755,22.755c-12.51,0-22.755-10.191-22.755-22.755 c0-12.672,10.245-22.755,22.755-22.755C140.618,12.353,150.863,22.49,150.863,35.108z M196.157,2v66H59.843V2H196.157z M176.152,8.632H79.74c-1.779,6.578-6.686,11.971-13.319,13.642v25.289C73,49.343,78.069,54.735,79.74,60.235h96.52 c1.779-5.5,6.794-11,13.426-12.672V22.275C183,20.603,177.716,15.211,176.152,8.632z"></path>
              </g>
            </svg>

          </div>
          <h3 className="font-medium text-sm sm:text-base">Raise Funds</h3>
          <p className="text-xs sm:text-sm text-justify">Enable direct donations to your project, allowing supporters to contribute and help turn your vision into reality.</p>
        </div>
        <div className="flex flex-col gap-3 col-span-1">
          <div className="w-full flex items-center justify-center p-4">
          <svg
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="System" transform="translate(-480.000000, -336.000000)">
                      <g id="safe_shield_fill" transform="translate(480.000000, 336.000000)">
                        <path
                          d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                          id="MingCute"
                          fillRule="nonzero"
                        />
                        <path
                          d="M8.99988,9.693 L11.9999,8.568 L14.9999,9.693 L14.9999,12.0279 C14.9999,13.1642 14.3579,14.203 13.3415,14.7111 L11.9999,15.382 L10.6582,14.7111 C9.64188,14.203 8.99988,13.1642 8.99988,12.0279 L8.99988,9.693 Z"
                          id="路径"
                          fill="#ffffff"
                          fillRule="nonzero"
                        />
                        <path
                          d="M12.7022,2.19521 C12.2495,2.02542 11.7505,2.02542 11.2978,2.19521 L4.29775,4.82021 C3.51715,5.11294 3,5.85918 3,6.69287 L3,12.0556 C3,15.4645 4.92602,18.5809 7.97508,20.1054 L11.3292,21.7825 C11.7515,21.9936 12.2485,21.9936 12.6708,21.7825 L16.0249,20.1054 C19.074,18.5809 21,15.4645 21,12.0556 L21,6.69287 C21,5.85918 20.4829,5.11294 19.7022,4.82021 L12.7022,2.19521 Z M12.5266,6.62951 C12.187,6.50216 11.8128,6.50216 11.4732,6.62951 L7.97319,7.94201 C7.38774,8.16155 6.99988,8.72123 6.99988,9.3465 L6.99988,12.0279 C6.99988,13.9217 8.06989,15.653 9.76381,16.5 L11.4409,17.3385 C11.7928,17.5145 12.207,17.5145 12.5589,17.3385 L14.2359,16.5 C15.9299,15.653 16.9999,13.9217 16.9999,12.0279 L16.9999,9.3465 C16.9999,8.72123 16.612,8.16155 16.0266,7.94201 L12.5266,6.62951 Z"
                          id="形状"
                          fill="#ffffff"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
             
          </div>
          <h3 className="font-medium text-sm sm:text-base">Transparent and Trustworthy</h3>
          <p className="text-xs sm:text-sm">Every vote and donation is securely recorded on the blockchain, ensuring transparency and trust in the support you receive.</p>
        </div>
      </div>

     </div>
   <ProjectList/>
    
   <section className="px-8 py-16 bg-black text-white text-center">
    <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
    <p className="mt-4">Explore the ecosystem and add your product!</p>
    <Link href="/ecosystem" className="mt-4 inline-block bg-scroll-orange  px-4 py-2 text-xs sm:text-sm hover:shadow-md hover:shadow-scroll-foreground/30 rounded-md">
      Explore projects
    </Link>
  </section>
     <Footer/>  
     </main>
    

      
     
    </div>
  );
}
