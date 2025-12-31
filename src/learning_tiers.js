/* Tiering rules for Quantum Gardens concepts. */
(function(){
  // Preferred titles per tier; matched case-insensitively
  var BASIC_TITLES = [
    'Superposition',
    'Wave-Particle Duality',
    'Measurement',
    'Interference',
    'Qubits',
    'Uncertainty Principle',
    'Quantum Tunneling'
  ];
  var INTERMEDIATE_TITLES = [
    'Entanglement',
    'Decoherence',
    'Spin',
    'Bell',
    'Quantum Cryptography',
    'Quantum Sensors',
    'Quantum Algorithms'
  ];
  var ADVANCED_TITLES = [
    'Quantum Computing',
    'Error Correction',
    'Shor',
    'Grover',
  ];

  function norm(s){ return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); }

  function buildTiered(concepts){
    var pools = {basics:[], intermediate:[], advanced:[], remaining:[]};
    var taken = new Set();
    var titleMap = new Map();
    (concepts||[]).forEach(function(e){ titleMap.set(norm(e.title||e), e); });
    function pickInto(list, tier){
      list.forEach(function(t){
        var k = norm(t);
        var e = titleMap.get(k);
        if (e && !taken.has(k)) { pools[tier].push(e); taken.add(k); }
      });
    }
    pickInto(BASIC_TITLES, 'basics');
    pickInto(INTERMEDIATE_TITLES, 'intermediate');
    pickInto(ADVANCED_TITLES, 'advanced');
    // Fallback classification by keyword if not caught above
    (concepts||[]).forEach(function(e){
      var k = norm(e.title||e);
      if (taken.has(k)) return;
      var lw = k;
      if (/superpos|wave|measure|interfer|qubit|uncertain|tunnel/.test(lw)) pools.basics.push(e);
      else if (/entangle|decoher|spin|bell|sensor|crypto|algorithm/.test(lw)) pools.intermediate.push(e);
      else if (/comput|error|shor|grover/.test(lw)) pools.advanced.push(e);
      else pools.remaining.push(e);
      taken.add(k);
    });
    return pools;
  }

  window.QuantumTiering = {
    build: buildTiered,
    names: ['Basics','Intermediate','Advanced']
  };
})();

