import {
  Bio,
  Certifications,
  ExperienceTimeline,
  HeroSection,
  Inspos,
  Projects,
  ReachOut,
  RecommendationLetters,
  TechnologiesMarquee,
} from "@/components";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div>
        <HeroSection />
        <Bio />
      </div>
      <TechnologiesMarquee />
      <Certifications />
      <ExperienceTimeline />
      <RecommendationLetters />
      <Projects />
      <Inspos />
      <ReachOut />
    </div>
  );
};

export default HomePage;
