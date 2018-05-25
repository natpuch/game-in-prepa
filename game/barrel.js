function Barrel(x, y, radius, wallJump) {
  this.body = Bodies.circle(x, y, radius, {
    friction: 0.1
  });
  World.add(world, this.body);
  this.x = x;
  this.y = y;
  this.r = radius;
  this.body.wallJump = wallJump;

  this.show = function() {
    var pos = this.body.position;

    push();
    noStroke();
    fill(0);
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    ellipse(0, 0, this.r * 2, this.r * 2);
    pop();
  }
}