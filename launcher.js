class launcher {
    constructor(body1,point) {
        var options = {
            length : 10,
            stiffness : 0.004,
            bodyA : body1,
            pointB : point 
        }
        this.pointB = point;
         this.SlingShot =Matter.Constraint.create(options);
         World.add(world,this.SlingShot);


    }
   fly(){
       this.SlingShot.bodyA = null  
    }

    display(){
        if(this.SlingShot.bodyA ){
    var pos1 = this.SlingShot.bodyA.position;
    var pos2 = this.pointB;
    push()
    strokeWeight(5);
    stroke("grey");
    line(pos1.x,pos1.y,pos2.x,pos2.y);
    pop()
        }
    }

 

}

