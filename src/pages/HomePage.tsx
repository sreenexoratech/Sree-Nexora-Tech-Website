import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceCard } from '../components/cards/ServiceCard';
import { ProductCard } from '../components/cards/ProductCard';
import { DemoRequestModal } from '../components/modals/DemoRequestModal';
import { ContactCTA } from '../components/common/ContactCTA';
import { TechBackground } from '../components/common/TechBackground';
import { SoftwareDashboardPreview } from '../components/common/SoftwareDashboardPreview';
import { FAQSection } from '../components/common/FAQSection';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { servicesData } from '../data/services';
import { productsData } from '../data/products';
import { SEOHead } from '../components/common/SEOHead';
import { getGlobalSchemaGraph } from '../lib/schema';
import { companyData, getBookCallLink } from '../data/company';
import type { ProductItem } from '../types';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Layers,
  Code2,
  Cpu,
  CheckCircle2,
  Calendar,
  Database,
  Cloud,
  Lock,
  Bot,
  ExternalLink,
  Building2,
  Workflow,
  BarChart3,
  Boxes
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeDemoProduct, setActiveDemoProduct] = useState<ProductItem | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const bookingAction = getBookCallLink();

  const handleOpenDemoModal = (product: ProductItem) => {
    setActiveDemoProduct(product);
    setIsDemoModalOpen(true);
  };

  // 4 Floating Hero Badges
  const floatingBadges = [
    { label: 'Enterprise Solutions', icon: <Boxes className="w-3.5 h-3.5 text-[#00C8FF]" /> },
    { label: 'Smart Automation', icon: <Workflow className="w-3.5 h-3.5 text-[#258BFF]" /> },
    { label: 'Business Intelligence', icon: <BarChart3 className="w-3.5 h-3.5 text-[#00C8FF]" /> },
    { label: 'Digital Transformation', icon: <Cpu className="w-3.5 h-3.5 text-[#1264FF]" /> }
  ];

  // Enterprise Technology Stack Data
  const techStackCategories = [
    {
      category: 'Frontend & Mobile',
      icon: <Layers className="w-4 h-4 text-[#00C8FF]" />,
      items: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Flutter']
    },
    {
      category: 'Backend & APIs',
      icon: <Code2 className="w-4 h-4 text-[#258BFF]" />,
      items: ['Node.js', 'Python', 'Go', 'FastAPI', 'Express', 'GraphQL', 'REST']
    },
    {
      category: 'Databases & Cache',
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Elasticsearch']
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud className="w-4 h-4 text-[#00C8FF]" />,
      items: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Nginx', 'GitHub Actions']
    },
    {
      category: 'AI & Business Automation',
      icon: <Bot className="w-4 h-4 text-purple-400" />,
      items: ['LangChain', 'OpenAI API', 'Automated Workflows', 'OCR Pipelines', 'Predictive Analytics']
    },
    {
      category: 'Security & Compliance',
      icon: <Lock className="w-4 h-4 text-[#258BFF]" />,
      items: ['TLS 1.3', 'AES-256', 'OAuth 2.0 / JWT', 'GST E-Invoice API', 'Zero-Trust Perimeter']
    }
  ];

  // Enterprise Portfolio / Case Studies Showcase
  const portfolioProjects = [
    {
      title: 'Enterprise Multi-Branch ERP & Warehouse Suite',
      category: 'ERP & Supply Chain',
      industry: 'Manufacturing & Distribution',
      description:
        'Unified inventory control across 14 distribution centers, automated barcode dispatches, real-time GST e-Invoicing, and multi-tier role authorization.',
      tags: ['PostgreSQL', 'Node.js', 'React', 'Docker', 'GST e-Way API'],
      metric: '99.98% Inventory Accuracy'
    },
    {
      title: 'High-Throughput Retail POS & Wholesale Billing',
      category: 'POS & Billing',
      industry: 'Supermarket Chains & Wholesale',
      description:
        'Sub-second billing desk software with offline local resiliency, thermal printer integration, UPI dynamic QR code display, and multi-counter cash drawer sync.',
      tags: ['TypeScript', 'SQLite Offline', 'Cloud Sync', 'GST Calculator'],
      metric: '< 1.2s Per Transaction'
    },
    {
      title: 'Clinical & Hospital Management SaaS Platform',
      category: 'Healthcare Software',
      industry: 'Specialty Hospitals & Diagnostic Centers',
      description:
        'End-to-end patient OP/IP admission, electronic health records (EHR), automated lab sample tracking, and pharmacy inventory management.',
      tags: ['HIPAA / ABHA Ready', 'React', 'Python', 'PostgreSQL'],
      metric: 'Zero Prescription Errors'
    },
    {
      title: 'EduLMS Digital Academy & Examination Engine',
      category: 'EdTech / LMS',
      industry: 'Colleges & Professional Institutes',
      description:
        'Interactive course management, video encryption streaming, automated question bank generator, biometric student attendance, and fee collection gateway.',
      tags: ['Video CDN', 'Next.js', 'Node.js', 'Razorpay Gateway'],
      metric: '45,000+ Concurrent Students'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-[#03050A]">
      <SEOHead
        title={`${companyData.legalName} | Enterprise Software, Cloud ERP & AI Solutions`}
        description="Sree Nexora Tech Pvt Ltd is a premier software company in Tamil Nadu, India. Delivering enterprise ERP/CRM systems, rapid GST billing software, high-performance web applications, mobile apps, and AI-driven automation."
        keywords="Sree Nexora Tech, software company Tamil Nadu, enterprise ERP software India, custom software development, GST billing software, web application development Coimbatore Chennai, hospital management software, LMS portal, mobile app development, AI business automation"
        canonicalPath="/"
        jsonLd={getGlobalSchemaGraph()}
      />

      {/* ========================================================
          HERO SECTION (CINEMATIC ENTERPRISE ATMOSPHERE)
         ======================================================== */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden">
        {/* Custom Technology Background with Circuit Lines & Light Beams */}
        <TechBackground />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <ScrollReveal direction="up" delay={0.05} duration={0.6} className="lg:col-span-7 text-center lg:text-left">
              {/* Hero Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-[#070D18]/90 border border-[#00C8FF]/35 text-[#00C8FF] shadow-[0_0_20px_rgba(0,200,255,0.25)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
                <span>NEXT-GENERATION IT &amp; SOFTWARE SOLUTIONS</span>
              </div>

              {/* Main Heading with Electric Blue / Cyan Gradient */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.12]">
                Architecting{' '}
                <span className="bg-gradient-to-r from-[#258BFF] via-[#00C8FF] to-[#1264FF] bg-clip-text text-transparent">
                  Intelligent Software &amp;
                </span>{' '}
                Digital Growth.
              </h1>

              {/* Description */}
              <p className="mt-6 text-base sm:text-lg text-[#AAB7C8] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <strong className="text-[#F8FAFC] font-semibold">{companyData.legalName}</strong>{' '}
                delivers innovative website development, custom business software, ERP/CRM solutions,
                mobile applications, AI-powered automation, and result-driven digital marketing for
                modern businesses.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Button
                  href={bookingAction.href}
                  isExternal={bookingAction.isExternal}
                  variant="glow"
                  size="lg"
                  className="w-full sm:w-auto"
                  leftIcon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                  rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
                >
                  Book a Strategy Call
                </Button>

                <Button
                  href="/products"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  leftIcon={<Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C8FF]" />}
                >
                  Explore Our Solutions
                </Button>
              </div>

              {/* Floating Information Badges */}
              <div className="mt-10 pt-6 border-t border-[#0A1424] flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                {floatingBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#070D18]/90 border border-[#258BFF]/25 text-xs font-medium text-[#F8FAFC] shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:border-[#00C8FF]/50 transition-colors"
                  >
                    {badge.icon}
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Regional Support Highlights */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-[#AAB7C8] font-mono">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Headquartered in Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C8FF]" />
                  <span>GST &amp; Statutory Ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#258BFF]" />
                  <span>Cloud &amp; On-Premise Deployments</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Interactive Tech Simulation Frame (Dashboard Preview) */}
            <ScrollReveal direction="up" delay={0.2} duration={0.65} className="lg:col-span-5 relative">
              <SoftwareDashboardPreview />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          CORE SERVICES SECTION (10 SERVICES)
         ======================================================== */}
      <section id="services" className="relative py-16 sm:py-24 bg-[#070D18]/50 border-t border-[#0A1424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeading
              badge="FULL-SPECTRUM IT CAPABILITIES"
              badgeIcon={<Code2 className="w-3.5 h-3.5" />}
              title="Comprehensive IT Services Engineered for Business Acceleration"
              highlightedWord="IT Services"
              subtitle="From bespoke corporate web applications to enterprise-scale ERPs and automated marketing funnels, we provide complete technical stewardship."
              align="center"
            />
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal direction="up" delay={0.15} className="mt-12 text-center">
            <Button
              href="/services"
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore All 10 Services in Detail
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          FEATURED SOFTWARE PRODUCTS SECTION (6 CATEGORIES)
         ======================================================== */}
      <section id="products" className="relative py-16 sm:py-24 bg-[#03050A] border-t border-[#0A1424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeading
              badge="PROPRIETARY SOFTWARE"
              badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
              title="Turnkey Enterprise SaaS &amp; Business Software Products"
              highlightedWord="Enterprise SaaS"
              subtitle="Explore our ready-to-deploy software products with intuitive user interfaces, comprehensive features, and flexible deployment models."
              align="center"
            />
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard
                  product={product}
                  onRequestDemo={handleOpenDemoModal}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal direction="up" delay={0.15} className="mt-12 text-center">
            <Button
              href="/products"
              variant="glow"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
            >
              View Full Products Catalog &amp; Request Demo
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          ENTERPRISE TECHNOLOGY STACK
         ======================================================== */}
      <section className="relative py-16 sm:py-24 border-t border-[#0A1424] bg-[#070D18]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeading
              badge="MODERN TECH STACK"
              badgeIcon={<Cpu className="w-3.5 h-3.5" />}
              title="Engineered with High-Reliability Enterprise Technologies"
              highlightedWord="Enterprise Technologies"
              subtitle="We implement audited open-source foundations, type-safe frameworks, and horizontally scalable cloud infrastructures."
              align="center"
            />
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStackCategories.map((group, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="p-6 rounded-[18px] bg-[#070D18]/90 border border-[#258BFF]/25 hover:border-[#00C8FF]/50 transition-all duration-300 shadow-[0_8px_25px_rgba(3,5,10,0.8)] hover:shadow-[0_16px_40px_rgba(0,200,255,0.15)] group h-full"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#0A1424] border border-[#258BFF]/30 flex items-center justify-center group-hover:border-[#00C8FF] transition-colors">
                      {group.icon}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#00C8FF] transition-colors">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#03050A] text-[#AAB7C8] border border-[#258BFF]/20 group-hover:border-[#00C8FF]/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================
          PROJECTS / PORTFOLIO SHOWCASE SECTION
         ======================================================== */}
      <section id="portfolio" className="relative py-16 sm:py-24 border-t border-[#0A1424] bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeading
              badge="PROVEN TRACK RECORD"
              badgeIcon={<Building2 className="w-3.5 h-3.5" />}
              title="Mission-Critical Enterprise Implementations"
              highlightedWord="Enterprise Implementations"
              subtitle="Examine real-world software architectures designed and deployed by Sree Nexora Tech for scaling enterprises."
              align="center"
            />
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="group relative p-7 sm:p-8 rounded-[20px] bg-[#070D18]/90 border border-[#258BFF]/25 hover:border-[#00C8FF]/50 transition-all duration-300 shadow-[0_12px_35px_rgba(3,5,10,0.9)] hover:shadow-[0_20px_50px_rgba(0,200,255,0.18)] flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#00C8FF] bg-[#1264FF]/15 px-3 py-1 rounded-md border border-[#00C8FF]/30 uppercase">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30">
                        {project.metric}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00C8FF] transition-colors">
                      {project.title}
                    </h3>

                    <div className="text-xs text-[#AAB7C8] font-medium mt-1 font-mono">
                      Industry: {project.industry}
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-[#AAB7C8] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#0A1424]">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#03050A] text-[#C0C7D1] border border-[#258BFF]/25"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      href="/contact"
                      variant="outline"
                      size="sm"
                      className="w-full text-xs"
                      rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Request Similar Architecture
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================
          WHY CHOOSE NEXORA TECH (ADVANTAGE SECTION)
         ======================================================== */}
      <section className="relative py-16 sm:py-24 border-t border-[#0A1424] bg-[#070D18]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeading
              badge="THE NEXORA ADVANTAGE"
              badgeIcon={<Cpu className="w-3.5 h-3.5" />}
              title="Engineered with Technical Rigor and Regional Business Understanding"
              highlightedWord="Technical Rigor"
              subtitle="We blend Silicon-Valley software engineering standards with deep localized operational insights for Tamil Nadu and Indian businesses."
              align="center"
            />
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem>
              <div className="p-6 rounded-[18px] bg-[#070D18]/80 border border-[#258BFF]/25 hover:border-[#00C8FF]/50 transition-all duration-300 shadow-[0_8px_25px_rgba(3,5,10,0.8)] h-full">
                <div className="w-12 h-12 rounded-xl bg-[#1264FF]/20 border border-[#00C8FF]/40 text-[#00C8FF] flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,200,255,0.25)]">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Sub-Second Performance</h3>
                <p className="mt-2 text-xs text-[#AAB7C8] leading-relaxed">
                  Lightweight architectures with strict Core Web Vitals compliance, caching, and edge
                  CDN delivery.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 rounded-[18px] bg-[#070D18]/80 border border-[#258BFF]/25 hover:border-[#00C8FF]/50 transition-all duration-300 shadow-[0_8px_25px_rgba(3,5,10,0.8)] h-full">
                <div className="w-12 h-12 rounded-xl bg-[#1264FF]/20 border border-[#00C8FF]/40 text-[#00C8FF] flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,200,255,0.25)]">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Statutory &amp; GST Ready</h3>
                <p className="mt-2 text-xs text-[#AAB7C8] leading-relaxed">
                  Pre-configured for Indian GST calculations, GSTR exports, e-Invoicing, and regional
                  statutory compliance.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 rounded-[18px] bg-[#070D18]/80 border border-[#258BFF]/25 hover:border-[#00C8FF]/50 transition-all duration-300 shadow-[0_8px_25px_rgba(3,5,10,0.8)] h-full">
                <div className="w-12 h-12 rounded-xl bg-[#1264FF]/20 border border-[#00C8FF]/40 text-[#00C8FF] flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,200,255,0.25)]">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Clean &amp; Extensible Code</h3>
                <p className="mt-2 text-xs text-[#AAB7C8] leading-relaxed">
                  Modern TypeScript, component-driven UI, documented REST/GraphQL APIs, and scalable
                  data models.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 rounded-[18px] bg-[#070D18]/80 border border-[#258BFF]/25 hover:border-[#00C8FF]/50 transition-all duration-300 shadow-[0_8px_25px_rgba(3,5,10,0.8)] h-full">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Dedicated Local Support</h3>
                <p className="mt-2 text-xs text-[#AAB7C8] leading-relaxed">
                  Direct access to senior developers and technical consultants across Tamil Nadu with
                  rapid SLA response.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================
          AIO & GEO FREQUENTLY ASKED QUESTIONS SECTION
         ======================================================== */}
      <FAQSection />

      {/* ========================================================
          GLOBAL CONTACT CTA SECTION
         ======================================================== */}
      <ScrollReveal direction="up">
        <ContactCTA />
      </ScrollReveal>

      {/* Live Demo Request Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        product={activeDemoProduct}
      />
    </div>
  );
};
