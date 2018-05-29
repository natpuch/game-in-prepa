function Exit(x, y, w, h, winTime) {

  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.winTime = winTime;
  this.win = 0;
  this.time = 0;
  this.arrived = false;

  this.show = function() {

    push();
    rectMode(CENTER);
    fill(88, 41, 0);
    rect(this.x, this.y - 29, 1200 * 0.026, (1200 * 0.026) * 2.5);
    fill(255);
    rect(this.x - 10, this.y - 20, 1200 * 0.01, (1200 * 0.01));
    fill(0);
    textSize(12);
    text('EXIT', this.x - 15, this.y - 70);
    pop();

  }

  this.arrivedExit = function() {
    for (var player of players) {
      push();
	  strokeWeight(3);
	  stroke(0);
      if ((abs(player.body.position.x - this.x) < this.w / 2 && abs(player.body.position.y - this.y) < this.h / 2) || this.arrived == true) {
        textSize(32);
        fill(255, 0, 0);
        if ((millis() - timeLoad) < this.winTime || (this.time != 0 && this.win == 1)) {
          if (this.time == 0) {
            this.time = (millis() - timeLoad);
            this.win = 1;
            this.arrived = true;
          }
		  var tWidth = textWidth('YOU WIN ! ' + this.time / 1000 + 's');
          text('YOU WIN ! ' + this.time / 1000 + 's', 1200 / 2 - tWidth / 2, 900 / 2);
        } else {
		  var tWidth = textWidth('TOO LATE ! ' + this.time / 1000 + 's');
          text('TOO LATE ! ' + this.time / 1000 + 's', 1200 / 2 - tWidth / 2, 900 / 2);
          if (this.time == 0) {
            this.time = (millis() - timeLoad);
            this.arrived = true;
          }
        }
      }
    }
    pop();
  }
}