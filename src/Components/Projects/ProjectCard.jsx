import React from "react";
import bannerImg from "../../assets/a9acd0b9-adfb-472b-96d6-4e84cfba6b17.png";

const ProjectCard = ({ title, main, demoLink, codeLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#312e81] shadow-xl shadow-indigo-900 rounded-2xl">
      <img className="p-4" src={bannerImg} alt={`${title} banner`} />
      <h3 className=" text-rose-300 px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-5">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#f43f5e]">
            Demo
          </button>
        </a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#f43f5e]">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
