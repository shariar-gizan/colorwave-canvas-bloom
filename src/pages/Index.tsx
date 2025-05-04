
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '-100px'
      }
    );
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <div className="animate-section">
            <AboutSection />
          </div>
          <div className="animate-section">
            <SkillsSection />
          </div>
          <div className="animate-section">
            <ProjectsSection />
          </div>
          <div className="animate-section">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
      
      <style jsx global>{`
        .animate-section {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s ease, transform 1s ease;
        }
        
        .section-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </ThemeProvider>
  );
};

export default Index;
