
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          {/* Experience Item */}
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start">
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
              
              {/* Date - Mobile & Left side on desktop */}
              <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-16">
                <div className="md:text-right">
                  <div className="inline-flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2 md:hidden" />
                    <span>Nov 2023 - Jan 2024</span>
                    <Calendar className="h-4 w-4 ml-2 hidden md:block" />
                  </div>
                </div>
              </div>
              
              {/* Content - Mobile & Right side on desktop */}
              <div className="w-full md:w-1/2 md:pl-12">
                <Card className="card-hover">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      The Business Sentinel
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium">Graphic Design Intern</h3>
                    <p className="text-muted-foreground mt-2">
                      Bengaluru, India
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-baseline gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <p>Created graphics for blogs and articles</p>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <p>Helped design the webpages for the blogs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Extracurricular Leadership Activities */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Extracurricular Leadership Activities</h3>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p>Participated in National Level Envisioncode Hackathon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
