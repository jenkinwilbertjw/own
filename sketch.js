var wall1 = createSprite(150, 320, 300, 2);
wall1.shapeColor = "yellow";

var wall2 = createSprite(300, 199, 2, 245);
wall2.shapeColor = "yellow";

var wall3 = createSprite(200, 76, 200, 2);
wall3.shapeColor = "yellow";

var wall4 = createSprite(100, 160, 2, 170);
wall4.shapeColor = "yellow";

var wall5 = createSprite(160, 245, 120, 2);
wall5.shapeColor = "yellow";

var wall6 = createSprite(220, 195, 2, 100);
wall6.shapeColor = "yellow";




var ding = createSprite(20, 360, 15, 15);
ding.shapeColor = "green";




var dong1 = createSprite(80, 360, 10, 10);
dong1.shapeColor = "white";
dong1.velocityY = 5;

var dong2 = createSprite(150, 360, 10, 10);
dong2.shapeColor = "orange";
dong2.velocityY = -5;

var dong3 = createSprite(220, 360, 10, 10);
dong3.shapeColor = "red";
dong3.velocityY = 5;

var dong4 = createSprite(290, 360, 10, 10);
dong4.shapeColor = "lightBlue";
dong4.velocityY = -5;

var dong5 = createSprite(350, 300, 10, 10);
dong5.shapeColor = "pink";
dong5.velocityX = 5;

var dong6 = createSprite(350, 240, 10, 10);
dong6.shapeColor = "cyan";
dong6.velocityX = -5;

var dong7 = createSprite(350, 180, 10, 10);
dong7.shapeColor = "salmon";
dong7.velocityX = 5;

var dong8 = createSprite(350, 120, 10, 10);
dong8.shapeColor = "chocolate";
dong8.velocityX = -5;

var dong9 = createSprite(290, 40, 10, 10);
dong9.shapeColor = "crimson";
dong9.velocityY = -5;

var dong10 = createSprite(220, 40, 10, 10);
dong10.shapeColor = "teal";
dong10.velocityY = 5;

var dong11 = createSprite(150, 40, 10, 10);
dong11.shapeColor = "lime";
dong11.velocityY = -5;

var dong12 = createSprite(50, 100, 10, 10);
dong12.shapeColor = "azure";
dong12.velocityX = -5;

var dong13 = createSprite(50, 170, 10, 10);
dong13.shapeColor = "aqua";
dong13.velocityX = 5;

var dong14 = createSprite(50, 240, 10, 10);
dong14.shapeColor = "coral";
dong14.velocityX = -5;

var dong15 = createSprite(115, 284, 10, 10);
dong15.shapeColor = "silver";
dong15.velocityY = -5;

var dong16 = createSprite(185, 284, 10, 10);
dong16.shapeColor = "tan";
dong16.velocityY = 5;

var dong17 = createSprite(255, 230, 10, 10);
dong17.shapeColor = "tan";
dong17.velocityX = 5;

var dong18 = createSprite(255, 160, 10, 10);
dong18.shapeColor = "tan";
dong18.velocityX = -5;






var target = createSprite(160, 190, 50, 50);
target.shapeColor = "yellow";





var death = 0;





createEdgeSprites();





function draw(){
  background("black");
  
  
  
  
dong1.bounceOff(wall1);
dong2.bounceOff(wall1);
dong3.bounceOff(wall1);
dong4.bounceOff(wall1);
dong5.bounceOff(wall2);
dong6.bounceOff(wall2);
dong7.bounceOff(wall2);
dong8.bounceOff(wall2);
dong9.bounceOff(wall3);
dong10.bounceOff(wall3);
dong11.bounceOff(wall3);
dong12.bounceOff(wall4);
dong13.bounceOff(wall4);
dong14.bounceOff(wall4);
dong15.bounceOff(wall5);
dong16.bounceOff(wall5);
dong17.bounceOff(wall6);
dong18.bounceOff(wall6);





dong1.bounceOff(bottomEdge);
dong2.bounceOff(bottomEdge);
dong3.bounceOff(bottomEdge);
dong4.bounceOff(bottomEdge);
dong5.bounceOff(rightEdge);
dong6.bounceOff(rightEdge);
dong7.bounceOff(rightEdge);
dong8.bounceOff(rightEdge);
dong9.bounceOff(topEdge);
dong10.bounceOff(topEdge);
dong11.bounceOff(topEdge);
dong12.bounceOff(leftEdge);
dong13.bounceOff(leftEdge);
dong14.bounceOff(leftEdge);

dong15.bounceOff(wall1);
dong16.bounceOff(wall1);
dong17.bounceOff(wall2);
dong18.bounceOff(wall2);






ding.bounceOff(wall1);
ding.bounceOff(wall2);
ding.bounceOff(wall3);
ding.bounceOff(wall4);
ding.bounceOff(wall5);
ding.bounceOff(wall6);
ding.bounceOff(edges);





text("TARGET", 126, 230);





text("Death: " + death, 340, 30);




if(keyDown("left")){
  ding.x = ding.x - 2;
}

if(keyDown("right")){
  ding.x = ding.x + 2;
}

if(keyDown("up")){
  ding.y = ding.y - 2;
}

if(keyDown("down")){
  ding.y = ding.y + 2;
}




if(ding.isTouching(dong1) || ding.isTouching(dong2) || ding.isTouching(dong3) || ding.isTouching(dong4) ||
   ding.isTouching(dong5) || ding.isTouching(dong6) || ding.isTouching(dong7) || ding.isTouching(dong8) ||
   ding.isTouching(dong9) || ding.isTouching(dong10) || ding.isTouching(dong11)||
   ding.isTouching(dong12)|| ding.isTouching(dong13)|| ding.isTouching(dong14) ||
   ding.isTouching(dong15)|| ding.isTouching(dong16) ||
   ding.isTouching(dong17)|| ding.isTouching(dong18)){
  death = death+1;
  ding.x = 20;
  ding.y = 360;
  playSound("sound://category_poof/puzzle_game_poof_bubble_02.mp3");
}
  
  
  
  if(ding.isTouching(target)){
    text("GAME_OVER,_YOU_WON", 140, 110, true);
    stopSound();
    target.destroy();
  }
  
  

  
  drawSprites();
}

playSound("sound://category_background/eerie_beginnings.mp3", true);

