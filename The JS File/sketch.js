
let dino;
let scroll = 10;
let scrollBg = 0;
let uImg;
let tImg;
let bImg;
const cacti = [];
const spacing = 80;
let timer = spacing;
let r = 1;
let timerP;
let score = 0;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
 
  uImg = loadImage('unicorn.png');
  tImg = loadImage('train.png');
  bImg = loadImage('background.jpg');
}

// function mousePressed() {
//   cacti.push(new Cacti());
// }

function setup() {
  createCanvas(1500, 665);
    dino = new Dino();
  }
  
function keyPressed() {
  
  if (key == ' '/* && !checked*/) {
    dino.jump();
  }
}

function draw() {
  
  timer--;
  if (timer <= 0) {
    timer = 0;
    r = random(1);
    if (r < 0.015) {
      cacti.push(new Cacti());
      timer = spacing;
    }
  }
  
  image(bImg, -scrollBg, 0, width,height);
  image(bImg, -scrollBg + width, 0,width,height);
  
  if (scrollBg > width) {
    scrollBg = 0;
  }
  //background(bImg);
  fill(255)
  textSize(75);
  textFont('monospace');
  for (let c of cacti) {
    c.move();
    c.show();
    if (dino.hits(c)) {
      console.log('game over');
      text('GAME OVER', 570, 300);
      noLoop();
    }
  }

  if (frameCount % 10 == 0) {
    score++;
  }
  fill(255)
  textSize(25);
  textFont('monospace');
  text(`Score: ${score}`, 680, 150);

  

  dino.show();
  dino.move();

  scroll += 0.005;
  scrollBg += scroll / 5;
}