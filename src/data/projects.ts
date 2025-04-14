
import { Project } from "@/types";
import projectsData from "./projects.json";
import { imageMap } from './imageMap';

export const projects: Project[] = projectsData.map((proj) => ({
  ...proj,
  image: imageMap[proj.image] ?? '',
}));
