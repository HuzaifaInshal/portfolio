import React from "react";

type UnderlinedTextProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function UnderlinedText({
  children,
  className = ""
}: UnderlinedTextProps) {
  return (
    <p className={`relative inline-block group ${className}`}>
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 w-full h-px bg-text-light opacity-30" />
        <span className="absolute -bottom-1 left-0 w-full md:w-0 h-px bg-text transition-all duration-300 ease-out hover:w-full group-hover:w-full" />
      </span>
    </p>
  );
}
