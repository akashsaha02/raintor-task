"use client";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    label: "Discovery",
    color: "bg-[#CFFFF6] text-black",
    desc: "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    link: "Read More",
    highlight: false,
  },
  {
    label: "Strategy",
    color: "bg-[#CCFF02] text-black",
    desc: "Every end-to-end project of ours begins with a tEsPoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
    link: "Read More",
    highlight: true,
  },
  {
    label: "Design",
    color: "bg-[#CFFFF6] text-black",
    desc: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
    link: "Read More",
    highlight: false,
  },
  {
    label: "Build",
    color: "bg-[#CFFFF6] text-black",
    desc: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    link: "Read More",
    highlight: false,
  },
];

function Card({
  label,
  desc,
  link,
  className = "",
}: {
  label: string;
  color?: string;
  desc: string;
  link: string;
  className?: string;
}) {
  return (
    <div
      className={`justify-between rounded-2xl p-6 md:p-8 shadow-lg bg-black text-white hover:bg-[#CCFF02] hover:text-black hover:rotate-3 transition-all duration-300 min-h-[220px] md:min-h-[260px] ${className}`}
    >
      <p
        className={`w-36 text-center px-2 py-1 rounded-full font-semibold text-base mb-4 font-sporting bg-[#CFFFF6] text-black`}
      >
        {label}
      </p>
      <a
        href="#"
        className="flex items-center relative left-[25rem] bottom-10 gap-2 text-right text-xs md:text-sm font-semibold group"
      >
        <FaArrowRight className="inline-block group-hover:translate-x-1 transition-transform" />
        <span className="underline font-sporting">{link}</span>
      </a>
      <div>
        <p className="text-sm md:text-base font-normal mb-6 md:mb-8 font-sporting">{desc}</p>
      </div>
    </div>
  );
}

export default function WorkProcessSection() {
  return (
    <section className="mx-auto mt-16 mb-8 max-w-[98vw] rounded-3xl bg-[#181818] text-white px-4 py-12 md:px-12 md:py-20 overflow-hidden shadow-2xl">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:items-start">
        <div className="flex gap-24 items-center md:items-start mb-8">
          <div className="flex items-center mb-8">
          <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full">
            <FaArrowDown className="text-white text-lg" />
          </div>
          <button className="border border-white rounded-full px-5 py-2 text-white font-medium bg-transparent hover:bg-white/10 transition-all">
            Work Process
          </button>
        </div>
        {/* Heading */}
        <h2 className="font-sporting text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-12">
          My Work Process
        </h2>
        </div>
        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Discovery */}
          <Card {...cards[0]} />
          {/* Strategy */}  
          <Card {...cards[1]} />
          {/* Design */}
          <Card {...cards[2]} />
          {/* Build */}
          <Card {...cards[3]} />
        </div>
      </div>
    </section>
  );
}
