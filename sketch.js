let img1;

function preload(){

  img1 = loadImage("resources/media/flowers2.jpeg");
}


function setup() {
    createCanvas(400, 400);
   // img1 = loadImage("../media/flowers2.jpeg");
    //background(255);
  }
  
  function draw() {
    background(img1);
     if (mouseX < width/8) {
      
      rect(0, 0, width/8, height); // rec1
    } else if (mouseX < width/4) {
     
      rect(width/8, 0, width/8, height); // rec2
        } else if (mouseX < width/2.66) {
     
      rect(width/4, 0, width/8, height); // rec3
        } else if (mouseX < width/2) {
      
      rect(width/2.66, 0, width/8, height); // rec4
        } else if (mouseX < width/1.6) {
      
      rect(width/2, 0, width/8, height); // rec5
        } else if (mouseX < width/1.33) {
      
      rect(width/1.6, 0, width/8, height); // rec6
        } else if (mouseX < width/1.14) {
      
      rect(width/1.33, 0, width/8, height); // rec7
    } else {
      
      rect(width/1.14, 0, width/8, height); // rec8
    }
    
    
    
    
  }