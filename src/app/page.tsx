import {
  Bio,
  Certifications,
  ContactMe,
  ExperienceTimeline,
  Footer,
  HeroSection,
  Projects,
  TechnologiesMarquee,
} from "@/components";

const HomePage = () => {
  return (
    <main className="space-y-8" id="root">
      {/* <HeroSection /> */}
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
