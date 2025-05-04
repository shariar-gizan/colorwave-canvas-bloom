
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = textRef.current;
      if (el) {
        const current = parseInt(el.getAttribute("data-index") || "0");
        const skills = ["Flutter", "Android Native", "Kotlin", "Java", "Dart", "Jetpack Compose"];
        const next = (current + 1) % skills.length;
        
        el.classList.add("opacity-0");
        
        setTimeout(() => {
          el.textContent = skills[next];
          el.setAttribute("data-index", next.toString());
          el.classList.remove("opacity-0");
        }, 500);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-float delay-1000"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 stagger-animate">
            <div>
              <h2 className="text-xl font-medium text-primary mb-2">Hello, I'm a</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Mobile Application
                <br />
                <span className="gradient-text">Engineer</span>
              </h1>
              
              <div className="flex items-center mt-8">
                <span className="text-lg mr-2">Expert in</span>
                <div 
                  ref={textRef} 
                  data-index="0" 
                  className="text-xl sm:text-2xl font-bold text-primary transition-opacity duration-500 ease-in-out"
                >
                  Flutter
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Crafting beautiful, high-performance mobile applications with modern technologies and a focus on user experience.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-8 h-8" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" className="w-8 h-8" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="w-8 h-8" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-8 h-8" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" className="w-8 h-8" />
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto max-w-sm lg:max-w-full">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl animate-float">
              <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 p-1">
                <div className="bg-card rounded-2xl overflow-hidden">
                  <img 
                    src="https://framerusercontent.com/images/8xIMJ2dOYMXV37h1FSLBBnQFag.png" 
                    alt="Mobile Application Showcase" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-8 -right-4 w-full h-full bg-gradient-to-r from-purple-600 to-blue-400 rounded-2xl -z-10 opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
