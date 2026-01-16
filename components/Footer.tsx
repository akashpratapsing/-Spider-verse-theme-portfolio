
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-10 border-t-8 border-black bg-[#0A0B1E]">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Email Bubble */}
        <div className="relative mb-12 animate-bounce">
          <div className="bg-white border-4 border-black px-8 py-4 rounded-[2rem] text-center">
             <p className="font-comic text-black text-2xl lowercase">aakashprataps@gmail.com</p>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-r-4 border-b-4 border-black transform rotate-45"></div>
        </div>

        <div className="flex items-center space-x-12 mb-8">
          <a
            href="https://www.linkedin.com/in/akash-pratap-singh-9117a0238/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-16 h-16 bg-[#2A7FFF] border-4 border-black rounded-full transition-transform hover:scale-110 active:scale-95 shadow-[4px_4px_0px_0px_#FFDE00]"
          >
            <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <div className="absolute -inset-2 border-2 border-[#2A7FFF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
          </a>
          
          <a
            href="https://x.com/AkashPrata21896"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-16 h-16 bg-[#FF375F] border-4 border-black rounded-full transition-transform hover:scale-110 active:scale-95 shadow-[4px_4px_0px_0px_#FFDE00]"
          >
            <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
            <div className="absolute -inset-2 border-2 border-[#FF375F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
          </a>
        </div>

        <p className="font-marker text-[#2A7FFF] text-center opacity-50">
          © {new Date().getFullYear()} Akash Pratap Singh | Handcrafted in the Multiverse
        </p>
      </div>
    </footer>
  );
};

export default Footer;
