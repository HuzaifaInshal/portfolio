import ActionItem from "@/components/action-item.component";
import SectionHeading from "@/components/section-heading.component";
import { userData } from "@/config-and-data/user.data";
import AboutDetails from "./section-components/about-details.component";
import { styles_SectionContainer } from "@/styles/section/section.styles";
import { cn } from "@/utils/cn.util";
import { styles_Typography } from "@/styles/typography/typography.styles";

const AboutSection = () => {
  return (
    <section id="about" className={styles_SectionContainer}>
      <div className="container mx-auto">
        <SectionHeading>ABOUT</SectionHeading>
        <div className="mt-8 grid lg:grid-rows-2 grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 lg:row-span-1 flex flex-col gap-2 justify-between h-full">
            <p className={cn(styles_Typography["paragraph-thick"])}>
              {userData.aboutB}
            </p>
          </div>
          <div className="lg:col-span-5 lg:row-span-2">
            <AboutDetails items={userData.aboutC} />
          </div>
          <div className="lg:col-span-7 lg:row-span-1 grid grid-cols-1 lg:grid-cols-3 gap-6 h-full items-end">
            <ActionItem
              title="Product Development"
              description="UX/UI & Design"
            />
            <ActionItem
              title="Say hello"
              link={{
                href: userData.emailTo,
                text: userData.email
              }}
            />
            <ActionItem
              title="Explore LinkedIn"
              link={{
                href: userData.socials.linkedIn,
                text: "Visit here"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
