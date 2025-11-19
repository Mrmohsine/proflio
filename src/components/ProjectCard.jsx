import React from "react";
import Line from "./Line";

function ProjectCard({ project, showLine, onImageClick }) {
  return (
    <div>
      <div className="mx-auto w-full md:w-[70%] h-auto mt-9 grid gap-11 grid-cols-1 md:grid-cols-3 items-center">
        <div className="col-span-2 flex flex-col gap-2 ml-11">
          <h1 className="text-white text-3xl">{project.title}</h1>
          <p className="text-white w-[90%] md:w-4/5">
            {project.description}
          </p>
          <p className="flex gap-3">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-purple-900 font-bold text-slate-300 rounded p-2 text-center pt-2"
              >
                {tech}
              </span>
            ))}
          </p>
          {(project.github || project.demo) && (
            <p className="text-white w-[90%] md:w-4/5 mt-2">
              {project.github && (
                <>
                  • Code source :{" "}
                  <a
                    href={project.github}
                    className="underline text-purple-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.github.replace("https://", "")}
                  </a>
                  .
                </>
              )}
              {project.demo && (
                <>
                  <br />• Démo visible :{" "}
                  <a
                    href={project.demo}
                    className="underline text-purple-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.demo.replace("https://", "")}
                  </a>
                  .
                </>
              )}
            </p>
          )}
        </div>
        <div className="col-span-1 ms-10 md:ms-0">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg overflow-hidden w-full cursor-pointer transition-transform duration-300 hover:scale-[1.1]"
            onClick={() => project.demo && onImageClick(project.demo)}
          />
        </div>
      </div>
      {showLine && <Line />}
    </div>
  );
}

export default ProjectCard;