import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center space-y-6 bg-primary text-primary-foreground">
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="text-lg opacity-80">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button size="lg" variant="secondary" className="mt-4">
          Go Back Home
        </Button>
      </Link>
    </section>
  );
};

export default NotFound;
