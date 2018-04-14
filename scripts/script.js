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
}

function slideFunctionIn(item){
  document.getElementById(item).style.display = 'block';

  setTimeout(function appear(){
    document.getElementById(item).style.opacity = '.88';
    document.getElementById(item).style.transition = '.8s';
  }, 300);
}

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
    element.setAttribute('src',  'images/Temp.png');
  }
}

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
