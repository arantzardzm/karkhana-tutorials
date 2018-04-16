var obstacles;
var sprite;

function setup() {
  createCanvas(windowWidth,windowHeight);

  sprite = createSprite(0, windowHeight/1.2);
  sprite.addImage(loadImage("images/momo-car.png"));
  sprite.scale = 0.3;

  obstacles = new Group();

  for(var i=0; i<5; i++){
    var box = createSprite(width/2+(i*150), height-100);
    box.addImage(loadImage("images/car.png"));
    box.scale = 0.3;
    obstacles.add(box);
  }
}

function draw(){
  background(255);

  sprite.velocity.x = (mouseX-sprite.position.x)/10;
  sprite.velocity.y = 0;

  sprite.collide(obstacles);

  drawSprites();
}

function removeSketch(){
   remove();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
