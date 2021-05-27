var backImg,catStopImg,catRunImg,catLastImg,mouseStopImg,mouseTeasingImg,mouseLastImg;
var backGround,cat,mouse;

function preload() {
    //load the images here

    backImg = loadImage("garden.png");

    catStopImg = loadImage("cat1.png");
    catRunImg = loadAnimation("cat2.png","cat3.png");
    catLastImg = loadAnimation("cat4.png");

    mouseStopImg = loadImage("mouse1.png");
    mouseTeasingImg = loadAnimation("mouse2.png","mouse3.png");
    mouseLastImg = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    backGround = createSprite(500,380,10,10);
    backGround.addImage("BG",backImg);
    backGround.scale=1;

    cat = createSprite(800,610,10,10);
    cat.addImage("catStop",catStopImg);
    cat.scale=0.13;
    

    mouse = createSprite(150,610,10,10);
    mouse.addImage("mouseStop",mouseStopImg);
    mouse.scale=0.12;
    

}

function draw(){
    background(255);
   
    if( (cat.x - (mouse.x + 45)) < (cat.width - mouse.width) ){
       cat.addAnimation("catLast",catLastImg);
       cat.changeAnimation("catLast");
       cat.scale=0.16;
       cat.velocityX=0;
       cat.y=600;
       cat.x=230;

       mouse.addAnimation("mouseLast",mouseLastImg);
       mouse.changeAnimation("mouseLast");
       mouse.scale=0.12;
    }


    drawSprites();  
}

function keyPressed(){

    if(keyDown(LEFT_ARROW)){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catRunImg);
        cat.changeAnimation("catRunning");
        cat.scale=0.16;

        mouse.addAnimation("mouseTeasing",mouseTeasingImg);
        mouse.changeAnimation("mouseTeasing");
        mouse.scale=0.12;
    }


}