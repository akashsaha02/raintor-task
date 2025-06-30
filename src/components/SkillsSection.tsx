"use client";
import { FaArrowDown } from "react-icons/fa";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import SkeletonLoader from "./SkeletonLoader";
import Spinner from "./Spinner";
import ErrorBoundary from "./ErrorBoundary";
import Image from "next/image";

const skills = [
  {
    name: "HTML & CSS",
    description: "Duis aute iure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    image: "/react-icon.png",
  },
  {
    name: "Javascript",
    description: "Duis aute iure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
     image: "/react-icon.png",

  },
  {
    name: "Webflow",
    description: "Duis aute iure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    image: "/react-icon.png",

  },
];


function SkillCard({ skill }: { skill: { name: string; description: string; image: string } }) {
  return (
    <div
      className="bg-white/10 rounded-[30px] w-[410px] space-y-6 px-4 py-6 font-sporting transition-transform duration-300 hover:rotate-3 hover:-translate-y-2 hover:shadow-2xl"
    >
      <Image
        src={skill?.image}
        alt={skill?.name}
        width={100}
        height={100}
        className="w-24 h-24"
      />
      <h1 className="text-white font-bold text-[26px]">{skill?.name}</h1>
      <p className="font-normal leading-[27px] md:text-base text-sm text-white/80">
        {skill?.description}
      </p>
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
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-6 py-16">
            <SkeletonLoader width="w-72" height="h-8" />
            <SkeletonLoader width="w-60" height="h-6" />
            <Spinner size={40} />
          </div>
        ) : (
          <>
            <div className=" max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center md:items-center text-center md:text-left">
              {/* Left side */}
              <div className="flex flex-col gap-4 md:w-1/2 items-center md:items-start text-center md:text-left">
                <div className="flex flex-row items-center md:items-start gap-4">
                  <span className="h-10 w-10 flex justify-center items-center border-2 border-white rounded-full mb-2 md:mb-0"><FaArrowDown /></span>
                  <Button className="border-white border-2 font-sporting text-white px-5 py-2 text-base font-medium w-fit mb-2" style={{ borderWidth: 1 }}>
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
                    <Image className="" src="/vectorarrow-white.png" alt="Previous" width={20} height={20} />
                  </button>
                  <button aria-label="Next" className="w-14 h-14 rounded-full border rotate-180 border-white flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Image className="" src="/vectorarrow-white.png" alt="Next" width={20} height={20} />
                  </button>
                </div>
              </div>
            </div>
            {/* Skill cards */}
            <div className="flex flex-col max-sm:relative max-sm:-left-7 md:flex-row gap-6 md:gap-8 justify-center items-end mt-12 md:mt-20 z-10">
              <SkillCard skill={skills[0]} />
              <SkillCard skill={skills[1]} />
              <SkillCard skill={skills[2]} />
            </div>
          </>
        )}
      </motion.section>
    </ErrorBoundary>
  );
} 