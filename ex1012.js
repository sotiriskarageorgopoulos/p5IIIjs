// define two variables for the images
let choco1, choco2;
// use preload to load the image before setup
function preload() {
  choco1 = loadImage("images/choco.jpg");
}
function setup() {
  // create canvas with the same size as the images
  createCanvas(110,110);
  // create a new image
  choco2 = createImage(110, 110);
  // load the pixel array of the image in order to be able to manipulate them
  choco2.loadPixels();
  // go through each row of the choco1 image
  for (let y = 0; y < height; y++) {
    // go through the middle of the choco1 image to the end
    for (let x = 25; x < width; x++) {
      // use get() to take each pixel
      let myPixel = choco1.get(x, y);
      // set the x and y of the image
      choco2.set(x, y, myPixel);
    }
  }
  // update the pixel array of the choco2 image
  choco2.updatePixels();
  // display the new image
  image(choco2, 0, 0);
}