import { About } from "./About";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { MySkillsSection } from "./MySkillsSection";
import { MyProjectsSection } from "./MyProjectsSection";

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
    </>
  );
}

export default App;
