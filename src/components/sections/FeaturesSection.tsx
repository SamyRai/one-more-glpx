import React from 'react';
import Card from '@/components/ui/Card';
import { useTranslation } from '@/hooks/useTranslation';
import clsx from 'clsx';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

/**
 * Features list for the offering. Uses translation keys for titles and
 * descriptions. Icons are simple emojis for demonstration purposes; you can
 * replace them with SVGs or imported icons.
 */
export const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  const features: Feature[] = [
    {
      icon: '🔐',
      title: t('features.gateway'),
      description: t('features.gateway'),
    },
    {
      icon: '🛂',
      title: t('features.admission'),
      description: t('features.admission'),
    },
    {
      icon: '🛡️',
      title: t('features.runtime'),
      description: t('features.runtime'),
    },
    {
      icon: '🔑',
      title: t('features.secrets'),
      description: t('features.secrets'),
    },
    {
      icon: '📄',
      title: t('features.compliance'),
      description: t('features.compliance'),
    },
  ];
  return (
    <section
      id="features"
      className="features-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="features-title">
          {t('features.title')}
        </h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="feature-card"
              shadow
            >
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
        <p
          id="pricing"
          className="features-pricing-link"
        >
          {t('features.pricing')}
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;