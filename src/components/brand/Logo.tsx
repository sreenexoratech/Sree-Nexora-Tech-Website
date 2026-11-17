import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'full' | 'mark' | 'compact';
  className?: string;
  isLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  isLink = true
}) => {
  const content = (
    <div className={`flex items-center gap-2 sm:gap-3.5 select-none flex-shrink-0 ${className}`}>
      {/* Official Sree Nexora Tech Emblem with High-Contrast Luminous Container */}
      <div className="relative flex-shrink-0">
        {/* Ambient Halo Glow */}
        <div className="absolute -inset-1 rounded-full bg-[#00C8FF]/35 blur-md opacity-75 group-hover:opacity-100 group-hover:bg-[#00C8FF]/55 transition-all duration-300" />

        {/* Light Circular Contrast Badge Container */}
        <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full p-0.5 sm:p-1 bg-gradient-to-br from-white via-[#F8FAFC] to-[#E2E8F0] border-2 border-[#00C8FF] shadow-[0_0_22px_rgba(0,200,255,0.45)] ring-1 ring-white/90 flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:shadow-[0_0_32px_rgba(0,200,255,0.75)] transition-all duration-300">
          <img
            src="/brand-logo.png"
            alt="Sree Nexora Tech Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            width="48"
            height="48"
            loading="eager"
          />
        </div>
      </div>

      {/* Typography: Wordmark aligned with Electric Blue & Cyan identity */}
      {variant !== 'mark' && (
        <div className="flex flex-col justify-center leading-none flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.25em] text-[#00C8FF] uppercase font-mono">
              SREE
            </span>
          </div>
          <div className="flex items-center whitespace-nowrap">
            <span className="text-base sm:text-lg md:text-xl font-black tracking-tight text-white">
              NEXORA
            </span>
            <span className="text-base sm:text-lg md:text-xl font-black tracking-tight bg-gradient-to-r from-[#258BFF] via-[#00C8FF] to-[#1264FF] bg-clip-text text-transparent ml-1 sm:ml-1.5">
              TECH
            </span>
          </div>
          {variant === 'full' && (
            <span className="text-[7.5px] sm:text-[9px] font-semibold tracking-wider text-[#AAB7C8] uppercase mt-0.5 font-mono whitespace-nowrap">
              PVT LTD • IT &amp; SOFTWARE
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (isLink) {
    return (
      <Link
        to="/"
        className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg group"
        aria-label="Sree Nexora Tech Pvt Ltd - Home"
      >
        {content}
      </Link>
    );
  }

  return content;
};
