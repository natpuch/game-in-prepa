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

    if (keyIsDown(RIGHT_ARROW)) {
      Matter.Body.setVelocity(this.body, {
        x: 5,
        y: this.body.velocity.y
      });
    }
    if (keyIsDown(LEFT_ARROW)) {
      Matter.Body.setVelocity(this.body, {
        x: -5,
        y: this.body.velocity.y
      });
    }
    if (keyIsDown(UP_ARROW) && (time - this.timeJump > 950)) {
      Matter.Body.setVelocity(this.body, {
        x: this.body.velocity.x,
        y: -9
      });
      this.timeJump = time;
    }
  }

}
