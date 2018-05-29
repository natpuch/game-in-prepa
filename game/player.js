function Player(x, y, w, h, playerNumber) {
  this.body = Bodies.rectangle(x, y, w, h, {
    friction: 1
  });
  World.add(world, this.body);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.v = 5;
  this.body.label = "player" + playerNumber;
  this.body.wallJump = true;
  this.jumpAllowed = true;

  this.show = function() {
    var posPlayer = this.body.position;

    push();
    noStroke();
	if (this.body.label == "player1") {
		fill(0,0,255);
	} else {
		fill(255,0,0);
	}
    rectMode(CENTER);
    translate(posPlayer.x, posPlayer.y);
    rotate(this.body.angle);
    rect(0, 0, this.w, this.h);
    pop();
  }

  this.move = function(i) {

    if (key == "¡" && this.v < 7) {
      this.v = this.v + 0.5;
      key = 0;
    }
    if (key == ":" && this.v > -7) {
      this.v = this.v - 0.5;
      key = 0;
    }

    if ((keyIsDown(RIGHT_ARROW) && i == 0) || (keyIsDown(68) && i == 1)) {
      Matter.Body.setVelocity(this.body, {
        x: this.v,
        y: this.body.velocity.y
      });
    }
    if ((keyIsDown(LEFT_ARROW) && i == 0) || (keyIsDown(81) && i == 1)) {
      Matter.Body.setVelocity(this.body, {
        x: -this.v,
        y: this.body.velocity.y
      });
    }


    if (((keyIsDown(UP_ARROW) && i == 0) || (keyIsDown(90) && i == 1)) && this.jumpAllowed) {

      Matter.Body.setVelocity(this.body, {
        x: this.body.velocity.x,
        y: -1200 * 0.0075
      });

      this.jumpAllowed = false;
    }

  }

}