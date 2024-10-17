export function Hero() {
  return (
    <div className="ml-44 mr-20 flex items-center justify-between">
      <div className="flex flex-col items-center">
        <div>
          <p className="font-mono text-3xl font-bold text-gray-300">
            <span className="self-center text-6xl text-orange-300">
              Anthony
            </span>
            <span className="self-center pl-3 text-6xl text-orange-300">
              Gonzalez
            </span>
          </p>
        </div>

        <div className="self-start">
          <p className="text-3xl font-bold text-gray-300">
            Front End Web Developer
          </p>
        </div>
        <div className="self-start">
          <button className="mt-5 rounded-md border-4 border-solid border-orange-300 px-4 py-2 font-mono font-bold text-orange-300 hover:bg-orange-300 hover:text-black">
            Contact Me
          </button>
        </div>
      </div>
      <div>
        <img src="self.png" alt="self" className="h-auto grayscale" />
      </div>
    </div>
  );
}
