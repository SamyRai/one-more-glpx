import React from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useNewsletterSignup } from "@/hooks/useNewsletterSignup";

export const NewsletterSignup: React.FC = () => {
  const { email, handleEmailChange, handleSubmit } = useNewsletterSignup();

  return (
    <div className="p-6 rounded-lg bg-muted">
      <h3 className="mb-2 text-lg font-semibold">Subscribe to our newsletter</h3>
      <p className="mb-4 text-muted-foreground">
        Get the latest news and updates from our team.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm items-center space-x-2"
      >
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  );
};