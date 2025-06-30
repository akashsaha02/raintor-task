"use client";
import Button from "./Button";
import { motion } from "framer-motion";
import SocialSidebar from "./SocialSidebar";
import { IoCallSharp } from "react-icons/io5";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center md:items-start justify-center min-h-screen w-full pt-10 sm:pt-16 md:pt-32 pb-10 sm:pb-16 md:pb-32 overflow-hidden"
      style={{
        backgroundImage: "url(/hero-background.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      {/* Social Sidebar (left column, hidden on mobile) */}
      <div className="hidden lg:block"></div>
      {/* Main Content (right column) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-0"
      >
        <h1 className="font-sporting mt-10 md:mt-24 text-center md:text-left text-3xl sm:text-5xl md:text-7xl font-semibold text-black dark:text-white leading-tight md:leading-[1.08] tracking-tight">
          <span className="block">
            Trusted{" "}
            <span className="inline-block align-middle bg-black text-white rounded-[18px] px-4 sm:px-6 py-2 mx-1 md:mx-3 text-3xl sm:text-5xl md:text-7xl">
              Partner
            </span>{" "}
            for
          </span>
          <span className="block mt-4 sm:mt-6">
            Your Website{" "}
            <span className="inline-block align-middle bg-black text-white rounded-[18px] px-4 sm:px-6 py-2 mx-1 md:mx-3 text-3xl sm:text-5xl md:text-7xl">
              Develop.
            </span>
          </span>
        </h1>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <SocialSidebar />

          <div className="mt-8 sm:mt-12 flex flex-col max-w-3xl mx-auto items-center md:items-start">
            <p className="text-base sm:text-lg md:text-xl text-center md:text-left text-gray-800 dark:text-gray-200 max-w-2xl font-medium">
              Building the world&apos;s best marketing websites for over a
              decade.
              <br />
              <span className="font-normal">
                Your trusted partner for strategy, design, and dev.
              </span>
            </p>
            <div className="mt-8 sm:mt-10 flex justify-center md:justify-start w-full">
              <Button
                leftIcon={
                  <span className="inline-block p-3 border-2 border-black rounded-full relative -left-3 top-1">
                    <IoCallSharp />
                  </span>
                }
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
