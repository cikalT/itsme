
import { Education } from "@/types";
import educationData from "./education.json";
import { imageMap } from './imageMap';

export const education: Education[] = educationData.map((edu) => ({
  ...edu,
  logo: imageMap[edu.logo] ?? '',
}));
