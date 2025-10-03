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
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          {t('hero.title')}
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <div className="hero-actions">
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