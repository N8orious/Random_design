class Cacti {

  constructor() {
    this.r = 75;
    this.s = 220;
    this.x = width;
    this.y = height - this.s;
  }

  move() {
if(score < 250) {
  this.x -= 7;
}
    if(score < 310 && score > 250){
      this.x -= 10;
    }
    if(score > 310){
      this.x -= 15;
    }
    if(score > 500){
      this.x -= 18;
    }
    if(score > 650){
      this.x -= 20;
    }
    
  }

  // move2() {
  //   this.x -= 10;
  // }

  show() {
    image(tImg, this.x, this.y, this.r, this.r);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }

}