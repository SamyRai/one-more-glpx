import React, { useState, useCallback, createContext } from 'react';

export type Locale = 'en' | 'de';

type TranslationDictionary = Record<string, string>;

// English translation strings
const en: TranslationDictionary = {
  // General
  'nav.home': 'Home',
  'nav.features': 'Features',
  'nav.pricing': 'Pricing',
  'nav.contact': 'Contact',
  'button.bookCall': 'Book a 30‑min fit call',
  'button.downloadPack': 'Download baseline pack',
  // Hero
  'hero.title':
    'Kubernetes security baseline in one week — with auditor‑ready evidence.',
  'hero.subtitle':
    'Gateway API TLS, VAP/CEL policies, Kyverno, Falco, KMS, PCI DSS, DORA & NIS2. All configured and documented.',
  // Features
  'features.title': 'What’s included',
  'features.gateway': 'Gateway API TLS & routing',
  'features.admission': 'Admission control (VAP/CEL, Kyverno)',
  'features.runtime': 'Runtime detection (Falco eBPF tuned)',
  'features.secrets': 'Secrets management (KMS/Vault)',
  'features.compliance': 'PCI, DORA & NIS2 evidence pack',
  'features.pricing': 'Fixed scope. Typical price €7.5–9.5k.',
  // Contact
  'contact.title': 'Get in touch',
  'contact.nameLabel': 'Name',
  'contact.emailLabel': 'Email address',
  'contact.messageLabel': 'Message',
  'contact.submit': 'Send message',
  'contact.success': 'Thanks for reaching out! We’ll respond shortly.',
  'contact.error': 'There was an error sending your message. Please try again.',
};

// German translation strings
const de: TranslationDictionary = {
  'nav.home': 'Startseite',
  'nav.features': 'Funktionen',
  'nav.pricing': 'Preis',
  'nav.contact': 'Kontakt',
  'button.bookCall': '30‑min Call buchen',
  'button.downloadPack': 'Baseline‑Paket herunterladen',
  'hero.title':
    'Kubernetes‑Sicherheitsbasis in einer Woche — mit revisionssicherem Nachweis.',
  'hero.subtitle':
    'Gateway‑API‑TLS, VAP/CEL‑Richtlinien, Kyverno, Falco, KMS, PCI DSS, DORA & NIS2. Alles konfiguriert und dokumentiert.',
  'features.title': 'Was enthalten ist',
  'features.gateway': 'Gateway‑API TLS & Routing',
  'features.admission': 'Admission Control (VAP/CEL, Kyverno)',
  'features.runtime': 'Runtime Detection (Falco eBPF getuned)',
  'features.secrets': 'Secrets‑Management (KMS/Vault)',
  'features.compliance': 'PCI, DORA & NIS2 Evidence‑Paket',
  'features.pricing': 'Festpreis. Typischer Preis 7,5–9,5 Tsd. €.',
  'contact.title': 'Kontakt aufnehmen',
  'contact.nameLabel': 'Name',
  'contact.emailLabel': 'E‑Mail‑Adresse',
  'contact.messageLabel': 'Nachricht',
  'contact.submit': 'Nachricht senden',
  'contact.success': 'Danke für Ihre Anfrage! Wir melden uns in Kürze.',
  'contact.error':
    'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
};

const dictionaries: Record<Locale, TranslationDictionary> = { en, de };

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

export const TranslationContext = createContext<
  TranslationContextType | undefined
>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>('en');
  const t = useCallback(
    (key: string) => {
      const dict = dictionaries[locale] ?? dictionaries.en;
      return dict[key] ?? key;
    },
    [locale]
  );
  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
};