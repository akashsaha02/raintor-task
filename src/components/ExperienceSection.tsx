"use client";
import { FaArrowDown } from "react-icons/fa";

const logos = [
  { name: "awwwards.", color: "bg-white text-black", rotate: "-rotate-12" },
  { name: "CSSWINNER", color: "bg-black text-white", rotate: "-rotate-3" },
  {
    name: "CSSDesignAwards",
    color: "bg-white text-black",
    rotate: "rotate-12",
  },
  { name: "AUTODESK", color: "bg-white text-black", rotate: "-rotate-6" },
  { name: "thoughtworks", color: "bg-white text-black", rotate: "rotate-6" },
  { name: "facebook", color: "bg-white text-black", rotate: "rotate-6" },
  { name: "CSSWINNER", color: "bg-black mt-3 text-white", rotate: "-rotate-8" },
];

export default function ExperienceSection() {
  return (
    <section
      className="  py-20 overflow-visible"
      style={{
        backgroundImage: "url(/vector-bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* About button top right, responsive position */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-end">
          <div className="w-8 h-8 flex items-center justify-center border-2 border-black rounded-full">
            <FaArrowDown className="text-black text-lg" />
          </div>
          <button className="flex items-center gap-2 border border-black rounded-full px-4 py-2 bg-white/80 hover:bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all ml-2">
            <span className="text-black font-medium">About</span>
          </button>
        </div>
      </div>
      {/* Main content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center mt-8 md:mt-8 px-2 sm:px-4">
        <h2 className="font-sporting text-2xl sm:text-4xl md:text-7xl font-bold text-black text-center leading-tight mb-6">
          <span>
            I&apos;ve been{" "}
            <span className="inline-block align-middle bg-black text-white rounded-lg px-4 py-2 mx-2">
              Developing
            </span>
          </span>
          <span className="block mt-2">
            Websites since{" "}
            <span className="inline-block align-middle bg-black text-white rounded-lg px-4 py-2 mx-2">
              2013
            </span>
          </span>
        </h2>
        <p className="text-center font-sporting text-gray-700 dark:text-gray-200 text-base md:text-lg max-w-5xl mx-auto mb-12">
          We start every new client interaction with an in-depth discovery call
          where we get
          <br />
          to know each other and recommend the best course of action.
        </p>
      </div>
      {/* Previously Worked On */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end gap-8 mt-8 px-2 sm:px-4 relative">
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-center pl-2 mb-8 md:mb-0">
          <span className="font-bold text-lg md:text-2xl text-black dark:text-white tracking-tight text-center md:text-left font-sporting">
            PREVIOUSLY
            <br />
            WORKED ON
          </span>
        </div>
        <div className="w-full md:w-4/5 flex flex-wrap gap-4 justify-center md:justify-start items-end relative left-0 top-0 md:left-[15rem] md:top-[5rem]">
          {logos.map((logo) => (
            <span
              key={logo.name}
              className={`inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold text-base md:text-lg shadow-md border border-black/10 ${logo.color} ${logo.rotate}`}
              style={{ minWidth: 120 }}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
