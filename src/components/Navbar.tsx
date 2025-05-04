
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="font-bold text-xl gradient-text">MobileDev</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-primary transition-colors">Home</a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">About</a>
          <a href="#skills" className="font-medium hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="font-medium hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
