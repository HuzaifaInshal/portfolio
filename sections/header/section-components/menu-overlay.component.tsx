"use client";

import { userData } from "@/config-and-data/user.data";
import ActionItem from "@/components/action-item.component";
import { styles_Typography } from "@/styles/typography/typography.styles";
import { cn } from "@/utils/cn.util";
import { useEffect } from "react";
import HeaderItem from "./header-item.component";
import UnderlinedText from "@/components/underlined-text.component";

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
          "fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transition-opacity duration-300 ease-in-out",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full p-6 pt-9">
          {/* Close Button */}
          <div className="flex justify-end mb-12">
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
          <nav className="flex flex-col gap-8 flex-1">
            <h2
              className={cn(
                styles_Typography["heading-1"],
                "uppercase tracking-wide"
              )}
            >
              About
            </h2>
            <h2
              className={cn(
                styles_Typography["heading-1"],
                "uppercase tracking-wide"
              )}
            >
              Experience
            </h2>
            <h2
              className={cn(
                styles_Typography["heading-1"],
                "uppercase tracking-wide"
              )}
            >
              Projects
            </h2>
            <h2
              className={cn(
                styles_Typography["heading-1"],
                "uppercase tracking-wide"
              )}
            >
              Contact
            </h2>
          </nav>

          {/* Footer Actions */}
          <div className="flex flex-col gap-16 pt-8 border-t border-gray-200">
            <ActionItem
              title="Say hello"
              link={{ href: userData.emailTo, text: userData.email }}
            />
            <ActionItem
              title="Switch to"
              onClick={{ click: () => {}, text: "Dark Mode" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuOverlay;
