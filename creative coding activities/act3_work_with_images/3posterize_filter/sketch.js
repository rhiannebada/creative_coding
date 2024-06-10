let img;

function preload() {
  img = loadImage("disc2.jpeg"); 
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  img.resize(400, 400);
  image(img, 0, 0); 
  filter(POSTERIZE, 2); 
}