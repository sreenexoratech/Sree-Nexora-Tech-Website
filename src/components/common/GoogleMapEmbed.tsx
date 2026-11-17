import React, { useState } from 'react';
import { companyData } from '../../data/company';
import { MapPin, Navigation, ExternalLink, ShieldCheck, Sun, Moon, Compass } from 'lucide-react';
import { Button } from '../ui/Button';

export interface GoogleMapEmbedProps {
  className?: string;
  height?: string;
  defaultDarkMode?: boolean;
}

export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  className = '',
  height = 'h-[320px] xs:h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px]',
  defaultDarkMode = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(defaultDarkMode);

  return (
    <div
      className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 bg-slate-950/90 shadow-2xl backdrop-blur-xl ${className}`}
    >
      {/* Top Header Controls Bar */}
      <div className="p-3.5 sm:p-5 bg-slate-900/95 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 backdrop-blur-md">
        <div className="flex items-start sm:items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/40 text-blue-400 flex items-center justify-center flex-shrink-0 shadow-inner">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-sm sm:text-base font-bold text-white leading-tight truncate">
                {companyData.legalName}
              </h4>
              <span className="px-2 py-0.5 rounded-full bg-blue-950/90 border border-blue-500/40 text-[10px] font-mono text-blue-300 font-semibold tracking-wide uppercase">
                Verified Office
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5 flex-wrap">
              <span>{companyData.headquarters.addressLine}</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="font-mono text-[11px] text-blue-400/90">
                10.8753° N, 77.3170° E
              </span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end flex-shrink-0">
          {/* Map Theme Toggle (Dark Mode vs Vibrant Standard) */}
          <button
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
            title={isDarkMode ? 'Switch to Standard Map Colors' : 'Switch to Tech Dark Map Style'}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
          >
            {isDarkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px]">Normal</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[11px]">Dark</span>
              </>
            )}
          </button>

          {/* Open Directions CTA Button */}
          <Button
            href={companyData.maps.directionsUrl}
            isExternal
            variant="outline"
            size="sm"
            className="text-xs flex-1 sm:flex-none justify-center"
            rightIcon={<Navigation className="w-3.5 h-3.5 text-blue-400" />}
          >
            Get Directions
          </Button>
        </div>
      </div>

      {/* Responsive Map Iframe Container */}
      <div className={`relative w-full ${height} bg-slate-950 overflow-hidden`}>
        {/* Loading Spinner Placeholder until iframe renders */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950 z-10">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-blue-400 font-mono shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
              <span>Loading Google Maps Navigation...</span>
            </div>
          </div>
        )}

        <iframe
          title="Sree Nexora Tech Pvt Ltd Office Location - Verified Google Map"
          src={companyData.maps.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full border-0 transition-all duration-500 ${
            isDarkMode
              ? 'filter invert-[0.9] hue-rotate-180 contrast-125 brightness-95 opacity-90'
              : 'opacity-100'
          }`}
        />
      </div>

      {/* Bottom Region & Navigation Notice */}
      <div className="px-4 sm:px-5 py-3 bg-slate-950/95 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-400">
        <div className="flex items-center gap-2 flex-wrap">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
          <span>{companyData.headquarters.regionNotice}</span>
          <span className="text-slate-600 hidden md:inline">•</span>
          <span className="text-slate-500 hidden md:flex items-center gap-1 font-mono">
            <Compass className="w-3 h-3 text-slate-500" />
            Tamil Nadu, India
          </span>
        </div>

        <a
          href={companyData.maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 flex items-center gap-1.5 font-medium transition-colors self-end sm:self-auto"
        >
          <span>Open in Google Maps App</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
