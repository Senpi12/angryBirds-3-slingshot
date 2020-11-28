class slingshot{
    constructor(bodyA , pointB){
var options = {
    bodyA:bodyA,
    pointB:pointB,
    length:10, stiffness:0.05
}
this.chain= Constraint. create(options)
World.add(world,this.chain)
this.pointB=pointB
    }
    display(){
    
        if(this.chain.bodyA){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
        
    }
 }
    fly(){
        this.chain.bodyA = null
    }
}