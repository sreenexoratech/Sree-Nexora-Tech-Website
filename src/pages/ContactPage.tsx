import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { companyData, getBookCallLink } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../lib/schema';
import { servicesData } from '../data/services';
import { Button } from '../components/ui/Button';
import { GoogleMapEmbed } from '../components/common/GoogleMapEmbed';
import { SocialLinks } from '../components/common/SocialLinks';
import { TechBackground } from '../components/common/TechBackground';
import { ScrollReveal } from '../components/common/ScrollReveal';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Calendar,
  ArrowRight,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  message: string;
  botField: string; // Spam protection honeypot
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || searchParams.get('demo') || '';

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: initialService || 'General Technical Consultation',
    message: '',
    botField: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [formRenderTime, setFormRenderTime] = useState<number>(0);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [dispatchedBrief, setDispatchedBrief] = useState<string>('');

  useEffect(() => {
    setFormRenderTime(Date.now());
  }, []);

  // Format Project Brief for Email and Clipboard
  const formatProjectBrief = (state: FormState): string => {
    return [
      `==================================================`,
      `DIRECT CONSULTATION INQUIRY - PROJECT BRIEF`,
      `==================================================`,
      `Target Recipient: ${companyData.contact.email}`,
      `Date & Time:      ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`,
      `--------------------------------------------------`,
      `CLIENT CONTACT DETAILS:`,
      `- Full Name:       ${state.fullName}`,
      `- Company Name:    ${state.companyName.trim() || 'Individual / Startup'}`,
      `- Email Address:   ${state.email}`,
      `- Phone / WhatsApp:${state.phone}`,
      `- Selected Need:   ${state.service}`,
      `--------------------------------------------------`,
      `PROJECT REQUIREMENTS & SCOPE:`,
      state.message,
      `==================================================`,
      `Dispatched via Sree Nexora Tech Corporate Portal`
    ].join('\n');
  };

  const getEmailSubject = (state: FormState): string => {
    const org = state.companyName.trim() ? ` (${state.companyName.trim()})` : '';
    return `[Project Brief] ${state.service} - ${state.fullName}${org}`;
  };

  const getMailtoUrl = (state: FormState): string => {
    const subject = getEmailSubject(state);
    const body = formatProjectBrief(state);
    return `mailto:${companyData.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getGmailWebUrl = (state: FormState): string => {
    const subject = getEmailSubject(state);
    const body = formatProjectBrief(state);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      companyData.contact.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getWhatsAppForwardUrl = (state: FormState): string => {
    const text = `Hello Sree Nexora Tech team, my name is ${state.fullName}${
      state.companyName.trim() ? ` (${state.companyName.trim()})` : ''
    }.\n\nI have sent a Direct Project Brief for *${state.service}* to your official email (${companyData.contact.email}):\n\n${state.message}\n\nPlease confirm receipt so we can discuss the technical scope.`;
    return `https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  // Validation rules
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // 1. Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    // 2. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid official email address.';
    }

    // 3. Phone validation (Indian / international numbers with optional country code)
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required.';
    } else if (!phoneRegex.test(formData.phone.trim().replace(/\s/g, ''))) {
      newErrors.phone = 'Please provide a valid contact number (at least 10 digits).';
    }

    // 4. Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or project requirement.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please describe your requirement in at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam Protection: 1. Honeypot check
    if (formData.botField) {
      // Bot detected, silently block
      console.warn('Bot submission blocked via honeypot.');
      return;
    }

    // Spam Protection: 2. Timestamp check (must take > 1.2 seconds to fill form)
    if (Date.now() - formRenderTime < 1200) {
      setSubmitStatus('error');
      setStatusMessage('Submission was too rapid. Please try again.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formattedBrief = formatProjectBrief(formData);
    setDispatchedBrief(formattedBrief);

    const apiEndpoint = companyData.api.contactEndpoint;

    // Optional API dispatch if configured
    if (apiEndpoint) {
      try {
        await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            companyName: formData.companyName,
            service: formData.service,
            message: formData.message,
            targetEmail: companyData.contact.email,
            submittedAt: new Date().toISOString()
          })
        });
      } catch (err: any) {
        console.warn('Optional backend endpoint call failed, continuing with direct mailto dispatch.', err);
      }
    }

    // Front-End Direct Email Dispatch: Trigger mailto client
    const mailtoUrl = getMailtoUrl(formData);
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Ignore if browser restricts direct navigation
    }

    setIsSubmitting(false);
    setSubmitStatus('success');
    setStatusMessage(`Your project brief has been formatted and targeted to ${companyData.contact.email}.`);
  };

  const bookingAction = getBookCallLink();

  const whatsappInquiryUrl = `https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello Sree Nexora Tech team, my name is ${formData.fullName || 'a client'}. I would like to discuss a project regarding ${formData.service}.`
  )}`;

  return (
    <div className="relative pt-8 pb-20 overflow-hidden bg-[#03050A]">
      <SEOHead
        title="Contact Us & Tamil Nadu Office Location | Sree Nexora Tech"
        description="Connect with Sree Nexora Tech Pvt Ltd. Request a direct consultation, visit our verified Tamil Nadu location, or chat directly via WhatsApp."
        keywords="Contact Sree Nexora Tech, hire software developers Tamil Nadu, software development office Coimbatore, enterprise software consultation India, software inquiry"
        canonicalPath="/contact"
        jsonLd={[
          getLocalBusinessSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact Us', url: '/contact' }
          ])
        ]}
      />
      {/* Tech Background Visual */}
      <TechBackground />

      {/* Page Header */}
      <ScrollReveal direction="up" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#070D18]/90 border border-[#00C8FF]/35 text-[#00C8FF] shadow-[0_0_20px_rgba(0,200,255,0.2)] backdrop-blur-md">
          <Mail className="w-3.5 h-3.5 text-[#00C8FF]" />
          <span>CONNECT WITH SREE NEXORA TECH</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Start Your Technical Consultation with{' '}
          <span className="bg-gradient-to-r from-[#258BFF] via-[#00C8FF] to-[#1264FF] bg-clip-text text-transparent">
            Our Engineers
          </span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[#AAB7C8] max-w-2xl mx-auto leading-relaxed">
          Reach out to discuss custom software development, cloud ERP, billing automation, or digital growth.
          Our team in Tamil Nadu is ready to evaluate your requirements.
        </p>
      </ScrollReveal>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Form (Col 7) */}
          <ScrollReveal direction="up" delay={0.08} className="lg:col-span-7">
            <div className="p-5 sm:p-8 lg:p-10 rounded-[20px] bg-[#070D18]/90 border border-[#258BFF]/25 backdrop-blur-2xl shadow-[0_15px_40px_rgba(3,5,10,0.9)] relative">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold tracking-wider text-[#00C8FF] uppercase block mb-1">
                  DIRECT CONSULTATION INQUIRY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Send a Direct Project Brief
                </h3>
                <p className="text-xs text-[#AAB7C8] mt-1 leading-relaxed">
                  Fill in your project requirements below to submit directly to our engineering desk at{' '}
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#03050A] border border-[#258BFF]/30 text-[#00C8FF] hover:text-white font-mono text-[11px] sm:text-xs font-semibold break-all transition-colors align-middle"
                  >
                    <Mail className="w-3 h-3 text-[#00C8FF] flex-shrink-0" />
                    <span>{companyData.contact.email}</span>
                  </a>
                </p>
              </div>

              {/* Success / Transmission Confirmation Card */}
              {submitStatus === 'success' && (
                <div className="p-4 sm:p-6 lg:p-7 rounded-2xl bg-gradient-to-br from-emerald-950/90 via-slate-900 to-slate-950 border border-emerald-500/50 text-emerald-200 mb-6 space-y-4 sm:space-y-5 shadow-2xl overflow-hidden">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-900/70 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 font-bold tracking-wide uppercase inline-block">
                        DIRECT BRIEF PREPARED
                      </span>
                      <h4 className="text-base sm:text-xl font-bold text-white mt-1 leading-snug">
                        Project Brief Dispatched to Engineering Desk
                      </h4>
                      <div className="mt-2 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="text-slate-400 flex-shrink-0">Target Destination:</span>
                        <a
                          href={`mailto:${companyData.contact.email}`}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-emerald-500/40 text-blue-300 hover:text-white font-mono text-[11px] sm:text-xs font-semibold break-all transition-colors max-w-full"
                        >
                          <Mail className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                          <span className="break-all">{companyData.contact.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    We have triggered your default email application with your complete technical brief addressed
                    to <span className="font-mono text-white font-semibold break-all">{companyData.contact.email}</span>. If your mail app
                    did not open automatically or you prefer webmail, choose any option below:
                  </p>

                  {/* Multi-channel dispatch options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <Button
                      href={getGmailWebUrl(formData)}
                      isExternal
                      variant="glow"
                      size="sm"
                      className="text-xs justify-center"
                      rightIcon={<ExternalLink className="w-3.5 h-3.5 text-slate-950" />}
                    >
                      Open in Gmail Web
                    </Button>

                    <Button
                      href={getMailtoUrl(formData)}
                      isExternal
                      variant="outline"
                      size="sm"
                      className="text-xs justify-center"
                      rightIcon={<Mail className="w-3.5 h-3.5 text-blue-400" />}
                    >
                      Open Default Mail App
                    </Button>

                    <Button
                      href={getWhatsAppForwardUrl(formData)}
                      isExternal
                      variant="whatsapp"
                      size="sm"
                      className="text-xs justify-center"
                      leftIcon={<MessageSquare className="w-3.5 h-3.5" />}
                    >
                      Forward on WhatsApp ({companyData.contact.displayPhone})
                    </Button>

                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(dispatchedBrief);
                        setCopiedBrief(true);
                        setTimeout(() => setCopiedBrief(false), 2500);
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      {copiedBrief ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-300">Brief Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Project Brief</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Submission Summary Preview */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1 overflow-hidden">
                    <div className="flex items-center justify-between text-slate-500 pb-1 border-b border-slate-800 gap-2">
                      <span className="flex-shrink-0">TRANSMISSION SUMMARY</span>
                      <span className="text-blue-400 truncate">{formData.service}</span>
                    </div>
                    <div className="pt-1 text-slate-400 break-words">
                      <span className="text-white font-semibold">{formData.fullName}</span>
                      {formData.companyName && <span> • {formData.companyName}</span>}
                      <span className="block text-blue-300/90 break-all mt-0.5">
                        {formData.email} • {formData.phone}
                      </span>
                    </div>
                    <p className="text-slate-300 line-clamp-3 pt-1 italic break-words">"{formData.message}"</p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-t border-slate-800/80">
                    <span className="text-[11px] text-slate-400">
                      Direct Review: Mon – Sat 9:00 AM – 7:00 PM IST
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitStatus('idle');
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          companyName: '',
                          service: 'General Technical Consultation',
                          message: '',
                          botField: ''
                        });
                      }}
                      className="text-xs text-blue-400 hover:underline font-semibold"
                    >
                      Send Another Project Brief &rarr;
                    </button>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-200 text-xs mb-6 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Submission Notice:</strong>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              {submitStatus !== 'success' && (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Honeypot Spam Protection Field */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="botField">Leave this field blank</label>
                    <input
                      type="text"
                      id="botField"
                      name="botField"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.botField}
                      onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                    />
                  </div>

                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Anand Kumar"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-xs placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-slate-700/80 focus:border-blue-400'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] text-rose-400">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nexora Enterprises"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Official Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-xs placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-slate-700/80 focus:border-blue-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-400">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone / WhatsApp <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-xs placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-slate-700/80 focus:border-blue-400'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-rose-400">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Service or Software Product Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-blue-400 transition-colors"
                    >
                      <option value="General Technical Consultation">General Technical Consultation</option>
                      <optgroup label="IT Services">
                        {servicesData.map((s) => (
                          <option key={s.id} value={`Service: ${s.title}`}>
                            {s.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Turnkey Software Products">
                        <option value="Product: Nexora Billing & POS">Nexora Billing &amp; POS (GST Suite)</option>
                        <option value="Product: Nexora Cloud ERP">Nexora Cloud ERP Suite</option>
                        <option value="Product: Nexora CRM Hub">Nexora CRM Hub</option>
                        <option value="Product: Nexora Inventory Manager">Nexora Inventory Manager</option>
                        <option value="Product: Nexora HRMS & Payroll">Nexora HRMS &amp; Payroll</option>
                        <option value="Product: Nexora EduLMS Academy">Nexora EduLMS Academy</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Requirements &amp; Scope <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what you are looking to build, expected timelines, or any specific questions..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-xs placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-700/80 focus:border-blue-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-rose-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="glow"
                      size="lg"
                      fullWidth
                      isLoading={isSubmitting}
                      leftIcon={<Send className="w-4 h-4 text-slate-950" />}
                    >
                      {isSubmitting ? 'Dispatching Direct Brief...' : 'Send Direct Project Brief'}
                    </Button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-2 leading-relaxed">
                    Front-end direct submission to{' '}
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-blue-400 hover:underline font-mono font-semibold break-all"
                    >
                      {companyData.contact.email}
                    </a>
                    . We never share customer contact details.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Details, Socials, & Appointment CTA (Col 5) */}
          <ScrollReveal direction="up" delay={0.16} className="lg:col-span-5 space-y-6">
            {/* Book a Call Feature Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-blue-950/80 via-slate-900 to-blue-950/80 border border-blue-500/40 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-900/60 border border-blue-500/30 text-blue-300 text-[10px] font-mono font-bold uppercase w-fit mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>DIRECT APPOINTMENT</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Book an Executive Discovery Call</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Prefer an in-depth conversation? Schedule a dedicated 30-minute discovery call with our
                systems architect.
              </p>
              <Button
                href={bookingAction.href}
                isExternal={bookingAction.isExternal}
                variant="glow"
                size="md"
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4 text-slate-950" />}
              >
                Book a Strategy Call
              </Button>
            </div>

            {/* Verified Company Information */}
            <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl space-y-6">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>Corporate Contact</span>
                <span className="text-[10px] font-mono text-blue-400">VERIFIED HQ</span>
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block mb-0.5">
                      {companyData.legalName}
                    </strong>
                    <span>{companyData.headquarters.addressLine}</span>
                    <span className="text-blue-400 block mt-0.5 font-medium">
                      {companyData.headquarters.regionNotice}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block mb-0.5">Official Inquiries &amp; Briefs:</span>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-white hover:text-blue-300 font-semibold break-all"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block mb-0.5">Direct Helpline:</span>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="text-white hover:text-blue-300 font-semibold text-sm"
                    >
                      {companyData.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block mb-0.5">Operating Hours:</span>
                    <span className="text-white font-medium">{companyData.contact.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Centralized Social Media Links Strip */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Official Social Channels:
                </span>
                <SocialLinks showLabels={false} />
              </div>
            </div>

            {/* Quick WhatsApp Line */}
            <div className="p-6 rounded-3xl bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 fill-white stroke-none" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct WhatsApp Desk</h4>
                  <p className="text-xs text-emerald-400">{companyData.contact.whatsappDisplay}</p>
                </div>
              </div>
              <Button
                href={whatsappInquiryUrl}
                isExternal
                variant="whatsapp"
                size="sm"
                className="text-xs flex-shrink-0"
              >
                Chat Now
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* ========================================================
            EMBEDDED GOOGLE MAP SECTION — RESPONSIVE ON ALL DEVICES
           ======================================================== */}
        <ScrollReveal direction="up" delay={0.1} className="mt-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase">
              VERIFIED OFFICE LOCATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Visit Sree Nexora Tech in Tamil Nadu
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Our registered IT office is situated in Tamil Nadu, India. Explore our verified location on the
              interactive map below or get turn-by-turn driving directions directly to your device.
            </p>
          </div>

          <GoogleMapEmbed />
        </ScrollReveal>
      </div>
    </div>
  );
};
