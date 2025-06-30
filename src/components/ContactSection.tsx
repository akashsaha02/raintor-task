"use client";
import { FaArrowDown, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      className="relative w-full min-h-[500px] flex flex-col justify-center items-center px-4 py-16 md:py-24"
      style={{
        backgroundImage: 'url(/vector-bg2.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Top bar */}
      <div className="flex relative -left-[31rem] items-center mb-8">
        <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full">
          <FaArrowDown className="text-black text-lg" />
        </div>
        <button className="border border-black rounded-full px-5 py-2 text-black font-medium bg-white/80 hover:bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all">
          Contact
        </button>
      </div>
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-between">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8">
          <h2 className="font-sporting text-4xl md:text-6xl font-bold text-black text-left leading-tight">
            Interested in <span className="inline-block align-middle bg-black text-white rounded-lg px-4 py-2 mx-2">work</span> together?
          </h2>
          <p className="text-base md:text-lg text-black/80 max-w-lg mt-2">
            We start every new client interaction with an in-depth discovery call where we get to know each other
          </p>
          <button className="flex items-center gap-2 border border-black rounded-full px-2 py-3 text-black font-medium bg-white/80 hover:bg-white transition-all w-fit mt-4 text-lg">
            <span className="inline-block relative  border-2 border-black rounded-full -left-2 p-2 mr-2">
              <FaPhoneAlt className="text-black text-lg" />
            </span>
            Schedule a Call
          </button>
        </div>
        {/* Right column: Contact form */}
        <form className="flex-1 max-w-md w-full bg-black rounded-3xl p-8 flex flex-col gap-6 shadow-xl">
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-transparent border-b border-[#CCFF02] text-white placeholder-gray-400 py-3 px-2 focus:outline-none focus:border-[#CCFF02] transition-all"
          />
          <input
            type="email"
            placeholder="Your email address"
            className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-3 px-2 focus:outline-none focus:border-[#CCFF02] transition-all"
          />
          <textarea
            placeholder="Describe your project"
            className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-3 px-2 focus:outline-none focus:border-[#CCFF02] transition-all min-h-[80px]"
          />
          <div className="flex items-center gap-4 mt-2">
            <button type="submit" className="flex items-center gap-2 border border-white rounded-full px-6 py-2 text-white font-medium bg-transparent hover:bg-white/10 transition-all">
              <FaArrowDown className="text-white text-base" /> Send
            </button>
            <span className="text-white">Or</span>
            <button type="button" className="border border-white rounded-full px-6 py-2 text-white font-medium bg-transparent hover:bg-white/10 transition-all">
              Contact me
            </button>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <span className="text-white/80 text-sm font-medium">@williamrey</span>
            <span className="w-8 h-px bg-white/30 mx-2" />
            <a href="#" aria-label="Facebook" className="text-white hover:text-[#1877f3] text-lg"><FaFacebook /></a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-pink-400 text-lg"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400 text-lg"><FaTwitter /></a>
          </div>
        </form>
      </div>
    </section>
  );
} 