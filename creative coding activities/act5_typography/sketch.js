let font;
let points;

function preload() {
  font = loadFont('Anton-Regular.ttf');
}


function setup() {
  createCanvas(800, 400);
  background(250);
  textFont(font);

  // Apply random shapes in the background
  for (let i = 0; i < 400; i++) {
    let x = random(width); // random x-coordinate
    let y = random(height); // random y-coordinate
    let shapesSize = random(5, 40); // random size for the shapes

    // Random shape (circle or square),
    let shapes = floor(random(2));

    // Random shape color
    let shapesColors = color(random(200, 255), random(200, 255), random(200, 255));
    fill(shapesColors); 
    noStroke();
    if (shapes === 0) {
      circle(y, x, shapesSize); 
    } else {
       rect(x, y, x, shapesSize); 
    }
  }

  // Calculate text width and height
  let textWidth = font.textBounds("BATH SPA UNIVERSITY", 0, 0, 90).w;
  let textHeight = 90; // fxed height based on the text size

  // Center the text horizontally and vertically
  let x = (width - textWidth) / 2;
  let y = (height + textHeight) / 2;
  fill (40);
  // Generate points along the outline of the text
  points = font.textToPoints("BATH SPA UNIVERSITY", x, y, 90, {
    sampleFactor: 0.2
  });

  // Draw the outline-based text
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    ellipse(p.x, p.y, 3, 3);
  }
}