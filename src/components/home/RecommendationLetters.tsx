import SectionHeader from "@/components/core/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { recommendationLetters } from "@/data/recommendation-letters";
import Link from "next/link";

const RecommendationLetters = () => {
  return (
    <section>
      <SectionHeader
        title="WHERE ARE THE RECOMMENDATION LETTERS?"
        className="text-center"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex">
        {recommendationLetters.map((letter) => (
          <Link
            key={letter.id}
            href={letter.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge
              className="p-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              variant={"outline"}
            >
              {letter.company}
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecommendationLetters;
