// Safe, ES5-compatible strings with explicit \n newlines and ASCII-only punctuation
window.QuantumConcepts = [
  {
    "title": "Superposition",
    "body": "A quantum system can occupy multiple states at the same time, described by a superposition of amplitudes.\nWhen you do not look, the system evolves as a combination of all possibilities.\nOnly when measured does one outcome get selected, with probabilities set by the amplitudes.\nThis is the starting point for qubits, interference and quantum parallelism."
  },
  {
    "title": "Wave-Particle Duality",
    "body": "Light and matter behave as both waves and particles, depending on how you probe them.\nIn the double-slit experiment, single electrons produce an interference pattern over time - pure wave behavior.\nYet each detection event is a localized particle-like click.\nThe dual description is captured by quantum states and probability amplitudes."
  },
  {
    "title": "Measurement",
    "body": "Measurement converts quantum possibilities into a single, recorded outcome.\nIt disturbs the system, projecting the state onto the measured basis.\nProbabilities come from the squared amplitudes (Born rule).\nChoice of measurement matters: different bases reveal different aspects of the same state."
  },
  {
    "title": "Interference",
    "body": "Quantum amplitudes add and cancel like waves, creating bright and dark fringes in outcomes.\nPaths that are in phase reinforce each other; those out of phase suppress each other.\nWhich-path information destroys interference, linking knowledge and visibility of fringes.\nInterference underlies speedups in quantum algorithms and precision in sensors."
  },
  {
    "title": "Entanglement",
    "body": "Entangled particles share a joint state that cannot be written as separate parts.\nMeasurements on one are correlated with the other beyond classical limits (Bell violations).\nEntanglement is a resource for teleportation, superdense coding and quantum advantage.\nCreating, distributing and preserving entanglement are central engineering challenges."
  },
  {
    "title": "Decoherence",
    "body": "Interaction with the environment leaks which-state information and suppresses superpositions.\nCoherent phase relations decay over a characteristic time (T2), turning quantum behavior classical.\nGood hardware isolates qubits and uses dynamical decoupling to fight decoherence.\nError correction combats residual noise by encoding one logical qubit into many physical qubits."
  },
  {
    "title": "Qubits",
    "body": "A qubit is a two-level quantum system - any superposition of |0> and |1>.\nIts state lives on the Bloch sphere; rotations implement single-qubit gates.\nPhysical qubits come in many forms: superconducting circuits, trapped ions, photons, spins.\nMeasurement reads out in a chosen basis, collapsing the state to 0 or 1."
  },
  {
    "title": "Uncertainty Principle",
    "body": "Certain pairs of observables (like position and momentum) cannot both be sharp at once.\nThe product of their uncertainties is bounded - knowledge of one limits knowledge of the other.\nThis is not a flaw of instruments but a feature of quantum states.\nFourier relationships and non-commuting operators encode the trade-off mathematically."
  },
  {
    "title": "Quantum Tunneling",
    "body": "Particles can cross energy barriers even when they do not have enough classical energy.\nThe wavefunction has a small tail through the barrier that becomes transmission probability.\nTunnel diodes, Josephson junctions and nuclear fusion rely on tunneling.\nIn biology, tunneling can influence enzyme reactions and olfaction hypotheses."
  },
  {
    "title": "Spin",
    "body": "Spin is an intrinsic form of angular momentum carried by quantum particles.\nIt gives rise to magnetic moments and two-level systems used as qubits.\nStern-Gerlach experiments reveal spin quantization along a chosen axis.\nCoherent spin control underpins NV centers, quantum dots and ion qubits."
  },
  {
    "title": "Bell",
    "body": "Bell's theorem shows no local-hidden-variable model can explain quantum correlations.\nExperiments close detection and locality loopholes, confirming quantum predictions.\nBell inequalities bound classical statistics; violations certify entanglement.\nDevice-independent protocols leverage Bell tests for secure randomness and cryptography."
  },
  {
    "title": "Quantum Cryptography",
    "body": "Quantum key distribution (QKD) uses single photons and measurements to share secret keys.\nEavesdropping disturbs states, revealing itself through error rates.\nSecurity comes from physics rather than computational assumptions.\nNetworks combine QKD links, repeaters and classical authentication."
  },
  {
    "title": "Quantum Sensors",
    "body": "Quantum sensors exploit coherence and interference to measure tiny fields and forces.\nExamples include atomic clocks, magnetometers and gravimeters.\nSensitivity improves with entanglement and squeezed states.\nApplications span navigation, geology, medical imaging and fundamental tests."
  },
  {
    "title": "Quantum Algorithms",
    "body": "Algorithms harness superposition and interference to amplify correct answers.\nOracles and phase kickback guide amplitude toward solutions.\nNotable families include search, factoring, simulation and optimization.\nResource estimates depend on error correction and fault-tolerant costs."
  },
  {
    "title": "Quantum Computing",
    "body": "Computation with qubits uses unitary gates, measurements and entanglement.\nCircuits are sequences of reversible operations acting on tensor-product spaces.\nNoise requires error correction to scale to practical sizes.\nEarly value appears in simulation, chemistry and specialized optimization."
  },
  {
    "title": "Error Correction",
    "body": "Quantum error correction encodes a logical qubit across many physical qubits.\nSyndrome measurements detect errors without revealing the state.\nSurface codes are leading contenders due to local checks and thresholds.\nFault tolerance allows reliable computation from unreliable components."
  },
  {
    "title": "Shor",
    "body": "Shor's algorithm factors large integers by finding periods with the quantum Fourier transform.\nIt threatens RSA, motivating post-quantum cryptography.\nResource needs are high but guide long-term architectures.\nSmall demonstrations validate key subroutines on current devices."
  },
  {
    "title": "Grover",
    "body": "Grover's search finds a marked item in an unsorted database in O(\u221aN) queries.\nIt repeatedly inverts amplitudes about the mean to amplify the target.\nWhile modest, the quadratic speedup is broadly applicable.\nVariants appear in optimization, pattern matching and cryptanalysis."
  }
];
