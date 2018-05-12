var bat;
var ball;

function setup() {
  createCanvas(1900,1000);
  
  bat = createSprite(20, 200,10,100);
  bat.setCollider("rectangle",0,0,10,100);
  bat.mass = 5;
  

  ball = createSprite(100, 100,10,10);
  ball.mass = 1;
  ball.setVelocity(3,0);
}

function draw() {
  background(0,0,0);
  

  bat.position.x = mouseX;
  bat.position.y = mouseY;
  

	
bat.debug = mouseIsPressed;
  
  ball.bounce(bat);
  
  drawSprites();
}