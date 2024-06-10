function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // wings
  fill("#8a17e3");
  noStroke();
  
  push();
  translate(30, 75);
  beginShape();
  vertex(0, 0);
  bezierVertex(14, -55, 14, -55, 110, 75);  
  endShape(CLOSE);
  pop();
  
  push();
  translate(370, 75);
  beginShape();
  vertex(0, 0);
  bezierVertex(-10, -55, -10, -55, -110, 75);  
  endShape(CLOSE);
  pop();
  
  // ears
  fill("#8a17e3");
  stroke("#8a17e3");
  
  push();
  translate(100, 190);
  ellipse(0, 0, 40, 40);
  fill("#631426");
  stroke("#631426");
  ellipse(0, 0, 30, 30);
  pop();
  
  push();
  translate(300, 190);
  ellipse(0, 0, 40, 40);
  fill("#631426");
  stroke("#631426");
  ellipse(0, 0, 30, 30);
  pop();
  
  // body
  fill("#8a17e3");
  stroke("#8a17e3");
  
  push();
  translate(200, 200);
  ellipse(0, 0, 200, 200);
  pop();
  
  // eye
  fill(255);
  
  push();
  translate(200, 170);
  ellipse(0, 0, 90, 80);
  fill(255);
  ellipse(0, 0, 20, 20);
  pop();
  
  fill(0);
  stroke(0);
  
  push();
  translate(205, 170);
  ellipse(0, 0, 60, 60);
  pop();
  
  fill(255);
  noStroke();
  
  push();
  translate(225, 160);
  ellipse(0, 0, 20, 20);
  pop();
  
  // mouth
  fill("#631426");
  stroke("#631426");
  
  push();
  translate(200, 250);
  ellipse(0, 0, 50, 10);
  pop();
}
