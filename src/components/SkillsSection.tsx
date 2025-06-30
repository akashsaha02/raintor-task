"use client";
import { FaArrowDown, FaReact } from "react-icons/fa";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import SkeletonLoader from "./SkeletonLoader";
import Spinner from "./Spinner";
import ErrorBoundary from "./ErrorBoundary";
import { FixedSizeList as List } from "react-window";

const skills = [
  {
    title: "HTML & CSS",
    desc: "Duis aute iure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    icon: <FaReact size={48} className="mb-4" />,
  },
  {
    title: "Javascript",
    desc: "Duis aute iure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    icon: <FaReact size={48} className=" mb-4" />,
  },
  {
    title: "Webflow",
    desc: "Duis aute iure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    icon: <FaReact size={48} className=" mb-4" />,
  },
];

// Demo large data for virtualization
const largeList = Array.from({ length: 1000 }, (_, i) => `Skill #${i + 1}`);

function SkillCard({ title, desc, icon, rotate = false }: { title: string; desc: string; icon: React.ReactNode; rotate?: boolean }) {
  return (
    <div
      className={`bg-[#FFFFFF14] rounded-2xl p-8 w-72 min-h-[240px] flex flex-col items-start justify-start shadow-xl border border-white/10 backdrop-blur-md transition-transform duration-300 ${rotate ? "rotate-3" : ""} hover:-translate-y-2 hover:shadow-2xl`}
    >
      {icon}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm font-normal">{desc}</p>
    </div>
  );
}

function VirtualizedSkillList() {
  return (
    <div className="w-full max-w-md mx-auto bg-[#181818] rounded-2xl shadow-lg border border-[#CCFF02] mt-12 overflow-hidden">
      <div className="sticky top-0 z-10 bg-[#181818] border-b border-[#CCFF02] px-6 py-4">
        <h3 className="text-lg font-bold text-[#CCFF02]">All Skills (Virtualized List)</h3>
      </div>
      <List
        height={320}
        itemCount={largeList.length}
        itemSize={48}
        width="100%"
        className="focus:outline-none custom-scrollbar"
      >
        {({ index, style }: { index: number; style: React.CSSProperties }) => (
          <div
            style={style}
            tabIndex={0}
            role="option"
            aria-selected={false}
            className={`px-6 flex items-center h-12 text-white text-base font-medium transition-colors duration-150
              ${index % 2 === 0 ? "bg-[#232323]" : "bg-[#181818]"}
              hover:bg-[#CCFF02]/10 focus:bg-[#CCFF02]/20 outline-none`}
          >
            <span className="mr-2 text-[#CCFF02] font-bold">#{index + 1}</span>
            {largeList[index]}
          </div>
        )}
      </List>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "20px" });
  const controls = useAnimation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
      // Simulate loading
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [inView, controls]);

  return (
    <ErrorBoundary>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="mx-auto mb-8 max-w-[98vw] rounded-3xl bg-black text-white px-4 py-10 sm:py-14 md:px-12 md:py-20 overflow-hidden shadow-2xl"
        style={{ background: "radial-gradient(ellipse 80% 60% at 80% 0%, #222 60%, #111 100%)" }}
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-6 py-16">
            <SkeletonLoader width="w-72" height="h-8" />
            <SkeletonLoader width="w-60" height="h-6" />
            <Spinner size={40} />
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center md:items-center text-center md:text-left">
              {/* Left side */}
              <div className="flex flex-col gap-4 md:w-1/2 items-center md:items-start text-center md:text-left">
                <div className="flex flex-row items-center md:items-start gap-4">
                  <span className="h-10 w-10 flex justify-center items-center border-2 border-white rounded-full mb-2 md:mb-0"><FaArrowDown /></span>
                  <Button className="border-white border-2 text-white px-5 py-2 text-base font-medium w-fit mb-2" style={{ borderWidth: 1 }}>
                    Why Choose me
                  </Button>
                </div>
                <h2 className="font-sporting text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  My Extensive<br />List of Skills
                </h2>
              </div>
              {/* Right side */}
              <div className="flex flex-col items-center md:items-end mt-10 md:mt-20 md:w-1/2 gap-4">
                <div>
                  <p className="text-base md:text-lg text-center md:text-right max-w-md border-b border-white/30 pb-2 mb-4">
                    Building the worlds best marketing Your<br />trusted partner for strategy, design, and dev.
                  </p>
                </div>
                <div className="flex gap-3 mt-2 justify-center md:justify-end">
                  <button aria-label="Previous" className="w-14 h-14 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
                    <img className="" src="/vectorarrow-white.png" />
                  </button>
                  <button aria-label="Next" className="w-14 h-14 rounded-full border rotate-180 border-white flex items-center justify-center hover:bg-white/10 transition-colors">
                    <img className="" src="/vectorarrow-white.png" />
                  </button>
                </div>
              </div>
            </div>
            {/* Skill cards */}
            <div className="flex flex-col max-sm:relative max-sm:-left-7 md:flex-row gap-6 md:gap-8 justify-center items-end mt-12 md:mt-20 z-10">
              <SkillCard {...skills[0]} />
              <SkillCard {...skills[1]} rotate />
              <SkillCard {...skills[2]} />
            </div>
            {/* Virtualized list demo */}
            <div className="mt-12 flex flex-col items-center">
              <h3 className="text-lg font-bold mb-2">All Skills (Virtualized List)</h3>
              <VirtualizedSkillList />
            </div>
          </>
        )}
      </motion.section>
    </ErrorBoundary>
  );
} 