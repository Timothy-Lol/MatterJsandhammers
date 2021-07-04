//I don't know how to make the rubber/sand a circle
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20)

	//Create the Bodies Here.
    hammer = new Hammer(400,350);
	rubber = new Rubber(400,300)
	sand1 = new Sand(400,300)
	sand2 = new Sand(380,280)
	sand3 = new Sand(360,260)
	sand4 = new Sand(340,240)
	sand5 = new Sand(320,220)
	sand6 = new Sand(300,200)
	sand7 = new Sand(280,180)
	iron = new Iron(250,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  hammer.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  iron.display();

  
  
  drawSprites();
 
}



