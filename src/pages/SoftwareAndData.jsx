import React from 'react';
import { Link } from 'react-router-dom';

export default function SoftwareAndData() {
  return (
    <main className="w-full pt-32 pb-20 flex-1 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
        <Link to="/" className="hover:text-primary">HOME</Link>
        <span>/</span>
        <span className="text-primary font-bold">SOFTWARE & SURVEY DATA PROCESSING</span>
      </div>

      {/* Header / Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-primary font-mono text-xs border border-primary-container/30">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>CIVIL TELEMETRY COMPUTING PIPELINE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
            Software & Survey Data Processing Workflows
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Raw sensor streams are only as valuable as the mathematical models that interpret them. PTS provides complete data QA/QC, quarter-car simulation filtering, moduli back-calculation, and automated GIS shapefile formatting for highway and municipal asset management.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/contact" className="px-6 py-3 rounded bg-primary-container text-on-primary font-bold uppercase tracking-wider text-sm hover:bg-primary transition-all">
              Request Data Processing QA/QC
            </Link>
            <Link to="/#deflection-simulator" className="px-6 py-3 rounded bg-surface-container-high text-on-surface font-bold uppercase tracking-wider text-sm hover:bg-surface-bright transition-all border border-outline-variant">
              Interactive Deflection Simulator
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-xl overflow-hidden border border-surface-container-high bg-surface-container-lowest shadow-md">
          <img alt="Civil survey software and telemetry dashboard" className="w-full h-80 object-cover" src="/software-dashboard.jpg" />
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-4">
          <span className="material-symbols-outlined text-primary-container text-3xl">terminal</span>
          <h2 className="text-xl font-bold text-primary">Quarter-Car IRI Simulation & Rut Depth Calculation</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Raw vertical elevation profiles from high-speed lasers are processed through the Golden Car mathematical filter to calculate International Roughness Index (IRI) at customizable intervals (e.g., 10m, 100m, or 1000m).
          </p>
          <div className="font-mono text-xs text-on-surface bg-surface-container-lowest p-3 rounded border border-outline-variant">
            Standards: ASTM E1926 Standard Practice for Computing International Roughness Index.
          </div>
        </div>

        <div className="p-8 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-4">
          <span className="material-symbols-outlined text-secondary text-3xl">calculate</span>
          <h2 className="text-xl font-bold text-primary">Layer Moduli Back-Calculation & Structural Analysis</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Translating impulse deflectometer basins into elastic modulus (E-values) for asphalt, base, subbase, and subgrade layers. We employ automated iterative inversion algorithms in ELMOD, BAKFAA, and MODULUS.
          </p>
          <div className="font-mono text-xs text-on-surface bg-surface-container-lowest p-3 rounded border border-outline-variant">
            Corrections: BELLS3 automated asphalt temperature adjustment & load normalization to 40kN/50kN.
          </div>
        </div>

        <div className="p-8 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-4">
          <span className="material-symbols-outlined text-tertiary-container text-3xl">map</span>
          <h2 className="text-xl font-bold text-primary">GIS Spatial Integration & Linear Referencing</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Aligning chainage odometer pulses with dual-frequency RTK GPS coordinates. We export verified GIS spatial layers (.SHP, GeoJSON, KML) mapped directly to your state DOT linear referencing system (LRS).
          </p>
          <div className="font-mono text-xs text-on-surface bg-surface-container-lowest p-3 rounded border border-outline-variant">
            Deliverables: Attribute tables with IRI, rutting depth, crack classification, and structural capacity.
          </div>
        </div>

        <div className="p-8 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">verified</span>
          <h2 className="text-xl font-bold text-primary">State DOT Compliance & Quality Assurance Audits</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Every dataset submitted through our processing pipeline passes automated anomaly rejection rules—filtering out bridge expansion joint spikes, railroad crossing outliers, and invalid stop-and-go speed zones.
          </p>
          <div className="font-mono text-xs text-on-surface bg-surface-container-lowest p-3 rounded border border-outline-variant">
            Compliance: Certified by professional pavement engineers with full audit trails.
          </div>
        </div>
      </div>
    </main>
  );
}
