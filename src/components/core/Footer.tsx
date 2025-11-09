import { SubscribeForm } from "@/components";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="flex justify-between gap-8">
        <div>
          Designed and Made with{" "}
          <span className="inline-block animate-bounce">🗿</span>, by yours
          truly (me)*.
        </div>

        <SubscribeForm />
      </div>
    </footer>
  );
};

export default Footer;
