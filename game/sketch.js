var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;


var engine;
var world;
var boxes;
var grounds;
var walls;
var player;
var barrels;
var timeBarrel;
var time;


var levela;
var aaa;


function setup() {
  createCanvas(4/3 * windowHeight, windowHeight);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  loadLevel();

}


function draw() {
  scale(width / 1200, width / 1200);

  background(51);
  noStroke();
  text('EXIT', 1200 * 0.887, 900 * 0.09);
  rectMode(CENTER);
  fill(88, 41, 0);
  rect(1200 * 0.9, 900 * 0.15, 1200 * 0.03, (1200 * 0.03) * 2.5)
  fill(255);
  rect(1200 * 0.89, 900 * 0.15, 1200 * 0.01, (1200 * 0.01))
  player.move(millis());
  player.show();

  text(millis() / 1000, 1200 / 20, 900 / 20);

  if (millis() - timeBarrel > 1000) {
    barrels.push(new Barrel(1200 * 0.5, 900 * 0.1, 1200 / 80));
    timeBarrel = millis();
  }

  for (var rectBox of boxes) {
    rectBox.show();
  }

  for (var ground of grounds) {
    ground.show();
  }

  for (var wall of walls) {
    wall.show();
  }

  for (var barrel of barrels) {
    barrel.show();
  }

  if (player.body.position.x < 1200 * 0.95 && player.body.position.x > 1200 * 0.85 && player.body.position.y < 900 * 0.2 && player.body.position.y > 900 * 0.1) {
    textSize(32);
    fill(0, 70, 128);
    if (millis() < 12 * 1000 || time != 0) {
      if (time == 0) {
        time = millis();
      }
      text('YOU WIN !' + time / 1000 + 's', 1200 / 2, 900 / 2);
    } else {
      text('TOO LATE !', 1200 / 2, 900 / 2);
    }
  }

}
