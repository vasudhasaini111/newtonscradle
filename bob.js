class Bob {
    constructor(x,y) {
        var options ={
            restitution:1,
            friction:0.3,
            density:0.8, //changing density makes bob heavier
        }//the bobs are not static so isStatic if false by default
        this.body=Bodies.circle(x,y,25,options);
        World.add(world,this.body);
    }

    display(){
        fill("yellow");
        ellipse(this.body.position.x,this.body.position.y,50,50); //giving diameter
    }
}