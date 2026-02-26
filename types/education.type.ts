export interface EducationItem {
  institution: string;
  image: string;
  degree: string;
  duration: string;
  CGPA?: string;
  result?: string;
  details?: string[];
  finalYearProject?: string;
}

export type EducationData = EducationItem[];
