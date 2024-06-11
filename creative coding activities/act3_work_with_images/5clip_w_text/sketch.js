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

  // Text properties
  maskGraphics.textSize(90); // text size
  maskGraphics.textAlign(CENTER, CENTER); // center align
  maskGraphics.textStyle(BOLDITALIC); // bold italic text style

  // Draw text
  maskGraphics.text('CREATIVE', maskGraphics.width / 2, maskGraphics.height / 3 + 50); 
  maskGraphics.text('CODING', maskGraphics.width / 2, maskGraphics.height * 2 / 3 - 30); 
  
  // Apply mask to image
  img.mask(maskGraphics);

  // Draw masked image at the center
  image(img, (width - img.width) / 2, (height - img.height) / 2);
}