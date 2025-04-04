import { BookOpen, Code, Database, Terminal, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-lg">RV Institute of Technology and Management</h3>
              <p className="text-muted-foreground">B.E. in Information Science</p>
              <p className="text-muted-foreground">2023 - Present</p>
              <div className="mt-4">
                <h4 className="font-medium mb-1">Relevant Coursework:</h4>
                <ul className="list-disc ml-5 text-muted-foreground">
                  <li>Data Structures</li>
                  <li>Operating Systems</li>
                  <li>DBMS</li>
                  <li>ADA</li>
                </ul>
                <p className="mt-2"><span className="font-medium">CGPA:</span> 8.9</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Skills */}
          <Card className="lg:col-span-2 card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-primary" />
                    Programming Languages
                  </h3>
                  <ul className="list-disc ml-5 text-muted-foreground">
                    <li>Python</li>
                    <li>C</li>
                    <li>Java</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Code className="h-4 w-4 text-primary" />
                    Web Development
                  </h3>
                  <ul className="list-disc ml-5 text-muted-foreground">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" />
                    Database Management
                  </h3>
                  <ul className="list-disc ml-5 text-muted-foreground">
                    <li>MySQL</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-primary" />
                    Tools & Platforms
                  </h3>
                  <ul className="list-disc ml-5 text-muted-foreground">
                    <li>Git</li>
                    <li>Linux</li>
                    <li>Machine Learning</li>
                    <li>Cybersecurity</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Languages */}
        <div className="mt-8">
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-muted-foreground">
                <li>English - Proficient</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
