//QuerySelectors:
var classicGame = document.querySelector()("rules-box");
var challengeGame =document.querySelector()("rules-box-two");
var changeGameButton = document.querySelector("change-game-button");


//Event Listeners:
window.addEventListener("load", displayPage);
classicGame.addEventListener('click', playClassicGame);
challengeGame.addEventListener('click', playChallengeGame);
changeGameButton.addEventListener('click', mainPage);


//Global variables:
var humanScore = 0;
var cpuScore = 0;
var game = new Game();

//Functions:
function displayPage() {
  game = new Game();
}


playClassicGame() {
this.type = "Classic";
}

playChallengeGame() {

}

mainPage() {

}
