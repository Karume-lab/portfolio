import "@/styles";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import {
  BackToTopButton,
  ChangeMetadataTitleOnBlur,
  ScrollProgress,
} from "@/components";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karume",
  description: "My awesome porfolio",
};

interface RootLayoutProps
  extends Readonly<{
    children: React.ReactNode;
  }> {}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChangeMetadataTitleOnBlur />
        <AnimatedCursor
          color="122, 55, 131"
          innerSize={24}
          outerSize={48}
          outerScale={1.5}
          trailingSpeed={8}
        />
        <ScrollProgress />
        <BackToTopButton />
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
