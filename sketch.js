var hypnoticBall, database;
var position;

var gameState=0;
var Playercount;

var form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();
}
function draw(){
 
}

function showError(){
  console.log("Error in writing to the database");
}
