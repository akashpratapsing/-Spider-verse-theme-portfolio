
import React from 'react';
import { EDUCATION_DATA } from '../constants';

const EducationWeb: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-[#0A0B1E] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(42,127,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h3 className="font-comic text-5xl mb-20 text-center text-[#FFDE00] uppercase tracking-[0.2em] drop-shadow-[4px_4px_0px_#000]">
          Academic Timeline
        </h3>

        <div className="relative">
          {/* Central Strand */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FF375F] via-[#2A7FFF] to-transparent opacity-20 hidden md:block"></div>
          
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="relative mb-20">
              <div className="flex flex-col md:flex-row items-center gap-12">
                
                <div className="w-full md:w-1/2 md:order-1 text-center md:text-right group">
                  <div className="relative bg-[#151735] border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_#2A7FFF] transition-all duration-300 hover:-translate-y-3 hover:rotate-1 hover:shadow-[15px_15px_0px_0px_#FF375F] cursor-default">
                    
                    {/* Spider-sense pulse effect */}
                    <div className="absolute -inset-2 bg-[#FF375F] rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10 animate-pulse"></div>
                    
                    {/* Comic-style corner dots */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle,rgba(255,55,95,0.1)_1px,transparent_1px)] bg-[length:6px_6px] opacity-20 pointer-events-none rounded-tr-xl"></div>
                    
                    <h4 className="font-comic text-3xl text-[#FF375F] mb-2 group-hover:text-[#FFDE00] transition-colors duration-300">{edu.degree}</h4>
                    <p className="font-marker text-xl text-[#F5F5F5] mb-3">{edu.institution}</p>
                    <p className="text-[#2A7FFF] font-bold tracking-widest uppercase text-sm bg-black/30 inline-block px-3 py-1 rounded-md border border-[#2A7FFF]/20">
                      {edu.period}
                    </p>
                    
                    <div className="mt-4 text-[#F5F5F5]/60 font-sans text-sm italic">
                      GPA: {edu.gpa}
                    </div>

                    {/* Visual Connector Dot */}
                    <div className="absolute top-1/2 -right-[3.75rem] w-6 h-6 bg-[#FF375F] border-4 border-black rounded-full hidden md:flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#FFDE00]">
                       <div className="w-1.5 h-1.5 bg-black rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 md:order-2">
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {edu.coursework.map((course, i) => (
                      <div
                        key={i}
                        className="bg-black/40 border-2 border-[#F5F5F5]/10 px-4 py-2 rounded-lg font-sans text-sm text-[#F5F5F5]/70 hover:border-[#FF375F] hover:text-[#FF375F] hover:bg-[#FF375F]/5 transition-all duration-300 transform hover:scale-105 cursor-default"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationWeb;
