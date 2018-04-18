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
/*     MATERIAL CHECK     */
/*////////////////////////*/

var score = 0;
var movingOn = 0;
var stringScore;

function checkMaterial(isCorrect, buttonid) {

  if (isCorrect == 'yes'){
    document.getElementById(buttonid).style.backgroundColor = 'rgb(35, 128, 5)';
    movingOn = movingOn + 1;
    score = score + 1;
    stringScore = 'Correct!'
  }
  if (isCorrect == 'no'){
    document.getElementById(buttonid).style.backgroundColor = 'rgb(155, 27, 0)';
    score = score - 1;
    stringScore = 'Incorrect! You dont need this material.'
  }

  document.getElementById('score').innerHTML = stringScore;
  // document.getElementById('score-1').innerHTML = 'Your score is ' + score;

  if (movingOn == 5){
    document.getElementById('ready-button').style.opacity = '1';
  }
};

/*////////////////////////*/
/*       DRAG & DROP      */
/*////////////////////////*/

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if(ev.target.nodeName !== "IMG"){
      ev.target.appendChild(document.getElementById(data));
    }

    var red_drag = document.getElementById('red_drag');
    var black_drag = document.getElementById('black_drag');

    var correct_red_drop = document.getElementById('red_div').contains(red_drag);
    var correct_black_drop = document.getElementById('black_div').contains(black_drag);

    var incorrect_red_drop = document.getElementById('red_div').contains(black_drag);
    var incorrect_black_drop = document.getElementById('black_div').contains(red_drag);

    if (correct_red_drop){
      document.getElementById("red_div").style.backgroundColor = 'green';
    } else if (incorrect_red_drop){
      document.getElementById("red_div").style.backgroundColor = 'red';
    }

    if (correct_black_drop){
      document.getElementById("black_div").style.backgroundColor = 'green';
    } else if (incorrect_black_drop){
      document.getElementById("black_div").style.backgroundColor = 'red';
    }

    if (correct_red_drop && correct_black_drop){
      document.getElementById('ready-button-1').style.display = 'block';
      document.getElementById('ready-button-1').style.opacity = '1';
    }
    // document.getElementById('score-1').innerHTML = stringScore + ' Your score is ' + score;
    // document.getElementById('score-2').innerHTML = 'Your score is ' + score;
}

function allowDrop2(ev) {
    ev.preventDefault();
}

function drag2(ev){
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if (ev.target.nodeName !== "IMG") {
      ev.target.appendChild(document.getElementById(data));
    }

    var leds_drag = document.getElementById('leds_drag');
    var blacks_drag = document.getElementById('blacks_drag');
    var green_drag = document.getElementById('green_drag');

    var correct_led_drop = document.getElementById('leds_div').contains(leds_drag);
    var correct_blacks_drop = document.getElementById('blacks_div').contains(blacks_drag);
    var correct_green_drop = document.getElementById('green_div').contains(green_drag);

    if (document.getElementById('leds_div').contains(blacks_drag) || document.getElementById('leds_div').contains(green_drag)){
      var incorrect_led_drop = document.getElementById('leds_div').contains(blacks_drag);
    }
    if (document.getElementById('blacks_div').contains(leds_drag) || document.getElementById('blacks_div').contains(green_drag)){
      var incorrect_blacks_drop = document.getElementById('blacks_div').contains(leds_drag);
    }
    if (document.getElementById('green_div').contains(leds_drag) || document.getElementById('green_div').contains(blacks_drag)){
      var incorrect_green_drop = document.getElementById('green_div').contains(leds_drag);
    }

    if (correct_led_drop){
      document.getElementById("leds_div").style.backgroundColor = 'green';
    } else if (incorrect_led_drop){
      document.getElementById("leds_div").style.backgroundColor = 'red';
    }

    if (correct_blacks_drop){
      document.getElementById("blacks_div").style.backgroundColor = 'green';
    } else if (incorrect_blacks_drop){
      document.getElementById("blacks_div").style.backgroundColor = 'red';
    }

    if (correct_green_drop){
      document.getElementById("green_div").style.backgroundColor = 'green';
    } else if (incorrect_green_drop){
      document.getElementById("green_div").style.backgroundColor = 'red';
    }

    if (correct_led_drop && correct_blacks_drop && correct_green_drop){
      document.getElementById('ready-button-2').style.opacity = '1';
    }
    // document.getElementById('score-2').innerHTML = stringScore + ' Your score is ' + score;
    // document.getElementById('score-2').innerHTML = 'Your score is ' + score;
}
