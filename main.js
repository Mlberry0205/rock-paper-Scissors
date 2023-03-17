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
var title = document.querySelector(".title");
var subtitle = document.querySelector(".subtitle");
var subtitleChange = document.querySelector(".subtitleTwo");
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
  title.classList.remove("hidden");
  displayWinner.innerHTML = `
  <img src="assets/${game.human.currentChoice}.png"  class="choice" alt="${game.human.currentChoice}">
  <img src="assets/${game.computer.currentChoice}.png"  class="choice" alt="">
  `
  showWinnerText()
}

function showWinnerText() {
  winnerText.classList.remove("hidden");
  title.classList.remove("hidden");
  if (game.winner === "human") {
  winnerText.innerText = "Player Wins!"
  } else if (game.winner === "computer") {
  winnerText.innerText = "Computer Wins!"
  } else if (game.winner === ""){
  winnerText.innerText = "Tie"
  }
}

function playGame(event) {
  changeGameButton.classList.add("hidden");
  title.classList.remove("hidden");
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
  title.classList.remove("hidden")
  subtitleChange.classList.remove("hidden");
  winnerText.classList.add("hidden");
  subtitle.classList.add("hidden");
  classicGameRules.classList.add("hidden");
  difficultGameRules.classList.add("hidden");
  classicIcons.classList.remove("hidden");
  difficultIcons.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
  iconChoices.classList.remove("hidden");
}

function playChallengeGame() {
  game.type = "difficult";
  title.classList.remove("hidden")
  subtitleChange.classList.remove("hidden");
  subtitle.classList.add("hidden");
  winnerText.classList.add("hidden");
  classicGameRules.classList.add("hidden");
  difficultGameRules.classList.add("hidden");
  classicIcons.classList.add("hidden");
  difficultIcons.classList.remove("hidden");
  changeGameButton.classList.remove("hidden");
  iconChoices.classList.remove("hidden");
}

function returnToHomePage() {
  subtitleChange.classList.add("hidden");
  subtitle.classList.remove("hidden");
  classicGameRules.classList.remove("hidden");
  difficultGameRules.classList.remove("hidden");
  classicIcons.classList.add("hidden");
  difficultIcons.classList.add("hidden");
  changeGameButton.classList.add("hidden");
  iconChoices.classList.add("hidden");
}
