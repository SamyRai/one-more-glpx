import * as React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

function Footer() {
  return (
    <footer className="mt-16 border-t">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm md:flex-row">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Week-to-Ready by GLPX
          </p>
          <div className="flex items-center gap-4">
            <Button variant="link" asChild>
              <Link to="/posts">Articles</Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/starter-pack">Starter Pack</Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/book">Book a free call</Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/privacy">Privacy</Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
