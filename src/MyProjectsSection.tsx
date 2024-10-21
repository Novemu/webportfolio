import GameHubImage from "./SVGImages/gamehub.png";
import PigDice from "./SVGImages/pigdice.png";
import Portfolio from "./SVGImages/portfolioproject.png";
import { ProjectsCard } from "./ProjectsCard";

export function MyProjectsSection() {
  return (
    <>
      <div className="mb-10 mt-28 flex justify-center font-playFair text-5xl font-bold text-white sm:text-6xl md:text-7xl">
        Projects
      </div>
      <div className="mx-10 flex flex-wrap justify-center gap-6">
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
