export const projectsData = [
  {
    id: "compound-interest",
    title: "Compound Interest Calculator",
    subtitle: "Web Development, Design, Idea",
    year: "2024",
    short:
      "This side project started from my personal interest in the effects of compound interest.",
    description: [
      "My goal was to create a simple, user-friendly tool that hides all the complexity — something people could use regularly.",
      "The project was developed using TypeScript, React, Vite, and deployed on Cloudflare Pages."
    ],
    website: "https://www.saving.tools",
    image: [
      "https://images.unsplash.com/photo-1508948956644-0ecb2f6a9b9b?w=1600&auto=format&fit=crop"
    ]
  },
  {
    id: "drift-meditation",
    title: "Drift Focus & Meditation",
    subtitle: "iOS Development",
    year: "2022",
    short:
      "As a part of a small team, I helped plan, develop and launch a native iOS application in the mental health sector.",
    description: [
      "Drift combined meditation & with popular focus methods to help users improve their focus. The app offered an extra level of customization, with the ability to create custom focus sessions to suit user needs.",
      "The project was built with Swift and MVVM architecture, integrating RevenueCat for the in-app payments."
    ],
    website: "#",
    image: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop"
    ]
  }
];

export type ProjectItem = (typeof projectsData)[number];
