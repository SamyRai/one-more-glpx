import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Download, Calendar, ArrowRight } from "lucide-react";
import { useUTM } from "@/hooks/useUTM";
import { ls, trackEvent } from "@/lib/localStorage";
import { Container } from "@/components/ui/Container";

function StarterPack() {
  const utm = useUTM();
  const [form, setForm] = useState({ email: "", role: "", org: "", infra: "", regime: "", timeline: "" });
  const [unlocked, setUnlocked] = useState(ls.get("starter_pack_unlocked", false));

  useEffect(() => {
    document.title = "Starter Pack • Week‑to‑Ready";
    if (Object.keys(utm).length > 0) {
      ls.set("last_utm", utm);
    }
  }, [utm]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email.includes("@")) {
      alert("Enter a valid work email");
      return;
    }
    trackEvent("starter_pack_requested", { form, utm });
    ls.set("lead", { ...form, utm, created_at: new Date().toISOString() });
    setUnlocked(true);
    ls.set("starter_pack_unlocked", true);
  }

  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold">Compliance Evidence Starter Pack</h1>
            <p className="mt-2 text-[var(--text)]">CEL policies for invariants, Kyverno defaults, log/retention templates (PCI precise, DORA/NIS2 rationale), runbooks, and a policy test suite. Fill this once to unlock.</p>
          </div>
          {unlocked ? (
            <div className="mt-6 max-w-3xl space-y-3">
              <div className="rounded-2xl ring-1 ring-[var(--ring)] p-4 bg-[var(--surface)] flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium"><Download className="h-5 w-5" />Your pack is unlocked</div>
                <button type="button" className="inline-flex items-center gap-2 rounded-full ring-1 ring-[var(--ring)] px-4 py-2" onClick={() => trackEvent("pack_download_clicked")}>Download .zip</button>
              </div>
              <div className="rounded-[var(--radius,14px)] ring-1 ring-[var(--ring)] bg-[var(--surface)] p-5">
                <div className="font-medium inline-flex items-center gap-2"><Calendar className="h-5 w-5" />Book a Baseline Fit call</div>
                <p className="text-sm text-[var(--muted)] mt-2">Pick a 30‑min slot to confirm scope and dates.</p>
                <div className="mt-4 aspect-video w-full ring-1 ring-[var(--ring)] rounded-2xl bg-[var(--bg-soft)] flex items-center justify-center text-[var(--muted-2)]">
                  <span>Calendly embed placeholder</span>
                </div>
                <Link to="/book" className="mt-3 inline-flex items-center gap-2 text-sm underline">Open booking page <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-6 grid md:grid-cols-2 gap-4 max-w-3xl">
              <input className="ring-1 ring-[var(--ring)] rounded-lg px-3 py-2 bg-[var(--surface)]" placeholder="Work email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              <input className="ring-1 ring-[var(--ring)] rounded-lg px-3 py-2 bg-[var(--surface)]" placeholder="Role (e.g., Head of Platform)" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} />
              <input className="ring-1 ring-[var(--ring)] rounded-lg px-3 py-2 bg-[var(--surface)]" placeholder="Organization" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} />
              <input className="ring-1 ring-[var(--ring)] rounded-lg px-3 py-2 bg-[var(--surface)]" placeholder="Infra (Cloud/On‑prem)" value={form.infra} onChange={e => setForm({ ...form, infra: e.target.value })} />
              <select className="ring-1 ring-[var(--ring)] rounded-lg px-3 py-2 bg-[var(--surface)]" value={form.regime} onChange={e => setForm({ ...form, regime: e.target.value })}>
                <option value="">Compliance driver</option>
                <option>NIS2</option>
                <option>DORA</option>
                <option>PCI DSS</option>
                <option>Other</option>
              </select>
              <select className="ring-1 ring-[var(--ring)] rounded-lg px-3 py-2 bg-[var(--surface)]" value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })}>
                <option value="">Timeline</option>
                <option>≤ 3 months</option>
                <option>3–6 months</option>
                <option>6–12 months</option>
              </select>
              <button className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-600)] hover:bg-[var(--accent-700)] text-white px-5 py-2.5"><Download className="h-4 w-4" /> Unlock the pack</button>
              <p className="md:col-span-2 text-xs text-[var(--muted-2)]">No spam. We’ll send one link and a Calendly to book a fit call.</p>
            </form>
          )}
        </Container>
      </section>
    </main>
  );
}

export default StarterPack;