import { About } from "./About";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { MySkillsSection } from "./MySkillsSection";
import { MyProjectsSection } from "./MyProjectsSection";
import { ContactMeSection } from "./ContactMeSection";
import { useRef } from "react";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
      />
      <div className="mt-14 h-screen shadow-2xl shadow-zinc-700">
        <Hero />
      </div>
      <div ref={aboutRef}></div>
      <About />
      <MySkillsSection />
      <div ref={projectsRef}></div>
      <MyProjectsSection />
      <ContactMeSection />
    </>
  );
}

export default App;
