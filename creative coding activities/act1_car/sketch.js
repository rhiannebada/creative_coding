function setup() {
  createCanvas(400, 400);
  background(220);
  
  // Car body
  fill(255, 200, 0); // Red color
  rect(50, 200, 300, 100, 20); // Rounded rectangle
  
  // Car windows
  fill(220); // Gray color
  rect(100, 230, 50, 30, 5); // Left window
  rect(250, 220, 50, 70, 5); // Right window
  rect(175, 230, 50, 30, 5); // Right window

  
  // Car roof
  fill(0, 150, 215); // Blue color
  beginShape();
  vertex(50, 200); // Bottom left
  vertex(200, 70); // Top
  vertex(350, 200); // Bottom right
  vertex(300, 220); // Bottom right corner of right window
  vertex(100, 220); // Bottom left corner of left window
  endShape(CLOSE);
  
  // Headlights
  fill(255, 255, 150); // Yellow color
  ellipse(350, 200, 20, 20); // Right headlight
  ellipse(50, 200, 20, 20); // Left headlight
  
  // Wheels
  fill(0); // Black color
  ellipse(100, 305, 50, 50); // Left wheel
  ellipse(300, 305, 50, 50); // Right wheel
}

function draw() {
  
}
