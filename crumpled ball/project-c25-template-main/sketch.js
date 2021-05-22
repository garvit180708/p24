
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var engine, world;
var stone, rubber,hammer;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	var canvas = createCanvas(1200,600);
    
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
	plane = new Plane (600,1200,20,height)
	iron = new Iron (300,350,height,width)
	stone = new Stone (700,320,100,100)
    rubber = new Rubber (900,450,70)
	hammer = new Hammer (10,100)

}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  plane.display();
 iron.display();
  stone.display();
  hammer.display();
}

