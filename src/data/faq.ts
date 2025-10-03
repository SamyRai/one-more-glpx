export const faqs = [
  {
    question: 'Is eBPF mandatory?',
    answer:
      'No. Baseline ships without kube-proxy removal. eBPF is a gated optional step with preflight + rollback.',
  },
  {
    question: 'Do you set retention periods?',
    answer:
      "We include PCI's 12/3 months precisely; for DORA/NIS2 we ship templates + rationale to set periods with your regulator.",
  },
  {
    question: 'What does the fixed price include?',
    answer:
      'Install, tests, templates, runbooks, and a 30-day async Q&A window. Scope is clearly defined up-front.',
  },
];