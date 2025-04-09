import { ArrowRight, Camera, Code, ExternalLink, FileText, Github, Linkedin, Mail, Twitter, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { projects, experiences, blogPosts, photos } from "@/data";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HomePage = () => {
  const featuredProjects = projects.slice(0, 2);
  const latestExperience = experiences[0];
  const latestPosts = blogPosts.slice(0, 2);

  const displayedPhotos = photos.slice(0, 6);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Cikal Taruna</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                A versatile professional with 5+ years of experience in project management, data analysis, and software development, delivering web and mobile solutions while leveraging data insights to drive business growth
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/itsme/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/itsme/projects">View My Work</Link>
                </Button>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://github.com/cikalT"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-background border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/cikaltaruna/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-background border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://x.com/CikalTaruna"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-background border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="mailto:contact.cikalt@gmail.com"
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-background border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary animate-on-scroll">
                <img
                  src="src/asset/photo.png"
                  alt="Cikal T"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-[50px] md:h-[100px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="currentColor"
              className="text-muted"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="About Me"
            subtitle="Learn more about my background and skills"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm animate-on-scroll flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground">
                Driving data-driven solutions and efficient project execution using modern tools and analytics platforms.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm animate-on-scroll flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground">
                Over 5 years of professional experience working and leading tech companies.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm animate-on-scroll flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Writing</h3>
              <p className="text-muted-foreground">
                Sharing knowledge through technical articles, game, and hobby.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center animate-on-scroll">
            <Button asChild>
              <Link to="/itsme/experience">
                Learn More About My Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {/* <section className="py-16">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Featured Projects"
            subtitle="Some of my recent work"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={cn(
                  "bg-card rounded-lg overflow-hidden shadow-sm project-card",
                  "animate-on-scroll"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 md:h-64 overflow-hidden">
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
                  <Button asChild size="sm" variant="outline">
                    <Link to={`/itsme/projects/${project.id}`}>View Project</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Button asChild>
              <Link to="/itsme/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Featured Experience Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Experience Highlights"
            subtitle="Where I've worked"
            center
          />
          
          <div className="bg-card rounded-lg p-6 shadow-sm animate-on-scroll max-w-3xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="h-16 w-16 mr-4 rounded bg-secondary flex items-center justify-center">
                <img
                  src={latestExperience.logo}
                  alt={latestExperience.company}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{latestExperience.position}</h3>
                <p className="text-primary">{latestExperience.company}</p>
                <p className="text-sm text-muted-foreground">{latestExperience.period}</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{latestExperience.description}</p>
            <div className="flex flex-wrap gap-2">
              {latestExperience.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Button asChild>
              <Link to="/itsme/experience">
                View Full Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Photography Section - Little bit of my world */}
      {/* <section className="py-16">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Little bit of my world"
            subtitle="Moments captured through my lens"
            center
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-8">
            {displayedPhotos.map((photo, index) => {
              // Calculate if this is a featured photo (larger size)
              // First photo in mobile, and first and fourth in desktop are featured (spans 2 rows)
              const isFeatured = index === 0 || index === 3;
              
              return (
                <div 
                  key={photo.id}
                  className={cn(
                    "overflow-hidden rounded-lg shadow-sm animate-on-scroll transition-transform duration-300 hover:scale-[1.02]",
                    isFeatured ? "row-span-2" : "",
                    index === 0 ? "col-span-2 md:col-span-1" : ""
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-full">
                    <img 
                      src={photo.imageUrl} 
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white p-3 font-medium text-sm">{photo.title}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link to="/itsme/photography">
                See More Photos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Blog Posts Section */}
      {/* <section className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Latest Blog Posts"
            subtitle="Thoughts and insights"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestPosts.map((post, index) => (
              <div 
                key={post.id}
                className={cn(
                  "bg-card rounded-lg overflow-hidden shadow-sm project-card",
                  "animate-on-scroll"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2 text-sm">
                    <span className="text-muted-foreground">{post.date}</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-primary">{post.author}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button asChild size="sm" variant="outline">
                    <Link to={`/itsme/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Button asChild>
              <Link to="/itsme/blog">
                Browse All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Contact CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Let's get in touch!
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/itsme/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
