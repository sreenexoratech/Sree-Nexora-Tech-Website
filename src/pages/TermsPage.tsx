import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { companyData } from '../data/company';
import {
  FileCheck,
  CheckCircle2,
  Shield,
  Layers,
  FileCode,
  DollarSign,
  Clock,
  Sparkles,
  Server,
  AlertTriangle,
  Ban,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const TermsPage: React.FC = () => {
  return (
    <div className="relative pt-10 pb-24 overflow-hidden bg-[#03050A]">
      <SEOHead
        title="Terms and Conditions | Sree Nexora Tech Pvt Ltd"
        description="Official Terms and Conditions governing access, website usage, IT services, custom software engineering, and SaaS platforms by Sree Nexora Tech Pvt Ltd."
        canonicalPath="/terms-and-conditions"
      />

      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-blue-950/30 via-indigo-950/20 to-transparent blur-3xl pointer-events-none" />

      <ScrollReveal direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-medium">
          <Link to="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-blue-400">Terms and Conditions</span>
        </nav>

        {/* Header Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-2xl shadow-2xl mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center shadow-lg shadow-blue-950/50">
              <FileCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold text-blue-400 bg-blue-950/60 border border-blue-500/20 uppercase mb-1.5">
                Official Legal Agreement
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Terms and Conditions
              </h1>
              <p className="text-sm font-semibold text-slate-300 mt-1">
                {companyData.legalName}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80 pt-6">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Effective Date:</span>
              <strong className="text-slate-200">01 November 2026</strong>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Last Updated:</span>
              <strong className="text-slate-200">01 November 2026</strong>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Jurisdiction:</span>
              <strong className="text-slate-200">Tamil Nadu, India</strong>
            </div>
          </div>
        </div>

        {/* Table of Contents Quick Navigation */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl mb-12">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-4 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Document Directory (19 Sections)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
            {[
              { id: 'section-1', title: '1. Introduction' },
              { id: 'section-2', title: '2. Our Services' },
              { id: 'section-3', title: '3. Website Usage' },
              { id: 'section-4', title: '4. Project Agreements & Engagements' },
              { id: 'section-5', title: '5. Pricing and Payments' },
              { id: 'section-6', title: '6. Project Delivery and Revisions' },
              { id: 'section-7', title: '7. Intellectual Property Rights' },
              { id: 'section-8', title: '8. Client Responsibilities' },
              { id: 'section-9', title: '9. Software and SaaS Services' },
              { id: 'section-10', title: '10. Third-Party Services' },
              { id: 'section-11', title: '11. SEO & Digital Marketing Disclaimer' },
              { id: 'section-12', title: '12. Confidentiality & Data Protection' },
              { id: 'section-13', title: '13. Limitation of Liability' },
              { id: 'section-14', title: '14. Indemnification' },
              { id: 'section-15', title: '15. Suspension and Termination' },
              { id: 'section-16', title: '16. External Links' },
              { id: 'section-17', title: '17. Changes to These Terms' },
              { id: 'section-18', title: '18. Governing Law and Jurisdiction' },
              { id: 'section-19', title: '19. Contact Information' }
            ].map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="hover:text-blue-300 transition-colors py-1 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                <span>{sec.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-slate-300 leading-relaxed">
          {/* SECTION 1 */}
          <section id="section-1" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                01
              </span>
              <span>1. Introduction</span>
            </h2>
            <div className="space-y-3 pl-0 sm:pl-11">
              <p>
                Welcome to <strong>{companyData.legalName}</strong> (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;).
              </p>
              <p>
                These Terms and Conditions govern your access to and use of our website, services, software products, digital platforms, and related offerings.
              </p>
              <p>
                By accessing our website or engaging with our services, you agree to comply with these Terms and Conditions. If you do not agree, please discontinue using our website and services.
              </p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="section-2" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                02
              </span>
              <span>2. Our Services</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p>
                {companyData.legalName} provides technology and digital solutions, including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                {[
                  'Website Design and Development.',
                  'Web Application Development.',
                  'Mobile Application Development.',
                  'Custom Software Development.',
                  'Enterprise Resource Planning (ERP).',
                  'Customer Relationship Management (CRM).',
                  'Human Resource Management Systems (HRMS).',
                  'Billing, POS and Inventory Management Software.',
                  'E-commerce Website Development.',
                  'SaaS Products and Solutions.',
                  'AI Solutions and Business Automation.',
                  'SEO and Digital Marketing Services.',
                  'Website Maintenance and Technical Support.'
                ].map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                The availability, features, pricing and delivery timelines of our services may vary depending on project requirements and agreements.
              </p>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="section-3" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                03
              </span>
              <span>3. Website Usage</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p>
                You agree to use our website only for lawful purposes.
              </p>
              <p className="font-semibold text-slate-200">You must not:</p>
              <ul className="space-y-2 text-slate-300">
                {[
                  'Use our website for fraudulent or illegal activities.',
                  'Attempt unauthorized access to our systems or servers.',
                  'Distribute viruses, malware or harmful software.',
                  'Copy, reproduce or misuse our website content without permission.',
                  'Interfere with the security or functionality of our website.',
                  'Submit false, misleading or unauthorized information through our forms.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Ban className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-amber-300/90 bg-amber-950/20 border border-amber-500/20 rounded-lg p-3">
                We reserve the right to restrict access to users who violate these conditions.
              </p>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="section-4" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                04
              </span>
              <span>4. Project Agreements and Service Engagements</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p>
                All development projects and professional services will be provided based on mutually agreed project proposals, quotations, specifications or service agreements.
              </p>
              <p className="font-semibold text-slate-200">Such agreements may include:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                {[
                  'Project scope and deliverables.',
                  'Project milestones and timelines.',
                  'Pricing and payment schedules.',
                  'Revision and modification limits.',
                  'Maintenance and support conditions.',
                  'Ownership and licensing rights.',
                  'Additional service charges.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <FileCode className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-400 text-xs pt-1">
                Any work outside the agreed project scope may require additional charges and a revised timeline.
              </p>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="section-5" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                05
              </span>
              <span>5. Pricing and Payments</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p>
                All service prices will be communicated through official quotations or proposals.
              </p>
              <ul className="space-y-2.5 text-slate-300">
                <li className="flex items-start gap-2.5">
                  <DollarSign className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Payments must be made according to the agreed payment schedule.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <DollarSign className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Advance payments, where applicable, must be received before project commencement.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <DollarSign className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Delayed payments may affect project timelines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <DollarSign className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Additional features or changes may incur extra charges.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <DollarSign className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Subscription-based services must be renewed according to their respective billing cycles.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                Specific refund and cancellation conditions will be communicated in the relevant quotation or service agreement.
              </p>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="section-6" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                06
              </span>
              <span>6. Project Delivery and Revisions</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p>
                We make reasonable efforts to deliver projects within the agreed timelines.
              </p>
              <p className="font-semibold text-slate-200">However, delivery schedules may be affected by:</p>
              <ul className="space-y-2 text-slate-300">
                {[
                  'Delays in receiving client requirements.',
                  'Delays in content, documents or approvals.',
                  'Changes in project scope.',
                  'Third-party service interruptions.',
                  'Technical issues beyond our reasonable control.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-400 text-xs pt-1">
                Revisions will be handled according to the agreed project scope. Additional revisions or major changes may involve additional costs.
              </p>
            </div>
          </section>

          {/* SECTION 7 */}
          <section id="section-7" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                07
              </span>
              <span>7. Intellectual Property Rights</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p>
                All original content on our website, including logos, graphics, designs, text, branding, website layouts and software materials, is owned by or licensed to {companyData.legalName}, unless otherwise stated.
              </p>
              <p>
                You may not reproduce, distribute, modify or commercially exploit our intellectual property without prior written permission.
              </p>
              <p>
                For custom development projects, ownership and licensing of source code, designs, deliverables and other intellectual property will be governed by the applicable project agreement.
              </p>
              <p className="text-xs text-slate-400">
                Third-party software, libraries, plugins and tools remain subject to their respective licenses.
              </p>
            </div>
          </section>

          {/* SECTION 8 */}
          <section id="section-8" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                08
              </span>
              <span>8. Client Responsibilities</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p className="font-semibold text-slate-200">Clients agree to:</p>
              <ul className="space-y-2 text-slate-300">
                {[
                  'Provide accurate project information and requirements.',
                  'Supply necessary content, images, documents and credentials.',
                  'Ensure they have legal rights to all materials provided to us.',
                  'Review and approve project deliverables within reasonable timelines.',
                  'Make payments according to agreed terms.',
                  'Use our software and services in compliance with applicable laws.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 pt-1">
                We are not responsible for issues caused by inaccurate information or unauthorized materials supplied by clients.
              </p>
            </div>
          </section>

          {/* SECTION 9 */}
          <section id="section-9" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                09
              </span>
              <span>9. Software and SaaS Services</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p>
                Our software products and SaaS platforms may be provided through subscription, licensing or customized deployment models.
              </p>
              <p className="font-semibold text-slate-200">Depending on the applicable product agreement:</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Server className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Access may require an active subscription.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Server className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Features may differ between plans.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Server className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Updates and upgrades may be introduced periodically.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Ban className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                  <span>Unauthorized sharing, resale or distribution of software access is prohibited.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Ban className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                  <span>Reverse engineering, unauthorized copying or misuse of software is prohibited, except where permitted by applicable law.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                We will make reasonable efforts to maintain service availability but do not guarantee uninterrupted operation.
              </p>
            </div>
          </section>

          {/* SECTION 10 */}
          <section id="section-10" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                10
              </span>
              <span>10. Third-Party Services</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p>
                Our services may integrate with third-party platforms, APIs, hosting providers, payment gateways, cloud services, plugins and other external technologies.
              </p>
              <p className="font-semibold text-slate-200">We are not responsible for:</p>
              <ul className="space-y-2 text-slate-300">
                {[
                  'Third-party service outages.',
                  'Changes in third-party pricing or policies.',
                  'Third-party security incidents.',
                  'Service restrictions imposed by external providers.',
                  'Discontinuation of third-party products or integrations.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 pt-1">
                Your use of such services may also be subject to their respective terms and privacy policies.
              </p>
            </div>
          </section>

          {/* SECTION 11 */}
          <section id="section-11" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                11
              </span>
              <span>11. SEO and Digital Marketing Disclaimer</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p>
                SEO, advertising and digital marketing results depend on several external factors, including search engine algorithms, competition, advertising platforms, market conditions and campaign performance.
              </p>
              <p className="font-semibold text-slate-200">We do not guarantee:</p>
              <ul className="space-y-2 text-slate-300">
                {[
                  'Specific Google search rankings.',
                  'A fixed number of leads or sales.',
                  'Guaranteed advertising conversions.',
                  'Specific website traffic growth.',
                  'Guaranteed business revenue.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 pt-1">
                Our services will be delivered based on the agreed marketing strategy and scope.
              </p>
            </div>
          </section>

          {/* SECTION 12 */}
          <section id="section-12" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                12
              </span>
              <span>12. Confidentiality and Data Protection</span>
            </h2>
            <div className="space-y-3 pl-0 sm:pl-11">
              <p>
                We respect the confidentiality of information shared by our clients.
              </p>
              <p>
                We take reasonable measures to protect personal information and business data handled through our website and services.
              </p>
              <p>
                Personal information will be collected, processed and used in accordance with our{' '}
                <Link to="/privacy-policy" className="text-blue-400 underline hover:text-blue-300">
                  Privacy Policy
                </Link>{' '}
                and applicable Indian data protection laws.
              </p>
              <p className="text-xs text-slate-400">
                Clients are responsible for ensuring they have appropriate authorization to share personal or business data with us.
              </p>
            </div>
          </section>

          {/* SECTION 13 */}
          <section id="section-13" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                13
              </span>
              <span>13. Limitation of Liability</span>
            </h2>
            <div className="space-y-3 pl-0 sm:pl-11">
              <p>
                To the maximum extent permitted by applicable law, {companyData.legalName} shall not be liable for indirect, incidental, special or consequential losses arising from the use of our website, products or services.
              </p>
              <p>
                We do not guarantee that our website or software will always be free from errors, interruptions or technical issues.
              </p>
              <p className="text-xs text-slate-400 pt-1">
                Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.
              </p>
            </div>
          </section>

          {/* SECTION 14 */}
          <section id="section-14" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                14
              </span>
              <span>14. Indemnification</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p>
                You agree to indemnify and hold harmless {companyData.legalName}, its directors, employees and representatives against third-party claims, damages or expenses arising from:
              </p>
              <ul className="space-y-2 text-slate-300">
                {[
                  'Your unlawful use of our services.',
                  'Your violation of these Terms.',
                  'Unauthorized materials or content supplied by you.',
                  'Your infringement of third-party intellectual property rights.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Shield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 pt-1">
                This provision applies to the extent permitted by applicable law.
              </p>
            </div>
          </section>

          {/* SECTION 15 */}
          <section id="section-15" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                15
              </span>
              <span>15. Suspension and Termination</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p>
                We reserve the right to suspend or terminate access to our website, software or services if:
              </p>
              <ul className="space-y-2 text-slate-300">
                {[
                  'These Terms are violated.',
                  'Fraudulent or illegal activities are identified.',
                  'Payments remain overdue.',
                  'Unauthorized access or misuse occurs.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Ban className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 pt-1">
                Termination of a client project or subscription will be governed by the applicable project or subscription agreement.
              </p>
            </div>
          </section>

          {/* SECTION 16 */}
          <section id="section-16" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                16
              </span>
              <span>16. External Links</span>
            </h2>
            <div className="space-y-3 pl-0 sm:pl-11">
              <p>
                Our website may contain links to external websites or third-party platforms.
              </p>
              <p>
                We do not control or take responsibility for the content, privacy practices or services provided by external websites.
              </p>
              <p className="text-xs text-slate-400">
                Users are encouraged to review the applicable terms and privacy policies of those websites.
              </p>
            </div>
          </section>

          {/* SECTION 17 */}
          <section id="section-17" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                17
              </span>
              <span>17. Changes to These Terms</span>
            </h2>
            <div className="space-y-3 pl-0 sm:pl-11">
              <p>
                We reserve the right to update or modify these Terms and Conditions whenever necessary.
              </p>
              <p>
                Changes will be published on this page with an updated revision date.
              </p>
              <p className="text-xs text-slate-400">
                Your continued use of our website after such changes constitutes acceptance of the revised Terms, to the extent permitted by applicable law.
              </p>
            </div>
          </section>

          {/* SECTION 18 */}
          <section id="section-18" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                18
              </span>
              <span>18. Governing Law and Jurisdiction</span>
            </h2>
            <div className="space-y-3 pl-0 sm:pl-11">
              <p>
                These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India.
              </p>
              <p>
                Any disputes arising from these Terms shall first be addressed through mutual discussion and good-faith efforts.
              </p>
              <p className="text-xs text-blue-300/90 bg-blue-950/30 border border-blue-500/20 rounded-lg p-3">
                Subject to applicable law, the competent courts having jurisdiction in Tamil Nadu, India, shall have jurisdiction over such disputes.
              </p>
            </div>
          </section>

          {/* SECTION 19 */}
          <section id="section-19" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-blue-500/30">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/40 text-blue-400 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                19
              </span>
              <span>19. Contact Information</span>
            </h2>
            <div className="space-y-4 pl-0 sm:pl-11">
              <p>
                If you have any questions regarding these Terms and Conditions, please contact us:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-500 uppercase font-mono block mb-1">Company Legal Entity</span>
                  <span className="text-sm font-semibold text-white">{companyData.legalName}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-500 uppercase font-mono block mb-1">Official Email</span>
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="text-sm font-mono text-blue-400 hover:underline break-all"
                  >
                    {companyData.contact.email}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-500 uppercase font-mono block mb-1">Official Website</span>
                  <a
                    href={companyData.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-blue-400 hover:underline flex items-center gap-1.5"
                  >
                    <span>{companyData.siteUrl}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-500 uppercase font-mono block mb-1">Registered Location</span>
                  <span className="text-sm text-slate-200">Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Signature */}
        <div className="mt-12 text-center text-xs text-slate-400 border-t border-slate-800/80 pt-8">
          <p>&copy; 2026 {companyData.legalName}. All Rights Reserved.</p>
        </div>
      </ScrollReveal>
    </div>
  );
};
