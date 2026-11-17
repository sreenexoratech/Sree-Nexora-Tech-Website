import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { getServiceSchema, getBreadcrumbSchema } from '../lib/schema';
import { Button } from '../components/ui/Button';
import { ContactCTA } from '../components/common/ContactCTA';
import { TechBackground } from '../components/common/TechBackground';
import { ScrollReveal } from '../components/common/ScrollReveal';
import {
  CheckCircle2,
  Calendar,
  Cpu,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Package,
  Target,
  ChevronDown,
  Globe,
  ShoppingCart,
  Users,
  Database,
  Receipt,
  PackageCheck,
  GraduationCap,
  Briefcase,
  Code2,
  Megaphone,
  Check,
  Send
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-8 h-8 text-blue-400" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8 text-blue-400" />,
  Users: <Users className="w-8 h-8 text-blue-400" />,
  Database: <Database className="w-8 h-8 text-blue-400" />,
  Receipt: <Receipt className="w-8 h-8 text-blue-400" />,
  PackageCheck: <PackageCheck className="w-8 h-8 text-blue-400" />,
  GraduationCap: <GraduationCap className="w-8 h-8 text-blue-400" />,
  Briefcase: <Briefcase className="w-8 h-8 text-blue-400" />,
  Code2: <Code2 className="w-8 h-8 text-blue-400" />,
  Megaphone: <Megaphone className="w-8 h-8 text-blue-400" />
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [quickFormSubmitted, setQuickFormSubmitted] = useState(false);
  const [quickFormData, setQuickFormData] = useState({
    name: '',
    phone: '',
    email: '',
    note: ''
  });

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const serviceIcon = iconMap[service.iconName] || <Code2 className="w-8 h-8 text-blue-400" />;

  // Find 3 complementary services
  const relatedServices = servicesData
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  const whatsappInquiryUrl = `https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello Sree Nexora Tech team, I would like to inquire about ${service.title} for my business.`
  )}`;

  const handleQuickForm = (e: React.FormEvent) => {
    e.preventDefault();
    setQuickFormSubmitted(true);
  };

  return (
    <div className="relative pt-8 pb-20 overflow-hidden bg-[#03050A]">
      <SEOHead
        title={`${service.title} | Sree Nexora Tech`}
        description={service.shortDescription}
        canonicalPath={`/services/${service.slug}`}
        jsonLd={[
          getServiceSchema(service),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: service.title, url: `/services/${service.slug}` }
          ])
        ]}
      />
      {/* Tech Background Visual */}
      <TechBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#AAB7C8] mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#00C8FF] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/services" className="hover:text-[#00C8FF] transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-[#00C8FF] font-medium truncate">{service.title}</span>
        </nav>

        {/* ========================================================
            HERO AREA FOR THIS SERVICE
           ======================================================== */}
        <ScrollReveal direction="up">
          <div className="p-5 sm:p-10 lg:p-14 rounded-2xl sm:rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-2xl relative overflow-hidden mb-12 sm:mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              {/* Category Badge & Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-700/80 flex items-center justify-center shadow-[0_0_20px_rgba(37, 99, 235, 0.25)]">
                  {serviceIcon}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase block">
                    {service.category}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Sree Nexora Tech Enterprise Capabilities
                  </span>
                </div>
              </div>

              {/* Main Service Title */}
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                {service.title}
              </h1>

              {/* Detailed Description */}
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {service.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  variant="glow"
                  size="md"
                  className="w-full sm:w-auto"
                  leftIcon={<Calendar className="w-4 h-4 text-white" />}
                  rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
                >
                  Request Consultation &amp; Quote
                </Button>

                <Button
                  href={whatsappInquiryUrl}
                  isExternal
                  variant="whatsapp"
                  size="md"
                  className="w-full sm:w-auto"
                  leftIcon={<MessageSquare className="w-4 h-4" />}
                >
                  WhatsApp Inquire
                </Button>
              </div>
            </div>

            {/* Right Quick Summary Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <h3 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-4">
                SERVICE SPECIFICATION
              </h3>
              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Target Region:</span>
                  <span className="text-white font-medium">Tamil Nadu &amp; Pan-India</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Delivery Model:</span>
                  <span className="text-blue-400 font-medium">Agile Sprints &amp; SLA</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Code Ownership:</span>
                  <span className="text-emerald-400 font-medium">100% Client Owned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Compliance:</span>
                  <span className="text-white font-medium">Indian GST &amp; Data Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

        {/* ========================================================
            KEY FEATURES & CAPABILITIES
           ======================================================== */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase">
              TECHNICAL ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Key Features &amp; Engineering Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{feature}</h4>
                  <p className="text-xs text-slate-300">
                    Engineered to enterprise standards with strict type safety and uptime benchmarks.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            BUSINESS BENEFITS & ROI
           ======================================================== */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 uppercase tracking-wider mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>TANGIBLE BUSINESS IMPACT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Invest in This Solution for Your Organization
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.businessBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-xs mb-3 font-mono">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            TECH STACK & IDEAL FOR GRID
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Tech Stack */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Technologies Leveraged</h3>
            </div>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              We avoid outdated legacy frameworks. Our engineering stack guarantees low latency,
              robust security, and painless scalability.
            </p>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-950 text-blue-300 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Ideal For / Target Audience */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Ideal Business Profiles</h3>
            </div>
            <div className="space-y-3">
              {service.idealFor.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            DELIVERABLES & SCOPE
           ======================================================== */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 text-blue-400 flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Project Deliverables &amp; Handover Scope</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-300"
              >
                <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            FAQS ACCORDION
           ======================================================== */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-20 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Common Questions About {service.title}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-5 text-left text-sm font-bold text-white flex items-center justify-between gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-blue-400 transition-transform ${
                        openFaqIndex === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            DIRECT INLINE QUICK ENQUIRY FORM
           ======================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-blue-500/30 backdrop-blur-2xl mb-20 shadow-2xl">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold text-white">
              Request a Custom Proposal for {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Our engineering lead will analyze your requirements and provide a preliminary scope
              and budget breakdown within 24 hours.
            </p>
          </div>

          {quickFormSubmitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto mt-1">
                Thank you, {quickFormData.name}. We will contact you at {quickFormData.phone} regarding {service.title}.
              </p>
              <button
                onClick={() => setQuickFormSubmitted(false)}
                className="mt-4 text-xs text-blue-400 underline font-semibold"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleQuickForm} className="max-w-xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={quickFormData.name}
                  onChange={(e) => setQuickFormData({ ...quickFormData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-blue-400"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp / Phone *"
                  value={quickFormData.phone}
                  onChange={(e) => setQuickFormData({ ...quickFormData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-blue-400"
                />
              </div>

              <input
                type="email"
                required
                placeholder="Official Email *"
                value={quickFormData.email}
                onChange={(e) => setQuickFormData({ ...quickFormData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-blue-400"
              />

              <textarea
                rows={3}
                placeholder="Briefly describe your requirements or question..."
                value={quickFormData.note}
                onChange={(e) => setQuickFormData({ ...quickFormData, note: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-blue-400 resize-none"
              />

              <Button
                type="submit"
                variant="glow"
                size="md"
                fullWidth
                leftIcon={<Send className="w-4 h-4 text-slate-950" />}
              >
                Submit Consultation Request
              </Button>
            </form>
          )}
        </div>

        {/* ========================================================
            RELATED SERVICES STRIP
           ======================================================== */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase">
                EXPLORE FURTHER
              </span>
              <h3 className="text-xl font-bold text-white">Related IT Services</h3>
            </div>
            <Link
              to="/services"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <span>View All 10 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-400 uppercase block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">{rel.title}</h4>
                  <p className="text-xs text-slate-300 line-clamp-2">{rel.shortDescription}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <Link
                    to={`/services/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global CTA */}
      <ScrollReveal direction="up">
        <ContactCTA />
      </ScrollReveal>
    </div>
  );
};
