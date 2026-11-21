import React from 'react';
import { Link } from 'react-router-dom';

export default function NSV() {
  return (
    <main className="w-full pt-24 pb-16 flex-1 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
        <Link to="/" className="hover:text-primary">HOME</Link>
        <span>/</span>
        <span className="text-primary font-bold">NETWORK SURVEY VEHICLES (NSV)</span>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-primary font-mono text-xs border border-primary-container/30">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>HIGHWAY SURVEY PLATFORMS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
            Network Survey Vehicle (NSV) Engineering
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Network Survey Vehicles gather continuous high-speed data on roughness (IRI), rutting, surface texture, and video inventory. PTS provides complete sensor alignment, laser profilometer calibration, telemetry DAQ integration, and ROMDAS software synchronization.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/contact" className="px-6 py-3 rounded bg-primary-container text-on-primary font-bold uppercase tracking-wider text-sm hover:bg-primary transition-all">
              Schedule NSV Calibration
            </Link>
            <a href="#nsv-specs" className="px-6 py-3 rounded bg-surface-container-high text-on-surface font-bold uppercase tracking-wider text-sm hover:bg-surface-bright transition-all border border-outline-variant">
              Technical Architecture
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-xl overflow-hidden border border-surface-container-high bg-surface-container-lowest">
          <img alt="Network Survey Vehicle with laser profilometer and GPS mast" className="w-full h-80 object-cover" src="/nsv-vehicle.jpg" />
        </div>
      </div>

      {/* Subsystem Capabilities */}
      <div className="flex flex-col gap-6" id="nsv-specs">
        <h2 className="text-2xl font-bold text-primary">Integrated NSV Subsystem Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-3">
            <span className="material-symbols-outlined text-primary-container text-3xl">flare</span>
            <h3 className="text-lg font-bold text-primary">Laser Profilometer Alignment</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Optical verification and precision bench height positioning for 100Hz point lasers conforming to ASTM E950 Class 1 standards.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-3">
            <span className="material-symbols-outlined text-secondary text-3xl">timeline</span>
            <h3 className="text-lg font-bold text-primary">Transverse Rutting Laser Beams</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Full cross-lane scanning systems covering up to 4.2m width. We eliminate geometric distortion caused by suspension bounce.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">satellite_alt</span>
            <h3 className="text-lg font-bold text-primary">DGPS & POS LV Synchronization</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Dual-antenna differential GNSS and tactical-grade IMU integration to maintain centimetre-level chainage under tree canopy and urban canyons.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-3">
            <span className="material-symbols-outlined text-secondary text-3xl">videocam</span>
            <h3 className="text-lg font-bold text-primary">Right-of-Way Camera Sync</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Hardware frame-grabber triggering synchronized with optical wheel encoders (DMI) for uncompressed 4K geo-referenced imagery.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-3">
            <span className="material-symbols-outlined text-primary-container text-3xl">data_object</span>
            <h3 className="text-lg font-bold text-primary">ROMDAS & Hawkeye Data Flow</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Configuration of proprietary civil data acquisition buses, buffer overflow mitigation, and zero-loss real-time telemetry streaming.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-3">
            <span className="material-symbols-outlined text-tertiary-container text-3xl">cable</span>
            <h3 className="text-lg font-bold text-primary">Chassis DAQ Trunk Cabling</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              MIL-DTL-38999 multi-pin harnesses with continuous braided shielding to resist engine alternator EMI and road debris vibration.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
