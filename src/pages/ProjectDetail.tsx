
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const projectId = Number(id);
  const project = projects.find(p => p.id === projectId);
  
  useEffect(() => {
    if (!project) {
      navigate("/projects", { replace: true });
    }
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }
  
  return (
    <Layout>
      <section className="py-10 md:py-16">
        <div className="container px-4 mx-auto">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
          
          <SectionTitle title={project.title} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden shadow-md mb-6 animate-on-scroll">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
              
              {project.videoUrl && (
                <div className="rounded-lg overflow-hidden shadow-md mb-6 animate-on-scroll">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src={project.videoUrl}
                      title={`${project.title} video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-[300px] md:h-[400px]"
                    ></iframe>
                  </div>
                </div>
              )}
              
              {project.iframeUrl && (
                <div className="rounded-lg overflow-hidden shadow-md mb-6 animate-on-scroll">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src={project.iframeUrl}
                      title={`${project.title} iframe`}
                      className="w-full h-[300px] md:h-[400px]"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-1 animate-on-scroll">
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {project.demoUrl && (
                    <Button asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  {project.githubUrl && (
                    <Button asChild variant="outline">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetailPage;
