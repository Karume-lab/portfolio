import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OpenInLargerScreenCard = () => {
  return (
    <div className="lg:hidden flex items-center justify-center min-h-screen p-6">
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            Viewing on a Larger Screen Recommended
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="leading-relaxed">
            This portfolio is optimized for desktop and larger displays. Please
            revisit on a bigger screen for the best experience.
          </p>
          <p className="text-sm text-muted-foreground">
            Mobile responsiveness is in progress and will be available soon.
            Thank you for your patience.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpenInLargerScreenCard;
