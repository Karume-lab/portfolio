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

const TECHNOLOGIES: { logoPath: string; href: string; label: string }[] = [
  {
    href: "https://www.atlassian.com/software/jira",
    logoPath: "/technologies/jira.png",
    label: "Jira",
  },
  {
    href: "https://www.kernel.org/",
    logoPath: "/technologies/linux.png",
    label: "Linux",
  },
  {
    href: "https://developer.mozilla.org/docs/Web/HTML",
    logoPath: "/technologies/html.png",
    label: "HTML",
  },
  {
    href: "https://trello.com/",
    logoPath: "/technologies/trello.png",
    label: "Trello",
  },
  {
    href: "https://github.com/",
    logoPath: "/technologies/github.png",
    label: "GitHub",
  },
  {
    href: "https://git-scm.com/",
    logoPath: "/technologies/git.png",
    label: "Git",
  },
  {
    href: "https://github.com/features/actions",
    logoPath: "/technologies/github-actions.png",
    label: "GitHub Actions",
  },
  {
    href: "https://www.gnu.org/software/bash/",
    logoPath: "/technologies/bash.png",
    label: "Bash Scripting",
  },
  {
    href: "https://www.python.org/",
    logoPath: "/technologies/python.png",
    label: "Python",
  },
  {
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
    logoPath: "/technologies/javascript.png",
    label: "JavaScript",
  },
  {
    href: "https://www.typescriptlang.org/",
    logoPath: "/technologies/typescript.png",
    label: "TypeScript",
  },
  {
    href: "https://biomejs.dev/",
    logoPath: "/technologies/biome.png",
    label: "Biome",
  },
  {
    href: "https://eslint.org/",
    logoPath: "/technologies/eslint.png",
    label: "ESLint",
  },
  {
    href: "https://prettier.io/",
    logoPath: "/technologies/prettier.png",
    label: "Prettier",
  },
  {
    href: "https://bun.sh/",
    logoPath: "/technologies/bun.png",
    label: "Bun",
  },
  {
    href: "https://nodejs.org/",
    logoPath: "/technologies/node.png",
    label: "Node.js",
  },
  {
    href: "https://www.npmjs.com/",
    logoPath: "/technologies/npm.png",
    label: "npm",
  },
  {
    href: "https://www.docker.com/",
    logoPath: "/technologies/docker.png",
    label: "Docker",
  },
  {
    href: "https://react.dev/",
    logoPath: "/technologies/react.png",
    label: "React.js",
  },
  {
    href: "https://nextjs.org/",
    logoPath: "/technologies/next.png",
    label: "Next.js",
  },
  {
    href: "https://tailwindcss.com/",
    logoPath: "/technologies/tailwind.png",
    label: "Tailwind CSS",
  },
  {
    href: "https://developer.mozilla.org/docs/Web/CSS",
    logoPath: "/technologies/css.png",
    label: "CSS",
  },
  {
    href: "https://www.djangoproject.com/",
    logoPath: "/technologies/django.png",
    label: "Django",
  },
  {
    href: "https://zustand-demo.pmnd.rs/",
    logoPath: "/technologies/zustand.png",
    label: "Zustand",
  },
  {
    href: "https://zod.dev/",
    logoPath: "/technologies/zod.png",
    label: "Zod",
  },
  {
    href: "https://expressjs.com/",
    logoPath: "/technologies/express.png",
    label: "Express.js",
  },
  {
    href: "https://nginx.org/",
    logoPath: "/technologies/nginx.png",
    label: "Nginx",
  },
  {
    href: "https://mantine.dev/",
    logoPath: "/technologies/mantine.png",
    label: "Mantine UI",
  },
  {
    href: "https://ui.shadcn.com/",
    logoPath: "/technologies/shadcn.png",
    label: "Shadcn UIi",
  },
  {
    href: "https://expo.dev/",
    logoPath: "/technologies/expo.png",
    label: "Expo",
  },
  {
    href: "https://reactnativereusables.com/",
    logoPath: "/technologies/react-native-reusables.png",
    label: "React Native Reusables",
  },
  {
    href: "https://ui.ahmedbna.com/",
    logoPath: "/technologies/bna-ui.png",
    label: "BNA UI",
  },
];

const TechnologiesMarquee = () => {
  const plugin = useRef(
    Autoscroll({
      speed: 0.5,
    })
  );

  return (
    <section>
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
          {TECHNOLOGIES.map(({ href, logoPath, label }) => (
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
                      src={logoPath}
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
    </section>
  );
};

export default TechnologiesMarquee;
