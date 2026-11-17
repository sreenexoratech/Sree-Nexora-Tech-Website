import React, { useState } from 'react';
import { ServiceCard } from '../components/cards/ServiceCard';
import { ContactCTA } from '../components/common/ContactCTA';
import { TechBackground } from '../components/common/TechBackground';
import { servicesData } from '../data/services';
import { SEOHead } from '../components/common/SEOHead';
import { getBreadcrumbSchema, getOrganizationSchema } from '../lib/schema';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { Layers, Search } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Software & SaaS', 'Web & E-Commerce', 'Automation & Marketing'];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative pt-8 pb-20 overflow-hidden bg-[#03050A]">
      <SEOHead
        title="Enterprise IT Services & Custom Software | Sree Nexora Tech"
        description="Explore 10 specialized technology verticals by Sree Nexora Tech: Website Development, E-Commerce, CRM, ERP, GST Billing, Inventory Management, LMS, HRMS, Custom Software, and Digital Marketing."
        keywords="Sree Nexora Tech services, website development Tamil Nadu, custom ERP software India, GST billing systems, mobile application development, digital marketing agency, SaaS architecture"
        canonicalPath="/services"
        jsonLd={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' }
          ])
        ]}
      />

      {/* Tech Background Visual */}
      <TechBackground />

      {/* Page Header */}
      <ScrollReveal direction="up" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#070D18]/90 border border-[#00C8FF]/35 text-[#00C8FF] shadow-[0_0_20px_rgba(0,200,255,0.2)] backdrop-blur-md">
          <Layers className="w-3.5 h-3.5 text-[#00C8FF]" />
          <span>FULL-SPECTRUM IT CAPABILITIES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Technology &amp; Software Services by{' '}
          <span className="bg-gradient-to-r from-[#258BFF] via-[#00C8FF] to-[#1264FF] bg-clip-text text-transparent">
            Sree Nexora Tech
          </span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[#AAB7C8] max-w-3xl mx-auto leading-relaxed">
          From custom cloud ERP and GST-ready billing to mobile-first web platforms and high-intent
          digital marketing, explore our 10 specialized technology verticals designed to accelerate
          business performance.
        </p>
      </ScrollReveal>

      {/* Category Filter & Search Bar */}
      <ScrollReveal direction="up" delay={0.1} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-[18px] bg-[#070D18]/90 border border-[#258BFF]/25 backdrop-blur-xl shadow-[0_10px_30px_rgba(3,5,10,0.8)]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
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
              placeholder="Search services or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#03050A] border border-[#258BFF]/30 text-[#F8FAFC] text-xs placeholder-[#AAB7C8]/60 focus:outline-none focus:border-[#00C8FF] focus:ring-1 focus:ring-[#00C8FF] transition-all"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Services Grid (All 10 Services) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-10">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#070D18]/70 rounded-[18px] border border-[#258BFF]/20">
            <p className="text-[#AAB7C8] text-sm">No services found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#00C8FF] underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} showBenefits={true} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>

      {/* Global CTA */}
      <ScrollReveal direction="up">
        <ContactCTA />
      </ScrollReveal>
    </div>
  );
};
