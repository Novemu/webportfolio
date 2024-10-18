export type ProjectsCardProps = {
  websiteLink: string;
  websiteDescription: string;
  projectImage: string;
};

export function ProjectsCard({
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
