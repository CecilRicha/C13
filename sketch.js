var ground, ground_ing
var trex ,trex_running;
var cloud_img
var dummyGround
var cac
var score = 0
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_ing = loadImage ("ground2.png")
  cloud_img = loadImage ("cloud.png")
  cac1_img = loadImage ("obstacle1.png")
  cac2_img = loadImage ("obstacle2.png")
  cac3_img = loadImage ("obstacle3.png")
  cac4_img = loadImage ("obstacle4.png")
  cac5_img = loadImage ("obstacle5.png")
  cac6_img = loadImage ("obstacle6.png")
}

function setup(){
  createCanvas(600,200)
 // var r = Math.round(random(1,10));
  //console.log (r)
  //create a trex sprite
  trex = createSprite (200,150,50,30);
  trex.addAnimation("running",trex_running)
  trex.scale = 0.75

// create a ground
  ground = createSprite (300,185,600,60);
  ground.addImage (ground_ing);
  ground.velocityX = -4
 // ground.debug = true

// create dummyGround
dummyGround = createSprite(300,190,600,10)
dummyGround.visible = false
}

function draw(){
  background("white")
if (ground.x < 0){
  ground.x = 300;
}
 console.log (frameCount)
// for jumping
if (keyDown("SPACE") && (trex.isTouching (ground))){
  trex.velocityY = -7
 
}
//  displays scores
  text ("score ="+score,50,30)
  score = frameCount 
trex.velocityY = trex.velocityY + 0.25
trex.collide (dummyGround);
createClouds ()
createCac ()
  drawSprites()
}
 function createClouds (){
 if (frameCount % 50 == 0){
  var cloud = createSprite (600,100,20,20)
  cloud.velocityX = -4
  cloud.y = Math.round(random(0,100));
  cloud.addImage (cloud_img)
  cloud.scale = 0.78
  cloud.lifetime = 150
 }
}
 function createCac () {
 if (frameCount % 50 == 0){
  var cac = createSprite (600,165,25,25)
  cac.velocityX = -4
  var r = Math.round(random(1,6));
  switch (r){
  case 1: cac.addImage (cac1_img);
  break;
  case 2: cac.addImage (cac2_img);
  break;
  case 3: cac.addImage (cac3_img);
  break;
  case 4: cac.addImage (cac4_img);
  break;
  case 5: cac.addImage (cac5_img);
  break;
  case 6: cac.addImage (cac6_img);
  break;
  }
  cac.scale = 0.5
  cac.lifetime = 150
 }
}