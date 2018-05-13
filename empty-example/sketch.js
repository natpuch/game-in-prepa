var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;


var engine;
var box1;
var world;
var boxes;
var grounds;
var player;
var barrels;
var timeBarrel;

function setup() {
  createCanvas(1200, 900);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  boxes = [];
  barrels = [];
  /*grounds = [new Ground(width * 0.5, height * 1, width, 20, 0),
    new Ground(width * 0.5, height * 0, width, 20, 0),
    new Ground(width * 1, height * 0.5, 20, height, 0),
    new Ground(width * 0, height * 0.5, 20, height, 0),
    new Ground(width * 0.45, height * 0.8, width * 0.75, 20, PI / 16),
    new Ground(width * 0.55, height * 0.5, width * 0.75, 20, -PI / 16),
    new Ground(width * 0.45, height * 0.2, width * 0.75, 20, PI / 16),

  ];*/
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
}

/*function mousePressed() {
  barrels.push(new Barrel(mouseX, mouseY, 15));
}*/

function draw() {
  background(51);

  player.move(millis());
  player.show();

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
    text('YOU WIN !', width / 2, height / 2);
  }

}
