import {
  Award,
  Briefcase,
  Code,
  Home,
  type LucideIcon,
  Mail,
  Speech,
  User,
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
  { href: "#bio", label: "Bio", icon: User },
  { href: "#certifications", label: "Certifications", icon: Award },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: Code },
  { href: "#testimonials", label: "Testimonials", icon: Speech },
  { href: "#contact", label: "Contact Me", icon: Mail },
];

const NavigationPill = () => {
  return (
    <NavigationMenu className="bg-primary rounded-md p-2">
      <NavigationMenuList>
        {NAVIGATION_ITEMS.map(({ href, label, icon: Icon }) => (
          <Tooltip key={href}>
            <TooltipTrigger>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href={href} className="text-primary-foreground">
                    <Icon />
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
