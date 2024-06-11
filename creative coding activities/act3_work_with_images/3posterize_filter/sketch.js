let img;

function preload() {
  img = loadImage("disc2.jpeg"); 
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  img.resize(400, 400); // Resize image
  image(img, 0, 0); 
  filter(POSTERIZE, 2); // apply posterize filter with a level of 2
}