function loadLevel(level) {
  levelPlaying = level;
  boxes = [];
  barrels = [];
  walls = [];
  grounds = [];
  exitArray = [];
  sourcesBarrels = [];
  timeBarrels = [];
  menuText = [];
  exitObj = 0;

  loadFile(level);

  player = new Player(1200 * 0.1, 900 * 0.9, 1200 / 60, 1200 / 60);
  time = 0;

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

  World.remove(world, player.body);

  boxes = [];
  barrels = [];
  walls = [];
  grounds = [];
  exitArray = [];
  sourcesBarrels = [];
  timeBarrels = [];
  exitObj = 0;

}

function loadWall() {

  for (var lineNum = 0; lineNum < levela.length; lineNum++) {


    if (levela[lineNum] == "walls =") {
      wallArray = levela[lineNum + 1].split(";");

      for (var wallNumber = 0; wallNumber < wallArray.length - 1; wallNumber++) {
        wallParameter = wallArray[wallNumber].split(",");
        walls.push(new Ground(eval(wallParameter[0]), eval(wallParameter[1]), eval(wallParameter[2]), eval(wallParameter[3]), eval(wallParameter[4])));
      }
    }
    if (levela[lineNum] == "grounds =") {
      groundArray = levela[lineNum + 1].split(";");

      for (var groundNumber = 0; groundNumber < groundArray.length - 1; groundNumber++) {
        groundParameter = groundArray[groundNumber].split(",");
        grounds.push(new Ground(eval(groundParameter[0]), eval(groundParameter[1]), eval(groundParameter[2]), eval(groundParameter[3]), eval(groundParameter[4])));
      }
    }
    if (levela[lineNum] == "exit =") {
      exitArray = levela[lineNum + 1].split(",");
      exitObj = new Exit(eval(exitArray[0]), eval(exitArray[1]), eval(exitArray[2]), eval(exitArray[3]), eval(exitArray[4]));
    }


    if (levela[lineNum] == "barrelsSources =") {
      sourcesArray = levela[lineNum + 1].split(";");

      for (var sourcesNumber = 0; sourcesNumber < sourcesArray.length - 1; sourcesNumber++) {
        sourcesParameter = sourcesArray[sourcesNumber].split(",");
        sourcesBarrels.push([eval(sourcesParameter[0]), eval(sourcesParameter[1]), eval(sourcesParameter[2]), eval(sourcesParameter[3])]);
        timeBarrels.push(0);
      }
    }


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
    levela = loadStrings('levels/' + "level" + level + '.txt', loadWall);
  } else if (level == 0) {
    loadMenu();
  }

}
