import {
  Award,
  BookOpenText,
  Briefcase,
  Code,
  Home,
  type LucideIcon,
  Mail,
} from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NAVIGATION_ITEMS: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "#education", label: "Education", icon: BookOpenText },
  { href: "#certifications", label: "Certifications", icon: Award },
  { href: "#projects", label: "Projects", icon: Code },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#contact", label: "Contact Me", icon: Mail },
];

const NavigationPill = () => {
  return (
    <NavigationMenu className="bg-primary/20 rounded-md p-2">
      <NavigationMenuList>
        {NAVIGATION_ITEMS.map(({ href, label, icon: Icon }) => (
          <Tooltip key={href}>
            <TooltipTrigger>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href={href}>
                    <Icon className="text-black" />
                    <TooltipContent>
                      <h2>{label}</h2>
                    </TooltipContent>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </TooltipTrigger>
          </Tooltip>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationPill;
