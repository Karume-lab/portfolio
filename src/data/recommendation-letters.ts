export interface RecommendationLetter {
  id: string;
  company: string;
  href: string;
}

export const recommendationLetters: RecommendationLetter[] = [
  {
    id: crypto.randomUUID(),
    company: "Rastuc Technologies Limited",
    href: "/core/daniel-karume-recommendation-letter-rastuc-technologies.pdf",
  },
];
