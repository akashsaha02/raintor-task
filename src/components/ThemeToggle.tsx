"use client";
import { useTheme } from "../app/theme-context";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <button
          className="p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled
        >
          <FaSun className="text-yellow-400" size={20} />
        </button>
      </div>
    );
  }

  return <ThemeToggleContent />;
}

function ThemeToggleContent() {
  const { theme, toggleTheme } = useTheme();
  
  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleToggle}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className="p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-400" size={20} />
        ) : (
          <FaMoon className="text-gray-700 dark:text-gray-300" size={20} />
        )}
      </button>
    </div>
  );
}
