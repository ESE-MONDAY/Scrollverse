import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Web3Provider} from '../components/context/WalletProvider'
import { Wallet } from "ethers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Scrollverse - Empowering Creators",
  description: "Scrollverse is a public good project that allows users to list their projects, gather community feedback, and raise funds through donations.",
  keywords: "Scrollverse, projects, community feedback, donations, blockchain, Ethereum, smart contracts",
  authors: [{ name: "Scrollverse Team" }],
  openGraph: {
    title: "Scrollverse - Empowering Creators",
    description: "A platform for creators to showcase projects and gather community support.",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "/path/to/your/image.jpg",
        width: 800,
        height: 600,
        alt: "Scrollverse Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrollverse - Empowering Creators",
    description: "A platform for creators to showcase projects and gather community support.",
    images: ["/path/to/your/image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Web3Provider>
        {children}
        </Web3Provider>
        
      </body>
    </html>
  );
}
