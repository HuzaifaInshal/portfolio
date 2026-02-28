import { styles_Typography } from "@/styles/typography/typography.styles";
import { cn } from "@/utils/cn.util";

interface Props {
  children: string;
  link?: string
}

const HeaderItem = ({ children, link }: Props) => {
  const href = link || `#${children.toLowerCase()}`;

  return (
    <li className="list-none">
      <a
        href={href}
        target={link ? '_blank' : undefined}
        className={cn(
          styles_Typography["paragraph-base"],
          "uppercase",
          "hover:opacity-60 transition-opacity duration-200"
        )}
      >
        {children}
      </a>
    </li>
  );
};

export default HeaderItem;
