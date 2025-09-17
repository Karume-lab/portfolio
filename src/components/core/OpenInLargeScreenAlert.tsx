"use client";

import { Info } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const OpenInLargeScreenPopover = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsVisible("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);
    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-2 z-50 animate-in fade-in duration-300">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 p-2"
            aria-label="Info"
          >
            <Info className="w-5 h-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-xs bg-primary-foreground/10 backdrop-blur-xl border-none">
          <p className="text-sm font-medium p-2">
            I noticed you are using a small screen. It would be a shame for you
            to miss the hover effects and easter eggs,{" "}
            <span className="font-semibold">
              especially if you are a recruiter
            </span>
            ! Try opening it on a larger screen for the best experience.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default OpenInLargeScreenPopover;
