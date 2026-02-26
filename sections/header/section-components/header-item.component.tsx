import { styles_Typography } from "@/styles/typography/typography.styles";
import { cn } from "@/utils/cn.util";

interface Props {
  children: string;
}

const HeaderItem = ({ children }: Props) => {
  return (
    <li
      className={cn(
        styles_Typography["paragraph-base"],
        "uppercase",
        "list-none"
      )}
    >
      {children}
    </li>
  );
};

export default HeaderItem;
