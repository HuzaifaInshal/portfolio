import React from "react";
import { cn } from "@/utils/cn.util";
import { styles_Typography } from "@/styles/typography/typography.styles";
import { EducationItem as EducationItemType } from "@/types/education.type";
import Image from "next/image";

interface Props {
  item: EducationItemType;
}

const EducationItem = ({ item }: Props) => {
  return (
    <article className={cn("flex flex-col gap-6")}>
      <div className="flex flex-row items-center gap-5">
        <Image
          src={item.image}
          alt={item.institution}
          height={50}
          width={50}
          className="rounded-full aspect-square shrink-0 object-cover bg-white"
        />
        <h3 className={cn("w-full", styles_Typography["heading-2"])}>
          {item.institution}
        </h3>
      </div>

      <div className="flex w-full flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className={cn("relative flex gap-6")}>
            {/* Content */}
            <div className={cn("pb-6 flex-1")}>
              <p className={cn(styles_Typography["paragraph-base-dark"])}>
                {item.degree}
              </p>
              <p
                className={cn(
                  styles_Typography["paragraph-base-dark"],
                  "mt-2 text-sm opacity-60"
                )}
              >
                {item.duration}
              </p>
              {item.details && (
                <div
                  className={cn(
                    "space-y-4 mt-4",
                    styles_Typography["paragraph-base"]
                  )}
                >
                  {item.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              )}
              {item.finalYearProject && (
                <div className={cn("mt-6")}>
                  <p
                    className={cn(
                      styles_Typography["paragraph-base-dark"],
                      "font-semibold"
                    )}
                  >
                    Final Year Project
                  </p>
                  <p
                    className={cn(styles_Typography["paragraph-base"], "mt-2")}
                  >
                    {item.finalYearProject}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-end relative">
          <div className={cn("w-full md:w-1/2", "grid grid-cols-3", "h-fit")}>
            <div
              className={cn("col-span-1", styles_Typography["paragraph-base"])}
            >
              <p>Duration</p>
              {item.CGPA && <p className={cn("mt-4")}>CGPA</p>}
              {item.result && <p className={cn("mt-4")}>Result</p>}
            </div>

            <div
              className={cn(
                "col-span-2",
                styles_Typography["paragraph-base-dark"]
              )}
            >
              <p>{item.duration}</p>
              {item.CGPA && <p className={cn("mt-4")}>{item.CGPA}</p>}
              {item.result && <p className={cn("mt-4")}>{item.result}</p>}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EducationItem;
