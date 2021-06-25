var snow , snowImage;
var ball , ballImage;

function preload(){

   snowImage = loadImage("snow3.jpg");
   ballImage = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,560);
 
 snow = createSprite(400, 280);
 snow.addImage(snowImage);
 snow.scale = 0.80;

 ball1 = createSprite(40, 28);
 ball1.addImage(ballImage);
 ball1.scale = 0.40;

 snow = createSprite(400, 280);
 snow.addImage(snowImage);
 snow.scale = 0.80;
 
 snow = createSprite(400, 280);
 snow.addImage(snowImage);
 snow.scale = 0.80;
 
 snow = createSprite(400, 280);
 snow.addImage(snowImage);
 snow.scale = 0.80;
 
 
}

function draw() {
  background(0);  
  drawSprites();
}