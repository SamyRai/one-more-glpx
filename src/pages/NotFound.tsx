import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function NotFound() {
  React.useEffect(() => {
    document.title = "404: Not Found • Week‑to‑Ready";
  }, []);

  return (
    <Container>
      <div className="py-20 text-center">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-muted-foreground">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button asChild className="mt-6">
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    </Container>
  );
}

export default NotFound;
