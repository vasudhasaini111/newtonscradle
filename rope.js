class Rope{
    constructor(body1,body2,xoffset){
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:xoffset,y:0}, //read comment below
           //for bob1
           pointA:{x:10,y:0}
        }
        this.rope=Constraint.create(options);
        this.xoffset=xoffset;
        //for bob1
      
        World.add(world,this.rope)
    }

    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        stroke("pink");
        //bodyA is bob
        line(pointA.x,pointA.y,pointB.x+this.xoffset,pointB.y);
      //  line(pointA.x+10,pointA.y,pointB.x+this.xoffset,pointB.y);
    }
}
/*when we create a constraint, it is created between
 the center of the 2 objects, but we do not want the 
 constraints to be created exactly from the Center of
  the roof, hence we use property pointB and shift the 
  xoffset(we want the constarint to move either left or
 right on bodyB) for bodyB...see pointB property..(it is
 just a vector that specifies the offset of the constraint
  from bodyB)*/
