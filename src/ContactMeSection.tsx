import { ContactForm } from "./ContactForm";
import { GitHubSVG } from "./SVGImages/GitHubSVG";
import { LinkedInSVG } from "./SVGImages/LinkedInSVG";

export function ContactMeSection() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="mt-28 flex-1 border-2 border-orange-300"></div>
        <h1 className="mt-28 flex justify-center px-5 font-playFair text-7xl font-bold text-white">
          Contact Me
        </h1>
        <div className="mt-28 flex-1 border-2 border-orange-300"></div>
      </div>
      <ContactForm />
      <div className="flex items-center justify-between">
        <div className="mt-20 flex-1 border-2 border-orange-300"></div>
        <h1 className="mt-20 flex justify-center px-5 font-playFair text-7xl font-bold text-white">
          <LinkedInSVG /> <GitHubSVG />
        </h1>
        <div className="mb-7 mt-28 flex-1 border-2 border-orange-300"></div>
      </div>
    </>
  );
}
