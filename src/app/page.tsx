import {
  AboutMe,
  Certifications,
  ExperienceTimeline,
  NavigationPill,
  Projects,
  TechnologiesMarquee,
} from "@/components";

const HomePage = () => {
  return (
    <main className="space-y-8">
      <NavigationPill />
      <AboutMe />
      <TechnologiesMarquee />
      <Certifications />
      <ExperienceTimeline />
      <Projects />
    </main>
  );
};

export default HomePage;
