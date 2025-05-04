
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    
    // Set initial visibility
    setIsVisible(true);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background decoration - animated blobs */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-500/10 rounded-full filter blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 stagger-animate ${isVisible ? 'visible' : ''}`}>
            <div>
              <h2 className="text-xl font-medium text-primary mb-2 transform transition-transform duration-700 translate-y-8 opacity-0" 
                style={{animationFillMode: 'forwards', animation: 'slide-up 0.7s ease-out forwards'}}>
                Hello, I'm <span className="animate-wave inline-block">👋</span> <span className="gradient-text">Shariar Nafiz</span>
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 transform transition-transform duration-700 translate-y-8 opacity-0"
                style={{animationDelay: '0.3s', animationFillMode: 'forwards', animation: 'slide-up 0.7s ease-out forwards'}}>
                Mobile Application
                <br />
                <span className="gradient-text">Engineer</span>
              </h1>
              
              <div className="flex items-center mt-8 transform transition-transform duration-700 translate-y-8 opacity-0"
                style={{animationDelay: '0.6s', animationFillMode: 'forwards', animation: 'slide-up 0.7s ease-out forwards'}}>
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
            
            <p className="text-lg text-muted-foreground max-w-lg transform transition-transform duration-700 translate-y-8 opacity-0"
              style={{animationDelay: '0.9s', animationFillMode: 'forwards', animation: 'slide-up 0.7s ease-out forwards'}}>
              Crafting beautiful, high-performance mobile applications with modern technologies and a focus on user experience.
            </p>
            
            <div className="flex flex-wrap gap-4 transform transition-transform duration-700 translate-y-8 opacity-0"
              style={{animationDelay: '1.2s', animationFillMode: 'forwards', animation: 'slide-up 0.7s ease-out forwards'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 animate-pulse-custom"
                style={{animationDuration: '3s'}}
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="pt-4 transform transition-transform duration-700 translate-y-8 opacity-0"
              style={{animationDelay: '1.5s', animationFillMode: 'forwards', animation: 'slide-up 0.7s ease-out forwards'}}>
              <p className="text-sm text-muted-foreground mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-4">
                {[
                  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter"},
                  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", alt: "Android"},
                  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", alt: "Kotlin"},
                  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java"},
                  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", alt: "Dart"}
                ].map((tech, index) => (
                  <img 
                    key={tech.alt}
                    src={tech.icon} 
                    alt={tech.alt} 
                    className="w-8 h-8 opacity-0 transform scale-0" 
                    style={{
                      animation: 'scale-in-bounce 0.5s ease-out forwards',
                      animationDelay: `${1.8 + index * 0.1}s`,
                      animationFillMode: 'forwards'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto max-w-sm lg:max-w-full opacity-0" 
            style={{
              animation: 'fade-in 1s ease-out forwards',
              animationDelay: '0.8s',
              animationFillMode: 'forwards'
            }}>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl animate-float" style={{animationDuration: '6s'}}>
              <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 p-1">
                <div className="bg-card rounded-2xl overflow-hidden">
                  <img 
                    src="https://framerusercontent.com/images/8xIMJ2dOYMXV37h1FSLBBnQFag.png" 
                    alt="Mobile Application Showcase" 
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-8 -right-4 w-full h-full bg-gradient-to-r from-purple-600 to-blue-400 rounded-2xl -z-10 opacity-20 blur-xl animate-float" style={{animationDelay: '1s', animationDuration: '7s'}}></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-in-bounce {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .stagger-animate.visible > * {
          animation-play-state: running;
        }
        
        .stagger-animate:not(.visible) > * {
          opacity: 0;
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
