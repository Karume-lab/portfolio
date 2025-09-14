import DownloadResumeButton from "@/components/core/DownloadResumeButton";
import NavigationPill from "@/components/core/NavigationPill";

const HeroSection = () => {
  return (
    <header className="mb-12 mt-4">
      <NavigationPill />
      <div className="border border-primary p-32"></div>
      <div className="float-end">
        <DownloadResumeButton />
      </div>
    </header>
  );
};

export default HeroSection;
