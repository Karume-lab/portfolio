import {
  Bio,
  Certifications,
  ExperienceTimeline,
  HeroSection,
  Projects,
  ReachOut,
  TechnologiesMarquee,
} from "@/components";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-y-10" id="root">
      <div>
        <HeroSection />
        <Bio />
      </div>
      <TechnologiesMarquee />
      <Certifications />
      <ExperienceTimeline />
      <Projects />
      <ReachOut />
    </main>
  );
};

export default HomePage;
