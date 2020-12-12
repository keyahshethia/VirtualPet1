//Create variables here
var dog,dog1Img,dog2Img,database,foodS,foodStock;
function preload()
{
  dog1Img=  loadImage("images/dogImg.png");
  dog2Img = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  dog = createSprite(250,250,10,10);
  dog.addImage(dog2Img);
  dog.scale=0.3;
}


function draw() {  
  background(46,139,87);
   if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dog1Img);
   }


  drawSprites();
  fill(255,255,254);
   stroke("black");
    text("Food remaining : "+foodS,170,200);
     textSize(13);
      text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
 if(x<=0){
x=0;
 }
 else{
   x=x-1;
 }
  database.ref('/').update({
    Food:x
  })
}