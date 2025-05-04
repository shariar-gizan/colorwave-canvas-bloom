
export default function SkillsSection() {
  const skills = [
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      description: "Cross-platform UI framework for building beautiful, natively compiled applications.",
      level: 95
    },
    {
      name: "Native Android",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      description: "Building performant, feature-rich apps for Android platform.",
      level: 90
    },
    {
      name: "Kotlin",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      description: "Modern, concise programming language for Android development.",
      level: 92
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      description: "Object-oriented programming language for Android development.",
      level: 88
    },
    {
      name: "Dart",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      description: "Client-optimized language for fast apps on any platform.",
      level: 94
    },
    {
      name: "Jetpack Compose",
      icon: "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png",
      description: "Modern toolkit for building native UI in Android.",
      level: 85
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-slide-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="gradient-text">Skills</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Expertise in modern mobile development technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="skill-card group opacity-0"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'forwards',
                animation: 'slide-up 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-xl bg-secondary/70 mr-4 animate-bounce-custom" style={{animationDelay: `${index * 0.2}s`}}>
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <div className="flex items-center mt-1">
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-1000 ease-out"
                        style={{ 
                          width: "0%",
                          animationDelay: `${index * 0.3 + 0.5}s`,
                          animationFillMode: 'forwards',
                          animation: 'skill-bar-fill 1.5s ease-out forwards'
                        }}
                        data-target-width={`${skill.level}%`}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm font-medium opacity-0" style={{
                      animationDelay: `${index * 0.3 + 1.5}s`,
                      animationFillMode: 'forwards',
                      animation: 'fade-in 0.5s ease-out forwards'
                    }}>{skill.level}%</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0" style={{
          animationDelay: '1.2s',
          animationFillMode: 'forwards',
          animation: 'slide-up 0.8s ease-out forwards'
        }}>
          <h3 className="text-xl font-semibold mb-6">Other Relevant Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Firebase", "RESTful APIs", "GraphQL", "CI/CD", "Git", "Agile", "UI/UX Design", "Material Design", "State Management"].map((tag, index) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-background rounded-full border shadow-sm transition-all hover:shadow-md hover:-translate-y-1 opacity-0"
                style={{ 
                  animationDelay: `${index * 0.1 + 1.5}s`,
                  animationFillMode: 'forwards',
                  animation: 'fade-in 0.5s ease-out forwards'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes skill-bar-fill {
          0% { width: 0%; }
          100% { width: var(--target-width); }
        }
        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const bars = document.querySelectorAll('.skill-card .bg-gradient-to-r');
            bars.forEach(bar => {
              const target = bar.getAttribute('data-target-width');
              bar.style.setProperty('--target-width', target);
            });
          });
        `
      }} />
    </section>
  );
}
