import { SiGithub } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/core/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS } from "@/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        px-4 md:px-8 
        lg:h-[calc(54vh*var(--projects))]
      "
      style={{ ["--projects" as string]: PROJECTS.length }}
    >
      <SectionHeader
        title="TALK IS CHEAP. SHOW ME THE CODE."
        className="text-center lg:sticky lg:top-16"
      />

      <div className="space-y-8 lg:space-y-0">
        {PROJECTS.map(
          (
            {
              projectUrl,
              description,
              gitHubUrl,
              technologies,
              thumbnailPath,
              title,
            },
            index
          ) => (
            <Card
              key={title}
              className="
                max-w-7xl mx-auto overflow-hidden flex flex-col lg:flex-row lg:h-96 p-0
                lg:sticky lg:top-24
                lg:[transform:translateY(var(--y))]
              "
              style={{ ["--y" as string]: `${index * 45}px` }}
            >
              <Image
                src={thumbnailPath}
                alt={title}
                width={600}
                height={400}
                className="
                  w-full h-48 sm:h-64 
                  lg:h-full lg:w-2/3 
                  object-fill hover-to-reveal
                "
              />

              <div className="flex flex-col flex-1 py-2">
                <CardHeader className="flex flex-row items-start justify-between gap-4">
                  <CardTitle className="text-base sm:text-lg lg:text-xl">
                    {title}
                  </CardTitle>
                  <div className="flex gap-2 flex-wrap">
                    {gitHubUrl ? (
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={gitHubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGithub className="size-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        <SiGithub className="size-4 mr-1" />
                        Code
                      </Button>
                    )}
                    {projectUrl ? (
                      <Button asChild size="sm" variant="default">
                        <Link
                          href={projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="size-4 mr-1" />
                          Live
                        </Link>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        <ExternalLink className="size-4 mr-1" />
                        Live
                      </Button>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={`${title}-${tech}`} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
