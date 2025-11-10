import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center space-y-6 bg-primary text-primary-foreground">
      <TypographyH1 className="text-6xl font-extrabold">404</TypographyH1>
      <TypographyP className="text-lg opacity-80">
        Oops! The page you are looking for does not exist.
      </TypographyP>
      <Link href="/">
        <Button size="lg" variant="secondary" className="mt-4">
          Go Back Home
        </Button>
      </Link>
    </section>
  );
};

export default NotFound;
