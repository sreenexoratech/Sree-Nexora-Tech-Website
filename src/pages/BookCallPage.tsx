import React, { useState } from 'react';
import { companyData } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { getBreadcrumbSchema } from '../lib/schema';
import { Button } from '../components/ui/Button';
import { TechBackground } from '../components/common/TechBackground';
import { ScrollReveal } from '../components/common/ScrollReveal';
import {
  Calendar,
  Clock,
  Video,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  ExternalLink
} from 'lucide-react';

export const BookCallPage: React.FC = () => {
  const [selectedCallType, setSelectedCallType] = useState<'video' | 'phone'>('video');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('11:00 AM - 11:30 AM IST');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });
  const [isBooked, setIsBooked] = useState(false);

  const timeSlots = [
    '10:00 AM - 10:30 AM IST',
    '11:00 AM - 11:30 AM IST',
    '02:30 PM - 03:00 PM IST',
    '04:00 PM - 04:30 PM IST',
    '05:30 PM - 06:00 PM IST'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="relative pt-10 pb-20 overflow-hidden bg-[#03050A]">
      <SEOHead
        title="Book an Executive Strategy Call | Sree Nexora Tech"
        description="Schedule a free 30-minute discovery consultation with senior solutions architects at Sree Nexora Tech Pvt Ltd to review project requirements and system architectures."
        canonicalPath="/book-a-call"
        jsonLd={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Book a Call', url: '/book-a-call' }
        ])}
      />
      {/* Tech Background Visual */}
      <TechBackground />

      {/* Page Header */}
      <ScrollReveal direction="up" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#070D18]/90 border border-[#00C8FF]/35 text-[#00C8FF] shadow-[0_0_20px_rgba(0,200,255,0.2)] backdrop-blur-md">
          <Calendar className="w-3.5 h-3.5 text-[#00C8FF]" />
          <span>FREE 30-MINUTE DISCOVERY SESSION</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
          Book a Strategy Call with Our{' '}
          <span className="bg-gradient-to-r from-[#258BFF] via-[#00C8FF] to-[#1264FF] bg-clip-text text-transparent">
            Technical Architects
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#AAB7C8] max-w-xl mx-auto">
          Schedule a direct consultation to discuss your software architecture, feature
          requirements, timeline, and preliminary budget.
        </p>
      </ScrollReveal>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Agenda & Value Props */}
          <ScrollReveal direction="up" delay={0.08} className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-[20px] bg-[#070D18]/90 border border-[#258BFF]/25 backdrop-blur-xl space-y-6 shadow-[0_12px_35px_rgba(3,5,10,0.85)]">
              <h3 className="text-lg font-bold text-white border-b border-[#0A1424] pb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00C8FF]" />
                <span>What Happens on This Call?</span>
              </h3>

              <div className="space-y-4 text-xs text-[#AAB7C8]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1264FF]/20 border border-[#00C8FF]/30 text-[#00C8FF] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Workflow &amp; Pain Point Review</strong>
                    <span>We evaluate where your current systems or spreadsheets fall short.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1264FF]/20 border border-[#00C8FF]/30 text-[#00C8FF] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Architecture &amp; Tech Match</strong>
                    <span>We recommend the optimal technology stack (React, Node, Cloud ERP, etc.).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1264FF]/20 border border-[#00C8FF]/30 text-[#00C8FF] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Timeline &amp; Cost Estimation</strong>
                    <span>Realistic milestones and transparent investment brackets with no hidden costs.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#0A1424] text-xs text-[#AAB7C8] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Non-disclosure &amp; strictly confidential discussion.</span>
              </div>
            </div>

            {/* Configurable Booking Calendar or WhatsApp Fallback Card */}
            <div className="p-6 rounded-[20px] bg-[#070D18]/90 border border-[#258BFF]/25 space-y-3 shadow-[0_12px_35px_rgba(3,5,10,0.85)]">
              <span className="text-[10px] font-mono font-bold uppercase text-[#00C8FF] tracking-wider block">
                SPEED BOOKING OPTIONS
              </span>

              {companyData.booking.calendarUrl ? (
                <div>
                  <p className="text-xs text-slate-300 mb-3">
                    Prefer direct self-scheduling on our interactive calendar?
                  </p>
                  <Button
                    href={companyData.booking.calendarUrl}
                    isExternal
                    variant="glow"
                    size="sm"
                    fullWidth
                    rightIcon={<ExternalLink className="w-3.5 h-3.5 text-slate-950" />}
                  >
                    Open Live Calendar Scheduler
                  </Button>
                </div>
              ) : (
                <div>
                  <p className="text-xs text-slate-300 mb-3">
                    Need an immediate slot confirmed? Connect with our desk directly on WhatsApp.
                  </p>
                  <Button
                    href={companyData.booking.whatsappFallbackUrl}
                    isExternal
                    variant="whatsapp"
                    size="sm"
                    fullWidth
                    leftIcon={<MessageSquare className="w-4 h-4" />}
                  >
                    Book via WhatsApp Direct
                  </Button>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Right Column: Booking Interface */}
          <ScrollReveal direction="up" delay={0.16} className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-2xl shadow-2xl">
              {isBooked ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Call Scheduled Successfully</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. We have registered your session
                    for <strong className="text-blue-400">{formData.date}</strong> at <strong className="text-blue-400">{selectedTimeSlot}</strong>.
                    Our team will send a calendar invitation to <span className="text-white">{formData.email}</span>.
                  </p>
                  <div className="pt-4">
                    <Button onClick={() => setIsBooked(false)} variant="outline" size="sm">
                      Reschedule / Book Another
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Meeting Format Preference */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                      Select Meeting Format
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedCallType('video')}
                        className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                          selectedCallType === 'video'
                            ? 'bg-blue-950/80 border-blue-400 text-white shadow-[0_0_15px_rgba(37, 99, 235, 0.25)]'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <Video className="w-4 h-4 text-blue-400" />
                        <span>Google Meet (Video)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedCallType('phone')}
                        className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                          selectedCallType === 'phone'
                            ? 'bg-blue-950/80 border-blue-400 text-white shadow-[0_0_15px_rgba(37, 99, 235, 0.25)]'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <PhoneCall className="w-4 h-4 text-blue-400" />
                        <span>Phone / WhatsApp Call</span>
                      </button>
                    </div>
                  </div>

                  {/* Date and Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Time Slot (IST) *
                      </label>
                      <select
                        value={selectedTimeSlot}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-400"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Personal and Business Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Krishnan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Brief Note on What You Want to Build (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need GST billing software for a 4-branch retail store in Coimbatore..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    fullWidth
                    leftIcon={<Calendar className="w-4 h-4 text-slate-950" />}
                  >
                    Confirm My Strategy Session
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
