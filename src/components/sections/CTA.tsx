import { CallToAction } from "@/components/marketing/CallToAction";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <CallToAction
      title="Stop Worrying About Kubernetes Security."
      description="Deploy a secure, compliant, and efficient cluster in minutes, not months. Start your free trial and see the difference for yourself."
      action={<Button size="lg">Secure Your Cluster Now</Button>}
      variant="primary"
    />
  );
}