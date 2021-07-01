var bullet,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1500, 500);
  
thickness=random(22,83)

  bullet = createSprite(50,200,40,10);
  wall=createSprite(1200,200,thickness,100);
  
  speed=random(300,321);
  weight=random(30,52);
  
  bullet.velocityX = speed
}

function draw() {
  background(225);
 
  if(bullet.isTouching(wall)){
  bullet.velocityX = 0; 
    var deformation=0.5 * weight * speed * speed/22509;
  if (deformation>180){
    bullet.shapeColor = "white";
  }  
     if (deformation<180 && deformation>100){
    wall.hapeColor = "green";
  }  
  if (deformation>100){
    wall.shapeColor = "red";
       }  
  }
  
  drawSprites();
}
