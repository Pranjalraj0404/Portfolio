import React, { useState, useEffect } from "react";
import SystemBootPreloader from "./components/ui/SystemBootPreloader";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import MarqueeSection from "./components/sections/MarqueeSection";
import AboutMeSection from "./components/sections/AboutMeSection";
import EducationSection from "./components/sections/EducationSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import UpcomingProjectsSection from "./components/sections/UpcomingProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import ProjectModal from "./components/modals/ProjectModal";
import ContactModal from "./components/modals/ContactModal";
import AIChatWidget from "./components/widgets/AIChatWidget";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen cursor-none selection:bg-blue-400/25 selection:text-blue-100 overflow-x-hidden font-sans relative">
      {/* Global Background Layers - stronger and darker for better contrast */}
      <div className="fixed inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,#3b82f6_0%,#1d4ed8_26%,#0b1f48_56%,#020617_100%)] pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-[radial-gradient(100%_80%_at_50%_35%,transparent_0%,rgba(2,6,23,0.42)_58%,rgba(2,6,23,0.85)_100%)] pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0 mix-blend-soft-light"></div>
      
      <SystemBootPreloader onComplete={() => setIsLoading(false)} />
      <CustomCursor />
      <ScrollProgress />

      {!isLoading && (
        <div className="animate-fade-in relative z-10">
          <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

          <main className="relative z-10">
            <HeroSection setIsContactOpen={setIsContactOpen} />
            <MarqueeSection />
            <AboutMeSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection setSelectedProject={setSelectedProject} />
            <UpcomingProjectsSection />
            <ContactSection setIsContactOpen={setIsContactOpen} />
          </main>

          <Footer scrollToTop={scrollToTop} />

          <AIChatWidget />

          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />

          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
