
import { Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  inDevelopment?: boolean;
  progressPercent?: number;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  inDevelopment = false,
  progressPercent = 0,
}: ProjectCardProps) {
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          {inDevelopment && (
            <Badge variant="secondary" className="ml-2">
              Under Development
            </Badge>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <Badge variant="outline" key={index}>
              {tech}
            </Badge>
          ))}
        </div>
        
        {inDevelopment && (
          <div className="mt-4">
            <div className="text-sm flex justify-between mb-1">
              <span>Progress</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-1000 animate-pulse-light" 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {githubUrl && (
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github className="h-4 w-4" />
              <span>View on GitHub</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
