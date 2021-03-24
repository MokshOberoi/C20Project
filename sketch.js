var backgroundImage , bg;
var cat , catGoing , catImage , mouse1 , mouseGift , mouseImage ;

function preload() {
    //load the images here
    backgroundImage = loadImage("./images/garden.png");

    catGoing = loadAnimation("./images/tomTwo.png","./images/tomThree.png")
    catImage = loadAnimation ("./images/tomOne.png");
    catSitting = loadAnimation ("./images/tomFour.png");

    mouseImage = loadAnimation ("./images/jerryOne.png")
    mouseBetween = loadAnimation ( "./images/jerryTwo.png","./images/jerryThree.png");
    mouseLast = loadAnimation ("./images/jerryFour.png");


}

function setup(){
    createCanvas(1000,800);

    bg = createSprite(500,400);
    bg.addImage(backgroundImage);

    //create tom and jerry sprites here
    mouse1 = createSprite(200, 600);
    mouse1 .addAnimation("jerryStanding", mouseImage);
    mouse1 .scale = 0.15;  

    cat = createSprite(870,600);
    cat.addAnimation("tomSleeping", catImage);
    cat .scale = 0.2;


}

function draw() {

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse1.x < (cat.width - mouse1.width)/2){
        cat.velocityX=0;
        cat.addAnimation("tomLastImage", catSitting);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("tomLastImage");
        mouse1.addAnimation("jerryLastImage", mouseLast);
        mouse1.scale=0.15;
        mouse1.changeAnimation("jerryLastImage");
       }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.velocityX = -5;

      cat.addAnimation("catRunning",catGoing);
      cat.changeAnimation("catRunning");

      mouse1.addAnimation("jerryTeasing", mouseBetween );
      mouse1 .frameDelay = 25;
      mouse1 .changeAnimation("jerryTeasing");


  }

}
