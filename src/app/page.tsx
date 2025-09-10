import {
  Certifications,
  NavigationPill,
  TechnologiesMarquee,
} from "@/components";

const HomePage = () => {
  return (
    <main className="space-y-8">
      <NavigationPill />
      <Certifications />
      <TechnologiesMarquee />
    </main>
  );
};

export default HomePage;
