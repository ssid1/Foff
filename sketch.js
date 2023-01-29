let img2; // Declare variable 'img'.

let citys =[];
let numCitys = 14;
let s = 0;
let switcher, animate, interval, previousMillis;

function preload(){

  let city1 = loadImage('image (1).jpg');
  let city2 = loadImage('image (2).jpg');
  let city3 = loadImage('image (3).jpg');
  let city4 = loadImage('image (4).jpg');
  let city5 = loadImage('image (5).jpg');
  let city6 = loadImage('image (6).jpg');
  let city7 = loadImage('image (7).jpg');
  let city8 = loadImage('image (8).jpg');
  let city9 = loadImage('image (9).jpg');
  let city10 = loadImage('image (10).jpg');
  let city11 = loadImage('image (11).jpg');
  let city12 = loadImage('image (12).jpg');
  let city13 = loadImage('image (13).jpg');
  let city14 = loadImage('image (14).jpg');
  citys = [city1,city2,city3,city4,city5,city6,city7,city8,city9,city10,city11,city12,city13,city14];
  img = loadImage('finger.png') ;
}

function setup() {
  createCanvas(640, 480);
  //imageMode(CENTER);

  switcher = 0;
  animate = 0;
  interval = 1;
  previousMillis = 0;
  noLoop();
}

function update(){
  
}

function draw() {
  background(0);  
switcher = animate % 14;
//print(switcher);

let lerpImg = citys[switcher % 14];

image(lerpImg, 0, 0);

let currentMillis = millis();

if (interval <= 250) {
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    animate++;
   }
  interval = lerp(interval, 10000, 0.0001);
} else {
  interval = random(1000,2000);
}

print(interval);

if (animate <= 40) {

}
push();
translate(130+s,100);
image(img, 0, 0, img.width/10, img.height/10);
pop();
  //circle(280,330,120);
  //circle(280,400,90);2
  //circle(263,480,90);3
  //circle(271,440,90);4
  //circle(279,285,90);5
  //circle(279,220,25);6
  //circle(279,240,25);7
  //circle(275,195,30);8
}

function mousePressed(){

let d = dist(mouseX , mouseY, 280, 330);
let d2 = dist(mouseX , mouseY, 280, 400);
let d3 = dist(mouseX , mouseY, 263, 480);
let d4 = dist(mouseX , mouseY, 271, 440);
let d5 = dist(mouseX , mouseY, 279, 285);
let d6 = dist(mouseX , mouseY, 279, 220);
let d7 = dist(mouseX , mouseY, 279, 240);
let d8 = dist(mouseX , mouseY, 275, 195);
 
if(d < 60 || d2 < 50 || d3 < 50 || d4 < 50 || d5 < 40 || d6 < 10 || d7 < 10 || d8 < 10){
  
  console.log("yes");
  t = 0;
  s = 20;
  
  }
  loop();
}

function mouseReleased() {
  interval = 0;
  s = 0;
}