/*////////////////////////*/
/*         SKETCH         */
/*////////////////////////*/

var bugs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i=0; i<70; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(255,255,255);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();

    if (bugs.length > 70){
      bugs.splice(i, 1);
    }
  }
}

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    stroke(0,0,0,100);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function windowResized() {
  setup();
}
