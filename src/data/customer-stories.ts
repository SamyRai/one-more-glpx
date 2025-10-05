export type CaseStudy = {
  image: string;
  title: string;
  description: string;
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "How Acme Inc. Reduced Security Incidents by 75%",
    description: "Discover the strategies that led to a dramatic improvement in their security posture and a more resilient infrastructure.",
    href: "/case-studies",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Globex Corp. Achieved 99.9% Uptime with Our Platform",
    description: "Learn how our automated security solutions helped Globex Corp. maintain near-perfect uptime and build customer trust.",
    href: "/case-studies",
  },
  {
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Stark Industries Streamlined Compliance and Saved Thousands",
    description: "A deep dive into how Stark Industries automated their compliance processes, saving time and resources.",
    href: "/case-studies",
  },
];