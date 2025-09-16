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
    <main className="flex flex-col gap-y-10" id="root">
      <div>
        <HeroSection />
        <Bio />
      </div>
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
