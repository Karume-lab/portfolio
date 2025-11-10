import Link from "next/link";
import { ViewResumeButton } from "@/components";
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
    <NavigationMenu
      className={
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-primary rounded-md p-2 shadow-lg transition-opacity duration-300"
      }
    >
      <NavigationMenuList>
        {NAVIGATION_ITEMS.map(({ href, label, icon: Icon }) => (
          <Tooltip key={href}>
            <TooltipTrigger>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className={
                      "flex items-center gap-2 text-primary-foreground transition-colors"
                    }
                  >
                    <Icon className="size-5" />
                    <TooltipContent side="bottom">
                      <h2>{label}</h2>
                    </TooltipContent>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </TooltipTrigger>
          </Tooltip>
        ))}

        <div className="h-8 rounded-full w-0.5 bg-primary-foreground" />
        <ViewResumeButton />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationPill;
