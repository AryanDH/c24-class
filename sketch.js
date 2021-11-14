const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,380,50,50);
    box2 = new Box(920,380,50,50);
    ground = new Ground(600,height,1200,20)

    pig1= new Pig(800,350)
    log1= new Log(810,340,300,PI/2)
    bird1= new Bird(100,100)

    box3= new Box(700,300,50,50);
    box4= new Box(920,300,50,50);
    pig3= new Pig(810,300)
    log2= new Log (810,250,300,PI/2)
    box5= new Box(810,250,50,50)
    log3= new Log (760,120,150,PI/7)
    log4= new Log (870,120,150,-PI/7)


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    bird1.display();
    ground.display();
    box3.display();
    box4.display();
    pig3.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();

    
}