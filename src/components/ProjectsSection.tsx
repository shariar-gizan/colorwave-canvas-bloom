
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "HealthTracker Pro",
      description: "A comprehensive health and fitness tracking application with real-time analytics.",
      image: "https://cdn.dribbble.com/users/2564256/screenshots/17479185/media/52a1f27ea729961338ebab41def4797d.png",
      technologies: ["Flutter", "Firebase", "Dart"],
      link: "#"
    },
    {
      id: 2,
      title: "Finance Manager",
      description: "Personal finance app with budgeting features and expense tracking.",
      image: "https://cdn.dribbble.com/users/2019344/screenshots/15355364/media/be20c1174e6b71437523614db883bc05.png",
      technologies: ["Kotlin", "MVVM", "Room DB"],
      link: "#"
    },
    {
      id: 3,
      title: "Social Connect",
      description: "Modern social networking app with real-time messaging and content sharing.",
      image: "https://cdn.dribbble.com/users/2892710/screenshots/16637611/media/54b741714246aec0c2fe3b2f52923f95.png",
      technologies: ["Java", "Firebase", "RESTful API"],
      link: "#"
    },
    {
      id: 4,
      title: "TaskMaster",
      description: "Productivity app with advanced task management and reminders.",
      image: "https://cdn.dribbble.com/users/1963775/screenshots/17083242/media/5ec7e0506b5575572f0ce28e0e38599a.png",
      technologies: ["Jetpack Compose", "Kotlin", "MVVM"],
      link: "#"
    },
    {
      id: 5,
      title: "FoodDelivery Express",
      description: "On-demand food delivery app with real-time order tracking.",
      image: "https://cdn.dribbble.com/users/4189231/screenshots/17343305/media/202173310d64a20d7769f6155eafc7a2.png",
      technologies: ["Flutter", "Google Maps API", "Firebase"],
      link: "#"
    },
    {
      id: 6,
      title: "WeatherNow",
      description: "Beautiful weather app with accurate forecasts and interactive maps.",
      image: "https://cdn.dribbble.com/userupload/2323163/file/original-6f7a8cebb0787c625b68f45db361b85c.png",
      technologies: ["Native Android", "Kotlin", "Weather API"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of my recent mobile application development work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card rounded-xl overflow-hidden shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="project-card-overlay flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button size="sm" variant="secondary" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-2">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
