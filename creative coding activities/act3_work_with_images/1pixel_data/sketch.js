var img;
function preload() {

  img = loadImage ("disc.jpeg");
}

function setup() {
  createCanvas(400, 400);
  background (0);
  noCursor (); // Hide cursor from the canvas
}

function draw() {
  background(0);
    x=mouseX // current mouse coordinates
    y=mouseY
  noStroke (); //disable drawing stroke
  image (img, 0, 0);
    var c = get (x,y); // get pixel color from current mouse position
    fill(c);
    rect (x,y,35,35); // square at the mouse position
  
  img.resize(400, 400);

  }