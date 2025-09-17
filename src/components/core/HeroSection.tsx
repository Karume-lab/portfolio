"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavigationPill from "@/components/core/NavigationPill";
import SectionHeader from "@/components/core/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SKILLS, type Skill } from "@/data";

interface FloatingIcon extends Skill {
  id: number;
  top: number;
  left: number;
  duration: number;
  xRange: number;
  yRange: number;
}

const HeroSection = () => {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const generated = SKILLS.map((skill, i) => ({
      ...skill,
      id: i,
      top: Math.random() * 90,
      left: Math.random() * 90,
      duration: 15 + Math.random() * 10,
      xRange: Math.random() * 40 - 20,
      yRange: Math.random() * 25 - 12,
    }));

    for (let i = generated.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [generated[i], generated[j]] = [generated[j], generated[i]];
    }

    setFloatingIcons(generated);
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden">
      <NavigationPill />

      <Image
        alt="A photo of Daniel Karume"
        src="/core/me.png"
        fill
        className="object-cover object-top grayscale-75"
        priority
      />

      {floatingIcons.map(
        ({
          id,
          title,
          description,
          icon: Icon,
          top,
          left,
          duration,
          xRange,
          yRange,
        }) => (
          <motion.div
            key={id}
            className="absolute"
            style={{ top: `${top}%`, left: `${left}%` }}
            animate={{
              x: [0, xRange, -xRange, 0],
              y: [0, yRange, -yRange, 0],
            }}
            transition={{
              duration: activeId === id ? duration * 3 : duration,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Popover onOpenChange={(open) => setActiveId(open ? id : null)}>
              <PopoverTrigger asChild>
                <Button
                  variant="default"
                  size="icon"
                  className="rounded-full w-14 h-14 shadow-lg bg-primary/80 hover:bg-primary"
                >
                  <Icon className="size-6 text-primary-foreground" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-sm bg-primary-foreground/10 backdrop-blur-xl border-none">
                <SectionHeader title={title} className="text-center" />
                <p className="text-sm font-semibold">{description}</p>
              </PopoverContent>
            </Popover>
          </motion.div>
        )
      )}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <ChevronDown className="size-16 md:size-20 lg:size-24 animate-bounce text-primary-foreground" />
      </div>
    </header>
  );
};

export default HeroSection;
