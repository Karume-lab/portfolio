import { ExternalLink } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/core/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { recommendationLetters } from "@/data/recommendation-letters";

const RecommendationLetters = () => {
  return (
    <section
      id="recommendations"
      className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12"
    >
      <SectionHeader title="WHERE ARE THE RECOMMENDATION LETTERS?" />

      <div className="flex flex-wrap justify-start gap-4 mt-6">
        {recommendationLetters.map((letter) => (
          <Link
            key={letter.id}
            href={letter.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge
              className="p-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center gap-2"
              variant={"outline"}
            >
              {letter.company}
              <ExternalLink className="size-4" />
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecommendationLetters;
