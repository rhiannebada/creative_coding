let song;
let fft;

function preload() {
  song = loadSound('ENHYPEN.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  song.loop();
  noStroke();
}

function draw() {
  background(0, 25);  // Light background to match pastel theme
  let spectrum = fft.analyze();

  // Visualization for bass (low frequencies)
  for (let i = 0; i < spectrum.length / 4; i++) {
    let x = map(i, 0, spectrum.length / 4, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height * 2);  // Make bass more prominent
    fill(map(i, 0, spectrum.length / 4, 0, 360), 100, 50, 150);  // Rainbow color
    rect(x, height - h, width / spectrum.length / 4, h);
  }

  // Visualization for mid (middle frequencies)
  for (let i = spectrum.length / 4; i < spectrum.length / 2; i++) {
    let x = map(i, spectrum.length / 4, spectrum.length / 2, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    fill(map(i, spectrum.length / 4, spectrum.length / 2, 0, 360), 100, 50, 150);  // Rainbow color
    ellipse(x, height / 2, width / spectrum.length / 2, h);
  }

  // Visualization for treble (high frequencies)
  for (let i = spectrum.length / 2; i < spectrum.length; i++) {
    let x = map(i, spectrum.length / 2, spectrum.length, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    fill(map(i, spectrum.length / 2, spectrum.length, 0, 360), 100, 50, 150);  // Rainbow color
    triangle(x, height, x + width / spectrum.length / 2, height - h, x - width / spectrum.length / 2, height - h);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}