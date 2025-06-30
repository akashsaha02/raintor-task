"use client";
import { FaArrowRight } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto  flex items-center justify-between py-6 px-6 md:px-4 z-20">
      <a href="#" className="font-extrabold text-2xl tracking-tight text-black dark:text-white mr-8" aria-label="DEVLOP.ME logo">
        DEVLOP.<span className="tracking-normal">ME</span>
      </a>
      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 items-center text-lg font-medium text-black dark:text-white">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:underline focus:underline focus:outline-none transition-all px-2 py-1 rounded">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Right Side */}
      <div className="   flex items-center z-20">
        <div className="relative -right-8 md:-right-10 w-8 h-8 flex items-center justify-center border-2 border-black rounded-full">
          <FaArrowRight className="text-black text-lg" />
        </div>
        <button className="flex  items-center text-sm border border-black rounded-full px-6 md:px-10 py-3 bg-white/80 hover:bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all md:ml-2">
          <span className="text-black font-medium max-sm:ml-2  ">Start Project</span>
        </button>
      </div>
    </nav>
  );
} 