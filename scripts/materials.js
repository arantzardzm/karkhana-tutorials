// var materials = function( p ) {
//   var Ax = 0;
//   var Ay = 0;
//   var Bx = 200;
//   var By = 100;
//   var Cx = 100;
//   var Cy = 40;
//   var Dx = 200;
//   var Dy = 10;
//
//   var speedAX;
//   var speedAY;
//   var speedBX;
//   var speedBY;
//   var speedCX;
//   var speedCY;
//   var speedDX;
//   var speedDY;
//
//   var ardu, bread, resist, leds;
//
//   p.setup = function() {
//     p.createCanvas(windowWidth, windowHeight/1.5);
//     p.ardu = loadImage('images/ardu.png');
//     p.bread = loadImage('images/bread.png');
//     p.resist = loadImage('images/resist.png');
//     p.leds = loadImage('images/leds.png');
//
//     speedAX = random(6);
//     speedAY = random(6);
//     speedBX = random(6);
//     speedBY = random(6);
//     speedCX = random(6);
//     speedCY = random(6);
//     speedDX = random(6);
//     speedDY = random(6);
//   };
//
//   p.draw = function() {
//
//     p.background(255);
//
//     Ax += speedAX;
//     Ay += speedAY;
//     Bx += speedBX;
//     By += speedBY;
//     Cx += speedCX;
//     Cy += speedCY;
//     Dx += speedDX;
//     Dy += speedDY;
//
//     if(Ax < 0 || Ax > p.windowWidth-p.ardu.height/6){
//       speedAX = speedAX * -1;
//     }
//     if(Bx < 0 || Bx > p.windowWidth-p.ardu.height/6){
//       speedBX = speedBX * -1;
//     }
//     if(Cx < 0 || Cx > p.windowWidth-p.ardu.height/6){
//       speedCX = speedCX * -1;
//     }
//     if(Dx < 0 || Dx > p.windowWidth-p.ardu.height/6){
//       speedDX = speedDX * -1;
//     }
//     if(Ay < 0 || Ay > p.windowHeight/2-p.ardu.height/6){
//       speedAY = speedAY * -1;
//     }
//     if(By < 0 || By > p.windowHeight/2-p.ardu.height/6){
//       speedBY = speedBY * -1;
//     }
//     if(Cy < 0 || Cy > p.windowHeight/2-p.ardu.height/6){
//       speedCY = speedCY * -1;
//     }
//     if(Dy < 0 || Dy > p.windowHeight/2-p.ardu.height/6){
//       speedDY = speedDY * -1;
//     }
//
//     p.image(p.ardu,Ax,Ay,p.ardu.width/6,p.ardu.height/6);
//     p.image(p.bread,Bx,By,p.bread.width/6,p.bread.height/6);
//     p.image(p.resist,Cx,Cy,p.resist.width/6,p.resist.height/6);
//     p.image(p.leds,Dx,Dy,p.leds.width/6,p.leds.height/6);
//   };
//
//   p.windowResized = function() {
//     p.resizeCanvas(windowWidth, windowHeight/2);
//   }
//
//
// };
// var myp5 = new p5(materials, 'c2');
