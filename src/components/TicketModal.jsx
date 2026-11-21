import React from 'react';

export default function TicketModal({ ticketData, onClose }) {
  if (!ticketData) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-surface-container-low border-b border-surface-container-high flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">check_circle</span>
            </span>
            <div>
              <span className="font-mono text-xs text-primary-container font-bold">{ticketData.ticketId}</span>
              <h3 className="text-lg font-bold text-primary">Diagnostic Dispatch Created</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Ticket Details */}
        <div className="p-6 flex flex-col gap-4 text-sm">
          <p className="text-on-surface-variant leading-relaxed">
            Your emergency technical diagnostic ticket has been routed to the Tier-3 Field Engineering Center. An on-call engineer is currently reviewing the fault telemetry.
          </p>

          <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-2 font-mono text-xs">
            <div className="flex justify-between border-b border-surface-container-high/60 pb-1.5">
              <span className="text-on-surface-variant">Client Name / Co:</span>
              <span className="text-primary font-bold">{ticketData.client}</span>
            </div>
            <div className="flex justify-between border-b border-surface-container-high/60 pb-1.5">
              <span className="text-on-surface-variant">Target Equipment:</span>
              <span className="text-secondary font-bold">{ticketData.equipment}</span>
            </div>
            <div className="flex justify-between border-b border-surface-container-high/60 pb-1.5">
              <span className="text-on-surface-variant">Priority Tier:</span>
              <span className={ticketData.isUrgent ? "text-error font-bold" : "text-primary-container font-bold"}>
                {ticketData.priority}
              </span>
            </div>
            <div className="flex justify-between pt-0.5">
              <span className="text-on-surface-variant">Guaranteed SLA:</span>
              <span className="text-primary font-bold">&lt; 2 Hours</span>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-4 bg-surface-container-low border-t border-surface-container-high flex items-center justify-between gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded bg-surface-container-high text-on-surface hover:text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 border border-outline-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Print Ticket</span>
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded bg-primary-container text-on-primary font-bold text-xs uppercase tracking-wider hover:bg-primary transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
