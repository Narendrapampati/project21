var bullet , wall;
var speed, weight;
var thickness;

function setup() {
 createCanvas(1600,800);
 bullet = createSprite(50, 200, 40, 10);
 wall = createSprite(1200,270,thickness,400);
  speed = random(50,100);
  weight = random(400,1500);
  thickness = random(22,83);
  bullet.velocityX = speed;
}

function draw() {
  background("lightyellow");  

  bullet.shapeColor= "white";

  if(wall.x-bullet.x < (bullet.width+wall.width)/2 ){
    bullet.velocityX = 0;

    var deformation = 0.0375*weight*speed*speed/23000;

    if(deformation>10){
      bullet.shapeColor = "red";
    }
    
    if(deformation<10){
      bullet.shapeColor = "green";
    }
  }

  bullet.depth = wall.depth;
  bullet.depth = wall.depth+1;
  drawSprites();
}