import React, { useEffect } from 'react';
import { SITE_URL, companyData } from '../../data/company';
import { getGlobalSchemaGraph } from '../../lib/schema';

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalPath = '',
  ogType = 'website',
  ogImage = `${SITE_URL}/brand-logo.png`,
  jsonLd
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const formattedTitle = title.includes(companyData.legalName) || title.includes(companyData.brandName)
      ? title
      : `${title} | ${companyData.legalName}`;
    document.title = formattedTitle;

    // Helper to update or create meta tag
    const setMetaTag = (attribute: 'name' | 'property', value: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Set Primary SEO Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setMetaTag('name', 'author', companyData.legalName);
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 3. Set Geographic / GEO Meta Tags
    setMetaTag('name', 'geo.region', 'IN-TN');
    setMetaTag('name', 'geo.placename', 'Tamil Nadu, India');
    setMetaTag('name', 'geo.position', '10.875324;77.316956');
    setMetaTag('name', 'ICBM', '10.875324, 77.316956');

    // 4. Set Canonical Link
    const normalizedPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 5. Set Open Graph Meta Tags
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', companyData.legalName);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 6. Set Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 7. Inject JSON-LD Schema
    const scriptId = 'nexora-jsonld-schema';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;

    const finalSchema = jsonLd || getGlobalSchemaGraph();
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    const schemaData = Array.isArray(finalSchema)
      ? { '@context': 'https://schema.org', '@graph': finalSchema }
      : finalSchema;
    scriptTag.textContent = JSON.stringify(schemaData);
  }, [title, description, keywords, canonicalPath, ogType, ogImage, jsonLd]);

  return null;
};
