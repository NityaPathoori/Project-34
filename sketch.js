//Create variables here
var dog, happyDog;
var foodS, foodStock;
var database;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImage);
  
  database=firebase.database();
  foodstock=database.ref("Food");
  foodstock.on("value",readStock);
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }

  drawSprites();

  //add styles here
  textSize = 24;
  text = ("Press UP_ARROW Key To Feed Comet Milk!");
  fill("pink");
  stroke("purple");
}

//function to read values from DB
function readStock(data) {
  foodS = data.val();
}

//function to write values in DB
function writeStock(x) {
  if(x<-0) {
   x = 0;
  } else{
    x = x-1;
  }
  database.ref("/").update({
    food:x
  })
}




