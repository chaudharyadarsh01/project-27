
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);
	roofSprite=createSprite(400, 100, 400, 20);
	roofSprite.shapeColor=color("blue")


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = Bodies.rectangle(400, 100, 400, 20 , {isStatic:true} );
	World.add(world, roof);

  bob1= new Bob(100,300,30);
 // bob2= new Bob()


	Engine.run(engine);

	
   
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  
  

  drawSprites();
}




