import React from "react";
import { cn } from "@/utils/cn.util";
import SectionHeading from "@/components/section-heading.component";
import { educationData } from "@/config-and-data/education.data";
import EducationItem from "./section-components/education-item.component";
import { styles_SectionContainer } from "@/styles/section/section.styles";

const EducationSection = () => {
  return (
    <section className={cn(styles_SectionContainer, "w-full")}>
      <div className={cn("flex flex-col gap-10")}>
        <SectionHeading>Education</SectionHeading>
        <div className={cn("flex flex-col gap-12")}>
          {educationData.map((item, i) => (
            <EducationItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
