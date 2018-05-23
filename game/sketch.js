var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;


var engine;
var world;
var boxes;
var grounds;
var walls;
var players;
var barrels;
var timeLoad;
var levelPlaying;


var levela;
var exitsObj;
var sourcesBarrels;

var menuText;
var countLevels;
var levelsText;

var levelField;



function countLvl(data) {
  countLevels = parseInt(data[0]);
}


function setup() {
  createCanvas(4 / 3 * windowHeight, windowHeight);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  function allowJump(event) {
	  
	  for (var i = 0; i < event.pairs.length; i++) {
		  bodyA = event.pairs[i].bodyA;
		  bodyB = event.pairs[i].bodyB;
		  if (bodyA.label == "player" || bodyB.label == "player")  {
			  if (bodyA.label != "player")	{
				  if (bodyA.wallJump == true)	{
					  
					  console.log(event.pairs[i].bodyA.label);
					  players[0].jumpAllowed = true;
					  console.log(event.pairs[i]);
					  console.log(i);
					  
				  }
			  }
			  
			  else if (bodyB.label != "player")	{
				  if (bodyB.wallJump == true)	{
					  
					  console.log(event.pairs[i].bodyB.label);
					  players[0].jumpAllowed = true;
					  console.log(event.pairs[i]);
					  console.log(i);
					  
				  }
			  }
		  }
	  }
  }
  
  Matter.Events.on(engine, 'collisionStart', allowJump);

  loadStrings("levels/levels.txt", countLvl);

  loadLevel(1);

  levelField = createInput();
  levelField.changed(changeLevel);
  levelField.position(0, 0);

}



 function draw() {
  scale(width / 1200, width / 1200);
  background(51);
  noStroke();

  if (keyIsDown(SHIFT)) {
    changeLevel(levelPlaying);
  }


  textSize(12);
  fill(0);
  text((millis() - timeLoad) / 1000, 1200 / 20, 900 / 20);
  text("x : " + floor(mouseX / width * 1200) + " y : " + floor(mouseY / height * 900), 1200 / 20, 900 / 15);

  for (var i = 0; i < menuText.length; i++) {
    push();
    textSize(35);
    text(menuText[i][0], menuText[i][1], menuText[i][2])
    pop();
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
  
  for (var sourceBarrels of sourcesBarrels) {
    sourceBarrels.newBarrel();
	sourceBarrels.show();
  }

  if (exitsObj != []) {
    for (var exitObj of exitsObj){
      exitObj.show();
      exitObj.arrivedExit();
    }
  }

  if (players != []) {
    for (var player of players) {
      player.move(millis());
      player.show();
      text("v = " + players[0].v, 1200 / 20, 75);
    }

  }
}
