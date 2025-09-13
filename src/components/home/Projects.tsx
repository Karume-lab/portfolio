"use client";

import { ExternalLink, Github } from "lucide-react";
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
      className="px-8 relative"
      style={{ height: `${PROJECTS.length * 50}vh` }}
    >
      <div className="text-center py-2 sticky top-16">
        <SectionHeader title="TALK IS CHEAP. SHOW ME THE CODE." />
      </div>
      <div>
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
              className="sticky top-24 max-w-7xl mx-auto overflow-hidden flex flex-col md:flex-row rounded-2xl h-96 p-0"
              style={{
                transform: `translateY(${index * 45}px)`,
              }}
            >
              <Image
                src={thumbnailPath}
                alt={title}
                width={600}
                height={400}
                className="w-full md:h-full md:w-2/3 object-fill hover-to-reveal"
              />
              <div className="flex flex-col flex-1 py-2">
                <CardHeader className="flex flex-row items-start justify-between gap-4">
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <div className="flex gap-2">
                    {gitHubUrl ? (
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={gitHubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        <Github className="w-4 h-4 mr-1" />
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
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </Link>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
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
