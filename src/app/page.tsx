import {
  AboutMe,
  Certifications,
  NavigationPill,
  TechnologiesMarquee,
} from "@/components";

const HomePage = () => {
  return (
    <main className="space-y-8">
      <NavigationPill />
      <AboutMe />
      <TechnologiesMarquee />
      <Certifications />
    </main>
  );
};

export default HomePage;
