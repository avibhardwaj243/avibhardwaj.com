import { Helmet } from 'react-helmet-async';
import { PROFILE } from '@/data/content';

const DOMAIN = 'https://avibhardwaj.com';

export const SEO = ({
  title,
  description,
  path = '/',
  type = 'website',
  image,
  publishedAt,
  tags,
}) => {
  const fullTitle = title
    ? `${title} — ${PROFILE.name}`
    : `${PROFILE.name} — ${PROFILE.role}, FinTech`;
  const desc =
    description ||
    'Avi Bhardwaj — Engineering Manager at PaisaBazaar. 16+ years overall, 11+ in FinTech, building scalable customer-centric products.';
  const url = `${DOMAIN}${path}`;
  const ogImage = image || `${DOMAIN}/og-image.jpg`;

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PROFILE.name,
    jobTitle: PROFILE.role,
    worksFor: { '@type': 'Organization', name: PROFILE.company },
    url: DOMAIN,
    email: `mailto:${PROFILE.email}`,
    sameAs: [PROFILE.linkedin],
    address: { '@type': 'PostalAddress', addressLocality: PROFILE.location },
    description: PROFILE.tagline,
  };

  const articleLd =
    type === 'article'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description: desc,
          author: { '@type': 'Person', name: PROFILE.name, url: DOMAIN },
          publisher: { '@type': 'Person', name: PROFILE.name },
          datePublished: publishedAt,
          mainEntityOfPage: url,
          image: ogImage,
          keywords: (tags || []).join(', '),
        }
      : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={PROFILE.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(personLd)}</script>
      {articleLd && (
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
      )}
    </Helmet>
  );
};
