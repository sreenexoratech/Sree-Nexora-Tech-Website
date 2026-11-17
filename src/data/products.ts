import type { ProductItem } from '../types';

/**
 * Centralized Product Configuration for Sree Nexora Tech Pvt Ltd.
 *
 * NOTE ON LIVE DEMOS:
 * - Real live demo sandbox URLs can be configured via environment variables
 *   or set directly on each product entry below.
 * - When demoUrl is null or empty, the UI automatically displays
 *   "Demo Coming Soon" or provides a direct "Enquire for Demo" CTA.
 * - Do NOT hardcode fabricated demo links.
 */

// Optional configurable demo endpoints (defaults to null if not configured)
const DEMO_CONFIG = {
  billing: (import.meta as any).env?.VITE_DEMO_BILLING_URL || null,
  erp: (import.meta as any).env?.VITE_DEMO_ERP_URL || null,
  crm: (import.meta as any).env?.VITE_DEMO_CRM_URL || null,
  inventory: (import.meta as any).env?.VITE_DEMO_INVENTORY_URL || null,
  hrms: (import.meta as any).env?.VITE_DEMO_HRMS_URL || null,
  lms: (import.meta as any).env?.VITE_DEMO_LMS_URL || null
};

export const productsData: ProductItem[] = [
  {
    id: 'nexora-billing',
    slug: 'billing-software',
    name: 'Nexora Billing & POS',
    tagline: 'Lightning-Fast GST Billing & Retail Invoicing Suite',
    category: 'Billing Software',
    badge: 'GST E-Invoice Ready',
    shortDescription:
      'Engineered for Indian retail outlets and wholesale distributors. Generate GST-compliant invoices in under 3 seconds with barcode scanning, thermal printing, and WhatsApp invoice dispatch.',
    fullDescription:
      'Nexora Billing & POS is a purpose-built retail and wholesale billing application engineered to eliminate checkout counter bottlenecks. It combines full keyboard shortcut navigation, instant barcode lookup, thermal receipt generation, and automated statutory tax computations (CGST, SGST, IGST) with direct WhatsApp bill dispatch and offline resilience.',
    features: [
      'Sub-3-second billing speed with full keyboard shortcut hotkeys',
      'Direct GST e-Invoicing & e-Way Bill government portal integration',
      '2-Inch & 3-Inch thermal receipt and A4/A5 laser printing formatting',
      'Instant paperless receipt dispatch via WhatsApp & SMS',
      'Dual online cloud sync & local SQLite offline cache capability',
      'Automated GSTR-1, GSTR-3B summary reports and daybook reconciliation'
    ],
    modules: [
      {
        name: 'Rapid Counter POS',
        description: 'High-velocity touch and keyboard billing screen with quick product search.',
        capabilities: ['Barcode Scanning', 'Multiple Payment Splits (UPI + Cash)', 'Instant Discounts', 'Hold & Resume Bills']
      },
      {
        name: 'GST Tax Engine',
        description: 'Automated statutory tax compliance for goods and services.',
        capabilities: ['HSN/SAC Directory', 'State-wise CGST/SGST/IGST calculation', 'e-Invoice QR Generation', 'Reverse Charge Mechanism (RCM)']
      },
      {
        name: 'Customer & Ledger Accounts',
        description: 'Track customer balances, credit limits, and outstanding payments.',
        capabilities: ['Credit Limit Alerts', 'Payment Receipt Vouchers', 'WhatsApp Statement Dispatch', 'Customer Purchase History']
      }
    ],
    specs: [
      { label: 'Platform', value: 'Desktop (Windows / macOS) & Web Cloud' },
      { label: 'Database', value: 'Cloud PostgreSQL with Local SQLite Cache' },
      { label: 'Printing', value: 'Thermal (ESC/POS 58mm/80mm) & Laser A4/A5' },
      { label: 'Compliance', value: '100% Indian GST & e-Invoicing Compliant' }
    ],
    demoUrl: DEMO_CONFIG.billing,
    hasLiveDemo: Boolean(DEMO_CONFIG.billing),
    screenshotUrl: 'billing-preview',
    status: 'Available',
    deploymentModels: ['Cloud Managed SaaS', 'On-Premise Desktop Installation'],
    targetIndustries: [
      'Supermarkets & Departmental Stores',
      'Textile & Garment Retailers',
      'Electrical, Hardware & Sanitaryware Wholesalers',
      'Automobile Spare Parts Outlets'
    ],
    faqs: [
      {
        question: 'Will Nexora Billing work if our broadband internet disconnects?',
        answer: 'Yes. Nexora Billing features an offline-first local database. Cashiers can continue scanning, printing bills, and collecting payments without interruption. All sales records sync to the cloud automatically once connectivity is restored.'
      },
      {
        question: 'Can we use our existing barcode scanner and thermal receipt printer?',
        answer: 'Yes. Our software communicates directly with standard USB, LAN, and Bluetooth thermal printers (TVS, Epson, Posiflex) and standard 1D/2D barcode scanners.'
      }
    ]
  },
  {
    id: 'nexora-erp',
    slug: 'erp-software',
    name: 'Nexora Cloud ERP',
    tagline: 'Unified Enterprise Operations & Supply Chain System',
    category: 'ERP Software',
    badge: 'Multi-Branch Engine',
    shortDescription:
      'All-in-one cloud platform connecting manufacturing work orders, multi-warehouse inventory, procurement, vendor accounts, and double-entry financial ledgers into a single command center.',
    fullDescription:
      'Nexora Cloud ERP breaks down operational silos across medium and large enterprises. Designed for Indian manufacturing and distribution industries, it synchronizes purchase orders, bill of materials (BOM), production cycles, multi-location stock transfers, and audited financial ledgers with comprehensive role-based access controls.',
    features: [
      'Multi-branch and multi-warehouse real-time operational dashboard',
      'Integrated double-entry statutory financial accounting ledger',
      'Production planning, Bill of Materials (BOM), and costing analysis',
      'Vendor procurement management with comparative quotation analysis',
      'Role-based granular access controls with tamper-proof audit trails',
      'Executive analytics on gross margins, operational overhead, and throughput'
    ],
    modules: [
      {
        name: 'Production & Manufacturing',
        description: 'Complete shop-floor visibility from raw material issuance to finished goods.',
        capabilities: ['Bill of Materials (BOM)', 'Job Work Order Tracking', 'Machine Downtime Logs', 'Batch Yield & Scrap Analysis']
      },
      {
        name: 'Supply Chain & Procurement',
        description: 'Streamlined vendor management and purchase workflows.',
        capabilities: ['Purchase Requisitions', 'Vendor Comparison Quotations', 'Goods Receipt Notes (GRN)', 'Three-Way Invoice Matching']
      },
      {
        name: 'Financial Accounting & Audit',
        description: 'Statutory accounting built for Indian regulatory standards.',
        capabilities: ['Trial Balance & Balance Sheet', 'Bank Reconciliation', 'Cost Center Allocation', 'TDS & GST Returns']
      }
    ],
    specs: [
      { label: 'Platform', value: 'Cloud Web Application (Responsive)' },
      { label: 'Deployment', value: 'Dedicated AWS VPC or Private Server' },
      { label: 'Security', value: 'AES-256 Encryption & Daily Automated Backups' },
      { label: 'Architecture', value: 'Microservices with PostgreSQL & Redis' }
    ],
    demoUrl: DEMO_CONFIG.erp,
    hasLiveDemo: Boolean(DEMO_CONFIG.erp),
    screenshotUrl: 'erp-preview',
    status: 'Enterprise Ready',
    deploymentModels: ['Dedicated AWS Cloud Instance', 'Private On-Premise Server'],
    targetIndustries: [
      'Textile & Spinning Mills in Tirupur/Coimbatore',
      'Automotive Ancillaries & Foundry Units',
      'Chemical & Agro-Processing Industries',
      'Commercial Wholesale Distributors'
    ],
    faqs: [
      {
        question: 'Can Nexora ERP be customized to match our proprietary manufacturing workflow?',
        answer: 'Yes. Our engineering team customizes production stages, batch nomenclature, custom fields, and approval hierarchies to match your exact factory operations.'
      },
      {
        question: 'How do you handle migration of legacy accounts and stock balances?',
        answer: 'We provide structured data templates and our database engineers assist with cleansing, mapping, and validating opening balances before cutover.'
      }
    ]
  },
  {
    id: 'nexora-crm',
    slug: 'crm-software',
    name: 'Nexora CRM Hub',
    tagline: 'Lead-to-Cash Pipeline & Customer Engagement System',
    category: 'CRM Software',
    badge: 'WhatsApp API Synced',
    shortDescription:
      'Empower your sales team to capture leads from web, WhatsApp, and ad campaigns into a visual drag-and-drop deal pipeline with automated follow-ups and performance metrics.',
    fullDescription:
      'Nexora CRM Hub consolidates incoming customer inquiries across every marketing channel into an organized, visual sales machine. Designed to stop lead leakage, it equips sales teams with automatic lead distribution, WhatsApp click-to-chat, scheduled follow-up reminders, quotation tracking, and conversion forecasting.',
    features: [
      'Multi-channel lead ingestion from Website forms, WhatsApp, and Meta Ads',
      'Visual drag-and-drop Kanban deal pipeline with custom milestone stages',
      'Automated lead assignment rules and instant WhatsApp auto-responders',
      'Detailed customer interaction history, call notes, and quotation PDFs',
      'Sales rep performance leaderboards, call activity logs, and conversion rates',
      'Strict role permissions and data masking preventing lead theft'
    ],
    modules: [
      {
        name: 'Lead Capture & Distribution',
        description: 'Instant lead ingestion from digital touchpoints with round-robin allocation.',
        capabilities: ['Webhook Ingestion', 'Round-Robin Assignment', 'Duplicate Detection', 'Instant WhatsApp Greeting']
      },
      {
        name: 'Deal Pipeline Management',
        description: 'Track deal progress through custom visual stages.',
        capabilities: ['Kanban Board View', 'Probability Weighting', 'Deal Value Aggregation', 'Expected Close Dates']
      },
      {
        name: 'Communications Hub',
        description: 'Unified customer interaction history.',
        capabilities: ['WhatsApp Cloud API Integration', 'Email Sync', 'Call Log Notes', 'Quotation Generator']
      }
    ],
    specs: [
      { label: 'Platform', value: 'Cloud Web Application & Mobile View' },
      { label: 'Integrations', value: 'WhatsApp Cloud API, Google Calendar, Email' },
      { label: 'Data Export', value: 'Encrypted Excel, CSV, PDF' },
      { label: 'Security', value: 'Granular Access Control & IP Whitelisting' }
    ],
    demoUrl: DEMO_CONFIG.crm,
    hasLiveDemo: Boolean(DEMO_CONFIG.crm),
    screenshotUrl: 'crm-preview',
    status: 'Available',
    deploymentModels: ['Managed Cloud SaaS', 'Dedicated Cloud Deployment'],
    targetIndustries: [
      'Real Estate Developers & Brokers',
      'B2B Machinery & Industrial Suppliers',
      'Education Consultancies & Admission Desks',
      'Financial & Corporate Advisory Services'
    ],
    faqs: [
      {
        question: 'Can sales representatives update customer notes from their mobile phones?',
        answer: 'Yes, the CRM interface is optimized for mobile touchscreens, allowing reps to log call notes, schedule follow-up dates, and chat via WhatsApp on the move.'
      },
      {
        question: 'Can managers restrict sales reps from exporting customer phone numbers?',
        answer: 'Yes. Administrators can disable customer export permissions and enable number masking to safeguard company proprietary contacts.'
      }
    ]
  },
  {
    id: 'nexora-inventory',
    slug: 'inventory-management',
    name: 'Nexora Inventory Manager',
    tagline: 'Multi-Warehouse Stock Control & Traceability Engine',
    category: 'Inventory Management',
    badge: 'Batch & Barcode Audit',
    shortDescription:
      'Real-time stock auditing across multiple godowns with barcode generation, batch tracking, expiry date alerts, and automated purchase reorder triggers.',
    fullDescription:
      'Nexora Inventory Manager safeguards working capital by eliminating stockouts and dead inventory. Engineered for high-throughput distribution hubs and multi-counter retail chains, it tracks item movements by rack, bin, batch, and serial number with automated low-stock supplier alerts and valuation reports.',
    features: [
      'Multi-warehouse and rack/bin storage location mapping',
      'Batch number, serial number, and expiry date traceability',
      'Automated minimum stock alerts and supplier purchase order generation',
      'Custom barcode & QR code label designer and thermal printer driver',
      'Inter-warehouse transfer notes with transit loss verification',
      'Real-time stock valuation using FIFO and Weighted Average Costing'
    ],
    modules: [
      {
        name: 'Warehouse & Bin Tracking',
        description: 'Precise visual location mapping of stock within warehouses.',
        capabilities: ['Aisle/Rack/Bin Tagging', 'Multi-Godown Support', 'Inter-Branch Transfers', 'Stock In-Transit Tracking']
      },
      {
        name: 'Batch & Expiry Control',
        description: 'Traceability for perishable and regulated goods.',
        capabilities: ['Batch Creation', 'First-Expiry-First-Out (FEFO)', 'Near-Expiry Discount Alerts', 'Recall Tracking']
      },
      {
        name: 'Stock Audits & Valuation',
        description: 'Discrepancy reconciliation and asset value accounting.',
        capabilities: ['Physical Count Reconciliation', 'FIFO / Weighted Avg Valuation', 'Stock Write-Off Logs', 'Barcode Stocktaking']
      }
    ],
    specs: [
      { label: 'Platform', value: 'Cloud Web & Handheld Scanner Compatible' },
      { label: 'Hardware', value: 'Thermal Barcode Printers (TVS, TSC, Zebra)' },
      { label: 'Valuation', value: 'FIFO & Moving Weighted Average' },
      { label: 'Speed', value: 'Real-Time Multi-Location Stock Sync' }
    ],
    demoUrl: DEMO_CONFIG.inventory,
    hasLiveDemo: Boolean(DEMO_CONFIG.inventory),
    screenshotUrl: 'inventory-preview',
    status: 'Available',
    deploymentModels: ['Cloud Managed SaaS', 'On-Premise Server Setup'],
    targetIndustries: [
      'Pharmaceutical Distributors & Stockists',
      'FMCG & Packaged Foods Hubs',
      'Industrial Hardware & Raw Material Suppliers',
      'Central Warehouses for Retail Chains'
    ],
    faqs: [
      {
        question: 'Does the software alert us before items reach their expiry date?',
        answer: 'Yes, you can configure customizable advance notice thresholds (e.g. 30, 60, or 90 days) so warehouse managers can liquidate stock before expiry.'
      },
      {
        question: 'Can we generate custom barcode labels for unbranded items?',
        answer: 'Yes. Nexora Inventory includes a built-in barcode/QR designer compatible with standard thermal label rolls (50x25mm, 38x25mm, etc.).'
      }
    ]
  },
  {
    id: 'nexora-hrms',
    slug: 'hrms-software',
    name: 'Nexora HRMS & Payroll',
    tagline: 'Modern Attendance, Payroll & Employee Self-Service',
    category: 'HRMS',
    badge: 'PF & ESI Statutory Compliant',
    shortDescription:
      'Streamline attendance, biometric device integration, automated monthly payroll, PF/ESI/TDS tax deductions, and employee self-service mobile portals.',
    fullDescription:
      'Nexora HRMS takes the friction out of human resource administration. It unifies attendance from biometric machines and geo-fenced mobile check-ins, automates monthly salary disbursements with statutory Indian tax deductions, manages leave approvals, and gives employees self-service access to salary slips.',
    features: [
      'Biometric machine network sync (eSSL, ZKTeco) & mobile GPS check-in',
      'One-click automated monthly payroll computation and PDF payslip generation',
      'Full Indian statutory compliance: PF, ESI, Professional Tax (PT), and TDS',
      'Employee Self-Service (ESS) portal for leave requests and tax declaration',
      'Configurable multi-shift rosters, overtime formulas, and holiday lists',
      'Digital employee document vault and company asset allocation records'
    ],
    modules: [
      {
        name: 'Attendance & Biometrics',
        description: 'Multi-source attendance capture with shift automation.',
        capabilities: ['Biometric Punch Sync', 'Geo-Fenced Mobile Check-in', 'Overtime Computation', 'Late Coming / Half-Day Rules']
      },
      {
        name: 'Payroll & Statutory Tax',
        description: 'Accurate, compliant salary calculation engine.',
        capabilities: ['PF & ESI Computation', 'Professional Tax (PT) Slabs', 'TDS Withholding', 'Bank Salary Transfer Excel Export']
      },
      {
        name: 'Employee Self-Service',
        description: 'Empowers staff to manage requests independently.',
        capabilities: ['Leave Applications', 'Password-Protected Payslips', 'Expense Reimbursement', 'Company Policies']
      }
    ],
    specs: [
      { label: 'Platform', value: 'Cloud Web & Mobile-Friendly Portal' },
      { label: 'Compliance', value: 'Indian Labor Laws, PF, ESI, PT & TDS' },
      { label: 'Hardware Sync', value: 'eSSL, ZKTeco, Matrix Biometric Devices' },
      { label: 'Security', value: 'Strict Role Separation & Audit Trail' }
    ],
    demoUrl: DEMO_CONFIG.hrms,
    hasLiveDemo: Boolean(DEMO_CONFIG.hrms),
    screenshotUrl: 'hrms-preview',
    status: 'Enterprise Ready',
    deploymentModels: ['Cloud Managed SaaS', 'Private Cloud Dedicated Instance'],
    targetIndustries: [
      'Manufacturing & Textile Mills with Shift Rosters',
      'IT & Professional Services Firms',
      'Hospitals, Clinics & Healthcare Staffing',
      'Security & Facility Management Agencies'
    ],
    faqs: [
      {
        question: 'Does the software automatically download punches from biometric machines?',
        answer: 'Yes. Our automated background synchronization service polls LAN biometric machines and updates attendance logs in real time.'
      },
      {
        question: 'Can we define custom salary structures for different staff grades?',
        answer: 'Yes. You can configure distinct salary structures for executive, technical, operational, and contract workers with customized allowance and deduction components.'
      }
    ]
  },
  {
    id: 'nexora-lms',
    slug: 'lms-software',
    name: 'Nexora EduLMS Academy',
    tagline: 'Interactive Learning Management & Online Academy',
    category: 'LMS',
    badge: 'DRM Video Protected',
    shortDescription:
      'Digital education platform for colleges, coaching institutes, and corporate training. Host recorded video courses, timed exams, automated grading, and verified certificates.',
    fullDescription:
      'Nexora EduLMS enables educational institutions and corporate trainers to deliver world-class digital learning. Featuring DRM-protected video streaming with dynamic student watermarking, online timed assessments, automated grading, instant verified certificate generation, and integrated fee collection via UPI.',
    features: [
      'Structured course builder with chapter videos, PDF notes, and quizzes',
      'Piracy-resistant DRM video streaming with dynamic learner watermarks',
      'Timed online assessments with objective and subjective question banks',
      'Automated branded completion certificates with verifiable QR codes',
      'Student attendance, watch-time tracking, and progress analytics',
      'Integrated student course fee collection via UPI and Net Banking'
    ],
    modules: [
      {
        name: 'Course & Content Builder',
        description: 'Rich multimedia curriculum organization.',
        capabilities: ['HLS Video Streaming', 'Downloadable Resource Vault', 'Drip-Content Scheduling', 'Discussion Forums']
      },
      {
        name: 'Assessment & Exam Engine',
        description: 'Secure online testing with instant evaluation.',
        capabilities: ['Timed Question Banks', 'Automated Quiz Grading', 'Negative Marking Rules', 'Leaderboards & Rankings']
      },
      {
        name: 'Student Portal & Fees',
        description: 'Self-paced learning with payment integration.',
        capabilities: ['UPI Course Purchase', 'Progress Tracker', 'QR-Verified Certificates', 'Mobile Responsive Player']
      }
    ],
    specs: [
      { label: 'Platform', value: 'Cloud Web Application (PWA Ready)' },
      { label: 'Streaming', value: 'Adaptive Bitrate HLS CloudFront CDN' },
      { label: 'Content Security', value: 'Dynamic Foreground Watermarking & Token Auth' },
      { label: 'Certification', value: 'Automated Cryptographic QR Verification' }
    ],
    demoUrl: DEMO_CONFIG.lms,
    hasLiveDemo: Boolean(DEMO_CONFIG.lms),
    screenshotUrl: 'lms-preview',
    status: 'Available',
    deploymentModels: ['Managed Cloud SaaS', 'White-Label Dedicated Portal'],
    targetIndustries: [
      'Colleges, Universities & Higher Ed Institutes',
      'Competitive Exam Coaching Centers (NEET, JEE, TNPSC, Banking)',
      'Vocational Skill Training & IT Bootcamps',
      'Corporate Employee Onboarding & Compliance'
    ],
    faqs: [
      {
        question: 'How does Nexora EduLMS protect our lecture videos from piracy?',
        answer: 'We deploy encrypted HLS chunk streaming along with continuous dynamic foreground watermarking showing the student’s registered mobile number and name across the screen.'
      },
      {
        question: 'Can students take examinations on their mobile phones?',
        answer: 'Yes. The testing environment runs seamlessly on mobile browsers with auto-save and submission timers.'
      }
    ]
  }
];

/**
 * Helper to easily fetch a product by its slug
 */
export const getProductBySlug = (slug: string): ProductItem | undefined => {
  return productsData.find((p) => p.slug === slug);
};

/**
 * Helper to retrieve all product categories
 */
export const productCategories = [
  'All Products',
  'CRM Software',
  'ERP Software',
  'Billing Software',
  'Inventory Management',
  'HRMS',
  'LMS'
] as const;
