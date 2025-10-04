import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Calendar } from 'lucide-react';
import { useUTM } from "@/hooks/useUTM";
import { ls, trackEvent } from "@/lib/localStorage";
import { Page } from "@/components/ui/Page";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Label } from '@/components/ui/Label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Seo } from '@/components/ui/Seo';

import { z } from 'zod';

const leadSchema = z.object({
  email: z.string().email({ message: 'A valid work email is required' }),
  role: z.string().optional(),
  org: z.string().optional(),
  infra: z.string().optional(),
  regime: z.string().optional(),
  timeline: z.string().optional(),
});

type LeadSchema = z.infer<typeof leadSchema>;

function StarterPack() {
  const utm = useUTM();
  const [form, setForm] = useState<LeadSchema>({
    email: '',
    role: '',
    org: '',
    infra: '',
    regime: '',
    timeline: '',
  });
  const [errors, setErrors] = useState<z.ZodError['formErrors']['fieldErrors']>(
    {},
  );
  const [unlocked, setUnlocked] = useState(
    ls.get('starter_pack_unlocked', false),
  );

  useEffect(() => {
    if (Object.keys(utm).length > 0) {
      ls.set('last_utm', utm);
    }
  }, [utm]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const result = leadSchema.safeParse(form);
    if (!result.success) {
      setErrors(result.error.formErrors.fieldErrors);
      return;
    }

    trackEvent('starter_pack_requested', { form, utm });
    ls.set('lead', { ...form, utm, created_at: new Date().toISOString() });
    setUnlocked(true);
    ls.set('starter_pack_unlocked', true);
  }

  return (
    <Page>
      <Seo
        title="Compliance Evidence Starter Pack"
        description="Get our Compliance Evidence Starter Pack: CEL policies, Kyverno defaults, log/retention templates, runbooks, and a policy test suite."
        canonical="/starter-pack"
      />
      <Container>
        <Page.Header>
          <Page.Title>Compliance Evidence Starter Pack</Page.Title>
          <Page.Description>
            CEL policies for invariants, Kyverno defaults, log/retention
            templates (PCI precise, DORA/NIS2 rationale), runbooks, and a policy
            test suite. Fill this once to unlock.
          </Page.Description>
        </Page.Header>

        {unlocked ? (
          <div className="mx-auto mt-6 max-w-3xl space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  <CardTitle className="text-base font-medium">
                    Your pack is unlocked
                  </CardTitle>
                </div>
                <Button
                  onClick={() => trackEvent("pack_download_clicked")}
                  size="sm"
                >
                  Download .zip
                </Button>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <CardTitle className="text-base font-medium">
                    Book a Baseline Fit call
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ready to talk? Pick a 30-min slot to confirm scope and dates.
                </p>
                <Button className="mt-4 w-full" size="lg" asChild>
                  <Link to="/book">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Your Call
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2"
          >
            <div>
              <Label htmlFor="email">Work email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Work email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  if (errors.email) {
                    setErrors({ ...errors, email: undefined });
                  }
                }}
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-destructive">
                  {errors.email[0]}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                placeholder="e.g., Head of Platform"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="org">Organization</Label>
              <Input
                id="org"
                placeholder="Organization"
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="infra">Infrastructure</Label>
              <Input
                id="infra"
                placeholder="Cloud / On-prem"
                value={form.infra}
                onChange={(e) => setForm({ ...form, infra: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="regime">Compliance driver</Label>
              <Select
                onValueChange={(value) => setForm({ ...form, regime: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Compliance driver" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nis2">NIS2</SelectItem>
                  <SelectItem value="dora">DORA</SelectItem>
                  <SelectItem value="pci">PCI DSS</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="timeline">Timeline</Label>
              <Select
                onValueChange={(value) => setForm({ ...form, timeline: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3m">≤ 3 months</SelectItem>
                  <SelectItem value="3-6m">3–6 months</SelectItem>
                  <SelectItem value="6-12m">6–12 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Button type="submit" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Get Starter Pack
              </Button>
            </div>
            <p className="md:col-span-2 text-center text-xs text-muted-foreground">
              No spam. We’ll send one link and a Calendly to book a fit call.
            </p>
          </form>
        )}
      </Container>
    </Page>
  );
}

export default StarterPack;
