import React from 'react';

const SPEC_DATA = {
  nsv: {
    title: "Network Survey Vehicles (NSV) — Full Technical Specification",
    id: "PTS-SPEC-NSV-REV4",
    features: [
      { name: "Laser Profilometer", detail: "Class 1 100Hz point lasers with 0.05mm vertical resolution" },
      { name: "Crack Measurement", detail: "3D transverse laser beam measuring up to 4.2m lane width" },
      { name: "GNSS Integration", detail: "Applanix POS LV dual-antenna RTK-DGPS with <2cm accuracy" },
      { name: "Right-of-Way Cameras", detail: "4K global shutter industrial cameras synchronized with DMI pulses" },
      { name: "Acquisition Software", detail: "Native ROMDAS, Hawkeye, and ARAN telemetry bus compatibility" }
    ]
  },
  fwd: {
    title: "Falling Weight Deflectometer (FWD / HWD) — Technical Specification",
    id: "PTS-SPEC-FWD-REV3",
    features: [
      { name: "Impulse Load Cell", detail: "Piezoelectric load cell calibrated 30kN to 120kN (HWD up to 250kN)" },
      { name: "Geophone Sensor Array", detail: "7 to 9 seismic geophones with ±0.1 µm resolution" },
      { name: "Drop Height Calibration", detail: "Automated hydraulic drop catch release complying with AASHTO R32" },
      { name: "Moduli Back-Calculation", detail: "Integrated layer moduli inversion supporting ELMOD & BAKFAA" }
    ]
  },
  mbiu: {
    title: "Mobile Bridge Inspection Units (MBIU) — Technical Specification",
    id: "PTS-SPEC-MBIU-REV2",
    features: [
      { name: "Articulated Boom Reach", detail: "Under-deck reach up to 21 meters with 360-degree continuous rotation" },
      { name: "Proportional Hydraulic Valves", detail: "Danfoss / Rexroth electro-proportional spool valves with CANbus feedback" },
      { name: "Wireless Remote Telemetry", detail: "Dual-band 2.4GHz / 900MHz frequency-hopping remote control with SIL-3 e-stop" },
      { name: "Interlock Safety Sensors", detail: "Redundant inclinometers and outrigger ground-pressure interlocks" }
    ]
  },
  software: {
    title: "Civil Survey Software & Data Pipeline Specification",
    id: "PTS-SPEC-SW-REV5",
    features: [
      { name: "Roughness Analytics", detail: "AASHTO standard quarter-car simulation filtering for IRI and RN" },
      { name: "Temperature Corrections", detail: "Automated BELLS3 asphalt temperature normalization for deflection moduli" },
      { name: "GIS Shapefile Ingestion", detail: "Direct export to ArcGIS, QGIS, and Google Earth KML with dynamic chainage" },
      { name: "QA/QC Audit Pipeline", detail: "100% anomaly detection and automated spike rejection algorithms" }
    ]
  },
  hardware: {
    title: "Hardware Solutions & PCB Repair Lab Specification",
    id: "PTS-SPEC-HW-REV3",
    features: [
      { name: "Micro-Soldering Standards", detail: "IPC-7711/7721 Rework and IPC-A-610 Class 3 certified soldering laboratory" },
      { name: "Package Handling", detail: "01005 passives up to fine-pitch BGA and QFN component replacement" },
      { name: "Sensor Harnessing", detail: "Custom MIL-DTL-38999, Amphenol, and Lemo push-pull multi-conductor cabling" },
      { name: "Signal Fault Verification", detail: "Time Domain Reflectometry (TDR) and 1,000V DC insulation resistance testing" }
    ]
  }
};

export default function SpecModal({ specKey, onClose }) {
  if (!specKey) return null;
  const spec = SPEC_DATA[specKey] || SPEC_DATA.nsv;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-surface-container-high flex items-center justify-between bg-surface-container-low">
          <div>
            <span className="font-mono text-xs text-primary-container font-bold">{spec.id}</span>
            <h3 className="text-lg font-bold text-primary mt-0.5">{spec.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex flex-col gap-4">
          <div className="text-sm text-on-surface-variant">
            Full compliance specifications for instrumentation deployment, maintenance lifecycle, and diagnostic benchmarking:
          </div>

          <div className="flex flex-col gap-3">
            {spec.features.map((feat, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-1">
                <span className="font-mono text-xs text-secondary font-bold uppercase">{feat.name}</span>
                <span className="text-sm text-on-surface">{feat.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface-container-low border-t border-surface-container-high flex items-center justify-between">
          <span className="text-xs font-mono text-on-surface-variant">ISO/IEC 17025 Calibrated</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-primary-container text-on-primary font-bold text-xs uppercase tracking-wider hover:bg-primary transition-colors"
          >
            Close Specifications
          </button>
        </div>
      </div>
    </div>
  );
}
