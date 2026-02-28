"use client";

import { userData } from "@/config-and-data/user.data";
import { cn } from "@/utils/cn.util";
import { useState } from "react";
import ActionItem from "../../components/action-item.component";
import HeaderItem from "./section-components/header-item.component";
import MenuOverlay from "./section-components/menu-overlay.component";
import UnderlinedText from "@/components/underlined-text.component";
import { styles_Typography } from "@/styles/typography/typography.styles";
import ThemeSwitcher from "@/components/theme-switcher.component";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "min-h-22 w-full",
          "mt-4",
          "flex items-center justify-center",
          "px-6 md:px-0"
        )}
      >
        <div className={cn("flex flex-col xl:flex-row justify-between gap-8", "w-full")}>
          <div className={cn("flex gap-8 justify-between md:justify-evenly xl:justify-start")}>
            <ActionItem
              title="Currently based in"
              description={userData.location}
            />
            <div className={cn("hidden md:block")}>
              <ActionItem
                title="Say Hello"
                link={{ href: userData.emailTo, text: userData.email }}
              />
            </div>
            <div className={cn("hidden md:block")}>
              <ThemeSwitcher />
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
          <div className={cn("hidden md:flex gap-8 items-center flex-1")}>
            <div className={cn("flex gap-10 w-full xl:w-fit justify-start md:justify-evenly xl:justify-start ml-auto")}>
              <HeaderItem>about</HeaderItem>
              <HeaderItem>experience</HeaderItem>
              <HeaderItem>products</HeaderItem>
              <HeaderItem link={userData?.socials?.github}>projects</HeaderItem>
            </div>
          </div>
        </div>
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default HeaderSection;
