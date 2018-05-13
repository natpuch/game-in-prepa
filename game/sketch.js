var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;


var engine;
var world;
var boxes;
var grounds;
var player;
var barrels;
var timeBarrel;
var time;

function setup() {
  createCanvas(1200, 900);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  boxes = [];
  barrels = [];

  walls = [new Ground(width * 0.5, height * 1, width, 20, 0),
    new Ground(width * 0.5, height * 0, width, 20, 0),
    new Ground(width * 1, height * 0.5, 20, height, 0),
    new Ground(width * 0, height * 0.5, 20, height, 0),
  ];
  grounds = [new Ground(width * 0.2, height * 0.85, width * 0.1, 20, PI / 8),
    new Ground(width * 0.48, height * 0.75, width * 0.1, 20, -PI / 8),
    new Ground(width * 0.8, height * 0.75, width * 0.1, 20, PI / 8),
    new Ground(width * 0.9, height * 0.6, width * 0.1, 20, -PI / 8),
    new Ground(width * 0.5, height * 0.4, width * 0.5, 20, PI / 8),
    new Ground(width * 0.5, height * 0.2, width * 0.2, 20, -PI / 8),
    new Ground(width * 0.9, height * 0.2, width * 0.1, 20, 0),
  ];
  player = new Player(width * 0.1, height * 0.9, 20, 20);
  timeBarrel = 0;
  time = 0;

}

/*function mousePressed() {
  barrels.push(new Barrel(mouseX, mouseY, 15));
}*/

function draw() {
  background(51);
  noStroke();
  text('EXIT', width * 0.887, height * 0.09);
  rectMode(CENTER);
  fill(88,41,0);
  rect(width * 0.9, height * 0.15, width * 0.03, (width * 0.03)*2.5)
  fill(255);
  rect(width * 0.89, height * 0.15, width * 0.01, (width * 0.01))
  player.move(millis());
  player.show();

  text(millis()/1000, width / 20, height / 20);

  if (millis() - timeBarrel > 1000) {
    barrels.push(new Barrel(width * 0.5, height * 0.1, 15));
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

  if (player.body.position.x < width * 0.95 && player.body.position.x > width * 0.85 && player.body.position.y < height * 0.2 && player.body.position.y > height * 0.1) {
    textSize(32);
    fill(0,70,128);
    if (millis() < 12*1000 || time != 0){
      if (time == 0) {
        time = millis();
      }
      text('YOU WIN !' + time / 1000 + 's', width / 2, height / 2);
    }
    else {
      text('TOO LATE !', width / 2, height / 2);
    }
  }

}
