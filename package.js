class Package {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
        
      }
      this.body = Bodies.rectangle(10, 10, 10, 10, options);
      this.width = 10;
      this.height = 10;
      this.addImage(packageIMG);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("brown")
      fill(255);
      rect(0, 0, this.width, this.height);
    }
  };
  