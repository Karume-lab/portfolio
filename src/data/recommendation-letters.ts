import type { Route } from "next";

export interface RecommendationLetter {
  id: string;
  company: string;
  href: Route;
}

export const recommendationLetters: RecommendationLetter[] = [
  {
    id: crypto.randomUUID(),
    company: "Rastuc Technologies Limited",
    href: "/core/daniel-karume-recommendation-letter-rastuc-technologies.pdf" as Route,
  },
];
