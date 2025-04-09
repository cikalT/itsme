
import { Certification } from "@/types";
import certificationData from "./certifications.json";
import { imageMap } from './imageMap';

export const certifications: Certification[] = certificationData.map(
  (cert) => ({
    ...cert,
    logo: imageMap[cert.logo] ?? '', 
  })
);
