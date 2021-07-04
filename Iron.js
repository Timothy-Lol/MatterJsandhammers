class Iron {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.2,
          'friction':8,
          'density':5,
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.width = 70;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);     
      fill("grey");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };