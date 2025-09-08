import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/global.css";
import { ChangeMetadataTitleOnBlur } from "@/components";

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
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
