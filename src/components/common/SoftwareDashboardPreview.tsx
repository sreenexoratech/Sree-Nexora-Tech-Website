import React, { useState } from 'react';
import {
  ShieldCheck,
  Database,
  Receipt,
  Server,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  Lock
} from 'lucide-react';

export const SoftwareDashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'erp' | 'cloud'>('overview');

  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none rounded-[18px] bg-[#070D18]/90 border border-[#258BFF]/35 shadow-[0_25px_60px_-10px_rgba(3,5,10,0.95),0_0_40px_rgba(0,200,255,0.2)] backdrop-blur-2xl p-5 overflow-hidden transition-all duration-300 hover:border-[#00C8FF]/50">
      {/* Top Ambient Glow inside card */}
      <div className="absolute top-0 right-1/4 w-48 h-32 bg-[#00C8FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Window Top Bar & Controls */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[#0A1424]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.4)]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.4)]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.4)]" />
          <span className="ml-2 text-[11px] font-mono text-[#AAB7C8]">nexora-core.v2.6.prod</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-[#00C8FF]">
          <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
          <span className="hidden sm:inline">ONLINE • 99.99% UPTIME</span>
        </div>
      </div>

      {/* 2. Interactive View Switcher Tabs */}
      <div className="flex items-center gap-1.5 mt-3.5 p-1 rounded-xl bg-[#03050A]/70 border border-[#258BFF]/20 text-[11px] font-medium text-[#AAB7C8]">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'overview'
              ? 'bg-[#1264FF]/25 text-[#00C8FF] border border-[#00C8FF]/40 shadow-[0_0_12px_rgba(0,200,255,0.2)] font-semibold'
              : 'hover:text-white hover:bg-[#070D18]'
          }`}
        >
          <Activity className="w-3 h-3" />
          <span>Architecture</span>
        </button>
        <button
          onClick={() => setActiveTab('erp')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'erp'
              ? 'bg-[#1264FF]/25 text-[#00C8FF] border border-[#00C8FF]/40 shadow-[0_0_12px_rgba(0,200,255,0.2)] font-semibold'
              : 'hover:text-white hover:bg-[#070D18]'
          }`}
        >
          <Receipt className="w-3 h-3" />
          <span>ERP &amp; Invoicing</span>
        </button>
        <button
          onClick={() => setActiveTab('cloud')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'cloud'
              ? 'bg-[#1264FF]/25 text-[#00C8FF] border border-[#00C8FF]/40 shadow-[0_0_12px_rgba(0,200,255,0.2)] font-semibold'
              : 'hover:text-white hover:bg-[#070D18]'
          }`}
        >
          <Server className="w-3 h-3" />
          <span>Cloud &amp; Security</span>
        </button>
      </div>

      {/* 3. Terminal Deployment Command Output */}
      <div className="mt-3.5 p-3 rounded-xl bg-[#03050A]/90 border border-[#258BFF]/25 font-mono text-[11px] leading-relaxed">
        <div className="flex items-center gap-1.5 text-[#AAB7C8]">
          <span className="text-[#00C8FF] font-bold">$</span>
          <span>nexora deploy --target=enterprise-cluster</span>
        </div>
        <div className="mt-1.5 flex items-center gap-2 text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span>Systems Operational • 0.18ms Latency • SSL TLS_1.3</span>
        </div>
      </div>

      {/* 4. Tab 1: System Architecture Overview */}
      {activeTab === 'overview' && (
        <div className="mt-3.5 space-y-3 animate-in fade-in duration-200">
          {/* 4-Card Status Grid */}
          <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#0A1424]/80 border border-[#258BFF]/25 hover:border-[#00C8FF]/40 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#AAB7C8] text-[10px]">SECURITY</span>
                <Lock className="w-3 h-3 text-[#00C8FF]" />
              </div>
              <span className="text-white font-bold text-sm block">TLS / AES-256</span>
              <span className="text-[10px] text-[#00C8FF] block mt-0.5">End-to-End Encrypted</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0A1424]/80 border border-[#258BFF]/25 hover:border-[#00C8FF]/40 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#AAB7C8] text-[10px]">DATABASE</span>
                <Database className="w-3 h-3 text-emerald-400" />
              </div>
              <span className="text-white font-bold text-sm block">PostgreSQL / Cloud</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">Auto-Backup Active</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0A1424]/80 border border-[#258BFF]/25 hover:border-[#00C8FF]/40 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#AAB7C8] text-[10px]">GST &amp; BILLING</span>
                <Receipt className="w-3 h-3 text-[#258BFF]" />
              </div>
              <span className="text-white font-bold text-sm block">Real-Time Sync</span>
              <span className="text-[10px] text-[#258BFF] block mt-0.5">e-Way &amp; e-Invoice</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0A1424]/80 border border-[#258BFF]/25 hover:border-[#00C8FF]/40 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#AAB7C8] text-[10px]">ARCHITECTURE</span>
                <Layers className="w-3 h-3 text-purple-400" />
              </div>
              <span className="text-white font-bold text-sm block">Microservices</span>
              <span className="text-[10px] text-purple-400 block mt-0.5">High-Throughput</span>
            </div>
          </div>

          {/* Real-time Throughput SVG Wave Graphic */}
          <div className="p-3 rounded-xl bg-[#0A1424]/60 border border-[#258BFF]/25">
            <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
              <span className="text-[#AAB7C8]">Throughput Telemetry</span>
              <span className="text-[#00C8FF] font-bold">12,480 req/sec</span>
            </div>
            <svg viewBox="0 0 300 45" className="w-full h-9 stroke-[#00C8FF] fill-none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00C8FF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#1264FF" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,35 Q30,12 60,25 T120,18 T180,8 T240,20 T300,10 L300,45 L0,45 Z"
                fill="url(#chartGrad)"
                stroke="none"
              />
              <path
                d="M0,35 Q30,12 60,25 T120,18 T180,8 T240,20 T300,10"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      )}

      {/* 5. Tab 2: ERP & Billing Analytics Preview */}
      {activeTab === 'erp' && (
        <div className="mt-3.5 space-y-2.5 animate-in fade-in duration-200 text-xs">
          <div className="p-3 rounded-xl bg-[#0A1424]/90 border border-[#258BFF]/25">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[#AAB7C8] text-[11px] font-mono">GST COMPLIANCE ENGINE</span>
              <span className="text-xs font-bold text-emerald-400">GSTR-1, 3B Ready</span>
            </div>
            <div className="w-full bg-[#03050A] h-2 rounded-full overflow-hidden mt-2">
              <div className="bg-gradient-to-r from-[#1264FF] to-[#00C8FF] h-full w-[94%]" />
            </div>
            <div className="flex justify-between text-[10px] text-[#AAB7C8] font-mono mt-1.5">
              <span>Automated HSN / SAC Code Validation</span>
              <span className="text-[#00C8FF]">99.8% Sync</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div className="p-2.5 rounded-lg bg-[#03050A]/80 border border-[#258BFF]/20">
              <span className="text-[#AAB7C8] text-[10px] block">INVENTORY VELOCITY</span>
              <span className="text-white font-bold text-xs mt-0.5 block">Sub-Second Barcode</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#03050A]/80 border border-[#258BFF]/20">
              <span className="text-[#AAB7C8] text-[10px] block">PAYMENT GATEWAYS</span>
              <span className="text-[#00C8FF] font-bold text-xs mt-0.5 block">UPI / Razorpay / Net</span>
            </div>
          </div>
        </div>
      )}

      {/* 6. Tab 3: Cloud & Security Preview */}
      {activeTab === 'cloud' && (
        <div className="mt-3.5 space-y-2.5 animate-in fade-in duration-200 text-xs">
          <div className="p-3 rounded-xl bg-[#0A1424]/90 border border-[#258BFF]/25 font-mono">
            <div className="flex items-center justify-between text-[11px] text-[#AAB7C8] mb-2">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#00C8FF]" />
                Zero-Trust Security Perimeter
              </span>
              <span className="text-emerald-400">ACTIVE</span>
            </div>
            <p className="text-[10px] text-[#AAB7C8] leading-relaxed">
              Automated DDoS mitigation, SQL injection defense, daily snapshots with point-in-time recovery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
            <div className="p-2.5 rounded-lg bg-[#03050A]/80 border border-[#258BFF]/20 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#258BFF]" />
              <div>
                <span className="text-[10px] text-[#AAB7C8] block">CPU WORKLOAD</span>
                <span className="text-white font-bold">14.2% (Optimal)</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#03050A]/80 border border-[#258BFF]/20 flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-[#00C8FF]" />
              <div>
                <span className="text-[10px] text-[#AAB7C8] block">EDGE REGION</span>
                <span className="text-[#00C8FF] font-bold">Chennai / Mumbai</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. Bottom 24/7 Regional Support Bar */}
      <div className="mt-3.5 pt-3 border-t border-[#0A1424] flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-2 text-[#AAB7C8]">
          <Server className="w-3.5 h-3.5 text-[#00C8FF]" />
          <span>Multi-Cloud &amp; On-Premise Support</span>
        </div>
        <span className="text-[#00C8FF] font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          24/7 SLA
        </span>
      </div>
    </div>
  );
};
