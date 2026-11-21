import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SEARCH_ITEMS = [
  { title: "Network Survey Vehicles (NSV)", category: "Fleet Division", desc: "Laser profilometer, ROMDAS sync & DGPS", path: "/nsv" },
  { title: "Falling Weight Deflectometer (FWD)", category: "Fleet Division", desc: "AASHTO R32, geophone calibrations & moduli", path: "/fwd" },
  { title: "Mobile Bridge Inspection Unit (MBIU)", category: "Fleet Division", desc: "Proportional hydraulics & remote telemetry", path: "/mbiu" },
  { title: "Software & Survey Data Processing", category: "Core Services", desc: "Quarter-car IRI, ELMOD & GIS shapefiles", path: "/software-and-data" },
  { title: "Hardware Solutions & PCB Lab", category: "Core Services", desc: "MIL-spec cabling & IPC Class 3 micro-soldering", path: "/hardware-solutions" },
  { title: "Interactive Deflection Basin Simulator", category: "Field Utility", desc: "ASTM D4694 dynamic impulse basin modeling", path: "/fwd" },
  { title: "MIL-Spec Cable Harness Workbench", category: "Field Utility", desc: "Custom sensor cabling part-number builder", path: "/hardware-solutions" },
  { title: "All Services & SLA Portfolio", category: "Service Directory", desc: "Technical SLAs, rapid dispatch & calibration tiers", path: "/services" },
  { title: "Corporate Credentials & ISO/IEC 17025", category: "About PTS", desc: "Quality standards, leadership & lab accreditation", path: "/about" },
  { title: "Civil Infrastructure Projects & Case Studies", category: "Projects", desc: "Highway overhauls, airport runways & bridges", path: "/projects" },
  { title: "24/7 Field Support Dispatch Portal", category: "Emergency Dispatch", desc: "Direct ticket submission & technician deployment", path: "/contact" }
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(true);
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-surface-container-high bg-surface-container/40">
          <span className="material-symbols-outlined text-primary-container text-2xl">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search fleet systems, calibration specs, or engineering services..."
            className="w-full bg-transparent text-primary placeholder-on-surface-variant/60 focus:outline-none text-base"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-surface-container-high text-xs font-mono text-on-surface-variant border border-outline-variant">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 flex flex-col gap-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item.path)}
                className="w-full text-left p-3 rounded-xl hover:bg-surface-container-high flex items-center justify-between gap-4 transition-colors group"
              >
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-primary group-hover:text-primary-container transition-colors">
                      {item.title}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-[10px] font-mono text-secondary border border-secondary/20">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-xs text-on-surface-variant">{item.desc}</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-sm text-on-surface-variant">
              No matching specifications or services found for "{query}".
            </div>
          )}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-2.5 bg-surface-container-low border-t border-surface-container-high text-xs font-mono text-on-surface-variant flex items-center justify-between">
          <span>Use arrow keys or click to navigate</span>
          <span>PTS Telemetry Engine v4.8</span>
        </div>
      </div>
    </div>
  );
}
