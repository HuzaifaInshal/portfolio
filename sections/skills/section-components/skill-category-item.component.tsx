import React from "react";
import { cn } from "@/utils/cn.util";
import { styles_Typography } from "@/styles/typography/typography.styles";
import type { SkillCategory } from "@/config-and-data/skills.data";

interface Props {
    item: SkillCategory;
}

const SkillCategoryItem = ({ item }: Props) => {
    return (
        <div className={cn("flex flex-col md:flex-row gap-6 md:gap-10")}>
            <div className={cn("w-full md:w-1/4 shrink-0")}>
                <p className={cn(styles_Typography["heading-3"])}>{item.category}</p>
            </div>

            <div className={cn("flex flex-wrap gap-3")}>
                {item.skills.map((skill, i) => (
                    <span
                        key={i}
                        className={cn(
                            styles_Typography["skills"],
                            "px-4 h-[30px]", "flex items-center",
                            "border border-text-light/30",
                            "rounded-full",
                        )}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillCategoryItem;
