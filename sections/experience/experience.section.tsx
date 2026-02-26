import SectionHeading from "@/components/section-heading.component";
import { experienceData } from "@/config-and-data/experience.data";
import { styles_SectionContainer } from "@/styles/section/section.styles";
import { cn } from "@/utils/cn.util";
import ExperienceItem from "./section-components/experience-item.component";
import InternshipItem from "./section-components/internship-item.component";

const ExperienceSection = () => {
  return (
    <section id="experience" className={cn(styles_SectionContainer)}>
      <div className={cn("container mx-auto")}>
        <SectionHeading>EXPERIENCE</SectionHeading>

        <div className={cn("mt-8 space-y-6")}>
          {experienceData
            .filter((each) => each.type === "job")
            .map((item, idx) => (
              <ExperienceItem key={idx} item={item} />
            ))}
          {experienceData
            .filter((each) => each.type === "internship")
            .map((item, idx) => (
              <InternshipItem key={idx} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
