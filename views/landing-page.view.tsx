"use client";

import AboutSection from "@/sections/about/about.section";
import ExperienceSection from "@/sections/experience/experience.section";
import EducationSection from "@/sections/education/education.section";
import FooterSection from "@/sections/footer/footer.section";
import HeaderSection from "@/sections/header/header.section";
import HeroSection from "@/sections/hero/hero.section";
import ProjectsSection from "@/sections/projects/projects.section";

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
