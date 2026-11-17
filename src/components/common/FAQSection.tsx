import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { aioFaqList } from '../../lib/schema';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export const FAQSection: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className={cn('relative py-16 sm:py-24 border-t border-[#0A1424] bg-[#03050A]', className)}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="AI OVERVIEW & KNOWLEDGE BASE"
            badgeIcon={<HelpCircle className="w-3.5 h-3.5" />}
            title="Frequently Answered Architecture & Service Questions"
            highlightedWord="Architecture & Service"
            subtitle="Verified answers on our enterprise software solutions, Tamil Nadu engineering headquarters, GST compliance standards, and engagement models."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-10 space-y-4">
          {aioFaqList.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.05}>
                <div
                  className={cn(
                    'rounded-[18px] transition-all duration-300 overflow-hidden border',
                    isOpen
                      ? 'bg-[#070D18]/95 border-[#00C8FF]/50 shadow-[0_10px_30px_rgba(0,200,255,0.15)]'
                      : 'bg-[#070D18]/70 border-[#258BFF]/20 hover:border-[#258BFF]/45'
                  )}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 pr-4">
                      <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#1264FF]/20 border border-[#00C8FF]/30 text-[#00C8FF] text-xs font-mono font-bold flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <h3
                        className="text-base sm:text-lg font-bold text-white group-hover:text-[#00C8FF] transition-colors"
                        itemProp="name"
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={cn(
                        'w-8 h-8 rounded-xl bg-[#0A1424] border border-[#258BFF]/30 flex items-center justify-center text-[#00C8FF] flex-shrink-0 transition-transform duration-300',
                        isOpen ? 'rotate-180 bg-[#1264FF]/20 border-[#00C8FF]' : ''
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#AAB7C8] leading-relaxed border-t border-[#0A1424]/80 animate-in fade-in duration-200"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div className="flex items-start gap-2.5 pt-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <p itemProp="text" className="text-[#C0C7D1]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

