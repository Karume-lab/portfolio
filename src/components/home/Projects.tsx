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
        py-12
      "
    >
      <SectionHeader
        title="TALK IS CHEAP. SHOW ME THE CODE."
        className="text-center mb-12"
      />

      <div
        className="
          grid gap-8
          sm:grid-cols-2
        "
      >
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
                overflow-hidden flex flex-col
                transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-0
              "
            >
              <div className="relative w-full h-96">
                <Image
                  src={thumbnailPath}
                  alt={title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>

              <div className="flex flex-col flex-1 p-4">
                <CardHeader className="p-0 mb-3 flex flex-row items-start justify-between">
                  <CardTitle className="text-base sm:text-lg">
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

                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground mb-4">
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
