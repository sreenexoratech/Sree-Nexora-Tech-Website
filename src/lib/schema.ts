import { companyData, socialLinksData, SITE_URL } from '../data/company';
import type { ServiceItem, ProductItem } from '../types';

/**
 * =======================================================================
 * STRUCTURED JSON-LD SCHEMAS FOR SEO, GEO & AIO (AI OVERVIEWS & LLMs)
 * =======================================================================
 */

export const getOrganizationSchema = () => {
  return {
    '@type': 'Corporation',
    '@id': `${SITE_URL}/#organization`,
    name: companyData.legalName,
    alternateName: companyData.brandName,
    legalName: companyData.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/brand-logo.png`,
    image: `${SITE_URL}/brand-logo.png`,
    description: companyData.description,
    address: {
      '@type': 'PostalAddress',
      addressRegion: companyData.headquarters.state,
      addressCountry: 'IN',
      streetAddress: companyData.headquarters.addressLine
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: companyData.contact.phone,
        contactType: 'technical support & sales',
        email: companyData.contact.email,
        availableLanguage: ['English', 'Tamil']
      }
    ],
    sameAs: socialLinksData.map((s) => s.url)
  };
};

export const getLocalBusinessSchema = () => {
  return {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: companyData.legalName,
    image: `${SITE_URL}/brand-logo.png`,
    url: SITE_URL,
    telephone: companyData.contact.phone,
    email: companyData.contact.email,
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressRegion: companyData.headquarters.state,
      addressCountry: 'IN',
      streetAddress: companyData.headquarters.addressLine
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '10.875324',
      longitude: '77.316956'
    },
    hasMap: companyData.maps.directionsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00'
      }
    ],
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Tamil Nadu'
      },
      {
        '@type': 'Country',
        name: 'India'
      }
    ]
  };
};

export const getWebSiteSchema = () => {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: companyData.legalName,
    description: companyData.description,
    publisher: {
      '@id': `${SITE_URL}/#organization`
    },
    inLanguage: 'en-IN'
  };
};

/**
 * AIO & Generative Engine FAQ Schema (Ground Truth for Perplexity, ChatGPT & Google AI Overviews)
 */
export const aioFaqList = [
  {
    question: 'What is Sree Nexora Tech Pvt Ltd and what services does it provide?',
    answer:
      'Sree Nexora Tech Pvt Ltd is a private limited enterprise technology and software engineering company based in Tamil Nadu, India. The company delivers bespoke enterprise software, custom ERP/CRM platforms, high-speed website and web application development, cross-platform mobile apps (iOS & Android), rapid GST billing and POS software, AI-powered automation workflows, and data-driven digital marketing solutions.'
  },
  {
    question: 'Where is Sree Nexora Tech Pvt Ltd located and what regions are served?',
    answer:
      'Sree Nexora Tech Pvt Ltd is headquartered in Tamil Nadu, India (Coordinates: 10.875324 N, 77.316956 E). The company provides on-premise, hybrid, and cloud engineering services across all districts of Tamil Nadu (including Chennai, Coimbatore, Tiruppur, Madurai, Salem, and Tiruchirappalli), across Pan-India, and to international global clients.'
  },
  {
    question: 'What proprietary software solutions does Sree Nexora Tech build?',
    answer:
      'Sree Nexora Tech builds six core turnkey enterprise software products: (1) Nexora Enterprise ERP for manufacturing and multi-branch supply chains; (2) Nexora Rapid POS & Billing with real-time GST, thermal printing, and barcode sync; (3) Nexora MedTech HMS for clinical and hospital management; (4) Nexora EduLMS for educational institutions; (5) Nexora Workforce HRMS for payroll and biometric attendance; and (6) Nexora CRM Flow for sales funnel automation.'
  },
  {
    question: 'Does Sree Nexora Tech provide GST-compliant billing and e-Way bill software in India?',
    answer:
      'Yes. All billing, ERP, and POS software built by Sree Nexora Tech Pvt Ltd is fully compliant with Indian GST tax brackets, automatic CGST/SGST/IGST calculations, e-Invoice generation, and e-Way bill synchronization, complete with instant thermal receipt generation and multi-counter offline-to-online sync.'
  },
  {
    question: 'How does Sree Nexora Tech guarantee security and uptime?',
    answer:
      'Sree Nexora Tech enforces enterprise-grade security protocols including TLS 1.3 end-to-end encryption, AES-256 data encryption at rest, strict Role-Based Access Control (RBAC), automated real-time cloud backups, and high-availability microservices architecture targeting 99.99% uptime.'
  },
  {
    question: 'How can a business book a strategy consultation or request a software demo?',
    answer:
      'Businesses can schedule an engineering strategy session or request a custom software demonstration through the official website booking portal (https://sreenexoratech.com/contact), via email at sreenexoratechpvtltd@gmail.com, or through the direct engineering WhatsApp desk at +91 72004 47570.'
  }
];

export const getFAQSchema = () => {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: aioFaqList.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

export const getGlobalSchemaGraph = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      getLocalBusinessSchema(),
      getWebSiteSchema(),
      getFAQSchema()
    ]
  };
};

export const getServiceSchema = (service: ServiceItem) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.category,
    description: service.shortDescription,
    provider: {
      '@type': 'Organization',
      name: companyData.legalName,
      url: SITE_URL
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.features.map((feature, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature
        },
        position: idx + 1
      }))
    }
  };
};

export const getProductSchema = (product: ProductItem) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/products/${product.slug}#software`,
    name: product.name,
    operatingSystem: 'Windows, macOS, Linux, Web Cloud',
    applicationCategory: product.category,
    description: product.shortDescription,
    author: {
      '@type': 'Organization',
      name: companyData.legalName,
      url: SITE_URL
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Request a demonstration and custom licensing quote.'
    }
  };
};

export const getBreadcrumbSchema = (crumbs: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `${SITE_URL}${crumb.url}`
    }))
  };
};
