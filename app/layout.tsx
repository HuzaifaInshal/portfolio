import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/providers";

export const metadata: Metadata = {
  title: "Huzaifa Inshal - Portfolio",
  description: "",
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
