import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";
import { FaUser } from "react-icons/fa";
import Grid from "@/components/ui/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center 
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          { name: "About", link: "#about", icon: <FaUser /> },
          { name: "Projects", link: "#projects" },
          { name: "Contact", link: "#contact" },
        ]}/>
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
