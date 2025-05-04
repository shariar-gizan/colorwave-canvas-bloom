
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="gradient-text">Skills</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Expertise in modern mobile development technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="skill-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-xl bg-secondary/70 mr-4">
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <div className="flex items-center mt-1">
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%`, maxWidth: "0%" }}
                        onAnimationEnd={(e) => {
                          e.currentTarget.style.maxWidth = `${skill.level}%`;
                        }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">{skill.level}%</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Other Relevant Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Firebase", "RESTful APIs", "GraphQL", "CI/CD", "Git", "Agile", "UI/UX Design", "Material Design", "State Management"].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-background rounded-full border shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
