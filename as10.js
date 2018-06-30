var capture, capture1;
var myButton;
var playing = false;
var  camVideo;

function setup() {
 
  capture = createCapture(VIDEO);
  capture.size(400,300);
  image(capture, 0, 0, 500, 400);

 
  createCanvas(700,600);
  background(153,0,0);
  camVideo = createCapture(VIDEO);
  camVideo.hide();
  myButton = createButton('take pics');
  myButton.mousePressed(PausePlay);
}

function draw() {
 
    image(camVideo,0,0);
}
 

function PausePlay() {
  
    if (playing) {
     capture.pause();
      playing = false;
    }
    else {
      capture.loop();
      playing = true;
    }
  
  }