
this.Bubble = function(){
  this.x = random(0, width);
  this.y = random(0, width);
  this.r = random(5,10);
  this.g = random(5,10);
  this.MIN_SPEED = 0.1
  this.MAX_SPEED = 2.0;


  this.show = function(){
    ellipse(this.x , this.y, this.r, this.r);
  }

  this.update = function(){
    //if bubble out of bound then we repositioning of x and y
    if(this.y <= 0){
      this.x = random(0, width);
      this.y = random(0, width);
      this.r = random(5,10);
      this.g = random(5,10);
    }
    this.y -= this.g;
    //for random left and right to move
    if(random(0,1) < .5){
      //left
      this.x -= random(this.MIN_SPEED, this.MAX_SPEED);
    }
    else{ //right
      this.x += random(this.MIN_SPEED, this.MAX_SPEED);
    }
  }
}
