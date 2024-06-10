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
  maskGraphics.circle(100, 150, 190);
  maskGraphics.circle(400, 150, 190);
  maskGraphics.circle(250, 300, 300);
  
  img.mask(maskGraphics);

  let x = (width - img.width) / 2;
  let y = (height - img.height) / 2;
  
  image(img, x, y);
  
}