import {
  Award,
  Briefcase,
  Code,
  Home,
  type LucideIcon,
  Mail,
  User,
} from "lucide-react";
import type { Route } from "next";

export interface NavigationItem {
  href: Route;
  label: string;
  icon: LucideIcon;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#bio", label: "Bio", icon: User },
  { href: "/#certifications", label: "Certifications", icon: Award },
  { href: "/#experience", label: "Experience", icon: Briefcase },
  { href: "/#projects", label: "Projects", icon: Code },
  { href: "/#reach-out", label: "Reach Out", icon: Mail },
];
