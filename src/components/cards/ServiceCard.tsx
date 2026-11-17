import React from 'react';
import { Link } from 'react-router-dom';
import type { ServiceItem } from '../../types';
import {
  Globe,
  ShoppingCart,
  Users,
  Database,
  Receipt,
  PackageCheck,
  GraduationCap,
  Briefcase,
  Code2,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Receipt: <Receipt className="w-6 h-6" />,
  PackageCheck: <PackageCheck className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Megaphone: <Megaphone className="w-6 h-6" />
};

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  showBenefits?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  className,
  showBenefits = true
}) => {
  const icon = iconMap[service.iconName] || <Code2 className="w-6 h-6" />;

  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between p-6 sm:p-7 rounded-[18px]',
        'bg-[#070D18]/85 border border-[#258BFF]/25 hover:border-[#00C8FF]/50',
        'backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5',
        'shadow-[0_10px_30px_-10px_rgba(3,5,10,0.8)] hover:shadow-[0_20px_50px_-10px_rgba(3,5,10,0.95),0_0_25px_rgba(0,200,255,0.22)]',
        className
      )}
    >
      {/* Ambient Top Glow on Hover */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#00C8FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Header: Icon & Category */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#070D18] via-[#0A1424] to-[#1264FF]/20 border border-[#258BFF]/40 text-[#00C8FF] group-hover:scale-105 group-hover:border-[#00C8FF] group-hover:shadow-[0_0_20px_rgba(0,200,255,0.35)] transition-all duration-300">
            {icon}
          </div>
          <span className="text-[10px] font-mono font-semibold tracking-wider text-[#00C8FF] bg-[#1264FF]/15 px-2.5 py-1 rounded-md border border-[#00C8FF]/30 uppercase">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#00C8FF] transition-colors duration-200">
          <Link to={`/services/${service.slug}`} className="hover:underline">
            {service.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm text-[#AAB7C8] leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Key Features List */}
        <div className="mt-5 space-y-2 pt-4 border-t border-[#0A1424]">
          <div className="text-[11px] font-bold text-[#C0C7D1] uppercase tracking-wider mb-2 font-mono">
            Key Capabilities
          </div>
          {service.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8FF] flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        {/* Highlighted Business Benefit */}
        {showBenefits && service.businessBenefits && service.businessBenefits.length > 0 && (
          <div className="mt-4 p-3 rounded-xl bg-[#03050A]/80 border border-[#258BFF]/20 flex items-start gap-2.5">
            <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-bold text-emerald-300 block">
                {service.businessBenefits[0].title}
              </span>
              <p className="text-[11px] text-[#AAB7C8] line-clamp-2 mt-0.5">
                {service.businessBenefits[0].description}
              </p>
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {service.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#03050A] text-[#C0C7D1] border border-[#258BFF]/25"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Dual CTA Actions: Explore Details + Enquire / Consult */}
      <div className="mt-6 pt-4 border-t border-[#0A1424] flex items-center justify-between gap-3">
        <Button
          href={`/services/${service.slug}`}
          variant="outline"
          size="sm"
          className="text-xs flex-1"
          rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
        >
          View Details
        </Button>

        <Button
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          variant="secondary"
          size="sm"
          className="text-xs"
          leftIcon={<MessageSquare className="w-3.5 h-3.5 text-[#00C8FF]" />}
        >
          Enquire
        </Button>
      </div>
    </div>
  );
};
