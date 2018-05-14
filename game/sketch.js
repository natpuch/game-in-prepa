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
var timeBarrels;
var time;
var timeLoad;
var levelPlaying;


var levela;
var exitArray;
var sourcesBarrels;


function setup() {
  createCanvas(4/3 * windowHeight, windowHeight);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  loadLevel(1);

}

function mousePressed() {
  changeLevel(levelPlaying);
}

function draw() {
  scale(width / 1200, width / 1200);

  background(51);
  noStroke();
  text('EXIT', (eval(exitArray[0])+eval(exitArray[1])) / 2 - 15, (eval(exitArray[2])+eval(exitArray[3])) / 2 - 50);
  rectMode(CENTER);
  fill(88, 41, 0);
  rect((eval(exitArray[0])+eval(exitArray[1]))/2, (eval(exitArray[2])+eval(exitArray[3])) / 2, 1200 * 0.03, (1200 * 0.03) * 2.5);
  fill(255);
  rect((eval(exitArray[0])+eval(exitArray[1]))/2 * 0.99, (eval(exitArray[2])+eval(exitArray[3])) / 2, 1200 * 0.01, (1200 * 0.01));
  player.move(millis());
  player.show();

  text((millis() - timeLoad) / 1000, 1200 / 20, 900 / 20);



  for (var i = 0; i < sourcesBarrels.length; i++) {
    sourceBarrels = sourcesBarrels[i];
    if (millis() - timeBarrels[i] > sourceBarrels[3]) {
      barrels.push(new Barrel(sourceBarrels[0], sourceBarrels[1], sourceBarrels[2]));
      timeBarrels[i] = millis();
    }
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

  if (player.body.position.x < eval(exitArray[0]) && player.body.position.x > eval(exitArray[1]) && player.body.position.y < eval(exitArray[2]) && player.body.position.y > eval(exitArray[3])) {
    textSize(32);
    fill(0, 70, 128);
    if ((millis() - timeLoad) < eval(exitArray[4]) || time != 0) {
      if (time == 0) {
        time = (millis() - timeLoad);
      }
      text('YOU WIN !' + time / 1000 + 's', 1200 / 2, 900 / 2);
    } else {
      text('TOO LATE !', 1200 / 2, 900 / 2);
    }
  }

}
