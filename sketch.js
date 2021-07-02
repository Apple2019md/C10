var sea;
var seaImg;
var ship, ship_rocking;
function preload(){
  ship_rocking = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,100);
  sea.addImage("sea",seaImg);
  sea.scale=0.4;
  sea.velocityX=+2;
  ship=createSprite(100,150,50,50);
  ship.addAnimation("rocking",ship_rocking);
  ship.scale=0.15;
}

function draw() {
  background("blue");
  console.log(sea.x);
  if(sea.x>750){
    sea.x=width/2;
  }
  
  drawSprites();
  

}