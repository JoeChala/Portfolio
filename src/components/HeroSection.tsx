
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-fade-in [animation-delay:200ms]">
              <h2 className="text-xl md:text-2xl text-primary font-medium">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Joseph J Chalakkal
              </h1>
              <p className="text-xl md:text-2xl mt-4 text-muted-foreground">
                Information Science Student & Developer
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
              <Button asChild>
                <a href="/contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/projects">View Projects</a>
              </Button>
            </div>
            
            <div className="animate-fade-in [animation-delay:600ms]">
              <p className="text-muted-foreground">
                Based in Bengaluru, India
              </p>
              <div className="flex gap-4 mt-2">
                <a
                  href="mailto:jchalakj20@gmail.com"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  jchalakj20@gmail.com
                </a>
                <span className="text-muted-foreground">|</span>
                <a
                  href="tel:+918762053484"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  +91 8762053484
                </a>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative animate-fade-in [animation-delay:600ms]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30"></div>
              <div className="relative bg-card rounded-lg shadow-lg p-6 border">
                <h3 className="text-xl font-medium mb-4">Core Skills</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Python</span>
                    <div className="h-2 w-64 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>JavaScript/HTML/CSS</span>
                    <div className="h-2 w-64 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Java</span>
                    <div className="h-2 w-64 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>C</span>
                    <div className="h-2 w-64 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>MySQL</span>
                    <div className="h-2 w-64 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToAbout} 
            aria-label="Scroll down"
          >
            <ArrowDownCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
