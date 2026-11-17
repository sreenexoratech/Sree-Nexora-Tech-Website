import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      href,
      isExternal = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00C8FF] select-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98] max-w-full text-center leading-snug';

    const sizeStyles = {
      sm: 'text-xs px-3 sm:px-3.5 py-2 gap-1.5 min-h-[36px] sm:min-h-[38px]',
      md: 'text-xs sm:text-sm px-4 sm:px-5 py-2.5 gap-2 min-h-[42px] sm:min-h-[46px]',
      lg: 'text-sm sm:text-base px-4 sm:px-7 py-3 sm:py-3.5 gap-2 sm:gap-2.5 min-h-[46px] sm:min-h-[52px]'
    };

    const variantStyles = {
      primary:
        'bg-gradient-to-r from-[#1264FF] via-[#258BFF] to-[#00C8FF] text-white shadow-lg shadow-[#1264FF]/35 hover:shadow-[#00C8FF]/40 hover:brightness-110 border border-[#00C8FF]/40 font-bold',
      secondary:
        'bg-[#070D18]/90 hover:bg-[#0A1424] text-[#F8FAFC] border border-[#258BFF]/30 hover:border-[#00C8FF]/60 shadow-md backdrop-blur-md hover:shadow-[0_0_20px_rgba(0,200,255,0.2)]',
      outline:
        'border border-[#258BFF]/50 hover:border-[#00C8FF] text-[#00C8FF] hover:text-white hover:bg-[#1264FF]/20 backdrop-blur-sm shadow-[0_0_15px_rgba(37,139,255,0.15)]',
      ghost:
        'text-[#AAB7C8] hover:text-[#F8FAFC] hover:bg-[#070D18]/80 hover:text-[#00C8FF]',
      glow:
        'bg-gradient-to-r from-[#1264FF] via-[#258BFF] to-[#00C8FF] text-white font-extrabold shadow-[0_0_25px_rgba(0,200,255,0.45)] hover:shadow-[0_0_40px_rgba(37,139,255,0.7)] hover:scale-[1.02] border border-[#F8FAFC]/30',
      whatsapp:
        'bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50'
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      fullWidth && 'w-full',
      className
    );

    const innerContent = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
        {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="flex-shrink-0 transition-transform group-hover:translate-x-1">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {innerContent}
          </a>
        );
      }
      return (
        <Link to={href} className={combinedClassName}>
          {innerContent}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {innerContent}
      </button>
    );
  }
);

Button.displayName = 'Button';
