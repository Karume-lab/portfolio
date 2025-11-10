import "@/styles";

import { Geist, Geist_Mono } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import {
  BackToTopButton,
  BlogsProvider,
  ChangeMetadataTitleOnBlur,
  Footer,
  NavigationPill,
  ScrollProgress,
} from "@/components";
import OpenInLargeScreenPopover from "@/components/core/OpenInLargeScreenPopover";
import SEOConfig, { metadataConfig } from "@/components/core/SEOConfig";
import { Toaster } from "@/components/ui/sonner";
import { getBlogs } from "@/lib/blogs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = metadataConfig;

interface RootLayoutProps extends Readonly<{ children: React.ReactNode }> {}

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  return (
    <html lang="en">
      <head>
        <SEOConfig />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        id="root"
      >
        <BlogsProvider blogs={await getBlogs()}>
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

          <main className="flex-1">{children}</main>

          <Footer />
        </BlogsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
