import React from 'react';
import { Link } from 'react-router-dom';

export default function FWD() {
  return (
    <main className="w-full pt-32 pb-20 flex-1 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
        <Link to="/" className="hover:text-primary">HOME</Link>
        <span>/</span>
        <span className="text-primary font-bold">FALLING WEIGHT DEFLECTOMETER (FWD)</span>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-secondary font-mono text-xs border border-secondary/30">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span>PAVEMENT STRUCTURAL CAPACITY TESTING</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
            Falling Weight Deflectometer (FWD / HWD) Support
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Pavement bearing capacity evaluation relies on micro-inch deflection accuracy under dynamic impulse loads. PTS provides reference calibration complying with AASHTO R32, geophone sensor array rebuilds, load cell amplifier testing, and layer moduli back-calculation support.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/contact" className="px-6 py-3 rounded bg-primary-container text-on-primary font-bold uppercase tracking-wider text-sm hover:bg-primary transition-all">
              Book FWD Calibration Audit
            </Link>
            <Link to="/#deflection-simulator" className="px-6 py-3 rounded bg-surface-container-high text-on-surface font-bold uppercase tracking-wider text-sm hover:bg-surface-bright transition-all border border-outline-variant">
              Interactive Deflection Simulator
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-xl overflow-hidden border border-surface-container-high bg-surface-container-lowest">
          <img alt="Falling Weight Deflectometer trailer deployed on highway pavement with geophone array" className="w-full h-80 object-cover" src="/fwd-trailer.jpg" />
        </div>
      </div>

      {/* FWD Technical Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-2">
          <span className="font-mono text-secondary font-bold text-xs uppercase">PROTOCOL 01</span>
          <h3 className="text-lg font-bold text-primary">Geophone Beam Calibration</h3>
          <p className="text-sm text-on-surface-variant">
            Relative and reference gain calibration for all 7-9 geophones to verify linearity against NIST-traceable reference towers.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-2">
          <span className="font-mono text-secondary font-bold text-xs uppercase">PROTOCOL 02</span>
          <h3 className="text-lg font-bold text-primary">Dynamic Load Cell Testing</h3>
          <p className="text-sm text-on-surface-variant">
            Pulse calibration across standard impact forces (30kN to 120kN for highway FWD; up to 250kN for airport HWD systems).
          </p>
        </div>

        <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-2">
          <span className="font-mono text-secondary font-bold text-xs uppercase">PROTOCOL 03</span>
          <h3 className="text-lg font-bold text-primary">Hydraulic Release Servicing</h3>
          <p className="text-sm text-on-surface-variant">
            Overhaul of drop weight catch cylinders, hydraulic accumulators, and solenoid valves for consistent free-fall drop heights.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-2">
          <span className="font-mono text-secondary font-bold text-xs uppercase">PROTOCOL 04</span>
          <h3 className="text-lg font-bold text-primary">Layer Moduli Inversion</h3>
          <p className="text-sm text-on-surface-variant">
            Mathematical back-calculation parameter optimization in ELMOD and BAKFAA with automated asphalt temperature normalization.
          </p>
        </div>
      </div>
    </main>
  );
}
