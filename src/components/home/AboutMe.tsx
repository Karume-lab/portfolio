import SectionHeader from "@/components/core/SectionHeader";

const AboutMe = () => {
  return (
    <section className="bg-primary p-28">
      <div className="max-w-7xl mx-auto text-white">
        <SectionHeader title="WHO AM I?" />
        <p className="leading-relaxed ">
          I'm a passionate full-stack developer and computer science student at
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

export default AboutMe;
