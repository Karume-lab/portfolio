import { TECHNOLOGIES } from "@/data";
import "@/styles";
import type { Metadata } from "next";

export const metadataConfig: Metadata = {
  metadataBase: new URL("https://karume.vercel.app/"),
  title: {
    default: "Daniel Karume | Portfolio",
    template: "%s | Daniel Karume",
  },
  description:
    "Portfolio of Daniel Karume — full-stack developer, CS student, and mobile developer. Specializing in React.js, Next.js, and React Native.",
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

  category: "technology",
};

const SEOConfig = () => {
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
        // biome-ignore lint/security/noDangerouslySetInnerHtml: maybe because there is no other way?
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: maybe because there is no other way?
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default SEOConfig;
