/*////////////////////////*/
/*      SKETCH TRAFFIC    */
/*////////////////////////*/

var bugs = [];
var sprite;
var box;
var box0;
var box1;
var box2;
var box3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i=0; i<70; i++) {
    bugs.push(new Jitter());
  }
  loadSprites();
}

function draw() {
  background(255,255,255,95);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();

    if (bugs.length > 70){
      bugs.splice(i, 1);
    }
  }
  drawingSprites();
}

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = .3;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    stroke(0,0,0,50);
    fill(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function windowResized() {
  setup();
}

function loadSprites(){
  createCanvas(windowWidth,windowHeight);

  sprite = createSprite(0, windowHeight/1.2);
  sprite.addImage(loadImage("images/momo-car.png"));
  sprite.scale = 0.3;

  box = createSprite(width/2, height-100);
  box.addImage(loadImage("images/car.png"));
  box.scale = 0.3;

  box0 = createSprite(width/2+150, height-100);
  box0.addImage(loadImage("images/car.png"));
  box0.scale = 0.3;

  box1 = createSprite(width/2+300, height-100);
  box1.addImage(loadImage("images/car.png"));
  box1.scale = 0.3;

  box2 = createSprite(width/2+450, height-100);
  box2.addImage(loadImage("images/car.png"));
  box2.scale = 0.3;

  box3 = createSprite(width/2+600, height-100);
  box3.addImage(loadImage("images/car.png"));
  box3.scale = 0.3;
}

function drawingSprites(){
  sprite.velocity.x = (mouseX-sprite.position.x)/10;
  sprite.velocity.y = 0;
  sprite.collide(box);
  drawSprites();
}

function removeSketch(){
   sprite.remove();
   box.remove();
   box0.remove();
   box1.remove();
   box2.remove();
   box3.remove();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
