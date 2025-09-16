import SectionHeader from "@/components/core/SectionHeader";

const Bio = () => {
  return (
    <section className="bg-primary text-primary-foreground p-24" id="bio">
      <SectionHeader title="WHO AM I?" />
      <div className="mx-auto max-w-7xl space-y-4">
        <p className="text-lg line-through">I'm Batman.</p>

        <p className="leading-relaxed">
          Hi, I'm <span className="font-semibold">Daniel Karume</span> — a
          passionate full-stack developer and Computer Science student at JKUAT.
          I combine technical expertise with creative problem-solving to build
          impactful digital solutions. Beyond coding, I enjoy mentoring fellow
          developers and experimenting with new technologies that push the
          boundaries of what’s possible.
        </p>
      </div>
    </section>
  );
};

export default Bio;
