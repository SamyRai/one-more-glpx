import * as React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  schema?: object;
  robots?: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
    url?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  schema,
  robots,
  og,
  twitter,
}) => {
  const appName = 'Week-to-Ready';
  const defaultDescription =
    'Get a Kubernetes security baseline in just one week. We provide TLS, admission control, runtime security, and evidence for compliance.';

  const seo = {
    title: title ? `${title} • ${appName}` : appName,
    description: description || defaultDescription,
    url: canonical ? `https://week-to-ready.com${canonical}` : undefined,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.url && <link rel="canonical" href={seo.url} />}
      {robots && <meta name="robots" content={robots} />}

      {/* Open Graph */}
      {og?.title && <meta property="og:title" content={og.title} />}
      {og?.description && (
        <meta property="og:description" content={og.description} />
      )}
      {og?.image && <meta property="og:image" content={og.image} />}
      {og?.type && <meta property="og:type" content={og.type} />}
      {og?.url && <meta property="og:url" content={og.url} />}

      {/* Twitter */}
      {twitter?.card && <meta name="twitter:card" content={twitter.card} />}
      {twitter?.title && <meta name="twitter:title" content={twitter.title} />}
      {twitter?.description && (
        <meta name="twitter:description" content={twitter.description} />
      )}
      {twitter?.image && <meta name="twitter:image" content={twitter.image} />}

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export { Seo };