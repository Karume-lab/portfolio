import {
  AboutMe,
  Certifications,
  ContactMe,
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
      <ContactMe />
    </main>
  );
};

export default HomePage;
