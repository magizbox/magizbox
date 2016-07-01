/**
 * Created by rain on 1/25/2016.
 */



var background_sprite_sheet;
var red_sprite, tnt_sprite, hal_sprite;
var message_sprite;
var block_sprites = [];
var MAX_X = 400, MAX_Y = 400;
var sprites = [];
var gameMap = "00030000" +
  "00003320" +
  "02231R10" +
  "0T____00" +
  "03_32020" +
  "01H30020" +
  "00000001" +
  "00002200";
var item_image_mapping = {
  "R": "./images/red.png",
  "0": "./images/block0.png",
  "1": "./images/block1.png",
  "2": "./images/block2.png",
  "3": "./images/block3.png",
  "T": "./images/tnt.png",
  "H": "./images/hal0.png",
};

var endGame = false;

function preload() {
  var background_frames = [{"name": "background0.png", "frame": {"x": "0", "y": "0", "width": "400", "height": "400"}}];
  background_sprite_sheet = loadSpriteSheet('./images/background.png', background_frames);
  message_sprite = createSprite(195, 195);
  message_sprite.addAnimation('game_over', './images/game_over.png');
  message_sprite.addAnimation('win', './images/win.png');
}

function gameInit(){
  endGame = false;
  message_sprite.visible = false;

  for(var i = 0; i < gameMap.length; i++){
    var item = gameMap[i];
    if(item != "_"){
      var x = i % 8;
      var y = floor(i / 8);
      var sprite = createSprite(25 + 50 * x, 25 + 50 * y);
      sprite.addAnimation('stand', item_image_mapping[item]);
      if(item == "R"){
        red_sprite = sprite;
      }
      if(item == "0" || item == "1" || item == "2" || item == "3" || item == "4"){
        block_sprites.push(sprite);
      }
      if(item == "T"){
        tnt_sprite = sprite;
      }
      if(item == "H"){
        hal_sprite = sprite;
      }
      sprites.push(sprite);
    }
  }

  message_sprite.depth = 1000;
}

function setup() {
  createCanvas(MAX_X, MAX_Y);
  noStroke();
  gameInit();
}

function draw() {
  clear();
  background(0);
  background_sprite_sheet.drawFrame('background0.png', 0, 0);

  drawSprites();
}

function isIllegal(){
  var offset = 25;
  var max_x = MAX_X - offset;
  var max_y = MAX_Y - offset;
  var min_x = offset;
  var min_y = offset;
  // boundary
  if(red_sprite.position.x < min_x || red_sprite.position.y < min_y || red_sprite.position.x > max_x|| red_sprite.position.y > max_y){
    return true;
  }
  // collapse
  var collapse = _.chain(block_sprites).find(function(item){ return item.position.equals(red_sprite.position) }).isObject().value();
  return collapse;

}

function checkFinish(){
  if(red_sprite.position.equals(hal_sprite.position)){
    console.log("WIN!")
    endGame = true;
    hal_sprite.addAnimation('splash', './images/splash.png');
    hal_sprite.changeAnimation('splash');
    setTimeout(function(){
      hal_sprite.visible = false;
      message_sprite.changeAnimation('win');
      message_sprite.visible = true;
    }, 200);
  }
  if(red_sprite.position.equals(tnt_sprite.position)){
    endGame = true;
    tnt_sprite.addAnimation('splash', './images/splash.png');
    tnt_sprite.changeAnimation('splash');
    red_sprite.addAnimation('die', './images/red_die.png');
    red_sprite.changeAnimation('die');
    setTimeout(function(){
      tnt_sprite.visible = false;
      message_sprite.changeAnimation('game_over');
      message_sprite.visible = true;
    }, 200);
    console.log("LOSE!")
  }
}

function keyPressed() {
  if(!endGame){
    console.log(red_sprite.position);
    if(keyCode === LEFT_ARROW){
      red_sprite.position.x -= 50;
      if(isIllegal()){
        red_sprite.position.x += 50;
      }
    }

    if(keyCode === RIGHT_ARROW){
      red_sprite.position.x += 50;
      if(isIllegal()){
        red_sprite.position.x -= 50;
      }
    }

    if(keyCode === UP_ARROW){
      red_sprite.position.y -= 50;
      if(isIllegal()){
        red_sprite.position.y += 50;
      }
    }

    if(keyCode === DOWN_ARROW){
      red_sprite.position.y += 50;
      if(isIllegal()){
        red_sprite.position.y -= 50;
      }
    }

    checkFinish();

  }
}
