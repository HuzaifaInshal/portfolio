export interface SkillCategory {
    category: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        category: "Frontend",
        skills: ["NextJS", "ReactJS", "Redux", "Zustand", "Bootstrap", "TailwindCSS", "JQuery"]
    },
    {
        category: "Backend",
        skills: ["NestJS", "TypeORM", "Prisma", "ExpressJS", "NodeJS", "Django"]
    },
    {
        category: "Databases",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"]
    },
    {
        category: "Design & Animations",
        skills: ["ThreeJS", "GSAP", "Figma", "Framer Motion", "Spline"]
    },
    {
        category: "Others",
        skills: [
            "Docker",
            "Docker Compose",
            "CI/CD",
            "Github Actions",
            "WebSockets",
            "npm / npx / pip",
            "MERN Stack",
            "JavaScript",
            "TypeScript",
            "Python"
        ]
    },
    {
        category: "Cloud",
        skills: ["AWS S3", "EC2", "RDS"]
    },
    {
        category: "Soft Skills",
        skills: [
            "Communication",
            "Creativity",
            "Problem Solving",
            "Teamwork",
            "Dedication",
            "Time Management",
            "Adaptability",
            "Critical Thinking"
        ]
    }
];
