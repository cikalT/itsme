
import { Experience } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ExperienceDetailProps {
  experience: Experience | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExperienceDetail({ experience, open, onOpenChange }: ExperienceDetailProps) {
  if (!experience) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded bg-secondary flex items-center justify-center">
              <img
                src={experience.logo}
                alt={experience.company}
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <DialogTitle className="text-xl font-semibold">{experience.position}</DialogTitle>
              <p className="text-primary">{experience.company}</p>
              <p className="text-sm text-muted-foreground">{experience.period}</p>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="w-full">
            <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
            <TabsTrigger value="responsibilities" className="flex-1">Responsibilities</TabsTrigger>
            <TabsTrigger value="projects" className="flex-1">Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-4">
            <ScrollArea className="h-[300px] pr-4">
              <p className="text-muted-foreground mb-4">{experience.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="responsibilities" className="mt-4">
            {experience.details && (
              <ScrollArea className="h-[300px] pr-4">
                <ul className="list-disc pl-5 space-y-2">
                  {experience.details.map((detail, index) => (
                    <li key={index} className="text-muted-foreground">{detail}</li>
                  ))}
                </ul>
              </ScrollArea>
            )}
          </TabsContent>
          
          <TabsContent value="projects" className="mt-4">
            {experience.projects && experience.projects.length > 0 ? (
              <ScrollArea className="h-[300px] pr-4">
                <div className="grid gap-4">
                  {experience.projects.map((project, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-semibold mb-2">{project.name}</h3>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                          </div>
                          <div>
                            <AspectRatio ratio={16 / 9}>
                              <img 
                                src={project.image} 
                                alt={project.name}
                                className="rounded-md object-cover w-full h-full"
                              />
                            </AspectRatio>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            ) : (
              <p className="text-muted-foreground">No project samples available.</p>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
