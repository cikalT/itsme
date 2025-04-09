
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { experiences } from "@/data/experiences";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { Experience as ExperienceType } from "@/types";
import { GraduationCap } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

const ExperiencePage = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleExperienceClick = (experience: ExperienceType) => {
    setSelectedExperience(experience);
    setDialogOpen(true);
  };

  // Determine if we should use carousel for certifications and education
  const useCertificationsCarousel = certifications.length > 3;
  const useEducationCarousel = education.length > 3;
  const educationCenterSingle = education.length === 1;

  return (
    <Layout>
      <section className="py-10 md:py-16">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Professional Experience"
            subtitle="My career journey and skills"
            center
          />

          <div className="timeline-container max-w-4xl mx-auto mt-16">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={cn(
                  "timeline-item mb-12 animate-on-scroll pl-10 md:pl-0",
                  index % 2 === 0 
                    ? "md:pr-10 md:text-right md:ml-auto" 
                    : "md:pl-10 md:text-left"
                )}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="timeline-dot"></div>
                <Card className="md:max-w-[90%] md:ml-auto shadow-md transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
                      <div className="h-16 w-16 rounded bg-secondary flex items-center justify-center">
                        <img
                          src={experience.logo}
                          alt={experience.company}
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                      <div className={cn("md:flex-1", index % 2 === 0 ? "md:text-right" : "md:text-left")}>
                        <h3 className="text-xl font-semibold">{experience.position}</h3>
                        <p className="text-primary">{experience.company}</p>
                        <p className="text-sm text-muted-foreground">{experience.period}</p>
                      </div>
                    </div>
                    <p className={cn("text-muted-foreground mb-4", index % 2 === 0 ? "md:text-right" : "md:text-left")}>
                      {experience.description}
                    </p>
                    <div className={cn("flex flex-wrap gap-2 mb-4", index % 2 === 0 ? "md:justify-end" : "")}>
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className={cn("flex", index % 2 === 0 ? "md:justify-end" : "")}>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleExperienceClick(experience)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-12 bg-muted">
        <div className="container px-4 mx-auto">
          <SectionTitle 
            title="Certifications & Training" 
            subtitle="Professional development and learning journey" 
            center 
          />
          
          {useCertificationsCarousel ? (
            <div className="max-w-4xl mx-auto mt-8">
              <Carousel className="w-full">
                <CarouselContent>
                  {certifications.map((certification, index) => (
                    <CarouselItem key={certification.id} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="animate-on-scroll h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="h-12 w-12 rounded bg-secondary flex items-center justify-center shrink-0">
                              <img
                                src={certification.logo}
                                alt={certification.issuer}
                                className="h-8 w-8 object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold">{certification.name}</h3>
                              <p className="text-primary text-sm">{certification.issuer}</p>
                              <p className="text-sm text-muted-foreground">{certification.date}</p>
                            </div>
                          </div>
                          
                          {certification.skills && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {certification.skills.map((skill) => (
                                <Badge key={skill} variant="secondary">{skill}</Badge>
                              ))}
                            </div>
                          )}
                          
                          {certification.credentialUrl && (
                            <div className="mt-4">
                              <Button
                                variant="link"
                                className="p-0 h-auto"
                                asChild
                              >
                                <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
                                  View Credential
                                </a>
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-end gap-2 mt-4">
                  <CarouselPrevious className="relative static left-auto transform-none" />
                  <CarouselNext className="relative static right-auto transform-none" />
                </div>
              </Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
              {certifications.map((certification, index) => (
                <Card 
                  key={certification.id} 
                  className="animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded bg-secondary flex items-center justify-center shrink-0">
                        <img
                          src={certification.logo}
                          alt={certification.issuer}
                          className="h-8 w-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{certification.name}</h3>
                        <p className="text-primary text-sm">{certification.issuer}</p>
                        <p className="text-sm text-muted-foreground">{certification.date}</p>
                      </div>
                    </div>
                    
                    {certification.skills && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {certification.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    )}
                    
                    {certification.credentialUrl && (
                      <div className="mt-4">
                        <Button
                          variant="link"
                          className="p-0 h-auto"
                          asChild
                        >
                          <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
                            View Credential
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 mx-auto text-center">
          <SectionTitle title="Education" subtitle="Academic background and learning journey" center />
          
          {useEducationCarousel ? (
            <div className="max-w-4xl mx-auto mt-8">
              <Carousel className="w-full">
                <CarouselContent>
                  {education.map((edu, index) => (
                    <CarouselItem key={edu.id} className="md:basis-1/2 lg:basis-1/3">
                      <EducationCard edu={edu} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-end gap-2 mt-4">
                  <CarouselPrevious className="relative static left-auto transform-none" />
                  <CarouselNext className="relative static right-auto transform-none" />
                </div>
              </Carousel>
            </div>
          ) : (
            <div className={cn(
              "grid gap-6 max-w-6xl mx-auto mt-8",
              educationCenterSingle 
                ? "flex justify-center" 
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            )}>
              {education.map((edu, index) => (
                <EducationCard 
                  key={edu.id} 
                  edu={edu} 
                  animationDelay={index * 100} 
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <ExperienceDetail 
        experience={selectedExperience} 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </Layout>
  );
};

// Extract EducationCard to a separate component for reusability
const EducationCard = ({ edu, animationDelay }: { edu: Education, animationDelay?: number }) => {
  return (
    <Card 
      className={cn(
        "animate-on-scroll max-w-md transition-all hover:shadow-md",
        animationDelay !== undefined ? "" : ""
      )}
      style={animationDelay !== undefined ? { animationDelay: `${animationDelay}ms` } : undefined}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center shrink-0">
            {edu.logo ? (
              <img
                src={edu.logo}
                alt={edu.institution}
                className="h-10 w-10 object-contain"
              />
            ) : (
              <GraduationCap className="h-8 w-8 text-primary" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{edu.degree}</h3>
            <p className="text-primary font-medium">{edu.institution}</p>
            <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
              {edu.location && (
                <span>{edu.location}</span>
              )}
              <span>•</span>
              <span>{edu.period}</span>
            </div>
          </div>
        </div>
        
        {edu.description && (
          <ScrollArea className="h-24 mt-3 mb-3 pr-4">
            <p className="text-muted-foreground text-sm">{edu.description}</p>
          </ScrollArea>
        )}
        
        {edu.achievements && edu.achievements.length > 0 && (
          <div className="mt-4">
            <p className="font-medium text-sm mb-2">Notable Achievements:</p>
            <ScrollArea className="h-24 pr-4">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExperiencePage;
