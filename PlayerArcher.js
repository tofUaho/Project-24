class PlayerArcher {
  constructor(x, y, width, height) {
  var options = {
      isStatic: true
  };
  
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //this.angle = angle;
    this.image = loadImage("./assets/PlayerArcher.png");

    Matter.Body.setAngle(this.body, -PI/2);
  
    World.add(world, this.body);
  };

  display() {

    if ( keyIsDown(RIGHT_ARROW) && playerArcher.body.angle < 1.77) {
      this.angle = 0.1;
    }else{
      this.angle = -0.1;
    }

    if(keyIsDown(LEFT_ARROW) && playerArcher.body.angle > 1.47) {
      this.angle = -0.1;
    } else {
      this.angle = 0.1;
    }

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  };
};    