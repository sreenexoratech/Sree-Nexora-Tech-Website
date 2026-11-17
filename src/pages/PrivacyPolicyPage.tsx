import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { companyData } from '../data/company';
import { Shield, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="relative pt-10 pb-20 overflow-hidden bg-[#03050A]">
      <SEOHead
        title="Privacy Policy | Sree Nexora Tech Pvt Ltd"
        description="Official Privacy Policy for Sree Nexora Tech Pvt Ltd. Learn how we collect, protect, and handle client and user information."
        canonicalPath="/privacy-policy"
      />

      <ScrollReveal direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <span>/</span>
          <span className="text-blue-400">Privacy Policy</span>
        </nav>

        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-2xl shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-500/30 text-blue-400 flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase">LEGAL COMPLIANCE</span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
            </div>
          </div>

          <p className="text-xs text-slate-400 border-b border-slate-800 pb-6 mb-6">
            Effective Date: January 1, 2026 • Last Updated: October 30, 2026 • Applies to: {companyData.legalName}
          </p>

          <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>1. Overview &amp; Commitment</span>
              </h2>
              <p>
                <strong>{companyData.legalName}</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the privacy, confidentiality, and data sovereignty of our clients, website visitors, and corporate software users. This Privacy Policy outlines our procedures regarding the collection, use, and disclosure of information when you interact with our websites, software products, and consulting services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>2. Information We Collect</span>
              </h2>
              <p className="mb-2">We collect only necessary information required to provide our IT services and software products:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-400">
                <li><strong>Contact Inquiries:</strong> Name, work email address, phone/WhatsApp number, company name, and project specifications submitted through consultation forms.</li>
                <li><strong>Software Product Accounts:</strong> User credentials, role authorizations, and operational logs required for licensed software usage.</li>
                <li><strong>Technical Diagnostics:</strong> Browser type, operating system version, and server response metrics utilized exclusively to maintain sub-second performance and uptime SLAs.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>3. Use of Information</span>
              </h2>
              <p>We process collected information to:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-400 mt-2">
                <li>Prepare and deliver technical proposals, software architectures, and commercial quotations.</li>
                <li>Provision, maintain, and support customer software instances (ERP, CRM, Billing POS, LMS, HRMS).</li>
                <li>Fulfill Indian statutory tax and regulatory compliance requirements.</li>
                <li>Respond promptly to direct customer support tickets and WhatsApp inquiries.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>4. Absolute Prohibition on Data Selling</span>
              </h2>
              <p>
                We do not sell, rent, monetize, or trade client or prospect information to third-party data brokers or advertising syndicates under any circumstances. Client information is strictly used for the fulfillment of our direct professional engagements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>5. Data Security Standards</span>
              </h2>
              <p>
                We implement industry-standard administrative, technical, and physical safeguards including AES-256 database encryption at rest, TLS transport security in transit, and role-based access restrictions. However, no electronic transmission over the internet can be guaranteed 100% impenetrable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>6. Contact Information Regarding Privacy</span>
              </h2>
              <p>
                For questions regarding this policy or to request data removal, contact our data administration desk at{' '}
                <a href={`mailto:${companyData.contact.email}`} className="text-blue-400 font-semibold underline">
                  {companyData.contact.email}
                </a>{' '}
                or write to {companyData.legalName}, {companyData.headquarters.addressLine}.
              </p>
            </section>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
