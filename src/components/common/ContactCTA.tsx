import React from 'react';
import { Button } from '../ui/Button';
import { Calendar, PhoneCall, Mail, MessageSquare, ArrowRight, Shield } from 'lucide-react';
import { companyData, getBookCallLink } from '../../data/company';

export interface ContactCTAProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  className = '',
  title = "Ready to Accelerate Your Enterprise with Sree Nexora Tech?",
  subtitle = "Whether you require a scalable cloud ERP, custom web platform, rapid GST billing software, or an AI-automated digital funnel, our engineering team in Tamil Nadu is ready to architect your solution."
}) => {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Sree Nexora Tech team, I would like to schedule a technical consultation for my business.'
  )}`;

  const bookingAction = getBookCallLink();

  return (
    <section className={`relative overflow-hidden py-10 sm:py-16 ${className}`}>
      {/* Background Lighting & Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03050A] via-[#070D18] to-[#03050A] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-[#1264FF]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[280px] h-[200px] bg-[#00C8FF]/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[20px] p-6 sm:p-8 lg:p-10 bg-[#070D18]/90 border border-[#258BFF]/35 shadow-[0_20px_50px_-15px_rgba(3,5,10,0.95),0_0_25px_rgba(0,200,255,0.14)] backdrop-blur-2xl overflow-hidden">
          {/* Subtle top border highlight with glowing cyan beam */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C8FF] to-transparent" />

          <div className="max-w-2xl mx-auto text-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-4 bg-[#1264FF]/20 border border-[#00C8FF]/35 text-[#00C8FF] shadow-[0_0_12px_rgba(0,200,255,0.2)]">
              <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00C8FF]" />
              <span>DIRECT TECHNICAL CONSULTATION</span>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#F8FAFC] tracking-tight leading-snug sm:leading-tight">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-[15px] text-[#AAB7C8] font-normal leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button
                href={bookingAction.href}
                isExternal={bookingAction.isExternal}
                variant="glow"
                size="md"
                leftIcon={<Calendar className="w-4 h-4 text-white" />}
                rightIcon={<ArrowRight className="w-3.5 h-3.5 text-white" />}
              >
                Book a Strategy Call
              </Button>

              <Button
                href={whatsappUrl}
                isExternal
                variant="whatsapp"
                size="md"
                leftIcon={<MessageSquare className="w-4 h-4" />}
              >
                Chat on WhatsApp
              </Button>
            </div>

            {/* Direct Contact Information Strip */}
            <div className="mt-8 pt-6 border-t border-[#0A1424] grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] sm:text-xs text-[#AAB7C8]">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00C8FF] flex-shrink-0" />
                <span>
                  Official Inquiries:{' '}
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="text-[#F8FAFC] hover:text-[#00C8FF] font-medium transition-colors"
                  >
                    {companyData.contact.email}
                  </a>
                </span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#00C8FF] flex-shrink-0" />
                <span>
                  Tamil Nadu Office:{' '}
                  <a
                    href={`tel:${companyData.contact.phone}`}
                    className="text-[#F8FAFC] hover:text-[#00C8FF] font-medium transition-colors"
                  >
                    {companyData.contact.displayPhone}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
