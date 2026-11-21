import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main className="w-full pt-32 pb-20 flex-1 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
        <Link to="/" className="hover:text-primary">HOME</Link>
        <span>/</span>
        <span className="text-primary font-bold">SERVICES & FLEET ENGINEERING</span>
      </div>

      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-primary font-mono text-xs border border-primary-container/30">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span>INTEGRATED ENGINEERING SERVICES PORTFOLIO</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
          Complete Technical Services & Specialized Equipment
        </h1>
        <p className="text-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Perfect Tech Solutions provides comprehensive lifecycle engineering, diagnostics, sensor calibration, custom harness fabrication, and data processing across all major highway and bridge survey platforms.
        </p>
      </div>

      {/* 5 Specialized Divisions */}
      <div className="flex flex-col gap-8">
        {/* 1. NSV */}
        <div className="p-8 rounded-2xl bg-surface-container border border-surface-container-high grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-primary-container/40 transition-all shadow-sm">
          <div className="lg:col-span-5 rounded-xl overflow-hidden h-64 bg-surface-container-lowest">
            <img alt="Network Survey Vehicle with laser profilometer" className="w-full h-full object-cover" src="/nsv-vehicle.jpg" />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-2xl">directions_car</span>
              <h3 className="text-xl font-bold text-primary">1. Network Survey Vehicles (NSV) Services</h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Multi-sensor synchronization for high-speed highway assessment. We resolve drift between 100Hz laser displacement profilers, right-of-way video cameras, and differential GPS positioning feeds.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface font-mono pt-1">
              <div className="flex items-center gap-2">✓ Laser profilometer calibration</div>
              <div className="flex items-center gap-2">✓ ROMDAS software workflow sync</div>
              <div className="flex items-center gap-2">✓ DGPS & IMU chainage alignment</div>
              <div className="flex items-center gap-2">✓ Chassis DAQ trunk cabling</div>
            </div>
            <div className="pt-3">
              <Link to="/nsv" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-surface-container-high hover:bg-surface-bright text-primary font-mono text-xs font-bold uppercase border border-outline-variant transition-colors">
                <span>View Full NSV Technical Page</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 2. FWD */}
        <div className="p-8 rounded-2xl bg-surface-container border border-surface-container-high grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-secondary/40 transition-all shadow-sm">
          <div className="lg:col-span-5 rounded-xl overflow-hidden h-64 bg-surface-container-lowest">
            <img alt="Falling Weight Deflectometer trailer on highway pavement" className="w-full h-full object-cover" src="/fwd-trailer.jpg" />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-2xl">vertical_align_bottom</span>
              <h3 className="text-xl font-bold text-primary">2. Falling Weight Deflectometer (FWD / HWD) Services</h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Impulse load cell calibrations and micro-inch geophone beam rebuilds complying with AASHTO R32 and ASTM D4694. Complete hydraulic drop cylinder servicing and multi-layer moduli back-calculation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface font-mono pt-1">
              <div className="flex items-center gap-2">✓ 7-9 Geophone array alignment</div>
              <div className="flex items-center gap-2">✓ ASTM D4694 reference calibration</div>
              <div className="flex items-center gap-2">✓ Hydraulic catch release maintenance</div>
              <div className="flex items-center gap-2">✓ ELMOD / BAKFAA moduli inversion</div>
            </div>
            <div className="pt-3">
              <Link to="/fwd" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-surface-container-high hover:bg-surface-bright text-secondary font-mono text-xs font-bold uppercase border border-outline-variant transition-colors">
                <span>View Full FWD Technical Page</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. MBIU */}
        <div className="p-8 rounded-2xl bg-surface-container border border-surface-container-high grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-tertiary-container/40 transition-all shadow-sm">
          <div className="lg:col-span-5 rounded-xl overflow-hidden h-64 bg-surface-container-lowest">
            <img alt="Mobile Bridge Inspection Unit deployed under bridge" className="w-full h-full object-cover" src="/mbiu-unit.jpg" />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary-container text-2xl">construction</span>
              <h3 className="text-xl font-bold text-primary">3. Mobile Bridge Inspection Unit (MBIU) Services</h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Substructure inspection access over rivers and chasms. We service electro-hydraulic proportional valves, 2.4 GHz industrial radio remote controls, and safety limit switches for articulated platforms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface font-mono pt-1">
              <div className="flex items-center gap-2">✓ Proportional valve overhaul</div>
              <div className="flex items-center gap-2">✓ Wireless remote link rebuilds</div>
              <div className="flex items-center gap-2">✓ Safety interlock certification</div>
              <div className="flex items-center gap-2">✓ Platform emergency recovery triage</div>
            </div>
            <div className="pt-3">
              <Link to="/mbiu" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-surface-container-high hover:bg-surface-bright text-tertiary-container font-mono text-xs font-bold uppercase border border-outline-variant transition-colors">
                <span>View Full MBIU Technical Page</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4. Software & Data */}
        <div className="p-8 rounded-2xl bg-surface-container border border-surface-container-high grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-primary-container/40 transition-all shadow-sm">
          <div className="lg:col-span-5 rounded-xl overflow-hidden h-64 bg-surface-container-lowest">
            <img alt="Civil survey software and telemetry dashboard" className="w-full h-full object-cover" src="/software-dashboard.jpg" />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-2xl">terminal</span>
              <h3 className="text-xl font-bold text-primary">4. Software & Survey Data Processing Services</h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Raw telemetry streams processed into certified civil engineering insights. Quarter-car simulation filtering for IRI, transverse rut profile geometry, deflection basin normalization, and GIS shapefiles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface font-mono pt-1">
              <div className="flex items-center gap-2">✓ Quarter-car IRI filtering</div>
              <div className="flex items-center gap-2">✓ BELLS3 temperature adjustments</div>
              <div className="flex items-center gap-2">✓ GIS shapefile spatial integration</div>
              <div className="flex items-center gap-2">✓ Certified engineering reports</div>
            </div>
            <div className="pt-3">
              <Link to="/software-and-data" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-surface-container-high hover:bg-surface-bright text-primary font-mono text-xs font-bold uppercase border border-outline-variant transition-colors">
                <span>View Software & Data Processing Page</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 5. Hardware Solutions */}
        <div className="p-8 rounded-2xl bg-surface-container border border-surface-container-high grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-secondary/40 transition-all shadow-sm">
          <div className="lg:col-span-5 rounded-xl overflow-hidden h-64 bg-surface-container-lowest">
            <img alt="PCB soldering lab technician" className="w-full h-full object-cover" src="/pcb-lab.jpg" />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-2xl">cable</span>
              <h3 className="text-xl font-bold text-primary">5. Hardware Solutions, Custom Cabling & PCB Lab</h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Eliminating long OEM replacement backlogs. Component-level SMD micro-soldering (down to 01005 passives) under 45X magnification and custom MIL-DTL-38999 sensor harness manufacturing in 24 to 48 hours.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface font-mono pt-1">
              <div className="flex items-center gap-2">✓ MIL-DTL-38999 & Lemo harnesses</div>
              <div className="flex items-center gap-2">✓ IPC-7711/7721 Class 3 PCB rework</div>
              <div className="flex items-center gap-2">✓ TDR cable fault & impedance testing</div>
              <div className="flex items-center gap-2">✓ 90-day comprehensive component warranty</div>
            </div>
            <div className="pt-3">
              <Link to="/hardware-solutions" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-surface-container-high hover:bg-surface-bright text-secondary font-mono text-xs font-bold uppercase border border-outline-variant transition-colors">
                <span>View Hardware Solutions & PCB Page</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
