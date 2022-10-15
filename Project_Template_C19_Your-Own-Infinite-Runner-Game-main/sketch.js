var eagleImg, eagle;
var squirrelImg, squirrel;
var cloudImg,cloud;
var gameState = "play"
var available = "false"
var score = 0;
var counter = 0;

function preload(){
eagleImg = loadImage("eagleanimation.png")
squirrelImg = loadImage("squirrelanimation.png")
cloudImg = loadImage("cloudanimation.png")
}

function setup() {
 createCanvas(600,600)
eagle = createSprite(200,200,10,10);
eagle.addImage(eagleImg);
eagle.scale = 0.25;

}

function draw() {
 background("SkyBlue");
 textSize(20);
 


 if(gameState == "play"){
    if(keyDown("space")){
        eagle.velocityY = -10;
         }
         if(keyDown(LEFT_ARROW)){
        eagle.x -= 5;
         }
         if(keyDown(RIGHT_ARROW)){
        eagle.x += 5;
         }
         eagle.velocityY = eagle.velocityY + 0.5;
         if(available == "false"){
squirrelspawn();
available = "true";


         }
         setTimeout(destroySquirrel,10000)
         if(eagle.isTouching(squirrel)){
squirrel.destroy();
available = "false";
score = score + 1;

         }
         spawnClouds();
         drawSprites();
    


 }
 text("Counter: "+ counter,100,50);
 text("Score: "+ score,500,50);
}


function squirrelspawn() {
squirrel = createSprite(Math.round(random(0,500)),Math.round(random(0,500)));
squirrel.addImage(squirrelImg);
squirrel.scale = 0.2;
}

function spawnClouds() {
    if(frameCount % 120 === 0){
        cloud = createSprite(700,10,10,10);
        cloud.y = Math.round(random(10,500));
        cloud.addImage(cloudImg);
        cloud.velocityX = -2;
eagle.depth = cloud.depth + 1;
    }
    




}
function destroySquirrel() {
    counter = counter + 1;
    if(counter == 30){
        squirrel.destroy();
        available = "false";
        counter = 0;
    }



}