/*////////////////////////*/
/*     MATERIAL CHECK     */
/*////////////////////////*/

var string;
var total = 0;
var movingOn = 0;

function checkMaterial(isCorrect, buttonid) {

  if (isCorrect == 'yes'){
    document.getElementById(buttonid).style.backgroundColor = 'rgb(35, 128, 5)';
    movingOn = movingOn + 1;
    total = total + 1;
    string = 'Correct! Your score is: ' + total;
  }
  if (isCorrect == 'no'){
    document.getElementById(buttonid).style.backgroundColor = 'rgb(155, 27, 0)';
    total = total - 1;
    string = 'Incorrect! You dont need this material. Your score is: ' + total;
  }

  document.getElementById('score').innerHTML = string;

  if (movingOn == 6){
    document.getElementById('ready-button').style.opacity = '1';
    document.getElementById('ready-button').style.display = 'block';
  }
};

/*////////////////////////*/
/*     CONECTION CHECK    */
/*////////////////////////*/

var movingOnString = 0;
var connectionString;

function checkMaterialConnection(connection, button) {

  if (connection == '5V'){
    document.getElementById('5V-button').style.backgroundColor = 'rgb(35, 128, 5)';
    document.getElementById('GND-button').style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById('+-button').style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById('--button').style.backgroundColor = 'rgb(255, 255, 255)';
    movingOnString = movingOnString + 1;
    connectionString = 'The 5V connection gives the circuit the necessary energy to work.'
  }
  if (connection == 'GND'){
    document.getElementById('5V-button').style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById('GND-button').style.backgroundColor = 'rgb(35, 128, 5)';
    document.getElementById('+-button').style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById('--button').style.backgroundColor = 'rgb(255, 255, 255)';
    movingOnString = movingOnString + 1;
    connectionString = 'The GND connection allows the energy to return to its original point and close the circuit.';
  }
  if (connection == '+'){
    document.getElementById('5V-button').style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById('GND-button').style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById('+-button').style.backgroundColor = 'rgb(35, 128, 5)';
    document.getElementById('--button').style.backgroundColor = 'rgb(255, 255, 255)';
    movingOnString = movingOnString + 1;
    connectionString = 'The 5V must be connected to a positive + hole of the breadboard.'
  }
  if (connection == '-'){
    document.getElementById('5V-button').style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById('GND-button').style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById('+-button').style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById('--button').style.backgroundColor = 'rgb(35, 128, 5)';
    movingOnString = movingOnString + 1;
    connectionString = 'The GND must be connected to a negative - hole of the breadboard.';
  }

  document.getElementById('score-1').innerHTML = connectionString;

  if (movingOnString == 4){
    document.getElementById('ready-button-1').style.opacity = '1';
    document.getElementById('ready-button-1').style.display = 'block';
  }
};

/*////////////////////////*/
/*     RESISTOR CHECK     */
/*////////////////////////*/

var movingOnStringResistor = 0;
var resistorString;

function checkResistorConnection(resistor, button) {

  if (resistor == 'breadResistor'){
    document.getElementById(button).style.backgroundColor = 'rgb(35, 128, 5)';
    movingOnStringResistor = movingOnStringResistor + 1;
    resistorString = 'The resistors limit the amount of current in the circuit! This keeps your components from overheating. Make sure the resistor are connected to the - holes of the breadboard and to the center rows.';
  }

  document.getElementById('score-2').innerHTML = resistorString;

  if (movingOnStringResistor == 1){
    document.getElementById('ready-button-2').style.opacity = '1';
    document.getElementById('ready-button-2').style.display = 'block';
  }
};

/*////////////////////////*/
/*       LEDS CHECK       */
/*////////////////////////*/

var movingOnStringLeds = 0;
var ledsString;

function checkLedsConnection(led, button) {

  if (led == 'breadLeds'){
    document.getElementById(button).style.backgroundColor = 'rgb(35, 128, 5)';
    movingOnStringLeds = movingOnStringLeds + 1;
    ledsString = 'The LEDs will light up your circuit with their different colors! Make sure the small leg of the LED is connected to the same row as the resistor, but in a different row than its long leg. The long leg recieves the + charge and the short let the - charge.';
  }

  document.getElementById('score-3').innerHTML = ledsString;

  if (movingOnStringLeds == 1){
    document.getElementById('ready-button-3').style.opacity = '1';
    document.getElementById('ready-button-3').style.display = 'block';
  }
};

/*////////////////////////*/
/*       WIRES CHECK      */
/*////////////////////////*/

var movingOnStringWires = 0;
var wiresString;

function checkWiresConnection(wires, button) {

  if (wires == 'wireLeds'){
    document.getElementById(button).style.backgroundColor = 'rgb(35, 128, 5)';
    document.getElementById('11-button').style.backgroundColor = 'rgb(255, 255, 255)';
    movingOnStringWires = movingOnStringWires + 1;
    wiresString = 'These wires connect the LEDs on the breadboard to the Arduino. Make sure the wires are connected to the same row as the long leg of the LED.';
  }

  if (wires == '11'){
    document.getElementById('wireLeds-button').style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById(button).style.backgroundColor = 'rgb(35, 128, 5)';
    movingOnStringWires = movingOnStringWires + 1;
    wiresString = 'Each of the cables goes into a pin of the Arduino to complete the circuit!';
  }

  document.getElementById('score-4').innerHTML = wiresString;

  if (movingOnStringWires == 2){
    document.getElementById('ready-button-4').style.opacity = '1';
    document.getElementById('ready-button-4').style.display = 'block';
  }
};


/*////////////////////////*/
/*       SENSOR CHECK      */
/*////////////////////////*/

var movingOnStringTemp = 0;
var tempString;

function checkTempConnection(temp, button) {

  if (temp == 'temp'){
    document.getElementById(button).style.backgroundColor = 'rgb(35, 128, 5)';
    document.getElementById('ao-button').style.backgroundColor = 'rgb(255, 255, 255)';
    movingOnStringTemp = movingOnStringTemp + 1;
    tempString = 'These temperature sensor will allow you to detect the zombies! The front of the sensor is the curve, make sure the left leg of the sensor is connected to -, the right leg of the sensor is connected to +, and the middle leg is connected to the A0 pin';
  }

  if (temp == 'ao'){
    document.getElementById('breadtemp-button').style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById(button).style.backgroundColor = 'rgb(35, 128, 5)';
    movingOnStringTemp = movingOnStringTemp + 1;
    tempString = 'The cable will go into an analog pin of the Arduino so values can be read in the code!';
  }

  document.getElementById('score-5').innerHTML = tempString;

  if (movingOnStringTemp == 2){
    document.getElementById('ready-button-5').style.opacity = '1';
    document.getElementById('ready-button-5').style.display = 'block';
  }
};

/*////////////////////////*/
/*       CODE CHECK       */
/*////////////////////////*/

var movingOnStringCode = 0;
var codeString;

function checkPseudo(isCorrect, button) {

  if (isCorrect == 'yes'){
    document.getElementById(button).style.backgroundColor = 'rgb(35, 128, 5)';
    movingOnStringCode = movingOnStringCode + 1;
    total = total + 1;
    codeString = 'Correct Code! Your score is: ' + total;
  }
  if (isCorrect == 'no'){
    document.getElementById(button).style.backgroundColor = 'rgb(155, 27, 0)';
    total = total - 1;
    codeString = 'Incorrect Code! Your score is: ' + total;
  }

  document.getElementById('score-6').innerHTML = codeString;
  document.getElementById('finalscore').innerHTML = 'Your final score is: ' + total;

  if (movingOnStringCode == 1){
    document.getElementById('ready-button-6').style.opacity = '1';
    document.getElementById('ready-button-6').style.display = 'block';
  }
};
