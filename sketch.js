var tRex,tRex_running
var ground,groundImage

function preload()
{
  tRex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground.png");
  console.log("Animations loaded in the computer's memory.");
}

function setup() 
{
  createCanvas(600,200);

  tRex = createSprite(50,155,10,20);
  tRex.addAnimation("run",tRex_running);
  tRex.scale = 0.5;

  ground = createSprite(300,180,600,10);
  ground.addImage(groundImage);
  ground.x = ground.width/2;
}

function draw() 
{
  background(180);

  ground.velocityX = -3;

  if(ground.x < 0);
  {
    ground.x = ground.width/2;
  }

  if(keyDown("space"))
  {
    tRex.velocityY = -10
  }
  //Implementing gravity for the tRex
  tRex.velocityY = tRex.velocityY+0.5
  tRex.collide(ground);

  drawSprites()
}