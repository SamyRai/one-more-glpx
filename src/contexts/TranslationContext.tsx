import React, { createContext, useContext, useState } from 'react';

// A very basic translation context for demonstration purposes.
// In a real application, this would be powered by a library like i18next.
const translations: Record<string, Record<string, string>> = {
  en: {
    'home.headline': 'Kubernetes security baseline in one week — with auditor‑ready evidence',
  },
  es: {
    'home.headline': 'Línea de base de seguridad de Kubernetes en una semana, con evidencia lista para auditores',
  }
};

const TranslationContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {},
  t: (key: string) => key,
});

export const useTranslation = () => useContext(TranslationContext);

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  const value = { language, setLanguage, t };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};