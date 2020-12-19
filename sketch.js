function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400, 200, 50, 50); 
fixedRect= createSprite(200, 200, 50, 50)
fixedRect.velocityX=2
movingRect.velocityX=-2
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingRect.shapeColor= "red"
  fixedRect.shapeColor="black"

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
     fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
     movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
     fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2)
{ movingRect.velocityX=-movingRect.velocityX  
  fixedRect.velocityX=-fixedRect.velocityX
}
  

}









