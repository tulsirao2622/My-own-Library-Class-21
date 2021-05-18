var fixedrect, movingrect
var rect1,rect2,rect3,rect4
function setup() {
  createCanvas(1200, 800);
  fixedrect= createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green"
  movingrect= createSprite(600,200,50,50)
  movingrect.shapeColor="green"
  rect1=createSprite(100,200,50,50)
  rect2=createSprite(300,200,50,50)
  rect3=createSprite(500,200,50,50)
  rect4=createSprite(700,200,50,50)
}

function draw() {
  background(0); 
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
 if(isTouching(movingrect,rect2)) {
  movingrect.shapeColor= "red"
  rect2.shapeColor= "red"
 } else{
  movingrect.shapeColor= "green"
  rect2.shapeColor= "green"
} 
  
  drawSprites();
}
