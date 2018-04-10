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

/*////////////////////////*/
/*       IMAGE BUBBLE     */
/*////////////////////////*/

function bubble(element, item) {
  if (item == 'ardu'){
    element.setAttribute('src', 'images/Ardu_bubble.png');
  } else if (item == 'bread'){
    element.setAttribute('src', 'images/Bread_bubble.png');
  }
}

/*////////////////////////*/
/*      TOGGLE SOUND      */
/*////////////////////////*/

var myAudio = document.getElementById("myAudio");
var isPlaying = true;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
