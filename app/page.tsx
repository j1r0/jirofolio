import About from "@/components/about";
import Contacts from "@/components/contacts";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { ThemeSwitcher } from "../components/ui/ThemeSwitcher";
import  {Navbar}  from "../components/ui/navbar";
import { navItems } from "@/data";
import ContactsBars from "@/components/ui/ContactsBars";

export default function Home() {
  return (
    <main className = "relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-screen">
        <ContactsBars />
        <Navbar navItems={navItems}  />
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </div>
    </main>
  );
}
