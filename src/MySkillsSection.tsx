import { HtmlSVG } from "./SVGImages/HtmlSVG";
import { ReactSVG } from "./SVGImages/ReactSVG";
import { TailWindSVG } from "./SVGImages/TailWindSVG";
import { TypescriptSVG } from "./SVGImages/TypescriptSVG";
import { CSSSVG } from "./SVGImages/CSSSVG";
import { JavaScriptSVG } from "./SVGImages/JavaScriptSVG";
import { SkillsCard } from "./SkillsCard";

export function MySkillsSection() {
  return (
    <>
      <div className="mb-10 mt-28 flex justify-center font-playFair text-5xl font-bold text-white sm:text-6xl md:text-7xl">
        My Skills
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-10">
          <SkillsCard imageComponent={<ReactSVG />}>React</SkillsCard>
          <SkillsCard imageComponent={<HtmlSVG />}>HTML</SkillsCard>
        </div>
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-10">
          <SkillsCard imageComponent={<TypescriptSVG />}>TypeScript</SkillsCard>
          <SkillsCard imageComponent={<CSSSVG />}>CSS</SkillsCard>
        </div>
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-10">
          <SkillsCard imageComponent={<TailWindSVG />}>Tailwind</SkillsCard>
          <SkillsCard imageComponent={<JavaScriptSVG />}>JavaScript</SkillsCard>
        </div>
      </div>
    </>
  );
}
