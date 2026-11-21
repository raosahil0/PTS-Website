import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="w-full pt-32 pb-20 flex-1 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
        <Link to="/" className="hover:text-primary">HOME</Link>
        <span>/</span>
        <span className="text-primary font-bold">ABOUT PTS</span>
      </div>

      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-primary font-mono text-xs border border-primary-container/30">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span>INFRASTRUCTURE SYSTEMS HERITAGE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
          Engineering Integrity for Global Infrastructure Diagnostics
        </h1>
        <p className="text-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Perfect Tech Solutions (PTS) is the specialized end-to-end technical engineering partner for modern road, pavement, and bridge inspection systems. We support civil infrastructure operators, DOT contractors, and survey consultancies across the complete lifecycle.
        </p>
      </div>

      {/* Facility Visual Banner */}
      <div className="relative rounded-2xl overflow-hidden border border-surface-container-high shadow-lg">
        <img src="/lab-facility.jpg" alt="PTS ISO 17025 Metrology & Calibration Facility" className="w-full h-64 sm:h-80 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent flex flex-col justify-end p-6 sm:p-8">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">// CENTRAL METROLOGY & CALIBRATION FACILITY</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">NIST-Traceable Laser & Seismic Sensor Calibration Laboratory</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
            Climate-controlled testing beds, optical flats, and automated vibration isolation towers certified to ISO/IEC 17025 and IPC-A-610 Class 3.
          </p>
        </div>
      </div>

      {/* Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-3">
          <span className="material-symbols-outlined text-primary-container text-3xl">verified_user</span>
          <h3 className="text-xl font-bold text-primary">ISO/IEC 17025 Accredited</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Our primary calibration lab maintains strict traceability to national metrology institutes for seismic geophone sensitivity, dynamic load cell impulse calibration, and laser displacement verification.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-3">
          <span className="material-symbols-outlined text-secondary text-3xl">biotech</span>
          <h3 className="text-xl font-bold text-primary">IPC-A-610 Class 3 Lab</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            High-reliability electronics bench certified for aerospace and critical infrastructure. We execute micro-soldering down to 01005 passives and multi-layer telemetry board trace restoration.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-3">
          <span className="material-symbols-outlined text-tertiary-container text-3xl">local_shipping</span>
          <h3 className="text-xl font-bold text-primary">24/7 Field Support Deployment</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Rapid mobilization teams equipped with specialized portable diagnostic DAQ units, loaner geophones, and replacement sensor harnesses for zero-downtime survey fleet operations.
          </p>
        </div>
      </div>

      {/* Technical Heritage & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest p-8 rounded-2xl border border-surface-container-high">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <span className="font-mono text-xs text-primary-container font-bold uppercase tracking-wider">// OUR CORE PHILOSOPHY</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            Bridging High-Speed Telemetry and Civil Engineering Standards
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Civil survey decisions involving billions in capital investments rely on sub-millimeter measurements taken at 100 kilometers per hour. A 0.2mm laser drift or 2-millisecond sensor synchronization offset can misclassify entire highway sectors.
          </p>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            PTS was founded to resolve the technical friction between mechanical chassis hardware, analog transducer physics, and digital GIS analytics. We ensure every pulse from your distance measuring instrument (DMI) aligns precisely with your inertial measurement units (IMU).
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link to="/services" className="px-5 py-2.5 rounded bg-primary-container text-on-primary font-bold text-xs uppercase tracking-wider hover:bg-primary transition-colors">
              Explore Our Services
            </Link>
            <Link to="/contact" className="px-5 py-2.5 rounded bg-surface-container-high text-on-surface font-bold text-xs uppercase tracking-wider hover:bg-surface-bright transition-colors border border-outline-variant">
              Contact Engineering Team
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-4 font-mono text-xs">
          <div className="text-primary font-bold uppercase border-b border-surface-container-high pb-2">
            STANDARDS & CERTIFICATIONS
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Calibration System:</span>
            <span className="text-primary">ISO/IEC 17025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Electronics Assembly:</span>
            <span className="text-secondary">IPC-A-610 Class 3</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Pavement Deflection:</span>
            <span className="text-primary">AASHTO R32 / ASTM D4694</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Laser Profilometers:</span>
            <span className="text-secondary">ASTM E950 Class 1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Safety Critical Hydraulics:</span>
            <span className="text-tertiary-container">SIL-3 Dual Interlock</span>
          </div>
        </div>
      </div>
    </main>
  );
}
