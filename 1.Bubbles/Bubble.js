
this.Bubble = function(){
  this.x = random(0, width);
  this.y = random(0, width);
  this.r = random(5,10);
  this.g = random(5,10);
  this.MIN_SPEED = 0.1
  this.MAX_SPEED = 1.5;
  this.show = function(){
    ellipse(this.x , this.y, this.r, this.r);
  }

  this.moveUp = function(){
    this.y -= this.g;

    if(random(0,1) < .5){
      //left
      this.x -= random(this.MIN_SPEED, this.MAX_SPEED);
    }
    else{
      this.x += random(this.MIN_SPEED, this.MAX_SPEED);
    }
    // this.x += random(0.1 , 5);
  }

  this.update = function(){
    this.moveUp();

  }
}
