var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var packageBody_options ={
		isStatic: false
    }
	packageBody = Bodies.circle(width/2 , 200 , 5,packageBody_options);
	World.add(world, packageBody);
	

	var ground_options ={
        isStatic: true
    }
	ground = Bodies.rectangle(width/2, 650, width, 10 ,ground_options);
 	World.add(world, ground);

	 var box3_options ={
        isStatic: true
	}
	box3 = Bodies.rectangle(380, 650, 190, 15 ,box3_options);
	 World.add(world, box3);
	 
	 
	 box1 = new Box(292,624,12,50);
	 box2 = new Box(468,624,12,50);
	 box3 = new Box(380,653,190,15);
}


function draw() {
  
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rectMode(CENTER);

  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Engine.run(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  }
}



