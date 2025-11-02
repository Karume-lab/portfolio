import "@/styles";

import { Geist, Geist_Mono } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import {
  BackToTopButton,
  ChangeMetadataTitleOnBlur,
  Footer,
  NavigationPill,
  ScrollProgress,
} from "@/components";
import OpenInLargeScreenPopover from "@/components/core/OpenInLargeScreenPopover";
import SEOConfig, { metadataConfig } from "@/components/core/SEOConfig";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = metadataConfig;

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <SEOConfig />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        id="root"
      >
        <NavigationPill />
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
        <OpenInLargeScreenPopover />
        <Toaster richColors />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
