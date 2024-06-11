var img, x, y;
function preload() {
img = loadImage("blossoms.jpeg");
}

function setup() {
createCanvas (600, 400);
background(0);
noStroke();
}

function draw() {
x = random(width);
y = random(height);
var c = img.get(x, y); // get pixel color at the random position from the image
fill(c[0], c[1], c[2], 100); //increase transparency
ellipse (x, y, 12, 25); // draw ellipse st the rsndom podition
img.resize(600, 400);
}