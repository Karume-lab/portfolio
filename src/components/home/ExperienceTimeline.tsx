import SectionHeader from "@/components/core/SectionHeader";
import { TimelineLayout } from "@/components/ui/timeline";
import { experiences } from "@/data/experiences";

const ExperienceTimeline = () => {
  return (
    <section className="max-w-7xl mx-auto" id="experience">
      <SectionHeader title="MORE PROOF?" className="text-center" />
      <TimelineLayout items={experiences} size="lg" animate className="p-0" />
    </section>
  );
};

export default ExperienceTimeline;
