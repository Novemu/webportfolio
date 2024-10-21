import { About } from "./About";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { MySkillsSection } from "./MySkillsSection";
import { MyProjectsSection } from "./MyProjectsSection";
import { ContactMeSection } from "./ContactMeSection";

function App() {
  return (
    <>
      <NavBar />
      <div className="h-screen shadow-2xl shadow-zinc-700">
        <Hero />
      </div>
      <About />
      <MySkillsSection />
      <MyProjectsSection />
      <ContactMeSection />
    </>
  );
}

export default App;
