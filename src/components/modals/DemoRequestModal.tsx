import React, { useState, useEffect } from 'react';
import { X, Check, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';
import { companyData } from '../../data/company';
import type { ProductItem } from '../../types';

export interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: ProductItem | null;
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({
  isOpen,
  onClose,
  product
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    preferredDate: new Date().toISOString().split('T')[0],
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const productName = product ? product.name : 'Nexora Enterprise Suite';

  const whatsappDemoUrl = `https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello Sree Nexora Tech team, I would like to schedule an interactive live demonstration for ${productName}.`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close demo request modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Demo Request Received</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our product specialist
              will contact you via WhatsApp / phone at <strong className="text-blue-400">{formData.phone}</strong> to
              confirm the interactive live walkthrough for <strong className="text-white">{productName}</strong>.
            </p>
            <div className="pt-4 flex items-center justify-center gap-3">
              <Button onClick={onClose} variant="glow" size="sm">
                Close
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-blue-950 text-blue-300 border border-blue-500/30">
                SCHEDULE DEMO
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Request a Live Demo for <span className="text-blue-400">{productName}</span>
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Experience a customized walkthrough tailored to your business operations. Our solutions
              engineer will show you live screens, data flows, and GST workflows.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Company / Store Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nexora Enterprises"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    WhatsApp / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Preferred Demo Date *
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Specific Features or Business Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need to see multi-branch stock transfer and thermal receipt print..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-blue-400 resize-none"
                />
              </div>

              <div className="pt-2 space-y-3">
                <Button
                  type="submit"
                  variant="glow"
                  size="md"
                  fullWidth
                  leftIcon={<Sparkles className="w-4 h-4 text-slate-950" />}
                >
                  Confirm Live Demo Request
                </Button>

                <div className="text-center">
                  <span className="text-[11px] text-slate-400 block mb-2">Or schedule immediately via chat:</span>
                  <Button
                    href={whatsappDemoUrl}
                    isExternal
                    variant="whatsapp"
                    size="sm"
                    fullWidth
                    leftIcon={<MessageSquare className="w-4 h-4" />}
                  >
                    Instant WhatsApp Demo Booking
                  </Button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
