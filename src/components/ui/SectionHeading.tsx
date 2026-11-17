import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  badgeClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeIcon,
  title,
  highlightedWord,
  subtitle,
  align = 'center',
  className,
  badgeClassName
}) => {
  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  // Splitting title if highlightedWord is provided
  const renderTitle = () => {
    if (!highlightedWord) {
      return title;
    }

    const parts = title.split(new RegExp(`(${highlightedWord})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlightedWord.toLowerCase() ? (
            <span
              key={i}
              className="bg-gradient-to-r from-[#258BFF] via-[#00C8FF] to-[#1264FF] bg-clip-text text-transparent"
            >
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div
      className={cn(
        'flex flex-col max-w-3xl mb-12 sm:mb-16',
        alignmentStyles[align],
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4',
            'bg-[#070D18]/90 border border-[#00C8FF]/35 text-[#00C8FF] shadow-[0_0_20px_rgba(0,200,255,0.2)] backdrop-blur-md',
            badgeClassName
          )}
        >
          {badgeIcon ? (
            <span className="w-3.5 h-3.5 text-[#00C8FF]">{badgeIcon}</span>
          ) : (
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF] animate-pulse" />
          )}
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.2]">
        {renderTitle()}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#AAB7C8] font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
