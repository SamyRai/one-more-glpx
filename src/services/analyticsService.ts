/**
 * Basic analytics service. In a production setting this could push events to
 * your analytics backend (e.g. Segment, Mixpanel, self‑hosted). Here it
 * simply logs to the console. Use this to instrument CTA clicks and other
 * meaningful interactions.
 */
export interface AnalyticsEvent {
  name: string;
  payload?: Record<string, unknown>;
}

export function trackEvent(event: AnalyticsEvent): void {
  console.log("Analytics event:", event);
}
