import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "./Components/VideoCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <VideoCard />
    </>
    
  );
}
