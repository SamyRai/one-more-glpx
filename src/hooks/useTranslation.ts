import { useContext } from 'react';
import { TranslationContext } from '@/contexts/TranslationContext';

/**
 * Hook for consuming translations. Returns translation function and current
 * locale as well as a setter.
 */
export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}
