import React from "react";
import SectionHeading from "@/components/section-heading.component";
import { cn } from "@/utils/cn.util";
import { projectsData } from "@/config-and-data/projects.data";
import ProjectItem from "./section-components/project-item.component";
import { styles_SectionContainer } from "@/styles/section/section.styles";
import { styles_Typography } from "@/styles/typography/typography.styles";
import Link from "next/link";
import { userData } from "@/config-and-data/user.data";
import UnderlinedText from "@/components/underlined-text.component";

const ProjectsSection = () => {
  return (
    <section id="products" className={cn(styles_SectionContainer)}>
      <div className={cn("container mx-auto")}>
        <SectionHeading>PROJECTS</SectionHeading>

        <div className={cn("mt-8 space-y-20")}>
          {projectsData.map((p, i) => (
            <ProjectItem key={p.id} item={p} index={i} />
          ))}
        </div>

        <div className="flex items-center justify-center w-full mt-10">
          <p className={cn(styles_Typography['heading-3'])}>Check my <UnderlinedText><Link target='_blank' href={userData.socials.github}>Github</Link></UnderlinedText> to view all my side projects.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
