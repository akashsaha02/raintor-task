import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import WorkProcessSection from "../components/WorkProcessSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkProcessSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
