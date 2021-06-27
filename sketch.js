gameState = PLAY;
gameState = END;

var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var turn = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);

 textSize(20)
    text("500", 30,700);

    textSize(20)
    text("500", 100,700);

    textSize(20)
    text("500", 170,700);

    textSize(20)
    text("500", 250,700);

    textSize(20)
    text("200", 340,700);

    textSize(20)
    text("200", 430,700);

    textSize(20)
    text("200", 490,700);

    textSize(20)
    text("100", 590,700);

    textSize(20)
    text("100", 650,700);

    textSize(20)
    text("100", 730,700);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {

     divisions[k].display();
    
   }
  
   for (var k = 0; k < divisions.length; k++) {

    
   
  }
  
}

function mousePressed(){
  if (gameState!=="end")
  {
    count++;
    particles=new Particle(mouseX, 10, 10, 10);
  }
}