import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Container from '@/components/ui/Container';

function Footer() {
  return (
    <footer className="border-t border-[var(--divider)] mt-16">
      <Container>
        <div className="py-8 text-sm flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
          <div className="text-[var(--muted)]">© {new Date().getFullYear()} Week‑to‑Ready by GLPX</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <a className="inline-flex items-center gap-1" href="mailto:hi@example.com">
              <Mail className="h-4 w-4" />
              hi@example.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;