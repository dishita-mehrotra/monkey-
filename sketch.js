
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground , invisibleGround
var banana , bananagroup 
var obs, obsi , obsgroup
var groundimage


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
 obsi = loadImage("obstacle.png");
      groundimage = loadImage ("WhatsApp Image 2021-02-07 at 13.07.16.jpeg");
 
  
}



function setup() {
   createCanvas(600,400)
 
  ground = createSprite(200,200,400,400)
  ground.addImage("ground",groundimage)
   ground.velocityX= -2 
  ground.scale=1.5
  
   monkey= createSprite(80,355,20,20)
  monkey.addAnimation( "monkey", monkey_running);
  monkey.scale= 0.5 
  
  invisibleGround = createSprite(300,390,900,30);
  invisibleGround.visible = false;
  invisibleGround.debug = true;
  bananaGroup=new Group()
  obsgroup= new Group()
  
}


function draw() {
  background("white")
  
 
 

  if (ground.x<100 ){
    ground.x=ground.width/2
    
  }
  console.log (monkey.y)

 
 
if(keyDown("space")&& monkey.y >= 340) {
        monkey.velocityY = -5;
        }
    monkey.velocityY= monkey.velocityY+0.6
  
  if (bananaGroup.isTouching(monkey)){
    score=score+2
    bananaGroup.destroyEach()
    
  }
 if (monkey.isTouching ( obsgroup)){
   
   monkey.scale=0.1
 }
  
  switch (score){
     case 4 : monkey.scale = 0.12
     break;
      case 20 : monkey.scale = 0.14 
      break;
       case 30 : monkey.scale = 0.16
       break;
       case 40 : monkey.scale = 0.18
       break;
     
     default:break;
 }
  
  
  
  
  
  
  obs();
 banana() 
 monkey.collide(invisibleGround);
 drawSprites();
   text ("score:"+ score,300,20)
}

function banana(){
 if (frameCount % 80=== 0) {
   var banana = createSprite(600,120,40,10);
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
    banana.scale = 0.1 ;
    banana.velocityX = -3;

     
  banana.lifetime = 200;
    bananaGroup.add(banana);

 }

}

function obs(){
 if (frameCount % 300=== 0) {
   var obs = createSprite(600,350,40,10);
   
   obs.addImage(obsi);
    obs.scale = 0.1 ;
    obs.velocityX = -3;

     
  obs.lifetime = 200;
    obsgroup.add(obs);

 }

}