import React from "react";
import { cn } from "@/utils/cn.util";
import UnderlinedText from "@/components/underlined-text.component";
import { styles_Typography } from "@/styles/typography/typography.styles";
import { JobExperience } from "@/types/experience.type";
import Image from "next/image";
import ArrowUpright from "@/components/arrow-upright.component";

interface Props {
  item: JobExperience;
}

const ExperienceItem = ({ item }: Props) => {
  return (
    <article className={cn("flex flex-col gap-4")}>
      <div className="flex flex-row items-center gap-5">
        <Image
          src={item.image}
          alt=""
          height={50}
          width={50}
          className="rounded-full aspect-square shrink-0"
        />
        <h3 className={cn("w-full", styles_Typography["heading-2"])}>
          {item.company}
        </h3>
      </div>
      <div className="flex w-full flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          {item.history.map((each, i) => (
            <div key={i} className={cn("relative flex gap-6")}>
              {/* Timeline Line */}
              {i !== item.history.length - 1 && (
                <div
                  className={cn(
                    "absolute left-[calc(0.4rem-1px)] top-2 w-0.5 h-[calc(100%+1.7rem)] bg-text-light"
                  )}
                />
              )}

              {/* Timeline Dot */}
              <div className={cn("relative z-10 flex-shrink-0")}>
                <div
                  className={cn("w-3 h-3 mt-2 rounded-full bg-text-light")}
                />
              </div>

              {/* Content */}
              <div className={cn("pb-6 flex-1")}>
                <p className={cn(styles_Typography["paragraph-base-dark"])}>
                  {each.position}
                </p>
                <p
                  className={cn(
                    styles_Typography["paragraph-base-dark"],
                    "mt-1"
                  )}
                >
                  {each.startPeriod} - {each.endPeriod}
                </p>
                <div className={cn("space-y-4 mt-4")}>
                  {each.details.map((d, i) => (
                    <p
                      key={i}
                      className={cn(styles_Typography["paragraph-base"])}
                    >
                      {d}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "w-full md:w-1/2",
            "h-fit",
            "flex flex-col items-start md:items-end",
            'pb-6'
            // "sticky top-0"
          )}
        >
          <div className={cn("flex flex-row gap-8 md:gap-15", "w-[300px]")}>
            <div
              className={cn(
                "flex flex-col",
                styles_Typography["paragraph-base"]
              )}
            >
              <p className={cn("")}>Period</p>
              <p className={cn("mt-4")}>Location</p>
              <p className={cn("mt-4")}>Industry</p>
              <p className={cn("mt-4")}>Website</p>
            </div>

            <div
              className={cn(
                "flex flex-col",
                styles_Typography["paragraph-base-dark"]
              )}
            >
              <p className={cn("")}>
                {item.history[item.history.length - 1].startPeriod} -{" "}
                {item.history[0].endPeriod}
              </p>
              <p className={cn("mt-4")}>{item.location}</p>
              <p className={cn("mt-4")}>{item.industry}</p>
              <div className={cn("mt-4")}>
                <UnderlinedText>
                  <a href={item.website} target="_blank" rel="noreferrer">
                    {item.website.replace(/^https?:\/\//, "")}
                  </a>
                </UnderlinedText>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            {item?.moreLinks?.map((l, i) => (
              <div>
                <UnderlinedText>
                  <a
                    href={l.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles_Typography["paragraph-base-dark"]}
                  >
                    {l.title} <ArrowUpright />
                  </a>
                </UnderlinedText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceItem;
