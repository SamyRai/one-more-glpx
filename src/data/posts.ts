import { Post } from "@/types";

export const POSTS: Post[] = [
  {
    slug: "gateway-api-tls-metalb",
    title: "Gateway API TLS done right (and why MetalLB is just IPs)",
    excerpt:
      "Where TLS actually terminates; Terminate vs Passthrough; common misconfigs.",
    date: "2025-10-02",
    topic: "Networking",
    body: `\n**TL;DR**: Terminate TLS at the Gateway when you need L7 policy; use Passthrough only when end-to-end cert management is mature. MetalLB advertises IPs; it never terminates TLS.\n\nWe walk through:\n- A minimal Gateway + HTTPRoute with TLS terminate\n- Passthrough example for mTLS backends\n- Health checks and cert rotation gotchas\n`,
  },
  {
    slug: "admission-2025-vap-cel-kyverno",
    title: "Admission in 2025: VAP/CEL for invariants, Kyverno for mutation",
    excerpt:
      "Stop dueling webhooks. Use ValidatingAdmissionPolicy for guardrails; Kyverno for generation/mutation.",
    date: "2025-10-03",
    topic: "Policy",
    body: `\nWe cover:\n- ValidatingAdmissionPolicy (CEL) examples for image provenance\n- Kyverno for defaulting and generation\n- Scoping to avoid surprises\n`,
  },
  {
    slug: "calico-ebpf-rollout-kube-proxy-off",
    title: "Calico eBPF rollout: kube-proxy off with a rollback switch",
    excerpt:
      "A pragmatic path to eBPF data plane with preflight checks and rollback.",
    date: "2025-10-03",
    topic: "Networking",
    body: `\nChecklist:\n- Kernel/CNI compatibility preflight\n- Blue/green service probing\n- Rollback without downtime\n`,
  },
];
