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
        x: 4,
        y: this.body.velocity.y
      });
    }
    if (keyIsDown(LEFT_ARROW)) {
      Matter.Body.setVelocity(this.body, {
        x: -4,
        y: this.body.velocity.y
      });
    }
    if (keyIsDown(UP_ARROW) && (time - this.timeJump > 966 || (abs(this.body.velocity.y) < 0.2 && (time - this.timeJump > 500)) )) {
      if (abs(this.body.velocity.y) < 0.2) {
        console.log(this.body.velocity.y);
        console.log(time - this.timeJump);
      }


      Matter.Body.setVelocity(this.body, {
        x: this.body.velocity.x,
        y: -1200 * 0.0075
      });

      this.timeJump = time;
    }
  }

}
