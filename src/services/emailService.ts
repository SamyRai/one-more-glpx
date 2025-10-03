/**
 * Service responsible for sending contact form submissions to your backend.
 * In a real application you would replace the fetch URL with your API
 * endpoint. Here we simulate a network request.
 */
export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMessage(
  payload: ContactPayload
): Promise<void> {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  // Replace with real API call, e.g.:
  // const res = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // });
  // if (!res.ok) throw new Error('Failed to send message');
  // For now we just log to console
  console.log('Contact payload sent', payload);
}
