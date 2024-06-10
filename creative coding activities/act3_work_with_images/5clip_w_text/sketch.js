let img;

function preload() {
  img = loadImage('hotspot.jpg');  
}

function setup() {
  createCanvas(600, 600);
  background(220);

  img.resize(500, 500);

  let maskGraphics = createGraphics(500, 500);
  maskGraphics.fill(0); 
  maskGraphics.textSize(90); 
  maskGraphics.textAlign(CENTER, CENTER);
  maskGraphics.textStyle(BOLDITALIC); 
  maskGraphics.text('CREATIVE', maskGraphics.width / 2, maskGraphics.height / 3 + 50); 
  maskGraphics.text('CODING', maskGraphics.width / 2, maskGraphics.height * 2 / 3 - 30); 
  
  img.mask(maskGraphics);

  image(img, (width - img.width) / 2, (height - img.height) / 2);
}