var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","5cd0b2fc-32d0-40e1-94da-10b110affa88","72bdbc98-ee90-44a6-9578-f3178a34f57c","9e266a44-9a80-4e91-993d-b41ea5000ddc","d3f581bb-6d69-43bd-80b2-a01b3cdcf509","cd079954-cee2-4f47-8d76-e0d65ac470c7","81eefc66-381c-4e88-a565-95532e9e54d2"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"ngLqX48kqJiBADzkdkOMJCMwDJ9WufQk","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"kmb69Nsii7Yqmi1KRV1QjuQGS83tsvua","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"uMtyt_C.2p16LL_IsNBVZjXqocYcyKRU","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/3221caad-ae37-4eec-92a8-56bae4769e66.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"yqpu2vFgfafF3EBr9VfmYF5QN1VrxKPA","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"5cd0b2fc-32d0-40e1-94da-10b110affa88":{"name":"background_landscape09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"},"72bdbc98-ee90-44a6-9578-f3178a34f57c":{"name":"robot1","sourceUrl":"assets/api/v1/animation-library/gamelab/JwtCeTHgy85COA5cC0sPa_VIOH2nMlSE/category_robots/robot_02.png","frameSize":{"x":262,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"JwtCeTHgy85COA5cC0sPa_VIOH2nMlSE","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":262,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JwtCeTHgy85COA5cC0sPa_VIOH2nMlSE/category_robots/robot_02.png"},"9e266a44-9a80-4e91-993d-b41ea5000ddc":{"name":"robot2","sourceUrl":"assets/api/v1/animation-library/gamelab/TQLQS4N5N65EoHWE_QQsm5sJb90US0MD/category_robots/robot_03.png","frameSize":{"x":214,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"TQLQS4N5N65EoHWE_QQsm5sJb90US0MD","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":214,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TQLQS4N5N65EoHWE_QQsm5sJb90US0MD/category_robots/robot_03.png"},"d3f581bb-6d69-43bd-80b2-a01b3cdcf509":{"name":"robot3","sourceUrl":"assets/api/v1/animation-library/gamelab/xzMc5zjvQAPcTWck00Co5Syx17hULrjo/category_robots/robot_06.png","frameSize":{"x":256,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"xzMc5zjvQAPcTWck00Co5Syx17hULrjo","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xzMc5zjvQAPcTWck00Co5Syx17hULrjo/category_robots/robot_06.png"},"cd079954-cee2-4f47-8d76-e0d65ac470c7":{"name":"ba","sourceUrl":null,"frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":12,"version":"TVTqxD80rFa6PwXquE74Di1zDLBVhKW1","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/cd079954-cee2-4f47-8d76-e0d65ac470c7.png"},"81eefc66-381c-4e88-a565-95532e9e54d2":{"name":"hero2","sourceUrl":null,"frameSize":{"x":200,"y":138},"frameCount":1,"looping":true,"frameDelay":12,"version":"_DdCJK6kGBxy6NduDrpeYBwnxd56MJZJ","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":138},"rootRelativePath":"assets/81eefc66-381c-4e88-a565-95532e9e54d2.png"}}};
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

var b = createSprite(200,200);
 b.setAnimation("b")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("hero2");
hero.scale=.2;
enemy1.setAnimation("robot1");
enemy1.scale=.1;
enemy2.setAnimation("robot2");
enemy2.scale=.1;
enemy3.setAnimation("robot3");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);

textSize(20)
  fill("blue")
  text("Score:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  
function draw() {
  
background("white");

edges=createEdgeSprites()

textSize(20)
  fill("blue")
  text("Score:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);


enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+4
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-4
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+4
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}

drawSprites()
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
