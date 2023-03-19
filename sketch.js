var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState
var car1, car2
var car_1img, car_2img
var cars = []
var allPlayersInfo

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car_1img = loadImage("./assets/car1.png")
  car_2img = loadImage("./assets/car2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getgameState()
  game.start();

}

function draw() {
  background(backgroundImage);

  if(playerCount == 2){
    game.updateState(1)
  }

  if(gameState == 1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
