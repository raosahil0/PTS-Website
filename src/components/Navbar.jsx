import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && (location.pathname === path || location.pathname === `${path}.html`)) return true;
    return false;
  };

  const navLinkClass = (path) =>
    isActive(path)
      ? "px-3 py-1.5 rounded transition-colors bg-surface-container-highest text-primary-fixed font-bold border border-primary-container/30"
      : "px-3 py-1.5 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-surface-container-high shadow-sm">
      {/* Top Telemetry / Status Bar */}
      <div className="w-full bg-surface-container-low px-4 sm:px-gutter-lg py-1 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant border-b border-surface-container-high/60">
        <div className="flex items-center gap-space-lg flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="text-primary font-bold tracking-wider">SYS_ID: PTS-CORP-984</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-outline">|</span>
            <span>CALIBRATION: ISO/IEC 17025 ACCREDITED</span>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-outline">|</span>
            <span>TELEMETRY: DUAL-LINK VALIDATED</span>
          </div>
        </div>
        <div className="flex items-center gap-space-lg">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-primary-container">radar</span>
            <span className="text-on-surface hidden xs:inline">STATUS:</span>
            <span className="text-primary-container font-bold">ONLINE / DISPATCH READY</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-tertiary-container">e911_emergency</span>
            <span>SUPPORT:</span>
            <a href="tel:+18005550787" className="text-tertiary-container hover:text-tertiary font-bold tracking-widest transition-colors">
              +1 (800) 555-PTS7
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-16 w-full px-4 sm:px-gutter-lg flex items-center justify-between gap-space-md bg-white">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-space-sm shrink-0 group py-1" aria-label="Perfect Tech Solutions Home">
          <img src="/logo.png" alt="PTS Logo" className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider">
          <Link to="/" className={navLinkClass('/')}>Home</Link>
          <Link to="/about" className={navLinkClass('/about')}>About PTS</Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              to="/services"
              className={`flex items-center gap-1 ${
                location.pathname.includes('/services') ||
                location.pathname.includes('/nsv') ||
                location.pathname.includes('/fwd') ||
                location.pathname.includes('/mbiu') ||
                location.pathname.includes('/software-and-data') ||
                location.pathname.includes('/hardware-solutions')
                  ? "px-3 py-1.5 rounded transition-colors bg-surface-container-highest text-primary-fixed font-bold border border-primary-container/30"
                  : "px-3 py-1.5 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
              }`}
            >
              <span>Services</span>
              <span className={`material-symbols-outlined text-[16px] transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </Link>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-2 w-80 rounded-xl bg-white border border-surface-container-high shadow-2xl p-2 flex flex-col gap-1 z-[100] transition-all ${servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
              <Link to="/services" className="p-2.5 rounded-lg hover:bg-surface-container-high flex items-center gap-2.5 text-primary font-bold text-xs uppercase border-b border-surface-container-high/60">
                <span className="material-symbols-outlined text-[18px] text-primary-container">handyman</span>
                <div className="flex flex-col">
                  <span>All Services & SLAs</span>
                  <span className="text-[10px] text-on-surface-variant font-normal normal-case">Complete service portfolio & contracts</span>
                </div>
              </Link>
              <Link to="/nsv" className="p-2 rounded-lg hover:bg-surface-container-high flex items-center gap-2.5 text-on-surface hover:text-primary text-xs uppercase transition-colors">
                <span className="material-symbols-outlined text-[18px] text-primary-container">directions_car</span>
                <div className="flex flex-col">
                  <span className="font-bold">Network Survey Vehicles (NSV)</span>
                  <span className="text-[10px] text-on-surface-variant font-normal normal-case">Laser profilometers & ROMDAS sync</span>
                </div>
              </Link>
              <Link to="/fwd" className="p-2 rounded-lg hover:bg-surface-container-high flex items-center gap-2.5 text-on-surface hover:text-primary text-xs uppercase transition-colors">
                <span className="material-symbols-outlined text-[18px] text-secondary">vertical_align_bottom</span>
                <div className="flex flex-col">
                  <span className="font-bold">Falling Weight Deflectometer (FWD)</span>
                  <span className="text-[10px] text-on-surface-variant font-normal normal-case">AASHTO R32 geophone calibrations</span>
                </div>
              </Link>
              <Link to="/mbiu" className="p-2 rounded-lg hover:bg-surface-container-high flex items-center gap-2.5 text-on-surface hover:text-primary text-xs uppercase transition-colors">
                <span className="material-symbols-outlined text-[18px] text-tertiary-container">construction</span>
                <div className="flex flex-col">
                  <span className="font-bold">Mobile Bridge Inspection (MBIU)</span>
                  <span className="text-[10px] text-on-surface-variant font-normal normal-case">Proportional valves & safety interlocks</span>
                </div>
              </Link>
              <Link to="/software-and-data" className="p-2 rounded-lg hover:bg-surface-container-high flex items-center gap-2.5 text-on-surface hover:text-primary text-xs uppercase transition-colors">
                <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">analytics</span>
                <div className="flex flex-col">
                  <span className="font-bold">Software & Data Processing</span>
                  <span className="text-[10px] text-on-surface-variant font-normal normal-case">IRI filtering & moduli back-calculation</span>
                </div>
              </Link>
              <Link to="/hardware-solutions" className="p-2 rounded-lg hover:bg-surface-container-high flex items-center gap-2.5 text-on-surface hover:text-primary text-xs uppercase transition-colors">
                <span className="material-symbols-outlined text-[18px] text-primary">cable</span>
                <div className="flex flex-col">
                  <span className="font-bold">Hardware Solutions & PCB Lab</span>
                  <span className="text-[10px] text-on-surface-variant font-normal normal-case">Custom MIL-spec cabling & micro-soldering</span>
                </div>
              </Link>
            </div>
          </div>

          <Link to="/projects" className={navLinkClass('/projects')}>Projects</Link>
          <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-space-sm sm:gap-space-md shrink-0">
          {/* Quick Search Palette Trigger */}
          <button
            onClick={onOpenSearch}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-surface-container-high border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary-container text-label-sm font-mono transition-colors"
            title="Search Fleet Specs (Ctrl+K)"
          >
            <span className="material-symbols-outlined text-[16px]">search</span>
            <span className="hidden lg:inline">Search</span>
            <kbd className="px-1 py-0.5 rounded bg-surface-container-lowest text-[10px] text-primary border border-outline-variant">Ctrl+K</kbd>
          </button>

          {/* Request Support Primary CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-3 sm:px-space-md py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md tracking-wider uppercase font-bold hover:bg-primary transition-all shadow-md hover:shadow-cyan-500/20"
          >
            <span className="material-symbols-outlined text-[18px]">build_circle</span>
            <span className="hidden sm:inline">Request Support</span>
            <span className="sm:hidden">Support</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-container-highest transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[96px] bg-white border-b border-surface-container-highest shadow-2xl p-4 flex flex-col gap-3 font-label-md text-label-md max-h-[85vh] overflow-y-auto z-[100]">
          <Link to="/" className="p-2.5 rounded bg-surface-container text-on-surface flex items-center gap-2 hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-[18px] text-primary-container">home</span>
            <span>Home</span>
          </Link>
          <Link to="/about" className="p-2.5 rounded bg-surface-container text-on-surface flex items-center gap-2 hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-[18px] text-secondary">info</span>
            <span>About PTS</span>
          </Link>

          {/* Grouped Services in Mobile Drawer */}
          <div className="p-3 rounded-lg bg-surface-container-high border border-primary-container/30 flex flex-col gap-2">
            <div className="font-mono text-xs text-primary font-bold uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary-container">handyman</span>
              <span>Services & Equipment Fleets</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5 pl-2 pt-1">
              <Link to="/services" className="p-2 rounded bg-surface-container text-primary font-bold text-xs hover:bg-surface-container-highest">All Services Overview</Link>
              <Link to="/nsv" className="p-2 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary text-xs">Network Survey Vehicles (NSV)</Link>
              <Link to="/fwd" className="p-2 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary text-xs">Falling Weight Deflectometer (FWD)</Link>
              <Link to="/mbiu" className="p-2 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary text-xs">Mobile Bridge Inspection (MBIU)</Link>
              <Link to="/software-and-data" className="p-2 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary text-xs">Software & Data Processing</Link>
              <Link to="/hardware-solutions" className="p-2 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary text-xs">Hardware Solutions & PCB Lab</Link>
            </div>
          </div>

          <Link to="/projects" className="p-2.5 rounded bg-surface-container text-on-surface flex items-center gap-2 hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-[18px] text-tertiary-container">folder_special</span>
            <span>Projects & Case Studies</span>
          </Link>
          <Link to="/contact" className="p-2.5 rounded bg-surface-container text-on-surface flex items-center gap-2 hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-[18px] text-primary-container">contact_support</span>
            <span>Contact & Dispatch Portal</span>
          </Link>

          <div className="pt-2 border-t border-outline-variant/40 flex flex-col gap-2">
            <a href="tel:+18005550787" className="w-full py-2.5 rounded bg-surface-container-high text-tertiary-container font-mono text-xs flex items-center justify-center gap-2 border border-outline-variant font-bold">
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>24/7 Field Support Hotline</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
