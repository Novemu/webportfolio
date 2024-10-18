import { About } from "./About";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { MySkillsSection } from "./MySkillsSection";
import GameHubImage from "./SVGImages/gamehub.png";
import PigDice from "./SVGImages/pigdice.png";
import Portfolio from "./SVGImages/portfolioproject.png";

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

function MyProjectsSection() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="mb-10 mt-28 flex justify-center font-playFair text-7xl font-bold text-white">
          Projects
        </h1>
      </div>
      <div className="mx-10 flex justify-center space-x-10">
        <ProjectsCard
          websiteLink="https://anthonysgamehub.netlify.app/"
          websiteDescription="GameHub: Uses CheapShark API to display and sort game deals from
          multiple stores"
          projectImage={GameHubImage}
        />
        <ProjectsCard
          websiteLink="https://novemu.github.io/PigDiceGame/"
          websiteDescription="Pig Dice: Two player turn based dice game. Roll the dice and first to 100 wins"
          projectImage={PigDice}
        />
        <ProjectsCard
          websiteLink="http://localhost:5173/"
          websiteDescription="Portfolio: Website for showcasing my skills and projects"
          projectImage={Portfolio}
        />
      </div>
    </>
  );
}

export type ProjectsCardProps = {
  websiteLink: string;
  websiteDescription: string;
  projectImage: string;
};

function ProjectsCard({
  websiteLink,
  websiteDescription,
  projectImage,
}: ProjectsCardProps) {
  return (
    <div className="group relative flex h-72 w-1/3 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-zinc-600 bg-zinc-700">
      <img
        src={projectImage}
        alt="Project Image"
        className="h-full w-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      />
      <div className="absolute inset-0 mx-3 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
        <p className="text-lg font-semibold text-white">{websiteDescription}</p>
        <a href={websiteLink} target="_blank">
          <button className="mt-4 rounded-lg border-2 border-orange-300 px-4 py-2 text-orange-300 hover:bg-orange-300 hover:text-black">
            Visit Website &gt;
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
