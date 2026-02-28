import React, { Fragment } from "react";
import { cn } from "@/utils/cn.util";
import SectionHeading from "@/components/section-heading.component";
import { skillsData } from "@/config-and-data/skills.data";
import { styles_SectionContainer } from "@/styles/section/section.styles";
import SkillCategoryItem from "./section-components/skill-category-item.component";
import DividerLight from "@/components/divider-light.component";

const SkillsSection = () => {
    return (
        <section id="skills" className={cn(styles_SectionContainer)}>
            <div className={cn("container mx-auto")}>
                <SectionHeading>SKILLS</SectionHeading>

                <div className={cn("flex flex-col gap-4")}>
                    {skillsData.map((item, i) => (
                        <Fragment key={i}>
                            <SkillCategoryItem item={item} />
                            <DividerLight />
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
