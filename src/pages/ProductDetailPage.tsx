import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { productsData } from '../data/products';
import { companyData } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { getProductSchema, getBreadcrumbSchema } from '../lib/schema';
import { Button } from '../components/ui/Button';
import { DemoRequestModal } from '../components/modals/DemoRequestModal';
import { ContactCTA } from '../components/common/ContactCTA';
import { TechBackground } from '../components/common/TechBackground';
import { ScrollReveal } from '../components/common/ScrollReveal';
import {
  CheckCircle2,
  Check,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Laptop,
  Clock,
  MessageSquare,
  Target,
  ChevronDown
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Related products
  const relatedProducts = productsData.filter((p) => p.id !== product.id).slice(0, 3);

  const whatsappInquiryUrl = `https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello Sree Nexora Tech team, I would like to inquire about ${product.name} (${product.category}) for my business.`
  )}`;

  return (
    <div className="relative pt-8 pb-20 overflow-hidden bg-[#03050A]">
      <SEOHead
        title={`${product.name} | Enterprise ${product.category}`}
        description={product.shortDescription}
        canonicalPath={`/products/${product.slug}`}
        jsonLd={[
          getProductSchema(product),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Software Products', url: '/products' },
            { name: product.name, url: `/products/${product.slug}` }
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
          <Link to="/products" className="hover:text-[#00C8FF] transition-colors">
            Software Products
          </Link>
          <span>/</span>
          <span className="text-[#00C8FF] font-medium truncate">{product.name}</span>
        </nav>

        {/* ========================================================
            PRODUCT HERO
           ======================================================== */}
        <ScrollReveal direction="up">
          <div className="p-5 sm:p-10 lg:p-14 rounded-2xl sm:rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-2xl relative overflow-hidden mb-12 sm:mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase bg-blue-950 text-blue-300 border border-blue-500/30">
                  {product.category}
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold uppercase bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  {product.badge || product.status}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                {product.name}
              </h1>

              <p className="mt-2 text-sm sm:text-base font-semibold text-blue-400/90 font-mono">
                {product.tagline}
              </p>

              <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {product.fullDescription}
              </p>

              {/* Action Buttons: Request Demo, Live Demo / Demo Coming Soon, WhatsApp */}
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5">
                <Button
                  onClick={() => setIsDemoModalOpen(true)}
                  variant="glow"
                  size="md"
                  className="w-full sm:w-auto"
                  leftIcon={<Sparkles className="w-4 h-4 text-white" />}
                >
                  Request a Live Demo
                </Button>

                {product.hasLiveDemo && product.demoUrl ? (
                  <Button
                    href={product.demoUrl}
                    isExternal
                    variant="secondary"
                    size="md"
                    className="w-full sm:w-auto text-blue-400 hover:text-white"
                    rightIcon={<ExternalLink className="w-4 h-4" />}
                  >
                    Open Live Sandbox Demo
                  </Button>
                ) : (
                  <div
                    className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-amber-400 text-xs font-semibold select-none text-center sm:text-left"
                    title="Public sandbox not configured. Please request a private demo walkthrough."
                  >
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>Demo Coming Soon (Request Private Walkthrough)</span>
                  </div>
                )}

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

            {/* Right Interactive Mockup Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950/95 border border-slate-700/80 shadow-2xl p-4 sm:p-5 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-blue-400">
                    <Laptop className="w-3.5 h-3.5" />
                    <span>{product.name} Cloud Dashboard</span>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-slate-400 text-[10px] block">SYSTEM STATUS</span>
                      <span className="text-emerald-400 font-bold">100% OPERATIONAL</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-bold border border-emerald-800">
                      LIVE
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400 text-[9px] block">GST INVOICE SPEED</span>
                      <span className="text-white font-bold">&lt; 3.0 Seconds</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400 text-[9px] block">UPTIME SLA</span>
                      <span className="text-white font-bold">99.9% Monitored</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-950/40 to-blue-950/40 border border-blue-800/30 text-[11px] text-slate-300">
                    <span className="text-blue-400 font-bold block mb-1">Architecture Note:</span>
                    <span>Offline-first local cache protects counters against broadband dropouts.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

        {/* ========================================================
            CORE MODULES BREAKDOWN
           ======================================================== */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase">
              PRODUCT ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Modular Architecture &amp; Subsystems
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300">
              Each module is engineered to operate seamlessly as an integrated whole or connect
              with your existing databases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.modules.map((mod, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-950/90 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-xs font-mono mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{mod.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{mod.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Subsystem Features:
                  </span>
                  {mod.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            FEATURES CHECKLIST & TARGET INDUSTRIES
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Main Features Checklist (Col 7) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span>Full Functional Capabilities</span>
            </h3>

            <div className="space-y-4">
              {product.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-950 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-slate-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs & Target Industries (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tech Specs */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-4 flex items-center gap-2 text-blue-300">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>Technical Specifications</span>
              </h3>
              <div className="space-y-3 text-xs">
                {product.specs.map((sp, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-start justify-between pb-2 border-b border-slate-800/80"
                  >
                    <span className="text-slate-400 font-medium">{sp.label}:</span>
                    <span className="text-white font-semibold text-right max-w-[60%]">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Industries */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-4 flex items-center gap-2 text-purple-300">
                <Target className="w-4 h-4 text-purple-400" />
                <span>Target Business Verticals</span>
              </h3>
              <div className="space-y-2.5">
                {product.targetIndustries.map((ind, iIdx) => (
                  <div key={iIdx} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            DEPLOYMENT & FREQUENTLY ASKED QUESTIONS
           ======================================================== */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="mb-20 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Common Questions About {product.name}
              </h2>
            </div>

            <div className="space-y-4">
              {product.faqs.map((faq, idx) => (
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
            RELATED SOFTWARE PRODUCTS
           ======================================================== */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase">
                EXPLORE FURTHER
              </span>
              <h3 className="text-xl font-bold text-white">Other Enterprise Software Products</h3>
            </div>
            <Link
              to="/products"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-400 uppercase block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">{rel.name}</h4>
                  <p className="text-xs text-slate-300 line-clamp-2">{rel.shortDescription}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <Link
                    to={`/products/${rel.slug}`}
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

      {/* Live Demo Request Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        product={product}
      />
    </div>
  );
};
