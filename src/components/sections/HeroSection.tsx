import React from 'react';
import { Button } from '@/components/ui/Button';
import { useTranslation } from '@/hooks/useTranslation';
import { trackEvent } from '@/services/analyticsService';

/**
 * Landing page hero section. Displays the main value proposition and calls
 * to action. Includes headings and subtitles pulled from translations.
 */
export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-background-light to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => trackEvent({ name: 'book_call_click' })}
          >
            {t('button.bookCall')}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => trackEvent({ name: 'download_pack_click' })}
          >
            {t('button.downloadPack')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
