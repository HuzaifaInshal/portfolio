import SectionHeading from "@/components/section-heading.component";
import { experienceData } from "@/config-and-data/experience.data";
import { styles_SectionContainer } from "@/styles/section/section.styles";
import { cn } from "@/utils/cn.util";
import ExperienceItem from "./section-components/experience-item.component";
import InternshipItem from "./section-components/internship-item.component";
import DividerLight from "@/components/divider-light.component";
import { Fragment } from "react/jsx-runtime";

const ExperienceSection = () => {
  return (
    <section id="experience" className={cn(styles_SectionContainer)}>
      <div className={cn("container mx-auto")}>
        <SectionHeading>EXPERIENCE</SectionHeading>

        <div className={cn("mt-8 space-y-6")}>
          {experienceData
            .filter((each) => each.type === "job")
            .map((item, idx) => (
              <Fragment key={idx}>
                <ExperienceItem item={item} />
                <DividerLight />
              </Fragment>
            ))}
          {experienceData
            .filter((each) => each.type === "internship")
            .map((item, idx) => (
              <Fragment key={idx}>
                <InternshipItem item={item} />
                <DividerLight />
              </Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
