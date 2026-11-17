import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { ContactCTA } from '../components/common/ContactCTA';
import { TechBackground } from '../components/common/TechBackground';
import { companyData } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { getOrganizationSchema, getBreadcrumbSchema } from '../lib/schema';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import {
  Compass,
  Sparkles,
  Shield,
  Layers,
  Code2,
  Cpu,
  CheckCircle2,
  Users,
  Target,
  Zap,
  ArrowRight,
  Lock
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  // Our Core Values
  const coreValues = [
    {
      title: 'Engineering Rigor & Clean Code',
      icon: <Code2 className="w-5 h-5 text-[#00C8FF]" />,
      description:
        'We adhere to strict type safety, modular component architecture, and automated testing. We build clean systems designed to scale gracefully without accumulating crippling technical debt.'
    },
    {
      title: 'Radical Transparency & Honest Timelines',
      icon: <Shield className="w-5 h-5 text-[#258BFF]" />,
      description:
        'No deceptive marketing jargon or unrealistic promises. We provide granular project scopes, transparent milestone schedules, and realistic delivery dates with continuous client communication.'
    },
    {
      title: '100% Client Code & IP Ownership',
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      description:
        'We believe in absolute intellectual property freedom. Every custom software project is handed over with full source code repository ownership, database schemas, and documentation with zero vendor lock-in.'
    },
    {
      title: 'Regional Business Grounding',
      icon: <Target className="w-5 h-5 text-[#00C8FF]" />,
      description:
        'We understand the operational nuances of Indian enterprises—from statutory GST e-invoicing and multi-location warehouses to offline network resiliency and regional buyer preferences in Tamil Nadu.'
    }
  ];

  // What We Do (5 Pillars)
  const whatWeDoPillars = [
    {
      title: 'Custom Software Development',
      desc: 'Bespoke web platforms, client portals, internal automation systems, and microservices tailored to proprietary business logic.'
    },
    {
      title: 'Cloud ERP & CRM Systems',
      desc: 'Centralized operational backbones linking lead tracking, manufacturing, purchase orders, inventory, and statutory double-entry accounting.'
    },
    {
      title: 'High-Speed Web & E-Commerce',
      desc: 'Blazing-fast responsive websites and direct-to-consumer digital storefronts integrated with Razorpay, Cashfree, and logistics APIs.'
    },
    {
      title: 'Billing & Inventory Automation',
      desc: 'Sub-3-second POS checkout software with GST e-Invoicing, thermal printing, barcode auditing, and batch/expiry tracking.'
    },
    {
      title: 'ROI-Driven Digital Marketing',
      desc: 'Technical SEO, Tamil Nadu local city search dominance, and high-conversion Google Ads and Meta PPC lead funnels.'
    }
  ];

  // Why Choose Us
  const whyChooseUsPoints = [
    {
      title: 'Direct Access to Senior Engineers',
      desc: 'Communicate directly with the solutions architects and developers building your platform, eliminating frustrating communication layers.'
    },
    {
      title: 'Statutory GST & India Compliance',
      desc: 'Pre-engineered compliance engines for CGST/SGST/IGST, automated e-Invoicing, e-Way bills, GSTR registers, and PF/ESI payroll deductions.'
    },
    {
      title: 'Sub-Second Web & System Performance',
      desc: 'Optimized server-side rendering, edge caching, and lightweight assets ensuring instant page loads even on constrained mobile connections.'
    },
    {
      title: 'Offline-First Local Sync Architecture',
      desc: 'Our billing and inventory systems are resilient to internet drops, allowing operations to continue locally without stoppage.'
    },
    {
      title: 'Transparent Milestones & Fixed Pricing',
      desc: 'Clear, milestone-based development contracts with no surprise charges or hidden per-user licensing fees.'
    },
    {
      title: 'Dedicated Regional Support across Tamil Nadu',
      desc: 'Swift SLA response times, direct phone helpline, WhatsApp engineer chat, and reliable long-term AMC support.'
    }
  ];

  // Technology Expertise Stack
  const techCategories = [
    {
      category: 'Frontend & UI Frameworks',
      skills: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Vite']
    },
    {
      category: 'Backend & Microservices',
      skills: ['Node.js', 'NestJS', 'Express.js', 'Python / Django', 'REST & GraphQL APIs', 'WebSockets']
    },
    {
      category: 'Databases & In-Memory Stores',
      skills: ['PostgreSQL', 'Redis', 'SQLite (Offline Cache)', 'MongoDB', 'Supabase', 'Cloud SQL']
    },
    {
      category: 'Cloud, Infrastructure & DevOps',
      skills: ['AWS (EC2, S3, RDS)', 'Docker', 'Vercel', 'Cloudflare Edge CDN', 'Linux Nginx', 'CI/CD Pipelines']
    },
    {
      category: 'POS, Hardware & API Ecosystems',
      skills: ['Thermal ESC/POS Drivers', 'Barcode / QR SDKs', 'Razorpay & Cashfree', 'WhatsApp Cloud API', 'Biometric ZK/eSSL SDKs']
    },
    {
      category: 'Digital Growth & Analytics',
      skills: ['Google Ads PPC', 'Google Analytics 4', 'Meta Ads Manager', 'SEMrush', 'Search Console', 'Schema.org JSON-LD']
    }
  ];

  return (
    <div className="relative pt-8 pb-20 overflow-hidden bg-[#03050A]">
      <SEOHead
        title="About Nexora | Engineering Rigor &amp; Digital Transformation"
        description="Learn about Sree Nexora Tech Pvt Ltd: our corporate mission, values, engineering philosophy, and technology capabilities serving Tamil Nadu and Pan-India."
        keywords="About Sree Nexora Tech, software engineering company Tamil Nadu, IT services mission, enterprise software architects India, custom software developers"
        canonicalPath="/about"
        jsonLd={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About Nexora', url: '/about' }
          ])
        ]}
      />

      {/* Technology Background Visual */}
      <TechBackground />

      {/* ========================================================
          PAGE HEADER
         ======================================================== */}
      <ScrollReveal direction="up" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#070D18]/90 border border-[#00C8FF]/35 text-[#00C8FF] shadow-[0_0_20px_rgba(0,200,255,0.2)] backdrop-blur-md">
          <Compass className="w-3.5 h-3.5 text-[#00C8FF]" />
          <span>ABOUT SREE NEXORA TECH</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Engineering Reliable Technology for the{' '}
          <span className="bg-gradient-to-r from-[#258BFF] via-[#00C8FF] to-[#1264FF] bg-clip-text text-transparent">
            Modern Business Era
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#AAB7C8] max-w-3xl mx-auto leading-relaxed">
          <strong className="text-[#F8FAFC] font-semibold">{companyData.legalName}</strong> is an
          IT services, software engineering, SaaS, digital marketing, and business automation company
          headquartered in Tamil Nadu, India.
        </p>
      </ScrollReveal>

      {/* ========================================================
          WHO WE ARE SECTION
         ======================================================== */}
      <ScrollReveal direction="up" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-[22px] bg-[#070D18]/90 border border-[#258BFF]/25 backdrop-blur-2xl relative overflow-hidden shadow-[0_20px_50px_rgba(3,5,10,0.95)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00C8FF]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#00C8FF] uppercase mb-3">
              <Users className="w-4 h-4" />
              <span>WHO WE ARE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-6">
              A Dedicated Team of Software Engineers, Architects &amp; Growth Specialists
            </h2>
            <div className="space-y-4 text-[#AAB7C8] text-sm sm:text-base leading-relaxed">
              <p>
                Sree Nexora Tech Pvt Ltd was founded with a singular purpose: to deliver dependable,
                enterprise-grade software engineering and digital transformation to organizations across
                Tamil Nadu and Pan-India without the bureaucratic bloat or inflated overhead of legacy IT consultancies.
              </p>
              <p>
                We recognize that modern businesses cannot afford fragile off-the-shelf software,
                sluggish websites, or disconnected spreadsheets that choke daily operations. Whether
                engineering a multi-branch cloud ERP system, automating retail billing with GST
                compliance, crafting an educational LMS, or executing high-intent digital marketing
                campaigns, we build solutions centered on performance, uptime, and genuine business ROI.
              </p>
              <p>
                Operating with direct client accountability from Tamil Nadu, we serve industrial
                manufacturers, retail chains, healthcare providers, educational institutions, and
                emerging enterprises seeking a high-trust technical partner.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ========================================================
          OUR MISSION & OUR VISION
         ======================================================== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-10">
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <StaggerItem>
            <div className="p-8 sm:p-10 rounded-[20px] bg-[#070D18]/90 border border-[#258BFF]/25 hover:border-[#00C8FF]/50 transition-all duration-300 backdrop-blur-xl shadow-[0_12px_35px_rgba(3,5,10,0.85)] hover:shadow-[0_20px_50px_rgba(0,200,255,0.18)] h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#1264FF]/20 border border-[#00C8FF]/40 text-[#00C8FF] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,200,255,0.25)]">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#00C8FF] uppercase">
                OUR STRATEGIC COMMITMENT
              </span>
              <h3 className="text-2xl font-bold text-[#F8FAFC] mt-1 mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-[#AAB7C8] leading-relaxed">
                To empower commercial enterprises, MSMEs, and educational institutions with robust,
                transparent, and cost-effective digital technology. We eliminate operational bottlenecks
                through clean software engineering, ensuring our clients achieve sustainable operational
                efficiency and decisive market leadership.
              </p>
            </div>
          </StaggerItem>

          {/* Vision Card */}
          <StaggerItem>
            <div className="p-8 sm:p-10 rounded-[20px] bg-[#070D18]/90 border border-[#258BFF]/25 hover:border-[#00C8FF]/50 transition-all duration-300 backdrop-blur-xl shadow-[0_12px_35px_rgba(3,5,10,0.85)] hover:shadow-[0_20px_50px_rgba(0,200,255,0.18)] h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#1264FF]/20 border border-[#00C8FF]/40 text-[#00C8FF] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,200,255,0.25)]">
                <Sparkles className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#00C8FF] uppercase">
                OUR LONG-TERM HORIZON
              </span>
              <h3 className="text-2xl font-bold text-[#F8FAFC] mt-1 mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base text-[#AAB7C8] leading-relaxed">
                To be recognized as one of India's most dependable and technically proficient software
                engineering companies, benchmarked by the speed of our systems, the integrity of our code,
                and the real-world operational success of the businesses we serve.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* ========================================================
          OUR VALUES SECTION
         ======================================================== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-10">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="OUR CORE PRINCIPLES"
            badgeIcon={<Shield className="w-3.5 h-3.5 text-[#00C8FF]" />}
            title="The Values That Guide Every Line of Code We Write"
            highlightedWord="Values"
            subtitle="We operate on technical honesty, direct accountability, and a profound respect for our clients' business continuity."
            align="center"
          />
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {coreValues.map((value, idx) => (
            <StaggerItem key={idx}>
              <div
                className="p-8 rounded-[18px] bg-[#070D18]/90 border border-[#258BFF]/25 hover:border-[#00C8FF]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(3,5,10,0.8)] h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A1424] border border-[#258BFF]/30 flex items-center justify-center mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-xs sm:text-sm text-[#AAB7C8] leading-relaxed">{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* ========================================================
          WHAT WE DO SECTION (5 Pillars)
         ======================================================== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-10">
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 rounded-[22px] bg-[#070D18]/90 border border-[#258BFF]/25 backdrop-blur-xl">
            <SectionHeading
              badge="WHAT WE DO"
              badgeIcon={<Layers className="w-3.5 h-3.5 text-[#00C8FF]" />}
              title="Comprehensive Technology Verticals Under One Roof"
              highlightedWord="Technology Verticals"
              subtitle="From single-page web experiences to full-scale enterprise ERP rollouts, explore our key operational domains."
              align="center"
            />

            <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatWeDoPillars.map((pillar, i) => (
                <StaggerItem key={i}>
                  <div
                    className="p-6 rounded-[18px] bg-[#03050A]/90 border border-[#258BFF]/20 hover:border-[#00C8FF]/40 transition-colors h-full"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1264FF]/20 border border-[#00C8FF]/30 text-[#00C8FF] flex items-center justify-center font-mono font-bold text-xs mb-4">
                      0{i + 1}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-[#AAB7C8] leading-relaxed">{pillar.desc}</p>
                  </div>
                </StaggerItem>
              ))}

              <StaggerItem>
                <div className="p-6 rounded-[18px] bg-gradient-to-br from-[#070D18] via-[#0A1424] to-[#1264FF]/20 border border-[#00C8FF]/40 flex flex-col justify-between shadow-[0_0_25px_rgba(0,200,255,0.15)] h-full">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#00C8FF] uppercase">
                      READY TO START?
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1 mb-2">
                      Have a Specific Technical Requirement?
                    </h4>
                    <p className="text-xs text-[#AAB7C8]">
                      Discuss your business architecture and obtain a realistic feasibility report.
                    </p>
                  </div>
                  <div className="mt-4">
                    <Button
                      href="/book-a-call"
                      variant="glow"
                      size="sm"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5 text-white" />}
                    >
                      Book a Strategy Session
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </div>

      {/* ========================================================
          WHY CHOOSE US (6 Differentiators)
         ======================================================== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-10">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="THE NEXORA DIFFERENCE"
            badgeIcon={<Zap className="w-3.5 h-3.5 text-[#00C8FF]" />}
            title="Why Forward-Looking Businesses Choose Sree Nexora Tech"
            highlightedWord="Why Forward-Looking"
            subtitle="We combine modern software engineering rigor with genuine business accountability and localized Tamil Nadu support."
            align="center"
          />
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsPoints.map((point, idx) => (
            <StaggerItem key={idx}>
              <div
                className="p-6 rounded-[18px] bg-[#070D18]/90 border border-[#258BFF]/25 hover:border-[#00C8FF]/50 transition-all duration-300 shadow-[0_8px_25px_rgba(3,5,10,0.8)] h-full"
              >
                <div className="flex items-center gap-2 mb-3 text-[#00C8FF]">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <h4 className="text-base font-bold text-white">{point.title}</h4>
                </div>
                <p className="text-xs text-[#AAB7C8] leading-relaxed pl-7">{point.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* ========================================================
          OUR TECHNOLOGY EXPERTISE
         ======================================================== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-10">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="TECHNICAL TOOLING"
            badgeIcon={<Cpu className="w-3.5 h-3.5 text-[#00C8FF]" />}
            title="Battle-Tested Technologies in Our Engineering Arsenal"
            highlightedWord="Battle-Tested"
            subtitle="We select tools known for performance, security, zero downtime, and active long-term ecosystem support."
            align="center"
          />
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((group, idx) => (
            <StaggerItem key={idx}>
              <div
                className="p-6 rounded-[18px] bg-[#070D18]/90 border border-[#258BFF]/25 hover:border-[#00C8FF]/40 transition-colors shadow-[0_8px_25px_rgba(3,5,10,0.8)] h-full"
              >
                <h4 className="text-sm font-bold text-[#F8FAFC] font-mono uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C8FF]" />
                  <span>{group.category}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#03050A] text-[#C0C7D1] border border-[#258BFF]/20 hover:border-[#00C8FF]/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Global CTA */}
      <ScrollReveal direction="up">
        <ContactCTA />
      </ScrollReveal>
    </div>
  );
};
