import React from "react";
import { PROJECTS } from "../constants";

const ProjectsGrid: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-10 bg-[#0A0B1E]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <h3 className="font-comic text-5xl text-[#2A7FFF] uppercase tracking-widest">
            Spider-Verse Projects
          </h3>
          <div className="bg-[#FFDE00] text-black border-4 border-black px-4 py-2 rotate-1 font-comic text-2xl uppercase shadow-[4px_4px_0px_0px_#FF375F]">
            Top Secret Projects
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#1a1c3d] border-8 border-black p-4 transition-all hover:-translate-y-2 hover:shadow-[15px_15px_0px_0px_#FF375F]"
            >
              {/* Slanted Image Panel */}
              <div className="relative overflow-hidden h-48 border-4 border-black transform -rotate-1 group-hover:rotate-0 transition-transform">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent"></div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-comic text-sm bg-white text-black border-2 border-black px-2 py-0.5 rounded-full shadow-[2px_2px_0px_0px_#2A7FFF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h4 className="font-comic text-3xl mt-4 mb-2 text-[#FF375F] group-hover:text-[#FFDE00] transition-colors">
                {project.title}
              </h4>
              <p className="font-sans text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              <a href={project.link} target="_blank">
                <button
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-2 bg-[#2A7FFF] border-2 border-black font-comic text-xl text-white hover:bg-[#FF375F] transition-colors"
                >
                  View Intel
                </button>
              </a>

              {/* Spider-sense border glow */}
              <div className="absolute -inset-1 border-2 border-[#FF375F] opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
