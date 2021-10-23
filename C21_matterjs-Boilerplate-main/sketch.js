const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var rightWall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  /*var groundoptions={
    //gravity
    isStatic : true
  }
  ground = Bodies.rectangle(200,300,400,20,groundoptions);
  World.add(world,ground);*/

  ground = new Ground(200,390,400,20);
  rightWall = new Ground(390,200,20,400);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

 // rect(ground.position.x,ground.position.y,400,20);

  ground.display();
  rightWall.display();
}

