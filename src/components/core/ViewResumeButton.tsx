import { ExternalLink } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ViewResumeButton = () => {
  return (
    <Button className="flex items-center gap-2" asChild>
      <Link
        href={"/core/daniel-karume-resume.pdf" as Route}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Résumé
        <ExternalLink className="w-4 h-4" />
      </Link>
    </Button>
  );
};

export default ViewResumeButton;
