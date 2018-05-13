function Ground(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h, {isStatic: true});
  World.add(world, this.body);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;




  this.show = function() {
    pos= this.body.position;
    rectMode(CENTER);
    noStroke();
    fill(128);
    rect(pos.x, pos.y, this.w, this.h);
  }
}
