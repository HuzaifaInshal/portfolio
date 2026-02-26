import React from "react";
import SectionHeading from "@/components/section-heading.component";
import { cn } from "@/utils/cn.util";
import { projectsData } from "@/config-and-data/projects.data";
import ProjectItem from "./section-components/project-item.component";
import { styles_SectionContainer } from "@/styles/section/section.styles";

const ProjectsSection = () => {
  return (
    <section id="projects" className={cn(styles_SectionContainer)}>
      <div className={cn("container mx-auto")}>
        <SectionHeading>PROJECTS</SectionHeading>

        <div className={cn("mt-8 space-y-20")}>
          {projectsData.map((p, i) => (
            <ProjectItem key={p.id} item={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
