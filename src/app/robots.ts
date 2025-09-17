import type { MetadataRoute } from "next";

const generateRobots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://karume.vercel.app/sitemap.xml",
  };
};

export default generateRobots;
