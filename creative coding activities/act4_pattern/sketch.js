function setup() {
  createCanvas(400, 400);
  background(250);
  //noLoop(); // Draw only once
}

function draw() {
  // Iterate over rows
  for (let y = 0; y < height; y += 40) {
    // Iterate over columns
    for (let x = 0; x < width; x += 40) {
      // Randomly choose between lines, circles, or squares
      let choice = floor(random(3));
      if (choice === 0) {
        drawLines(x, y); // Draw lines
      } else if (choice === 1) {
        drawCircles(x, y); // Draw circles
      } else {
        drawSquares(x, y, x, y); // Draw squares
      }
    }
  }
}

// Function to draw lines
function drawLines(x, y) {
  strokeWeight(2);
  stroke(random(200, 255), random(200, 255), random(200, 255)); // Random pastel color
  line(x, y, x + 40, y + 40); // Draw diagonal line
}

// Function to draw circles
function drawCircles(x, y) {
  strokeWeight(2);
  stroke(random(200, 255), random(200, 255), random(200, 255)); // Random pastel color
  fill(random(200, 255), random(200, 255), random(200, 255)); // Random pastel color
  ellipse(x + 20, y + 20, 30, 30); // Draw circle
}

// Function to draw squares
function drawSquares(x, y) {
  strokeWeight(2);
  stroke(random(200, 255), random(200, 255), random(200, 255)); // Random pastel color
  fill(random(200, 255), random(200, 255), random(200, 255)); // Random pastel color
  rect(x + 10, y + 10, 20, 20); // Draw square
}
