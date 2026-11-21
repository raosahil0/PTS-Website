import React from 'react';
import { Link } from 'react-router-dom';

export default function MBIU() {
  return (
    <main className="w-full pt-24 pb-16 flex-1 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
        <Link to="/" className="hover:text-primary">HOME</Link>
        <span>/</span>
        <span className="text-primary font-bold">MOBILE BRIDGE INSPECTION UNITS (MBIU)</span>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-tertiary-container font-mono text-xs border border-tertiary-container/30">
            <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
            <span>CRITICAL ACCESS & STRUCTURAL SAFETY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
            Mobile Bridge Inspection Units (MBIU) Engineering
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Ensuring zero downtime for life-critical under-bridge inspection access platforms. PTS delivers complete electro-hydraulic proportional valve overhauls, 2.4 GHz frequency-hopping wireless remote rebuilds, and dual-redundant safety interlock certifications.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/contact" className="px-6 py-3 rounded bg-primary-container text-on-primary font-bold uppercase tracking-wider text-sm hover:bg-primary transition-all">
              Emergency MBIU Dispatch
            </Link>
            <Link to="/services" className="px-6 py-3 rounded bg-surface-container-high text-on-surface font-bold uppercase tracking-wider text-sm hover:bg-surface-bright transition-all border border-outline-variant">
              Annual Maintenance Contracts (AMC)
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-xl overflow-hidden border border-surface-container-high bg-surface-container-lowest">
          <img alt="Mobile Bridge Inspection Unit deployed under a high-span concrete freeway bridge with technicians" className="w-full h-80 object-cover" src="/mbiu-unit.jpg" />
        </div>
      </div>

      {/* Technical Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-3">
          <span className="material-symbols-outlined text-tertiary-container text-3xl">valve</span>
          <h3 className="text-lg font-bold text-primary">Proportional Valve Systems</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Servicing and spool alignment for Danfoss, Rexroth, and Hawe proportional valves to eliminate hydraulic stutter and prevent platform drift.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-3">
          <span className="material-symbols-outlined text-secondary text-3xl">wifi_tethering</span>
          <h3 className="text-lg font-bold text-primary">Industrial Radio Remote Links</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Transmitter RF antenna recertification, battery telemetry management, and safety e-stop relay integration with SIL-3 compliance.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-3">
          <span className="material-symbols-outlined text-primary-container text-3xl">lock</span>
          <h3 className="text-lg font-bold text-primary">Safety Limit Interlocks</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Inspection and load testing of outrigger proximity switches, boom tilt inclinometers, and counterweight overload monitoring circuits.
          </p>
        </div>
      </div>
    </main>
  );
}
