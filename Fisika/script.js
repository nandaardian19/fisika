// Kalkulasi Gaya
function calculateForce() {
    const mass = parseFloat(document.getElementById("mass").value);
    const acceleration = parseFloat(document.getElementById("acceleration").value);
    const force = mass * acceleration;
    document.getElementById("forceResult").textContent = force.toFixed(2) + " N";
  }
  
  // Kalkulasi Tekanan
  function calculatePressure() {
    const force = parseFloat(document.getElementById("force").value);
    const area = parseFloat(document.getElementById("area").value);
    const pressure = force / area;
    document.getElementById("pressureResult").textContent = pressure.toFixed(2) + " Pa";
  }
  
  // Kalkulasi Kecepatan
  function calculateVelocity() {
    const distance = parseFloat(document.getElementById("distance").value);
    const time = parseFloat(document.getElementById("time").value);
    const velocity = distance / time;
    document.getElementById("velocityResult").textContent = velocity.toFixed(2) + " m/s";
  }
// Kalkulasi Gaya Angkat (Hukum Archimedes)
function calculateBuoyantForce() {
    const density = parseFloat(document.getElementById("density").value);
    const gravity = parseFloat(document.getElementById("gravity").value);
    const volume = parseFloat(document.getElementById("volume").value);
    const buoyantForce = density * gravity * volume;
    document.getElementById("archimedesResult").textContent = buoyantForce.toFixed(2) + " N";
  }
  
  // Kalkulasi Tegangan (Hukum Ohm)
  function calculateVoltage() {
    const current = parseFloat(document.getElementById("current").value);
    const resistance = parseFloat(document.getElementById("resistance").value);
    const voltage = current * resistance;
    document.getElementById("ohmResult").textContent = voltage.toFixed(2) + " V";
  }
    