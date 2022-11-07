var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, choque;
var ground, invisibleGround, groundImage;

var cloudsGroup;
var cloudImage;
var obstaclesGroup;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;

var gameOver, restart;

function preload(){

  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  choque = loadAnimation("choque.png");

  groundImage=loadImage("ground2.png");
  cloudImage=loadImage("cloud.png");

  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");

  gameOverImage=loadImage("gameOver.png");
  restartImage=loadImage("restart.png");
}
function setup() {
  createCanvas(600,200);

  trex=createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;

  ground=createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x=ground.width/2;
  //ground.velocityX=-3;

  invisibleGround=createSprite(200,190,400,20);
  invisibleGround.visible=false;

  gameOver=createSprite(width/2,height/3);
  gameOver.addImage(gameOverImage);
  gameOver.scale=0.7;

  restart=createSprite(width/2,height/2);
  restart.addImage(restartImage);
  restart.scale=0.7;


  gameOver.visible=false;
  restart.visible=false;

  cloudsGroup = new Group();
  obstaclesGroup = new Group();
}

function draw() {
background(150);
text("Score " + score,500,50);

if(gameState===PLAY){
  score=score + Math.round(getFrameRate()/50);

  ground.velocityX=-3;
  if(ground.x<0)
    ground.x=ground.width/2;

    trex.collide(invisibleGround);
  if(keyDown("space") && trex.y<=160)  
    trex.velocityY=-10;

    trex.velocityY=trex.velocityY+0.8;
 
    spawnClouds();
    spawnObstacles();
  }
    if(obstaclesGroup.isTouching(trex)){
      gameState=END;
    }else if(gameState===END){
      gameOver.visible=true;
      restart.visible=true;

      ground.velocityX=0;
      trex.velocityX=0;
    
      obstaclesGroup.setVelocityXEach(0);
      cloudsGroup.setVelocityXEach(0);


      trex.changeAnimation("collided",choque);

      obstaclesGroup.setLifetimeEach(-1);
      cloudsGroup.setLifetimeEach(-1);

      if(mousePressedOver(restart)){
        reset ();
      }
    }
    drawSprites();
}

function spawnClouds(){
  if(frameCount%100==0){
    var cloud = createSprite(600,120,40,10);
    cloud.y=Math.round(random(10,140));
    cloud.addImage("clouds",cloudImage);
    cloud.scale=0.5;
    cloud.velocityX=-2;

    cloud.lifetime=310;

    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;
  }
}
  function spawnObstacles(){
    if (frameCount % 80 === 0){
    var obstacle= createSprite(600,165,10,40);
    
    obstacle.velocityX=-6;

    var ran=Math.round(random(1,6));
    switch(ran){
      case 1: obstacle.addImage(obstacle1);
      break;
      case 2: obstacle.addImage(obstacle2);
      break;
      case 3: obstacle.addImage(obstacle3);
      break;
      case 4: obstacle.addImage(obstacle4);
      break;
      case 5: obstacle.addImage(obstacle5);
      break;
      case 6: obstacle.addImage(obstacle6);
      break;
      default: break;
    }
    obstacle.scale=.5;
    obstacle.lifetime=310;

    obstaclesGroup.add(obstacle);
  }
}
function reset(){
  gameState = PLAY;
  trex.visible=true;
  gameOver.visible=false;
  restart.visible=false;

  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();

  trex.changeAnimation("running",trex_running);
  score=0;

}
