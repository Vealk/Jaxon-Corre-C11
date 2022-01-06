
function preload(){
  //Colocando Imagens em uma "var" .
  pathImg = loadImage("path.png");
  RunnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //CRIE SPRITE AQUI
  var path,Corredor;
  var RunnerImg;
  var pathImg;
console.log("passei pela function setup");
  path = createSprite(200,0,400,1000);
  path.addImage(pathImg);
  path.scale = 1;
  Corredor = createSprite(200,200,70,70);
  Corredor.addImage(RunnerImg);
  Corredor.scale = 1
}
//FRAMES | |
//       V V
    
function draw() {
  background(black);
  
  if(path.y > 400)
    {
    path.y = height/2;
    }

  if(keyDown("right")){
    Corredor.x = Corredor.x + 2;
  }
  if(keyDown("left")){
   Corredor.x = Corredor.x - 2;
  }

  drawSprites();
}
