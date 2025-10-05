import * as React from 'react';

export function useNewsletterSignup() {
  const [email, setEmail] = React.useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here,
    // e.g., send the email to a server.
    console.log('Submitted email:', email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return {
    email,
    handleEmailChange,
    handleSubmit,
  };
}