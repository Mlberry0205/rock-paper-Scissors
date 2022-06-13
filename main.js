//--------Query Selectors----------

var classicGame = document.querySelector()(".rules-box");
var challengeGame =document.querySelector()(".rules-box-two");
var changeGameButton = document.querySelector(".change-game-button");
var rockButton = document.querySelector("#rock");
var paperButton = document.querySelector("#paper");
var scissorsButton = document.querySelector("#scissors");


//--------Event Listeners----------
window.addEventListener("load", displayPage);
classicGame.addEventListener('click', playClassicGame);
challengeGame.addEventListener('click', playChallengeGame);
changeGameButton.addEventListener('click', changeGameButton);
rockButton.addEventListener('click', playRock);
paperButton.addEventListener('click', playPaper);
scissorsButton.addEventListener('click', playScissors);


//------Global variables-----------
var humanScore = 0;
var cpuScore = 0;
var game = new Game();

//-----Functions-------------------
function displayPage() {
  game = new Game();
}

function playGame() {
  game.humanChoice.takeTurn(event);
  game.computerChoice();
  game.selectWinner();
}


function playClassicGame() {
game.type = "ClASSIC";
classicGame.classList.add("hidden");
challengeGame.classList.add("hidden");
rockButton.classList.remove("hidden");
paperButton.classList.remove("hidden");
scissorsButton.classList.remove("hidden");
}


function playChallengeGame() {
game.type = "DIFFICULT";
classicGame.classList.add("hidden");
challengeGame.classList.add("hidden");
rockButton.classList.remove("hidden");
paperButton.classList.remove("hidden");
scissorsButton.classList.remove("hidden");
}

changeGameButton() {
classicGame.classList.remove("hidden");
challengeGame.classList.remove("hidden");
rockButton.classList.add("hidden");
paperButton.classList.add("hidden");
scissorsButton.classList.add("hidden");
}
