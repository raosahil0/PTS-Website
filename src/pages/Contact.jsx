import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ onTicketCreated }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [equipment, setEquipment] = useState('NSV — Network Survey Vehicle');
  const [description, setDescription] = useState('');
  const [urgent, setUrgent] = useState(false);

  const handleSubmit = (e) => {
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
    setEmail('');
    setPhone('');
    setDescription('');
  };

  return (
    <main className="w-full pt-32 pb-20 flex-1 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
        <Link to="/" className="hover:text-primary">HOME</Link>
        <span>/</span>
        <span className="text-primary font-bold">CONTACT & DISPATCH DESK</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Left Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-primary font-mono text-xs border border-primary-container/30">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span>24/7/365 EMERGENCY RESPONSE HUB</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              Field Diagnostic Dispatch Desk
            </h1>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Need emergency on-site triage, laboratory PCB micro-soldering, custom replacement sensor harnesses, or NIST calibration audits? Our senior instrumentation engineers are on active dispatch.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container text-2xl">phone_in_talk</span>
              <div>
                <div className="font-mono text-xs text-on-surface-variant uppercase">Emergency Dispatch Desk (Toll Free)</div>
                <div className="font-mono text-base text-primary font-bold">+1 (800) PTS-TECH / +1 (800) 555-0787</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl">mail</span>
              <div>
                <div className="font-mono text-xs text-on-surface-variant uppercase">Engineering Telemetry Inquiries</div>
                <div className="font-mono text-base text-secondary font-bold">dispatch@pts-instruments.com</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary-container text-2xl">chat</span>
              <div>
                <div className="font-mono text-xs text-on-surface-variant uppercase">Field Telemetry Direct Hotline</div>
                <div className="font-mono text-base text-tertiary-container font-bold">+1 (555) 019-8472 [Live Dispatch]</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex items-center gap-3">
              <span className="material-symbols-outlined text-on-surface-variant text-2xl">location_on</span>
              <div>
                <div className="font-mono text-xs text-on-surface-variant uppercase">Central Technology & Calibration Lab</div>
                <div className="text-xs text-on-surface">PTS Advanced Technology Center, Industrial Corridor, Hub-04</div>
              </div>
            </div>
          </div>

          {/* Regional Response Footprint */}
          <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high font-mono text-xs space-y-2">
            <div className="text-primary font-bold uppercase">Regional Mobile Dispatch Hubs:</div>
            <div className="flex justify-between text-on-surface-variant"><span>Hub-01 (Northeast):</span> <span className="text-primary">Boston / NY Corridor</span></div>
            <div className="flex justify-between text-on-surface-variant"><span>Hub-02 (Midwest):</span> <span className="text-primary">Chicago / Great Lakes</span></div>
            <div className="flex justify-between text-on-surface-variant"><span>Hub-03 (Southwest):</span> <span className="text-primary">Dallas / Austin Hub</span></div>
            <div className="flex justify-between text-on-surface-variant"><span>Hub-04 (West Coast):</span> <span className="text-primary">Denver / Pacific NW</span></div>
          </div>

          {/* Rapid Dispatch Vehicle Visual */}
          <div className="rounded-xl overflow-hidden border border-surface-container-high shadow-sm">
            <img src="/highway-inspection.jpg" alt="PTS Emergency Mobile Field Unit" className="w-full h-40 object-cover" />
            <div className="p-3 bg-surface-container font-mono text-[11px] text-on-surface-variant flex items-center justify-between">
              <span>RAPID DISPATCH FLEET</span>
              <span className="text-emerald-500 font-bold">24-48 HR MOBILIZATION</span>
            </div>
          </div>
        </div>

        {/* Support Form Right Column */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-surface-container border border-surface-container-high shadow-2xl">
          <h2 className="text-xl font-bold text-primary mb-4">Open Diagnostic Ticket</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-on-surface-variant uppercase">Your Name *</label>
                <input
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full mt-1 px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface border border-outline-variant focus:border-primary-container outline-none text-sm"
                  placeholder="e.g. Dr. Arthur Vance"
                  type="text"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-on-surface-variant uppercase">Organization / Department *</label>
                <input
                  required
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  className="w-full mt-1 px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface border border-outline-variant focus:border-primary-container outline-none text-sm"
                  placeholder="e.g. State Highway Administration"
                  type="text"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-on-surface-variant uppercase">Email Address *</label>
                <input
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full mt-1 px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface border border-outline-variant focus:border-primary-container outline-none text-sm"
                  placeholder="a.vance@agency.gov"
                  type="email"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-on-surface-variant uppercase">Direct Contact Phone</label>
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full mt-1 px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface border border-outline-variant focus:border-primary-container outline-none text-sm"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-xs text-on-surface-variant uppercase">Target Survey Platform *</label>
              <select
                value={equipment}
                onChange={e => setEquipment(e.target.value)}
                className="w-full mt-1 px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface border border-outline-variant focus:border-primary-container outline-none text-sm font-mono"
              >
                <option value="NSV — Network Survey Vehicle">NSV — Network Survey Vehicle (Profilometer, ROMDAS, Crack Beam)</option>
                <option value="FWD / HWD — Falling Weight Deflectometer">FWD / HWD — Falling Weight Deflectometer (Geophones, Load Cell)</option>
                <option value="MBIU — Mobile Bridge Inspection Unit">MBIU — Mobile Bridge Inspection Unit (Hydraulics, Remote, Booms)</option>
                <option value="Software & Data Processing Pipeline">Software & Data Processing (IRI Calculations, GIS Alignment)</option>
                <option value="Hardware Solutions & Custom Harnesses">Hardware Solutions (Custom Harnessing, Component PCB Repair)</option>
              </select>
            </div>

            <div>
              <label className="font-mono text-xs text-on-surface-variant uppercase">Diagnostic Summary / Fault Description</label>
              <textarea
                rows="4"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Describe current symptoms, error codes, affected sensors, or immediate project deadlines..."
                className="w-full mt-1 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface border border-outline-variant focus:border-primary-container outline-none text-sm"
              ></textarea>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                id="contact-urgent"
                type="checkbox"
                checked={urgent}
                onChange={e => setUrgent(e.target.checked)}
                className="w-4 h-4 accent-error cursor-pointer"
              />
              <label htmlFor="contact-urgent" className="text-xs font-bold text-error cursor-pointer">
                URGENT: Equipment Stalled in Field (Priority 1 Rapid Deployment)
              </label>
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3.5 rounded bg-primary-container text-on-primary font-bold text-sm uppercase tracking-wider hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>Submit Diagnostic Ticket to Dispatch</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
