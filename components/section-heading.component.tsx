import { styles_Typography } from "@/styles/typography/typography.styles";
import { cn } from "@/utils/cn.util";
import React from "react";
import Divider from "./divider.componet";

interface Props {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: Props) => {
  return (
    <div className="pb-10">
      <h1 className={cn(styles_Typography["heading-1"])}>{children}</h1>
      <Divider />
    </div>
  );
};

export default SectionHeading;
