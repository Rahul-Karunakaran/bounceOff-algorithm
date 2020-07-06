var fixedRect, movingRect,leftObject,rightObject;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  leftObject = createSprite(100,350,50,80);
  leftObject.shapeColor = "red"
  rightObject = createSprite(1000,350,50,80);
  rightObject.shapeColor ="red"

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  leftObject.velocityX = +5;
  rightObject.velocityX = -5;
}

function draw() {
  background(0,0,0);  

if(bounceOff(leftObject,rightObject)){
leftObject.shapeColor = "yellow";
rightObject.shapeColor ="blue";
}

  drawSprites();
}

