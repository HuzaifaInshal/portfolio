"use client";

import { userData } from "@/config-and-data/user.data";
import { cn } from "@/utils/cn.util";
import { useState } from "react";
import { useTheme } from "next-themes";
import ActionItem from "../../components/action-item.component";
import HeaderItem from "./section-components/header-item.component";
import MenuOverlay from "./section-components/menu-overlay.component";
import UnderlinedText from "@/components/underlined-text.component";
import { styles_Typography } from "@/styles/typography/typography.styles";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const effectiveTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    const next = effectiveTheme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  const toggleText = effectiveTheme === "dark" ? "Light Mode" : "Dark Mode";

  return (
    <>
      <div
        className={cn(
          "h-22 w-full",
          "mt-4",
          "flex items-center justify-center",
          "px-6 md:px-0"
        )}
      >
        <div className={cn("flex justify-between gap-8", "w-full")}>
          <ActionItem
            title="Currently based in"
            description={userData.location}
          />
          <div className={cn("hidden md:flex gap-8 items-center flex-1 ml-8")}>
            <ActionItem
              title="Say Hello"
              link={{ href: userData.emailTo, text: userData.email }}
            />
            <ActionItem
              title="Switch to"
              onClick={{ click: () => toggleTheme(), text: toggleText }}
            />
            <div className={cn("flex gap-10 ml-auto")}>
              <HeaderItem>about</HeaderItem>
              <HeaderItem>experience</HeaderItem>
              <HeaderItem>projects</HeaderItem>
              <HeaderItem>contact</HeaderItem>
            </div>
          </div>
          <UnderlinedText className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className={cn(
                styles_Typography["paragraph-base-dark"],
                "uppercase"
              )}
              aria-label="Open menu"
            >
              Menu
            </button>
          </UnderlinedText>
        </div>
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default HeaderSection;
