import {
  Code2,
  type LucideIcon,
  Network,
  Server,
  Smartphone,
} from "lucide-react";

export interface Skill {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SKILLS: Skill[] = [
  {
    title: "FRONTEND",
    description:
      "Designs responsive, accessible UIs with Next.js, Tailwind CSS, and modern component libraries — blending usability with performance.",
    icon: Code2,
  },
  {
    title: "BACKEND",
    description:
      "Builds scalable APIs and database solutions using Django, GraphQL, and Express.js — ensuring reliability and efficiency in production.",
    icon: Server,
  },
  {
    title: "MOBILE",
    description:
      "Ships cross-platform apps with React Native and Expo, delivering seamless experiences on both iOS and Android devices.",
    icon: Smartphone,
  },
  {
    title: "BLOCKCHAIN",
    description:
      "Develops and tests Solidity smart contracts with Hardhat — creating secure, transparent, and decentralized applications.",
    icon: Network,
  },
];
