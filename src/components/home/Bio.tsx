import SectionHeader from "@/components/core/SectionHeader";

const Bio = () => {
  return (
    <section className="bg-primary p-24 text-primary-foreground" id="bio">
      <SectionHeader title="WHO AM I?" />
      <div className="max-w-7xl mx-auto space-y-4">
        <p className="line-through text-lg">I am Batman.</p>

        <p className="leading-relaxed">
          I'm a passionate full-stack developer and Computer Science student at
          JKUAT, currently leading mobile development at Rastuc Technologies. I
          bridge technical expertise with creative problem-solving to build
          impactful digital solutions. When I'm not coding, I'm mentoring fellow
          developers or exploring new technologies that push the boundaries of
          what's possible.
        </p>
      </div>
    </section>
  );
};

export default Bio;
