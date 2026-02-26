"use client";
import { ThemeProvider } from "next-themes";
import LenisProvider from "./lenis.provider";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Toaster />
      <LenisProvider />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
