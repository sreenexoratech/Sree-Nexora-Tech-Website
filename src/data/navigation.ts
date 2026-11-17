import type { NavItem } from '../types';

export const navigationLinks: NavItem[] = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'About Nexora',
    href: '/about'
  },
  {
    title: 'Services',
    href: '/services',
    children: [
      {
        title: 'Website Development',
        href: '/services/website-development',
        description: 'Modern, high-performance responsive web applications.'
      },
      {
        title: 'E-commerce Website Development',
        href: '/services/ecommerce-development',
        description: 'Scalable online storefronts and payment gateway integrations.'
      },
      {
        title: 'CRM Software',
        href: '/services/crm-software',
        description: 'Lead tracking, sales pipelines, and customer lifecycle management.'
      },
      {
        title: 'ERP Software',
        href: '/services/erp-software',
        description: 'Unified business operations, accounts, and supply chain.'
      },
      {
        title: 'Billing Software',
        href: '/services/billing-software',
        description: 'Fast GST e-invoicing, retail POS, and wholesale billing.'
      },
      {
        title: 'Inventory Management Software',
        href: '/services/inventory-management',
        description: 'Real-time stock tracking, barcodes, and automated reorder alerts.'
      },
      {
        title: 'LMS (Learning Management System)',
        href: '/services/lms-software',
        description: 'Digital classrooms, video courses, tests, and student portals.'
      },
      {
        title: 'HRMS (Human Resource Management)',
        href: '/services/hrms-software',
        description: 'Biometric attendance, automated payroll, and leave systems.'
      },
      {
        title: 'Custom Software Development',
        href: '/services/custom-software',
        description: 'Bespoke software tailored to your specific business workflows.'
      },
      {
        title: 'Digital Marketing',
        href: '/services/digital-marketing',
        description: 'SEO, performance marketing, local search, and brand growth.'
      }
    ]
  },
  {
    title: 'Products',
    href: '/products'
  },
  {
    title: 'Contact Us',
    href: '/contact'
  }
];
