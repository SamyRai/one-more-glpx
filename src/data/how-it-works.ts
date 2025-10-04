export const steps = [
  {
    title: "Preflight",
    text: "Cluster checks & scope — confirm baseline path; eBPF switch optional.",
  },
  {
    title: "Install",
    text: "Gateway API TLS, admission policies, secrets at rest, runtime minimal.",
  },
  {
    title: "Evidence",
    text: "Policy tests green, log/retention mapped to PCI/DORA/NIS2.",
  },
  {
    title: "Handover",
    text: "Runbooks, rollback plans, and Q&A window.",
  },
];

export const deliverables = [
  "Gateway API TLS configured correctly",
  "VAP/CEL invariants; Kyverno for defaults",
  "Secrets at rest; minimal Falco eBPF alerts",
  "Logging/retention templates aligned to PCI/DORA/NIS2",
  "Policy test suite green + runbooks",
];
