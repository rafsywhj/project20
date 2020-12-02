var   car, wall;
var speed, weight;
function setup() {
            // Setting Canvas Size
             createCanvas(1600, 400);
            
            // Setting random values for speed and weight. 
           //So that car will have different speed and different weight
            speed=random(55,90)
	weight=random(400,1500)

           // Creating car sprites and sets color white.  Car velocity is set to speed
	car=createSprite(50, 200, 50,50);   
            car.velocityX = speed;
	car.shapeColor=color(255);

           //Create wall and set color to grey
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}
function draw() {
  background(0);
  // Detecting collision from left side
    if(wall.x-car.x < (car.width+wall.width)/2){
                                                                                                                                
      // if collision is detected car should stop
              car.velocityX=0;
            // calculate damage
      var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0); //turns car to red color
    }
  
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0); //turns car to yellow color
    }
  
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0); //turns car to green color
              } 
     }   
  drawSprites();
    }  