function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(245);

  noStroke();
  fill(222, 184, 135);
  rect(width / 2, height / 2, 320, 100);

  fill(101, 67, 33);
  textSize(80);
  textStyle(BOLD);
  text("JENGA", width / 2, height / 2 + 10);

  if (frameCount % 60 < 30) {
    fill(150);
    textSize(20);
    textStyle(NORMAL);
    text("- INSERT COIN -", width / 2, height / 2 + 80);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
