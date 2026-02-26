import UnderlinedText from "@/components/underlined-text.component";
import { styles_Typography } from "@/styles/typography/typography.styles";
import { cn } from "@/utils/cn.util";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { Fragment } from "react/jsx-runtime";
import ArrowUpright from "./arrow-upright.component";

interface Props {
  title: string;
  description?: string;
  link?: {
    text: string;
    href: string;
  };
  onClick?: {
    text: string;
    click: MouseEventHandler<HTMLButtonElement>;
  };
  containerClassName?: string;
}

const containerClass = cn(
  styles_Typography["paragraph-base-dark"],
  "flex flex-col",
  "text-left"
);

const ActionItem = ({
  title,
  description,
  link,
  onClick,
  containerClassName
}: Props) => {
  const InnerContent = () => (
    <Fragment>
      <p>{title}</p>
      {description && <p>{description}</p>}
      {link && (
        <UnderlinedText>
          {link.text} <ArrowUpright />
        </UnderlinedText>
      )}
      {onClick && <UnderlinedText>{onClick.text}</UnderlinedText>}
    </Fragment>
  );

  if (link) {
    return (
      <Link
        href={link.href}
        target="_blank"
        className={cn(containerClass, "cursor-pointer", containerClassName)}
      >
        {InnerContent()}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick.click}
        className={cn(containerClass, "cursor-pointer", containerClassName)}
      >
        {InnerContent()}
      </button>
    );
  }

  return (
    <div className={cn(containerClass, containerClassName)}>
      {InnerContent()}
    </div>
  );
};

export default ActionItem;
