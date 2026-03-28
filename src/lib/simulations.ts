// ---------------------------------------------------------------------------
// Madar - STEM Simulation Database
// ---------------------------------------------------------------------------
// Every embedUrl listed here is a real, publicly-accessible URL that can be
// loaded inside an <iframe>. PhET HTML5 sims use the official pattern from
// the University of Colorado Boulder.
// ---------------------------------------------------------------------------

export interface Simulation {
  id: string;
  name: string;
  description: string;
  category: "physics" | "chemistry" | "biology" | "math" | "earth-science" | "engineering";
  subcategory: string;
  gradeLevel: string;
  source: string;
  embedUrl: string;
  thumbnailEmoji: string;
  tags: string[];
}

// ---- helpers for repetitive URL patterns ----
const phet = (slug: string) =>
  `https://phet.colorado.edu/sims/html/${slug}/latest/${slug}_all.html`;

const myphysicslab = (path: string) =>
  `https://www.myphysicslab.com/${path}`;

// ---- simulation data -------------------------------------------------------
export const simulations: Simulation[] = [
  // ==========================================================================
  //  PHYSICS - Mechanics
  // ==========================================================================
  {
    id: "phet-forces-and-motion-basics",
    name: "Forces and Motion: Basics",
    description:
      "Explore the forces at work when pulling against a cart, and pushing a refrigerator, crate, or person. Create an applied force and see how it makes objects move.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("forces-and-motion-basics"),
    thumbnailEmoji: "💪",
    tags: ["force", "motion", "Newton", "friction", "push", "pull"],
  },
  {
    id: "phet-gravity-force-lab",
    name: "Gravity Force Lab",
    description:
      "Visualize the gravitational force that two objects exert on each other. Adjust the masses and distance to see how they affect gravitational attraction.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("gravity-force-lab"),
    thumbnailEmoji: "🍎",
    tags: ["gravity", "Newton", "mass", "inverse square", "gravitational force"],
  },
  {
    id: "phet-gravity-force-lab-basics",
    name: "Gravity Force Lab: Basics",
    description:
      "Explore how gravity depends on mass and distance. A simplified version of the Gravity Force Lab for younger students.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("gravity-force-lab-basics"),
    thumbnailEmoji: "🍏",
    tags: ["gravity", "mass", "distance", "force", "basics"],
  },
  {
    id: "phet-projectile-motion",
    name: "Projectile Motion",
    description:
      "Blast a car out of a cannon and challenge yourself to hit a target! Learn about projectile motion by firing various objects.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("projectile-motion"),
    thumbnailEmoji: "🎯",
    tags: ["projectile", "trajectory", "angle", "velocity", "parabola", "kinematics"],
  },
  {
    id: "phet-energy-skate-park-basics",
    name: "Energy Skate Park: Basics",
    description:
      "Learn about conservation of energy with a skater! Build tracks, ramps, and jumps and watch kinetic, potential, and thermal energy change.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("energy-skate-park-basics"),
    thumbnailEmoji: "🛹",
    tags: ["energy", "kinetic", "potential", "conservation", "skate park"],
  },
  {
    id: "phet-energy-forms-and-changes",
    name: "Energy Forms and Changes",
    description:
      "Explore how heating and cooling iron, brick, and water transfers energy in the system. See how energy is converted between different forms.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("energy-forms-and-changes"),
    thumbnailEmoji: "🔄",
    tags: ["energy", "heat", "transfer", "thermal", "mechanical", "electrical", "light"],
  },
  {
    id: "phet-pendulum-lab",
    name: "Pendulum Lab",
    description:
      "Play with one or two pendulums and discover how the period of a simple pendulum depends on length, mass, and amplitude.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("pendulum-lab"),
    thumbnailEmoji: "🕰️",
    tags: ["pendulum", "period", "oscillation", "simple harmonic motion"],
  },
  {
    id: "phet-friction",
    name: "Friction",
    description:
      "Learn how friction causes a material to heat up and melt. Rub two different materials together and observe the effects at the atomic level.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("friction"),
    thumbnailEmoji: "🔥",
    tags: ["friction", "heat", "atoms", "thermal energy"],
  },
  {
    id: "phet-masses-and-springs",
    name: "Masses and Springs",
    description:
      "Hang masses from springs and adjust the spring stiffness and damping. Discover the relationships between mass, spring constant, and equilibrium.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("masses-and-springs"),
    thumbnailEmoji: "🪀",
    tags: ["spring", "mass", "Hooke's law", "oscillation", "damping"],
  },
  {
    id: "phet-masses-and-springs-basics",
    name: "Masses and Springs: Basics",
    description:
      "A simplified exploration of hanging masses from springs. Great introduction to Hooke's law and simple harmonic motion.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("masses-and-springs-basics"),
    thumbnailEmoji: "🪀",
    tags: ["spring", "mass", "Hooke's law", "oscillation", "basics"],
  },
  {
    id: "phet-hookes-law",
    name: "Hooke's Law",
    description:
      "Stretch and compress springs to explore the relationships between force, spring constant, displacement, and potential energy.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("hookes-law"),
    thumbnailEmoji: "🔗",
    tags: ["Hooke", "spring constant", "displacement", "restoring force"],
  },
  {
    id: "phet-density",
    name: "Density",
    description:
      "Compare objects of the same mass but different volumes, or the same volume but different masses, to understand density and buoyancy.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("density"),
    thumbnailEmoji: "🧊",
    tags: ["density", "mass", "volume", "buoyancy", "float", "sink"],
  },
  {
    id: "phet-buoyancy",
    name: "Buoyancy",
    description:
      "Explore how buoyancy works by adjusting fluid density and object properties. Predict whether objects will sink or float.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("buoyancy"),
    thumbnailEmoji: "🚢",
    tags: ["buoyancy", "Archimedes", "float", "sink", "fluid", "density"],
  },
  {
    id: "phet-under-pressure",
    name: "Under Pressure",
    description:
      "Explore pressure under and above water. Discover how pressure changes in air and water, and how it depends on the shape of a container.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("under-pressure"),
    thumbnailEmoji: "🌊",
    tags: ["pressure", "fluid", "depth", "Pascal", "atmosphere"],
  },
  {
    id: "phet-fluid-pressure-and-flow",
    name: "Fluid Pressure and Flow",
    description:
      "Explore pressure in the atmosphere and under water. Reshape a pipe to see how flow rate and fluid velocity change.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("fluid-pressure-and-flow"),
    thumbnailEmoji: "🚿",
    tags: ["fluid", "pressure", "Bernoulli", "flow rate", "pipe"],
  },
  {
    id: "phet-collision-lab",
    name: "Collision Lab",
    description:
      "Use an air hockey table to investigate simple collisions in 1D and 2D. Experiment with the number of discs, masses, and initial conditions.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("collision-lab"),
    thumbnailEmoji: "💥",
    tags: ["collision", "momentum", "elastic", "inelastic", "kinetic energy", "conservation"],
  },
  {
    id: "phet-vector-addition",
    name: "Vector Addition",
    description:
      "Explore vectors in 1D and 2D, and discover how to add vectors using the head-to-tail method and component addition.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("vector-addition"),
    thumbnailEmoji: "➡️",
    tags: ["vector", "addition", "components", "magnitude", "direction", "resultant"],
  },

  // ==========================================================================
  //  PHYSICS - Waves & Sound
  // ==========================================================================
  {
    id: "phet-wave-on-a-string",
    name: "Wave on a String",
    description:
      "Explore the wonderful world of waves! Wiggle the end of a string to make waves, or adjust frequency and amplitude to see how they interact.",
    category: "physics",
    subcategory: "waves",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("wave-on-a-string"),
    thumbnailEmoji: "〰️",
    tags: ["wave", "frequency", "amplitude", "string", "transverse"],
  },
  {
    id: "phet-wave-interference",
    name: "Wave Interference",
    description:
      "Make waves with water, sound, and light and explore interference patterns. Discover how two-source interference creates bright and dark bands.",
    category: "physics",
    subcategory: "waves",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("wave-interference"),
    thumbnailEmoji: "🌊",
    tags: ["wave", "interference", "diffraction", "double slit", "constructive", "destructive"],
  },
  {
    id: "phet-waves-intro",
    name: "Waves Intro",
    description:
      "Explore the basics of wave properties with water and sound waves. Observe how changing amplitude and frequency affects wave behavior.",
    category: "physics",
    subcategory: "waves",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("waves-intro"),
    thumbnailEmoji: "🔊",
    tags: ["wave", "amplitude", "frequency", "wavelength", "sound", "water"],
  },
  {
    id: "phet-normal-modes",
    name: "Normal Modes",
    description:
      "Explore the normal modes of oscillation for a system of coupled masses and springs. Visualize standing wave patterns.",
    category: "physics",
    subcategory: "waves",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("normal-modes"),
    thumbnailEmoji: "📊",
    tags: ["normal modes", "standing wave", "coupled oscillators", "resonance", "harmonic"],
  },
  {
    id: "phet-fourier-making-waves",
    name: "Fourier: Making Waves",
    description:
      "Build any wave shape by adding sinusoidal components. Learn about Fourier series and how complex waveforms are constructed from simple harmonics.",
    category: "physics",
    subcategory: "waves",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("fourier-making-waves"),
    thumbnailEmoji: "🎵",
    tags: ["Fourier", "harmonics", "sine wave", "frequency", "waveform", "synthesis"],
  },

  // ==========================================================================
  //  PHYSICS - Electricity & Magnetism
  // ==========================================================================
  {
    id: "phet-circuit-construction-kit-dc",
    name: "Circuit Construction Kit: DC",
    description:
      "Build circuits with batteries, resistors, light bulbs, fuses, and switches. Explore series and parallel circuits and Ohm's law.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("circuit-construction-kit-dc"),
    thumbnailEmoji: "🔋",
    tags: ["circuit", "DC", "resistor", "battery", "Ohm", "voltage", "current"],
  },
  {
    id: "phet-circuit-construction-kit-ac",
    name: "Circuit Construction Kit: AC",
    description:
      "Build AC circuits with capacitors, inductors, and resistors. Explore alternating current, impedance, and phase relationships.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("circuit-construction-kit-ac"),
    thumbnailEmoji: "🔌",
    tags: ["circuit", "AC", "capacitor", "inductor", "alternating current", "impedance"],
  },
  {
    id: "phet-ohms-law",
    name: "Ohm's Law",
    description:
      "See how the equation form of Ohm's law relates to a simple circuit. Adjust voltage and resistance to see the effect on current.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("ohms-law"),
    thumbnailEmoji: "⚡",
    tags: ["Ohm", "voltage", "resistance", "current", "V=IR"],
  },
  {
    id: "phet-resistance-in-a-wire",
    name: "Resistance in a Wire",
    description:
      "Explore how the resistance of a wire depends on its resistivity, length, and cross-sectional area.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("resistance-in-a-wire"),
    thumbnailEmoji: "🔌",
    tags: ["resistance", "wire", "resistivity", "length", "area", "Ohm"],
  },
  {
    id: "phet-charges-and-fields",
    name: "Charges and Fields",
    description:
      "Place positive and negative charges in space and view the resulting electric field and electrostatic potential.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("charges-and-fields"),
    thumbnailEmoji: "🔌",
    tags: ["charge", "electric field", "potential", "electrostatics"],
  },
  {
    id: "phet-coulombs-law",
    name: "Coulomb's Law",
    description:
      "Explore how the electrostatic force between two charged objects depends on their charges and the distance between them.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("coulombs-law"),
    thumbnailEmoji: "🧲",
    tags: ["Coulomb", "charge", "electrostatic", "inverse square"],
  },
  {
    id: "phet-faradays-law",
    name: "Faraday's Law",
    description:
      "Investigate Faraday's law and how a changing magnetic flux produces a voltage. Move a bar magnet near a coil to light a bulb.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("faradays-law"),
    thumbnailEmoji: "🧲",
    tags: ["Faraday", "induction", "magnetic flux", "EMF", "coil"],
  },
  {
    id: "phet-capacitor-lab-basics",
    name: "Capacitor Lab: Basics",
    description:
      "Explore how a capacitor works. Change the size of the plates and distance between them to see the effect on capacitance, charge, and energy.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("capacitor-lab-basics"),
    thumbnailEmoji: "🔋",
    tags: ["capacitor", "capacitance", "charge", "electric field", "dielectric"],
  },
  {
    id: "phet-balloons-and-static-electricity",
    name: "Balloons and Static Electricity",
    description:
      "Rub a balloon on a sweater and explore static electricity. See how charges transfer and create attractive forces.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("balloons-and-static-electricity"),
    thumbnailEmoji: "🎈",
    tags: ["static electricity", "charge", "balloon", "transfer", "attract", "repel"],
  },
  {
    id: "phet-john-travoltage",
    name: "John Travoltage",
    description:
      "Make sparks fly with John Travoltage! Rub your foot on the carpet and touch the doorknob to explore static charge buildup and discharge.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("john-travoltage"),
    thumbnailEmoji: "⚡",
    tags: ["static electricity", "discharge", "spark", "charge", "electron"],
  },
  {
    id: "phet-magnets-and-electromagnets",
    name: "Magnets and Electromagnets",
    description:
      "Explore how magnets and electromagnets work. Investigate the relationship between current, coil turns, and magnetic field strength.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("magnets-and-electromagnets"),
    thumbnailEmoji: "🧲",
    tags: ["magnet", "electromagnet", "magnetic field", "coil", "current"],
  },

  // ==========================================================================
  //  PHYSICS - Optics & Light
  // ==========================================================================
  {
    id: "phet-bending-light",
    name: "Bending Light",
    description:
      "Explore bending of light between two media with different indices of refraction. See how changing the angle and media affects refraction and reflection.",
    category: "physics",
    subcategory: "optics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("bending-light"),
    thumbnailEmoji: "🔦",
    tags: ["refraction", "reflection", "Snell's law", "light", "index of refraction"],
  },
  {
    id: "phet-color-vision",
    name: "Color Vision",
    description:
      "Make a whole rainbow by mixing red, green, and blue light. Explore how we perceive color through photon absorption.",
    category: "physics",
    subcategory: "optics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("color-vision"),
    thumbnailEmoji: "🌈",
    tags: ["color", "RGB", "light", "photon", "perception", "additive mixing"],
  },
  {
    id: "phet-geometric-optics",
    name: "Geometric Optics",
    description:
      "Explore how a lens or mirror forms an image. See how changing the focal length and object position affects the image.",
    category: "physics",
    subcategory: "optics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("geometric-optics"),
    thumbnailEmoji: "🔍",
    tags: ["lens", "mirror", "focal length", "image", "optics", "ray diagram"],
  },
  {
    id: "phet-blackbody-spectrum",
    name: "Blackbody Spectrum",
    description:
      "Explore how the spectrum of electromagnetic radiation emitted by a blackbody changes with temperature. See Wien's law and Stefan-Boltzmann law in action.",
    category: "physics",
    subcategory: "optics",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("blackbody-spectrum"),
    thumbnailEmoji: "🌟",
    tags: ["blackbody", "spectrum", "Wien", "Stefan-Boltzmann", "temperature", "radiation"],
  },

  // ==========================================================================
  //  PHYSICS - Thermal & Gas
  // ==========================================================================
  {
    id: "phet-gas-properties",
    name: "Gas Properties",
    description:
      "Pump gas molecules to a box and see what happens as you change volume, add or remove heat, and more. Measure temperature and pressure.",
    category: "physics",
    subcategory: "thermodynamics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("gas-properties"),
    thumbnailEmoji: "💨",
    tags: ["gas", "pressure", "volume", "temperature", "ideal gas law", "PV=nRT"],
  },
  {
    id: "phet-gases-intro",
    name: "Gases Intro",
    description:
      "A gentle introduction to gas behavior. Explore how temperature, volume, and number of particles relate to pressure.",
    category: "physics",
    subcategory: "thermodynamics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("gases-intro"),
    thumbnailEmoji: "💨",
    tags: ["gas", "pressure", "volume", "temperature", "particles", "intro"],
  },
  {
    id: "phet-states-of-matter",
    name: "States of Matter",
    description:
      "Watch different types of molecules form a solid, liquid, or gas. Add or remove heat and explore phase transitions.",
    category: "physics",
    subcategory: "thermodynamics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("states-of-matter"),
    thumbnailEmoji: "🧊",
    tags: ["solid", "liquid", "gas", "phase", "molecules", "temperature"],
  },
  {
    id: "phet-states-of-matter-basics",
    name: "States of Matter: Basics",
    description:
      "Heat, cool and compress atoms and molecules and watch as they change between solid, liquid and gas phases.",
    category: "physics",
    subcategory: "thermodynamics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("states-of-matter-basics"),
    thumbnailEmoji: "🌡️",
    tags: ["states of matter", "solid", "liquid", "gas", "heating", "cooling"],
  },
  {
    id: "phet-diffusion",
    name: "Diffusion",
    description:
      "Explore the process of diffusion of gas particles. See how temperature and molecular mass affect the rate of diffusion.",
    category: "physics",
    subcategory: "thermodynamics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("diffusion"),
    thumbnailEmoji: "🫧",
    tags: ["diffusion", "gas", "particles", "temperature", "molecular mass", "kinetic theory"],
  },

  // ==========================================================================
  //  PHYSICS - Gravity & Orbits
  // ==========================================================================
  {
    id: "phet-gravity-and-orbits",
    name: "Gravity and Orbits",
    description:
      "Move the sun, earth, moon and space station to see how it affects their gravitational forces and orbital paths.",
    category: "physics",
    subcategory: "astronomy",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("gravity-and-orbits"),
    thumbnailEmoji: "🌍",
    tags: ["gravity", "orbit", "planet", "moon", "Kepler", "ellipse"],
  },
  {
    id: "phet-my-solar-system",
    name: "My Solar System",
    description:
      "Build your own solar system with up to four bodies. Adjust masses, positions, and velocities to create stable or chaotic orbits.",
    category: "physics",
    subcategory: "astronomy",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("my-solar-system"),
    thumbnailEmoji: "☀️",
    tags: ["solar system", "orbit", "gravity", "planet", "n-body"],
  },
  {
    id: "phet-keplers-laws",
    name: "Kepler's Laws",
    description:
      "Explore Kepler's three laws of planetary motion. Observe how planets sweep equal areas in equal times and how orbital period relates to distance.",
    category: "physics",
    subcategory: "astronomy",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("keplers-laws"),
    thumbnailEmoji: "🪐",
    tags: ["Kepler", "orbit", "ellipse", "period", "planetary motion", "area"],
  },

  // ==========================================================================
  //  PHYSICS - Atomic & Nuclear
  // ==========================================================================
  {
    id: "phet-atomic-interactions",
    name: "Atomic Interactions",
    description:
      "Explore the interactions between atoms. Adjust the atomic diameter and interaction strength to see how they affect the forces.",
    category: "physics",
    subcategory: "atomic",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("atomic-interactions"),
    thumbnailEmoji: "⚛️",
    tags: ["atom", "Lennard-Jones", "potential energy", "interaction", "molecular"],
  },
  {
    id: "phet-rutherford-scattering",
    name: "Rutherford Scattering",
    description:
      "Explore Rutherford's gold foil experiment. Fire alpha particles at atoms and observe how they scatter, revealing the nucleus.",
    category: "physics",
    subcategory: "atomic",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("rutherford-scattering"),
    thumbnailEmoji: "⚛️",
    tags: ["Rutherford", "alpha particle", "nucleus", "scattering", "gold foil", "atomic model"],
  },
  {
    id: "phet-models-of-the-hydrogen-atom",
    name: "Models of the Hydrogen Atom",
    description:
      "Explore different historical models of the hydrogen atom. Compare Bohr, de Broglie, and Schrodinger models to see how understanding evolved.",
    category: "physics",
    subcategory: "atomic",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("models-of-the-hydrogen-atom"),
    thumbnailEmoji: "⚛️",
    tags: ["hydrogen", "Bohr", "Schrodinger", "quantum", "atomic model", "energy levels"],
  },

  // ==========================================================================
  //  PHYSICS - myPhysicsLab
  // ==========================================================================
  {
    id: "myphysicslab-double-pendulum",
    name: "Double Pendulum",
    description:
      "Explore the chaotic motion of a double pendulum. Small changes in initial conditions lead to wildly different trajectories.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "College",
    source: "myPhysicsLab",
    embedUrl: myphysicslab("pendulum/double-pendulum-en.html"),
    thumbnailEmoji: "🔀",
    tags: ["chaos", "double pendulum", "Lagrangian", "nonlinear dynamics"],
  },
  {
    id: "myphysicslab-simple-pendulum",
    name: "Simple Pendulum",
    description:
      "Simulate a simple pendulum and observe how its motion depends on length, gravity, and initial angle. Includes energy graphs.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "myPhysicsLab",
    embedUrl: myphysicslab("pendulum/pendulum-en.html"),
    thumbnailEmoji: "🕰️",
    tags: ["pendulum", "oscillation", "period", "gravity", "angle"],
  },
  {
    id: "myphysicslab-chaotic-pendulum",
    name: "Chaotic Pendulum",
    description:
      "Explore a driven, damped pendulum that exhibits chaotic behavior. Adjust driving force and damping to see transitions between periodic and chaotic motion.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "College",
    source: "myPhysicsLab",
    embedUrl: myphysicslab("pendulum/chaotic-pendulum-en.html"),
    thumbnailEmoji: "🌀",
    tags: ["chaos", "driven pendulum", "damping", "nonlinear", "strange attractor"],
  },
  {
    id: "myphysicslab-roller-coaster",
    name: "Roller Coaster",
    description:
      "Design a roller coaster track and watch a ball ride it. Explore conservation of energy and the effects of friction on the ride.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "myPhysicsLab",
    embedUrl: myphysicslab("roller/roller-single-en.html"),
    thumbnailEmoji: "🎢",
    tags: ["roller coaster", "energy", "conservation", "track", "gravity"],
  },
  {
    id: "myphysicslab-spring-simulation",
    name: "Single Spring",
    description:
      "Watch a mass oscillate on a spring. Adjust mass, stiffness, and damping to explore simple harmonic motion and resonance.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "myPhysicsLab",
    embedUrl: myphysicslab("springs/single-spring-en.html"),
    thumbnailEmoji: "🪃",
    tags: ["spring", "harmonic motion", "oscillation", "damping", "resonance"],
  },
  {
    id: "myphysicslab-double-spring",
    name: "Double Spring",
    description:
      "Explore a system of two masses connected by springs. Discover normal modes and energy transfer between coupled oscillators.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "College",
    source: "myPhysicsLab",
    embedUrl: myphysicslab("springs/double-spring-en.html"),
    thumbnailEmoji: "🔗",
    tags: ["spring", "coupled oscillators", "normal modes", "energy transfer"],
  },
  {
    id: "myphysicslab-2d-spring",
    name: "2D Spring",
    description:
      "Simulate a mass on a spring in two dimensions. Observe elliptical orbits and Lissajous patterns as the spring oscillates.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "College",
    source: "myPhysicsLab",
    embedUrl: myphysicslab("springs/2d-spring-en.html"),
    thumbnailEmoji: "🎯",
    tags: ["spring", "2D motion", "Lissajous", "oscillation", "orbit"],
  },
  {
    id: "myphysicslab-collision-2d",
    name: "2D Collision",
    description:
      "Simulate elastic and inelastic collisions between two objects in two dimensions. Observe conservation of momentum and energy.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "myPhysicsLab",
    embedUrl: myphysicslab("engine2D/collision-en.html"),
    thumbnailEmoji: "💥",
    tags: ["collision", "momentum", "elastic", "inelastic", "2D", "conservation"],
  },
  {
    id: "myphysicslab-molecule-sim",
    name: "Molecule Simulation",
    description:
      "Explore a 2D simulation of molecules interacting through spring-like forces. Watch how molecular structures form and vibrate.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "College",
    source: "myPhysicsLab",
    embedUrl: myphysicslab("springs/molecule-en.html"),
    thumbnailEmoji: "🫧",
    tags: ["molecule", "spring", "vibration", "interaction", "lattice"],
  },
  {
    id: "myphysicslab-billiards",
    name: "Billiards",
    description:
      "Simulate billiard balls colliding on a table. Explore elastic collisions, momentum transfer, and angles of deflection.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "myPhysicsLab",
    embedUrl: myphysicslab("engine2D/billiards-en.html"),
    thumbnailEmoji: "🎱",
    tags: ["billiards", "collision", "elastic", "momentum", "pool"],
  },
  {
    id: "myphysicslab-newtons-cradle",
    name: "Newton's Cradle",
    description:
      "Simulate Newton's cradle and explore the transfer of momentum and energy through a series of swinging balls.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "Middle School",
    source: "myPhysicsLab",
    embedUrl: myphysicslab("engine2D/newtons-cradle-en.html"),
    thumbnailEmoji: "🏀",
    tags: ["Newton's cradle", "momentum", "energy transfer", "elastic collision"],
  },

  // ==========================================================================
  //  PHYSICS - oPhysics
  // ==========================================================================
  {
    id: "ophysics-projectile-motion",
    name: "Projectile Motion (oPhysics)",
    description:
      "Visualize projectile trajectories and explore how launch angle, speed, and height affect range and flight time.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "oPhysics",
    embedUrl: "https://ophysics.com/f1.html",
    thumbnailEmoji: "🚀",
    tags: ["projectile", "kinematics", "trajectory", "range", "angle"],
  },
  {
    id: "ophysics-forces-inclined-plane",
    name: "Forces on Inclined Plane",
    description:
      "Explore forces on an object on an inclined plane. Adjust the angle and see how the normal force, friction, and weight components change.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "oPhysics",
    embedUrl: "https://ophysics.com/f2.html",
    thumbnailEmoji: "📐",
    tags: ["inclined plane", "friction", "normal force", "weight", "angle"],
  },
  {
    id: "ophysics-simple-harmonic-motion",
    name: "Simple Harmonic Motion (oPhysics)",
    description:
      "Explore simple harmonic motion with a mass-spring system. Observe position, velocity, and acceleration graphs in real time.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "oPhysics",
    embedUrl: "https://ophysics.com/k1.html",
    thumbnailEmoji: "〰️",
    tags: ["SHM", "simple harmonic motion", "spring", "oscillation", "graph"],
  },
  {
    id: "ophysics-damped-oscillation",
    name: "Damped Oscillation (oPhysics)",
    description:
      "Observe how a damped oscillator behaves over time. See the amplitude decrease exponentially and explore underdamped, overdamped, and critically damped motion.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "oPhysics",
    embedUrl: "https://ophysics.com/k2.html",
    thumbnailEmoji: "📉",
    tags: ["damping", "oscillation", "underdamped", "overdamped", "critically damped"],
  },
  {
    id: "ophysics-wave-interference",
    name: "Wave Interference (oPhysics)",
    description:
      "Explore constructive and destructive interference between two waves. Adjust frequency and amplitude to see resulting patterns.",
    category: "physics",
    subcategory: "waves",
    gradeLevel: "High School",
    source: "oPhysics",
    embedUrl: "https://ophysics.com/k7.html",
    thumbnailEmoji: "🌊",
    tags: ["wave", "interference", "constructive", "destructive", "superposition"],
  },
  {
    id: "ophysics-electric-field",
    name: "Electric Field Lines (oPhysics)",
    description:
      "Place positive and negative charges and visualize the resulting electric field lines and equipotential surfaces.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "High School",
    source: "oPhysics",
    embedUrl: "https://ophysics.com/e1.html",
    thumbnailEmoji: "⚡",
    tags: ["electric field", "field lines", "charge", "equipotential", "Coulomb"],
  },
  {
    id: "ophysics-electric-potential",
    name: "Electric Potential (oPhysics)",
    description:
      "Visualize electric potential created by point charges. Explore equipotential lines and the relationship between field and potential.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "High School",
    source: "oPhysics",
    embedUrl: "https://ophysics.com/e2.html",
    thumbnailEmoji: "🔋",
    tags: ["electric potential", "voltage", "equipotential", "charge", "field"],
  },
  {
    id: "ophysics-ray-reflection",
    name: "Ray Optics: Reflection (oPhysics)",
    description:
      "Explore the law of reflection with ray diagrams. Observe how mirrors reflect light and form images.",
    category: "physics",
    subcategory: "optics",
    gradeLevel: "High School",
    source: "oPhysics",
    embedUrl: "https://ophysics.com/l1.html",
    thumbnailEmoji: "🪞",
    tags: ["reflection", "mirror", "ray", "angle of incidence", "optics"],
  },
  {
    id: "ophysics-ray-refraction",
    name: "Ray Optics: Refraction (oPhysics)",
    description:
      "Explore how light bends when passing between different materials. Observe total internal reflection and Snell's law.",
    category: "physics",
    subcategory: "optics",
    gradeLevel: "High School",
    source: "oPhysics",
    embedUrl: "https://ophysics.com/l2.html",
    thumbnailEmoji: "🔦",
    tags: ["refraction", "Snell's law", "total internal reflection", "ray", "optics"],
  },
  {
    id: "ophysics-thin-lens",
    name: "Thin Lens (oPhysics)",
    description:
      "Explore how convex and concave lenses form images. Adjust focal length and object position to see real and virtual images.",
    category: "physics",
    subcategory: "optics",
    gradeLevel: "High School",
    source: "oPhysics",
    embedUrl: "https://ophysics.com/l4.html",
    thumbnailEmoji: "🔍",
    tags: ["thin lens", "convex", "concave", "focal length", "image", "ray diagram"],
  },
  {
    id: "ophysics-bohr-model",
    name: "Bohr Model (oPhysics)",
    description:
      "Explore the Bohr model of the hydrogen atom. See how electrons transition between energy levels and emit or absorb photons.",
    category: "physics",
    subcategory: "atomic",
    gradeLevel: "High School",
    source: "oPhysics",
    embedUrl: "https://ophysics.com/r1.html",
    thumbnailEmoji: "⚛️",
    tags: ["Bohr", "hydrogen", "energy levels", "photon", "electron transition"],
  },

  // ==========================================================================
  //  CHEMISTRY - Atomic Structure
  // ==========================================================================
  {
    id: "phet-build-an-atom",
    name: "Build an Atom",
    description:
      "Build an atom out of protons, neutrons, and electrons, and see how the element, charge, and mass change.",
    category: "chemistry",
    subcategory: "atomic structure",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("build-an-atom"),
    thumbnailEmoji: "⚛️",
    tags: ["atom", "proton", "neutron", "electron", "element", "periodic table"],
  },
  {
    id: "phet-isotopes-and-atomic-mass",
    name: "Isotopes and Atomic Mass",
    description:
      "Find the average atomic mass of an element by adjusting the relative abundance of its isotopes. Learn why atomic masses are not whole numbers.",
    category: "chemistry",
    subcategory: "atomic structure",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("isotopes-and-atomic-mass"),
    thumbnailEmoji: "🔬",
    tags: ["isotope", "atomic mass", "abundance", "neutron", "nucleus"],
  },
  {
    id: "phet-build-a-molecule",
    name: "Build a Molecule",
    description:
      "Build molecules from atoms. See 2D and 3D structures and discover how the arrangement of atoms determines molecular properties.",
    category: "chemistry",
    subcategory: "molecular structure",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("build-a-molecule"),
    thumbnailEmoji: "🧬",
    tags: ["molecule", "atom", "bond", "structure", "chemical formula"],
  },
  {
    id: "phet-molecule-shapes",
    name: "Molecule Shapes",
    description:
      "Explore molecule geometry by adding atoms and lone pairs. See how VSEPR theory predicts molecular shapes in 3D.",
    category: "chemistry",
    subcategory: "molecular structure",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("molecule-shapes"),
    thumbnailEmoji: "🔷",
    tags: ["VSEPR", "molecular geometry", "shape", "lone pair", "bond angle", "3D"],
  },
  {
    id: "phet-molecule-shapes-basics",
    name: "Molecule Shapes: Basics",
    description:
      "A simplified introduction to molecular geometry. Add bonds and lone pairs to a central atom and observe the 3D shape.",
    category: "chemistry",
    subcategory: "molecular structure",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("molecule-shapes-basics"),
    thumbnailEmoji: "🔶",
    tags: ["VSEPR", "molecular geometry", "shape", "bonds", "basics"],
  },
  {
    id: "phet-molecule-polarity",
    name: "Molecule Polarity",
    description:
      "Explore how electronegativity differences lead to bond and molecular polarity. See how shape affects dipole moments.",
    category: "chemistry",
    subcategory: "molecular structure",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("molecule-polarity"),
    thumbnailEmoji: "🔀",
    tags: ["polarity", "electronegativity", "dipole", "bond", "polar", "nonpolar"],
  },

  // ==========================================================================
  //  CHEMISTRY - Reactions & Stoichiometry
  // ==========================================================================
  {
    id: "phet-balancing-chemical-equations",
    name: "Balancing Chemical Equations",
    description:
      "Balance chemical equations by adjusting coefficients. Visualize the atoms and molecules involved in a reaction.",
    category: "chemistry",
    subcategory: "reactions",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("balancing-chemical-equations"),
    thumbnailEmoji: "⚖️",
    tags: ["chemical equation", "balance", "stoichiometry", "reactant", "product"],
  },
  {
    id: "phet-reactants-products-and-leftovers",
    name: "Reactants, Products and Leftovers",
    description:
      "Create your own sandwich and explore how reactions and limiting reagents affect what products you can make.",
    category: "chemistry",
    subcategory: "reactions",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("reactants-products-and-leftovers"),
    thumbnailEmoji: "🧫",
    tags: ["reactant", "product", "limiting reagent", "stoichiometry", "excess"],
  },

  // ==========================================================================
  //  CHEMISTRY - Acids, Bases & Solutions
  // ==========================================================================
  {
    id: "phet-acid-base-solutions",
    name: "Acid-Base Solutions",
    description:
      "Explore acids and bases at the molecular level. See what molecules are in solution and how concentration and strength affect pH.",
    category: "chemistry",
    subcategory: "acids & bases",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("acid-base-solutions"),
    thumbnailEmoji: "🧪",
    tags: ["acid", "base", "pH", "dissociation", "strong acid", "weak acid", "equilibrium"],
  },
  {
    id: "phet-ph-scale",
    name: "pH Scale",
    description:
      "Test the pH of everyday liquids like coffee, spit, and soap. Investigate how adding water changes the pH of acidic and basic solutions.",
    category: "chemistry",
    subcategory: "acids & bases",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("ph-scale"),
    thumbnailEmoji: "🧪",
    tags: ["pH", "acid", "base", "neutral", "hydrogen ion", "hydroxide"],
  },
  {
    id: "phet-ph-scale-basics",
    name: "pH Scale: Basics",
    description:
      "A simplified introduction to pH. Test common household liquids and see whether they are acidic, basic, or neutral.",
    category: "chemistry",
    subcategory: "acids & bases",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("ph-scale-basics"),
    thumbnailEmoji: "🧪",
    tags: ["pH", "acid", "base", "neutral", "basics", "indicator"],
  },
  {
    id: "phet-concentration",
    name: "Concentration",
    description:
      "Watch solution change color as you add solute, change concentration, or switch the solute. Compare to a stock solution.",
    category: "chemistry",
    subcategory: "solutions",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("concentration"),
    thumbnailEmoji: "🫧",
    tags: ["concentration", "molarity", "solute", "solvent", "solution"],
  },
  {
    id: "phet-molarity",
    name: "Molarity",
    description:
      "Explore the concept of molarity by changing the amount of solute, the volume of solution, and the type of solute.",
    category: "chemistry",
    subcategory: "solutions",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("molarity"),
    thumbnailEmoji: "🥽",
    tags: ["molarity", "moles", "concentration", "volume", "solution"],
  },
  {
    id: "phet-beer-lambert-lab",
    name: "Beer's Law Lab",
    description:
      "Explore how light absorption depends on solution concentration and path length. Verify Beer-Lambert law experimentally.",
    category: "chemistry",
    subcategory: "solutions",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("beers-law-lab"),
    thumbnailEmoji: "🔬",
    tags: ["Beer's law", "absorbance", "transmittance", "spectrophotometry", "concentration"],
  },

  // ==========================================================================
  //  CHEMISTRY - States of Matter & Gas Laws (chemistry-focused)
  // ==========================================================================
  {
    id: "chem-phet-states-of-matter",
    name: "States of Matter (Chemistry)",
    description:
      "Explore how molecular interactions lead to different states of matter. Investigate intermolecular forces and phase diagrams.",
    category: "chemistry",
    subcategory: "states of matter",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("states-of-matter"),
    thumbnailEmoji: "🌡️",
    tags: ["intermolecular forces", "phase diagram", "solid", "liquid", "gas", "molecular"],
  },
  {
    id: "chem-phet-states-of-matter-basics",
    name: "States of Matter: Basics (Chemistry)",
    description:
      "A chemistry-focused introduction to how heating and cooling affects molecular arrangement and phase transitions.",
    category: "chemistry",
    subcategory: "states of matter",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("states-of-matter-basics"),
    thumbnailEmoji: "🧊",
    tags: ["states of matter", "phase change", "melting", "boiling", "freezing", "chemistry"],
  },
  {
    id: "chem-phet-gas-properties",
    name: "Gas Properties (Chemistry)",
    description:
      "Explore the ideal gas law from a chemistry perspective. See how changing temperature, volume, and amount of gas affects pressure.",
    category: "chemistry",
    subcategory: "gas laws",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("gas-properties"),
    thumbnailEmoji: "💨",
    tags: ["ideal gas law", "PV=nRT", "pressure", "volume", "temperature", "moles"],
  },
  {
    id: "chem-phet-gases-intro",
    name: "Gases Intro (Chemistry)",
    description:
      "A gentle introduction to gas behavior for chemistry students. Explore how gas particles relate to macroscopic properties.",
    category: "chemistry",
    subcategory: "gas laws",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("gases-intro"),
    thumbnailEmoji: "💨",
    tags: ["gas", "particles", "pressure", "temperature", "kinetic molecular theory"],
  },
  {
    id: "chem-phet-diffusion",
    name: "Diffusion (Chemistry)",
    description:
      "Explore how gas molecules diffuse through a membrane. See how molecular mass and temperature affect diffusion rates.",
    category: "chemistry",
    subcategory: "gas laws",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("diffusion"),
    thumbnailEmoji: "🫧",
    tags: ["diffusion", "Graham's law", "molecular mass", "kinetic theory", "membrane"],
  },

  // ==========================================================================
  //  CHEMISTRY - Atomic Interactions & Bonding
  // ==========================================================================
  {
    id: "chem-phet-atomic-interactions",
    name: "Atomic Interactions (Chemistry)",
    description:
      "Explore interatomic forces and potential energy curves. Understand how bond length and bond energy relate to atomic interactions.",
    category: "chemistry",
    subcategory: "bonding",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("atomic-interactions"),
    thumbnailEmoji: "⚛️",
    tags: ["interatomic forces", "potential energy", "bond length", "bond energy", "van der Waals"],
  },
  {
    id: "chem-phet-coulombs-law",
    name: "Coulomb's Law (Chemistry)",
    description:
      "Understand how electrostatic forces between ions affect ionic bonding. Explore charge magnitude and distance relationships.",
    category: "chemistry",
    subcategory: "bonding",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("coulombs-law"),
    thumbnailEmoji: "🔋",
    tags: ["Coulomb", "ionic bond", "electrostatic force", "charge", "lattice energy"],
  },

  // ==========================================================================
  //  CHEMISTRY - Molecular Visualization
  // ==========================================================================
  {
    id: "molview-3d-viewer",
    name: "MolView 3D Molecule Viewer",
    description:
      "Search for any molecule and view it in 3D. Rotate, zoom, and explore the structure of organic and inorganic molecules.",
    category: "chemistry",
    subcategory: "molecular structure",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://molview.org/",
    thumbnailEmoji: "🧬",
    tags: ["molecule", "3D", "structure", "organic", "inorganic", "viewer"],
  },
  {
    id: "chemcollective-virtual-lab",
    name: "ChemCollective Virtual Lab",
    description:
      "A virtual chemistry laboratory where you can mix solutions, perform titrations, and carry out reactions with realistic equipment.",
    category: "chemistry",
    subcategory: "laboratory",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://chemcollective.org/vlab/vlab.php",
    thumbnailEmoji: "🧫",
    tags: ["virtual lab", "titration", "solution", "experiment", "laboratory"],
  },
  {
    id: "3dmol-viewer",
    name: "3Dmol.js Molecular Viewer",
    description:
      "An advanced web-based molecular viewer. Visualize proteins, DNA, and small molecules in 3D with various rendering styles.",
    category: "chemistry",
    subcategory: "molecular structure",
    gradeLevel: "College",
    source: "Other",
    embedUrl: "https://www.3dmol.org/",
    thumbnailEmoji: "🔬",
    tags: ["molecule", "protein", "DNA", "3D viewer", "biochemistry", "structure"],
  },

  // ==========================================================================
  //  CHEMISTRY - Nuclear Chemistry
  // ==========================================================================
  {
    id: "chem-phet-rutherford-scattering",
    name: "Rutherford Scattering (Chemistry)",
    description:
      "Explore the famous gold foil experiment that revealed the atomic nucleus. See how alpha particles scatter off atoms.",
    category: "chemistry",
    subcategory: "nuclear chemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("rutherford-scattering"),
    thumbnailEmoji: "⚛️",
    tags: ["Rutherford", "nucleus", "alpha particle", "atomic structure", "scattering"],
  },
  {
    id: "chem-phet-models-hydrogen-atom",
    name: "Models of the Hydrogen Atom (Chemistry)",
    description:
      "Explore the evolution of atomic models from plum pudding to quantum mechanics. See how each model explains atomic spectra.",
    category: "chemistry",
    subcategory: "atomic structure",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("models-of-the-hydrogen-atom"),
    thumbnailEmoji: "⚛️",
    tags: ["atomic model", "Bohr", "quantum", "spectrum", "hydrogen", "energy levels"],
  },

  // ==========================================================================
  //  BIOLOGY - Evolution & Natural Selection
  // ==========================================================================
  {
    id: "phet-natural-selection",
    name: "Natural Selection",
    description:
      "Explore natural selection by controlling the environment and observing how a population of bunnies evolves over time.",
    category: "biology",
    subcategory: "evolution",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("natural-selection"),
    thumbnailEmoji: "🐇",
    tags: ["natural selection", "evolution", "mutation", "adaptation", "population"],
  },

  // ==========================================================================
  //  BIOLOGY - Genetics & Molecular Biology
  // ==========================================================================
  {
    id: "phet-gene-expression-essentials",
    name: "Gene Expression Essentials",
    description:
      "Express a gene to see how proteins are made. Explore transcription and translation in this interactive simulation of gene expression.",
    category: "biology",
    subcategory: "genetics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("gene-expression-essentials"),
    thumbnailEmoji: "🧬",
    tags: ["gene", "DNA", "RNA", "transcription", "translation", "protein"],
  },

  // ==========================================================================
  //  BIOLOGY - Neuroscience
  // ==========================================================================
  {
    id: "phet-neuron",
    name: "Neuron",
    description:
      "Stimulate a neuron and monitor what happens. Visualize how ions move in and out of a neuron during an action potential.",
    category: "biology",
    subcategory: "neuroscience",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("neuron"),
    thumbnailEmoji: "🧠",
    tags: ["neuron", "action potential", "ion channel", "sodium", "potassium"],
  },

  // ==========================================================================
  //  BIOLOGY - Vision & Light (Biology perspective)
  // ==========================================================================
  {
    id: "bio-phet-color-vision",
    name: "Color Vision (Biology)",
    description:
      "Explore how the human eye perceives color. Learn about photoreceptors (cones), RGB color mixing, and how the brain interprets light signals.",
    category: "biology",
    subcategory: "human body",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("color-vision"),
    thumbnailEmoji: "👁️",
    tags: ["color vision", "eye", "cones", "photoreceptor", "RGB", "perception"],
  },

  // ==========================================================================
  //  BIOLOGY - Cell Biology
  // ==========================================================================
  {
    id: "genetics-utah-cell-scale",
    name: "Cell Size and Scale",
    description:
      "Zoom from a coffee bean down to a carbon atom. Compare the relative sizes of cells, organelles, viruses, and molecules.",
    category: "biology",
    subcategory: "cell biology",
    gradeLevel: "Middle School",
    source: "Other",
    embedUrl: "https://learn.genetics.utah.edu/content/cells/scale/",
    thumbnailEmoji: "🔬",
    tags: ["cell", "scale", "size", "organelle", "virus", "molecule", "microscope"],
  },

  // ==========================================================================
  //  BIOLOGY - Genetics (external)
  // ==========================================================================
  {
    id: "genetics-utah-pigeonetics",
    name: "Pigeonetics",
    description:
      "Breed pigeons to explore genetics! Learn about dominant and recessive alleles, epistasis, and how traits are inherited across generations.",
    category: "biology",
    subcategory: "genetics",
    gradeLevel: "Middle School",
    source: "Other",
    embedUrl: "https://learn.genetics.utah.edu/content/pigeons/pigeonetics/",
    thumbnailEmoji: "🐦",
    tags: ["genetics", "inheritance", "allele", "dominant", "recessive", "pigeon", "Mendelian"],
  },

  // ==========================================================================
  //  BIOLOGY - Ecology & Environment
  // ==========================================================================
  {
    id: "bio-phet-greenhouse-effect",
    name: "Greenhouse Effect (Biology)",
    description:
      "Explore how greenhouse gases impact living ecosystems and global temperature. Understand the biological consequences of climate change.",
    category: "biology",
    subcategory: "ecology",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("greenhouse-effect"),
    thumbnailEmoji: "🌿",
    tags: ["greenhouse", "climate change", "ecosystem", "CO2", "temperature", "ecology"],
  },
  {
    id: "bio-phet-natural-selection-advanced",
    name: "Natural Selection (Advanced)",
    description:
      "An in-depth look at natural selection with multiple environmental factors. Explore how mutations, food supply, and predators drive evolution.",
    category: "biology",
    subcategory: "evolution",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("natural-selection"),
    thumbnailEmoji: "🧬",
    tags: ["natural selection", "evolution", "mutation", "population genetics", "fitness"],
  },

  // ==========================================================================
  //  BIOLOGY - Anatomy & Physiology
  // ==========================================================================
  {
    id: "bio-phet-neuron-advanced",
    name: "Neuron (Advanced)",
    description:
      "A deeper dive into neuronal action potentials. Explore the Hodgkin-Huxley model, ion concentrations, and refractory periods.",
    category: "biology",
    subcategory: "neuroscience",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("neuron"),
    thumbnailEmoji: "🧠",
    tags: ["neuron", "Hodgkin-Huxley", "action potential", "refractory period", "membrane potential"],
  },
  {
    id: "bio-phet-diffusion",
    name: "Diffusion (Biology)",
    description:
      "Explore how molecules move across cell membranes through diffusion. Understand osmosis and how concentration gradients drive transport.",
    category: "biology",
    subcategory: "cell biology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("diffusion"),
    thumbnailEmoji: "🫧",
    tags: ["diffusion", "osmosis", "membrane", "concentration gradient", "cell transport"],
  },
  {
    id: "bio-phet-gene-expression-college",
    name: "Gene Expression (College Level)",
    description:
      "Explore advanced gene expression concepts including promoter regions, RNA polymerase binding, and post-translational modification.",
    category: "biology",
    subcategory: "molecular biology",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("gene-expression-essentials"),
    thumbnailEmoji: "🧬",
    tags: ["gene expression", "promoter", "RNA polymerase", "mRNA", "ribosome", "protein synthesis"],
  },

  // ==========================================================================
  //  MATH - Graphing & Functions
  // ==========================================================================
  {
    id: "phet-graphing-lines",
    name: "Graphing Lines",
    description:
      "Explore the world of lines. Investigate relationships between linear equations, slope, and graphs of lines.",
    category: "math",
    subcategory: "algebra",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("graphing-lines"),
    thumbnailEmoji: "📈",
    tags: ["graphing", "lines", "slope", "intercept", "linear equation"],
  },
  {
    id: "phet-graphing-slope-intercept",
    name: "Graphing Slope-Intercept",
    description:
      "Explore slope-intercept form of a line. Adjust slope and y-intercept to see how they affect the graph.",
    category: "math",
    subcategory: "algebra",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("graphing-slope-intercept"),
    thumbnailEmoji: "📉",
    tags: ["slope", "y-intercept", "linear", "graph", "equation", "mx+b"],
  },
  {
    id: "phet-graphing-quadratics",
    name: "Graphing Quadratics",
    description:
      "Explore the graphs of quadratic functions. Change the coefficients and see how the parabola changes shape, position, and direction.",
    category: "math",
    subcategory: "algebra",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("graphing-quadratics"),
    thumbnailEmoji: "📊",
    tags: ["quadratic", "parabola", "vertex", "roots", "coefficient", "graph"],
  },
  {
    id: "phet-calculus-grapher",
    name: "Calculus Grapher",
    description:
      "Draw a function and see its derivative and integral in real time. Explore the fundamental theorem of calculus visually.",
    category: "math",
    subcategory: "calculus",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("calculus-grapher"),
    thumbnailEmoji: "📐",
    tags: ["calculus", "derivative", "integral", "function", "graph", "slope", "area"],
  },
  {
    id: "phet-curve-fitting",
    name: "Curve Fitting",
    description:
      "Fit curves to data points. Explore polynomial fitting and how adding data points affects the best-fit curve and residuals.",
    category: "math",
    subcategory: "statistics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("curve-fitting"),
    thumbnailEmoji: "📈",
    tags: ["curve fitting", "regression", "polynomial", "data", "residuals"],
  },
  {
    id: "phet-least-squares-regression",
    name: "Least-Squares Regression",
    description:
      "Explore least-squares regression by plotting data points and finding the line of best fit. See how outliers affect the regression line.",
    category: "math",
    subcategory: "statistics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("least-squares-regression"),
    thumbnailEmoji: "📊",
    tags: ["regression", "least squares", "line of best fit", "correlation", "scatter plot"],
  },
  {
    id: "phet-function-builder",
    name: "Function Builder",
    description:
      "Build functions by composing simple operations. See how inputs are transformed into outputs through a chain of function machines.",
    category: "math",
    subcategory: "functions",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("function-builder"),
    thumbnailEmoji: "🔧",
    tags: ["function", "input", "output", "composition", "transformation"],
  },
  {
    id: "phet-function-builder-basics",
    name: "Function Builder: Basics",
    description:
      "A simplified introduction to functions. Put patterns through function machines and predict what comes out.",
    category: "math",
    subcategory: "functions",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("function-builder-basics"),
    thumbnailEmoji: "🔧",
    tags: ["function", "pattern", "input", "output", "machine", "basics"],
  },

  // ==========================================================================
  //  MATH - Equations & Equality
  // ==========================================================================
  {
    id: "phet-equality-explorer",
    name: "Equality Explorer",
    description:
      "Explore what it means for expressions to be equal. Use a balance to solve equations and discover properties of equality.",
    category: "math",
    subcategory: "algebra",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("equality-explorer"),
    thumbnailEmoji: "⚖️",
    tags: ["equality", "equation", "balance", "solve", "variable", "algebra"],
  },
  {
    id: "phet-equality-explorer-basics",
    name: "Equality Explorer: Basics",
    description:
      "A gentle introduction to the concept of equality using a balance scale. Build intuition for solving simple equations.",
    category: "math",
    subcategory: "algebra",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("equality-explorer-basics"),
    thumbnailEmoji: "⚖️",
    tags: ["equality", "balance", "equation", "basics", "introduction"],
  },
  {
    id: "phet-equality-explorer-two-variables",
    name: "Equality Explorer: Two Variables",
    description:
      "Explore equations with two variables. Use a balance to discover relationships between x and y and graph the solutions.",
    category: "math",
    subcategory: "algebra",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("equality-explorer-two-variables"),
    thumbnailEmoji: "⚖️",
    tags: ["equality", "two variables", "equation", "graph", "linear"],
  },
  {
    id: "phet-expression-exchange",
    name: "Expression Exchange",
    description:
      "Explore equivalent expressions using area models and algebra tiles. Simplify expressions and discover the distributive property.",
    category: "math",
    subcategory: "algebra",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("expression-exchange"),
    thumbnailEmoji: "🔄",
    tags: ["expression", "equivalent", "simplify", "distributive", "algebra tiles"],
  },

  // ==========================================================================
  //  MATH - Area Models
  // ==========================================================================
  {
    id: "phet-area-model-multiplication",
    name: "Area Model Multiplication",
    description:
      "Use area models to visualize multiplication. Break numbers into parts and see how the distributive property works with areas.",
    category: "math",
    subcategory: "arithmetic",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("area-model-multiplication"),
    thumbnailEmoji: "🟦",
    tags: ["area model", "multiplication", "distributive property", "partial products"],
  },
  {
    id: "phet-area-model-algebra",
    name: "Area Model Algebra",
    description:
      "Build rectangles of various sizes and relate multiplication to area. Discover the distributive property and factor expressions.",
    category: "math",
    subcategory: "algebra",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("area-model-algebra"),
    thumbnailEmoji: "📐",
    tags: ["area model", "algebra", "multiplication", "distributive property", "factoring"],
  },
  {
    id: "phet-area-model-decimals",
    name: "Area Model Decimals",
    description:
      "Use area models to multiply decimals. See how the grid breaks down decimal multiplication into manageable parts.",
    category: "math",
    subcategory: "arithmetic",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("area-model-decimals"),
    thumbnailEmoji: "🔢",
    tags: ["area model", "decimals", "multiplication", "place value"],
  },

  // ==========================================================================
  //  MATH - Fractions
  // ==========================================================================
  {
    id: "phet-fractions-intro",
    name: "Fractions: Intro",
    description:
      "Explore fractions in a fun, visual way. Build fractions from shapes and number lines to develop a deep understanding.",
    category: "math",
    subcategory: "fractions",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("fractions-intro"),
    thumbnailEmoji: "🍕",
    tags: ["fraction", "numerator", "denominator", "part", "whole", "visual"],
  },
  {
    id: "phet-fractions-equality",
    name: "Fractions: Equality",
    description:
      "Explore equivalent fractions by matching fractions in different representations. Build understanding of when fractions are equal.",
    category: "math",
    subcategory: "fractions",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("fractions-equality"),
    thumbnailEmoji: "🍕",
    tags: ["fraction", "equivalent", "equal", "simplify", "compare"],
  },
  {
    id: "phet-fractions-mixed-numbers",
    name: "Fractions: Mixed Numbers",
    description:
      "Explore mixed numbers and improper fractions. Build mixed numbers from shapes and convert between different representations.",
    category: "math",
    subcategory: "fractions",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("fractions-mixed-numbers"),
    thumbnailEmoji: "🍕",
    tags: ["fraction", "mixed number", "improper fraction", "convert", "whole number"],
  },
  {
    id: "phet-fraction-matcher",
    name: "Fraction Matcher",
    description:
      "Match fractions shown as pictures, numbers, and on number lines. Test your understanding of fraction equivalence.",
    category: "math",
    subcategory: "fractions",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("fraction-matcher"),
    thumbnailEmoji: "🎯",
    tags: ["fraction", "matching", "equivalent", "number line", "visual"],
  },
  {
    id: "phet-build-a-fraction",
    name: "Build a Fraction",
    description:
      "Build fractions from shapes and numbers. Match target fractions by constructing them from individual pieces.",
    category: "math",
    subcategory: "fractions",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("build-a-fraction"),
    thumbnailEmoji: "🧩",
    tags: ["fraction", "build", "construct", "numerator", "denominator", "visual"],
  },

  // ==========================================================================
  //  MATH - Number Sense & Arithmetic
  // ==========================================================================
  {
    id: "phet-number-play",
    name: "Number Play",
    description:
      "Play with numbers! Count, decompose, and compare numbers to build number sense with visual representations.",
    category: "math",
    subcategory: "arithmetic",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("number-play"),
    thumbnailEmoji: "🔢",
    tags: ["counting", "decompose", "compare", "number sense", "subitize"],
  },
  {
    id: "phet-number-compare",
    name: "Number Compare",
    description:
      "Compare numbers using visual representations. Explore greater than, less than, and equal to with blocks and number lines.",
    category: "math",
    subcategory: "arithmetic",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("number-compare"),
    thumbnailEmoji: "🔢",
    tags: ["compare", "greater than", "less than", "number sense"],
  },
  {
    id: "phet-make-a-ten",
    name: "Make a Ten",
    description:
      "Learn addition strategies by making groups of ten. Decompose numbers and regroup to add more efficiently.",
    category: "math",
    subcategory: "arithmetic",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("make-a-ten"),
    thumbnailEmoji: "🔟",
    tags: ["addition", "make ten", "decompose", "regroup", "strategy"],
  },
  {
    id: "phet-arithmetic",
    name: "Arithmetic",
    description:
      "Practice multiplication, division, and factoring with this interactive game. Explore patterns in a multiplication table.",
    category: "math",
    subcategory: "arithmetic",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("arithmetic"),
    thumbnailEmoji: "✖️",
    tags: ["multiplication", "division", "factoring", "times table", "arithmetic"],
  },

  // ==========================================================================
  //  MATH - Ratios & Proportions
  // ==========================================================================
  {
    id: "phet-ratio-and-proportion",
    name: "Ratio and Proportion",
    description:
      "Explore ratios and proportional relationships using hands-on interactive challenges. Discover what it means for two quantities to be proportional.",
    category: "math",
    subcategory: "ratios",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("ratio-and-proportion"),
    thumbnailEmoji: "📊",
    tags: ["ratio", "proportion", "equivalent ratios", "scaling", "relationship"],
  },
  {
    id: "phet-proportion-playground",
    name: "Proportion Playground",
    description:
      "Explore proportional relationships with necklaces, paint, and billiards. See how two quantities relate to each other.",
    category: "math",
    subcategory: "ratios",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("proportion-playground"),
    thumbnailEmoji: "📊",
    tags: ["proportion", "ratio", "equivalent fractions", "scaling"],
  },
  {
    id: "phet-unit-rates",
    name: "Unit Rates",
    description:
      "Explore the concept of unit rates in a shopping context. Compare prices and find the best deal using unit rates.",
    category: "math",
    subcategory: "ratios",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("unit-rates"),
    thumbnailEmoji: "🛒",
    tags: ["unit rate", "ratio", "proportion", "price", "comparison"],
  },

  // ==========================================================================
  //  MATH - Number Lines
  // ==========================================================================
  {
    id: "phet-number-line-operations",
    name: "Number Line Operations",
    description:
      "Explore addition and subtraction on a number line. Visualize negative numbers and how operations move you along the line.",
    category: "math",
    subcategory: "arithmetic",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("number-line-operations"),
    thumbnailEmoji: "➕",
    tags: ["number line", "addition", "subtraction", "negative numbers", "integers"],
  },
  {
    id: "phet-number-line-integers",
    name: "Number Line: Integers",
    description:
      "Explore integers on a number line. Place and compare positive and negative numbers and understand absolute value.",
    category: "math",
    subcategory: "arithmetic",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("number-line-integers"),
    thumbnailEmoji: "🔢",
    tags: ["number line", "integers", "negative", "positive", "absolute value"],
  },
  {
    id: "phet-number-line-distance",
    name: "Number Line: Distance",
    description:
      "Use a number line to explore distance between numbers. Discover how distance relates to absolute value of differences.",
    category: "math",
    subcategory: "arithmetic",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("number-line-distance"),
    thumbnailEmoji: "📏",
    tags: ["number line", "distance", "absolute value", "difference"],
  },

  // ==========================================================================
  //  MATH - Statistics & Data
  // ==========================================================================
  {
    id: "phet-center-and-variability",
    name: "Center and Variability",
    description:
      "Explore measures of center (mean, median) and variability. See how data distributions relate to statistical summaries.",
    category: "math",
    subcategory: "statistics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("center-and-variability"),
    thumbnailEmoji: "📊",
    tags: ["mean", "median", "variability", "data", "distribution", "statistics"],
  },
  {
    id: "phet-mean-share-and-balance",
    name: "Mean: Share and Balance",
    description:
      "Develop an understanding of mean by sharing and balancing. Level out data using a balance beam to find the mean visually.",
    category: "math",
    subcategory: "statistics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("mean-share-and-balance"),
    thumbnailEmoji: "⚖️",
    tags: ["mean", "average", "share", "balance", "data", "statistics"],
  },

  // ==========================================================================
  //  MATH - GeoGebra Tools
  // ==========================================================================
  {
    id: "geogebra-classic",
    name: "GeoGebra Classic",
    description:
      "A full-featured, interactive graphing calculator with geometry, algebra, spreadsheets, and CAS. Plot functions, create constructions, and explore math visually.",
    category: "math",
    subcategory: "graphing",
    gradeLevel: "High School",
    source: "GeoGebra",
    embedUrl: "https://www.geogebra.org/classic",
    thumbnailEmoji: "📈",
    tags: ["graphing", "geometry", "algebra", "calculator", "functions", "constructions"],
  },
  {
    id: "geogebra-geometry",
    name: "GeoGebra Geometry",
    description:
      "Construct and explore geometric shapes interactively. Measure angles, distances, and areas while discovering geometric properties.",
    category: "math",
    subcategory: "geometry",
    gradeLevel: "Middle School",
    source: "GeoGebra",
    embedUrl: "https://www.geogebra.org/geometry",
    thumbnailEmoji: "📏",
    tags: ["geometry", "shapes", "angles", "constructions", "measurement"],
  },
  {
    id: "geogebra-3d-calculator",
    name: "GeoGebra 3D Calculator",
    description:
      "Visualize and explore 3D functions, surfaces, and solids. Rotate and interact with three-dimensional mathematical objects.",
    category: "math",
    subcategory: "3D geometry",
    gradeLevel: "College",
    source: "GeoGebra",
    embedUrl: "https://www.geogebra.org/3d",
    thumbnailEmoji: "🧊",
    tags: ["3D", "surface", "solid", "multivariable", "calculus", "visualization"],
  },
  {
    id: "geogebra-probability",
    name: "GeoGebra Probability Calculator",
    description:
      "Explore probability distributions, calculate probabilities, and visualize statistical concepts with interactive tools.",
    category: "math",
    subcategory: "statistics",
    gradeLevel: "High School",
    source: "GeoGebra",
    embedUrl: "https://www.geogebra.org/probability",
    thumbnailEmoji: "🎲",
    tags: ["probability", "statistics", "distribution", "normal", "binomial"],
  },
  {
    id: "geogebra-cas",
    name: "GeoGebra CAS Calculator",
    description:
      "A Computer Algebra System for symbolic computation. Solve equations, factor expressions, compute derivatives, and manipulate algebraic expressions.",
    category: "math",
    subcategory: "algebra",
    gradeLevel: "College",
    source: "GeoGebra",
    embedUrl: "https://www.geogebra.org/cas",
    thumbnailEmoji: "🧮",
    tags: ["CAS", "symbolic", "algebra", "solve", "factor", "derivative", "integral"],
  },
  {
    id: "geogebra-graphing",
    name: "GeoGebra Graphing Calculator",
    description:
      "A streamlined graphing calculator for plotting functions, exploring transformations, and analyzing graphs with sliders.",
    category: "math",
    subcategory: "graphing",
    gradeLevel: "High School",
    source: "GeoGebra",
    embedUrl: "https://www.geogebra.org/graphing",
    thumbnailEmoji: "📈",
    tags: ["graphing", "functions", "calculator", "plot", "sliders", "transformations"],
  },

  // ==========================================================================
  //  MATH - Desmos Tools
  // ==========================================================================
  {
    id: "desmos-graphing-calculator",
    name: "Desmos Graphing Calculator",
    description:
      "A beautiful, free online graphing calculator. Plot functions, create tables, add sliders, animate graphs, and more.",
    category: "math",
    subcategory: "graphing",
    gradeLevel: "High School",
    source: "Desmos",
    embedUrl: "https://www.desmos.com/calculator",
    thumbnailEmoji: "📉",
    tags: ["graphing", "functions", "calculator", "sliders", "animation", "algebra"],
  },
  {
    id: "desmos-scientific-calculator",
    name: "Desmos Scientific Calculator",
    description:
      "A full-featured scientific calculator with trigonometric functions, logarithms, exponents, and more. Great for quick computations.",
    category: "math",
    subcategory: "arithmetic",
    gradeLevel: "High School",
    source: "Desmos",
    embedUrl: "https://www.desmos.com/scientific",
    thumbnailEmoji: "🔢",
    tags: ["scientific", "calculator", "trig", "logarithm", "exponent"],
  },
  {
    id: "desmos-geometry",
    name: "Desmos Geometry",
    description:
      "Build and explore geometric constructions with Desmos. Create points, lines, circles, and polygons with easy-to-use tools.",
    category: "math",
    subcategory: "geometry",
    gradeLevel: "Middle School",
    source: "Desmos",
    embedUrl: "https://www.desmos.com/geometry",
    thumbnailEmoji: "📐",
    tags: ["geometry", "construction", "shapes", "angles", "measurement", "proof"],
  },

  // ==========================================================================
  //  EARTH SCIENCE - Geology
  // ==========================================================================
  {
    id: "phet-plate-tectonics",
    name: "Plate Tectonics",
    description:
      "Explore how plates move on the surface of the earth. Change temperature, composition, and thickness to see the effects on plate motion.",
    category: "earth-science",
    subcategory: "geology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("plate-tectonics"),
    thumbnailEmoji: "🌋",
    tags: ["plate tectonics", "crust", "mantle", "earthquake", "volcano", "continental drift"],
  },

  // ==========================================================================
  //  EARTH SCIENCE - Climate & Atmosphere
  // ==========================================================================
  {
    id: "phet-greenhouse-effect",
    name: "Greenhouse Effect",
    description:
      "Explore how greenhouse gases affect the temperature of the Earth. Compare the effects of glass panes and atmospheric gases.",
    category: "earth-science",
    subcategory: "climate",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("greenhouse-effect"),
    thumbnailEmoji: "🌡️",
    tags: ["greenhouse", "climate", "CO2", "temperature", "atmosphere", "infrared"],
  },

  // ==========================================================================
  //  EARTH SCIENCE - Fluids & Pressure
  // ==========================================================================
  {
    id: "es-phet-density",
    name: "Density (Earth Science)",
    description:
      "Understand how density differences drive geological processes like convection in the mantle and layering of Earth's interior.",
    category: "earth-science",
    subcategory: "geology",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("density"),
    thumbnailEmoji: "🪨",
    tags: ["density", "mantle", "convection", "layering", "rock", "mineral"],
  },
  {
    id: "es-phet-buoyancy",
    name: "Buoyancy (Earth Science)",
    description:
      "Explore buoyancy as it relates to tectonic plate flotation (isostasy). Understand why continents float on the denser mantle.",
    category: "earth-science",
    subcategory: "geology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("buoyancy"),
    thumbnailEmoji: "🌍",
    tags: ["buoyancy", "isostasy", "tectonic plate", "mantle", "continent", "density"],
  },
  {
    id: "es-phet-under-pressure",
    name: "Under Pressure (Earth Science)",
    description:
      "Explore how pressure changes with depth in the Earth and oceans. Relate fluid pressure concepts to geological processes.",
    category: "earth-science",
    subcategory: "geology",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("under-pressure"),
    thumbnailEmoji: "🌊",
    tags: ["pressure", "depth", "ocean", "geology", "atmosphere", "hydrostatic"],
  },
  {
    id: "es-phet-fluid-pressure-and-flow",
    name: "Fluid Pressure and Flow (Earth Science)",
    description:
      "Explore fluid dynamics in geological contexts. Understand how groundwater flows, how rivers shape landscapes, and how magma moves.",
    category: "earth-science",
    subcategory: "hydrology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("fluid-pressure-and-flow"),
    thumbnailEmoji: "🚿",
    tags: ["fluid flow", "groundwater", "hydrology", "pressure", "Bernoulli"],
  },

  // ==========================================================================
  //  EARTH SCIENCE - Astronomy
  // ==========================================================================
  {
    id: "es-phet-gravity-and-orbits",
    name: "Gravity and Orbits (Earth Science)",
    description:
      "Explore how gravity governs the motion of planets, moons, and satellites. Understand orbital mechanics and tidal forces.",
    category: "earth-science",
    subcategory: "astronomy",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("gravity-and-orbits"),
    thumbnailEmoji: "🌍",
    tags: ["gravity", "orbit", "planet", "moon", "tides", "satellite"],
  },
  {
    id: "es-phet-my-solar-system",
    name: "My Solar System (Earth Science)",
    description:
      "Build and explore a custom solar system. Understand how the planets in our solar system formed and maintain their orbits.",
    category: "earth-science",
    subcategory: "astronomy",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("my-solar-system"),
    thumbnailEmoji: "☀️",
    tags: ["solar system", "orbit", "planet", "gravity", "astronomy"],
  },
  {
    id: "es-phet-keplers-laws",
    name: "Kepler's Laws (Earth Science)",
    description:
      "Explore Kepler's laws of planetary motion. Understand how they describe the orbits of planets, comets, and asteroids.",
    category: "earth-science",
    subcategory: "astronomy",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("keplers-laws"),
    thumbnailEmoji: "🪐",
    tags: ["Kepler", "orbit", "planetary motion", "ellipse", "comet", "asteroid"],
  },
  {
    id: "nasa-solar-system-explorer",
    name: "NASA Solar System Explorer",
    description:
      "Explore our solar system in stunning 3D. Fly through space, visit planets, moons, and asteroids with NASA's interactive visualization.",
    category: "earth-science",
    subcategory: "astronomy",
    gradeLevel: "Middle School",
    source: "Other",
    embedUrl: "https://eyes.nasa.gov/apps/solar-system/",
    thumbnailEmoji: "🚀",
    tags: ["NASA", "solar system", "planets", "3D", "space", "exploration"],
  },

  // ==========================================================================
  //  EARTH SCIENCE - Waves & Weather
  // ==========================================================================
  {
    id: "es-phet-wave-on-a-string",
    name: "Seismic Waves (Earth Science)",
    description:
      "Explore wave behavior as it relates to seismic waves. Understand how earthquake waves travel through Earth's interior.",
    category: "earth-science",
    subcategory: "geology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("wave-on-a-string"),
    thumbnailEmoji: "🌐",
    tags: ["seismic wave", "earthquake", "P-wave", "S-wave", "propagation"],
  },
  {
    id: "es-phet-diffusion",
    name: "Atmospheric Diffusion (Earth Science)",
    description:
      "Explore how gases diffuse in the atmosphere. Understand how pollutants and greenhouse gases spread through air.",
    category: "earth-science",
    subcategory: "climate",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("diffusion"),
    thumbnailEmoji: "🌫️",
    tags: ["diffusion", "atmosphere", "pollution", "gas", "spread", "climate"],
  },
  {
    id: "es-phet-blackbody-spectrum",
    name: "Blackbody Spectrum (Earth Science)",
    description:
      "Understand how the Sun's blackbody radiation affects Earth's climate. Explore how temperature determines the radiation spectrum of stars.",
    category: "earth-science",
    subcategory: "astronomy",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("blackbody-spectrum"),
    thumbnailEmoji: "🌟",
    tags: ["blackbody", "Sun", "radiation", "climate", "stellar temperature"],
  },

  // ==========================================================================
  //  ENGINEERING - Circuits & Electronics
  // ==========================================================================
  {
    id: "eng-phet-circuit-dc",
    name: "Circuit Design: DC (Engineering)",
    description:
      "Design and test DC circuits with real-world components. Build power supplies, voltage dividers, and sensor circuits.",
    category: "engineering",
    subcategory: "electrical",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("circuit-construction-kit-dc"),
    thumbnailEmoji: "🔋",
    tags: ["circuit design", "DC", "engineering", "components", "voltage divider"],
  },
  {
    id: "eng-phet-circuit-ac",
    name: "Circuit Design: AC (Engineering)",
    description:
      "Explore AC circuit design with capacitors, inductors, and resistors. Analyze impedance, phase, and frequency response.",
    category: "engineering",
    subcategory: "electrical",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("circuit-construction-kit-ac"),
    thumbnailEmoji: "🔌",
    tags: ["AC circuit", "impedance", "frequency response", "filter", "RLC"],
  },
  {
    id: "eng-phet-capacitor-lab",
    name: "Capacitor Design Lab (Engineering)",
    description:
      "Explore capacitor design parameters. Understand how plate area, separation, and dielectric material affect capacitance for real applications.",
    category: "engineering",
    subcategory: "electrical",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("capacitor-lab-basics"),
    thumbnailEmoji: "🔋",
    tags: ["capacitor", "design", "dielectric", "plate area", "separation", "engineering"],
  },
  {
    id: "eng-phet-resistance-wire",
    name: "Wire Resistance Calculator (Engineering)",
    description:
      "Calculate and visualize wire resistance for engineering applications. Select material, length, and gauge to design proper wiring.",
    category: "engineering",
    subcategory: "electrical",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("resistance-in-a-wire"),
    thumbnailEmoji: "🔌",
    tags: ["resistance", "wire", "gauge", "resistivity", "engineering", "design"],
  },

  // ==========================================================================
  //  ENGINEERING - Mechanics & Structures
  // ==========================================================================
  {
    id: "eng-phet-energy-forms",
    name: "Energy Systems (Engineering)",
    description:
      "Explore energy conversion systems used in engineering. See how mechanical, electrical, thermal, and light energy convert between forms.",
    category: "engineering",
    subcategory: "mechanical",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("energy-forms-and-changes"),
    thumbnailEmoji: "🔄",
    tags: ["energy conversion", "systems", "mechanical", "electrical", "thermal", "engineering"],
  },
  {
    id: "eng-phet-hookes-law",
    name: "Spring Design (Engineering)",
    description:
      "Design springs for engineering applications. Explore how spring constant, displacement, and energy storage relate to real-world spring design.",
    category: "engineering",
    subcategory: "mechanical",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("hookes-law"),
    thumbnailEmoji: "🔗",
    tags: ["spring design", "Hooke's law", "spring constant", "energy storage", "engineering"],
  },
  {
    id: "eng-phet-buoyancy",
    name: "Buoyancy Engineering",
    description:
      "Apply buoyancy principles to engineering design. Understand how ships float, submarines dive, and hot air balloons fly.",
    category: "engineering",
    subcategory: "mechanical",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("buoyancy"),
    thumbnailEmoji: "🚢",
    tags: ["buoyancy", "ship design", "float", "Archimedes", "engineering", "displacement"],
  },
  {
    id: "eng-phet-fluid-flow",
    name: "Fluid Systems Engineering",
    description:
      "Design fluid systems and understand pipe flow. Apply Bernoulli's principle to engineering problems like pipe sizing and flow control.",
    category: "engineering",
    subcategory: "mechanical",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("fluid-pressure-and-flow"),
    thumbnailEmoji: "🚿",
    tags: ["fluid dynamics", "pipe design", "Bernoulli", "flow rate", "engineering"],
  },
  {
    id: "eng-phet-vector-addition",
    name: "Force Analysis (Engineering)",
    description:
      "Analyze forces in engineering structures using vector addition. Determine resultant forces and equilibrium conditions for structural design.",
    category: "engineering",
    subcategory: "structural",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("vector-addition"),
    thumbnailEmoji: "📐",
    tags: ["vector", "force analysis", "structural", "equilibrium", "resultant", "engineering"],
  },
  {
    id: "eng-myphysicslab-roller-coaster",
    name: "Roller Coaster Design (Engineering)",
    description:
      "Design roller coaster tracks and analyze the physics. Apply energy conservation principles to create thrilling but safe rides.",
    category: "engineering",
    subcategory: "mechanical",
    gradeLevel: "High School",
    source: "myPhysicsLab",
    embedUrl: myphysicslab("roller/roller-single-en.html"),
    thumbnailEmoji: "🎢",
    tags: ["roller coaster", "design", "energy", "safety", "engineering", "track"],
  },

  // ==========================================================================
  //  Additional PHYSICS entries for breadth
  // ==========================================================================
  {
    id: "phet-projectile-motion-lab",
    name: "Projectile Motion Lab",
    description:
      "A lab-oriented version of projectile motion. Collect data, measure ranges, and verify kinematic equations through experimentation.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("projectile-motion"),
    thumbnailEmoji: "🎯",
    tags: ["projectile", "lab", "data collection", "kinematics", "experiment"],
  },
  {
    id: "phet-gravity-and-orbits-advanced",
    name: "Gravity and Orbits (Advanced)",
    description:
      "Advanced exploration of gravitational physics. Analyze orbital velocity, escape velocity, and gravitational potential energy in detail.",
    category: "physics",
    subcategory: "astronomy",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("gravity-and-orbits"),
    thumbnailEmoji: "🌍",
    tags: ["gravity", "orbital velocity", "escape velocity", "gravitational PE", "advanced"],
  },
  {
    id: "phet-energy-skate-park-advanced",
    name: "Energy Skate Park (Advanced)",
    description:
      "An advanced exploration of energy conservation with friction and thermal energy. Analyze energy bar graphs and track energy dissipation.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("energy-skate-park-basics"),
    thumbnailEmoji: "🛹",
    tags: ["energy conservation", "friction", "thermal energy", "bar graph", "advanced"],
  },
  {
    id: "phet-geometric-optics-basics",
    name: "Geometric Optics: Basics",
    description:
      "A simplified introduction to lenses and mirrors. Explore how objects form images through converging and diverging optics.",
    category: "physics",
    subcategory: "optics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("geometric-optics-basics"),
    thumbnailEmoji: "🔍",
    tags: ["lens", "mirror", "image", "optics", "converging", "diverging", "basics"],
  },
  {
    id: "phet-circuit-construction-kit-dc-virtual-lab",
    name: "Circuit Construction Kit: DC - Virtual Lab",
    description:
      "A virtual laboratory for building and testing DC circuits. Includes ammeter and voltmeter for precise measurements.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("circuit-construction-kit-dc-virtual-lab"),
    thumbnailEmoji: "🔋",
    tags: ["circuit", "DC", "virtual lab", "ammeter", "voltmeter", "measurement"],
  },

  // ==========================================================================
  //  Additional CHEMISTRY entries for breadth
  // ==========================================================================
  {
    id: "chem-phet-build-a-molecule-advanced",
    name: "Build a Molecule (Advanced)",
    description:
      "Build larger and more complex molecules. Explore organic molecules, functional groups, and isomers in 3D.",
    category: "chemistry",
    subcategory: "molecular structure",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("build-a-molecule"),
    thumbnailEmoji: "🧬",
    tags: ["molecule", "organic", "functional group", "isomer", "3D structure"],
  },
  {
    id: "chem-phet-acid-base-advanced",
    name: "Acid-Base Solutions (Advanced)",
    description:
      "Advanced exploration of acid-base chemistry. Investigate weak acid/base equilibria, buffer solutions, and titration curves.",
    category: "chemistry",
    subcategory: "acids & bases",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("acid-base-solutions"),
    thumbnailEmoji: "🧪",
    tags: ["acid", "base", "equilibrium", "buffer", "Ka", "titration", "advanced"],
  },
  {
    id: "chem-phet-balancing-equations-game",
    name: "Balancing Equations Game",
    description:
      "Practice balancing chemical equations in a game format. Progress through difficulty levels and earn points for correct answers.",
    category: "chemistry",
    subcategory: "reactions",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("balancing-chemical-equations"),
    thumbnailEmoji: "🎮",
    tags: ["balance", "chemical equation", "game", "stoichiometry", "practice"],
  },
  {
    id: "chem-phet-beer-lambert-advanced",
    name: "Beer's Law Lab (Advanced)",
    description:
      "Advanced spectrophotometry lab. Determine unknown concentrations using Beer-Lambert law and create calibration curves.",
    category: "chemistry",
    subcategory: "analytical",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("beers-law-lab"),
    thumbnailEmoji: "🔬",
    tags: ["Beer's law", "spectrophotometry", "calibration curve", "unknown concentration", "analytical"],
  },
  {
    id: "chem-phet-isotopes-advanced",
    name: "Isotopes and Atomic Mass (Advanced)",
    description:
      "Advanced exploration of isotopes. Calculate weighted average atomic masses and understand mass spectrometry data.",
    category: "chemistry",
    subcategory: "atomic structure",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("isotopes-and-atomic-mass"),
    thumbnailEmoji: "🔬",
    tags: ["isotope", "mass spectrometry", "weighted average", "atomic mass", "abundance"],
  },
  {
    id: "chem-phet-molarity-lab",
    name: "Molarity Lab",
    description:
      "A lab-focused exploration of molarity. Prepare solutions of specific concentrations through careful measurement and dilution.",
    category: "chemistry",
    subcategory: "solutions",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("molarity"),
    thumbnailEmoji: "🥽",
    tags: ["molarity", "solution preparation", "dilution", "concentration", "lab"],
  },

  // ==========================================================================
  //  Additional BIOLOGY entries for breadth
  // ==========================================================================
  {
    id: "bio-phet-gene-expression-basics",
    name: "Gene Expression: Basics",
    description:
      "A simplified introduction to how genes are expressed. See the basic process from DNA to protein in an easy-to-understand way.",
    category: "biology",
    subcategory: "genetics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("gene-expression-essentials"),
    thumbnailEmoji: "🧬",
    tags: ["gene", "DNA", "protein", "basics", "transcription", "translation"],
  },
  {
    id: "bio-natural-selection-middle",
    name: "Natural Selection (Middle School)",
    description:
      "A guided introduction to natural selection. Observe how traits change in a population of rabbits over generations.",
    category: "biology",
    subcategory: "evolution",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("natural-selection"),
    thumbnailEmoji: "🐇",
    tags: ["natural selection", "evolution", "traits", "population", "adaptation", "introductory"],
  },
  {
    id: "bio-phet-neuron-middle",
    name: "Neuron (Middle School)",
    description:
      "A simplified look at how neurons work. Watch ions flow and see a nerve impulse travel along a neuron.",
    category: "biology",
    subcategory: "neuroscience",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("neuron"),
    thumbnailEmoji: "🧠",
    tags: ["neuron", "nerve", "impulse", "ion", "brain", "basics"],
  },

  // ==========================================================================
  //  Additional EARTH SCIENCE entries for breadth
  // ==========================================================================
  {
    id: "es-phet-states-of-matter",
    name: "Water Cycle States (Earth Science)",
    description:
      "Explore how water transitions between solid, liquid, and gas states. Understand evaporation, condensation, and the water cycle.",
    category: "earth-science",
    subcategory: "hydrology",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("states-of-matter-basics"),
    thumbnailEmoji: "💧",
    tags: ["water cycle", "evaporation", "condensation", "precipitation", "phase change"],
  },
  {
    id: "es-phet-gas-properties",
    name: "Atmospheric Gases (Earth Science)",
    description:
      "Explore how atmospheric gas properties affect weather and climate. Understand how temperature and pressure relate in the atmosphere.",
    category: "earth-science",
    subcategory: "climate",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("gas-properties"),
    thumbnailEmoji: "🌤️",
    tags: ["atmosphere", "gas", "pressure", "temperature", "weather", "altitude"],
  },

  // ==========================================================================
  //  Additional entries to expand coverage (200+)
  // ==========================================================================

  // --- More Physics ---
  {
    id: "phet-pendulum-lab-middle",
    name: "Pendulum Lab (Middle School)",
    description:
      "A guided introduction to pendulums. Discover the relationship between length and period through hands-on experimentation.",
    category: "physics",
    subcategory: "mechanics",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("pendulum-lab"),
    thumbnailEmoji: "🕰️",
    tags: ["pendulum", "period", "length", "gravity", "introductory"],
  },
  {
    id: "phet-bending-light-college",
    name: "Bending Light (College)",
    description:
      "Advanced exploration of refraction and total internal reflection. Derive Snell's law and explore fiber optics applications.",
    category: "physics",
    subcategory: "optics",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("bending-light"),
    thumbnailEmoji: "🔦",
    tags: ["refraction", "Snell's law", "total internal reflection", "fiber optics", "advanced"],
  },
  {
    id: "phet-faradays-law-college",
    name: "Faraday's Law (College)",
    description:
      "Advanced electromagnetic induction. Quantitatively analyze induced EMF, Lenz's law, and electromagnetic energy conversion.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("faradays-law"),
    thumbnailEmoji: "🧲",
    tags: ["Faraday", "Lenz's law", "EMF", "induction", "electromagnetic", "advanced"],
  },
  {
    id: "phet-charges-and-fields-college",
    name: "Charges and Fields (College)",
    description:
      "Advanced electrostatics. Map electric field lines, calculate potential differences, and explore superposition of multiple charge configurations.",
    category: "physics",
    subcategory: "electricity",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("charges-and-fields"),
    thumbnailEmoji: "⚡",
    tags: ["electrostatics", "superposition", "potential difference", "field mapping", "advanced"],
  },
  {
    id: "phet-wave-interference-college",
    name: "Wave Interference (College)",
    description:
      "Advanced wave optics. Quantitative analysis of diffraction patterns, interference fringes, and the wave nature of light.",
    category: "physics",
    subcategory: "waves",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("wave-interference"),
    thumbnailEmoji: "🌊",
    tags: ["diffraction", "interference", "Young's experiment", "wave optics", "advanced"],
  },

  // --- More Chemistry ---
  {
    id: "chem-phet-concentration-lab",
    name: "Concentration Lab",
    description:
      "A lab-oriented exploration of solution concentration. Prepare solutions, perform dilutions, and observe color changes.",
    category: "chemistry",
    subcategory: "solutions",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("concentration"),
    thumbnailEmoji: "🫧",
    tags: ["concentration", "dilution", "solution", "color", "lab"],
  },
  {
    id: "chem-phet-molecule-polarity-college",
    name: "Molecule Polarity (College)",
    description:
      "Advanced exploration of molecular polarity. Analyze how electronegativity, geometry, and lone pairs create molecular dipole moments.",
    category: "chemistry",
    subcategory: "bonding",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("molecule-polarity"),
    thumbnailEmoji: "🔀",
    tags: ["polarity", "dipole moment", "electronegativity", "geometry", "advanced"],
  },

  // ==========================================================================
  //  CHEMISTRY - Additional cross-listed & external sims
  // ==========================================================================
  {
    id: "chem-phet-blackbody-spectrum",
    name: "Blackbody Spectrum (Chemistry)",
    description:
      "Explore electromagnetic radiation and how heated objects emit light. Understand spectroscopy principles and how emission spectra relate to element identification.",
    category: "chemistry",
    subcategory: "spectroscopy",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("blackbody-spectrum"),
    thumbnailEmoji: "🌟",
    tags: ["blackbody", "spectrum", "emission", "spectroscopy", "electromagnetic radiation"],
  },
  {
    id: "chem-phet-build-an-atom",
    name: "Build an Atom (Chemistry)",
    description:
      "Construct atoms by placing protons, neutrons, and electrons. Learn how the atomic number defines elements and how ions form through electron gain or loss.",
    category: "chemistry",
    subcategory: "atomic structure",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("build-an-atom"),
    thumbnailEmoji: "⚛️",
    tags: ["atom", "proton", "neutron", "electron", "ion", "atomic number", "element"],
  },
  {
    id: "chem-phet-charges-and-fields",
    name: "Charges and Fields (Chemistry)",
    description:
      "Visualize electric fields and potentials relevant to electrochemistry. Understand how charged species interact in ionic solutions and electrochemical cells.",
    category: "chemistry",
    subcategory: "electrochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("charges-and-fields"),
    thumbnailEmoji: "🔋",
    tags: ["electric field", "charge", "electrochemistry", "ionic", "potential"],
  },
  {
    id: "chem-phet-density",
    name: "Density (Chemistry)",
    description:
      "Explore density as a physical property of matter. Compare substances by mass and volume to understand how density helps identify unknown materials.",
    category: "chemistry",
    subcategory: "physical properties",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("density"),
    thumbnailEmoji: "🧊",
    tags: ["density", "mass", "volume", "physical property", "identification", "molar mass"],
  },
  {
    id: "chem-phet-under-pressure",
    name: "Under Pressure (Chemistry)",
    description:
      "Explore how gas pressure depends on depth and container shape. Relate pressure concepts to gas laws and real-world chemistry applications.",
    category: "chemistry",
    subcategory: "gas laws",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("under-pressure"),
    thumbnailEmoji: "🌊",
    tags: ["pressure", "gas", "atmosphere", "fluid", "Pascal", "gas laws"],
  },
  {
    id: "chem-ophysics-bohr-model",
    name: "Bohr Model (Chemistry)",
    description:
      "Explore the Bohr model of the atom and electron energy levels. Observe photon emission and absorption as electrons transition between shells.",
    category: "chemistry",
    subcategory: "atomic structure",
    gradeLevel: "High School",
    source: "oPhysics",
    embedUrl: "https://ophysics.com/r1.html",
    thumbnailEmoji: "⚛️",
    tags: ["Bohr model", "energy levels", "photon", "electron", "shell", "spectrum"],
  },
  {
    id: "chem-geogebra-titration",
    name: "GeoGebra Graphing (Chemistry)",
    description:
      "Use GeoGebra to plot titration curves, equilibrium graphs, and reaction rate diagrams. A versatile tool for visualizing quantitative chemistry data.",
    category: "chemistry",
    subcategory: "analytical",
    gradeLevel: "High School",
    source: "GeoGebra",
    embedUrl: "https://www.geogebra.org/classic",
    thumbnailEmoji: "📈",
    tags: ["titration", "equilibrium", "graph", "analytical chemistry", "curve", "data"],
  },
  {
    id: "chem-molview-organic",
    name: "MolView: Organic Molecules",
    description:
      "Explore the 3D structures of organic molecules. Search for alkanes, alcohols, carboxylic acids, and other functional groups to visualize their geometry.",
    category: "chemistry",
    subcategory: "organic",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://molview.org/",
    thumbnailEmoji: "🧬",
    tags: ["organic", "molecule", "3D", "functional group", "alkane", "alcohol", "structure"],
  },
  {
    id: "chem-3dmol-proteins",
    name: "3Dmol.js: Protein Structures",
    description:
      "Visualize protein structures and macromolecules in 3D. Explore amino acid chains, secondary structures, and protein folding with various rendering modes.",
    category: "chemistry",
    subcategory: "biochemistry",
    gradeLevel: "College",
    source: "Other",
    embedUrl: "https://www.3dmol.org/",
    thumbnailEmoji: "🔬",
    tags: ["protein", "biochemistry", "macromolecule", "amino acid", "folding", "3D"],
  },
  {
    id: "chem-phet-molecule-shapes-college",
    name: "Molecule Shapes (College)",
    description:
      "Advanced VSEPR theory exploration. Predict and analyze molecular geometries including trigonal bipyramidal and octahedral arrangements for complex molecules.",
    category: "chemistry",
    subcategory: "molecular structure",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("molecule-shapes"),
    thumbnailEmoji: "🔷",
    tags: ["VSEPR", "molecular geometry", "trigonal bipyramidal", "octahedral", "advanced"],
  },
  {
    id: "chem-phet-reactants-products-college",
    name: "Reactants, Products and Leftovers (College)",
    description:
      "Advanced stoichiometry with limiting reagents and percent yield. Calculate theoretical and actual yields for multi-step reactions.",
    category: "chemistry",
    subcategory: "reactions",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("reactants-products-and-leftovers"),
    thumbnailEmoji: "🧫",
    tags: ["stoichiometry", "limiting reagent", "percent yield", "theoretical yield", "advanced"],
  },
  {
    id: "chem-phet-ph-scale-college",
    name: "pH Scale (College)",
    description:
      "Advanced acid-base chemistry using the pH scale. Calculate hydrogen ion concentrations, explore logarithmic relationships, and understand buffer chemistry.",
    category: "chemistry",
    subcategory: "acids & bases",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("ph-scale"),
    thumbnailEmoji: "🧪",
    tags: ["pH", "hydrogen ion", "logarithm", "buffer", "acid", "base", "advanced"],
  },
  {
    id: "chem-phet-concentration-college",
    name: "Concentration (College)",
    description:
      "Advanced solution chemistry. Explore colligative properties, saturated solutions, and the relationship between concentration and chemical reactivity.",
    category: "chemistry",
    subcategory: "solutions",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("concentration"),
    thumbnailEmoji: "🫧",
    tags: ["concentration", "colligative", "saturated", "solubility", "reactivity", "advanced"],
  },
  {
    id: "chem-phet-build-an-atom-hs",
    name: "Build an Atom (High School Chemistry)",
    description:
      "Construct atoms to explore isotopes, ions, and electron configurations. Understand how subatomic particles determine chemical behavior.",
    category: "chemistry",
    subcategory: "atomic structure",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("build-an-atom"),
    thumbnailEmoji: "⚛️",
    tags: ["atom", "isotope", "ion", "electron configuration", "subatomic"],
  },
  {
    id: "chem-phet-gas-properties-college",
    name: "Gas Properties (College)",
    description:
      "Advanced gas law exploration. Analyze real gas behavior, deviations from ideal gas law, and van der Waals equation corrections.",
    category: "chemistry",
    subcategory: "gas laws",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("gas-properties"),
    thumbnailEmoji: "💨",
    tags: ["real gas", "van der Waals", "ideal gas law", "deviation", "intermolecular forces", "advanced"],
  },
  {
    id: "chem-chemcollective-titration",
    name: "ChemCollective Titration Lab",
    description:
      "Perform virtual titrations with acids and bases. Use indicators and pH meters to find equivalence points and determine unknown concentrations.",
    category: "chemistry",
    subcategory: "analytical",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://chemcollective.org/vlab/vlab.php",
    thumbnailEmoji: "🧫",
    tags: ["titration", "acid", "base", "equivalence point", "indicator", "virtual lab"],
  },
  {
    id: "chem-chemcollective-reactions",
    name: "ChemCollective Reactions Lab",
    description:
      "Mix chemicals and observe reactions in a virtual lab. Explore precipitation, acid-base, and redox reactions with realistic glassware and reagents.",
    category: "chemistry",
    subcategory: "reactions",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://chemcollective.org/vlab/vlab.php",
    thumbnailEmoji: "🧪",
    tags: ["reactions", "precipitation", "redox", "virtual lab", "experiment"],
  },
  {
    id: "chem-phet-diffusion-college",
    name: "Diffusion (College Chemistry)",
    description:
      "Advanced exploration of Graham's law and effusion. Compare diffusion rates of gases quantitatively and relate to molar masses.",
    category: "chemistry",
    subcategory: "gas laws",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("diffusion"),
    thumbnailEmoji: "🫧",
    tags: ["Graham's law", "effusion", "diffusion", "molar mass", "kinetic theory", "advanced"],
  },
  {
    id: "chem-phet-states-of-matter-college",
    name: "States of Matter (College Chemistry)",
    description:
      "Advanced study of intermolecular forces and phase diagrams. Explore how London dispersion, dipole-dipole, and hydrogen bonding determine physical states.",
    category: "chemistry",
    subcategory: "states of matter",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("states-of-matter"),
    thumbnailEmoji: "🌡️",
    tags: ["intermolecular forces", "London dispersion", "hydrogen bonding", "phase diagram", "advanced"],
  },
  {
    id: "chem-molview-inorganic",
    name: "MolView: Inorganic & Ionic Compounds",
    description:
      "Explore the 3D structures of inorganic and ionic compounds. Visualize crystal lattices, coordination compounds, and polyatomic ions.",
    category: "chemistry",
    subcategory: "inorganic",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://molview.org/",
    thumbnailEmoji: "🔷",
    tags: ["inorganic", "ionic", "crystal lattice", "coordination", "polyatomic ion", "3D"],
  },
  {
    id: "chem-phet-molecule-polarity-hs",
    name: "Molecule Polarity (High School)",
    description:
      "Investigate how differences in electronegativity create polar bonds. See how molecular shape determines whether a molecule is polar or nonpolar overall.",
    category: "chemistry",
    subcategory: "bonding",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("molecule-polarity"),
    thumbnailEmoji: "🔀",
    tags: ["polarity", "electronegativity", "polar bond", "nonpolar", "dipole"],
  },
  {
    id: "chem-phet-acid-base-middle",
    name: "Acid-Base Solutions (Middle School)",
    description:
      "A guided introduction to acids and bases. Explore what makes a solution acidic or basic and test common household substances.",
    category: "chemistry",
    subcategory: "acids & bases",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("acid-base-solutions"),
    thumbnailEmoji: "🧪",
    tags: ["acid", "base", "pH", "household chemicals", "introduction"],
  },

  // ==========================================================================
  //  BIOLOGY - Additional cross-listed & external sims
  // ==========================================================================

  // --- More Biology ---
  {
    id: "bio-phet-color-vision-elementary",
    name: "Color Vision (Elementary)",
    description:
      "A kid-friendly exploration of how we see colors. Mix red, green, and blue light to understand how our eyes perceive the rainbow.",
    category: "biology",
    subcategory: "human body",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("color-vision"),
    thumbnailEmoji: "🌈",
    tags: ["color", "eye", "light", "vision", "elementary", "senses"],
  },
  {
    id: "bio-genetics-utah-cell-scale-hs",
    name: "Cell Size and Scale (High School)",
    description:
      "An advanced look at relative sizes in biology. Compare organelles, viruses, proteins, and molecules at the nanoscale.",
    category: "biology",
    subcategory: "cell biology",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://learn.genetics.utah.edu/content/cells/scale/",
    thumbnailEmoji: "🔬",
    tags: ["cell", "scale", "organelle", "virus", "protein", "nanoscale"],
  },
  {
    id: "bio-phet-concentration",
    name: "Concentration (Biology)",
    description:
      "Explore how concentration gradients drive biological processes. Understand osmosis, tonicity, and how cells maintain internal solute balance.",
    category: "biology",
    subcategory: "cell biology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("concentration"),
    thumbnailEmoji: "🫧",
    tags: ["concentration", "osmosis", "tonicity", "cell", "solute", "gradient"],
  },
  {
    id: "bio-phet-molarity",
    name: "Molarity (Biology)",
    description:
      "Learn how to prepare solutions at specific molarities for biological experiments. Understand how concentration affects enzyme activity and cell behavior.",
    category: "biology",
    subcategory: "laboratory",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("molarity"),
    thumbnailEmoji: "🥽",
    tags: ["molarity", "solution preparation", "biology lab", "enzyme", "concentration"],
  },
  {
    id: "bio-phet-ph-scale",
    name: "pH Scale (Biology)",
    description:
      "Explore pH in biological systems. Understand how blood pH is maintained, how stomach acid aids digestion, and why enzyme function depends on pH.",
    category: "biology",
    subcategory: "biochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("ph-scale"),
    thumbnailEmoji: "🧪",
    tags: ["pH", "blood", "stomach acid", "enzyme", "buffer", "biological systems"],
  },
  {
    id: "bio-phet-ph-scale-basics",
    name: "pH Scale: Basics (Biology)",
    description:
      "A simplified exploration of acids and bases in everyday life. Discover how pH affects digestion, skin care, and the foods we eat.",
    category: "biology",
    subcategory: "human body",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("ph-scale-basics"),
    thumbnailEmoji: "🧪",
    tags: ["pH", "acid", "base", "digestion", "food", "everyday science"],
  },
  {
    id: "bio-phet-gas-properties",
    name: "Gas Properties (Biology)",
    description:
      "Explore gas behavior relevant to respiration and gas exchange. Understand partial pressures, how oxygen and CO2 move in the lungs, and Dalton's law.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("gas-properties"),
    thumbnailEmoji: "💨",
    tags: ["respiration", "gas exchange", "partial pressure", "oxygen", "CO2", "lungs"],
  },
  {
    id: "bio-phet-states-of-matter",
    name: "States of Matter (Biology)",
    description:
      "Explore how water's unique properties arise from molecular interactions. Understand why water is essential for life and how temperature affects biological systems.",
    category: "biology",
    subcategory: "biochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("states-of-matter"),
    thumbnailEmoji: "💧",
    tags: ["water", "hydrogen bonding", "temperature", "biological systems", "phase change"],
  },
  {
    id: "bio-phet-charges-and-fields",
    name: "Charges and Fields (Biology)",
    description:
      "Explore electrical signals in biology. Understand how charged ions create membrane potentials, nerve impulses, and muscle contractions.",
    category: "biology",
    subcategory: "neuroscience",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("charges-and-fields"),
    thumbnailEmoji: "⚡",
    tags: ["ion channel", "membrane potential", "nerve impulse", "sodium", "potassium", "charge"],
  },
  {
    id: "bio-phet-wave-on-a-string",
    name: "Sound Waves (Biology)",
    description:
      "Explore wave properties as they relate to hearing. Understand how frequency determines pitch, amplitude determines loudness, and how the ear processes sound.",
    category: "biology",
    subcategory: "human body",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("wave-on-a-string"),
    thumbnailEmoji: "👂",
    tags: ["sound", "hearing", "frequency", "pitch", "amplitude", "ear", "wave"],
  },
  {
    id: "bio-phet-bending-light",
    name: "Bending Light (Biology)",
    description:
      "Explore how the eye bends light to form images. Understand refraction through the cornea and lens, and how vision problems arise from focusing errors.",
    category: "biology",
    subcategory: "human body",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("bending-light"),
    thumbnailEmoji: "👁️",
    tags: ["eye", "refraction", "lens", "cornea", "vision", "optics", "focus"],
  },
  {
    id: "bio-phet-energy-forms",
    name: "Energy Forms and Changes (Biology)",
    description:
      "Explore energy transformations in biological systems. Understand how metabolism converts chemical energy to thermal and mechanical energy in living organisms.",
    category: "biology",
    subcategory: "biochemistry",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("energy-forms-and-changes"),
    thumbnailEmoji: "🔄",
    tags: ["metabolism", "energy", "ATP", "chemical energy", "thermal", "biological"],
  },
  {
    id: "bio-phet-density",
    name: "Density (Biology)",
    description:
      "Explore density in biological contexts. Understand how aquatic organisms control buoyancy, why ice floats, and how density affects ecosystems.",
    category: "biology",
    subcategory: "ecology",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("density"),
    thumbnailEmoji: "🐟",
    tags: ["density", "buoyancy", "aquatic", "ice", "float", "ecosystem"],
  },
  {
    id: "genetics-utah-dna-basics",
    name: "DNA Basics",
    description:
      "Explore the structure of DNA. Learn about the double helix, nucleotide base pairs, and how DNA encodes genetic information.",
    category: "biology",
    subcategory: "genetics",
    gradeLevel: "Middle School",
    source: "Other",
    embedUrl: "https://learn.genetics.utah.edu/content/basics/dna/",
    thumbnailEmoji: "🧬",
    tags: ["DNA", "double helix", "nucleotide", "base pair", "genetic code"],
  },
  {
    id: "genetics-utah-transcription",
    name: "Transcription and Translation",
    description:
      "Follow the process of gene expression from DNA to protein. Watch transcription produce mRNA and translation build amino acid chains at the ribosome.",
    category: "biology",
    subcategory: "molecular biology",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://learn.genetics.utah.edu/content/basics/transcribe/",
    thumbnailEmoji: "🧬",
    tags: ["transcription", "translation", "mRNA", "ribosome", "amino acid", "protein synthesis"],
  },
  {
    id: "genetics-utah-dna-extraction",
    name: "DNA Extraction Virtual Lab",
    description:
      "Extract DNA from cells in a virtual laboratory. Follow the steps of a real DNA extraction protocol using detergent, salt, and alcohol.",
    category: "biology",
    subcategory: "laboratory",
    gradeLevel: "Middle School",
    source: "Other",
    embedUrl: "https://learn.genetics.utah.edu/content/basics/extract/",
    thumbnailEmoji: "🧪",
    tags: ["DNA extraction", "lab", "protocol", "cells", "experiment"],
  },
  {
    id: "genetics-utah-epigenetics",
    name: "Nutrition and Epigenetics",
    description:
      "Explore how nutrition and environment affect gene expression through epigenetic mechanisms. Understand how lifestyle choices influence our DNA activity.",
    category: "biology",
    subcategory: "genetics",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://learn.genetics.utah.edu/content/epigenetics/nutrition/",
    thumbnailEmoji: "🥗",
    tags: ["epigenetics", "nutrition", "gene expression", "environment", "DNA methylation"],
  },
  {
    id: "genetics-utah-membranes",
    name: "Cell Membranes",
    description:
      "Explore the structure and function of cell membranes. Learn how the phospholipid bilayer controls what enters and exits the cell.",
    category: "biology",
    subcategory: "cell biology",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://learn.genetics.utah.edu/content/cells/membranes/",
    thumbnailEmoji: "🔬",
    tags: ["cell membrane", "phospholipid", "bilayer", "transport", "permeability"],
  },
  {
    id: "genetics-utah-genetic-drift",
    name: "Genetic Drift",
    description:
      "Simulate genetic drift in small populations. Watch how random chance affects allele frequencies over generations, separate from natural selection.",
    category: "biology",
    subcategory: "evolution",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://learn.genetics.utah.edu/content/evolution/drift/",
    thumbnailEmoji: "🎲",
    tags: ["genetic drift", "allele frequency", "population", "random", "evolution"],
  },
  {
    id: "genetics-utah-molecular-evidence",
    name: "Molecular Evidence for Evolution",
    description:
      "Explore DNA and protein sequence comparisons that provide evidence for evolution. See how molecular data reveals evolutionary relationships between species.",
    category: "biology",
    subcategory: "evolution",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://learn.genetics.utah.edu/content/evolution/molecularevidence/",
    thumbnailEmoji: "🧬",
    tags: ["molecular evidence", "evolution", "DNA comparison", "phylogenetics", "homology"],
  },
  {
    id: "genetics-utah-click-and-clone",
    name: "Click and Clone",
    description:
      "Step through the process of cloning a mouse. Learn about somatic cell nuclear transfer and the science behind cloning technology.",
    category: "biology",
    subcategory: "genetics",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://learn.genetics.utah.edu/content/cloning/clickandclone/",
    thumbnailEmoji: "🐭",
    tags: ["cloning", "nuclear transfer", "somatic cell", "biotechnology", "mouse"],
  },
  {
    id: "genetics-utah-mouse-party",
    name: "Mouse Party (Addiction & Neuroscience)",
    description:
      "Explore how different drugs affect the brain's reward pathway. See how substances alter neurotransmitter activity at the synapse.",
    category: "biology",
    subcategory: "neuroscience",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://learn.genetics.utah.edu/content/addiction/mouse/",
    thumbnailEmoji: "🐭",
    tags: ["addiction", "neurotransmitter", "synapse", "brain", "drugs", "reward pathway"],
  },
  {
    id: "bio-molview-biomolecules",
    name: "MolView: Biomolecules",
    description:
      "Explore 3D structures of biological molecules including glucose, amino acids, lipids, and ATP. Understand how molecular structure determines biological function.",
    category: "biology",
    subcategory: "biochemistry",
    gradeLevel: "High School",
    source: "Other",
    embedUrl: "https://molview.org/",
    thumbnailEmoji: "🧬",
    tags: ["biomolecule", "glucose", "amino acid", "lipid", "ATP", "3D structure"],
  },
  {
    id: "bio-3dmol-proteins",
    name: "3Dmol.js: Protein Visualization (Biology)",
    description:
      "Visualize real protein structures from the Protein Data Bank. Explore enzyme active sites, antibody structures, and how protein shape determines function.",
    category: "biology",
    subcategory: "molecular biology",
    gradeLevel: "College",
    source: "Other",
    embedUrl: "https://www.3dmol.org/",
    thumbnailEmoji: "🔬",
    tags: ["protein", "PDB", "enzyme", "antibody", "active site", "structure"],
  },
  {
    id: "bio-phet-greenhouse-college",
    name: "Greenhouse Effect (College Biology)",
    description:
      "Advanced ecology and climate science. Analyze how rising greenhouse gas concentrations impact biodiversity, food webs, and ecosystem stability.",
    category: "biology",
    subcategory: "ecology",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("greenhouse-effect"),
    thumbnailEmoji: "🌿",
    tags: ["greenhouse", "climate change", "biodiversity", "ecosystem", "food web", "advanced"],
  },

  // --- More Math ---
  {
    id: "phet-graphing-quadratics-college",
    name: "Graphing Quadratics (College)",
    description:
      "Advanced quadratic analysis. Explore vertex form, standard form, and factored form. Analyze discriminant and complex roots.",
    category: "math",
    subcategory: "algebra",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("graphing-quadratics"),
    thumbnailEmoji: "📊",
    tags: ["quadratic", "vertex", "discriminant", "complex roots", "parabola", "advanced"],
  },
  {
    id: "phet-graphing-lines-elementary",
    name: "Graphing Lines (Elementary)",
    description:
      "An introductory exploration of lines on a graph. Plot points and discover how straight lines connect them.",
    category: "math",
    subcategory: "algebra",
    gradeLevel: "Elementary School",
    source: "PhET",
    embedUrl: phet("graphing-lines"),
    thumbnailEmoji: "📈",
    tags: ["graphing", "lines", "points", "coordinate", "introduction"],
  },

  // --- More Engineering ---
  {
    id: "eng-phet-collision-lab",
    name: "Impact Analysis (Engineering)",
    description:
      "Analyze collisions for engineering applications. Study crash testing, momentum transfer, and energy absorption in impacts.",
    category: "engineering",
    subcategory: "mechanical",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("collision-lab"),
    thumbnailEmoji: "💥",
    tags: ["collision", "impact", "crash test", "momentum", "energy absorption", "engineering"],
  },
  {
    id: "eng-phet-density",
    name: "Material Density (Engineering)",
    description:
      "Explore material density for engineering material selection. Compare metals, polymers, and composites for design applications.",
    category: "engineering",
    subcategory: "materials",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("density"),
    thumbnailEmoji: "🪨",
    tags: ["density", "material selection", "metals", "polymers", "composites", "engineering"],
  },

  // --- More Earth Science ---
  {
    id: "es-phet-plate-tectonics-middle",
    name: "Plate Tectonics (Middle School)",
    description:
      "A guided introduction to plate tectonics. Learn about Earth's layers and how plates move, creating mountains, volcanoes, and earthquakes.",
    category: "earth-science",
    subcategory: "geology",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("plate-tectonics"),
    thumbnailEmoji: "🌋",
    tags: ["plate tectonics", "earthquake", "volcano", "mountain", "layers", "introduction"],
  },
  {
    id: "es-phet-greenhouse-college",
    name: "Greenhouse Effect (College)",
    description:
      "Advanced climate science. Quantitatively analyze radiative forcing, feedback loops, and the role of different greenhouse gases.",
    category: "earth-science",
    subcategory: "climate",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("greenhouse-effect"),
    thumbnailEmoji: "🌡️",
    tags: ["greenhouse", "radiative forcing", "feedback", "climate model", "CO2", "advanced"],
  },

  // ==========================================================================
  //  CHEMISTRY - Cross-listed from Physics (chem2- prefix)
  // ==========================================================================
  {
    id: "chem2-forces-and-motion-basics",
    name: "Molecular Forces (Chemistry)",
    description:
      "Explore how intermolecular forces such as van der Waals attractions push and pull molecules, analogous to macroscopic push-pull mechanics.",
    category: "chemistry",
    subcategory: "bonding",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("forces-and-motion-basics"),
    thumbnailEmoji: "🔗",
    tags: ["intermolecular forces", "van der Waals", "attraction", "repulsion", "molecular"],
  },
  {
    id: "chem2-energy-forms-and-changes",
    name: "Thermochemistry: Energy Forms (Chemistry)",
    description:
      "Investigate how energy is stored, released, and converted during chemical reactions including exothermic and endothermic processes.",
    category: "chemistry",
    subcategory: "thermochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("energy-forms-and-changes"),
    thumbnailEmoji: "🔥",
    tags: ["thermochemistry", "exothermic", "endothermic", "energy transfer", "enthalpy"],
  },
  {
    id: "chem2-energy-skate-park-basics",
    name: "Molecular Energy: Potential & Kinetic (Chemistry)",
    description:
      "Visualize how molecules convert between potential and kinetic energy during collisions and bond formation.",
    category: "chemistry",
    subcategory: "thermochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("energy-skate-park-basics"),
    thumbnailEmoji: "⚡",
    tags: ["potential energy", "kinetic energy", "molecular motion", "activation energy"],
  },
  {
    id: "chem2-friction",
    name: "Surface Chemistry & Friction (Chemistry)",
    description:
      "Explore atomic-level interactions at surfaces, including adhesion, adsorption, and how surface roughness affects chemical reactivity.",
    category: "chemistry",
    subcategory: "physical properties",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("friction"),
    thumbnailEmoji: "🔬",
    tags: ["surface chemistry", "adhesion", "adsorption", "atomic interaction", "friction"],
  },
  {
    id: "chem2-wave-on-a-string",
    name: "Electromagnetic Waves & Spectroscopy (Chemistry)",
    description:
      "Understand the wave nature of electromagnetic radiation used in spectroscopy to identify chemical substances.",
    category: "chemistry",
    subcategory: "spectroscopy",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("wave-on-a-string"),
    thumbnailEmoji: "〰️",
    tags: ["electromagnetic wave", "spectroscopy", "wavelength", "frequency", "radiation"],
  },
  {
    id: "chem2-wave-interference",
    name: "Light Interference & Spectral Analysis (Chemistry)",
    description:
      "Explore how light interference patterns are used in spectral analysis and diffraction gratings to separate wavelengths.",
    category: "chemistry",
    subcategory: "spectroscopy",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("wave-interference"),
    thumbnailEmoji: "🌈",
    tags: ["interference", "diffraction grating", "spectral analysis", "wavelength separation"],
  },
  {
    id: "chem2-waves-intro",
    name: "Wave Nature of Light (Chemistry)",
    description:
      "Understand the wave properties of light that underpin absorption and emission spectroscopy in chemical analysis.",
    category: "chemistry",
    subcategory: "spectroscopy",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("waves-intro"),
    thumbnailEmoji: "🔊",
    tags: ["wave", "light", "absorption", "emission", "amplitude", "frequency"],
  },
  {
    id: "chem2-fourier-making-waves",
    name: "Spectral Decomposition (Chemistry)",
    description:
      "Learn how complex spectra are decomposed into individual frequency components, a principle behind FTIR and NMR spectroscopy.",
    category: "chemistry",
    subcategory: "spectroscopy",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("fourier-making-waves"),
    thumbnailEmoji: "🎵",
    tags: ["Fourier", "FTIR", "NMR", "spectral decomposition", "frequency components"],
  },
  {
    id: "chem2-bending-light",
    name: "Refraction & Spectrophotometry (Chemistry)",
    description:
      "Explore refraction and how it applies to prisms, spectrophotometers, and crystal analysis in chemistry.",
    category: "chemistry",
    subcategory: "spectroscopy",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("bending-light"),
    thumbnailEmoji: "🔦",
    tags: ["refraction", "prism", "spectrophotometer", "crystal", "index of refraction"],
  },
  {
    id: "chem2-color-vision",
    name: "Absorption Spectra & Color of Compounds (Chemistry)",
    description:
      "Discover why chemical compounds appear colored by exploring how they absorb specific wavelengths of visible light.",
    category: "chemistry",
    subcategory: "spectroscopy",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("color-vision"),
    thumbnailEmoji: "🌈",
    tags: ["absorption spectrum", "color", "compound", "wavelength", "visible light", "transition metal"],
  },
  {
    id: "chem2-geometric-optics",
    name: "Microscopy & Analytical Instruments (Chemistry)",
    description:
      "Understand how lenses and mirrors are used in chemical microscopy and analytical instruments such as spectrometers.",
    category: "chemistry",
    subcategory: "analytical",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("geometric-optics"),
    thumbnailEmoji: "🔍",
    tags: ["microscopy", "spectrometer", "lens", "analytical instrument", "optics"],
  },
  {
    id: "chem2-blackbody-spectrum",
    name: "Emission Spectra & Flame Tests (Chemistry)",
    description:
      "Explore how heated substances emit characteristic spectra, the basis for flame tests and emission spectroscopy.",
    category: "chemistry",
    subcategory: "spectroscopy",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("blackbody-spectrum"),
    thumbnailEmoji: "🔥",
    tags: ["emission spectrum", "flame test", "blackbody", "temperature", "element identification"],
  },
  {
    id: "chem2-pendulum-lab",
    name: "Oscillations in Molecular Dynamics (Chemistry)",
    description:
      "Explore periodic motion analogous to molecular oscillations that occur during bond stretching and bending.",
    category: "chemistry",
    subcategory: "molecular structure",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("pendulum-lab"),
    thumbnailEmoji: "🕰️",
    tags: ["oscillation", "molecular dynamics", "periodic motion", "bond vibration"],
  },
  {
    id: "chem2-masses-and-springs",
    name: "Molecular Vibrations & IR Spectroscopy (Chemistry)",
    description:
      "Model molecular vibrations as masses on springs to understand infrared spectroscopy and characteristic absorption frequencies.",
    category: "chemistry",
    subcategory: "spectroscopy",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("masses-and-springs"),
    thumbnailEmoji: "🪀",
    tags: ["IR spectroscopy", "molecular vibration", "spring constant", "absorption frequency"],
  },
  {
    id: "chem2-masses-and-springs-basics",
    name: "Bond Vibrations (Chemistry)",
    description:
      "Visualize how chemical bonds vibrate like springs, introducing concepts used in vibrational spectroscopy.",
    category: "chemistry",
    subcategory: "bonding",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("masses-and-springs-basics"),
    thumbnailEmoji: "🪀",
    tags: ["bond vibration", "spring model", "stretching", "bending", "spectroscopy"],
  },
  {
    id: "chem2-hookes-law",
    name: "Bond Stretching & Force Constants (Chemistry)",
    description:
      "Explore Hooke's law as a model for chemical bond stretching, relating force constants to bond strength.",
    category: "chemistry",
    subcategory: "bonding",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("hookes-law"),
    thumbnailEmoji: "🔗",
    tags: ["bond stretching", "force constant", "Hooke's law", "bond strength", "diatomic"],
  },
  {
    id: "chem2-normal-modes",
    name: "Vibrational Modes of Molecules (Chemistry)",
    description:
      "Explore normal vibrational modes of polyatomic molecules such as symmetric stretch, asymmetric stretch, and bending.",
    category: "chemistry",
    subcategory: "spectroscopy",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("normal-modes"),
    thumbnailEmoji: "📊",
    tags: ["normal modes", "vibrational modes", "symmetric stretch", "asymmetric stretch", "IR active"],
  },
  {
    id: "chem2-balloons-and-static-electricity",
    name: "Electrostatics & Van der Waals Forces (Chemistry)",
    description:
      "Explore static charge buildup and transfer as an analogy for electrostatic interactions and van der Waals forces between molecules.",
    category: "chemistry",
    subcategory: "bonding",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("balloons-and-static-electricity"),
    thumbnailEmoji: "🎈",
    tags: ["electrostatic", "van der Waals", "charge transfer", "attraction", "intermolecular"],
  },
  {
    id: "chem2-john-travoltage",
    name: "Static Charge Transfer (Chemistry)",
    description:
      "Visualize how electrons transfer between materials, a foundational concept for understanding redox reactions and electrochemistry.",
    category: "chemistry",
    subcategory: "electrochemistry",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("john-travoltage"),
    thumbnailEmoji: "⚡",
    tags: ["electron transfer", "static charge", "redox", "oxidation", "reduction"],
  },
  {
    id: "chem2-capacitor-lab-basics",
    name: "Electrochemical Cells & Capacitors (Chemistry)",
    description:
      "Explore how charge separation in capacitors parallels the double layer in electrochemical cells and batteries.",
    category: "chemistry",
    subcategory: "electrochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("capacitor-lab-basics"),
    thumbnailEmoji: "🔋",
    tags: ["electrochemical cell", "capacitor", "double layer", "charge separation", "battery"],
  },
  {
    id: "chem2-circuit-construction-kit-dc",
    name: "Electrolysis Circuits (Chemistry)",
    description:
      "Build circuits to understand electrolysis setups, electroplating, and how electrical energy drives non-spontaneous chemical reactions.",
    category: "chemistry",
    subcategory: "electrochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("circuit-construction-kit-dc"),
    thumbnailEmoji: "🔋",
    tags: ["electrolysis", "electroplating", "circuit", "DC", "electrochemistry"],
  },
  {
    id: "chem2-circuit-construction-kit-ac",
    name: "AC in Analytical Instruments (Chemistry)",
    description:
      "Explore alternating current circuits used in analytical chemistry instruments such as impedance spectroscopy and AC polarography.",
    category: "chemistry",
    subcategory: "analytical",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("circuit-construction-kit-ac"),
    thumbnailEmoji: "🔌",
    tags: ["AC circuit", "impedance spectroscopy", "polarography", "analytical instrument"],
  },
  {
    id: "chem2-resistance-in-a-wire",
    name: "Conductivity of Solutions (Chemistry)",
    description:
      "Explore how ionic concentration, ion mobility, and solution properties affect electrical conductivity, analogous to wire resistance.",
    category: "chemistry",
    subcategory: "solutions",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("resistance-in-a-wire"),
    thumbnailEmoji: "🔌",
    tags: ["conductivity", "ionic solution", "electrolyte", "resistance", "ion mobility"],
  },
  {
    id: "chem2-ohms-law",
    name: "Ohm's Law in Electrochemistry (Chemistry)",
    description:
      "Apply Ohm's law to electrochemical systems to understand how cell voltage, resistance, and current relate in galvanic and electrolytic cells.",
    category: "chemistry",
    subcategory: "electrochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("ohms-law"),
    thumbnailEmoji: "⚡",
    tags: ["Ohm's law", "cell voltage", "electrochemistry", "galvanic cell", "electrolytic cell"],
  },
  {
    id: "chem2-magnets-and-electromagnets",
    name: "NMR & Magnetic Properties (Chemistry)",
    description:
      "Explore magnetic fields and their role in nuclear magnetic resonance (NMR) spectroscopy and magnetic properties of materials.",
    category: "chemistry",
    subcategory: "spectroscopy",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("magnets-and-electromagnets"),
    thumbnailEmoji: "🧲",
    tags: ["NMR", "magnetic field", "diamagnetic", "paramagnetic", "spectroscopy"],
  },
  {
    id: "chem2-faradays-law",
    name: "Faraday's Laws of Electrolysis (Chemistry)",
    description:
      "Explore electromagnetic induction principles that underpin Faraday's laws of electrolysis and quantitative electrochemistry.",
    category: "chemistry",
    subcategory: "electrochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("faradays-law"),
    thumbnailEmoji: "🧲",
    tags: ["Faraday", "electrolysis", "electrochemistry", "moles of electrons", "charge"],
  },
  {
    id: "chem2-collision-lab",
    name: "Molecular Collisions & Kinetics (Chemistry)",
    description:
      "Model molecular collisions to understand reaction kinetics, collision theory, and activation energy requirements.",
    category: "chemistry",
    subcategory: "kinetics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("collision-lab"),
    thumbnailEmoji: "💥",
    tags: ["collision theory", "kinetics", "activation energy", "molecular collision", "reaction rate"],
  },
  {
    id: "chem2-vector-addition",
    name: "Dipole Moments & Vector Addition (Chemistry)",
    description:
      "Use vector addition to calculate net dipole moments of molecules from individual bond dipoles.",
    category: "chemistry",
    subcategory: "bonding",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("vector-addition"),
    thumbnailEmoji: "➡️",
    tags: ["dipole moment", "vector addition", "bond dipole", "polarity", "molecular geometry"],
  },
  {
    id: "chem2-gravity-force-lab",
    name: "Intermolecular Forces Analogy (Chemistry)",
    description:
      "Explore how force depends on distance and magnitude, analogous to intermolecular forces like London dispersion and dipole-dipole interactions.",
    category: "chemistry",
    subcategory: "bonding",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("gravity-force-lab"),
    thumbnailEmoji: "🔗",
    tags: ["intermolecular forces", "London dispersion", "dipole-dipole", "distance dependence"],
  },
  {
    id: "chem2-gravity-and-orbits",
    name: "Electron Orbitals Analogy (Chemistry)",
    description:
      "Visualize orbital motion as an analogy for electron behavior in atomic orbitals and the quantum mechanical model.",
    category: "chemistry",
    subcategory: "atomic structure",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("gravity-and-orbits"),
    thumbnailEmoji: "⚛️",
    tags: ["electron orbital", "atomic model", "quantum", "orbit analogy", "shell"],
  },
  {
    id: "chem2-density",
    name: "Density & Molar Mass Calculations (Chemistry)",
    description:
      "Relate density measurements to molar mass calculations for identifying unknown substances and verifying purity.",
    category: "chemistry",
    subcategory: "physical properties",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("density"),
    thumbnailEmoji: "🧊",
    tags: ["density", "molar mass", "identification", "purity", "physical property"],
  },
  {
    id: "chem2-buoyancy",
    name: "Density of Solutions & Buoyancy (Chemistry)",
    description:
      "Explore how dissolved solutes change solution density and how buoyancy methods are used to measure specific gravity.",
    category: "chemistry",
    subcategory: "solutions",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("buoyancy"),
    thumbnailEmoji: "🚢",
    tags: ["solution density", "specific gravity", "hydrometer", "buoyancy", "concentration"],
  },
  {
    id: "chem2-under-pressure",
    name: "Gas Pressure & Manometry (Chemistry)",
    description:
      "Explore how gas pressure is measured with manometers and how pressure relates to gas law calculations.",
    category: "chemistry",
    subcategory: "gas laws",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("under-pressure"),
    thumbnailEmoji: "🌊",
    tags: ["gas pressure", "manometer", "barometer", "atmosphere", "mmHg"],
  },
  {
    id: "chem2-fluid-pressure-and-flow",
    name: "Chromatography & Flow Chemistry (Chemistry)",
    description:
      "Understand fluid flow principles used in chromatography columns, flow chemistry reactors, and liquid handling systems.",
    category: "chemistry",
    subcategory: "analytical",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("fluid-pressure-and-flow"),
    thumbnailEmoji: "🚿",
    tags: ["chromatography", "flow chemistry", "HPLC", "column", "fluid dynamics"],
  },
  {
    id: "chem2-projectile-motion",
    name: "Mass Spectrometry Trajectories (Chemistry)",
    description:
      "Explore projectile-like ion trajectories in mass spectrometers where charged particles are deflected by electric and magnetic fields.",
    category: "chemistry",
    subcategory: "analytical",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("projectile-motion"),
    thumbnailEmoji: "🎯",
    tags: ["mass spectrometry", "ion trajectory", "deflection", "m/z ratio", "analytical"],
  },
  {
    id: "chem2-keplers-laws",
    name: "Electron Shells & Periodic Trends (Chemistry)",
    description:
      "Use orbital motion as an analogy for electron shells, understanding how shell structure drives periodic trends.",
    category: "chemistry",
    subcategory: "atomic structure",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("keplers-laws"),
    thumbnailEmoji: "🪐",
    tags: ["electron shell", "periodic trends", "orbit analogy", "energy level", "periodicity"],
  },
  {
    id: "chem2-calculus-grapher",
    name: "Reaction Rate Calculus (Chemistry)",
    description:
      "Apply derivatives and integrals to chemical kinetics, exploring how reaction rates change over time and calculating total conversion.",
    category: "chemistry",
    subcategory: "kinetics",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("calculus-grapher"),
    thumbnailEmoji: "📐",
    tags: ["reaction rate", "derivative", "integral", "kinetics", "calculus", "rate law"],
  },
  {
    id: "chem2-graphing-lines",
    name: "Beer-Lambert Law Graphing (Chemistry)",
    description:
      "Graph absorbance vs. concentration to verify Beer-Lambert law and create calibration curves for quantitative analysis.",
    category: "chemistry",
    subcategory: "analytical",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("graphing-lines"),
    thumbnailEmoji: "📈",
    tags: ["Beer-Lambert law", "calibration curve", "absorbance", "concentration", "linear graph"],
  },
  {
    id: "chem2-curve-fitting",
    name: "Experimental Data Analysis (Chemistry)",
    description:
      "Fit curves to experimental chemistry data for kinetics, equilibrium, and thermodynamics studies.",
    category: "chemistry",
    subcategory: "analytical",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("curve-fitting"),
    thumbnailEmoji: "📈",
    tags: ["curve fitting", "data analysis", "kinetics", "equilibrium", "experimental"],
  },
  {
    id: "chem2-least-squares-regression",
    name: "Calibration Curves & Regression (Chemistry)",
    description:
      "Use least-squares regression to create calibration curves for quantitative analytical chemistry methods.",
    category: "chemistry",
    subcategory: "analytical",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("least-squares-regression"),
    thumbnailEmoji: "📊",
    tags: ["calibration curve", "regression", "least squares", "analytical chemistry", "quantitative"],
  },

  {
    id: "chem2-graphing-quadratics",
    name: "Quadratic Kinetics Modeling (Chemistry)",
    description:
      "Use quadratic functions to model second-order reaction kinetics and equilibrium concentration curves.",
    category: "chemistry",
    subcategory: "kinetics",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("graphing-quadratics"),
    thumbnailEmoji: "📊",
    tags: ["second-order kinetics", "quadratic", "reaction rate", "equilibrium", "modeling"],
  },
  {
    id: "chem2-number-line-operations",
    name: "Oxidation Numbers & Number Lines (Chemistry)",
    description:
      "Use number line operations to understand changes in oxidation states during redox reactions.",
    category: "chemistry",
    subcategory: "reactions",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("number-line-operations"),
    thumbnailEmoji: "➕",
    tags: ["oxidation number", "redox", "number line", "electron transfer", "oxidation state"],
  },
  {
    id: "chem2-ratio-and-proportion",
    name: "Stoichiometric Ratios (Chemistry)",
    description:
      "Explore mole ratios and stoichiometric proportions used to calculate reactant and product amounts in chemical equations.",
    category: "chemistry",
    subcategory: "reactions",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("ratio-and-proportion"),
    thumbnailEmoji: "⚖️",
    tags: ["stoichiometry", "mole ratio", "proportion", "reactant", "product", "balanced equation"],
  },
  {
    id: "chem2-proportion-playground",
    name: "Proportional Relationships in Chemistry (Chemistry)",
    description:
      "Explore proportional relationships such as Boyle's law, Charles's law, and the direct proportionality of moles to volume.",
    category: "chemistry",
    subcategory: "gas laws",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("proportion-playground"),
    thumbnailEmoji: "📊",
    tags: ["proportion", "Boyle's law", "Charles's law", "moles", "gas laws", "direct proportion"],
  },
  {
    id: "chem2-mean-share-and-balance",
    name: "Average Atomic Mass (Chemistry)",
    description:
      "Use the concept of weighted averages and balancing to understand how average atomic mass is calculated from isotope abundances.",
    category: "chemistry",
    subcategory: "atomic structure",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("mean-share-and-balance"),
    thumbnailEmoji: "⚖️",
    tags: ["average atomic mass", "weighted average", "isotope", "abundance", "balance"],
  },

  // ==========================================================================
  //  BIOLOGY - Cross-listed from Physics/Chemistry (bio2- prefix)
  // ==========================================================================
  {
    id: "bio2-forces-and-motion-basics",
    name: "Biomechanics: Forces & Motion (Biology)",
    description:
      "Explore how forces produce movement in living organisms, from muscle contraction to locomotion on different surfaces.",
    category: "biology",
    subcategory: "biomechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("forces-and-motion-basics"),
    thumbnailEmoji: "🦴",
    tags: ["biomechanics", "force", "motion", "muscle", "locomotion"],
  },
  {
    id: "bio2-energy-forms-and-changes",
    name: "Metabolism: Energy Transformations (Biology)",
    description:
      "Explore how living cells convert chemical energy from food into thermal, mechanical, and electrical energy through metabolism.",
    category: "biology",
    subcategory: "biochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("energy-forms-and-changes"),
    thumbnailEmoji: "🔄",
    tags: ["metabolism", "ATP", "cellular respiration", "energy conversion", "mitochondria"],
  },
  {
    id: "bio2-energy-skate-park-basics",
    name: "ATP Energy Conversion (Biology)",
    description:
      "Visualize energy conversion between stored and active forms, analogous to ATP cycling between ADP and ATP in cells.",
    category: "biology",
    subcategory: "biochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("energy-skate-park-basics"),
    thumbnailEmoji: "⚡",
    tags: ["ATP", "ADP", "energy conversion", "potential energy", "kinetic energy", "cell"],
  },
  {
    id: "bio2-friction",
    name: "Joint Friction & Surface Biomechanics (Biology)",
    description:
      "Explore friction in biological joints and how synovial fluid reduces wear on cartilage surfaces.",
    category: "biology",
    subcategory: "biomechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("friction"),
    thumbnailEmoji: "🦴",
    tags: ["joint friction", "synovial fluid", "cartilage", "biomechanics", "wear"],
  },
  {
    id: "bio2-projectile-motion",
    name: "Projectile Motion in Sports Biomechanics (Biology)",
    description:
      "Analyze how organisms project objects or themselves through the air, from ball throwing to jumping and flight.",
    category: "biology",
    subcategory: "biomechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("projectile-motion"),
    thumbnailEmoji: "🏃",
    tags: ["sports biomechanics", "projectile", "jumping", "throwing", "trajectory"],
  },
  {
    id: "bio2-gravity-force-lab",
    name: "Effect of Gravity on Organisms (Biology)",
    description:
      "Explore how gravitational force affects organism structure, bone density, plant growth direction, and cardiovascular function.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("gravity-force-lab"),
    thumbnailEmoji: "🌱",
    tags: ["gravity", "gravitropism", "bone density", "plant growth", "cardiovascular"],
  },
  {
    id: "bio2-gravity-and-orbits",
    name: "Circadian Rhythms & Orbital Patterns (Biology)",
    description:
      "Understand how Earth's orbital patterns create day-night cycles and seasons that drive biological circadian rhythms.",
    category: "biology",
    subcategory: "ecology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("gravity-and-orbits"),
    thumbnailEmoji: "🌍",
    tags: ["circadian rhythm", "day-night cycle", "seasons", "biological clock", "photoperiodism"],
  },
  {
    id: "bio2-pendulum-lab",
    name: "Gait Analysis & Rhythmic Movement (Biology)",
    description:
      "Explore periodic oscillations as a model for walking gait, heartbeat rhythm, and other biological oscillations.",
    category: "biology",
    subcategory: "biomechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("pendulum-lab"),
    thumbnailEmoji: "🚶",
    tags: ["gait", "walking", "heartbeat", "rhythm", "periodic motion", "biomechanics"],
  },
  {
    id: "bio2-wave-on-a-string",
    name: "Nerve Impulse Propagation (Biology)",
    description:
      "Visualize how electrical impulses propagate along neurons as traveling waves, similar to waves on a string.",
    category: "biology",
    subcategory: "neuroscience",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("wave-on-a-string"),
    thumbnailEmoji: "🧠",
    tags: ["nerve impulse", "action potential", "propagation", "neuron", "wave", "signal"],
  },
  {
    id: "bio2-wave-interference",
    name: "Ultrasound Imaging (Biology)",
    description:
      "Explore wave interference principles used in medical ultrasound imaging for prenatal scans and diagnostic procedures.",
    category: "biology",
    subcategory: "medical technology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("wave-interference"),
    thumbnailEmoji: "🏥",
    tags: ["ultrasound", "medical imaging", "wave interference", "prenatal", "diagnostic"],
  },
  {
    id: "bio2-waves-intro",
    name: "Sound Waves & Hearing (Biology)",
    description:
      "Explore how sound waves are produced, transmitted, and detected by the auditory system in humans and animals.",
    category: "biology",
    subcategory: "human body",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("waves-intro"),
    thumbnailEmoji: "👂",
    tags: ["sound wave", "hearing", "ear", "auditory system", "frequency", "amplitude"],
  },
  {
    id: "bio2-bending-light",
    name: "Eye Lens & Vision Optics (Biology)",
    description:
      "Explore how light bends through the eye's lens system, including cornea and crystalline lens, to form images on the retina.",
    category: "biology",
    subcategory: "human body",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("bending-light"),
    thumbnailEmoji: "👁️",
    tags: ["eye", "lens", "cornea", "retina", "refraction", "vision", "accommodation"],
  },
  {
    id: "bio2-color-vision",
    name: "Color Perception & Cone Cells (Biology)",
    description:
      "Explore how three types of cone cells in the retina respond to different wavelengths to create color perception.",
    category: "biology",
    subcategory: "human body",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("color-vision"),
    thumbnailEmoji: "🌈",
    tags: ["cone cells", "color perception", "retina", "trichromatic", "wavelength", "vision"],
  },
  {
    id: "bio2-geometric-optics",
    name: "Microscopy & Eye Anatomy (Biology)",
    description:
      "Understand how lenses form images in microscopes and the human eye, including near-sightedness and far-sightedness.",
    category: "biology",
    subcategory: "human body",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("geometric-optics"),
    thumbnailEmoji: "🔬",
    tags: ["microscopy", "eye anatomy", "lens", "myopia", "hyperopia", "image formation"],
  },
  {
    id: "bio2-circuit-construction-kit-dc",
    name: "Bioelectricity & Nerve Circuits (Biology)",
    description:
      "Model bioelectrical circuits in the nervous system, understanding how neurons form circuits for signal processing.",
    category: "biology",
    subcategory: "neuroscience",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("circuit-construction-kit-dc"),
    thumbnailEmoji: "🧠",
    tags: ["bioelectricity", "nerve circuit", "neural network", "signal processing", "synapse"],
  },
  {
    id: "bio2-ohms-law",
    name: "Bioelectrical Impedance (Biology)",
    description:
      "Apply Ohm's law to understand bioelectrical impedance analysis used to measure body composition and tissue health.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("ohms-law"),
    thumbnailEmoji: "⚡",
    tags: ["bioelectrical impedance", "body composition", "tissue", "resistance", "current"],
  },
  {
    id: "bio2-resistance-in-a-wire",
    name: "Nerve Resistance & Myelination (Biology)",
    description:
      "Explore how axon diameter and myelination affect nerve impulse conduction speed, analogous to wire resistance.",
    category: "biology",
    subcategory: "neuroscience",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("resistance-in-a-wire"),
    thumbnailEmoji: "🧠",
    tags: ["myelin", "axon", "conduction speed", "nerve resistance", "diameter"],
  },
  {
    id: "bio2-capacitor-lab-basics",
    name: "Cell Membrane Capacitance (Biology)",
    description:
      "Explore how cell membranes act as capacitors, storing charge across the lipid bilayer to maintain resting potential.",
    category: "biology",
    subcategory: "cell biology",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("capacitor-lab-basics"),
    thumbnailEmoji: "🔋",
    tags: ["cell membrane", "capacitance", "lipid bilayer", "resting potential", "charge"],
  },
  {
    id: "bio2-balloons-and-static-electricity",
    name: "Membrane Potentials & Charge (Biology)",
    description:
      "Visualize how charge separation across cell membranes creates electrical potentials essential for nerve and muscle function.",
    category: "biology",
    subcategory: "cell biology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("balloons-and-static-electricity"),
    thumbnailEmoji: "🎈",
    tags: ["membrane potential", "charge separation", "ion", "nerve", "muscle", "resting potential"],
  },
  {
    id: "bio2-collision-lab",
    name: "Molecular Interactions in Cells (Biology)",
    description:
      "Model how biomolecules collide and interact inside cells, affecting enzyme-substrate binding and signal transduction.",
    category: "biology",
    subcategory: "molecular biology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("collision-lab"),
    thumbnailEmoji: "💥",
    tags: ["molecular interaction", "enzyme-substrate", "collision", "binding", "signal transduction"],
  },
  {
    id: "bio2-density",
    name: "Cell Density & Centrifugation (Biology)",
    description:
      "Explore how differences in density allow separation of cell components through centrifugation and density gradient methods.",
    category: "biology",
    subcategory: "laboratory",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("density"),
    thumbnailEmoji: "🔬",
    tags: ["cell density", "centrifugation", "density gradient", "separation", "organelle"],
  },
  {
    id: "bio2-buoyancy",
    name: "Aquatic Organism Buoyancy (Biology)",
    description:
      "Explore how fish use swim bladders and marine organisms control buoyancy to maintain their position in the water column.",
    category: "biology",
    subcategory: "ecology",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("buoyancy"),
    thumbnailEmoji: "🐟",
    tags: ["swim bladder", "buoyancy", "aquatic", "marine", "fish", "water column"],
  },
  {
    id: "bio2-under-pressure",
    name: "Blood Pressure & Circulatory System (Biology)",
    description:
      "Explore how fluid pressure concepts apply to blood pressure measurement and the circulatory system.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("under-pressure"),
    thumbnailEmoji: "❤️",
    tags: ["blood pressure", "circulatory system", "heart", "systolic", "diastolic"],
  },
  {
    id: "bio2-fluid-pressure-and-flow",
    name: "Blood Circulation & Flow (Biology)",
    description:
      "Model blood flow through arteries and veins, understanding how vessel diameter and pressure gradients drive circulation.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("fluid-pressure-and-flow"),
    thumbnailEmoji: "❤️",
    tags: ["blood flow", "artery", "vein", "circulation", "vessel diameter", "pressure gradient"],
  },
  {
    id: "bio2-gas-properties",
    name: "Lung Gas Exchange (Biology)",
    description:
      "Explore gas behavior in the lungs, including partial pressures of O2 and CO2, and how ventilation drives gas exchange.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("gas-properties"),
    thumbnailEmoji: "🫁",
    tags: ["lung", "gas exchange", "partial pressure", "O2", "CO2", "ventilation"],
  },
  {
    id: "bio2-gases-intro",
    name: "Respiration & Gas Behavior (Biology)",
    description:
      "Explore basic gas properties relevant to breathing, including how temperature and altitude affect respiratory function.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("gases-intro"),
    thumbnailEmoji: "🫁",
    tags: ["respiration", "breathing", "gas", "altitude", "temperature", "lung"],
  },
  {
    id: "bio2-diffusion",
    name: "Cellular Diffusion & Osmosis (Biology)",
    description:
      "Explore how molecules move across cell membranes by diffusion and how osmotic pressure affects cell volume.",
    category: "biology",
    subcategory: "cell biology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("diffusion"),
    thumbnailEmoji: "🫧",
    tags: ["diffusion", "osmosis", "cell membrane", "concentration gradient", "osmotic pressure"],
  },
  {
    id: "bio2-states-of-matter",
    name: "Water in Biological Systems (Biology)",
    description:
      "Explore water's unique molecular properties including hydrogen bonding, high specific heat, and solvent capabilities essential for life.",
    category: "biology",
    subcategory: "biochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("states-of-matter"),
    thumbnailEmoji: "💧",
    tags: ["water", "hydrogen bond", "specific heat", "solvent", "biological systems"],
  },
  {
    id: "bio2-concentration",
    name: "Osmosis & Cell Concentration (Biology)",
    description:
      "Explore how solute concentration differences across membranes drive osmosis, affecting cell swelling and shrinking.",
    category: "biology",
    subcategory: "cell biology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("concentration"),
    thumbnailEmoji: "🔬",
    tags: ["osmosis", "concentration", "tonicity", "hypertonic", "hypotonic", "isotonic"],
  },
  {
    id: "bio2-molarity",
    name: "Buffer Preparation in Biology (Biology)",
    description:
      "Learn how to prepare buffer solutions at precise molarities for biological experiments and cell culture media.",
    category: "biology",
    subcategory: "laboratory",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("molarity"),
    thumbnailEmoji: "🥽",
    tags: ["buffer", "molarity", "cell culture", "solution preparation", "biology lab"],
  },
  {
    id: "bio2-ph-scale",
    name: "Blood pH & Homeostasis (Biology)",
    description:
      "Explore how the body maintains blood pH within a narrow range through buffering systems and respiratory compensation.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("ph-scale"),
    thumbnailEmoji: "🧪",
    tags: ["blood pH", "homeostasis", "buffer", "bicarbonate", "respiratory", "acidosis"],
  },
  {
    id: "bio2-ph-scale-basics",
    name: "pH in Digestion (Biology)",
    description:
      "Explore how different pH levels in the stomach, small intestine, and mouth support digestion and enzyme function.",
    category: "biology",
    subcategory: "human body",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("ph-scale-basics"),
    thumbnailEmoji: "🧪",
    tags: ["pH", "digestion", "stomach acid", "enzyme", "intestine", "mouth"],
  },
  {
    id: "bio2-acid-base-solutions",
    name: "Biological Buffers (Biology)",
    description:
      "Explore how biological buffer systems such as bicarbonate and phosphate maintain stable pH in body fluids.",
    category: "biology",
    subcategory: "biochemistry",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("acid-base-solutions"),
    thumbnailEmoji: "🧪",
    tags: ["biological buffer", "bicarbonate", "phosphate", "pH regulation", "body fluid"],
  },
  {
    id: "bio2-molecule-shapes",
    name: "Biomolecular Geometry (Biology)",
    description:
      "Explore how the 3D shapes of biomolecules like enzymes and receptors determine their biological function and specificity.",
    category: "biology",
    subcategory: "molecular biology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("molecule-shapes"),
    thumbnailEmoji: "🔷",
    tags: ["biomolecule", "enzyme shape", "receptor", "specificity", "3D geometry"],
  },
  {
    id: "bio2-molecule-polarity",
    name: "Water Polarity in Biology (Biology)",
    description:
      "Understand why water is polar and how this polarity makes it the universal solvent essential for all biochemical reactions.",
    category: "biology",
    subcategory: "biochemistry",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("molecule-polarity"),
    thumbnailEmoji: "💧",
    tags: ["water polarity", "solvent", "hydrophilic", "hydrophobic", "biochemistry"],
  },
  {
    id: "bio2-build-a-molecule",
    name: "Biomolecule Construction (Biology)",
    description:
      "Build biological molecules such as glucose, amino acids, and nucleotides to understand their atomic composition.",
    category: "biology",
    subcategory: "biochemistry",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("build-a-molecule"),
    thumbnailEmoji: "🧬",
    tags: ["biomolecule", "glucose", "amino acid", "nucleotide", "atom", "construction"],
  },
  {
    id: "bio2-isotopes-and-atomic-mass",
    name: "Radioactive Tracers in Biology (Biology)",
    description:
      "Learn how radioactive isotopes are used as tracers in biological research to track metabolic pathways and molecular movement.",
    category: "biology",
    subcategory: "molecular biology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("isotopes-and-atomic-mass"),
    thumbnailEmoji: "☢️",
    tags: ["radioactive tracer", "isotope", "metabolic pathway", "labeling", "research"],
  },
  {
    id: "bio2-rutherford-scattering",
    name: "Radiation in Biology (Biology)",
    description:
      "Explore how ionizing radiation interacts with biological tissue, understanding radiation therapy and radiation safety.",
    category: "biology",
    subcategory: "medical technology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("rutherford-scattering"),
    thumbnailEmoji: "☢️",
    tags: ["radiation", "ionizing", "radiation therapy", "DNA damage", "safety"],
  },
  {
    id: "bio2-blackbody-spectrum",
    name: "Thermal Radiation & Thermoregulation (Biology)",
    description:
      "Explore how organisms emit and absorb thermal radiation, and how thermoregulation maintains body temperature.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("blackbody-spectrum"),
    thumbnailEmoji: "🌡️",
    tags: ["thermoregulation", "thermal radiation", "body temperature", "infrared", "homeostasis"],
  },
  {
    id: "bio2-greenhouse-effect",
    name: "Ecosystem Impact of Climate Change (Biology)",
    description:
      "Explore how increasing greenhouse gases disrupt ecosystems, migration patterns, and species survival.",
    category: "biology",
    subcategory: "ecology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("greenhouse-effect"),
    thumbnailEmoji: "🌿",
    tags: ["climate change", "ecosystem", "migration", "species survival", "biodiversity"],
  },
  {
    id: "bio2-plate-tectonics",
    name: "Biogeography & Plate Tectonics (Biology)",
    description:
      "Explore how continental drift and plate tectonics influenced species distribution, speciation, and biodiversity patterns.",
    category: "biology",
    subcategory: "ecology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("plate-tectonics"),
    thumbnailEmoji: "🌍",
    tags: ["biogeography", "continental drift", "speciation", "species distribution", "biodiversity"],
  },
  {
    id: "bio2-masses-and-springs",
    name: "Muscle Elasticity (Biology)",
    description:
      "Model muscle and tendon elasticity as spring systems to understand how elastic energy is stored and released during movement.",
    category: "biology",
    subcategory: "biomechanics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("masses-and-springs"),
    thumbnailEmoji: "💪",
    tags: ["muscle", "tendon", "elasticity", "spring model", "energy storage", "movement"],
  },
  {
    id: "bio2-hookes-law",
    name: "Tissue Elasticity (Biology)",
    description:
      "Explore how biological tissues like skin, blood vessels, and lungs exhibit elastic behavior described by Hooke's law.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("hookes-law"),
    thumbnailEmoji: "🔗",
    tags: ["tissue elasticity", "skin", "blood vessel", "lung compliance", "Hooke's law"],
  },
  {
    id: "bio2-normal-modes",
    name: "Protein Vibration Modes (Biology)",
    description:
      "Explore how proteins vibrate in specific normal modes that affect their function, studied using techniques like Raman spectroscopy.",
    category: "biology",
    subcategory: "molecular biology",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("normal-modes"),
    thumbnailEmoji: "📊",
    tags: ["protein vibration", "normal modes", "Raman spectroscopy", "molecular dynamics"],
  },
  {
    id: "bio2-vector-addition",
    name: "Force Vectors in Biomechanics (Biology)",
    description:
      "Analyze forces acting on joints and muscles using vector addition to understand movement and injury prevention.",
    category: "biology",
    subcategory: "biomechanics",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("vector-addition"),
    thumbnailEmoji: "➡️",
    tags: ["force vector", "joint", "muscle force", "biomechanics", "injury prevention"],
  },
  {
    id: "bio2-number-line-operations",
    name: "Population Math (Biology)",
    description:
      "Use number line operations to model population growth, decline, and net change in ecological populations.",
    category: "biology",
    subcategory: "ecology",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("number-line-operations"),
    thumbnailEmoji: "📊",
    tags: ["population", "growth", "decline", "net change", "ecology", "math"],
  },
  {
    id: "bio2-ratio-and-proportion",
    name: "Genetics Ratios (Biology)",
    description:
      "Explore Mendelian genetics ratios such as 3:1 and 9:3:3:1 to predict offspring phenotypes and genotypes.",
    category: "biology",
    subcategory: "genetics",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("ratio-and-proportion"),
    thumbnailEmoji: "🧬",
    tags: ["Mendelian ratio", "genetics", "phenotype", "genotype", "Punnett square", "3:1"],
  },
  {
    id: "bio2-proportion-playground",
    name: "Scaling in Organisms (Biology)",
    description:
      "Explore how body proportions and surface-area-to-volume ratios change with organism size, affecting metabolism and heat loss.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("proportion-playground"),
    thumbnailEmoji: "🐘",
    tags: ["scaling", "surface area", "volume", "metabolism", "body size", "allometry"],
  },
  {
    id: "bio2-calculus-grapher",
    name: "Population Growth Curves (Biology)",
    description:
      "Model exponential and logistic population growth curves using derivatives and integrals to analyze ecological dynamics.",
    category: "biology",
    subcategory: "ecology",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("calculus-grapher"),
    thumbnailEmoji: "📈",
    tags: ["population growth", "exponential", "logistic", "carrying capacity", "calculus"],
  },
  {
    id: "bio2-curve-fitting",
    name: "Dose-Response Curves (Biology)",
    description:
      "Fit dose-response curves to pharmacological and toxicological data to determine effective and lethal doses.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("curve-fitting"),
    thumbnailEmoji: "📈",
    tags: ["dose-response", "pharmacology", "EC50", "LD50", "curve fitting"],
  },
  {
    id: "bio2-graphing-lines",
    name: "Growth Rate Analysis (Biology)",
    description:
      "Graph and analyze linear growth rates in organisms, bacterial cultures, and ecological populations.",
    category: "biology",
    subcategory: "ecology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("graphing-lines"),
    thumbnailEmoji: "📈",
    tags: ["growth rate", "linear growth", "bacterial culture", "population", "graph"],
  },
  {
    id: "bio2-graphing-quadratics",
    name: "Population Dynamics (Biology)",
    description:
      "Explore non-linear population dynamics where growth rate depends on population size, modeled by quadratic relationships.",
    category: "biology",
    subcategory: "ecology",
    gradeLevel: "High School",
    source: "PhET",
    embedUrl: phet("graphing-quadratics"),
    thumbnailEmoji: "📊",
    tags: ["population dynamics", "non-linear", "quadratic", "density-dependent", "ecology"],
  },
  {
    id: "bio2-least-squares-regression",
    name: "Experimental Data Fitting (Biology)",
    description:
      "Use regression analysis to fit biological experimental data and identify trends in growth, survival, and response studies.",
    category: "biology",
    subcategory: "laboratory",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("least-squares-regression"),
    thumbnailEmoji: "📊",
    tags: ["regression", "data fitting", "experimental biology", "trend analysis", "statistics"],
  },
  {
    id: "bio2-mean-share-and-balance",
    name: "Ecological Balance & Averages (Biology)",
    description:
      "Explore how resources are shared in ecosystems and how average population sizes reflect ecological balance.",
    category: "biology",
    subcategory: "ecology",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("mean-share-and-balance"),
    thumbnailEmoji: "⚖️",
    tags: ["ecological balance", "resource sharing", "average", "population", "ecosystem"],
  },
  {
    id: "bio2-atomic-interactions",
    name: "Molecular Binding & Interactions (Biology)",
    description:
      "Explore intermolecular forces that drive enzyme-substrate binding, receptor-ligand interactions, and protein folding.",
    category: "biology",
    subcategory: "molecular biology",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("atomic-interactions"),
    thumbnailEmoji: "🔬",
    tags: ["molecular binding", "enzyme-substrate", "receptor-ligand", "protein folding", "forces"],
  },
  {
    id: "bio2-coulombs-law",
    name: "Ionic Interactions in Proteins (Biology)",
    description:
      "Explore how electrostatic forces between charged amino acids stabilize protein structure and drive molecular recognition.",
    category: "biology",
    subcategory: "molecular biology",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("coulombs-law"),
    thumbnailEmoji: "⚡",
    tags: ["ionic interaction", "amino acid", "protein structure", "salt bridge", "electrostatic"],
  },
  {
    id: "bio2-states-of-matter-basics",
    name: "Phase Changes in Living Systems (Biology)",
    description:
      "Explore how phase changes of water affect living organisms, from frost damage in plants to evaporative cooling in mammals.",
    category: "biology",
    subcategory: "physiology",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("states-of-matter-basics"),
    thumbnailEmoji: "🌡️",
    tags: ["phase change", "frost damage", "evaporative cooling", "water", "organism"],
  },
  {
    id: "bio2-beer-lambert-lab",
    name: "Spectrophotometry in Biology (Biology)",
    description:
      "Use Beer-Lambert law to measure concentrations of biological molecules such as proteins and nucleic acids.",
    category: "biology",
    subcategory: "laboratory",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("beers-law-lab"),
    thumbnailEmoji: "🔬",
    tags: ["spectrophotometry", "Beer-Lambert", "protein assay", "nucleic acid", "concentration"],
  },
  {
    id: "bio2-build-an-atom",
    name: "Atoms in Biological Elements (Biology)",
    description:
      "Build atoms of biologically important elements like carbon, nitrogen, oxygen, and phosphorus to understand their bonding properties.",
    category: "biology",
    subcategory: "biochemistry",
    gradeLevel: "Middle School",
    source: "PhET",
    embedUrl: phet("build-an-atom"),
    thumbnailEmoji: "⚛️",
    tags: ["carbon", "nitrogen", "oxygen", "phosphorus", "biological elements", "bonding"],
  },
  {
    id: "bio2-charges-and-fields",
    name: "Electrical Signals in Biology (Biology)",
    description:
      "Visualize how electric fields from ion distributions create the membrane potentials that enable nerve signaling and muscle contraction.",
    category: "biology",
    subcategory: "neuroscience",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("charges-and-fields"),
    thumbnailEmoji: "⚡",
    tags: ["electric field", "ion distribution", "membrane potential", "nerve signaling", "muscle"],
  },
  {
    id: "bio2-fourier-making-waves",
    name: "EEG & Brain Wave Analysis (Biology)",
    description:
      "Explore how complex brain waves (EEG signals) can be decomposed into frequency components to diagnose neurological conditions.",
    category: "biology",
    subcategory: "neuroscience",
    gradeLevel: "College",
    source: "PhET",
    embedUrl: phet("fourier-making-waves"),
    thumbnailEmoji: "🧠",
    tags: ["EEG", "brain waves", "Fourier", "frequency", "neurological", "alpha", "beta"],
  },
];

// ---------------------------------------------------------------------------
// Categories & Sources
// ---------------------------------------------------------------------------
export const CATEGORIES = [
  { id: "physics", name: "Physics", emoji: "⚡", urdu: "طبیعیات" },
  { id: "chemistry", name: "Chemistry", emoji: "🧪", urdu: "کیمیا" },
  { id: "biology", name: "Biology", emoji: "🧬", urdu: "حیاتیات" },
  { id: "math", name: "Mathematics", emoji: "📐", urdu: "ریاضی" },
  { id: "earth-science", name: "Earth Science", emoji: "🌍", urdu: "ارضیات" },
  { id: "engineering", name: "Engineering", emoji: "⚙️", urdu: "انجینئرنگ" },
] as const;

export const SOURCES = [
  "PhET",
  "myPhysicsLab",
  "GeoGebra",
  "Desmos",
  "oPhysics",
  "Other",
] as const;

// ---------------------------------------------------------------------------
// Helper utilities
// ---------------------------------------------------------------------------

/** Get all unique subcategories for a given category. */
export function getSubcategories(category: string): string[] {
  const subs = new Set(
    simulations.filter((s) => s.category === category).map((s) => s.subcategory)
  );
  return [...subs].sort();
}

/** Get all unique grade levels present in the data. */
export function getGradeLevels(): string[] {
  const levels = new Set(simulations.map((s) => s.gradeLevel));
  return [...levels].sort();
}

/** Simple full-text search across name, description, tags, subcategory. */
export function searchSimulations(query: string): Simulation[] {
  const q = query.toLowerCase().trim();
  if (!q) return simulations;
  return simulations.filter((s) => {
    const haystack = [
      s.name,
      s.description,
      s.subcategory,
      ...s.tags,
    ]
      .join(" ")
      .toLowerCase();
    return q.split(/\s+/).every((word) => haystack.includes(word));
  });
}

/** Filter simulations by multiple criteria at once. */
export function filterSimulations(opts: {
  category?: string;
  subcategory?: string;
  gradeLevel?: string;
  source?: string;
  query?: string;
}): Simulation[] {
  let results = simulations;

  if (opts.category) {
    results = results.filter((s) => s.category === opts.category);
  }
  if (opts.subcategory) {
    results = results.filter((s) => s.subcategory === opts.subcategory);
  }
  if (opts.gradeLevel) {
    results = results.filter((s) => s.gradeLevel === opts.gradeLevel);
  }
  if (opts.source) {
    results = results.filter((s) => s.source === opts.source);
  }
  if (opts.query) {
    const q = opts.query.toLowerCase().trim();
    results = results.filter((s) => {
      const haystack = [s.name, s.description, s.subcategory, ...s.tags]
        .join(" ")
        .toLowerCase();
      return q.split(/\s+/).every((word) => haystack.includes(word));
    });
  }

  return results;
}
