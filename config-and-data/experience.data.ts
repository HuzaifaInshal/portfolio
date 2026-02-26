import { InternshipExperience, JobExperience } from "@/types/experience.type";

export const experienceData: (InternshipExperience | JobExperience)[] = [
  {
    type: "job",
    company: "Zenkoders",
    image: "/assets/zenkoders.png",
    location: "Karachi, Pakistan",
    industry: "Service based",
    website: "https://zenkoders.com/",
    history: [
      {
        position: "Junior Full Stack Developer",
        startPeriod: "Jul 2024",
        endPeriod: "Present",
        details: [
          "Currently serving as a Junior Full Stack Developer, dedicated to delivering and collaborating on diverse projects.",
          "My responsibilities span across client-side, server-side, and database technologies, encompassing Next.js, Nest.js, and PostgreSQL, among others."
        ]
      },
      {
        position: "Trainee Full Stack Developer",
        startPeriod: "May 2024",
        endPeriod: "Jul 2024",
        details: [
          "Started as a trainee developer to gain hands on experience in various software development technologies and methods."
        ]
      }
    ]
  },
  {
    type: "job",
    company: "Ibranext",
    image: "/assets/ibranext.png",
    location: "Remote",
    industry: "Saas based",
    website: "https://ibranext.com/",
    history: [
      {
        position: "Full Stack Developer",
        startPeriod: "March 2024",
        endPeriod: "Sep 2025",
        details: [
          "My Full Stack role features work with ReactJs, ExpressJs, AI and Python for business automation and scripting."
        ]
      },
      {
        position: "Frontend Developer",
        startPeriod: "Oct 2023",
        endPeriod: "Feb 2024",
        details: [
          "Collaborated with their frontend team to develop user friendly and responsive application with ReactJS.",
          "Improving pre-existing and developing new client side code by using frontend languages; Html, CSS, JavaScript."
        ]
      }
    ]
  },
  {
    type: "internship",
    company: "Karachi Development Authority (KDA)",
    image: "/assets/kda.png",
    role: "Internship Trainee",
    period: "Aug 2023 - Oct 2023",
    location: "Onsite - Karachi",
    details:
      "Performed my duties as an Internee in DAD/SWD Section of I.T. Department of Karachi Development Authority (KDA)"
  },
  {
    type: "internship",
    company: "Pakistan Council of Scientific and Industrial Research (PCSIR)",
    image: "/assets/pcsir.png",
    role: "UIUX Internee",
    period: "Sep 2023",
    location: "Hybrid - Karachi",
    details:
      "A 15 day internship focus on UI/UX based role with tools like Figma etc. Improvised the design for easypaisa app, a loan and mobile banking application. Also documented and presented the design in a comprehensive Case Study."
  },
  {
    type: "internship",
    company: "NCAI - NEDUET, Smart City Lab",
    image: "/assets/ncai.png",
    role: "Computer Vision Internee",
    period: "Sep 2022 - Oct 2022",
    location: "Onsite - Karachi",
    details:
      "Worked on a defective bottle detection system that utilizes the concepts of deep learning and computer vision. The tools that I utilized were ScikitLearn, openCV and Tensorflow, both are Python modules that provide functionalities in Deep Learning and Data Science."
  }
];

export type ExperienceItem = JobExperience | InternshipExperience;
