
var ship;
var sea;

function preload(){
  seaimg = loadImage("sea.png");
  shipani = loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png");
}



function setup(){
  createCanvas(400,400);
  sea = createSprite(1,210,600,100);
  ship = createSprite(85,280,50,50);
  sea.addImage("seamoving", seaimg);
  ship.addAnimation("shipmoving", shipani);

  sea.scale = 0.25;
  ship.scale = 0.2;
  sea.velocityX = -3;
}

function draw() {
  background("purple");
  if(sea.x<0){
    sea.x = sea.width/8;
  }
  
 drawSprites();
}