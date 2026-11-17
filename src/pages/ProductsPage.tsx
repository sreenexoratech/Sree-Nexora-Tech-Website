import React, { useState } from 'react';
import { ProductCard } from '../components/cards/ProductCard';
import { DemoRequestModal } from '../components/modals/DemoRequestModal';
import { ContactCTA } from '../components/common/ContactCTA';
import { TechBackground } from '../components/common/TechBackground';
import { productsData, productCategories } from '../data/products';
import { SEOHead } from '../components/common/SEOHead';
import { getBreadcrumbSchema, getOrganizationSchema } from '../lib/schema';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import type { ProductItem } from '../types';
import {
  Sparkles,
  Shield,
  Search,
  Server,
  Lock,
  Database
} from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDemoProduct, setActiveDemoProduct] = useState<ProductItem | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenDemoModal = (product: ProductItem) => {
    setActiveDemoProduct(product);
    setIsDemoModalOpen(true);
  };

  return (
    <div className="relative pt-8 pb-20 overflow-hidden bg-[#03050A]">
      <SEOHead
        title="Enterprise Software Products & SaaS Suite | Sree Nexora Tech"
        description="Discover ready-to-deploy enterprise software: Nexora Billing & POS, Cloud ERP, CRM Hub, Inventory Manager, HRMS & Payroll, and EduLMS Academy."
        keywords="Nexora software products, cloud ERP software India, GST POS billing software, retail inventory management, hospital management system, EduLMS software Tamil Nadu"
        canonicalPath="/products"
        jsonLd={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' }
          ])
        ]}
      />

      {/* Tech Background Visual */}
      <TechBackground />

      {/* Page Header */}
      <ScrollReveal direction="up" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#070D18]/90 border border-[#00C8FF]/35 text-[#00C8FF] shadow-[0_0_20px_rgba(0,200,255,0.2)] backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#00C8FF]" />
          <span>PROPRIETARY SAAS &amp; ENTERPRISE SOFTWARE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Software Products Engineered by{' '}
          <span className="bg-gradient-to-r from-[#258BFF] via-[#00C8FF] to-[#1264FF] bg-clip-text text-transparent">
            Sree Nexora Tech
          </span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[#AAB7C8] max-w-3xl mx-auto leading-relaxed">
          Explore our turnkey software solutions designed for retail counters, wholesale distribution hubs,
          manufacturing facilities, academies, and corporate enterprises across Tamil Nadu and Pan-India.
        </p>
      </ScrollReveal>

      {/* Category Filter & Search Bar */}
      <ScrollReveal direction="up" delay={0.1} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-[18px] bg-[#070D18]/90 border border-[#258BFF]/25 backdrop-blur-xl shadow-[0_10px_30px_rgba(3,5,10,0.8)]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#1264FF]/25 text-[#00C8FF] border border-[#00C8FF]/40 shadow-[0_0_15px_rgba(0,200,255,0.25)]'
                    : 'text-[#AAB7C8] hover:text-[#F8FAFC] hover:bg-[#0A1424] border border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#AAB7C8]" />
            <input
              type="text"
              placeholder="Search products or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#03050A] border border-[#258BFF]/30 text-[#F8FAFC] text-xs placeholder-[#AAB7C8]/60 focus:outline-none focus:border-[#00C8FF] focus:ring-1 focus:ring-[#00C8FF] transition-all"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Products Showcase Grid (All 6 Categories) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-10">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#070D18]/70 rounded-[18px] border border-[#258BFF]/20">
            <p className="text-[#AAB7C8] text-sm">No products found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Products');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#00C8FF] underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard
                  product={product}
                  onRequestDemo={handleOpenDemoModal}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>

      {/* Architecture & Reliability Strip */}
      <ScrollReveal direction="up" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 z-10">
        <div className="p-8 sm:p-12 rounded-[22px] bg-[#070D18]/90 border border-[#258BFF]/25 backdrop-blur-xl shadow-[0_15px_40px_rgba(3,5,10,0.9)]">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-mono font-bold tracking-wider text-[#00C8FF] uppercase">
              ENTERPRISE-GRADE FOUNDATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mt-1">
              Architecture Pillars Built into Every Nexora Product
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#AAB7C8]">
            <div className="p-5 rounded-2xl bg-[#03050A]/90 border border-[#258BFF]/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1264FF]/20 border border-[#00C8FF]/30 text-[#00C8FF] flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <strong className="text-white text-sm block mb-1">GST &amp; Statutory Ready</strong>
                <p className="text-[#AAB7C8] leading-relaxed">
                  Direct government portal e-Invoicing, e-Way bill formats, state-wise CGST/SGST/IGST,
                  and PF/ESI computation.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#03050A]/90 border border-[#258BFF]/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1264FF]/20 border border-[#258BFF]/40 text-[#258BFF] flex items-center justify-center mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <strong className="text-white text-sm block mb-1">Offline Local Resiliency</strong>
                <p className="text-[#AAB7C8] leading-relaxed">
                  Billing and inventory continue functioning smoothly even during broadband internet drops
                  with automated sync upon reconnect.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#03050A]/90 border border-[#258BFF]/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-3">
                  <Lock className="w-5 h-5" />
                </div>
                <strong className="text-white text-sm block mb-1">Data Sovereignty &amp; Backups</strong>
                <p className="text-[#AAB7C8] leading-relaxed">
                  AES-256 encrypted databases, daily snapshots, and zero third-party telemetry. You
                  retain complete control over records.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#03050A]/90 border border-[#258BFF]/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-3">
                  <Server className="w-5 h-5" />
                </div>
                <strong className="text-white text-sm block mb-1">Dedicated Regional Support</strong>
                <p className="text-[#AAB7C8] leading-relaxed">
                  Direct support helplines, WhatsApp engineer assistance, and on-site deployment
                  services across Tamil Nadu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Global CTA */}
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
