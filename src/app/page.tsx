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
    <main className="flex flex-col gap-y-5" id="root">
      <HeroSection />
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
