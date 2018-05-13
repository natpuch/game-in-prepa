function Player(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h, {friction: 0});
  World.add(world, this.body);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;




  this.show = function() {

    var posPlayer = this.body.position;
    console.log(posPlayer);
    push();
    noStroke();
    fill(255);
    rectMode(CENTER);
    translate(posPlayer.x,posPlayer.y);
    rotate(this.body.angle);
    rect(0, 0, this.w, this.h);
    pop();
  }

  this.move = function() {
    var posPlayer = this.body.position;

    if (keyIsDown(RIGHT_ARROW)) {
      posPlayer.x += 0.1;
    }
    if (keyIsDown(LEFT_ARROW)) {
      posPlayer.x -= 0.1;
    }
    if (keyIsDown(UP_ARROW)) {
      posPlayer.y -= 1
    }
  }

}
