let img;

function preload() {
  img = loadImage('mickey.jpeg');  
}

function setup() {
  createCanvas(600, 600);
  background(220);
  
  img.resize(500, 500);
  let maskGraphics = createGraphics(500, 500);
  maskGraphics.fill(255);

  // Circles
  maskGraphics.circle(100, 150, 190); // left ear
  maskGraphics.circle(400, 150, 190); // right ear
  maskGraphics.circle(250, 300, 300); // face
  
  img.mask(maskGraphics); // apply mask tot he image

  // Position to center image
  let x = (width - img.width) / 2; 
  let y = (height - img.height) / 2;
  
  image(img, x, y);
}