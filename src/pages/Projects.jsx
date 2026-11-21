import React from 'react';
import { Link } from 'react-router-dom';

const CASE_STUDIES = [
  {
    tag: "HIGHWAY FLEET OVERHAUL",
    title: "12-Vehicle State DOT Network Survey Vehicle Fleet Recalibration",
    client: "State Department of Transportation",
    system: "Network Survey Vehicles (NSV)",
    img: "/highway-inspection.jpg",
    challenge: "Persistent drift between 100Hz laser profilometers and DMI wheel encoders across 15,000 miles of highway inventory, resulting in data rejection by federal auditors.",
    solution: "PTS deployed mobile diagnostic engineers who rebuilt the optical encoder harness, recalibrated all 12 laser profilometer arrays against certified quartz flats, and implemented synchronized ROMDAS trigger buses.",
    outcome: "100% audit approval, zero chainage drift, and full fleet turnaround completed in 7 business days."
  },
  {
    tag: "AIRPORT RUNWAY SAFETY",
    title: "Commercial International Airport Heavy Weight Deflectometer (HWD) Audit",
    client: "Major Metropolitan Airport Authority",
    system: "Dynatest Heavy Weight Deflectometer (HWD)",
    img: "/airport-runway.jpg",
    challenge: "Drop load impulse inconsistencies and geophone sensor signal clipping during mandatory runway bearing capacity evaluations under 200kN dynamic loads.",
    solution: "Replaced degraded piezoelectric load cell preamplifiers in our laboratory, aligned the 9-geophone tower array, and adjusted hydraulic drop catch timing according to FAA Advisory Circular standards.",
    outcome: "Runway subgrade structural classification completed within schedule with under 0.8% standard deviation on peak deflections."
  },
  {
    tag: "EMERGENCY BRIDGE TRIAGE",
    title: "Suspension Bridge MBIU Hydraulic Proportional Valve Triage",
    client: "Interstate Bridge Maintenance Authority",
    system: "Barin Mobile Bridge Inspection Unit",
    img: "/suspension-bridge.jpg",
    challenge: "Hydraulic proportional valve lockup on an articulated 19-meter under-deck platform over a tidal strait, creating an immediate safety interlock fault and halting critical inspections.",
    solution: "PTS dispatch flew senior hydraulics specialists with replacement Danfoss proportional spools and radio remote transceivers, executing bench alignment and CANbus loop testing on-site.",
    outcome: "Unit restored to full SIL-3 operational readiness within 18 hours of initial ticket dispatch."
  },
  {
    tag: "CIVIL DATA RECOVERY",
    title: "Emergency GIS Alignment & IRI Re-computation for 8,000km Highway Corridor",
    client: "National Infrastructure Concessionaire",
    system: "Software & Data Processing Pipeline",
    img: "/software-dashboard.jpg",
    challenge: "Corrupted GPS timestamps and irregular odometer pulse intervals in raw laser telemetry files threatened contractual handover deadlines and milestone payments.",
    solution: "PTS software engineers ingested the raw multi-gigabyte binary files into our proprietary filtering engine, reconstructing the linear referencing model and outputting certified quarter-car IRI shapefiles.",
    outcome: "Successful DOT handover with zero penalty fees and mathematical verification reports delivered 48 hours ahead of schedule."
  }
];

export default function Projects() {
  return (
    <main className="w-full pt-32 pb-20 flex-1 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
        <Link to="/" className="hover:text-primary">HOME</Link>
        <span>/</span>
        <span className="text-primary font-bold">PROJECTS & CASE STUDIES</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-tertiary font-mono text-xs border border-tertiary/30">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          <span>FIELD-PROVEN ENGINEERING RECORD</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
          Engineering Deployments & Case Studies
        </h1>
        <p className="text-lg text-on-surface-variant max-w-3xl leading-relaxed">
          From multi-vehicle highway survey fleets to mission-critical bridge inspection units and runway structural audits, explore how Perfect Tech Solutions resolves complex civil instrumentation challenges.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CASE_STUDIES.map((cs, idx) => (
          <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between gap-6 shadow-sm hover:border-primary-container/40 transition-all group">
            <div className="flex flex-col gap-3">
              <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-900 border border-surface-container-high mb-1">
                <img src={cs.img} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-secondary font-bold uppercase">{cs.tag}</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-[11px] font-mono text-on-surface-variant border border-outline-variant">
                  {cs.system}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary">{cs.title}</h3>
              <div className="text-xs font-mono text-on-surface-variant">Client: {cs.client}</div>

              <div className="flex flex-col gap-2 pt-2 text-sm leading-relaxed text-on-surface-variant">
                <div><strong className="text-primary font-mono text-xs">CHALLENGE:</strong> {cs.challenge}</div>
                <div><strong className="text-secondary font-mono text-xs">PTS SOLUTION:</strong> {cs.solution}</div>
                <div><strong className="text-primary-container font-mono text-xs">OUTCOME:</strong> {cs.outcome}</div>
              </div>
            </div>

            <div className="pt-2 border-t border-surface-container-high flex items-center justify-between">
              <span className="font-mono text-xs text-primary font-bold">VERIFIED SUCCESSFUL DISPATCH</span>
              <Link to="/contact" className="text-primary-container hover:text-primary font-mono text-xs font-bold uppercase flex items-center gap-1">
                <span>Request Case File</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
