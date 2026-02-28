"use client";

import HeaderSection from "@/sections/header/header.section";
import HeroSection from "@/sections/hero/hero.section";
import AboutSection from "@/sections/about/about.section";
import ExperienceSection from "@/sections/experience/experience.section";
import EducationSection from "@/sections/education/education.section";
import ProjectsSection from "@/sections/projects/projects.section";
import SkillsSection from "@/sections/skills/skills.section";
import FooterSection from "@/sections/footer/footer.section";

const LandingPageView = () => {
  return (
    <div className="container mx-auto">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};

export default LandingPageView;