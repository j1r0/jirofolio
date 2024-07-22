import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";
import { FaUser } from "react-icons/fa";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center 
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-screen">
        <FloatingNav 
        navItems={navItems}
        />
        <Hero />
        <Grid />
        <Projects />
      </div>
    </main>
  );
}
