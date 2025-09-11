import React from "react";
import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ image, title, description, tech, github, demo }) {
  return (
    <div className="bg-white/5 dark:bg-gray-900 border border-white/10 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      
      <img src={image} alt={title} className="h-48 w-full object-contain" />


      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex-1">
          {description}
        </p>


        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500"
            >
              {t}
            </span>
          ))}
        </div>


        <div className="flex gap-4 mt-5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              <Github size={18} /> Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              <ExternalLink size={18} /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
