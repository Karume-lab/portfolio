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
import { TECHNOLOGIES } from "@/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karume.vercel.app/"),
  title: {
    default: "Karume | Portfolio",
    template: "%s | Karume",
  },
  description:
    "Portfolio of Daniel Karume — full-stack developer, CS student, and mobile lead at Rastuc Technologies.",
  keywords: [
    "Daniel Karume",
    "Portfolio",
    "Full-stack Developer",
    "Software Engineer",
    ...TECHNOLOGIES.map(({ label }) => label),
  ],
  authors: [{ name: "Daniel Karume" }],
  creator: "Daniel Karume",
  publisher: "Daniel Karume",
  openGraph: {
    title: "Daniel Karume | Full-Stack Developer",
    description:
      "Explore my projects, experience, and skills as a passionate full-stack developer.",
    url: "https://karume.vercel.app/",
    siteName: "Daniel Karume's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Karume | Full-Stack Developer",
    description:
      "Portfolio of Daniel Karume — full-stack developer and tech enthusiast.",
    creator: "@karume_lab",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChangeMetadataTitleOnBlur />

        <div className="hidden lg:block">
          <AnimatedCursor
            color="0, 0, 0"
            innerSize={24}
            outerSize={48}
            outerScale={1.5}
            trailingSpeed={8}
          />
        </div>

        <ScrollProgress />
        <BackToTopButton />
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
