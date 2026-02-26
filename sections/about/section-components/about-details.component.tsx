import { styles_Typography } from "@/styles/typography/typography.styles";
import { cn } from "@/utils/cn.util";
import React from "react";

interface Props {
  items: string[];
}

const AboutDetails = ({ items }: Props) => {
  return (
    <div className={cn(styles_Typography["paragraph-base"], "space-y-6")}>
      {items.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
    </div>
  );
};

export default AboutDetails;
