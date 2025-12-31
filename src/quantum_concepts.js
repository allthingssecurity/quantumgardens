// Curated, safe concepts with template literals for multi-line bodies
window.QuantumConcepts = [
  {
    title: "Superposition",
    body: `A quantum system can occupy multiple states at the same time, described by a superposition of amplitudes.
When you do not look, the system evolves as a combination of all possibilities.
Only when measured does one outcome get selected, with probabilities set by the amplitudes.
This is the starting point for qubits, interference and quantum parallelism.`
  },
  {
    title: "Wave-Particle Duality",
    body: `Light and matter behave as both waves and particles, depending on how you probe them.
In the double-slit experiment, single electrons produce an interference pattern over time—pure wave behavior.
Yet each detection event is a localized particle-like click.
The dual description is captured by quantum states and probability amplitudes.`
  },
  {
    title: "Measurement",
    body: `Measurement converts quantum possibilities into a single, recorded outcome.
It disturbs the system, projecting the state onto the measured basis.
Probabilities come from the squared amplitudes (Born rule).
Choice of measurement matters: different bases reveal different aspects of the same state.`
  },
  {
    title: "Interference",
    body: `Quantum amplitudes add and cancel like waves, creating bright and dark fringes in outcomes.
Paths that are in phase reinforce each other; those out of phase suppress each other.
Which-path information destroys interference, linking knowledge and visibility of fringes.
Interference underlies speedups in quantum algorithms and precision in sensors.`
  },
  {
    title: "Entanglement",
    body: `Entangled particles share a joint state that cannot be written as separate parts.
Measurements on one are correlated with the other beyond classical limits (Bell violations).
Entanglement is a resource for teleportation, superdense coding and quantum advantage.
Creating, distributing and preserving entanglement are central engineering challenges.`
  },
  {
    title: "Decoherence",
    body: `Interaction with the environment leaks which-state information and suppresses superpositions.
Coherent phase relations decay over a characteristic time (T2), turning quantum behavior classical.
Good hardware isolates qubits and uses dynamical decoupling to fight decoherence.
Error correction combats residual noise by encoding one logical qubit into many physical qubits.`
  },
  {
    title: "Qubits",
    body: `A qubit is a two-level quantum system—any superposition of |0⟩ and |1⟩.
Its state lives on the Bloch sphere; rotations implement single-qubit gates.
Physical qubits come in many forms: superconducting circuits, trapped ions, photons, spins.
Measurement reads out in a chosen basis, collapsing the state to 0 or 1.`
  },
  {
    title: "Uncertainty Principle",
    body: `Certain pairs of observables (like position and momentum) cannot both be sharp at once.
The product of their uncertainties is bounded—knowledge of one limits knowledge of the other.
This is not a flaw of instruments but a feature of quantum states.
Fourier relationships and non-commuting operators encode the trade‑off mathematically.`
  },
  {
    title: "Quantum Tunneling",
    body: `Particles can cross energy barriers even when they do not have enough classical energy.
The wavefunction has a small tail through the barrier that becomes transmission probability.
Tunnel diodes, Josephson junctions and nuclear fusion rely on tunneling.
In biology, tunneling can influence enzyme reactions and olfaction hypotheses.`
  },
  {
    title: "Spin",
    body: `Spin is an intrinsic form of angular momentum carried by quantum particles.
It gives rise to magnetic moments and two-level systems used as qubits.
Stern–Gerlach experiments reveal spin quantization along a chosen axis.
Coherent spin control underpins NV centers, quantum dots and ion qubits.`
  },
  {
    title: "Bell",
    body: `Bell’s theorem shows no local-hidden-variable model can explain quantum correlations.
Experiments close detection and locality loopholes, confirming quantum predictions.
Bell inequalities bound classical statistics; violations certify entanglement.
Device‑independent protocols leverage Bell tests for secure randomness and cryptography.`
  },
  {
    title: "Quantum Cryptography",
    body: `Quantum key distribution (QKD) uses single photons and measurements to share secret keys.
Eavesdropping disturbs states, revealing itself through error rates.
Security comes from physics rather than computational assumptions.
Networks combine QKD links, repeaters and classical authentication.`
  },
  {
    title: "Quantum Sensors",
    body: `Quantum sensors exploit coherence and interference to measure tiny fields and forces.
Examples include atomic clocks, magnetometers and gravimeters.
Sensitivity improves with entanglement and squeezed states.
Applications span navigation, geology, medical imaging and fundamental tests.`
  },
  {
    title: "Quantum Algorithms",
    body: `Algorithms harness superposition and interference to amplify correct answers.
Oracles and phase kickback guide amplitude toward solutions.
Notable families include search, factoring, simulation and optimization.
Resource estimates depend on error correction and fault‑tolerant costs.`
  },
  {
    title: "Quantum Computing",
    body: `Computation with qubits uses unitary gates, measurements and entanglement.
Circuits are sequences of reversible operations acting on tensor-product spaces.
Noise requires error correction to scale to practical sizes.
Early value appears in simulation, chemistry and specialized optimization.`
  },
  {
    title: "Error Correction",
    body: `Quantum error correction encodes a logical qubit across many physical qubits.
Syndrome measurements detect errors without revealing the state.
Surface codes are leading contenders due to local checks and thresholds.
Fault tolerance allows reliable computation from unreliable components.`
  },
  {
    title: "Shor",
    body: `Shor’s algorithm factors large integers by finding periods with the quantum Fourier transform.
It threatens RSA, motivating post‑quantum cryptography.
Resource needs are high but guide long‑term architectures.
Small demonstrations validate key subroutines on current devices.`
  },
  {
    title: "Grover",
    body: `Grover’s search finds a marked item in an unsorted database in O(√N) queries.
It repeatedly inverts amplitudes about the mean to amplify the target.
While modest, the quadratic speedup is broadly applicable.
Variants appear in optimization, pattern matching and cryptanalysis.`
  }
];

