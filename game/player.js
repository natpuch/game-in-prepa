function Player(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h, {
    friction: 1
  });
  World.add(world, this.body);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.timeJump = 0;
  this.v = 5;
  this.body.label = "player";
  this.jumpAllowed = true;

  this.show = function() {
    var posPlayer = this.body.position;

    push();
    noStroke();
    fill(255);
    rectMode(CENTER);
    translate(posPlayer.x, posPlayer.y);
    rotate(this.body.angle);
    rect(0, 0, this.w, this.h);
    pop();
  }

  this.move = function(time) {

    if (key == "¡" && this.v < 7) {
      this.v = this.v + 0.5;
      key = 0;
    }
    if (key == ":" && this.v > -7) {
      this.v = this.v - 0.5;
      key = 0;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      Matter.Body.setVelocity(this.body, {
        x: this.v,
        y: this.body.velocity.y
      });
    }
    if (keyIsDown(LEFT_ARROW)) {
      Matter.Body.setVelocity(this.body, {
        x: -this.v,
        y: this.body.velocity.y
      });
    }


    if (keyIsDown(UP_ARROW) && this.jumpAllowed) {

      Matter.Body.setVelocity(this.body, {
        x: this.body.velocity.x,
        y: -1200 * 0.0075
      });

      this.jumpAllowed = false;
    }

  }

}