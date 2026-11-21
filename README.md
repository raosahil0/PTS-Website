# Perfect Tech Solutions (PTS) — React Web Application

Modern, responsive enterprise React platform for Perfect Tech Solutions — specialized in heavy civil diagnostic and telemetry instrumentation systems.

Built with **React 18**, **Vite**, **React Router v6**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Instant Hot Module Replacement (HMR) is active.

### Production Build
```bash
npm run build
npm run preview
```
Creates an optimized static bundle in `/dist`.

---

## 📁 Project Architecture

```
├── public/                 # Static assets (logos, images, favicon)
│   ├── logo.png
│   ├── logo-white.png
│   ├── logo-icon.png
│   ├── favicon.ico
│   ├── nsv-vehicle.jpg
│   ├── fwd-trailer.jpg
│   ├── mbiu-unit.jpg
│   └── pcb-lab.jpg
├── src/
│   ├── components/         # Shared global components
│   │   ├── Navbar.jsx      # Navigation bar, mobile drawer, services dropdown
│   │   ├── Footer.jsx      # Telemetry footer, contact directories, compliance
│   │   ├── CommandPalette.jsx # Ctrl+K global interactive search modal
│   │   ├── SpecModal.jsx   # Vehicle and sensor technical specification viewer
│   │   └── TicketModal.jsx # Diagnostic ticket dispatch confirmation dialog
│   ├── pages/              # Routed pages
│   │   ├── Home.jsx        # Hero, Telemetry HUD, Deflection Simulator, Harness Workbench
│   │   ├── About.jsx       # ISO/IEC 17025 accreditation, lab history, credentials
│   │   ├── Services.jsx    # 5 specialized fleet divisions, SLAs, engineering tiers
│   │   ├── NSV.jsx         # Network Survey Vehicles, laser profilometers, ROMDAS sync
│   │   ├── FWD.jsx         # Falling Weight Deflectometers, AASHTO R32, geophone array
│   │   ├── MBIU.jsx        # Mobile Bridge Inspection Units, proportional hydraulics
│   │   ├── SoftwareAndData.jsx # Quarter-car IRI, ELMOD moduli, GIS shapefile export
│   │   ├── HardwareSolutions.jsx # MIL-spec cabling, IPC Class 3 PCB micro-soldering
│   │   ├── Projects.jsx    # Real-world infrastructure case studies & fleet overhauls
│   │   └── Contact.jsx     # 24/7 technical dispatch portal & ticket submission
│   ├── App.jsx             # React Router setup (supports clean and .html paths)
│   ├── index.css           # Tailwind directives & grid pattern styling
│   └── main.jsx            # React root mount point
├── legacy-html/            # Preserved original HTML files
├── package.json            # Project dependencies and build scripts
├── vite.config.js          # Vite configuration
└── tailwind.config.js      # PTS theme tokens and design system configuration
```

---

## 🎨 Interactive Features in React

- **Live Telemetry Status**: Real-time UTC clock and network latency simulation in header and HUD.
- **Deflection Basin Simulator**: Dynamic SVG curve modeling AASHTO impulse deflection and calculating subgrade modulus (`E_sub`) from slider inputs.
- **MIL-Spec Harness Configurator**: Interactive parts builder generating custom SKU codes with one-click clipboard copy.
- **Command Palette (`Ctrl+K`)**: Instant search across all vehicle specifications, services, and field utilities.
- **Technical Dispatch Desk**: Form validation with simulated priority ticket generation.

---

© 2026 Perfect Tech Solutions (PTS). All rights reserved.
