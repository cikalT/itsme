
import { Experience } from "@/types";
import experiencesData from "./experiences.json";
import { imageMap } from './imageMap';

export const experiences: Experience[] = experiencesData.map((exp) => ({
  ...exp,
  logo: imageMap[exp.logo] ?? '',
  projects: exp.projects?.map((project) => ({
    ...project,
    image: imageMap[project.image] ?? '',
  })),
}));

