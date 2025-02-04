import { assets } from "../assets/assets";

const Projects = () => {
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full
    overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl  mb-2 text-center catamaran text-yellow font-bold">
        Proyectos{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light font-semibold">
          Realizados
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80-auto ">
        texto, txto, texto
      </p>
      {/*slider buttons*/}
      <div className="flex justify-end items-center mb-8">
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/*slider container hora del video 1:20:00*/}
      <div>

      </div>
    </div>
  );
};

export default Projects;
