
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      // Navbar background change on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Highlight active section in the navbar
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-400 rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="font-bold text-xl gradient-text">Shariar Nafiz</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              className={`font-medium transition-all duration-300 relative
                ${activeSection === link.href.substring(1) ? "text-primary" : "hover:text-primary"}
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary 
                after:origin-bottom-right after:transition-transform after:duration-300 
                ${activeSection === link.href.substring(1) ? "after:scale-x-100" : "hover:after:scale-x-100"}
                hover:after:origin-bottom-left
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button 
            className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-transform duration-300 hover:-translate-y-1"
          >
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
