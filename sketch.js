const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var box1, box2;
var ground;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(250, 100, 60, 80);
  box2 = new Box(200, 300, 60, 60);
  ground = new Ground(width/2, 390, 400, 20);
}

function draw() {
  background(0);

  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
}