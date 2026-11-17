export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface BusinessBenefit {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: 'Software & SaaS' | 'Web & E-Commerce' | 'Automation & Marketing';
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  businessBenefits: BusinessBenefit[];
  techStack: string[];
  idealFor: string[];
  deliverables: string[];
  faqs?: ServiceFAQ[];
}

export type ProductCategory =
  | 'CRM Software'
  | 'ERP Software'
  | 'Billing Software'
  | 'Inventory Management'
  | 'HRMS'
  | 'LMS';

export interface ProductModule {
  name: string;
  description: string;
  capabilities: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  modules: ProductModule[];
  specs: ProductSpec[];
  demoUrl?: string | null;
  hasLiveDemo: boolean;
  screenshotUrl?: string;
  status: 'Available' | 'Enterprise Ready' | 'Beta';
  deploymentModels: string[];
  targetIndustries: string[];
  faqs?: { question: string; answer: string }[];
}

export interface SocialLinkItem {
  platform: 'instagram' | 'facebook' | 'linkedin' | 'whatsapp' | 'twitter' | 'github';
  url: string;
  label: string;
}

export interface CompanyInfo {
  legalName: string;
  brandName: string;
  siteUrl: string;
  shortTagline: string;
  fullTagline: string;
  description: string;
  headquarters: {
    state: string;
    country: string;
    regionNotice: string;
    addressLine: string;
    directionsUrl: string;
  };
  contact: {
    email: string;
    salesEmail: string;
    phone: string;
    displayPhone: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    workingHours: string;
  };
  maps: {
    embedUrl: string;
    directionsUrl: string;
    regionLabel: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  booking: {
    calendarUrl: string | null;
    whatsappFallbackUrl: string;
  };
  api: {
    contactEndpoint: string | null;
  };
}
