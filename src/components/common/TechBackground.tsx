import React from 'react';

export const TechBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Deep Radial Ambient Lighting */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#1264FF]/20 via-[#00C8FF]/10 to-transparent blur-[140px] opacity-70" />
      <div className="absolute top-1/4 -right-24 w-[480px] h-[480px] bg-[#258BFF]/15 rounded-full blur-[130px] opacity-60" />
      <div className="absolute top-1/3 -left-24 w-[420px] h-[420px] bg-[#00C8FF]/12 rounded-full blur-[120px] opacity-50" />

      {/* 2. Digital Matrix Grid Perspective */}
      <div className="absolute inset-0 bg-digital-grid opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* 3. Subtle Circuit Paths & Connection SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cyanBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#258BFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00C8FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1264FF" stopOpacity="0.4" />
          </linearGradient>

          <pattern id="circuitGrid" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M 120 0 L 0 0 0 120"
              fill="none"
              stroke="rgba(37, 139, 255, 0.08)"
              strokeWidth="1"
            />
            {/* Circuit Traces */}
            <path
              d="M 20 120 L 20 80 L 60 40 L 120 40"
              fill="none"
              stroke="rgba(0, 200, 255, 0.18)"
              strokeWidth="1"
            />
            <path
              d="M 0 60 L 40 60 L 80 100 L 120 100"
              fill="none"
              stroke="rgba(37, 139, 255, 0.15)"
              strokeWidth="1"
            />
            {/* Circuit Micro-Nodes */}
            <circle cx="20" cy="80" r="2.5" fill="#00C8FF" fillOpacity="0.3" />
            <circle cx="60" cy="40" r="2.5" fill="#258BFF" fillOpacity="0.4" />
            <circle cx="80" cy="100" r="2" fill="#00C8FF" fillOpacity="0.3" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#circuitGrid)" />

        {/* Global Connecting Circuit Vectors */}
        <path
          d="M 100,120 Q 300,50 600,140 T 1200,80"
          fill="none"
          stroke="url(#cyanBlueGrad)"
          strokeWidth="1.2"
          strokeDasharray="6 6"
          className="opacity-40"
        />
        <path
          d="M 50,320 Q 400,260 800,340 T 1400,290"
          fill="none"
          stroke="url(#cyanBlueGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          className="opacity-30"
        />

        {/* Pulsing Highlight Nodes */}
        <circle cx="600" cy="140" r="4" fill="#00C8FF" className="animate-pulse" />
        <circle cx="600" cy="140" r="10" stroke="#00C8FF" strokeWidth="1" fill="none" opacity="0.4" />
        <circle cx="800" cy="340" r="3.5" fill="#258BFF" />
        <circle cx="800" cy="340" r="8" stroke="#258BFF" strokeWidth="1" fill="none" opacity="0.3" />
      </svg>

      {/* 4. Animated Laser Sweep Beam */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden opacity-40">
        <div
          className="absolute -inset-x-full top-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#00C8FF] to-transparent animate-laser-sweep blur-[1px]"
        />
      </div>

      {/* 5. Floating Code & Architecture Fragments (Subtle & High-Tech) */}
      <div className="hidden lg:block absolute inset-0 select-none opacity-20 font-mono text-[10px] text-[#00C8FF]">
        <div className="absolute top-28 left-[8%] tracking-widest bg-[#070D18]/80 px-2 py-0.5 rounded border border-[#258BFF]/20">
          INIT_SYSTEM(TLS_1.3)
        </div>
        <div className="absolute top-64 left-[4%] tracking-widest bg-[#070D18]/80 px-2 py-0.5 rounded border border-[#258BFF]/20">
          PORT:8443::STATUS_OK
        </div>
        <div className="absolute top-44 right-[8%] tracking-widest bg-[#070D18]/80 px-2 py-0.5 rounded border border-[#00C8FF]/20 text-[#258BFF]">
          POSTGRESQL_REPLICA::SYNC
        </div>
        <div className="absolute top-80 right-[5%] tracking-widest bg-[#070D18]/80 px-2 py-0.5 rounded border border-[#258BFF]/20">
          K8S_PODS_HEALTHY::100%
        </div>
        <div className="absolute top-96 left-[12%] tracking-widest bg-[#070D18]/80 px-2 py-0.5 rounded border border-[#258BFF]/20 text-[#AAB7C8]">
          AES_256_GCM_ENCRYPT
        </div>
      </div>
    </div>
  );
};

