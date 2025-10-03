import { createContext } from 'react';
import { Locale } from '@/hooks/TranslationProvider';

export interface TranslationContextProps {
  locale: Locale;
  /** Change the current locale. */
  setLocale: (locale: Locale) => void;
  /** Translate a key into the active locale. */
  t: (key: string) => string;
}

export const TranslationContext = createContext<
  TranslationContextProps | undefined
>(undefined);
