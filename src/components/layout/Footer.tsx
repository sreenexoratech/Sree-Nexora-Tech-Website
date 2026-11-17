import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { SocialLinks } from '../common/SocialLinks';
import { companyData, getBookCallLink } from '../../data/company';
import { servicesData } from '../../data/services';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { Button } from '../ui/Button';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const currentYear = CURRENT_YEAR;
  const bookingAction = getBookCallLink();

  const whatsappDirectUrl = `https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Sree Nexora Tech team, I would like to connect with your solutions team.'
  )}`;

  return (
    <footer className="relative bg-[#03050A] border-t border-[#258BFF]/20 text-[#AAB7C8] pt-16 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#1264FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#00C8FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#0A1424]">
          {/* ========================================================
              COLUMN 1: COMPANY LOGO, INTRODUCTION & SOCIAL MEDIA
             ======================================================== */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="full" />
            <p className="text-sm text-[#AAB7C8] leading-relaxed max-w-sm">
              {companyData.description}
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider block mb-3 font-mono">
                Official Social Channels
              </span>
              <SocialLinks iconClassName="w-8 h-8 text-[#AAB7C8] hover:text-[#00C8FF] transition-colors" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#070D18] border border-[#258BFF]/20 text-xs text-[#AAB7C8]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8FF] flex-shrink-0" />
              <span>{companyData.headquarters.regionNotice}</span>
            </div>
          </div>

          {/* ========================================================
              COLUMN 2: QUICK LINKS
             ======================================================== */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#00C8FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00C8FF] transition-colors">
                  About Nexora
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00C8FF] transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#00C8FF] transition-colors">
                  Software Products
                </Link>
              </li>
              <li>
                <a href="/#portfolio" className="hover:text-[#00C8FF] transition-colors">
                  Enterprise Portfolio
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00C8FF] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-[#00C8FF] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#00C8FF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                {bookingAction.isExternal ? (
                  <a
                    href={bookingAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#00C8FF] hover:text-white font-medium transition-colors"
                  >
                    <span>Book a Call</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                ) : (
                  <Link
                    to={bookingAction.href}
                    className="inline-flex items-center gap-1 text-[#00C8FF] hover:text-white font-medium transition-colors"
                  >
                    <span>Book a Call</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {/* ========================================================
              COLUMN 3: OUR SERVICES
             ======================================================== */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Our Services
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs">
              {servicesData.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-[#00C8FF] transition-colors flex items-center gap-1.5 text-[#AAB7C8]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00C8FF]" />
                    <span className="truncate">{service.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link to="/services" className="text-[#00C8FF] hover:underline font-semibold flex items-center gap-1">
                  <span>View all 10 services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* ========================================================
              COLUMN 4: CONTACT INFORMATION & WHATSAPP
             ======================================================== */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Contact Information
            </h4>
            <div className="space-y-3.5 text-xs text-[#AAB7C8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00C8FF] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">
                    {companyData.legalName}
                  </span>
                  <span>{companyData.headquarters.addressLine}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00C8FF] flex-shrink-0" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="hover:text-[#00C8FF] transition-colors break-all font-mono text-[11px] sm:text-xs text-[#F8FAFC]"
                >
                  {companyData.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00C8FF] flex-shrink-0" />
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="hover:text-[#00C8FF] transition-colors text-[#F8FAFC]"
                >
                  {companyData.contact.displayPhone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#00C8FF] flex-shrink-0 mt-0.5" />
                <span>{companyData.contact.workingHours}</span>
              </div>

              {/* Direct WhatsApp Contact Link CTA Button */}
              <div className="pt-2">
                <Button
                  href={whatsappDirectUrl}
                  isExternal
                  variant="whatsapp"
                  size="sm"
                  fullWidth
                  className="text-xs py-2"
                  leftIcon={<MessageSquare className="w-3.5 h-3.5" />}
                >
                  WhatsApp Direct Helpdesk
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            LEGAL, PRIVACY, TERMS & COPYRIGHT ROW
            (Vertically centered top and bottom with equal padding,
             restoring left & right distributed layout)
           ======================================================== */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAB7C8]">
          <div className="flex items-center text-center sm:text-left">
            &copy; {currentYear}{' '}
            <strong className="font-semibold text-[#F8FAFC] ml-1">
              {companyData.legalName}
            </strong>
            . All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <Link to="/terms-and-conditions" className="hover:text-[#00C8FF] font-medium text-[#F8FAFC] transition-colors">
              Terms and Conditions
            </Link>
            <span className="text-slate-700 select-none">•</span>
            <Link to="/privacy-policy" className="hover:text-[#00C8FF] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700 select-none">•</span>
            <Link to="/contact" className="hover:text-[#00C8FF] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
