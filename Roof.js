class Roof
{
	constructor()
	{
		var options={
			isStatic:true			
			}
	//	this.x=x;
	//	this.y=y;
	//	this.w=w
	//	this.h=h
		this.body=Bodies.rectangle(400,100,300,10 , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		
            rect(groundPos.x,groundPos.y,300,10);
		/*	push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			*/
	}

}