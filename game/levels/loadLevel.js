function loadLevel(level) {
  levelPlaying = level;
  boxes = [];
  barrels = [];
  walls = [];
  grounds = [];
  exitArray = []
  sourcesBarrels = []
  timeBarrels = []

  loadFile(level);

  player = new Player(1200 * 0.1, 900 * 0.9, 1200 / 60, 1200 / 60);
  time = 0;

  console.log(sourcesBarrels);
  timeLoad = millis();


}

function changeLevel(level) {
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

}

function loadWall() {

    for (var lineNum = 0 ; lineNum < levela.length ; lineNum++) {


      if (levela[lineNum] == "walls =") {
        wallArray = levela[lineNum + 1].split(";");

        for (var wallNumber = 0 ; wallNumber < wallArray.length - 1 ; wallNumber++ ) {
          wallParameter = wallArray[wallNumber].split(",");
          walls.push(new Ground(eval(wallParameter[0]),eval(wallParameter[1]),eval(wallParameter[2]),eval(wallParameter[3]),eval(wallParameter[4])));
        }
      }
      if (levela[lineNum] == "grounds =") {
        groundArray = levela[lineNum + 1].split(";");

        for (var groundNumber = 0 ; groundNumber < groundArray.length - 1 ; groundNumber++ ) {
          groundParameter = groundArray[groundNumber].split(",");
          grounds.push(new Ground(eval(groundParameter[0]),eval(groundParameter[1]),eval(groundParameter[2]),eval(groundParameter[3]),eval(groundParameter[4])));
        }
      }
      if(levela[lineNum] == "exit =") {
        exitArray = levela[lineNum + 1].split(",");
      }


      if (levela[lineNum] == "barrelsSources =") {
        sourcesArray = levela[lineNum + 1].split(";");

        for (var sourcesNumber = 0 ; sourcesNumber < sourcesArray.length - 1 ; sourcesNumber++ ) {
          sourcesParameter = sourcesArray[sourcesNumber].split(",");
          sourcesBarrels.push([eval(sourcesParameter[0]), eval(sourcesParameter[1]),eval(sourcesParameter[2]),eval(sourcesParameter[3])]);
          timeBarrels.push(0);
        }
        console.log(sourcesBarrels);
      }


    }
    console.log("load complete");
}

function loadFile(level) {
  levela = loadStrings('levels/'+ "level" + level +'.txt',loadWall);
}
