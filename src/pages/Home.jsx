import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WORKFLOW_STEPS = [
  { step: 1, name: "Physical Audit", title: "PHYSICAL & CHASSIS TELEMETRY AUDIT", desc: "Engineers perform a full non-destructive evaluation of vehicle mounts, laser glass cleanliness, geophone mechanical seals, and chassis electrical bonding. Every connector is measured with an optical comparator for bent or oxidized pins.", tool: "Fluke 289 TRMS", time: "2.5h AVG" },
  { step: 2, name: "Sensor Baseline", title: "SENSOR LINEARITY & STATIC BASELINE", desc: "Static load verification on load cells and zero-point baseline check for 100Hz displacement lasers against certified quartz reference blocks. Thermal soak testing ensures sensors remain linear between -10°C and +50°C.", tool: "Mitutoyo Optical Flat", time: "3.0h AVG" },
  { step: 3, name: "Dynamic Calib", title: "DYNAMIC IMPULSE & AASHTO R32 BENCHMARK", desc: "Falling weight deflectometer tower calibration measuring 9 geophones simultaneously across multiple drop heights. Linear regression ensures peak deflections comply with strict AASHTO R32 repeatability thresholds.", tool: "PCB Piezotronics Tower", time: "4.0h AVG" },
  { step: 4, name: "Software Sync", title: "DAQ TELEMETRY & ROMDAS SOFTWARE SYNC", desc: "Verification of high-speed RS-422, CANbus, and Ethernet telemetry channels between in-vehicle DAQ boards and civil processing software (ROMDAS, Hawkeye). Chainage pulse synchronization eliminates distance drift.", tool: "Saleae Logic Pro 16", time: "2.0h AVG" },
  { step: 5, name: "Harness Lab", title: "COMPONENT-LEVEL PCB REPAIR & HARNESSING", desc: "If signal distortion or high noise floors are discovered, boards enter our Class 3 micro-soldering laboratory. Defective SMD passives, op-amps, and damaged MIL-DTL-38999 connectors are rebuilt and potted.", tool: "Hakko FX-100 & Zoom 45X", time: "1-2 Days" },
  { step: 6, name: "Field Sign-off", title: "FINAL HIGHWAY VALIDATION RUN & SIGN-OFF", desc: "The vehicle or unit completes a calibrated 10-kilometer highway benchmark run. IRI repeatability, rutting depth repeatability, and deflection basin standard deviation are mathematically verified before release.", tool: "Calibrated Control Loop", time: "3.5h AVG" }
];

const FAQS = [
  { q: "What survey vehicle models and deflectometer brands do you support?", a: "We support the entire industry spectrum: Dynatest (FWD/HWD), Pavetesting, KUAB, ROMDAS NSV platforms, ARAN, Hawkeye, and custom state DOT survey vans, as well as Barin, Moog, and Aspen Mobile Bridge Inspection Units." },
  { q: "What is your emergency dispatch turnaround time for stalled survey fleets?", a: "For Priority 1 emergency dispatch, our on-call field engineers deploy with essential DAQ boards and replacement harnesses within 24 to 48 hours anywhere in North America. Remote telemetry diagnosis commences within 2 hours." },
  { q: "Are your calibration procedures compliant with state DOT and federal standards?", a: "Yes. All FWD calibrations strictly comply with AASHTO R32 and ASTM D4694. NSV profilometer calibrations adhere to AASHTO M328 and ASTM E950 Class 1 standards. Our calibration laboratory is ISO/IEC 17025 accredited." },
  { q: "Can you manufacture replacement cable harnesses without original OEM drawings?", a: "Yes. We maintain a full reverse-engineering laboratory. Bring or ship your damaged or worn harness; our engineers map pinouts, test characteristic impedance via TDR, and fabricate military-spec replacements using MIL-DTL-38999 or Lemo connectors." }
];

export default function Home({ onOpenSpec, onTicketCreated }) {
  // Real-time telemetry clock and ping jitter
  const [utcTime, setUtcTime] = useState('');
  const [ping, setPing] = useState(13);

  // Workflow step
  const [currentStep, setCurrentStep] = useState(1);

  // Interactive Deflection Basin
  const [dropLoad, setDropLoad] = useState(50); // kN
  const [temp, setTemp] = useState(25); // °C

  // Cable Harness Builder
  const [connectorType, setConnectorType] = useState('38999');
  const [pinCount, setPinCount] = useState('19');
  const [jacketType, setJacketType] = useState('PUR');
  const [copiedPart, setCopiedPart] = useState(false);

  // Support Ticket Form
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [equipment, setEquipment] = useState('NSV — Network Survey Vehicle');
  const [urgent, setUrgent] = useState(false);

  // FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setUtcTime("UTC " + now.toUTCString().slice(17, 25));
      if (Math.random() > 0.6) {
        setPing(Math.floor(11 + Math.random() * 4));
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Compute Deflection Basin Curve
  const calculateDeflection = (distance) => {
    const base = (dropLoad * 8.5) / (1 + distance * 0.08);
    const tempFactor = 1 + (temp - 20) * 0.015;
    return (base * tempFactor).toFixed(1);
  };

  const d0 = calculateDeflection(0);
  const d300 = calculateDeflection(300);
  const d600 = calculateDeflection(600);
  const d900 = calculateDeflection(900);
  const d1200 = calculateDeflection(1200);

  // Subgrade Modulus (approx)
  const subgradeModulus = ((dropLoad * 1000) / (2 * Math.PI * 1.2 * d1200)).toFixed(0);

  // Harness Part Number
  const generatedPartNumber = `PTS-HRN-${connectorType}-${pinCount}P-${jacketType}-REV2`;

  const handleCopyPart = () => {
    navigator.clipboard.writeText(generatedPartNumber);
    setCopiedPart(true);
    setTimeout(() => setCopiedPart(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ticketId = 'PTS-TKT-' + randomNum;
    onTicketCreated({
      ticketId,
      client: `${name} (${company})`,
      equipment,
      isUrgent: urgent,
      priority: urgent ? 'URGENT FIELD DISPATCH (PRIORITY 1)' : 'STANDARD CALIBRATION QUEUE (PRIORITY 2)'
    });
    setName('');
    setCompany('');
  };

  const selectedWorkflow = WORKFLOW_STEPS.find(s => s.step === currentStep) || WORKFLOW_STEPS[0];

  return (
    <div className="w-full">
      {/* =========================================================================
           HERO & LIVE HUD TELEMETRY SECTION
           ========================================================================= */}
      <section className="relative w-full px-4 sm:px-gutter-lg pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-surface-container-lowest border-b border-surface-container-high" id="home">
        <div className="absolute inset-0 pointer-events-none opacity-20 grid-pattern"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col gap-space-xl">
          {/* Telemetry Status Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-space-md">
            <div className="inline-flex items-center gap-2 px-space-md py-1.5 rounded bg-surface-container text-primary font-label-md text-label-md border border-primary-container/20">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
              <span className="font-bold tracking-widest">PTS-INFRASTRUCTURE-DIAGNOSTIC-HUB</span>
              <span className="text-outline">/</span>
              <span className="text-on-surface-variant font-mono">{utcTime || 'SYS.VER 4.8.2-PROD'}</span>
            </div>
            <div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant flex-wrap">
              <span className="px-2.5 py-1 rounded bg-surface-container-high text-primary font-mono border border-outline-variant flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                <span>TELEMETRY: DUAL-LINK VALIDATED</span>
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-container-high text-tertiary-container font-mono border border-outline-variant">
                LATENCY: &lt;{ping}ms
              </span>
            </div>
          </div>

          {/* Hero Main Content */}
          <div className="flex flex-col gap-space-md max-w-4xl">
            <div className="inline-flex items-center gap-2 self-start px-space-md py-1.5 rounded-full bg-surface-container-high font-label-md text-label-md text-primary tracking-wide border border-primary-container/30">
              <span className="material-symbols-outlined text-[16px] text-primary-container">precision_manufacturing</span>
              <span>INFRASTRUCTURE SURVEY & INSPECTION SYSTEMS ENGINEERING</span>
            </div>

            <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-primary font-extrabold tracking-tight leading-tight">
              Complete Technical Solutions for Survey & Inspection Equipment
            </h1>

            <p className="font-headline-sm text-lg sm:text-xl text-secondary font-medium tracking-wide">
              Diagnostics • Maintenance • Software • Data Processing • Cable Solutions • PCB Repair
            </p>

            <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Perfect Tech Solutions (PTS) is the specialized end-to-end technical engineering partner for modern road, pavement, and bridge inspection systems. We support civil infrastructure operators, DOT contractors, and survey consultancies across the complete lifecycle—from in-chassis telemetry bus troubleshooting to lab-grade micro-soldering and calibrated reporting workflows.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <a
                className="inline-flex items-center gap-space-sm px-space-xl py-3.5 rounded bg-primary-container text-on-primary font-label-lg text-label-lg font-bold uppercase tracking-wider shadow-lg hover:bg-primary transition-all hover:scale-[1.02]"
                href="#support-request-form"
              >
                <span className="material-symbols-outlined text-[20px]">build_circle</span>
                <span>Request Technical Support</span>
                <span className="w-2 h-2 rounded-full bg-on-primary animate-pulse"></span>
              </a>
              <Link
                className="inline-flex items-center gap-space-sm px-space-lg py-3.5 rounded bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase tracking-wider hover:bg-surface-bright hover:text-primary transition-colors border border-outline-variant"
                to="/services"
              >
                <span className="material-symbols-outlined text-[20px]">handyman</span>
                <span>Explore All Services</span>
              </Link>
              <button
                onClick={() => onOpenSpec('nsv')}
                className="inline-flex items-center gap-1.5 px-space-md py-3.5 rounded bg-surface-container-low text-secondary font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container border border-secondary/30 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                <span>Technical Specs</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           CORE SERVICES SHOWCASE (STREAMLINED HOME OVERVIEW)
           ========================================================================= */}
      <section className="w-full px-4 sm:px-gutter-lg py-margin-lg bg-surface border-b border-surface-container-high" id="services-overview">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-md text-label-md text-primary-container uppercase font-mono tracking-widest">// SPECIALIZED FLEET DIVISIONS</span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                Specialized Diagnostic & Maintenance Engineering
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1 text-primary-container hover:text-primary font-mono text-xs uppercase font-bold">
              <span>View Full Service Catalog</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Division 1: NSV */}
            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between gap-4 hover:border-primary-container/50 transition-all shadow-sm group">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">directions_car</span>
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant">AASHTO M328</span>
                </div>
                <h3 className="text-lg font-bold text-primary group-hover:text-primary-container transition-colors">
                  Network Survey Vehicles (NSV)
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Laser profilometers, transverse crack mapping, ROMDAS sync, DGPS drift correction, and in-chassis telemetry bus calibration.
                </p>
              </div>
              <Link to="/nsv" className="inline-flex items-center gap-1 text-primary-container font-mono text-xs font-bold uppercase mt-2">
                <span>Explore NSV Engineering</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            {/* Division 2: FWD */}
            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between gap-4 hover:border-secondary/50 transition-all shadow-sm group">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">vertical_align_bottom</span>
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant">ASTM D4694</span>
                </div>
                <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  Falling Weight Deflectometers (FWD)
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Geophone sensor tower calibrations, impulse load cell validation, hydraulic drop catch servicing, and layer moduli back-calculation.
                </p>
              </div>
              <Link to="/fwd" className="inline-flex items-center gap-1 text-secondary font-mono text-xs font-bold uppercase mt-2">
                <span>Explore FWD Solutions</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            {/* Division 3: MBIU */}
            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between gap-4 hover:border-tertiary-container/50 transition-all shadow-sm group">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-tertiary-container/10 text-tertiary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">construction</span>
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant">SIL-3 COMPLIANT</span>
                </div>
                <h3 className="text-lg font-bold text-primary group-hover:text-tertiary-container transition-colors">
                  Mobile Bridge Inspection (MBIU)
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Electro-hydraulic proportional valve calibration, frequency-hopping radio remote links, and under-bridge boom safety interlocks.
                </p>
              </div>
              <Link to="/mbiu" className="inline-flex items-center gap-1 text-tertiary-container font-mono text-xs font-bold uppercase mt-2">
                <span>Explore MBIU Systems</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            {/* Division 4: Software */}
            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between gap-4 hover:border-primary-container/50 transition-all shadow-sm group">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">analytics</span>
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant">QA/QC AUDIT RIGOR</span>
                </div>
                <h3 className="text-lg font-bold text-primary group-hover:text-primary-container transition-colors">
                  Software & Data Processing
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Quarter-car IRI calculation, rut profile filtering, BELLS3 temperature normalization, and GIS shapefile spatial integration.
                </p>
              </div>
              <Link to="/software-and-data" className="inline-flex items-center gap-1 text-primary-container font-mono text-xs font-bold uppercase mt-2">
                <span>View Software Pipeline</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            {/* Division 5: Hardware & PCB */}
            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between gap-4 hover:border-secondary/50 transition-all shadow-sm group">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">cable</span>
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant">IPC-A-610 CLASS 3</span>
                </div>
                <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  Hardware Solutions & PCB Lab
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Custom MIL-DTL-38999 sensor cable harnesses, component-level micro-soldering (down to 01005 passives), and TDR cable fault analysis.
                </p>
              </div>
              <Link to="/hardware-solutions" className="inline-flex items-center gap-1 text-secondary font-mono text-xs font-bold uppercase mt-2">
                <span>Explore PCB & Harness Lab</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            {/* Support CTA card */}
            <div className="p-6 rounded-2xl bg-surface-container-high border border-primary-container/30 flex flex-col justify-between gap-4 shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="font-mono text-xs text-primary-container font-bold uppercase">// 24/7 SUPPORT</div>
                <h3 className="text-lg font-bold text-primary">Need Urgent Field Support?</h3>
                <p className="text-sm text-on-surface-variant">
                  Our emergency mobile engineering vans deploy nationwide with loaner DAQ boards and replacement cable sets.
                </p>
              </div>
              <a href="#support-request-form" className="px-4 py-2.5 rounded bg-primary-container text-on-primary font-bold text-xs uppercase text-center hover:bg-primary transition-colors">
                Transmit Diagnostic Ticket
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           INTERACTIVE 6-STAGE DIAGNOSTIC PROTOCOL WORKFLOW
           ========================================================================= */}
      <section className="w-full px-4 sm:px-gutter-lg py-margin-lg bg-surface border-b border-surface-container-high">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-primary-container uppercase font-mono tracking-widest">// SYSTEMATIC METHODOLOGY</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
              6-Stage Diagnostic & Field Protocol Workflow
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Every piece of diagnostic equipment undergoes our rigorous laboratory-to-field qualification cycle to guarantee absolute repeatability.
            </p>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {WORKFLOW_STEPS.map((ws) => (
              <button
                key={ws.step}
                onClick={() => setCurrentStep(ws.step)}
                className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                  currentStep === ws.step
                    ? "bg-surface-container-highest border-primary-container shadow-md"
                    : "bg-surface-container border-surface-container-high hover:bg-surface-container-low"
                }`}
              >
                <span className="font-mono text-xs text-secondary font-bold">0{ws.step}</span>
                <span className="text-xs font-bold text-primary leading-tight">{ws.name}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Workflow Detail Box */}
          <div className="p-space-lg rounded-xl bg-surface-container border border-primary-container/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-primary-container font-bold text-label-sm uppercase">STAGE 0{selectedWorkflow.step} PROTOCOL</span>
                <span className="text-outline">/</span>
                <span className="text-primary font-bold">{selectedWorkflow.title}</span>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {selectedWorkflow.desc}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-space-sm font-mono text-label-sm text-on-surface flex-wrap">
              <span className="px-2 py-1 rounded bg-surface-container-high text-primary border border-outline-variant">TOOL: {selectedWorkflow.tool}</span>
              <span className="px-2 py-1 rounded bg-surface-container-high text-secondary border border-outline-variant">TIME: {selectedWorkflow.time}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           INTERACTIVE ENGINEERING UTILITIES: DEFLECTION BASIN & HARNESS WORKBENCH
           ========================================================================= */}
      <section className="w-full px-4 sm:px-gutter-lg py-margin-lg bg-surface-container-lowest border-b border-surface-container-high" id="deflection-simulator">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl" id="equipment-pillars">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-primary-container uppercase font-mono tracking-widest">// INTERACTIVE FIELD UTILITIES</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
              Civil Telemetry & Hardware Calculation Workbench
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Use our live calculation tools to model falling weight deflection basins, layer moduli back-calculation, or generate exact MIL-spec replacement harness part numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            {/* Tool 1: Interactive FWD Deflection Basin Calculator */}
            <div className="lg:col-span-7 p-space-lg rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-space-md shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[22px]">show_chart</span>
                  <div className="font-headline-sm text-[18px] text-primary font-bold">FWD Deflection Basin & Moduli Simulator</div>
                </div>
                <span className="font-mono text-label-sm text-secondary bg-surface-container-lowest px-2 py-0.5 rounded border border-secondary/30">ASTM D4694</span>
              </div>

              {/* Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between font-label-sm text-label-sm">
                    <span className="text-on-surface-variant font-mono">Dynamic Drop Load:</span>
                    <span className="text-primary font-bold font-mono">{dropLoad} kN</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="120"
                    value={dropLoad}
                    step="5"
                    onChange={(e) => setDropLoad(Number(e.target.value))}
                    className="w-full accent-primary-container cursor-pointer"
                  />
                  <span className="text-[10px] text-on-surface-variant">Standard highway load: 50 kN (9,000 lbf)</span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between font-label-sm text-label-sm">
                    <span className="text-on-surface-variant font-mono">Pavement Surface Temp:</span>
                    <span className="text-secondary font-bold font-mono">{temp} °C</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={temp}
                    step="1"
                    onChange={(e) => setTemp(Number(e.target.value))}
                    className="w-full accent-secondary cursor-pointer"
                  />
                  <span className="text-[10px] text-on-surface-variant">BELLS3 asphalt normalization applied</span>
                </div>
              </div>

              {/* Deflection SVG Chart */}
              <div className="w-full h-44 bg-surface-container-lowest rounded-lg border border-outline-variant p-2 flex flex-col justify-between">
                <div className="flex justify-between font-mono text-[10px] text-on-surface-variant">
                  <span>D0 (Center): {d0} µm</span>
                  <span>D300: {d300} µm</span>
                  <span>D600: {d600} µm</span>
                  <span>D900: {d900} µm</span>
                  <span>D1200: {d1200} µm</span>
                </div>

                {/* SVG Curve visualization */}
                <div className="w-full h-24 relative flex items-end">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
                    <path
                      d={`M 10,${Math.min(90, Math.max(10, d0 / 6))} Q 100,${Math.min(90, Math.max(10, d300 / 6))} 200,${Math.min(90, Math.max(10, d600 / 6))} T 400,${Math.min(90, Math.max(10, d1200 / 6))}`}
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="3"
                    />
                    <circle cx="10" cy={Math.min(90, Math.max(10, d0 / 6))} r="4" fill="#0f172a" />
                    <circle cx="100" cy={Math.min(90, Math.max(10, d300 / 6))} r="4" fill="#0284c7" />
                    <circle cx="200" cy={Math.min(90, Math.max(10, d600 / 6))} r="4" fill="#0284c7" />
                    <circle cx="300" cy={Math.min(90, Math.max(10, d900 / 6))} r="4" fill="#0284c7" />
                    <circle cx="390" cy={Math.min(90, Math.max(10, d1200 / 6))} r="4" fill="#0284c7" />
                  </svg>
                </div>

                <div className="flex justify-between font-mono text-[10px] text-outline">
                  <span>0mm</span>
                  <span>300mm</span>
                  <span>600mm</span>
                  <span>900mm</span>
                  <span>1200mm (Subgrade)</span>
                </div>
              </div>

              {/* Inversion Output */}
              <div className="flex items-center justify-between p-2.5 rounded bg-surface-container-high font-mono text-xs">
                <span className="text-on-surface">Calculated Subgrade Modulus (E_sub):</span>
                <span className="text-primary font-bold">{subgradeModulus} MPa</span>
              </div>
            </div>

            {/* Tool 2: Cable Harness Workbench */}
            <div className="lg:col-span-5 p-space-lg rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-space-md shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">cable</span>
                  <div className="font-headline-sm text-[18px] text-primary font-bold">MIL-Spec Harness Configurator</div>
                </div>
                <span className="font-mono text-label-sm text-primary bg-surface-container-lowest px-2 py-0.5 rounded border border-primary/30">CIRRIS 1100R</span>
              </div>

              <div className="flex flex-col gap-3 font-label-sm text-label-sm">
                <div className="flex flex-col gap-1">
                  <label className="text-on-surface-variant font-mono">Connector Shell Series:</label>
                  <select
                    value={connectorType}
                    onChange={(e) => setConnectorType(e.target.value)}
                    className="p-2 rounded bg-surface-container-lowest border border-outline-variant text-on-surface font-mono"
                  >
                    <option value="38999">MIL-DTL-38999 Series III (Tri-Start Thread)</option>
                    <option value="LEMO">Lemo 2B Push-Pull (Instrumentation)</option>
                    <option value="AMPH">Amphenol PT Bayonet (High-Vibration)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-on-surface-variant font-mono">Pin Count / Signal Channels:</label>
                  <select
                    value={pinCount}
                    onChange={(e) => setPinCount(e.target.value)}
                    className="p-2 rounded bg-surface-container-lowest border border-outline-variant text-on-surface font-mono"
                  >
                    <option value="6">6-Pin (Laser Displacement Profilometer)</option>
                    <option value="12">12-Pin (Geophone Array Trunk Bus)</option>
                    <option value="19">19-Pin (Right-of-Way Camera & Power)</option>
                    <option value="37">37-Pin (Main Chassis DAQ Master Trunk)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-on-surface-variant font-mono">Environmental Jacket:</label>
                  <select
                    value={jacketType}
                    onChange={(e) => setJacketType(e.target.value)}
                    className="p-2 rounded bg-surface-container-lowest border border-outline-variant text-on-surface font-mono"
                  >
                    <option value="PUR">Polyurethane (PUR) Heavy-Flex Abrasion</option>
                    <option value="SIL">Silicone High-Temperature Heat-Resistant</option>
                    <option value="ARM">Braided Stainless Steel Armored Outer</option>
                  </select>
                </div>
              </div>

              {/* Configured Part Number Display */}
              <div className="p-3 rounded-lg bg-surface-container-lowest border border-primary-container/40 flex flex-col gap-1">
                <span className="text-[10px] font-mono text-on-surface-variant">ENGINEERING SPECIFICATION NUMBER:</span>
                <span className="font-mono text-sm font-bold text-primary-container">{generatedPartNumber}</span>
              </div>

              <button
                onClick={handleCopyPart}
                className="w-full py-2.5 rounded bg-primary text-on-primary font-bold text-xs uppercase tracking-wider hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                <span>{copiedPart ? 'Copied to Clipboard!' : 'Copy Part Number for Quote'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION
           ========================================================================= */}
      <section className="w-full px-4 sm:px-gutter-lg py-margin-lg bg-surface border-b border-surface-container-high" id="faq">
        <div className="max-w-4xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs text-center">
            <span className="font-label-md text-label-md text-primary-container uppercase font-mono tracking-widest">// COMMON INQUIRIES</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-surface-container-high bg-surface-container overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-surface-container-high/60 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-primary">{faq.q}</span>
                  <span className="material-symbols-outlined text-primary-container transition-transform">
                    {openFaq === idx ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-sm text-on-surface-variant leading-relaxed border-t border-surface-container-high/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
           TECHNICAL SUPPORT & FIELD DISPATCH FORM
           ========================================================================= */}
      <section className="w-full px-4 sm:px-gutter-lg py-margin-lg bg-surface-container-lowest border-b border-surface-container-high" id="support-request-form">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs text-center">
            <span className="font-label-md text-label-md text-tertiary-container uppercase font-mono tracking-widest">// 24/7 TECHNICAL DISPATCH</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
              Submit Diagnostic Support Ticket
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Fill out your vehicle or equipment issue details. Our Tier-3 engineers respond within 2 hours.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col gap-4 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-mono text-on-surface-variant">Engineer / Contact Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant text-sm focus:outline-none focus:border-primary-container"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-mono text-on-surface-variant">Company / State DOT *</label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  placeholder="e.g. Caltrans / Civil Tech Inc."
                  className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant text-sm focus:outline-none focus:border-primary-container"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-mono text-on-surface-variant">Target Equipment Platform *</label>
              <select
                value={equipment}
                onChange={e => setEquipment(e.target.value)}
                className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant text-sm focus:outline-none focus:border-primary-container"
              >
                <option value="NSV — Network Survey Vehicle">NSV — Network Survey Vehicle</option>
                <option value="FWD / HWD — Falling Weight Deflectometer">FWD / HWD — Falling Weight Deflectometer</option>
                <option value="MBIU — Mobile Bridge Inspection Unit">MBIU — Mobile Bridge Inspection Unit</option>
                <option value="Civil Software / ROMDAS Pipeline">Civil Software / ROMDAS Pipeline</option>
                <option value="Custom Cable Harness / PCB Repair">Custom Cable Harness / PCB Repair</option>
              </select>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="urgent-box"
                checked={urgent}
                onChange={e => setUrgent(e.target.checked)}
                className="w-4 h-4 accent-error cursor-pointer"
              />
              <label htmlFor="urgent-box" className="text-xs font-bold text-error cursor-pointer">
                URGENT: Equipment Stalled in Field (Priority 1 Rapid Deployment)
              </label>
            </div>

            <button
              type="submit"
              className="mt-3 w-full py-3.5 rounded bg-primary-container text-on-primary font-bold text-sm uppercase tracking-wider hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>Transmit Diagnostic Ticket to Dispatch</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
