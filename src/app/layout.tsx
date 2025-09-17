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
    default: "Daniel Karume | Full-Stack Developer & CS Student",
    template: "%s | Daniel Karume",
  },
  description:
    "Portfolio of Daniel Karume — full-stack developer, CS student, and mobile developer. Specializing in React, Next.js, and mobile development.",
  keywords: [
    "Daniel Karume",
    "Portfolio",
    "Full-stack Developer",
    "Software Engineer",
    "Computer Science Student",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "Rastuc Technologies",
    "Kenya Developer",
    ...TECHNOLOGIES.map(({ label }) => label),
  ],
  authors: [{ name: "Daniel Karume", url: "https://karume.vercel.app" }],
  creator: "Daniel Karume",
  publisher: "Daniel Karume",

  openGraph: {
    title: "Daniel Karume | Full-Stack Developer & CS Student",
    description:
      "Explore my projects, experience, and skills as a passionate full-stack developer and mobile developer.",
    url: "https://karume.vercel.app/",
    siteName: "Daniel Karume's Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Daniel Karume - Full-Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Daniel Karume | Full-Stack Developer",
    description:
      "Portfolio of Daniel Karume — full-stack and developer, CS student.",
    creator: "@karume_lab",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://karume.vercel.app/",
  },

  // // Add verification (you'll get these from Google Search Console)
  // verification: {
  //   google: "your-google-verification-code", // Replace with actual code
  //   // yandex: "your-yandex-code", // If you want Yandex indexing
  // },

  category: "technology",
};

const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Karume",
    description: "Full-stack and developer, CS student",
    url: "https://karume.vercel.app",
    image: "https://karume.vercel.app/core/me.png",
    sameAs: [
      "https://github.com/Karume-lab",
      "https://linkedin.com/in/daniel-karume",
      "https://twitter.com/karume_lab",
    ],
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Rastuc Technologies",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Jomo Kenya University (JKUAT)",
    },
    knowsAbout: TECHNOLOGIES.map(({ label }) => label),
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Developer",
      occupationLocation: {
        "@type": "City",
        name: "Nairobi, Kenya",
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Daniel Karume Portfolio",
    alternateName: "Daniel Karume",
    url: "https://karume.vercel.app",
    description:
      "Portfolio website showcasing full-stack development projects and skills",
    author: {
      "@type": "Person",
      name: "Daniel Karume",
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
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
