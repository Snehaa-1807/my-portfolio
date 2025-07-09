import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-rose-300 font-bold">Projects</h1>
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
        <ProjectCard
          title="Imagino – AI-Powered Text-to-Image Generator"
          main="Built a full-stack AI application that converts text prompts into images using ClipDrop AI. Integrated Razorpay for payments and designed a responsive UI with React, Tailwind CSS, Node.js, and Express."
          demoLink="https://silly-panda-86f199.netlify.app/"
          codeLin="https://github.com/Snehaa-1807/Imagino"
        />
        
      </div>
    </div>
  );
};

export default Projects;