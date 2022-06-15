//------Global variables-----------

var game = new Game();
var classic = ["rock", "paper", "scissors"]
var difficult = ["rock", "paper", "scissors", "alien", "lizard"]

//--------Query Selectors----------

var classicGameRules = document.querySelector(".rules-box");
var difficultGameRules = document.querySelector(".rules-box-two");
var classicIcons = document.querySelector(".classic-icons");
var difficultIcons = document.querySelector(".difficult-icons");
var changeGameButton = document.querySelector(".change-game-button");
var columnGame = document.querySelector(".column-game");
var iconChoices = document.querySelector(".choices");
var subtitleChange = document.getElementById("#subtitle");
var displayWinner = document.querySelector(".show-winner");
var winnerText = document.querySelector(".winner");
var mainText = document.querySelector(".main-text");
var playerWins = document.querySelector(".player-wins");
var computerWins = document.querySelector(".computer-wins");

//--------Event Listeners----------

classicGameRules.addEventListener('click', playClassicGame);
difficultGameRules.addEventListener('click', playChallengeGame);
changeGameButton.addEventListener('click', returnToHomePage);
classicIcons.addEventListener('click', playGame);
difficultIcons.addEventListener('click', playGame);

//-----Functions-------------------

function showWinner() {
  classicIcons.classList.add("hidden");
  difficultIcons.classList.add("hidden");
  mainText.classList.add("hidden");
  displayWinner.innerHTML = `
  <img src="assets/${game.human.currentChoice}.png"  class="choice" alt="${game.human.currentChoice}">
  <img src="assets/${game.computer.currentChoice}.png"  class="choice" alt="">
  `
  if (game.winner === true) {
    winnerText.innerHTML = "Player Wins!"
  } else if (game.winner === false) {
    winnerText.innerHTML = "Player Loses!"
  }
}

function playGame(event) {
  changeGameButton.classList.add("hidden");
  var getPick = event.target.id
  getHumanChoice(getPick);
  game.computer.getCpuChoice(game);
  game.selectWinner();
  game.checkForDraw();
  game.checkWin();
  tallyScore();
  showWinner();
  setTimeout(reset, 3000);
}

function reset() {
  mainText.classList.remove("hidden");
  changeGameButton.classList.add("hidden");
    if (game.type === "classic") {
      playClassicGame()
    } else {
      playChallengeGame()
    }
    displayWinner.innerHTML = "";
}

function tallyScore() {
  playerWins.innerHTML = `Wins: ${game.human.win}`
  computerWins.innerHTML = `Wins: ${game.computer.win}`
}

function getHumanChoice(getPick) {
  game.human.currentChoice = getPick
}

function playClassicGame() {
  game.type = "classic";
  classicGameRules.classList.add("hidden");
  difficultGameRules.classList.add("hidden");
  classicIcons.classList.remove("hidden");
  difficultIcons.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
  iconChoices.classList.remove("hidden");
}

function playChallengeGame() {
  game.type = "difficult";
  classicGameRules.classList.add("hidden");
  difficultGameRules.classList.add("hidden");
  classicIcons.classList.add("hidden");
  difficultIcons.classList.remove("hidden");
  changeGameButton.classList.remove("hidden");
  iconChoices.classList.remove("hidden");
}

function returnToHomePage() {
  classicGameRules.classList.remove("hidden");
  difficultGameRules.classList.remove("hidden");
  classicIcons.classList.add("hidden");
  difficultIcons.classList.add("hidden");
  changeGameButton.classList.add("hidden");
  iconChoices.classList.add("hidden");
}
