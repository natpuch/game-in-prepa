function Exit(x, y, w, h, winTime ) {

  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.winTime = winTime;
  this.win = 0;

  this.show = function() {

    push();
    rectMode(CENTER);
    fill(88, 41, 0);
    rect(this.x, this.y - 29, 1200 * 0.026, (1200 * 0.026) * 2.5);
    fill(255);
    rect(this.x - 10, this.y - 20, 1200 * 0.01, (1200 * 0.01));
    fill(0);
    text('EXIT', this.x - 15, this.y - 70);
    pop();

  }

  this.arrivedExit = function() {	
    if (abs(player.body.position.x - this.x) < this.w / 2 && abs(player.body.position.y - this.y) < this.h / 2 ) {
      textSize(32);
      fill(255, 0, 0);
      if ((millis() - timeLoad) < this.winTime || (time != 0 && this.win == 1)) {
        if (time == 0) {
          time = (millis() - timeLoad);
          this.win = 1;
        }
        text('YOU WIN ! ' + time / 1000 + 's', 1200 / 2, 900 / 2);
      } else {
        text('TOO LATE ! ' + time / 1000 + 's', 1200 / 2, 900 / 2);
        if (time == 0) {
          time = (millis() - timeLoad);
        }
      }
    }
  }
}
