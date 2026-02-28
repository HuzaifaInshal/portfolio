"use client";

import { userData } from "@/config-and-data/user.data";
import ActionItem from "@/components/action-item.component";
import { styles_Typography } from "@/styles/typography/typography.styles";
import { cn } from "@/utils/cn.util";
import HeaderItem from "./header-item.component";
import UnderlinedText from "@/components/underlined-text.component";
import ThemeSwitcher from "@/components/theme-switcher.component";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay = ({ isOpen, onClose }: Props) => {
  //   useEffect(() => {
  //     if (isOpen) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "auto";
  //     }
  //     return () => {
  //       document.body.style.overflow = "auto";
  //     };
  //   }, [isOpen]);

  return (
    <>
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )} */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 transition-opacity duration-300 ease-in-out",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col justify-between h-full p-6 pt-9">
          {/* Close Button */}
          <div className="flex justify-end">
            <UnderlinedText>
              <button
                onClick={onClose}
                className={cn(
                  styles_Typography["paragraph-base-dark"],
                  "uppercase"
                )}
              >
                Close
              </button>
            </UnderlinedText>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-2 py-4">
            {(["About", "Experience", "Products", "Contact"] as const).map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={onClose}
                className={cn(
                  styles_Typography["heading-1"],
                  "uppercase tracking-wide",
                  "hover:opacity-60 transition-opacity duration-200"
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Footer Actions */}
          <div className="flex flex-col gap-5 py-4 border-t border-gray-200">
            <ActionItem
              title="Say hello"
              link={{ href: userData.emailTo, text: userData.email }}
            />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuOverlay;
