"use client";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import {  FaInstagram } from "react-icons/fa6";

const socials = [
  {
    href: "https://twitter.com/williamrey",
    icon: <AiOutlineTwitter size={20} />
    , // X/Twitter
    label: "Twitter/X",
  },
  {
    href: "https://instagram.com/williamrey",
    icon: <FaInstagram size={20} />,
    label: "Instagram",
  },
  {
    href: "https://facebook.com/williamrey",
    icon: <FaFacebook size={20} />,
    label: "Facebook",
  },
];

export default function SocialSidebar() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-start pt-4 pr-6 select-none">
      <span className="text-sm font-semibold text-black rotate-[-90deg] relative top-24 mb-3 mt-1">@williamrey</span>
      {/* Social icons */}
      <div className="flex relative justify-center items-center left-10 flex-col gap-2 mb-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-black rotate-[-90deg] hover:text-blue-500 focus:text-blue-500 transition-colors outline-none"
            tabIndex={0}
          >
            {s.icon}
          </a>
        ))}
        <span className="block w-[0.1rem] h-10 bg-black opacity-60" />
      </div>
      {/* Username vertical */}
      
      
    </div>
  );
} 