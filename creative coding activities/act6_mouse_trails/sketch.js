let trail = []; // Array to store trail positions
let trailSize = 45; // Size of the trail ellipses

function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  background(255); // Clear background each frame
  
  // Draw the trail
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let pastelColor = generatePastelColor(); // Generate random pastel color
    fill(pastelColor[0], pastelColor[1], pastelColor[2], 150);
    noStroke();
    ellipse(pos.x, pos.y, trailSize, trailSize);
  }
}

function mouseMoved() {
  // Add current mouse position to the trail
  let pos = createVector(mouseX, mouseY);
  trail.push(pos);
}

function keyPressed() {
  // Increase trail size on '+' key press
  if (key === '+' || key === '=') {
    trailSize += 2;
  }
  
  // Decrease trail size on '-' key press
  if (key === '-' || key === '_') {
    trailSize = max(2, trailSize - 2);
  }
}

function generatePastelColor() {
  // Generate random pastel color (R, G, B)
  let r = random(200, 255);
  let g = random(200, 255);
  let b = random(200, 255);
  return [r, g, b];
}
