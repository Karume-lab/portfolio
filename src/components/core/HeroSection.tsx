import { ChevronDown } from "lucide-react";
import Image from "next/image";
import NavigationPill from "@/components/core/NavigationPill";
import SectionHeader from "@/components/core/SectionHeader";
import ViewResumeButton from "@/components/core/ViewResumeButton";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <header className="relative w-full h-screen">
      <NavigationPill />
      <Image
        alt="A photo of Daniel Karume"
        src="/core/me.png"
        fill
        className="object-cover object-top grayscale-25"
        priority
      />

      <Card className="absolute top-1/4 left-12 w-96 bg-primary-foreground/10 border-none backdrop-blur-2xl">
        <CardContent>
          <SectionHeader title="FRONTEND" className="text-center" />
          <p className="text-sm font-semibold">
            Crafts clean, interactive interfaces where design meets
            functionality on the user's screen.
          </p>
        </CardContent>
      </Card>

      <Card className="absolute top-1/4 right-12 w-96 bg-primary-foreground/10 border-none backdrop-blur-2xl">
        <CardContent>
          <SectionHeader title="BACKEND" className="text-center" />
          <p className="text-sm font-semibold">
            Engineer architecting robust APIs, databases, and logic that power
            real-world applications.
          </p>
        </CardContent>
      </Card>

      <Card className="absolute bottom-1/4 left-12 w-96 bg-primary-foreground/10 border-none backdrop-blur-2xl">
        <CardContent>
          <SectionHeader title="MOBILE" className="text-center" />
          <p className="text-sm font-semibold">
            Developer creating fluid, intuitive app experiences for users on the
            go — iOS & Android.
          </p>
        </CardContent>
      </Card>

      <Card className="absolute bottom-1/4 right-12 w-96 bg-primary-foreground/10 border-none backdrop-blur-2xl">
        <CardContent>
          <SectionHeader title="BLOCKCHAIN" className="text-center" />
          <p className="text-sm font-semibold">
            Builder of decentralized systems that are transparent, secure, and
            trustless by design.
          </p>
        </CardContent>
      </Card>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <ChevronDown className="size-24 animate-bounce text-primary-foreground" />
      </div>

      <div className="absolute top-6 right-6 z-50">
        <ViewResumeButton />
      </div>
    </header>
  );
};

export default HeroSection;
