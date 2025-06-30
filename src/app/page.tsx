"use client";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import WorkProcessSection from "../components/WorkProcessSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import { ThemeProvider } from "./theme-context";

export default function Page() {
  return (
    <ThemeProvider>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkProcessSection />
      <ContactSection />
      <FooterSection />
    </ThemeProvider>
  );
}
