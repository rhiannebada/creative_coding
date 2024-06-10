let mic, fft, amplitude;

function setup() {
  createCanvas(800, 600);
  noFill();

  // Create an audio input and start it
  mic = new p5.AudioIn();
  mic.start();

  // Create the FFT analyzer and set the input to the microphone
  fft = new p5.FFT();
  fft.setInput(mic);

  // Create an amplitude analyzer and set the input to the microphone
  amplitude = new p5.Amplitude();
  amplitude.setInput(mic);
}

function draw() {
  background(0);

  // Get the frequency spectrum
  let spectrum = fft.analyze();

  // Draw the frequency spectrum
  stroke(0, 255, 0);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let y = map(spectrum[i], 0, 255, height, 0);
    vertex(x, y);
  }
  endShape();

  // Get the amplitude level
  let level = amplitude.getLevel();

  // Map the amplitude level to a visual range
  let size = map(level, 0, 1, 0, 400);

  // Draw a circle in the center of the canvas based on the amplitude level
  fill(255, 0, 150, 150);
  noStroke();
  ellipse(width / 2, height / 2, size, size);
}
