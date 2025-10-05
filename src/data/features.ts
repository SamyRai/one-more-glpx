export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: "ShieldCheck",
    title: "Secure by Default",
    description:
      "Automate your security baseline. Our platform enforces best practices out-of-the-box, letting you ship faster without sacrificing security.",
  },
  {
    icon: "Zap",
    title: "Blazing Fast",
    description:
      "Instant insights, zero overhead. Our eBPF-based solution offers powerful observability with minimal performance impact, so your cluster runs at peak efficiency.",
  },
  {
    icon: "Gem",
    title: "Feature Rich",
    description:
      "From compliance mapping for PCI & DORA to automated policy enforcement, get all the tools you need to secure your entire software development lifecycle.",
  },
];