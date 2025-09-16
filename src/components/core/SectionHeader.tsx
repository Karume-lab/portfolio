"use client";

import { useScrambleText } from "@/hooks/scramble-text";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className }) => {
  const { ref, displayText } = useScrambleText<HTMLHeadingElement>(title);

  return (
    <h2
      ref={ref}
      className={`font-bold text-xs tracking-widest my-4 ${className}`}
    >
      {displayText}
    </h2>
  );
};

export default SectionHeader;
