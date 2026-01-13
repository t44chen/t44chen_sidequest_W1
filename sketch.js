function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(222, 184, 135);

  fill(0);
  textSize(150);
  textStyle(BOLD);
  text("JENGA", width / 2, height / 2 - 80);

  fill(0);
  noStroke();
  circle(width / 2, height / 2 + 100, 120);

  fill(255);
  textSize(40);
  textStyle(NORMAL);
  text("Start", width / 2, height / 2 + 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
