# Madar — Interactive STEM Physics Simulator

### مدار — where every particle finds its orbit.

> A blazing-fast 2D physics playground where you can throw 10,000 particles at a wall and watch real physics happen — on a $200 laptop.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)
[![Built with Tauri](https://img.shields.io/badge/built%20with-Tauri%20v2-orange.svg)](https://tauri.app)
[![Rust Backend](https://img.shields.io/badge/backend-Rust-red.svg)](https://www.rust-lang.org)
[![For Students](https://img.shields.io/badge/made%20for-students-brightgreen.svg)](#)
[![Made in Skardu, Pakistan](https://img.shields.io/badge/made%20in-Skardu,%20Pakistan%20🇵🇰-green.svg)](#about)

<p align="center">
  <img src="assets/madar-banner.png" alt="Madar Banner" width="720" />
</p>

---

## What Is Madar?

**Madar** (مدار — *Urdu for "orbit"*) is a desktop app that lets you play with physics. Drop thousands of particles, crank up gravity, add black holes, build pendulums, watch fluids flow — all in real time, all on your own computer, no internet needed.

Think of it as a supercharged version of those PhET simulations you've used in class, except:

- It runs **10× faster** because the physics math runs in Rust (a systems programming language), not JavaScript.
- It handles **10,000+ particles** without lagging.
- It works **offline** — download once, use forever.
- It's **free and open source** — you can look at the code, modify it, or build on top of it.

### Who Is Madar For?

- **Students (middle school → college)** who want to *see* physics instead of just reading equations.
- **Teachers** who want a live demo tool for classroom presentations.
- **Curious tinkerers** who just want to throw stuff and watch it bounce.

You don't need to know programming to use Madar. You just download the `.exe`, open it, and start playing.

---

## Table of Contents

1. [Quick Start (Just Use It)](#quick-start)
2. [What You Can Do](#what-you-can-do)
3. [Built-In Simulations](#built-in-simulations)
4. [STEM Simulation Library](#stem-simulation-library)
5. [How Madar Works (Under the Hood)](#how-madar-works)
6. [For Developers: Build It Yourself](#for-developers)
7. [For Developers: Adding New Features](#adding-new-features)
8. [Testing](#testing)
9. [Building & Releasing](#building--releasing)
10. [Feature Roadmap](#feature-roadmap)
11. [About](#about)
12. [Attribution & License](#attribution--license)

---

<a id="quick-start"></a>
## Quick Start

### Option A: Just Download It (No Coding Required)

1. Go to the [Releases](https://github.com/hasnain7abbas/madar/releases) page.
2. Download the latest `.exe` file.
3. Run the installer — it takes about 30 seconds.
4. Open **Madar** from your Start Menu.
5. Click anywhere on the canvas to spawn particles. Done.

### Option B: Run From Source (For Developers)

```bash
git clone https://github.com/hasnain7abbas/madar.git
cd madar
npm install
npm run tauri dev
```

---

<a id="what-you-can-do"></a>
## What You Can Do

### The Basics

| Action                        | How                                              |
| ----------------------------- | ------------------------------------------------ |
| Spawn particles               | Click anywhere on the canvas                     |
| Spray particles               | Hold and drag the mouse                          |
| Place a gravity well          | Right-click to drop an attractor                 |
| Place a repulsor              | Shift + Right-click to push particles away       |
| Draw a wall                   | Hold `W` and drag to draw solid barriers         |
| Draw a ramp                   | Hold `R` and drag at an angle                    |
| Erase objects                 | Hold `E` and click on walls/attractors            |
| Pause / Resume                | Press `Space`                                    |
| Step one frame                | Press `→` (right arrow) while paused             |
| Reset everything              | Press `Backspace` or click the reset button      |
| Take a screenshot             | Press `P` or click the camera icon               |
| Record a GIF                  | Press `G` to start/stop recording                |

### The Control Panel

On the right side of the screen, you'll find sliders that change the physics in real time:

- **Gravity** — How strong is the downward pull? Slide it to zero for space mode. Slide it negative and things fall *up*.
- **Bounciness** — How much energy do particles keep when they hit something? 0 = dead stop, 1 = perfect bounce.
- **Air Drag** — How much the "air" slows particles down. High drag = moving through honey.
- **Particle Size** — Radius of new particles.
- **Spawn Rate** — How many particles appear per click/drag.
- **Time Scale** — Speed up or slow down the entire simulation. Great for watching fast collisions in slow motion.
- **Color Mode** — Toggle between solid color, velocity heatmap (blue=slow, red=fast), or temperature coloring.
- **Trails** — Turn on motion trails so you can see particle paths.

### Keyboard Shortcuts

| Shortcut         | Action                        |
| ---------------- | ----------------------------- |
| `Space`          | Pause / Resume                |
| `→`              | Step one frame (while paused) |
| `Backspace`      | Reset simulation              |
| `1` – `7`        | Load preset scenes            |
| `W`              | Wall drawing mode             |
| `R`              | Ramp drawing mode             |
| `E`              | Eraser mode                   |
| `P`              | Screenshot                    |
| `G`              | Record / Stop GIF             |
| `Ctrl + S`       | Export data as CSV             |
| `F11`            | Fullscreen toggle             |
| `+` / `-`        | Zoom in / out                 |
| `Scroll`         | Zoom                          |

---

<a id="built-in-simulations"></a>
## Built-In Simulations

Open Madar, press a number key, and watch the physics unfold.

### Preset Scenes

| Key | Name              | What Happens                                                               | Particles | Concepts Taught                        |
| --- | ----------------- | -------------------------------------------------------------------------- | --------- | -------------------------------------- |
| `1` | **Baarish** (Rain)         | Particles fall from the sky and splash off a floor                | 5,000     | Gravity, terminal velocity, collisions |
| `2` | **Fuwaara** (Fountain)     | Upward stream fights gravity — particles arc and fall back        | 3,000     | Projectile motion, parabolic arcs      |
| `3` | **Kahekashan** (Galaxy)    | Particles orbit a central gravity well, forming spiral arms       | 8,000     | Orbital mechanics, centripetal force    |
| `4` | **Takkar** (Billiards)     | Big particles, precise collisions — like a pool table             | 50        | Momentum conservation, elastic collision |
| `5` | **Reyat Ghadi** (Hourglass)| Sand flows through a narrow gap between two chambers              | 10,000    | Granular physics, flow dynamics        |
| `6` | **Khalaa** (Zero-G)        | No gravity — particles bounce off walls forever                   | 15,000    | Kinetic theory of gases, entropy       |
| `7` | **Mauj** (Wave)            | Connected particles swing in sync, creating mesmerizing wave patterns | 200    | Simple harmonic motion, wave mechanics |

### Challenge Mode (Built-In Mini-Tasks)

Want to learn while playing? Open the **Challenges** tab in the sidebar:

| Challenge                    | Goal                                                       | Physics Concept          |
| ---------------------------- | ---------------------------------------------------------- | ------------------------ |
| **Tokri Pakro** (Basket Catch)   | Aim a particle stream into a moving basket             | Projectile motion        |
| **Madar Banao** (Orbit Builder)  | Place attractors to make a particle orbit in a circle  | Gravitational orbits     |
| **Pul Banao** (Bridge Builder)   | Draw walls to build a bridge that holds 1,000 falling particles | Structural forces |
| **Entropy Ulti Ginti**           | Start with particles sorted by color — watch them mix  | Thermodynamics, entropy  |
| **Faraar Raftaar** (Escape Velocity) | Launch a particle fast enough to escape a gravity well | Escape velocity      |
| **Goonj Dhoondo** (Resonance Finder) | Shake a pendulum at the right frequency to get max swing | Resonance, natural frequency |

---

<a id="stem-simulation-library"></a>
## STEM Simulation Library

Madar isn't just about particles — it connects you to the entire world of free, interactive STEM simulations available online. The built-in **Simulation Library** tab gives you curated, one-click access to the best resources across every science subject.

### Physics

| Resource                       | What It Offers                                                      | Grade Level     | Link                                          |
| ------------------------------ | ------------------------------------------------------------------- | --------------- | --------------------------------------------- |
| **PhET Simulations**           | 150+ interactive sims: forces, energy, waves, circuits, optics      | Middle → College | [phet.colorado.edu](https://phet.colorado.edu) |
| **myPhysicsLab**               | 50+ real-time sims: pendulums, springs, roller coasters, collisions | High → College   | [myphysicslab.com](https://www.myphysicslab.com) |
| **oPhysics**                   | Clean interactive sims for mechanics, E&M, optics                   | High School      | [ophysics.com](https://ophysics.com)          |
| **The Physics Aviary**         | 200+ cross-platform physics labs and simulations                    | High School      | [thephysicsaviary.com](https://thephysicsaviary.com) |
| **The Physics Classroom**      | Concept builders, interactive exercises, simulations                 | Middle → High    | [physicsclassroom.com](https://www.physicsclassroom.com) |
| **Algodoo**                    | Draw-your-own physics sandbox (similar concept to Madar)            | Middle → High    | [algodoo.com](http://www.algodoo.com)         |
| **Physion**                    | Draw shapes, connect with joints and springs, watch physics happen  | Middle → College | [physion.net](https://physion.net)             |
| **Open Source Physics**        | Simulation tools and computational modeling                          | College          | [github.com/OpenSourcePhysics](https://github.com/OpenSourcePhysics) |
| **SciSimulator**               | Browser-based physics, circuits, optics simulations                 | Middle → High    | [scisimulator.com](https://scisimulator.com)  |
| **Effectual Learning**         | 3D physics visualizations built with Three.js                       | High → College   | [effectuall.github.io](https://effectuall.github.io) |

### Chemistry

| Resource                       | What It Offers                                                      | Grade Level     | Link                                          |
| ------------------------------ | ------------------------------------------------------------------- | --------------- | --------------------------------------------- |
| **PhET Chemistry Sims**        | Atomic interactions, states of matter, reactions, pH scale          | Middle → College | [phet.colorado.edu](https://phet.colorado.edu/en/simulations/filter?subjects=chemistry) |
| **ChemCollective**             | Virtual chemistry lab — mix real reagents, run titrations           | High → College   | [chemcollective.org](http://chemcollective.org) |
| **ChemReaX**                   | Model and simulate chemical reactions                               | High School      | [chemreax.org](https://www.chemreax.org)      |
| **MolView**                    | 3D molecular structure viewer                                       | High → College   | [molview.org](https://molview.org)             |
| **3Dmol.js**                   | Interactive molecular visualization in the browser                  | College          | [3dmol.org](https://3dmol.org)                |
| **Stile Chemistry Sims**       | Build molecules from atoms, explore reaction rates                  | Middle → High    | [stileeducation.com](https://stileeducation.com/us/simulations/) |

### Biology

| Resource                       | What It Offers                                                      | Grade Level     | Link                                          |
| ------------------------------ | ------------------------------------------------------------------- | --------------- | --------------------------------------------- |
| **BioInteractive (HHMI)**      | Genetics, evolution, ecology — videos + interactives                | High → College   | [biointeractive.org](https://www.biointeractive.org) |
| **Learn.Genetics (Utah)**      | Cell biology, DNA, heredity, neuroscience interactives              | Middle → High    | [learn.genetics.utah.edu](https://learn.genetics.utah.edu) |
| **Concord Consortium**         | Molecular biology and ecology modeling tools                        | Middle → College | [concord.org](https://concord.org)            |
| **PhET Biology Sims**          | Natural selection, gene expression, neuron                          | High → College   | [phet.colorado.edu](https://phet.colorado.edu/en/simulations/filter?subjects=biology) |
| **Case It!**                   | Molecular biology lab simulations — DNA and protein                 | College          | [caseitproject.org](http://www.caseitproject.org) |
| **eSkeletons**                 | Interactive skeletal anatomy explorer                                | High → College   | [eskeletons.org](https://eskeletons.org)      |

### Mathematics

| Resource                       | What It Offers                                                      | Grade Level     | Link                                          |
| ------------------------------ | ------------------------------------------------------------------- | --------------- | --------------------------------------------- |
| **GeoGebra**                   | Graphing, geometry, algebra, calculus — all-in-one math tool        | Middle → College | [geogebra.org](https://www.geogebra.org)      |
| **Desmos**                     | Beautiful graphing calculator + interactive activities               | Middle → College | [desmos.com](https://www.desmos.com)          |
| **PhET Math Sims**             | Fractions, area, arithmetic, function builder                       | Elementary → High | [phet.colorado.edu](https://phet.colorado.edu/en/simulations/filter?subjects=math) |
| **Wolfram Demonstrations**     | 13,000+ interactive visualizations across all math topics           | High → College   | [demonstrations.wolfram.com](https://demonstrations.wolfram.com) |
| **SciSimulator Math**          | Riemann sums, Monte Carlo pi estimation, Koch snowflake, CLT       | High → College   | [scisimulator.com](https://scisimulator.com)  |
| **CK-12 Interactives**        | Simulations aligned with K-12 math and science standards            | Middle → High    | [interactives.ck12.org](https://interactives.ck12.org) |

### Earth Science & Astronomy

| Resource                       | What It Offers                                                      | Grade Level     | Link                                          |
| ------------------------------ | ------------------------------------------------------------------- | --------------- | --------------------------------------------- |
| **PhET Earth Science Sims**    | Plate tectonics, gravity, radioactive dating, greenhouse effect     | Middle → College | [phet.colorado.edu](https://phet.colorado.edu/en/simulations/filter?subjects=earth-science) |
| **NASA Eyes**                   | Real-time 3D solar system and exoplanet explorer                   | All levels       | [eyes.nasa.gov](https://eyes.nasa.gov)       |
| **Stellarium Web**             | Full sky planetarium in your browser                                | All levels       | [stellarium-web.org](https://stellarium-web.org) |
| **NAAP Simulations**           | Astronomy labs — lunar phases, HR diagrams, eclipses               | High → College   | [astro.unl.edu](https://astro.unl.edu/nativeapps/) |

### Engineering & Cross-Disciplinary

| Resource                       | What It Offers                                                      | Grade Level     | Link                                          |
| ------------------------------ | ------------------------------------------------------------------- | --------------- | --------------------------------------------- |
| **SimPHY**                     | Full physics simulation engine — circuits, fields, rigid bodies     | High → College   | [simphy.com](https://simphy.com)              |
| **JavaLab**                    | Block-based coding + physics sims (parabolic motion, orbits)        | Middle → High    | [javalab.org](https://javalab.org/en/)        |
| **NOVA Labs**                  | NSF-funded games — solar storms, RNA design, energy systems         | High School      | [pbs.org/wgbh/nova/labs](https://www.pbs.org/wgbh/nova/labs/) |
| **Labster**                    | VR-quality lab simulations (free trial available)                   | High → College   | [labster.com](https://www.labster.com)        |
| **Virtual Labs India**         | Labs in biotechnology, CS, mechanical, chemical engineering         | College          | [vlab.co.in](https://vlab.co.in)             |

> **Using the Library in-app:** Click the **"Explore More Sims"** button in the sidebar. It opens the full catalog sorted by subject. Clicking any simulation opens it in your default browser — everything is free.

---

<a id="how-madar-works"></a>
## How Madar Works

You don't need to understand this section to use the app. But if you're a student wondering *how* 10,000 particles move smoothly on a cheap laptop — here's the answer.

### The Big Idea: Split the Work

```
┌──────────────────────────────────────┐
│         WHAT YOU SEE (Frontend)      │
│                                      │
│   HTML5 Canvas draws colored dots    │
│   Sliders send numbers to backend    │
│   That's it. No math here.          │
│                                      │
└────────────────┬─────────────────────┘
                 │  ← sends positions 60×/sec
┌────────────────┴─────────────────────┐
│       THE BRAIN (Rust Backend)       │
│                                      │
│   Calculates gravity for every       │
│   particle. Detects collisions.      │
│   Updates positions. Uses ALL        │
│   your CPU cores at once.            │
│                                      │
└──────────────────────────────────────┘
```

**Why this is fast:** Normal web apps do everything in JavaScript, which runs on one CPU core. Madar does the heavy math in **Rust**, which splits the work across *all* your cores. A 4-core laptop does 4× the work per frame. An 8-core machine does 8×.

### Key Concepts (Simplified)

**Verlet Integration** — Instead of tracking velocity directly (which drifts over time), we remember where each particle *was* last frame and where it is *now*. The difference *is* the velocity. This is more stable and more accurate for simulations with lots of bouncing.

**Spatial Hash Grid** — Checking if every particle collides with every other particle would require 100 million checks at 10,000 particles. Instead, we divide the screen into a grid and only check particles in the same grid cell. This turns a slow O(n²) problem into a fast O(n) problem.

**Parallel Processing (Rayon)** — The Rust crate `rayon` automatically splits the particle list across CPU cores. If you have 10,000 particles and 4 cores, each core handles ~2,500. The code looks almost identical to single-threaded code — Rayon handles the splitting.

---

<a id="for-developers"></a>
## For Developers: Build It Yourself

This section is for anyone who wants to modify the code, add features, or learn how Madar is built.

### Prerequisites

| Tool            | Version  | Install                                                |
| --------------- | -------- | ------------------------------------------------------ |
| Rust            | Latest stable | [rustup.rs](https://rustup.rs)                     |
| Node.js         | ≥ 18     | [nodejs.org](https://nodejs.org)                       |
| Tauri CLI       | ≥ 2.0    | `cargo install tauri-cli`                              |
| VS Build Tools  | Latest   | [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) (Windows only, select C++ workload) |
| Claude Code     | Latest   | [claude.ai/code](https://claude.ai/code) (optional, for AI-assisted development) |

Verify:

```bash
rustc --version
node --version
cargo tauri --version
```

### Project Structure

```
madar/
├── src/                          # Frontend (what users see)
│   ├── App.svelte                # Root component
│   ├── lib/
│   │   ├── Canvas.svelte         # Canvas — draws particles
│   │   ├── ControlPanel.svelte   # Sidebar — sliders and buttons
│   │   ├── SimLibrary.svelte     # STEM simulation browser
│   │   ├── Challenges.svelte     # Challenge mode UI
│   │   ├── StatsOverlay.svelte   # FPS / particle count display
│   │   ├── renderer.ts           # Canvas drawing logic
│   │   ├── presets.ts            # Scene preset definitions
│   │   └── types.ts              # TypeScript types
│   └── main.ts
│
├── src-tauri/                    # Backend (where the physics lives)
│   └── src/
│       ├── main.rs               # App entry point
│       ├── commands.rs           # IPC handlers (frontend ↔ backend)
│       ├── engine/
│       │   ├── mod.rs            # Module root
│       │   ├── particle.rs       # Particle struct + Verlet math
│       │   ├── solver.rs         # Physics tick loop
│       │   ├── collision.rs      # Spatial hash grid
│       │   ├── forces.rs         # Gravity, drag, attractors
│       │   ├── constraints.rs    # Springs, ropes, rigid links
│       │   └── world.rs         # Simulation state + config
│       └── export.rs             # CSV/GIF export logic
│
├── assets/                       # Icons, banner, screenshots
├── presets/                      # JSON scene files
└── src-tauri/capabilities/
    └── default.json              # Tauri permission config
```

### Rust Dependencies

In `src-tauri/Cargo.toml`:

```toml
[dependencies]
tauri = { version = "2", features = [] }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
rayon = "1.10"                # Parallel iterators (multi-core physics)
rand = "0.8"                  # Random particle positions
parking_lot = "0.12"          # Fast mutexes

[profile.release]
strip = true
lto = true
codegen-units = 1
opt-level = 3                 # Maximize speed
```

---

<a id="adding-new-features"></a>
## Adding New Features

If you're using Claude Code (or any AI coding assistant), these prompt templates will help you add features correctly.

### Step 1: Understand the Architecture

```
Analyze this Tauri project. Show me:
1. Every #[tauri::command] function in src-tauri/src/
2. Every invoke() call in the frontend
3. The data flow: what goes from frontend → Rust and back
Keep it simple — I'm trying to understand the IPC boundary.
```

### Step 2: Add a New Rust Feature

Example — adding spring constraints:

```
In src-tauri/src/engine/constraints.rs, create:

1. A Spring struct with: particle_a index, particle_b index,
   rest_length, stiffness (0.0–1.0).
2. A resolve() method that moves both particles toward/away from
   each other to maintain rest_length.
3. Expose an add_spring(a, b, stiffness) command via #[tauri::command].

Use simple language in code comments — students will read this.
```

### Step 3: Wire It to the Frontend

```
In ControlPanel.svelte, add a "Spring Tool" toggle button.
When active, clicking two particles in sequence should call the
add_spring Rust command with their indices. Show a visual line
between connected particles on the canvas.
```

### Step 4: Update Permissions

If your feature accesses the filesystem (for CSV export), clipboard, or network:

```json
// src-tauri/capabilities/default.json
{
  "permissions": [
    "fs:allow-write",
    "clipboard-manager:allow-write-text"
  ]
}
```

---

<a id="testing"></a>
## Testing

### Run in Development Mode

```bash
npm run tauri dev
```

This starts Madar with hot-reload. Change frontend code and see results instantly. Rust changes trigger a recompile (~5 seconds).

### Quick IPC Test

Open DevTools in the app (`F12`), go to Console, and type:

```javascript
const { invoke } = window.__TAURI_INTERNALS__;
invoke('get_stats').then(console.log);
```

You should see something like:

```json
{ "particle_count": 5000, "tick_ms": 4.2, "thread_count": 8 }
```

### Run Rust Tests

```bash
cd src-tauri
cargo test
```

### Performance Check

Load the **Reyat Ghadi** preset (10,000 particles) and check the stats overlay in the top-right corner:

| Metric         | Good           | Needs Work      |
| -------------- | -------------- | --------------- |
| FPS            | 55–60          | Below 30        |
| Tick time      | Under 10ms     | Over 16ms       |
| Render time    | Under 4ms      | Over 8ms        |

---

<a id="building--releasing"></a>
## Building & Releasing

### Build the Installer

```bash
npm run tauri build
```

Find your installer at: `src-tauri/target/release/bundle/nsis/madar_x.x.x_x64-setup.exe`

### GitHub Actions (Auto-Build on Tag)

Create `.github/workflows/release.yml`:

```yaml
name: Build and Release

on:
  push:
    tags: ['v*']

permissions:
  contents: write

jobs:
  build:
    strategy:
      matrix:
        include:
          - os: windows-latest
            target: x86_64-pc-windows-msvc
          - os: ubuntu-latest
            target: x86_64-unknown-linux-gnu
          - os: macos-latest
            target: aarch64-apple-darwin

    runs-on: ${{ matrix.os }}

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - uses: dtolnay/rust-toolchain@stable
        with:
          targets: ${{ matrix.target }}

      - name: Install Linux dependencies
        if: matrix.os == 'ubuntu-latest'
        run: |
          sudo apt-get update
          sudo apt-get install -y libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev

      - run: npm ci

      - uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tagName: ${{ github.ref_name }}
          releaseName: 'Madar ${{ github.ref_name }}'
          releaseDraft: true
```

To release:

```bash
git tag v1.0.0
git push origin v1.0.0
# GitHub builds .exe / .deb / .dmg automatically
```

---

<a id="feature-roadmap"></a>
## Feature Roadmap

### v1.0 — Core Sandbox

- [x] Verlet physics with multi-core Rust backend
- [x] Spatial hash collision detection
- [x] Canvas renderer with velocity heatmap coloring
- [x] Interactive control panel with real-time sliders
- [x] 7 built-in scene presets with Urdu names
- [x] Keyboard shortcuts for everything
- [x] Stats overlay (FPS, particle count, tick time)
- [x] STEM simulation library with 50+ linked resources
- [x] Windows / Mac / Linux installers

### v1.1 — Creative Tools

- [ ] Wall and ramp drawing (click and drag)
- [ ] Particle emitters (continuous streams)
- [ ] Gravity attractor / repulsor placement
- [ ] Undo / redo for placed objects

### v1.2 — Connections & Soft Bodies

- [ ] Spring constraints (connect particles with springs — cloth, ropes)
- [ ] Rigid links (fixed-distance particle groups)
- [ ] Soft body shapes (squishy circles, blobs)
- [ ] Breakable constraints (snap under force)

### v1.3 — Learn Mode

- [ ] Challenge mode with 6+ guided physics tasks
- [ ] Live equation overlay (KE = ½mv², F = ma — updating with real values)
- [ ] "Yeh Kya Hai?" (What's This?) tooltips on every control
- [ ] CSV data export for lab reports
- [ ] Screenshot and GIF recording

### v1.4 — Fluids & Temperature

- [ ] SPH fluid simulation (Smoothed Particle Hydrodynamics)
- [ ] Temperature model (hot = fast = red, cold = slow = blue)
- [ ] Heat transfer between particles on collision
- [ ] Phase transitions (solid → liquid → gas based on temperature)

### v2.0 — GPU Compute (Stretch Goal)

- [ ] WebGPU compute shaders for 100K+ particles
- [ ] GPU-accelerated rendering
- [ ] 3D mode (optional toggle)

---

<a id="about"></a>
## About

### Author

**Hasnain Abbas** 🇵🇰

Full-stack engineer from Skardu, Pakistan. I built Madar because every student deserves access to high-quality, lag-free physics simulations — regardless of what hardware they own or where they live.

The name "Madar" (مدار) means *orbit* in Urdu — the path a body takes around another under the pull of gravity. It felt right for a physics simulator built in Skardu, Pakistan.

| | |
| --- | --- |
| **GitHub** | [@hasnain7abbas](https://github.com/hasnain7abbas) |
| **Email**  | [hsnanrzee1160@gmail.com](mailto:hsnanrzee1160@gmail.com) |

### Contributing

Contributions are welcome — especially from students. Here's how:

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and write tests.
4. Submit a pull request.

If this is your first open-source contribution — that's awesome. Open an issue labeled `good first issue` and I'll help you get started.

### Star This Repo

If Madar helped you learn something, pass an exam, or just made you smile — consider giving it a star on GitHub. It helps other students discover it.

---

<a id="attribution--license"></a>
## Attribution & License

### Acknowledgements

Madar builds on the work of:

- **[Hanson Sun](https://github.com/Hanson-Sun)** — Creator of [`particle-physics-engine`](https://github.com/Hanson-Sun/particle-physics-engine) (PPhys2D), the original MIT-licensed JavaScript particle engine that inspired Madar's physics model.
- **[PhET Interactive Simulations](https://phet.colorado.edu/)** — University of Colorado Boulder. Their design philosophy — zero onboarding, visible cause-and-effect, playful defaults — shaped every UI decision in Madar.
- **[myPhysicsLab](https://www.myphysicslab.com/)** — Erik Neumann's collection of real-time physics simulations and the mathematical derivations behind them.

### License

MIT License — see [LICENSE](LICENSE) for the full text.

**In plain English:** You can download, use, modify, share, and even sell this software. The only requirement is that you keep the original copyright notice in the code. You don't need to ask permission, and you don't owe anyone money.

---

<p align="center">
  <strong>مدار — Built with Rust, Tauri, and a love for physics.</strong>
  <br />
  <em>"Tell me and I forget. Teach me and I remember. Involve me and I learn."</em>
  <br />
  Made with ❤️ in Skardu, Pakistan
</p>
