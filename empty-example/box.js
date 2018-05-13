function RectBox(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h, {
    friction: 0
  });
  World.add(world, this.body);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;




  this.show = function() {
    var pos = this.body.position;

    push();
    noStroke();
    fill(0);
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
