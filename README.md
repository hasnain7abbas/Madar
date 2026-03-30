<div align="center">

<img src="./public/madar-icon.svg" width="200" alt="Madar Logo"/>

<h1 align="center">Madar</h1>

**مدار — Interactive STEM Physics**

A fast, lightweight STEM simulation browser with **429 embedded simulations** across Physics, Chemistry, Biology, Mathematics, Earth Science & Engineering — all in one app.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)
[![Built with Tauri](https://img.shields.io/badge/built%20with-Tauri%20v2-orange.svg)](https://tauri.app)
[![Svelte 5](https://img.shields.io/badge/frontend-Svelte%205-red.svg)](https://svelte.dev)
[![Made in Skardu](https://img.shields.io/badge/made%20in-Skardu,%20Pakistan%20🇵🇰-green.svg)](#about)

[Web App](https://hasnain7abbas.github.io/Madar/) / [Desktop App](https://github.com/hasnain7abbas/Madar/releases) / [Source Code](https://github.com/hasnain7abbas/Madar)

</div>

## Screenshots

![Browse Physics Simulations](./docs/images/browse-physics.png)

![Simulation Player — Masses and Springs](./docs/images/simulation-player.png)

<div align="center">
<table>
<tr>
<td><img src="./docs/images/build-atom.png" alt="Build an Atom" width="400"/></td>
<td><img src="./docs/images/browse-biology.png" alt="Browse Biology" width="400"/></td>
</tr>
<tr>
<td align="center"><em>Build an Atom — Chemistry</em></td>
<td align="center"><em>Browse Biology Simulations</em></td>
</tr>
</table>
</div>

## Features

- **429 interactive simulations** from PhET, Falstad, Chrome Music Lab, Nicky Case, myPhysicsLab, oPhysics, GeoGebra, Desmos & more
- **6 subject categories**: Physics (81), Chemistry (104), Biology (102), Math (43), Earth Science (17), Engineering (12)
- **Play simulations inside the app** — no need to open a browser
- **Search & filter** by category, source, grade level, or keywords
- **Favorites system** — save simulations you love
- **Fully responsive** — works on desktop, tablet, and phone
- **Offline desktop app** via Tauri v2 (Windows / Mac / Linux)
- **Web version** works on any device with a browser
- **Lightweight** — under 55KB gzipped, runs on low-end hardware
- **Dark theme** with the Madar orbital design language
- **Urdu category labels** — مدار is built for Pakistani students
- **Open source** — MIT licensed, free forever

## Who Is Madar For?

- **Students** (middle school to college) who want to *see* physics, chemistry, and biology instead of just reading equations
- **Teachers** who need a quick demo tool for classroom presentations
- **Curious minds** who want to explore science interactively

## Quick Start

### Option A: Use the Web App (No Install)

> **[https://hasnain7abbas.github.io/Madar/](https://hasnain7abbas.github.io/Madar/)**

Works on phones, tablets, and computers. Just open and start exploring.

### Option B: Desktop App

Download the latest installer from [Releases](https://github.com/hasnain7abbas/Madar/releases), or build from source:

```bash
git clone https://github.com/hasnain7abbas/Madar.git
cd Madar
npm install
npm run tauri dev
```

### Build the Installer

```bash
npm run tauri build
```

Find your installer at: `src-tauri/target/release/bundle/`

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Svelte 5, TypeScript, Vite |
| Desktop | Tauri v2 (Rust) |
| Hosting | GitHub Pages |
| Simulations | PhET, Falstad, Chrome Music Lab, Nicky Case, myPhysicsLab, oPhysics, GeoGebra, Desmos |

## Simulation Sources

| Source | Count | Description |
|--------|-------|-------------|
| **PhET** | 163 | University of Colorado's interactive HTML5 simulations |
| **Falstad** | 38 | Paul Falstad's HTML5 physics & math applets (GPL-2.0) |
| **Chrome Music Lab** | 13 | Google's interactive music/sound experiments (Apache 2.0) |
| **Nicky Case** | 7 | Game-like explorable explanations (CC0 / Public Domain) |
| **myPhysicsLab** | 12 | Real-time physics simulations with configurable parameters |
| **oPhysics** | 11 | Clean interactive physics visualizations |
| **GeoGebra** | 6 | Dynamic math tools — graphing, geometry, 3D, CAS |
| **Desmos** | 3 | Beautiful graphing and scientific calculators |
| **Other** | 10+ | Stellarium Web, Ray Optics, Mathigon Polypad, MolView & more |

## Project Structure

```
madar/
├── src/                          # Svelte frontend
│   ├── App.svelte                # Root component with routing
│   ├── lib/
│   │   ├── ControlPanel.svelte   # Sidebar with filters
│   │   ├── SimCard.svelte        # Simulation card component
│   │   ├── SimPlayer.svelte      # Embedded iframe player
│   │   ├── SearchBar.svelte      # Search input
│   │   ├── simulations.ts        # 429 simulation entries
│   │   └── types.ts              # TypeScript types
│   └── app.css                   # Global styles & dark theme
├── src-tauri/                    # Tauri/Rust backend (desktop)
│   └── src/lib.rs                # Lightweight favorites storage
├── public/                       # Static assets
└── .github/workflows/            # GitHub Pages auto-deploy
```

## Roadmap

- [x] 429 embedded STEM simulations
- [x] Search, filter, and favorites
- [x] Responsive mobile layout with drawer navigation
- [x] Desktop app via Tauri v2
- [x] Web app via GitHub Pages
- [x] Urdu labels for Pakistani students
- [ ] Offline simulation caching
- [ ] Classroom mode (teacher-controlled presets)
- [ ] Student progress tracking
- [ ] Urdu translations for simulation descriptions
- [ ] Android APK via Tauri mobile

## About

### Author

**Hasnain Abbas** 🇵🇰

Full-stack engineer from Skardu, Pakistan. I built Madar because every student deserves access to high-quality, interactive science simulations — regardless of what hardware they own or where they live.

The name "Madar" (مدار) means *orbit* in Urdu — the path a body takes around another under the pull of gravity. It felt right for a STEM simulation browser built in Skardu, Pakistan.

| | |
| --- | --- |
| **GitHub** | [@hasnain7abbas](https://github.com/hasnain7abbas) |
| **Email** | [hsnanrzee1160@gmail.com](mailto:hsnanrzee1160@gmail.com) |

### Contributing

Contributions are welcome — especially from students:

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Submit a pull request

### Star This Repo

If Madar helped you learn something, pass an exam, or just made you smile — consider giving it a star on GitHub. It helps other students discover it.

## License

[MIT](./LICENSE) — You can download, use, modify, share, and even sell this software. The only requirement is keeping the original copyright notice.

---

<div align="center">
  <strong>مدار — Built with Svelte, Tauri, and a love for physics.</strong>
  <br />
  <em>"Tell me and I forget. Teach me and I remember. Involve me and I learn."</em>
  <br /><br />
  Made with ❤️ in Skardu, Pakistan
</div>
