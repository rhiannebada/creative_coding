var img;
function preload() {

  img = loadImage ("disc.jpeg");
}

function setup() {
  createCanvas(400, 400);
  background (0);
  noCursor ();
}

function draw() {
  background(0);
    x=mouseX
    y=mouseY
  noStroke ();
  image (img, 0, 0);
    var c = get (x,y);
    fill(c);
    rect (x,y,35,35);
  
  img.resize(400, 400);

  }

