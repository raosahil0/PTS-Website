import React from 'react';
import { Link } from 'react-router-dom';

export default function HardwareSolutions() {
  return (
    <main className="w-full pt-24 pb-16 flex-1 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
        <Link to="/" className="hover:text-primary">HOME</Link>
        <span>/</span>
        <span className="text-primary font-bold">HARDWARE SOLUTIONS & PCB REPAIR LAB</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-primary font-mono text-xs border border-primary-container/30">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span>LABORATORY & HARNESS FABRICATION</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
          Hardware Engineering, Cabling & PCB Laboratory
        </h1>
        <p className="text-lg text-on-surface-variant max-w-3xl leading-relaxed">
          We eliminate long lead times for expensive proprietary survey machine cables and replacement printed circuit boards. Our IPC-certified lab reconstructs multi-pin harnesses and performs component-level SMD micro-soldering in 24 to 48 hours.
        </p>
      </div>

      {/* 2 Disciplines Detailed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-4">
          <span className="material-symbols-outlined text-primary-container text-3xl">cable</span>
          <h2 className="text-xl font-bold text-primary">Custom Industrial Cable Manufacturing</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Engineered specifically for survey fleets subjected to severe vibrations, road grit, high temperatures, and continuous flexing. We fabricate custom harnesses with 98% braided shielding coverage to ensure zero sensor noise injection.
          </p>
          <div className="font-mono text-xs text-on-surface bg-surface-container-lowest p-3 rounded border border-outline-variant">
            Assemblies: MIL-DTL-38999, Lemo, Amphenol, Deutsch, Hirose, BNC, DB25, USB-C Industrial.
          </div>
        </div>

        <div className="p-8 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-4">
          <span className="material-symbols-outlined text-secondary text-3xl">memory</span>
          <h2 className="text-xl font-bold text-primary">Component-Level PCB Board Repair</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Avoid spending tens of thousands on full chassis replacements. Our technicians isolate blown TVS diodes, power regulator shorts, cracked solder joints, and defective ADCs under 45X stereoscopic magnification, restoring boards to IPC Class 3 standards.
          </p>
          <div className="font-mono text-xs text-on-surface bg-surface-container-lowest p-3 rounded border border-outline-variant">
            Warranty: 90-Day Full Component Warranty & 100% Thermal Burn-In Verification.
          </div>
        </div>
      </div>
    </main>
  );
}
