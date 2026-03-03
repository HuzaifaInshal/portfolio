export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Backend",
    skills: ["NestJS", "TypeORM", "Prisma", "ExpressJS", "NodeJS"]
  },
  {
    category: "Frontend",
    skills: [
      "NextJS",
      "ReactJS",
      "Redux",
      "Zustand",
      "TailwindCSS",
      "ShadCN",
      "MUI",
      "TanStack Query"
    ]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase"]
  },
  {
    category: "Design (UI/UX) and Animations",
    skills: ["ThreeJS", "GSAP", "Figma", "Spline"]
  },
  {
    category: "Others",
    skills: [
      "Docker",
      "Docker Compose",
      "CI/CD",
      "WebSockets",
      "TypeScript",
      "Sanity",
      "Strapi",
      "Git",
      "GitHub"
    ]
  },
  {
    category: "Cloud Skills",
    skills: ["AWS S3", "EC2", "RDS"]
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem Solving",
      "Dedication",
      "Time Management",
      "Adaptability",
      "Critical Thinking"
    ]
  }
];
