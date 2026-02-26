import { styles_Typography } from "@/styles/typography/typography.styles";
import { InternshipExperience } from "@/types/experience.type";
import { cn } from "@/utils/cn.util";
import Image from "next/image";

interface Props {
  item: InternshipExperience;
}

const InternshipItem = ({ item }: Props) => {
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
      <div className="flex w-full flex-col-reverse gap-5">
        <div className="flex flex-col gap-5">
          <div className={cn("relative flex gap-6")}>
            {/* Content */}
            <div className={cn("pb-6 flex-1")}>
              <div className={cn("space-y-4")}>
                <p className={cn(styles_Typography["paragraph-base"])}>
                  {item.details}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex"
            // "sticky top-0"
          )}
        >
          <div className={cn("flex flex-row gap-8 md:gap-16", "flex-wrap")}>
            <div className={cn("flex gap-4")}>
              <p className={cn(styles_Typography["paragraph-base"])}>Role</p>
              <p className={cn(styles_Typography["paragraph-base-dark"])}>
                {item.role}
              </p>
            </div>

            <div className={cn("flex gap-4")}>
              <p className={cn(styles_Typography["paragraph-base"])}>Period</p>
              <p className={cn(styles_Typography["paragraph-base-dark"])}>
                {item.period}
              </p>
            </div>

            <div className={cn("flex gap-4")}>
              <p className={cn(styles_Typography["paragraph-base"])}>
                Location
              </p>
              <p className={cn(styles_Typography["paragraph-base-dark"])}>
                {item.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default InternshipItem;
