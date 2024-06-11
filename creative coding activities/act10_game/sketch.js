let dino, myText, myOtherText, lostGame;
let score = 0;
let lastSpawn = 0;
let spawnDelay = 2000;
let obstacles = [];
let screen = null;

let marioImg, obstacleImg, backgroundImg;

function preload() {
  marioImg = loadImage('mario.png');
  obstacleImg = loadImage('obstacle.png');
  backgroundImg = loadImage('background.png'); 
}

function setup() {
  createCanvas(600, 400);
  
  dino = new DinoSquare();

  // text at the bottom of the canvas
  myText = createP("Click screen to start the game");
  myText.style("font-size", "20px");
  myText.style("color", "#B54707");
  myText.style("padding-left", "10px");
  myOtherText = createP("Click screen  or space bar to play again");
  myOtherText.style("font-size", "20px");
  myOtherText.style("color", "#B54707");
  myOtherText.style("padding-left", "10px");
  myOtherText = createP("Spacebar to jump");
  myOtherText.style("font-size", "20px");
  myOtherText.style("color", "#B54707");
  myOtherText.style("padding-left", "10px");
}

function draw() {
  image(backgroundImg, 0, 0, width, height);

  // Display the game obstacles
  if (millis() >= lastSpawn + spawnDelay) {
    obstacles.push(new Obstacles());
    spawnDelay = random([0.7, 0.8, 0.9, 1, 2]) * 1000;
    lastSpawn = millis();
  }

  for (let o of obstacles) {
    o.show();
    o.move();

    // when dino(mario) collides with the obstacles
    if (dino.collides(o)) {
      noLoop();
      lostGame = true;
      screen = 2;
    }
  }
  
  dino.show();
  dino.move();

  if (keyIsDown(UP_ARROW)) {
    dino.jump();
  }
  countScore();
  score++;

  if (lostGame) {
    showGameOver();
  }
}

function keyPressed() {
  if (key === " ") {
    dino.jump();

    // restart game when space bar is clicked
    if (lostGame === true) {
      restartGame();
    }
  }
}

// Restart game when the canvas is clicked on
function mousePressed() {
  if (screen === 2) {
    restartGame();
  }
}

const countScore = () => {
  fill(0);
  textSize(20);
  text("Points: " + score, 5, 20);
  textAlign(LEFT)
};

// Restarts the game
const restartGame = () => {
  score = 0;
  obstacles = [];
  lostGame = false;
  dino = new DinoSquare();
  lastSpawn = 0;
  spawnDelay = 500;
  new Obstacles();
  loop();
};

const showGameOver = () => {
  fill(255, 0, 0);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
};

// Create the dino for the game which is mario
class DinoSquare {
  constructor() {
    this.x = 20;
    this.rectSize = 40;
    this.baseY = height / 1.2 - this.rectSize / 2; 
    this.y = this.baseY;
    this.velocityY = 0;
    this.gravity = 2;
    this.constrainY = this.baseY;
  }

  jump() {
    if (this.y === this.baseY) {
      this.velocityY = -20;
    }
  }

  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, this.baseY);
  }

  show() {
    // Draw Mario image instead of a rectangle
    image(marioImg, this.x, this.y, this.rectSize, this.rectSize);
  }

  // Detect the collisions between Mario and the obstacles
  collides(obstacle) {
    let collide = collideRectRect(
      this.x,
      this.y,
      this.rectSize,
      this.rectSize,
      obstacle.x,
      obstacle.y,
      obstacle.obstacleSize,
      obstacle.obstacleSize
    );
    return collide;
  }
}

// Create the obstacles for the game
class Obstacles {
  constructor() {
    this.obstacleSize = 40;
    this.x = width;
    this.obstaclePos = 40;
    this.y = height / 1.2 - this.obstacleSize / 2; 
  }

  show() {
    // Draw obstacle image instead of a rectangle
    image(obstacleImg, this.x, this.y, this.obstacleSize, this.obstacleSize);
  }

  move() {
    this.x -= 11;
  }
}
