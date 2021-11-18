 //variables, hate these guys
 var ballx = 300;
 var bally = 300;
 var ballSize = 10;
 var score = 0;
 var gameState = "L1";
 
//this is all preloads
function preload() {
  bg = loadImage('gamebackground.jpg');
  star = loadImage('pixelstar.png');
  watcher = loadImage('eyecursor.png');
  startscreen = loadImage('startscreen.jpg');
}

//setup, its all spaghetti
let bg;
function setup() {
  createCanvas(600, 600);
}



function draw() {
background(bg)


levelOne();

  text(("stars seen: " + score), width/2,40);
}//end of draw

function levelOne(){
  text('Level 1', width/2, height -20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  line (ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  //brb in hell
  image(star, ballx,bally,ballSize,ballSize);

} // end of level 1
