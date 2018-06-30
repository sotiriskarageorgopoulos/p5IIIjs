/// create variable to hold microphone inpute
let myMic;
// create variables for RGB
let r,g,b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(123,23,45);
  // capture microphone sound
  myMic = new p5.AudioIn();
  // turn on microphone
  myMic.start();

}
function draw() {

  // get the audio level
  let myMicLevel = myMic.getLevel();
  // change ellipse fill according to microphone volume
  r = myMicLevel * 2000;
  g = myMicLevel * 1000;
  b = myMicLevel * 800;
  fill (r,g,b,50);
  // create a sketch which will be changing according to audio level
  // if the volume is greater or equal to 100
  if (myMicLevel * 8000>=100){
    // change its x position
    ellipse((200+(myMicLevel * 8000)), 200, 200);
  }
  else {
    // else change its y position
    ellipse(200, (200+(myMicLevel * 8000)), 200); 
  }
}
