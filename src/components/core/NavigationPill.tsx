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
import { NAVIGATION_ITEMS } from "@/data";

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
