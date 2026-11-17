import React from 'react';
import { Link } from 'react-router-dom';
import type { ProductItem } from '../../types';
import { Button } from '../ui/Button';
import {
  Check,
  ExternalLink,
  Laptop,
  Sparkles,
  Layers,
  ShieldCheck,
  Clock,
  Eye
} from 'lucide-react';
import { cn } from '../../lib/utils';

export interface ProductCardProps {
  product: ProductItem;
  className?: string;
  onRequestDemo?: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  onRequestDemo
}) => {
  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-[18px] overflow-hidden',
        'bg-[#070D18]/85 border border-[#258BFF]/25 hover:border-[#00C8FF]/50',
        'backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5',
        'shadow-[0_12px_35px_-10px_rgba(3,5,10,0.85)] hover:shadow-[0_25px_60px_-15px_rgba(3,5,10,0.98),0_0_30px_rgba(0,200,255,0.2)]',
        className
      )}
    >
      {/* Product Mockup Header Preview */}
      <div className="relative h-52 sm:h-56 w-full bg-gradient-to-b from-[#0A1424] to-[#03050A] flex flex-col items-center justify-center p-4 border-b border-[#0A1424] overflow-hidden">
        {/* Abstract Blueprint Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,139,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,139,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />

        {/* Ambient Glow */}
        <div className="absolute -top-12 w-44 h-44 bg-[#00C8FF]/15 rounded-full blur-3xl group-hover:bg-[#00C8FF]/30 transition-colors duration-500" />

        {/* Browser / Application Frame Mockup */}
        <div className="relative w-full max-w-[320px] sm:max-w-[350px] rounded-xl bg-[#03050A]/95 border border-[#258BFF]/30 shadow-2xl p-3 transform group-hover:scale-[1.02] transition-transform duration-300">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-[#0A1424] mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
              <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-[#00C8FF]">
              <Laptop className="w-3 h-3 text-[#00C8FF]" />
              <span className="truncate max-w-[140px] font-semibold">{product.name} Cloud</span>
            </div>
          </div>

          {/* Miniature UI Dashboard Simulator */}
          <div className="space-y-1.5 font-mono">
            <div className="flex items-center justify-between gap-2">
              <div className="h-4 px-1.5 bg-[#1264FF]/20 rounded border border-[#00C8FF]/30 flex items-center">
                <span className="text-[9px] text-[#00C8FF] font-bold">READY • v2.6</span>
              </div>
              <div className="h-4 px-1.5 bg-emerald-950/80 rounded border border-emerald-500/30 flex items-center justify-center">
                <span className="text-[9px] text-emerald-300 font-bold">99.9% UPTIME</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className="h-8 bg-[#070D18] rounded p-1.5 border border-[#258BFF]/20 flex flex-col justify-center">
                <div className="h-1.5 w-6 bg-[#258BFF]/30 rounded-full mb-1" />
                <div className="h-2 w-10 bg-[#00C8FF]/40 rounded-full" />
              </div>
              <div className="h-8 bg-[#070D18] rounded p-1.5 border border-[#258BFF]/20 flex flex-col justify-center">
                <div className="h-1.5 w-7 bg-[#258BFF]/30 rounded-full mb-1" />
                <div className="h-2 w-8 bg-[#1264FF]/40 rounded-full" />
              </div>
              <div className="h-8 bg-[#070D18] rounded p-1.5 border border-[#258BFF]/20 flex flex-col justify-center">
                <div className="h-1.5 w-5 bg-[#258BFF]/30 rounded-full mb-1" />
                <div className="h-2 w-9 bg-slate-600/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Category & Status Badges */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wider uppercase bg-[#03050A]/90 text-[#00C8FF] border border-[#00C8FF]/30 backdrop-blur-md">
            <Layers className="w-3 h-3 text-[#00C8FF]" />
            {product.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wider uppercase bg-emerald-950/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md font-mono">
            <ShieldCheck className="w-3 h-3" />
            {product.badge || product.status}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-col flex-grow p-6 sm:p-7 justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] group-hover:text-[#00C8FF] transition-colors">
            <Link to={`/products/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="text-xs font-medium text-[#00C8FF] mt-1 font-mono">
            {product.tagline}
          </p>

          <p className="mt-3.5 text-xs sm:text-sm text-[#AAB7C8] leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Main Features */}
          <div className="mt-5 space-y-2">
            <div className="text-[11px] font-bold text-[#C0C7D1] uppercase tracking-wider mb-2 font-mono">
              Main Capabilities:
            </div>
            {product.features.slice(0, 4).map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#F8FAFC]">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#1264FF]/20 border border-[#00C8FF]/40 text-[#00C8FF] flex items-center justify-center mt-0.5">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>

          {/* Specifications Pills */}
          {product.specs && (
            <div className="mt-5 pt-4 border-t border-[#0A1424] flex flex-wrap gap-1.5">
              {product.specs.slice(0, 3).map((spec, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#03050A] text-[#AAB7C8] border border-[#258BFF]/20"
                >
                  <strong className="text-[#00C8FF] font-semibold">{spec.label}:</strong> {spec.value}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 3 Explicit Buttons: View Details, Live Demo, Request a Demo */}
        <div className="mt-6 pt-5 border-t border-[#0A1424] space-y-2.5">
          {/* Top Row: Request a Demo (Primary Highlight) */}
          <Button
            onClick={() => {
              if (onRequestDemo) {
                onRequestDemo(product);
              } else {
                window.location.href = `/contact?demo=${product.slug}`;
              }
            }}
            variant="glow"
            size="sm"
            fullWidth
            leftIcon={<Sparkles className="w-3.5 h-3.5 text-white" />}
          >
            Request a Demo
          </Button>

          {/* Bottom Row: View Details + Live Demo / Demo Coming Soon */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              href={`/products/${product.slug}`}
              variant="outline"
              size="sm"
              className="text-xs"
              leftIcon={<Eye className="w-3.5 h-3.5" />}
            >
              View Details
            </Button>

            {product.hasLiveDemo && product.demoUrl ? (
              <Button
                href={product.demoUrl}
                isExternal
                variant="secondary"
                size="sm"
                className="text-xs text-[#00C8FF] hover:text-white"
                rightIcon={<ExternalLink className="w-3 h-3" />}
              >
                Live Demo
              </Button>
            ) : (
              <div
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-2 py-2 rounded-xl bg-[#03050A] border border-[#258BFF]/25 text-amber-400 select-none cursor-default font-mono"
                title="Public sandbox not configured. Request a private live demo to experience the software."
              >
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Demo Coming Soon</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
