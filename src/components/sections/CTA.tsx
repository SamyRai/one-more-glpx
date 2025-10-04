import { CallToAction } from "@/components/marketing/CallToAction";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <CallToAction
      title="Ready to dive in?"
      description="Start your free trial today and experience the future of Kubernetes security."
      action={<Button size="lg">Get Started</Button>}
      variant="primary"
    />
  );
}