function BarrelsSource(x, y, radius, time, wallJump) {

  this.x = x;
  this.y = y;
  this.r = radius;
  this.delayBarrels = time;
  this.wallJump = wallJump;
  this.timeBarrels = 0;
  this.firstBarrel = false;

  this.show = function() {
    push();
    strokeWeight(10);
    fill(40);
    rectMode(CENTER);
    translate(this.x, this.y);
    ellipse(0, 0, this.r * 2, this.r * 2);
    pop();
  }

  this.newBarrel = function() {

    if (millis() - this.timeBarrels > this.delayBarrels || this.firstBarrel == false) {
      barrels.push(new Barrel(this.x, this.y, this.r, this.wallJump));
      this.timeBarrels = millis();
      this.firstBarrel = true;
    }

  }

}