
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Passionate about crafting exceptional mobile experiences that users love
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative mx-auto max-w-sm lg:max-w-full order-2 lg:order-1">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <div className="gradient-border rounded-2xl p-1">
                <img 
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                  alt="Mobile Developer" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-400/30 rounded-2xl blur-xl -z-10"></div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-bold">Mobile App Engineer with 5+ years of experience</h3>
            <p className="text-muted-foreground">
              I specialize in building high-quality mobile applications using Flutter, Native Android, Kotlin, Java, and Jetpack Compose. My passion lies in creating user-friendly interfaces with smooth animations and optimal performance.
            </p>
            <p className="text-muted-foreground">
              Throughout my career, I've worked on a diverse range of projects from e-commerce and fintech to social media and productivity tools, always focusing on delivering exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 py-4">
              <div>
                <h4 className="text-xl font-bold text-primary">50+</h4>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">15+</h4>
                <p className="text-sm text-muted-foreground">Client Collaborations</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">5+</h4>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">4.8</h4>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500">
                Download Resume
              </Button>
              <Button variant="outline" className="border-2">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
