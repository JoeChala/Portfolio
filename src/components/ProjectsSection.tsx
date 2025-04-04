
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  const projects = [
    {
      title: "Eagle Eye",
      description: "A smart attendance monitoring system designed for employees and students. It leverages facial recognition technology to ensure accurate and efficient attendance tracking.",
      technologies: ["Python", "C", "MySQL"],
      githubUrl: "https://github.com/jchalakj20/eagle-eye",
      inDevelopment: false,
    },
    {
      title: "Vector",
      description: "A Java-based application designed to help students manage their time, collaborate with peers, and enhance their learning experience.",
      technologies: ["Java", "Swing", "MySQL"],
      githubUrl: "https://github.com/jchalakj20/vector",
      inDevelopment: false,
    },
    {
      title: "PhoeniX",
      description: "A firewall and network monitoring app built using Python and C, designed to provide comprehensive network security and monitoring capabilities.",
      technologies: ["Python", "C", "Networking"],
      githubUrl: "",
      inDevelopment: true,
      progressPercent: 60,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              inDevelopment={project.inDevelopment}
              progressPercent={project.progressPercent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
