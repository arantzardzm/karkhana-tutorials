/*////////////////////////*/
/*         SKETCH         */
/*////////////////////////*/

var bugs = [];
var r = 0;
var g = 0;
var b = 0;
var a = 0;
var al = 100;

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
  this.speed = .3;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    stroke(0,0,0,al);
    fill(r, g, b, a);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

//to implement simply onclick='editColor("tutorial")'
function editColor(slide){
  if (slide == "tutorial"){
    r = 144;
    g = 12;
    b = 63;
    a = 100;
    al = 0;
  }
}

function windowResized() {
  setup();
}
