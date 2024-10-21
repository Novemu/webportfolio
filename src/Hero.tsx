import HeaderImage from "./SVGImages/self.png";

export type HeroProps = {
  scrollToContact: () => void;
};

export function Hero({ scrollToContact }: HeroProps) {
  return (
    <div className="flex flex-col-reverse items-center justify-between lg:ml-44 lg:mr-20 lg:flex-row">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <div>
          <p className="font-mono font-bold text-gray-300 md:text-3xl">
            <span className="mr-2 text-4xl text-orange-300 md:text-6xl">
              Anthony
            </span>
            <span className="text-4xl text-orange-300 md:text-6xl">
              Gonzalez
            </span>
          </p>
        </div>

        <div className="mt-2">
          <p className="text-xl font-bold text-gray-300 sm:text-2xl">
            Front End Web Developer
          </p>
        </div>

        <div className="mt-5">
          <button
            className="rounded-md border-4 border-orange-300 px-6 py-3 font-mono font-bold text-orange-300 transition-colors duration-300 hover:bg-orange-300 hover:text-black"
            onClick={scrollToContact}
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="mb-10 md:mb-0">
        <img
          src={HeaderImage}
          alt="self"
          className="h-auto w-32 min-w-72 rounded-full grayscale sm:w-48 lg:w-auto"
        />
      </div>
    </div>
  );
}
