import SectionHeading from "@/components/section-heading.component";
import { styles_SectionContainer } from "@/styles/section/section.styles";
import { cn } from "@/utils/cn.util";
import Collaborate from "./section-components/collaborate.component";
import Divider from "@/components/divider.componet";

const FooterSection = () => {
  return (
    <>
      <section id="contact" className={cn(styles_SectionContainer, "pb-12")}>
        <div className={cn("container mx-auto")}>
          <Divider />
          <div className={cn("mt-8")}>
            <Collaborate />
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
