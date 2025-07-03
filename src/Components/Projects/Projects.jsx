import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Shopping Point"
          main="A fully responsive shopping website frontend built with React and Tailwind CSS. Features include product grid, category filters, and a modern layout."
          demoLink="https://dreamy-pegasus-4bd5a9.netlify.app/"
          codeLink="https://github.com/Snehaa-1807/shopping-point"


/>
        <ProjectCard
          title="Chatly"
          main="A real-time chat application using React, Firebase Firestore & Auth. Supports user login, message sending, notifications, and read receipts."
          demoLink="https://astounding-kelpie-31b8db.netlify.app/"
          codeLink="https://github.com/Snehaa-1807/DisneyClone"
        />
        <ProjectCard
          title="Disney+ Clone"
          main="A front-end replica of the Disney+ homepage built using React and styled-components. Includes hero banners, categories, and card sliders."
          demoLink="https://dreamy-cendol-72c49f.netlify.app/"
          codeLin="https://github.com/Snehaa-1807/chat-app"
        />
      </div>
    </div>
  );
};

export default Projects;