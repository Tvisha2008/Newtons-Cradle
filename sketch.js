const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload(){

}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(215, 450, 85);
	bobObject2 = new Bob(300, 450, 85);
	bobObject3 = new Bob(385, 450, 85);
	bobObject4 = new Bob(470, 450, 85);
	bobObject5 = new Bob(555, 450, 85);

	rope1 = new Rope();
	rope2 = new Rope();
	rope3 = new Rope();
	rope4 = new Rope();
	rope5 = new Rope();

	roof = new Roof(385, 150, 400, 50);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
};

function keyPressed(){
    if (keyCode=== UP_ARROW){
      Matter.Body.applyForce(ball1.body,ball1.body.position);
    }
}

