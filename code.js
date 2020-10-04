var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a10827ae-bf7e-459b-be24-2063517ad9d5","aac8b9be-a812-44ac-9afc-861bd5a9ace1","20ea8b66-fec6-4809-b5fa-bb748af1616a","48dc9ef0-2f68-4614-b664-3dc34842185d","ee20e897-9897-41a8-be65-1889c48db711","8c97d8ad-0ef0-4853-8bce-771e330e7296","db4c8cfb-f81f-4224-8079-344afba18a83","d15f0bca-1194-4025-b82b-f96947234999","fb919e0d-04cd-4acc-99f3-6f47e12bc055","05e2e738-34e5-4fdc-9f54-f4ce397ba51a","ed4ad6d7-9e04-41db-a3f1-2c2a6611da72","9e380d13-3dff-4847-b570-c3c5ddce027a"],"propsByKey":{"a10827ae-bf7e-459b-be24-2063517ad9d5":{"name":"ground1","sourceUrl":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png","frameSize":{"x":1596,"y":26},"frameCount":1,"looping":true,"frameDelay":4,"version":"16DuGGB0GO2ub4Y.7TOGUqlFCRyWbOkP","loadedFromSource":true,"saved":true,"sourceSize":{"x":1596,"y":26},"rootRelativePath":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png"},"aac8b9be-a812-44ac-9afc-861bd5a9ace1":{"name":"ground","sourceUrl":null,"frameSize":{"x":2548,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"Xn1QObq24qz7UpElSB6Y7L0bJ9YbqyiY","loadedFromSource":true,"saved":true,"sourceSize":{"x":2548,"y":186},"rootRelativePath":"assets/aac8b9be-a812-44ac-9afc-861bd5a9ace1.png"},"20ea8b66-fec6-4809-b5fa-bb748af1616a":{"name":"sun","sourceUrl":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/20ea8b66-fec6-4809-b5fa-bb748af1616a.png","frameSize":{"x":500,"y":505},"frameCount":1,"looping":true,"frameDelay":4,"version":"NO50ioHilSFmPhZftpqpKKGHTDS2zVxV","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":505},"rootRelativePath":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/20ea8b66-fec6-4809-b5fa-bb748af1616a.png"},"48dc9ef0-2f68-4614-b664-3dc34842185d":{"name":"obstacle1","sourceUrl":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/48dc9ef0-2f68-4614-b664-3dc34842185d.png","frameSize":{"x":89,"y":151},"frameCount":1,"looping":true,"frameDelay":4,"version":"Ew2vyxQVmqOkfF4dDwgB3WpLL3jCPOFC","loadedFromSource":true,"saved":true,"sourceSize":{"x":89,"y":151},"rootRelativePath":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/48dc9ef0-2f68-4614-b664-3dc34842185d.png"},"ee20e897-9897-41a8-be65-1889c48db711":{"name":"restart","sourceUrl":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/ee20e897-9897-41a8-be65-1889c48db711.png","frameSize":{"x":769,"y":707},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZpnreyUC89YkLUyYjAfHbgT.NAy8yveR","loadedFromSource":true,"saved":true,"sourceSize":{"x":769,"y":707},"rootRelativePath":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/ee20e897-9897-41a8-be65-1889c48db711.png"},"8c97d8ad-0ef0-4853-8bce-771e330e7296":{"name":"cloud","sourceUrl":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/8c97d8ad-0ef0-4853-8bce-771e330e7296.png","frameSize":{"x":200,"y":68},"frameCount":1,"looping":true,"frameDelay":4,"version":"rwxYY.hiOoLRDpu9YHdSGroGBthVguFx","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":68},"rootRelativePath":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/8c97d8ad-0ef0-4853-8bce-771e330e7296.png"},"db4c8cfb-f81f-4224-8079-344afba18a83":{"name":"obstacle2","sourceUrl":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/db4c8cfb-f81f-4224-8079-344afba18a83.png","frameSize":{"x":156,"y":167},"frameCount":1,"looping":true,"frameDelay":4,"version":"lh0YhR_XM6EX.P5weSyTx0WJ5Rn8HvU1","loadedFromSource":true,"saved":true,"sourceSize":{"x":156,"y":167},"rootRelativePath":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/db4c8cfb-f81f-4224-8079-344afba18a83.png"},"d15f0bca-1194-4025-b82b-f96947234999":{"name":"gameOver","sourceUrl":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/d15f0bca-1194-4025-b82b-f96947234999.png","frameSize":{"x":988,"y":235},"frameCount":1,"looping":true,"frameDelay":4,"version":"3pVgRvPFQNfVEDNA1HardK83FYlJtV6B","loadedFromSource":true,"saved":true,"sourceSize":{"x":988,"y":235},"rootRelativePath":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/d15f0bca-1194-4025-b82b-f96947234999.png"},"fb919e0d-04cd-4acc-99f3-6f47e12bc055":{"name":"backdrop","sourceUrl":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/fb919e0d-04cd-4acc-99f3-6f47e12bc055.png","frameSize":{"x":400,"y":600},"frameCount":1,"looping":true,"frameDelay":4,"version":"iI0dffgInZjUpGLPMqJUf2ODurfqfr5j","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":600},"rootRelativePath":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/fb919e0d-04cd-4acc-99f3-6f47e12bc055.png"},"05e2e738-34e5-4fdc-9f54-f4ce397ba51a":{"name":"trex","sourceUrl":null,"frameSize":{"x":762,"y":762},"frameCount":2,"looping":true,"frameDelay":12,"version":"WTpDAUScV7sJNAdf0Xj5Y93oYNlCdh41","loadedFromSource":true,"saved":true,"sourceSize":{"x":762,"y":1524},"rootRelativePath":"assets/05e2e738-34e5-4fdc-9f54-f4ce397ba51a.png"},"ed4ad6d7-9e04-41db-a3f1-2c2a6611da72":{"name":"obstacle3","sourceUrl":null,"frameSize":{"x":809,"y":811},"frameCount":1,"looping":true,"frameDelay":12,"version":"QmdLdIT1GKiMesS4dhsxYQjG3tZhiWwy","loadedFromSource":true,"saved":true,"sourceSize":{"x":809,"y":811},"rootRelativePath":"assets/ed4ad6d7-9e04-41db-a3f1-2c2a6611da72.png"},"9e380d13-3dff-4847-b570-c3c5ddce027a":{"name":"trex_collided","sourceUrl":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/9e380d13-3dff-4847-b570-c3c5ddce027a.png","frameSize":{"x":809,"y":811},"frameCount":1,"looping":true,"frameDelay":4,"version":"oy.aBfUocJ1NvXBg2W7aY7NBtaMjeW9H","loadedFromSource":true,"saved":true,"sourceSize":{"x":809,"y":811},"rootRelativePath":"assets/v3/animations/2QKIuL9QQYZGRpii1BDuAAFWhyelmF6HyvGQKdyAD2k/9e380d13-3dff-4847-b570-c3c5ddce027a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var backdrop = createSprite(200,200,20,20);
backdrop.setAnimation("backdrop");

//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;

//create a trex sprite
var trex = createSprite(200,200,20,50);
trex.setAnimation("trex");

var sun = createSprite(334,50,20,20);
sun.setAnimation("sun");
sun.scale = 0.15;

//set collision radius for the trex
trex.setCollider("circle",0,0,30);

//scale and position the trex
trex.scale = 0.1;
trex.x = 50;

//create a ground sprite
var ground = createSprite(0,420,400,800);
ground.setAnimation("ground");
ground.scale = 0.8;

var ground1 = createSprite(0,420,400,800);
ground1.setAnimation("ground");
ground1.scale = 0.8;

//invisible Ground to support Trex
var invisibleGround = createSprite(20,350,400,5);
invisibleGround.visible = false;

//create Obstacle and Cloud Groups
var ObstaclesGroup = createGroup();
var CloudsGroup = createGroup();

//place gameOver and restart icon on the screen
var gameOver = createSprite(200,200);
var restart = createSprite(200,240);

gameOver.setAnimation("gameOver");
gameOver.scale = 0.5;

restart.setAnimation("restart");
restart.scale = 0.1;

gameOver.visible = false;
restart.visible = false;

//score
var count = 0;

function draw()
{
  //set background to white
  background("white");
 
  console.log(gameState);
  
  if(gameState === PLAY)
  {
    //move the ground
    ground.velocityX = -(8 + 3*count/100);
    //scoring
    count = count + Math.round(World.frameRate/60);
    
    if (count>0 && count%100 === 0)
    {
      playSound("assets/checkPoint.mp3");
    }
    
    if (ground.x < 0)
    {
      ground.x = ground.width/2;
    }
    
    ground.depth = trex.depth;
    trex.depth = trex.depth+1;
    
     //jump when the space key is pressed
    if(keyDown("space") && trex.y >= 340)
    {
      trex.velocityY = -12 ;
      playSound("assets/category_jump/arcade_game_jump_1.mp3");
    }
  
    //add gravity
    trex.velocityY = trex.velocityY + 0.8;
    
    //spawn the clouds
    spawnClouds();
  
    //spawn obstacles
    spawnObstacles();
    
    //End the game when trex is touching the obstacle
    if(ObstaclesGroup.isTouching(trex))
    {
      gameState = END;
      playSound("assets/category_hits/vibrant_game_hit_1.mp3");
    }
  }
  
  else if(gameState === END) 
  {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velocity of each game object to 0
    ground.velocityX = 0;
    
    trex.velocityY = 0;
    
    ObstaclesGroup.setVelocityXEach(0);
    
    CloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.setAnimation("trex_collided");
    
    //set lifetime of the game objects so that they are never destroyed
    ObstaclesGroup.setLifetimeEach(-1);
    CloudsGroup.setLifetimeEach(-1);
  }
  
  if(mousePressedOver(restart)) 
  {
    reset();
  }
  
  //console.log(trex.y);
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  drawSprites();
  
  //set text
  textSize(18);
  textFont("COMICSANS");
  
  //display score
  text("Score: "+ count,170, 100);
}

function reset(){
  gameState = PLAY;
  
  gameOver.visible = false;
  restart.visible = false;
  
  ObstaclesGroup.destroyEach();
  CloudsGroup.destroyEach();
  
  trex.setAnimation("trex");
  
  count = 0;
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,335,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    //obstacle.debug = true;
    //generate random obstacles
    
    var rand = Math.round(randomNumber(1,3));
    if(rand === 1)
    {
      obstacle.setAnimation("obstacle1");
      obstacle.scale = 0.5;
    }
    else if(rand === 2)
    {
      obstacle.setAnimation("obstacle2");
      obstacle.scale = 0.5;
    }
    else if(rand === 3)
    {
      obstacle.setAnimation("obstacle3");
      obstacle.scale = 0.25;
      obstacle.setCollider("rectangle",0,0,400,400,0);
    }
    
    obstacle.lifetime = 70;
    
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
    
    ground.depth = obstacle.depth;
    obstacle.depth = obstacle.depth+1;
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = randomNumber(280,320);
    cloud.setAnimation("cloud");
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
