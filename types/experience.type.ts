export interface JobExperience {
  type: "job";
  company: string;
  image: string;
  location: string;
  industry: string;
  website: string;
  history: Array<{
    position: string;
    startPeriod: string;
    endPeriod: string;
    details: string[];
  }>;
  moreLinks?: {
    title: string;
    link: string
  }[]
}

export interface InternshipExperience {
  type: "internship";
  company: string;
  image: string;
  role: string;
  period: string;
  location: string;
  details: string;
  moreLinks?: {
    title: string;
    link: string
  }[]
}
