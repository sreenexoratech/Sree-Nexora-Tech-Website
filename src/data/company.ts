import type { CompanyInfo, SocialLinkItem } from '../types';

/**
 * =======================================================================
 * CENTRALIZED COMPANY CONFIGURATION — SREE NEXORA TECH PVT LTD
 * =======================================================================
 * All company contact details, social media URLs, Google Maps embed,
 * booking service links, and backend API endpoints are configured here.
 *
 * To override defaults, define the corresponding VITE_* variables in your
 * .env or hosting environment (e.g. Vercel, Netlify, Cloudflare).
 */

const env = (import.meta as any).env || {};

// Canonical Site Domain (Configurable via environment)
export const SITE_URL = env.VITE_SITE_URL || 'https://sreenexoratech.com';

// Verified Base Contact Placeholders & Configurable Overrides
const COMPANY_EMAIL = env.VITE_COMPANY_EMAIL || 'sreenexoratechpvtltd@gmail.com';
const COMPANY_SALES_EMAIL = env.VITE_COMPANY_SALES_EMAIL || 'sreenexoratechpvtltd@gmail.com';
const COMPANY_PHONE = env.VITE_COMPANY_PHONE || '+917200447570';
const COMPANY_DISPLAY_PHONE = env.VITE_COMPANY_DISPLAY_PHONE || '+91 72004 47570';
const COMPANY_WHATSAPP_NUMBER = env.VITE_COMPANY_WHATSAPP || '917200447570';
const COMPANY_WHATSAPP_DISPLAY = env.VITE_COMPANY_WHATSAPP_DISPLAY || '+91 72004 47570';
const COMPANY_ADDRESS = env.VITE_COMPANY_ADDRESS || 'Tamil Nadu, India';

// Google Maps Configuration (Verified Office Location: Sree Nexora Tech Pvt Ltd)
const GOOGLE_MAPS_EMBED_URL =
  env.VITE_GOOGLE_MAPS_EMBED_URL ||
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.678838061712!2d77.31695587428887!3d10.875324057363292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9b15afc09fe9b%3A0x6307b71bda7151bd!2sSree%20Nexora%20Tech%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1793380420542!5m2!1sen!2sin';

const GOOGLE_MAPS_DIRECTIONS_URL =
  env.VITE_GOOGLE_MAPS_DIRECTIONS_URL ||
  'https://www.google.com/maps/dir/?api=1&destination=Sree+Nexora+Tech+Pvt+Ltd&destination_place_id=0x3ba9b15afc09fe9b:0x6307b71bda7151bd';

// Book a Call Configuration
const BOOKING_CALENDAR_URL = env.VITE_BOOKING_CALENDAR_URL || null;

const WHATSAPP_BOOKING_FALLBACK = `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello Sree Nexora Tech team, I would like to schedule an enterprise discovery & strategy call for my business.'
)}`;

// Contact Form Backend API Endpoint
const CONTACT_API_ENDPOINT = env.VITE_CONTACT_API_URL || null;

export const companyData: CompanyInfo = {
  legalName: 'Sree Nexora Tech Pvt Ltd',
  brandName: 'Nexora Tech',
  siteUrl: SITE_URL,
  shortTagline: 'Enterprise Software & IT Solutions',
  fullTagline: 'Empowering Modern Businesses with Scalable Software, Cloud ERP & Digital Transformation',
  description:
    'Sree Nexora Tech Pvt Ltd is a premier technology company delivering high-performance website development, custom enterprise software, intelligent ERP/CRM systems, GST billing solutions, and ROI-driven digital marketing.',
  headquarters: {
    state: 'Tamil Nadu',
    country: 'India',
    regionNotice: 'Verified Office • Serving Tamil Nadu & Pan-India',
    addressLine: COMPANY_ADDRESS,
    directionsUrl: GOOGLE_MAPS_DIRECTIONS_URL
  },
  contact: {
    email: COMPANY_EMAIL,
    salesEmail: COMPANY_SALES_EMAIL,
    phone: COMPANY_PHONE,
    displayPhone: COMPANY_DISPLAY_PHONE,
    whatsappNumber: COMPANY_WHATSAPP_NUMBER,
    whatsappDisplay: COMPANY_WHATSAPP_DISPLAY,
    workingHours: 'Monday – Saturday: 9:00 AM – 7:00 PM IST'
  },
  maps: {
    embedUrl: GOOGLE_MAPS_EMBED_URL,
    directionsUrl: GOOGLE_MAPS_DIRECTIONS_URL,
    regionLabel: 'Tamil Nadu, India',
    coordinates: {
      latitude: 10.875324,
      longitude: 77.316956
    }
  },
  booking: {
    calendarUrl: BOOKING_CALENDAR_URL,
    whatsappFallbackUrl: WHATSAPP_BOOKING_FALLBACK
  },
  api: {
    contactEndpoint: CONTACT_API_ENDPOINT
  }
};

/**
 * =======================================================================
 * CENTRALIZED SOCIAL MEDIA LINKS CONFIGURATION
 * =======================================================================
 */
export const socialLinksData: SocialLinkItem[] = [
  {
    platform: 'instagram',
    url:
      env.VITE_SOCIAL_INSTAGRAM ||
      'https://www.instagram.com/sreenexoratech?utm_source=qr&exln=cjJhdW9oZWZ0OXBi',
    label: 'Follow Sree Nexora Tech on Instagram'
  },
  {
    platform: 'facebook',
    url: env.VITE_SOCIAL_FACEBOOK || 'https://facebook.com/sreenexoratech',
    label: 'Like Sree Nexora Tech on Facebook'
  },
  {
    platform: 'linkedin',
    url:
      env.VITE_SOCIAL_LINKEDIN ||
      'https://www.linkedin.com/company/sree-nexora-tech-pvt-ltd/',
    label: 'Connect with Sree Nexora Tech on LinkedIn'
  },
  {
    platform: 'whatsapp',
    url: `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      'Hello Sree Nexora Tech team, I would like to connect with your solutions team.'
    )}`,
    label: 'Chat with Sree Nexora Tech on WhatsApp'
  }
];

export const getBookCallLink = (): { href: string; isExternal: boolean } => {
  if (companyData.booking.calendarUrl) {
    return { href: companyData.booking.calendarUrl, isExternal: true };
  }
  return { href: companyData.booking.whatsappFallbackUrl, isExternal: true };
};
