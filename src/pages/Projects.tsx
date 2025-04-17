
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Define filter categories
const categories = ["All", "React", "TypeScript", "API Integration", "Firebase"];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.tags.includes(filter))
      );
    }
  }, [filter]);

  return (
    <Layout>
      <section className="py-10 md:py-16">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="My Projects"
            subtitle="Explore my latest work"
            center
          />

          {/* Filter Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <Button 
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div> */}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-card rounded-lg overflow-hidden shadow-sm project-card animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="default" size="sm" className="mr-2">
                    {/* <a href={`/itsme/projects/${project.id}`}>View Details</a> */}
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects match the selected filter.</p>
              <Button 
                variant="outline" 
                onClick={() => setFilter("All")}
                className="mt-4"
              >
                Show All Projects
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
