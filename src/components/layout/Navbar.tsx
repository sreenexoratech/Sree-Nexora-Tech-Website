import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { Button } from '../ui/Button';
import { SocialLinks } from '../common/SocialLinks';
import { navigationLinks } from '../../data/navigation';
import { getBookCallLink } from '../../data/company';
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  const location = useLocation();
  const bookingAction = getBookCallLink();

  // Scroll listener for sticky floating navbar behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 sm:py-3.5',
        isScrolled
          ? 'bg-[#03050A]/70 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        {/* Rounded Glass Container (18px Radius) */}
        <div
          className={cn(
            'flex items-center justify-between px-2.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-[16px] sm:rounded-[18px] transition-all duration-300',
            'bg-[#070D18]/85 backdrop-blur-2xl border border-[#258BFF]/25 shadow-[0_12px_40px_-10px_rgba(3,5,10,0.95),0_0_20px_rgba(18,100,255,0.12)]',
            isScrolled && 'border-[#00C8FF]/35 shadow-[0_16px_50px_-10px_rgba(3,5,10,0.98),0_0_25px_rgba(0,200,255,0.18)]'
          )}
        >
          {/* Brand Logo & Name Area with High-Visibility Glow */}
          <div className="relative flex-shrink-0">
            <div className="absolute -left-3 -top-2 w-36 h-14 bg-[#00C8FF]/15 rounded-full blur-xl pointer-events-none" />
            <Logo variant="full" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationLinks.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200',
                          isActive || location.pathname.startsWith('/services')
                            ? 'text-[#00C8FF] bg-[#1264FF]/20 border border-[#00C8FF]/40 shadow-[0_0_15px_rgba(0,200,255,0.25)]'
                            : 'text-[#AAB7C8] hover:text-[#F8FAFC] hover:bg-[#0A1424]/80'
                        )
                      }
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200',
                          servicesDropdownOpen ? 'rotate-180 text-[#00C8FF]' : 'text-slate-400'
                        )}
                      />
                    </NavLink>

                    {/* Mega-Dropdown for Services */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[700px] animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-4 rounded-[18px] bg-[#070D18]/95 border border-[#258BFF]/35 shadow-[0_20px_60px_rgba(3,5,10,0.95),0_0_30px_rgba(0,200,255,0.15)] backdrop-blur-2xl grid grid-cols-2 gap-2">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="group p-3 rounded-xl hover:bg-[#0A1424] transition-colors border border-transparent hover:border-[#258BFF]/30"
                            >
                              <div className="text-xs font-semibold text-white group-hover:text-[#00C8FF] flex items-center justify-between">
                                <span>{subItem.title}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#00C8FF]" />
                              </div>
                              {subItem.description && (
                                <p className="text-[11px] text-[#AAB7C8] line-clamp-1 mt-1 font-normal">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          ))}
                          <div className="col-span-2 pt-2.5 mt-1 border-t border-[#0A1424] flex items-center justify-between text-xs text-[#AAB7C8] px-2">
                            <span>Bespoke enterprise engineering for Tamil Nadu &amp; Pan-India</span>
                            <Link to="/services" className="text-[#00C8FF] font-semibold hover:underline">
                              View all 10 services &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Anchor links (e.g. hash links)
              const isAnchor = item.href.startsWith('/#');
              if (isAnchor) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold text-[#AAB7C8] hover:text-[#F8FAFC] hover:bg-[#0A1424]/80 transition-all duration-200"
                  >
                    {item.title}
                  </a>
                );
              }

              return (
                <NavLink
                  key={item.title}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200',
                      isActive
                        ? 'text-[#00C8FF] bg-[#1264FF]/20 border border-[#00C8FF]/40 shadow-[0_0_15px_rgba(0,200,255,0.25)]'
                        : 'text-[#AAB7C8] hover:text-[#F8FAFC] hover:bg-[#0A1424]/80'
                    )
                  }
                >
                  {item.title}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Area: Book a Call Button */}
          <div className="hidden lg:flex items-center">
            <Button
              href={bookingAction.href}
              isExternal={bookingAction.isExternal}
              variant="glow"
              size="sm"
              leftIcon={<Calendar className="w-3.5 h-3.5 text-white" />}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Navigation Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden flex-shrink-0">
            {/* Tablet & Small Desktop (>= 640px): Full text button */}
            <Button
              href={bookingAction.href}
              isExternal={bookingAction.isExternal}
              variant="glow"
              size="sm"
              className="hidden sm:inline-flex text-xs py-1.5 px-3 min-h-[34px] whitespace-nowrap"
              leftIcon={<Calendar className="w-3.5 h-3.5 text-white" />}
            >
              Book Call
            </Button>

            {/* Mobile Phones (< 640px): Sleek Glowing Calendar Action Icon Button */}
            <a
              href={bookingAction.href}
              target={bookingAction.isExternal ? '_blank' : undefined}
              rel={bookingAction.isExternal ? 'noopener noreferrer' : undefined}
              className="sm:hidden inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-r from-[#1264FF] to-[#00C8FF] text-white shadow-[0_0_15px_rgba(0,200,255,0.45)] border border-[#00C8FF]/50 hover:shadow-[0_0_22px_rgba(0,200,255,0.7)] transition-all flex-shrink-0 active:scale-95"
              aria-label="Book a Strategy Call"
              title="Book a Strategy Call"
            >
              <Calendar className="w-4 h-4 text-white" />
            </a>

            {/* Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl bg-[#070D18] border border-[#258BFF]/30 text-[#AAB7C8] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00C8FF] flex-shrink-0 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00C8FF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (18px Rounded Container) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-2.5 sm:inset-x-4 top-[64px] sm:top-[76px] max-h-[85vh] bg-[#070D18]/98 backdrop-blur-2xl border border-[#258BFF]/35 rounded-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,200,255,0.15)] overflow-y-auto p-4 sm:p-5 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-2">
            {navigationLinks.map((item) => {
              if (item.children) {
                return (
                  <div key={item.title} className="rounded-xl bg-[#0A1424]/70 border border-[#258BFF]/20 overflow-hidden">
                    <button
                      onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                      className="w-full flex items-center justify-between p-3.5 text-left text-sm font-semibold text-[#F8FAFC]"
                    >
                      <span className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#00C8FF]" />
                        {item.title}
                      </span>
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          mobileServicesExpanded ? 'rotate-180 text-[#00C8FF]' : 'text-slate-400'
                        )}
                      />
                    </button>

                    {mobileServicesExpanded && (
                      <div className="px-3 pb-3 pt-1 space-y-1 bg-[#03050A]/60">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block px-3 py-2 rounded-lg text-xs font-medium text-[#AAB7C8] hover:text-[#00C8FF] hover:bg-[#0A1424]"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isAnchor = item.href.startsWith('/#');
              if (isAnchor) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3.5 rounded-xl text-sm font-semibold text-[#F8FAFC] hover:bg-[#0A1424] transition-colors flex items-center justify-between"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#AAB7C8]" />
                  </a>
                );
              }

              return (
                <NavLink
                  key={item.title}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'p-3.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between',
                      isActive
                        ? 'bg-[#1264FF]/20 text-[#00C8FF] border border-[#00C8FF]/40'
                        : 'text-[#F8FAFC] hover:bg-[#0A1424]'
                    )
                  }
                >
                  <span>{item.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#AAB7C8]" />
                </NavLink>
              );
            })}

            {/* Mobile Call CTA & Socials */}
            <div className="pt-4 border-t border-[#258BFF]/20 mt-4 space-y-4">
              <Button
                href={bookingAction.href}
                isExternal={bookingAction.isExternal}
                variant="glow"
                size="md"
                fullWidth
                leftIcon={<Calendar className="w-4 h-4 text-white" />}
              >
                Book a Strategy Call
              </Button>

              <div className="text-center pt-2">
                <span className="text-[11px] font-semibold text-[#AAB7C8] uppercase tracking-wider block mb-3">
                  Connect on Social Channels:
                </span>
                <div className="flex justify-center">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
