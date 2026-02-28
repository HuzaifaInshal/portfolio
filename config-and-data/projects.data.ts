export const projectsData = [
  {
    id: "letzfair",
    title: "Letzfair - (associated with Zenkoders)",
    subtitle: "Event management platform — led frontend development and contributed to backend tasks",
    specialNot: "Note: This project is fully owned by Zenkoders. They hold all intellectual property rights; the codebase does not belong to me.",
    year: "2025 - 2026",
    description: [
      "My primary goal was to create the UI for the main web app and manage its integration.",
      "I developed the admin panel and also contributed to backend development on a few occasions.",
      "The project was developed using Next.js, Tailwind CSS, and TanStack.",
      "It features advanced token-based authentication, real-time updates via WebSockets, and efficient middleware implementation."
    ],
    image: [
      "/projects/letzfair/2.png",
      "/projects/letzfair/1.png",
      "/projects/letzfair/3.png"
    ],
    moreLinks: [
      {
        title: "Letzfair",
        link: "https://dev.letzfair.com"
      },
      {
        title: "Zenkoders",
        link: "https://zenkoders.com"
      }
    ]
  },
  {
    id: "mukh-one",
    title: "Mukh.1 - (associated with Ibranext)",
    subtitle: "Agentic AI-based orchestration platform developed with full-stack contributions.",
    specialNot: "Note: This project is fully owned by Ibranext. They hold all intellectual property rights; the codebase does not belong to me.",
    year: "2025",
    description: [
      "Mukh.1 is an agentic AI-based orchestration platform.",
      "I was responsible for both backend and frontend development.",
      "The project was built using React.js and Express.js."
    ],
    image: [
      "/projects/mukh/1.avif",
      "/projects/mukh/2.avif"
    ],
    moreLinks: [
      {
        title: "Mukh.1",
        link: "https://mukh.one/"
      },
      {
        title: "Ibranext",
        link: "https://ibranext.com"
      }
    ]
  }
];

export type ProjectItem = (typeof projectsData)[number];