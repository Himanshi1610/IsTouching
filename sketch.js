
var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
 fixedRect=  createSprite(400, 200, 50, 50);
 fixedRect.shapeColor = "Red";

 movingRect=  createSprite(400, 400, 100, 80);
 movingRect.shapeColor = "Red";

movingRect.velocityY = -2;

}

function draw() {
  background('black');  
  


  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
    movingRect.velocityX = -1*movingRect.velocityX;
    movingRect.velocityY = -1*movingRect.velocityY;
  }
  else{
    fixedRect.shapeColor = "Red";
    movingRect.shapeColor = "Red";
  }


  console.log(movingRect.x)
  drawSprites();
}