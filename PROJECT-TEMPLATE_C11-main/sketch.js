
var barco;
var barcoAndando;
var mar, marImagem;

function preload() {
barcoAndando = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4");
marImagem = loadImage("sea.png");


}
function setup() {
    createCanvas(600, 200);
    barco = createSprite(50,180,50,50);
    barco.addAnimation("Andando",barcoAndando);
    barco.scale = 0.5;
    
    mar = createSprite(300,190,600,20);
    mar.addImage(marImagem)
    mar.velocityX = -4;
}



function draw() {
    background("lightblue")
    
    drawSprites();
}