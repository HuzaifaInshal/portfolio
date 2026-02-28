import { userData } from "@/config-and-data/user.data";
import { styles_SectionContainer_hero } from "@/styles/section/section.styles";
import { styles_Typography } from "@/styles/typography/typography.styles";
import { cn } from "@/utils/cn.util";
import Socials from "./section-components/socials.component";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className={cn(
        styles_SectionContainer_hero,
        "h-[calc(100dvh-104px)] md:h-[calc(100dvh-104px)]",
        "flex flex-col justify-around md:justify-evenly gap-15"
      )}
    >
      <h1 className={cn(styles_Typography.title, "flex flex-col items-center")}>
        <span className="text-left self-start md:self-center ms-0 md:-ms-[30%]">
          {userData.firstName}
        </span>
        <span className="text-right self-end md:self-center me-0 md:-me-[30%]">
          {userData.lastName}
        </span>
      </h1>
      <div className="flex flex-col gap-5">
        <h2 className={cn(styles_Typography.subTitle, "max-w-175")}>
          {userData.aboutA}
        </h2>
        <Socials />
      </div>
    </section>
  );
};

export default HeroSection;
