import React from 'react';
import Card from '@/components/ui/Card';
import { useTranslation } from '@/hooks/useTranslation';

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
      className="py-20 bg-background-light dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          {t('features.title')}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-start text-left"
              shadow
            >
              <div className="text-3xl mb-4" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
        <p
          id="pricing"
          className="mt-12 text-center text-base font-medium text-primary"
        >
          {t('features.pricing')}
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
