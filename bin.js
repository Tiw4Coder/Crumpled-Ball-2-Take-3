class Bin {
  constructor(x, y, width, height) {
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.image = loadImage("sprites/dustbingreen.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,100,100)
    
    
  }
};

      