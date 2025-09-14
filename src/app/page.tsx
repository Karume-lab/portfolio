import {
  AboutMe,
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
    <main className="space-y-8">
      <NavigationPill />
      <AboutMe />
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
