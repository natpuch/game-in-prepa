var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var box1;
var world;
var boxes;
var ground;
var player;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  boxes = [];
  ground = new Ground(width/2, 400, width, 20);
  player = new Player(750, 200, 50, 50);
}

function mousePressed() {
  boxes.push(new RectBox(mouseX, mouseY, 10, 10));
}

function draw() {
  background(51);

  player.move();
  player.show();

  for (var rectBox of boxes) {
    rectBox.show();
  }

  //console.log(player.body.position);

  ground.show();

}
