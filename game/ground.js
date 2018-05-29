function Ground(x, y, w, h, angle, wallJump) {
  this.body = Bodies.rectangle(x, y, w, h, {
    isStatic: true
  });
  Matter.Body.rotate(this.body, angle);
  World.add(world, this.body);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.body.wallJump = wallJump;

  this.show = function() {
    var pos = this.body.position;

    push();
    noStroke();
    fill(128);
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    rect(0, 0, this.w, this.h);
	if (this.body.wallJump == true) {
		fill(0,0,255);
	} else {
		fill(255,0,0);
	}
    rect(0, 0, 10, 10);
    pop();
  }
}