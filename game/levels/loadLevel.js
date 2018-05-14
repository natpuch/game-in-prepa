function loadLevel() {
  boxes = [];
  barrels = [];
  walls = [];
  grounds = [];

  loadFile();

  player = new Player(1200 * 0.1, 900 * 0.9, 1200 / 60, 1200 / 60);
  timeBarrel = 0;
  time = 0;

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
    }
    console.log("load complete");
}

function loadFile() {
  levela = loadStrings('levels/level1.txt',loadWall);
}
