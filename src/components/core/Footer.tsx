import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="text-center mx-auto max-w-xl my-4">
      <Card className="bg-primary text-primary-foreground">
        <CardContent>
          Designed and Made with{" "}
          <span className="inline-block animate-bounce">🗿</span>, by yours
          truly (me).
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
