console.log("Hi Karkhana");

/*////////////////////////*/
/*       TRANSITION       */
/*////////////////////////*/

function slideFunction(first, second){
  document.getElementById(first).style.opacity = '0';
  document.getElementById(first).style.transition = '.8s'

  setTimeout(function disappear(){
    document.getElementById(first).style.display = 'none';
    document.getElementById(second).style.display = 'block';
  }, 900);

  setTimeout(function appear(){
    document.getElementById(second).style.opacity = '1';
    document.getElementById(second).style.transition = '1.6s';
  }, 1000);
};

function slideFunctionIn(item){
  document.getElementById(item).style.display = 'block';

  setTimeout(function appear(){
    document.getElementById(item).style.opacity = '.88';
    document.getElementById(item).style.transition = '.8s';
  }, 300);
};

/*////////////////////////*/
/*       IMAGE BUBBLE     */
/*////////////////////////*/

function bubble(element, item) {

  if (item == 'ardu'){
    element.setAttribute('src', 'images/Bubble_Ardu.png');
  } else if (item == 'ardu-1'){
    element.setAttribute('src', 'images/Ardu.png');
  }

  else if (item == 'bread'){
    element.setAttribute('src', 'images/Bubble_Bread.png');
  } else if (item == 'bread-1'){
    element.setAttribute('src', 'images/Bread.png');
  }

  else if (item == 'resist'){
    element.setAttribute('src', 'images/Bubble_Resist.png');
  } else if (item == 'resist-1'){
    element.setAttribute('src', 'images/Resist.png');
  }

  else if (item == 'led'){
    element.setAttribute('src', 'images/Bubble_Leds.png');
  } else if (item == 'led-1'){
    element.setAttribute('src', 'images/Leds.png');
  }

  else if (item == 'temp'){
    element.setAttribute('src', 'images/Bubble_Temp.png');
  } else if (item == 'temp-1'){
    element.setAttribute('src', 'images/Temp.png');
  }

};

/*////////////////////////*/
/*      TOGGLE SOUND      */
/*////////////////////////*/

var myAudio = document.getElementById("myAudio");
var isPlaying = true;

function togglePlay(){
  if (isPlaying) {
    myAudio.pause();
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function(){
  isPlaying = true;
  document.getElementById('soundw').innerHTML = 'SOUND:ON';
};
myAudio.onpause = function(){
  isPlaying = false;
  document.getElementById('soundw').innerHTML = 'SOUND:OFF';
};

/*////////////////////////*/
/*      CLICK SOUND      */
/*////////////////////////*/

function playClick() {
    audio = new Audio('sound/click.mp3');
    audio.play();
}

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

  if (movingOn == 5){
    document.getElementById('ready-button').style.opacity = '1';
  }
};

/*////////////////////////*/
/*     CONECTION CHECK    */
/*////////////////////////*/

var movingOnString = 0;
var connectionString;

function checkMaterialConnection(connection) {

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
  }
};
