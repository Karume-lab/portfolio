import { ExternalLink } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { inspos } from "@/data/inspos";

const Inspos = () => {
  return (
    <section id="inspos" className="px-4 md:px-8 py-12">
      <SectionHeader
        title="GIVE CREDIT WHERE CREDIT IS DUE."
        className="text-center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {inspos.map((inspo) => (
          <Link
            key={inspo.title}
            href={inspo.href as Route}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="h-full transition-all hover:shadow-md hover:-translate-y-1 hover:ring-1 hover:ring-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">
                  {inspo.title}
                </CardTitle>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {inspo.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Inspos;
