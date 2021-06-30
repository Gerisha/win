function setup() {
  createCanvas(1500,600);
  
}

function preload(){
  robo=loadImage("robo.png");
  robot=loadImage("yay.jpg")
}
function draw() {
  background(255,255,255);  
  ro=createSprite(200,200)
  ro.addImage("xyz",robo);
  ro.scale=2
  yay=createSprite(800,250)
  yay.addImage("hsg",robot)
  drawSprites();
}