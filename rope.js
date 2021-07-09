class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX;
        thiss.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:offsetX, y:this.offsetY}
        }
           this.rope=Constraint.create(options);
           World.add(world,this.rope);
    }

    display(){
        
    }
}