import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { companyData } from '../../data/company';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    `Hello Sree Nexora Tech Pvt Ltd team, I would like to discuss a project / software inquiry with your team.`
  );

  const whatsappUrl = `https://wa.me/${companyData.contact.whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center">
      {/* Tooltip / Prompt bubble on desktop */}
      {showTooltip && (
        <div
          className={`hidden sm:flex items-center gap-1.5 mr-2.5 px-3 py-1.5 rounded-lg bg-slate-900/95 border border-emerald-500/30 text-white shadow-xl backdrop-blur-md text-[11px] font-medium transition-all duration-300 ${
            isHovered ? 'scale-105 border-emerald-400' : ''
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat with us on <strong className="text-emerald-400 font-semibold">WhatsApp</strong></span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="ml-1 text-slate-400 hover:text-white p-0.5 rounded transition-colors"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Speed Dial Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_6px_18px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_22px_rgba(37,211,102,0.5)] transform hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
        aria-label="Contact Sree Nexora Tech Pvt Ltd on WhatsApp"
      >
        {/* Pulsating ring */}
        <span className="absolute -inset-0.5 rounded-full bg-emerald-400/30 animate-ping opacity-50 group-hover:opacity-80 pointer-events-none" />

        <MessageCircle className="w-5 h-5 fill-white stroke-none transform group-hover:scale-110 transition-transform" />

        {/* Small badge */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-950"></span>
        </span>
      </a>
    </div>
  );
};
