import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    slug: 'website-development',
    category: 'Web & E-Commerce',
    shortDescription: 'High-speed, SEO-optimized, and responsive web applications engineered for enterprise performance and customer conversion.',
    fullDescription: 'We design and engineer bespoke, lightning-fast corporate websites and interactive web portals. Our engineering prioritizes mobile responsiveness down to 320px screens, clean semantics, sub-second Core Web Vitals, and structured Schema markup to maximize organic search visibility and user conversion rates.',
    iconName: 'Globe',
    features: [
      'Component-Driven Modern React & Next.js Architecture',
      'Mobile-First Responsive Layouts (320px to 1440px+)',
      'Advanced On-Page SEO & Local Schema.org Structured Data',
      'Sub-Second Largest Contentful Paint (LCP) Optimization',
      'Intuitive Headless CMS Integration (Sanity, Strapi, WordPress)',
      'Enterprise TLS Security & Cloudflare Edge CDN Caching'
    ],
    businessBenefits: [
      {
        title: 'Higher Search Engine Rankings',
        description: 'Structured metadata and server rendering help capture high-intent local and national B2B search traffic.'
      },
      {
        title: 'Increased Visitor Conversion',
        description: 'Zero loading delay and clear call-to-action funnels convert site visitors into qualified phone and WhatsApp inquiries.'
      },
      {
        title: 'Zero Tech Debt & Easy Updates',
        description: 'Modular React component codebase ensures hassle-free future feature expansion and effortless content updates.'
      },
      {
        title: 'Brand Authority & Trust',
        description: 'A crisp, modern aesthetic establishes immediate corporate credibility with clients, partners, and investors.'
      }
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Vercel / AWS'],
    idealFor: [
      'Corporate B2B Enterprises',
      'Industrial & Manufacturing Companies in Tamil Nadu',
      'Technology & SaaS Providers',
      'Healthcare & Diagnostic Facilities'
    ],
    deliverables: [
      'Production-ready responsive website with source code',
      'Full SEO audit checklist and Google Search Console setup',
      'Custom admin panel / CMS documentation',
      '30 days post-launch technical warranty & monitoring'
    ],
    faqs: [
      {
        question: 'How long does a custom corporate website project take?',
        answer: 'Typical turnaround for a complete corporate web platform is 2 to 4 weeks depending on the number of pages, custom interactive calculators, and CMS requirements.'
      },
      {
        question: 'Will our website work smoothly on all mobile devices and networks?',
        answer: 'Yes. Every project undergoes rigorous cross-browser testing across mobile devices (iOS/Android) and is optimized for low-latency delivery over Indian 4G/5G networks.'
      }
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Website Development',
    slug: 'ecommerce-development',
    category: 'Web & E-Commerce',
    shortDescription: 'Custom B2B and B2C digital storefronts with seamless Indian payment gateways, shipping APIs, and automated GST calculations.',
    fullDescription: 'From high-volume consumer retail stores to complex multi-tier B2B wholesale portals, we craft robust e-commerce solutions. We integrate frictionless UPI/Card checkout gateways (Razorpay, Cashfree, PhonePe), automated GST tax split invoices, live inventory tracking, and carrier shipping logistics (Shiprocket, Delhivery).',
    iconName: 'ShoppingCart',
    features: [
      'Custom Multi-Vendor & Single-Brand E-Commerce Portals',
      'Native Indian Payment Gateways (Razorpay, Cashfree, UPI QR)',
      'Automated GST Invoicing with HSN/SAC Tax Computations',
      'Live Shipping Aggregator API Sync & Order Tracking',
      'Abandoned Cart Recovery via Automated WhatsApp & Email',
      'Mobile-Optimized Single-Page Checkout Flow'
    ],
    businessBenefits: [
      {
        title: 'Direct-to-Consumer Independence',
        description: 'Eliminate 15-30% marketplace commissions by establishing your own branded direct ordering platform.'
      },
      {
        title: 'Reduced Cart Abandonment',
        description: 'Streamlined 1-step checkout with instant UPI auto-fill significantly lifts completed transactions.'
      },
      {
        title: 'Effortless Statutory Compliance',
        description: 'Automated state-wise CGST/SGST/IGST tax invoices and ready-to-file GSTR sales registers.'
      },
      {
        title: 'Omnichannel Stock Visibility',
        description: 'Synchronize physical warehouse inventory with digital web stock in real-time to avoid overselling.'
      }
    ],
    techStack: ['Shopify Plus', 'WooCommerce', 'React', 'Node.js', 'PostgreSQL', 'Razorpay API'],
    idealFor: [
      'Textile & Garment Manufacturers in Tirupur & Coimbatore',
      'FMCG, Food & Organic Produce Brands',
      'Electronics & Industrial Hardware Distributors',
      'B2B Wholesale Traders requiring credit terms & bulk quotes'
    ],
    deliverables: [
      'Fully functioning e-commerce store with catalog setup',
      'Configured payment gateway, UPI, and webhook handlers',
      'Automated WhatsApp order confirmation templates',
      'Staff training guide for product uploads and dispatch workflows'
    ],
    faqs: [
      {
        question: 'Can you integrate custom wholesale pricing tiers for B2B distributors?',
        answer: 'Yes, we implement role-based customer tiers allowing wholesale buyers to see customized bulk rate slabs and submit credit purchase orders.'
      },
      {
        question: 'Which payment gateways do you support?',
        answer: 'We support all major Indian gateways including Razorpay, Cashfree, Paytm, PhonePe, and Stripe for international transactions.'
      }
    ]
  },
  {
    id: 'crm',
    title: 'CRM Software',
    slug: 'crm-software',
    category: 'Software & SaaS',
    shortDescription: 'Centralize lead management, track customer touchpoints, and automate sales follow-ups to close deals faster.',
    fullDescription: 'Never let another high-value inquiry fall through the cracks. Nexora CRM unifies incoming leads from your website, WhatsApp, IndiaMART, TradeIndia, and Meta ads into a visual Kanban sales pipeline with role-based team allocation, follow-up reminders, call notes, and deal-closing forecasting.',
    iconName: 'Users',
    features: [
      'Multi-Channel Lead Ingestion (Web, WhatsApp, Ads, Portals)',
      'Visual Drag-and-Drop Deal Pipelines with Custom Stages',
      'Automated Lead Assignment & Instant WhatsApp Auto-Responders',
      'Call Log Notes, Meeting Minutes & Quotation History',
      'Sales Rep Activity Tracking & Daily Progress Metrics',
      'Secure Customer Data Vault with Strict Role Permissions'
    ],
    businessBenefits: [
      {
        title: 'Zero Lead Leakage',
        description: 'Consolidate leads from every digital and offline source into a single real-time monitored queue.'
      },
      {
        title: 'Faster Response Time',
        description: 'Trigger instantaneous automated WhatsApp welcome messages within 30 seconds of an inquiry.'
      },
      {
        title: 'Transparent Sales Performance',
        description: 'Gain executive visibility into individual sales rep follow-ups, calls made, and pipeline health.'
      },
      {
        title: 'Higher Conversion Rates',
        description: 'Systematic follow-up reminders ensure timely communication at each stage of the deal.'
      }
    ],
    techStack: ['React', 'Python / Django', 'PostgreSQL', 'Redis', 'WhatsApp Cloud API'],
    idealFor: [
      'Real Estate Developers & Property Consultants',
      'Industrial Machinery & B2B Equipment Suppliers',
      'Education Consultancies & Admission Desks',
      'Corporate Professional Services & Financial Advisory'
    ],
    deliverables: [
      'Custom-configured CRM platform deployed to cloud',
      'WhatsApp Business API integration and approved message templates',
      'Lead import from legacy spreadsheets / databases',
      'Interactive executive dashboards and sales metrics'
    ],
    faqs: [
      {
        question: 'Can our sales team use the CRM from their mobile phones on the field?',
        answer: 'Yes, the CRM interface is fully responsive on mobile devices and supports click-to-call, quick voice note logging, and WhatsApp chat directly from the customer record.'
      },
      {
        question: 'Can we import our existing customer database from Excel?',
        answer: 'Yes, we provide bulk CSV/Excel import tools and our engineering team assists with data cleanup and deduplication.'
      }
    ]
  },
  {
    id: 'erp',
    title: 'ERP Software',
    slug: 'erp-software',
    category: 'Software & SaaS',
    shortDescription: 'Integrated enterprise resource planning to orchestrate finance, operations, supply chain, and procurement.',
    fullDescription: 'Break down operational silos with an end-to-end Enterprise Resource Planning platform. Nexora ERP synchronizes raw material procurement, manufacturing bill of materials (BOM), multi-location inventory, vendor accounts, and double-entry general ledgers into a single reliable system designed for Indian enterprise standards.',
    iconName: 'Database',
    features: [
      'Multi-Branch & Multi-Warehouse Centralized Control',
      'Production Planning, Work Orders & Bill of Materials (BOM)',
      'Purchase Orders, Vendor Quotation Comparison & GRN',
      'Indian Statutory Financial Accounting (P&L, Balance Sheet, Ledger)',
      'Real-Time Inter-Departmental Workflow Approvals',
      'Granular User Roles, Audit Logs & IP Restriction'
    ],
    businessBenefits: [
      {
        title: 'Elimination of Data Redundancy',
        description: 'A single source of operational truth ends discrepancies between warehouse, production, and accounts.'
      },
      {
        title: 'Reduced Production Downtime',
        description: 'Automated material requisition alerts ensure factories never halt due to unexpected raw material shortages.'
      },
      {
        title: 'Instant Financial Audits',
        description: 'Generate real-time trial balance, profit & loss statements, and tax reports without manual spreadsheet reconciliation.'
      },
      {
        title: 'Executive Decision Visibility',
        description: 'Monitor gross margins, operational expenses, and factory utilization from an executive dashboard.'
      }
    ],
    techStack: ['React', 'NestJS / Node.js', 'PostgreSQL', 'Docker', 'AWS Cloud Infrastructure'],
    idealFor: [
      'Manufacturing Plants (Textile, Automobile, Foundry, Plastics)',
      'Multi-Branch Trading & Distribution Networks',
      'Construction & Infrastructure Contractors',
      'Food Processing & Chemical Packaging Units'
    ],
    deliverables: [
      'Custom ERP deployment with multi-company, multi-branch support',
      'Configured Chart of Accounts and GST tax rule definitions',
      'Legacy master data migration (items, customers, opening balances)',
      'Comprehensive on-site/virtual staff training and operating SOPs'
    ],
    faqs: [
      {
        question: 'Can Nexora ERP be deployed on our own private cloud or local server?',
        answer: 'Yes. We offer both managed cloud hosting on AWS/DigitalOcean with automated daily backups, or on-premise private server deployment behind your corporate firewall.'
      },
      {
        question: 'Does the ERP support multi-branch operations across different cities?',
        answer: 'Absolutely. You can manage central warehousing with regional branches, enabling inter-branch stock transfers and consolidated financial reporting.'
      }
    ]
  },
  {
    id: 'billing',
    title: 'Billing Software',
    slug: 'billing-software',
    category: 'Software & SaaS',
    shortDescription: 'Rapid POS billing, GST e-invoicing, thermal printing, and tax reports designed for retail and wholesale.',
    fullDescription: 'Engineered for speed, reliability, and zero queue bottlenecks. Nexora Billing generates GST-compliant tax invoices in under 3 seconds. It features full barcode scanning support, thermal receipt formatting, wholesale multi-rate price lists, and integrated WhatsApp digital invoice delivery.',
    iconName: 'Receipt',
    features: [
      'Sub-3-Second Invoicing with Full Keyboard Shortcut Navigation',
      'Direct GST e-Invoicing & e-Way Bill API Integration',
      '2-Inch & 3-Inch Thermal Receipt and A4/A5 Laser Printing',
      'Instant Digital Invoice Dispatch via WhatsApp & SMS',
      'Offline-First Local Sync: Continues Billing When Internet Drops',
      'Automated GSTR-1, GSTR-3B & Daily Daybook Reconciliation'
    ],
    businessBenefits: [
      {
        title: 'Zero Counter Checkout Bottlenecks',
        description: 'High-speed keyboard navigation and rapid barcode lookup keep checkout queues moving briskly during rush hours.'
      },
      {
        title: '100% Statutory GST Accuracy',
        description: 'Automatic calculation of CGST, SGST, IGST, and cess eliminates manual billing errors and penalties.'
      },
      {
        title: 'Paperless Digital Invoices',
        description: 'Save printing paper and ink costs by offering customers eco-friendly WhatsApp and SMS invoice receipts.'
      },
      {
        title: 'Uninterrupted Offline Operations',
        description: 'Keep processing customer sales even during local network outages; data synchronizes automatically upon reconnect.'
      }
    ],
    techStack: ['React', 'Electron', 'SQLite / Cloud PostgreSQL', 'Node.js', 'Thermal ESC/POS Driver'],
    idealFor: [
      'Supermarkets, Departmental & Grocery Outlets',
      'Textile, Apparel & Footwear Showrooms',
      'Hardware, Electrical & Sanitaryware Wholesalers',
      'Automobile Spare Parts & Service Centers'
    ],
    deliverables: [
      'Billing software installed for counter POS and desktop workstations',
      'Thermal printer, barcode scanner, and cash drawer configuration',
      'Item catalog import with barcode, HSN code, and tax rate setup',
      'Staff cashier training and opening cash balance workflow'
    ],
    faqs: [
      {
        question: 'Will this software work with our existing thermal printer and barcode scanner?',
        answer: 'Yes. Nexora Billing is engineered to support all standard USB, Bluetooth, and LAN ESC/POS thermal printers (TVS, Epson, Posiflex) and laser barcode scanners out of the box.'
      },
      {
        question: 'What happens if our shop loses internet connection?',
        answer: 'Our software incorporates an offline-first local database cache. Cashiers can continue billing continuously, and all bills sync automatically to the cloud once connection resumes.'
      }
    ]
  },
  {
    id: 'inventory',
    title: 'Inventory Management Software',
    slug: 'inventory-management',
    category: 'Software & SaaS',
    shortDescription: 'Real-time stock auditing, barcode scanning, batch/expiry alerts, and automated reorder triggers.',
    fullDescription: 'Stop tying up valuable working capital in slow-moving stock or losing revenue to stockouts. Nexora Inventory provides real-time stock auditing across multiple warehouses, batch and lot tracking with expiry dates, barcode labeling, automated purchase order triggers, and accurate weighted-average cost valuation.',
    iconName: 'PackageCheck',
    features: [
      'Multi-Warehouse & Rack/Bin Storage Location Tracking',
      'Batch Number, Serial Number & Expiry Date Management',
      'Automated Minimum Stock Alerts & Supplier Purchase Orders',
      'Custom Barcode & QR Code Label Generation & Printing',
      'Inter-Warehouse Stock Transfer & In-Transit Tracking',
      'Real-Time Stock Valuation (FIFO & Weighted Average Costing)'
    ],
    businessBenefits: [
      {
        title: 'Zero Dead Capital in Excess Stock',
        description: 'Data-driven minimum reorder points prevent over-purchasing and preserve valuable liquidity.'
      },
      {
        title: 'Eliminate Expiry Wastage',
        description: 'First-Expiry-First-Out (FEFO) alerts safeguard against costly product expirations in FMCG and pharmaceuticals.'
      },
      {
        title: 'Prevent Pilferage & Discrepancies',
        description: 'Regular physical stock audit modules compare system counts with physical shelf inventory instantaneously.'
      },
      {
        title: 'Streamlined Supplier Procurement',
        description: 'Generate purchase orders with a single click whenever stock drops below minimum threshold levels.'
      }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Zebra / TSC Printer Drivers'],
    idealFor: [
      'Pharmaceutical Distributors & Medical Stockists',
      'FMCG & Packaged Foods Distribution Hubs',
      'Industrial Spare Parts & Hardware Stockists',
      'Central Warehouses for Multi-Outlet Retail Chains'
    ],
    deliverables: [
      'Configured cloud inventory management dashboard',
      'Custom barcode template formats tailored to your label sizes',
      'Initial stock upload and bin location mapping',
      'Inventory audit procedures and operational guidelines'
    ],
    faqs: [
      {
        question: 'Can we print our own custom barcode labels for unbranded items?',
        answer: 'Yes, Nexora Inventory includes a built-in barcode/QR designer compatible with standard thermal label printers (TVS, TSC, Zebra).'
      },
      {
        question: 'Does the software alert us before items reach their expiry date?',
        answer: 'Yes, you can configure customizable advance notice periods (e.g., 30, 60, or 90 days) to clear near-expiry stock through discount promotions.'
      }
    ]
  },
  {
    id: 'lms',
    title: 'LMS (Learning Management System)',
    slug: 'lms-software',
    category: 'Software & SaaS',
    shortDescription: 'Digital education and training portals for colleges, coaching institutes, and corporate skill academies.',
    fullDescription: 'Empower educators and corporate trainers with a modern, scalable learning ecosystem. Nexora EduLMS provides secure DRM-protected video streaming, structured chapter curricula, online timed examinations, automated grading, instant PDF certificate generation with QR verification, and student fee management.',
    iconName: 'GraduationCap',
    features: [
      'Structured Course Curriculum & Video Chapter Builder',
      'Piracy-Resistant DRM-Protected Video Streaming',
      'Timed Online Quizzes & Objective/Subjective Question Banks',
      'Automated Verified Certificates with Unique QR Codes',
      'Student Attendance, Watch Time Analytics & Progress Reports',
      'Integrated Student Fee Collection via UPI & Net Banking'
    ],
    businessBenefits: [
      {
        title: 'Monetize Knowledge & Expand Reach',
        description: 'Scale beyond physical classroom limits and enroll students statewide without additional real estate costs.'
      },
      {
        title: 'Protect Proprietary Video Content',
        description: 'Dynamic watermarking with student phone/email stamps prevents illegal screen recording and piracy.'
      },
      {
        title: 'Automated Evaluation Overhead',
        description: 'Automated quiz scoring and grade book generation save hundreds of instructor hours every semester.'
      },
      {
        title: 'Streamlined Student Fee Recovery',
        description: 'Automated fee due notifications and instant digital receipts reduce administrative collection efforts.'
      }
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS S3 / CloudFront CDN', 'FFmpeg'],
    idealFor: [
      'Engineering & Arts Colleges in Tamil Nadu',
      'Competitive Exam Coaching Centers (TNPSC, NEET, JEE, Banking)',
      'Vocational Skill Training & IT Institutes',
      'Corporate Employee Onboarding & Compliance Training'
    ],
    deliverables: [
      'Branded digital academy web portal with mobile responsiveness',
      'Video transcoding and DRM cloud delivery pipeline setup',
      'Online payment gateway connection for course enrollments',
      'Faculty training documentation for uploading courses and tests'
    ],
    faqs: [
      {
        question: 'How is our course video content protected from piracy?',
        answer: 'We use encrypted HLS chunk streaming along with dynamic foreground watermarking showing the logged-in student’s name and mobile number, deterring unauthorized distribution.'
      },
      {
        question: 'Can students take tests on mobile phones?',
        answer: 'Yes, the student testing portal is fully responsive and features full-screen lock and auto-submit timers to preserve test integrity.'
      }
    ]
  },
  {
    id: 'hrms',
    title: 'HRMS (Human Resource Management)',
    slug: 'hrms-software',
    category: 'Software & SaaS',
    shortDescription: 'Streamline attendance, biometric device sync, automated payroll, PF/ESI deductions, and employee self-service.',
    fullDescription: 'Eliminate end-of-month payroll anxiety and attendance disputes. Nexora HRMS centralizes biometric punch logs, mobile GPS check-ins for field staff, leave approvals, automated salary computations with PF/ESI/TDS/PT statutory deductions, and automated digital payslip delivery.',
    iconName: 'Briefcase',
    features: [
      'Real-Time Biometric Machine (eSSL, Matrix) & Mobile GPS Punch-In',
      'One-Click Automated Monthly Payroll & Salary Slip Generation',
      'Indian Statutory Compliance: Automated PF, ESI, TDS & PT Calculation',
      'Employee Self-Service (ESS) Portal for Leave Requests & Tax Proofs',
      'Configurable Shift Rosters, Overtime Rules & Holiday Calendars',
      'Digital Employee Records Vault & Asset Allocation Tracking'
    ],
    businessBenefits: [
      {
        title: 'Zero Payroll Calculation Errors',
        description: 'Automated formula calculations end manual Excel formula slips and discrepancies in statutory deductions.'
      },
      {
        title: 'Accurate Attendance & Field Tracking',
        description: 'Geo-fenced mobile check-ins provide tamper-proof attendance for traveling sales reps and site supervisors.'
      },
      {
        title: '100% Indian Labor Law Compliance',
        description: 'Pre-formatted statutory registers and reports ready for PF return filing and labor inspector audits.'
      },
      {
        title: 'Reduced HR Administrative Load',
        description: 'Employees view leave balances and download password-protected PDF salary slips independently.'
      }
    ],
    techStack: ['React', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'Biometric ZK/eSSL SDK'],
    idealFor: [
      'Textile Mills & Manufacturing Plants with Multi-Shift Rosters',
      'IT & Software Development Companies',
      'Hospital & Healthcare Staff Management',
      'Security Agencies & Multi-Location Facility Providers'
    ],
    deliverables: [
      'Configured cloud HRMS suite with company organizational hierarchy',
      'Biometric machine network sync service integration',
      'Salary structure templates (Basic, HRA, DA, Allowances, PF, ESI)',
      'HR staff training and employee mobile onboarding guide'
    ],
    faqs: [
      {
        question: 'Does the HRMS connect directly to our biometric fingerprint/face machines?',
        answer: 'Yes. We deploy an automated background sync utility that pulls punch logs from eSSL, ZKTeco, and Matrix devices directly into cloud attendance records.'
      },
      {
        question: 'Can we configure custom salary structures for different staff grades?',
        answer: 'Yes. You can define distinct salary templates for executive, technical, operational, and contract staff with customizable allowance components and statutory rules.'
      }
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    slug: 'custom-software',
    category: 'Software & SaaS',
    shortDescription: 'Bespoke enterprise software, internal tools, and operational workflows tailored to your exact business rules.',
    fullDescription: 'When off-the-shelf software forces your business to compromise on operational nuances, custom engineering is the answer. We architect tailored web systems, customer portals, operational engines, and workflow automation platforms built on clean TypeScript code, scalable databases, and enterprise security.',
    iconName: 'Code2',
    features: [
      'Tailored Architecture Designed Around Your Proprietary Workflows',
      'API-First Microservices & Secure Third-Party System Integrations',
      'Legacy System Modernization & Zero-Downtime Data Migration',
      'Granular Role-Based Access Control & Action Audit Trails',
      'Enterprise Cloud Infrastructure Deployment (AWS, DigitalOcean)',
      '100% Full Source Code Ownership with Clean Documentation'
    ],
    businessBenefits: [
      {
        title: 'Absolute Competitive Advantage',
        description: 'Operate on software built precisely around your operational secrets rather than generic off-the-shelf tools.'
      },
      {
        title: 'Zero Recurring Per-User SaaS Fees',
        description: 'Eliminate spiraling monthly per-seat licensing fees with proprietary software owned entirely by your company.'
      },
      {
        title: 'Seamless Workflow Fit',
        description: 'No unnecessary features or awkward workarounds—every single screen and button serves your exact business purpose.'
      },
      {
        title: 'Complete Data Sovereignty',
        description: 'Maintain strict control and ownership over proprietary customer databases and financial records.'
      }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Python / Django', 'PostgreSQL', 'Docker', 'AWS'],
    idealFor: [
      'Enterprises with Unique Operational Workflows',
      'Companies Modernizing Outdated Visual Basic / Desktop Software',
      'Logistics & Fleet Fleet Management Networks',
      'FinTech, Microfinance & Loan Management Portals'
    ],
    deliverables: [
      'Complete production application deployment with full source code repository',
      'Architectural database schema documentation & API specifications',
      'User administration manuals and video walkthroughs',
      'Dedicated post-deployment technical support and maintenance SLA'
    ],
    faqs: [
      {
        question: 'Do we own the full source code and intellectual property (IP)?',
        answer: 'Yes, 100%. Sree Nexora Tech transfers full intellectual property and source code rights to your organization upon project completion.'
      },
      {
        question: 'How do you ensure data security in custom applications?',
        answer: 'We implement industry best practices including AES-256 database encryption at rest, TLS in transit, SQL injection prevention, strict role boundaries, and regular penetration checks.'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    category: 'Automation & Marketing',
    shortDescription: 'Data-driven SEO, Google Ads, local Tamil Nadu search ranking, and ROI-focused lead generation campaigns.',
    fullDescription: 'Generate a dependable stream of qualified customer leads. Our performance marketing division executes data-backed digital campaigns: dominating local Tamil Nadu search results for commercial intent keywords, running targeted Google Search & Display PPC ads, and building high-converting B2B social media funnels.',
    iconName: 'Megaphone',
    features: [
      'Technical SEO & Tamil Nadu Local City Map Pack Dominance',
      'High-Intent Google Search (PPC) & Remarketing Campaigns',
      'Meta (Facebook & Instagram) Targeted Lead Generation Funnels',
      'B2B LinkedIn Outreach & Thought Leadership Content Strategy',
      'Conversion Rate Optimization (CRO) & A/B Tested Landing Pages',
      'Transparent Monthly ROI Reports with GA4 & Call Tracking'
    ],
    businessBenefits: [
      {
        title: 'Consistent Inbound Qualified Inquiries',
        description: 'Capture active buyers searching for your specific products and services on Google every single day.'
      },
      {
        title: 'Dominant Local Brand Authority',
        description: 'Rank at the top of Google Maps and local search queries across Chennai, Coimbatore, Madurai, and Trichy.'
      },
      {
        title: 'Measurable Return on Ad Spend (ROAS)',
        description: 'Track exact cost-per-lead and cost-per-acquisition with full attribution from click to closed sale.'
      },
      {
        title: 'Sustainable Long-Term Organic Traffic',
        description: 'White-hat technical SEO assets deliver compounding free organic traffic month after month.'
      }
    ],
    techStack: ['Google Ads', 'Google Analytics 4', 'Meta Ads Manager', 'SEMrush', 'Search Console', 'Tag Manager'],
    idealFor: [
      'B2B Industrial Manufacturers seeking export and domestic buyers',
      'Healthcare Clinics, Multi-Specialty Hospitals & Diagnostic Centers',
      'Colleges, Universities & Professional Coaching Academies',
      'Real Estate Builders & Commercial Developers'
    ],
    deliverables: [
      'Comprehensive competitor & keyword search volume audit',
      'Configured Google Ads & Meta campaign accounts with conversion tracking',
      'High-converting landing page optimization recommendations',
      'Bi-weekly performance reviews and transparent monthly analytics reports'
    ],
    faqs: [
      {
        question: 'How quickly can we expect leads from digital marketing?',
        answer: 'Google Ads and Meta PPC campaigns begin driving targeted inquiries within 48 to 72 hours of launch. Organic SEO typically establishes compound ranking gains over 60 to 90 days.'
      },
      {
        question: 'Do you provide localized regional marketing in Tamil Nadu?',
        answer: 'Yes. We specialize in localized regional SEO, geo-targeted Google Ads across specific industrial clusters (e.g., Coimbatore pumps, Tirupur knitwear, Chennai auto ancillaries), and regional language ad copy.'
      }
    ]
  }
];
