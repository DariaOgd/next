import Image from "next/image";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Featured></Featured>



    </div>
    

  );
}
