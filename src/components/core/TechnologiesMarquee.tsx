"use client";

import Autoscroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TECHNOLOGIES: { icon: string; href: string; label: string }[] = [
  {
    href: "https://www.atlassian.com/software/jira",
    icon: "/technologies/jira.png",
    label: "Jira",
  },
  {
    href: "https://www.kernel.org/",
    icon: "/technologies/linux.png",
    label: "Linux",
  },
  {
    href: "https://developer.mozilla.org/docs/Web/HTML",
    icon: "/technologies/html.png",
    label: "HTML",
  },
  {
    href: "https://trello.com/",
    icon: "/technologies/trello.png",
    label: "Trello",
  },
  {
    href: "https://github.com/",
    icon: "/technologies/github.png",
    label: "GitHub",
  },
  {
    href: "https://git-scm.com/",
    icon: "/technologies/git.png",
    label: "Git",
  },
  {
    href: "https://github.com/features/actions",
    icon: "/technologies/github-actions.png",
    label: "GitHub Actions",
  },
  {
    href: "https://www.gnu.org/software/bash/",
    icon: "/technologies/bash.png",
    label: "Bash Scripting",
  },
  {
    href: "https://www.python.org/",
    icon: "/technologies/python.png",
    label: "Python",
  },
  {
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
    icon: "/technologies/javascript.png",
    label: "JavaScript",
  },
  {
    href: "https://www.typescriptlang.org/",
    icon: "/technologies/typescript.png",
    label: "TypeScript",
  },
  {
    href: "https://biomejs.dev/",
    icon: "/technologies/biome.png",
    label: "Biome",
  },
  {
    href: "https://eslint.org/",
    icon: "/technologies/eslint.png",
    label: "ESLint",
  },
  {
    href: "https://prettier.io/",
    icon: "/technologies/prettier.png",
    label: "Prettier",
  },
  {
    href: "https://bun.sh/",
    icon: "/technologies/bun.png",
    label: "Bun",
  },
  {
    href: "https://nodejs.org/",
    icon: "/technologies/node.png",
    label: "Node JS",
  },
  {
    href: "https://www.npmjs.com/",
    icon: "/technologies/npm.png",
    label: "npm",
  },
  {
    href: "https://www.docker.com/",
    icon: "/technologies/docker.png",
    label: "Docker",
  },
  {
    href: "https://react.dev/",
    icon: "/technologies/react.png",
    label: "React JS",
  },
  {
    href: "https://nextjs.org/",
    icon: "/technologies/next.png",
    label: "Next JS",
  },
  {
    href: "https://tailwindcss.com/",
    icon: "/technologies/tailwind.png",
    label: "Tailwind CSS",
  },
  {
    href: "https://developer.mozilla.org/docs/Web/CSS",
    icon: "/technologies/css.png",
    label: "CSS",
  },
  {
    href: "https://www.djangoproject.com/",
    icon: "/technologies/django.png",
    label: "Django",
  },
  {
    href: "https://zustand-demo.pmnd.rs/",
    icon: "/technologies/zustand.png",
    label: "Zustand",
  },
  {
    href: "https://zod.dev/",
    icon: "/technologies/zod.png",
    label: "Zod",
  },
  {
    href: "https://expressjs.com/",
    icon: "/technologies/express.png",
    label: "Express JS",
  },
  {
    href: "https://nginx.org/",
    icon: "/technologies/nginx.png",
    label: "Nginx",
  },
  {
    href: "https://mantine.dev/",
    icon: "/technologies/mantine.png",
    label: "Mantine UI",
  },
  {
    href: "https://ui.shadcn.com/",
    icon: "/technologies/shadcn.png",
    label: "Shadcn UIi",
  },
  {
    href: "https://expo.dev/",
    icon: "/technologies/expo.png",
    label: "Expo",
  },
  {
    href: "https://reactnativereusables.com/",
    icon: "/technologies/react-native-reusables.png",
    label: "React Native Reusables",
  },
  {
    href: "https://ui.ahmedbna.com/",
    icon: "/technologies/bna-ui.png",
    label: "BNA UI",
  },
];

const TechnologiesMarquee = () => {
  const plugin = useRef(
    Autoscroll({
      speed: 2,
    })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="rotate-1 bg-primary-foreground py-4 px-2 mr-2 overflow-hidden select-none"
      opts={{
        loop: true,
        align: "start",
        dragFree: true,
      }}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {TECHNOLOGIES.map(({ href, icon, label }) => (
          <CarouselItem
            key={href}
            className="basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/12 flex items-center justify-center"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Image
                    width={44}
                    height={44}
                    alt={`${label} logo`}
                    src={icon}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300 rounded-md"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TechnologiesMarquee;
