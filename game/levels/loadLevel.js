function reload() {
  unloadLevel();
  loadWall();
  waitTime = millis();
  timeLoad = waitTime;
  waitCount = 0;
}


function loadLevel(level) {
  levelPlaying = level;
  boxes = [];
  barrels = [];
  walls = [];
  grounds = [];
  sourcesBarrels = [];
  menuText = [];
  exitsObj = [];
  players = [];

  loadFile(level);
  timeLoad = millis();
}

function changeLevel() {
  level = levelField.value();
  if (level == "") {
    level = levelPlaying;
  }
  unloadLevel();
  loadLevel(level);
}

function unloadLevel() {

  for (ground of grounds) {
    World.remove(world, ground.body);
  }
  for (wall of walls) {
    World.remove(world, wall.body);
  }

  for (barrel of barrels) {
    World.remove(world, barrel.body);
  }

  for (player of players) {
    World.remove(world, player.body);
  }


  boxes = [];
  barrels = [];
  walls = [];
  grounds = [];
  sourcesBarrels = [];
  exitsObj = [];
  players = [];
}

function loadWall() {

  for (var wallNumber = 0; wallNumber < levela.walls.length; wallNumber++) {
    walls.push(new Ground(levela.walls[wallNumber].x, levela.walls[wallNumber].y, levela.walls[wallNumber].w, levela.walls[wallNumber].h, eval(levela.walls[wallNumber].angle), levela.walls[wallNumber].wallJump));
  }


  for (var groundNumber = 0; groundNumber < levela.grounds.length; groundNumber++) {
    grounds.push(new Ground(levela.grounds[groundNumber].x, levela.grounds[groundNumber].y, levela.grounds[groundNumber].w, levela.grounds[groundNumber].h, eval(levela.grounds[groundNumber].angle), levela.grounds[groundNumber].wallJump));
  }

  for (var exitNumber = 0; exitNumber < levela.exits.length; exitNumber++) {
    exitsObj.push(new Exit(levela.exits[exitNumber].x, levela.exits[exitNumber].y, levela.exits[exitNumber].w, levela.exits[exitNumber].h, levela.exits[exitNumber].winTime));
  }


  for (var sourcesNumber = 0; sourcesNumber < levela.barrelsSources.length; sourcesNumber++) {
    sourcesBarrels.push(new BarrelsSource(levela.barrelsSources[sourcesNumber].x, levela.barrelsSources[sourcesNumber].y, levela.barrelsSources[sourcesNumber].radius, levela.barrelsSources[sourcesNumber].time, levela.barrelsSources[sourcesNumber].wallJump));
  }


  for (var playerNumber = 0; playerNumber < levela.players.length; playerNumber++) {
    players.push(new Player(levela.players[playerNumber].x, levela.players[playerNumber].y, levela.players[playerNumber].w, levela.players[playerNumber].h, playerNumber));
  }

  console.log("load complete");

}


function loadMenu() {

  menuText = [];

  for (var i = 1; i <= countLevels; i++) {
    menuText.push(["Level " + i, 100 + 200 * (i - 1), 100]);
    console.log(i);
  }
}



function loadFile(level) {
  if (level != 0) {
    levela = loadJSON('levels/' + "level" + level + '.json', loadWall);
  } else if (level == 0) {
    loadMenu();
  }

}