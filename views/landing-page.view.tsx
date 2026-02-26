"use client";

import dynamic from "next/dynamic";

const HeaderSection = dynamic(
  () => import("@/sections/header/header.section"),
  { ssr: false }
);

const HeroSection = dynamic(() => import("@/sections/hero/hero.section"), {
  ssr: false
});

const AboutSection = dynamic(() => import("@/sections/about/about.section"), {
  ssr: false
});

const ExperienceSection = dynamic(
  () => import("@/sections/experience/experience.section"),
  { ssr: false }
);

const EducationSection = dynamic(
  () => import("@/sections/education/education.section"),
  { ssr: false }
);

const ProjectsSection = dynamic(
  () => import("@/sections/projects/projects.section"),
  { ssr: false }
);

const FooterSection = dynamic(
  () => import("@/sections/footer/footer.section"),
  { ssr: false }
);

const LandingPageView = () => {
  return (
    <div className="container mx-auto">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};

export default LandingPageView;
