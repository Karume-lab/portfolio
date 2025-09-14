import {
  Bio,
  Certifications,
  ContactMe,
  ExperienceTimeline,
  Footer,
  NavigationPill,
  Projects,
  TechnologiesMarquee,
} from "@/components";

const HomePage = () => {
  return (
    <main className="space-y-8" id="root">
      <NavigationPill />
      <Bio />
      <TechnologiesMarquee />
      <Certifications />
      <ExperienceTimeline />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
};

export default HomePage;
